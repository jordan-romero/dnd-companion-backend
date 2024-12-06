import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}
  getAllCharacters() {
    return this.prisma.character.findMany();
  }
  getCharacterById(id: number) {
    return this.prisma.character.findUnique({
      where: {
        id,
      },
    });
  }
  async createCharacter(data: {
    name: string;
    race: string;
    class: string;
    level: number;
  }) {
    return this.prisma.character.create({
      data: {
        name: data.name,
        race: data.race,
        class: data.class,
        level: data.level,
      },
    });
  }
}
