import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getCharacters() {
    return [
      { id: 1, name: 'Aragorn', race: 'Human', class: 'Ranger' },
      { id: 2, name: 'Legolas', race: 'Elf', class: 'Rogue' },
      { id: 3, name: 'Ben', race: 'Human', class: 'Wizard' },
    ];
  }
}
