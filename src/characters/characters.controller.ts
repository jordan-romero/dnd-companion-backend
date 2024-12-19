import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}
  @Get()
  getAllCharacters() {
    return this.charactersService.getAllCharacters();
  }
  @Get(':id')
  async getCharacterById(@Param('id') id: string) {
    return this.charactersService.getCharacterById(+id);
  }
  @Post()
  async createCharacter(
    @Body()
    characterData: {
      name: string;
      race: string;
      class: string;
      level: number;
      userId: number;
    },
  ) {
    return this.charactersService.createCharacter(characterData);
  }

  @Put(':id')
  async updateCharacter(
    @Param('id') id: string,
    @Body()
    characterData: {
      name: string;
      race: string;
      class: string;
      level: number;
    },
  ) {
    return this.charactersService.updateCharacter(+id, characterData);
  }
}
