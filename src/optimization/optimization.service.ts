import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DndApiService } from 'src/shared/dnd-api/dnd-api.service';

@Injectable()
export class OptimizationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly dndApiService: DndApiService,
  ) {}

  async getOptimizationById(id: number) {
    const character = await this.prisma.character.findUnique({ where: { id } });
    if (!character) {
      throw new Error('Character not found');
    }
    const features = await this.getClassFeatures(character.class);
    return { character, features };
  }

  async getClassFeatures(characterClass: string) {
    return await this.dndApiService.getApiResource(
      `classes/${characterClass.toLowerCase()}/features`,
    );
  }
}
