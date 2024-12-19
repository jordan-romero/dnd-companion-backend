import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DndApiService } from 'src/shared/dnd-api/dnd-api.service';
import {
  FeatureDetails,
  FeaturesApiResponse,
} from 'src/shared/dnd-api/dnd-api.types';

@Injectable()
export class CharactersService {
  constructor(
    private prisma: PrismaService,
    private readonly dndApiService: DndApiService,
  ) {}
  getAllCharacters() {
    return this.prisma.character.findMany({
      include: { features: true },
    });
  }
  getCharacterById(id: number) {
    return this.prisma.character.findUnique({
      where: {
        id,
      },
      include: { features: true },
    });
  }
  async createCharacter(data: {
    name: string;
    race: string;
    class: string;
    level: number;
    userId: number;
  }) {
    return this.prisma.$transaction(async (tx) => {
      const character = await tx.character.create({
        data: {
          name: data.name,
          race: data.race,
          class: data.class,
          level: data.level,
          userId: data.userId,
        },
      });

      const featuresList =
        await this.dndApiService.getApiResource<FeaturesApiResponse>(
          `classes/${data.class.toLowerCase()}/features`,
        );

      const features = (
        await Promise.all(
          featuresList.results.map(async (feature) => {
            return this.dndApiService.getApiResource<FeatureDetails>(
              `features/${feature.index}`,
            );
          }),
        )
      ).filter((feature) => feature.level === data.level);

      await tx.feature.createMany({
        data: features.map((feature) => ({
          name: feature.name,
          level: feature.level,
          description: feature.desc,
          characterId: character.id,
        })),
      });

      return tx.character.findUnique({
        where: { id: character.id },
        include: { features: true },
      });
    });
  }
  async updateCharacter(
    characterId: number,
    characterData: {
      name: string;
      race: string;
      class: string;
      level: number;
    },
  ) {
    return this.prisma.$transaction(async (tx) => {
      // Get current character data
      const currentCharacter = await tx.character.findUnique({
        where: { id: characterId },
        include: { features: true },
      });

      // Update character basic info
      await tx.character.update({
        where: { id: characterId },
        data: characterData,
      });

      // If class or level changed, update features
      if (
        currentCharacter.class !== characterData.class ||
        currentCharacter.level !== characterData.level
      ) {
        // Delete existing features
        await tx.feature.deleteMany({
          where: { characterId },
        });

        // Fetch and create new features
        const featuresList =
          await this.dndApiService.getApiResource<FeaturesApiResponse>(
            `classes/${characterData.class.toLowerCase()}/features`,
          );

        const features = (
          await Promise.all(
            featuresList.results.map(async (feature) => {
              return this.dndApiService.getApiResource<FeatureDetails>(
                `features/${feature.index}`,
              );
            }),
          )
        ).filter((feature) => feature.level === characterData.level);

        await tx.feature.createMany({
          data: features.map((feature) => ({
            name: feature.name,
            level: feature.level,
            description: feature.desc,
            characterId,
          })),
        });
      }

      return tx.character.findUnique({
        where: { id: characterId },
        include: { features: true },
      });
    });
  }
}
