import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FeaturesService {
  constructor(private prisma: PrismaService) {}

  getFeaturesById(id: number) {
    return this.prisma.feature.findMany({
      where: { characterId: id },
    });
  }
}
