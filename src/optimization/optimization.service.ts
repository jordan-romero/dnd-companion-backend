import { Injectable } from '@nestjs/common';
import { DndApiService } from 'src/shared/dnd-api/dnd-api.service';
import { CharactersService } from 'src/characters/characters.service';

@Injectable()
export class OptimizationService {
  constructor(
    private readonly dndApiService: DndApiService,
    private readonly charactersService: CharactersService,
  ) {}

  async getFeaturesOptimizationById(id: number) {
    const character = await this.charactersService.getCharacterById(id);
    const features = await this.getClassFeatures(character.class);
    return { character, features };
  }

  async getClassFeatures(characterClass: string) {
    return await this.dndApiService.getApiResource(
      `classes/${characterClass.toLowerCase()}/features`,
    );
  }
}
