import { Injectable } from '@nestjs/common';
import { DndApiService } from 'src/shared/dnd-api/dnd-api.service';
import { CharactersService } from 'src/characters/characters.service';
import {
  FeatureDetails,
  FeaturesApiResponse,
} from 'src/shared/dnd-api/dnd-api.types';

@Injectable()
export class OptimizationService {
  constructor(
    private readonly dndApiService: DndApiService,
    private readonly charactersService: CharactersService,
  ) {}

  async getFeaturesOptimizationById(id: number) {
    const character = await this.charactersService.getCharacterById(id);

    const fullFeaturesList = await this.getClassFeatures(character.class);
    const features = fullFeaturesList.filter(
      (feature) => character.level === feature.level,
    );

    return { character, features };
  }

  async getClassFeatures(characterClass: string) {
    // Fetch the list of features for the class
    const featuresList =
      await this.dndApiService.getApiResource<FeaturesApiResponse>(
        `classes/${characterClass.toLowerCase()}/features`,
      );

    // Resolve each feature's details
    const features = await Promise.all(
      featuresList.results.map(async (feature) => {
        const featureDetails =
          await this.dndApiService.getApiResource<FeatureDetails>(
            `features/${feature.index}`,
          );
        return featureDetails;
      }),
    );

    return features;
  }
}
