import { Module } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeaturesController } from './features.controller';
import { PrismaService } from 'src/prisma.service';
import { SharedModule } from 'src/shared/shared.module';
import { CharactersModule } from 'src/characters/characters.module';

@Module({
  providers: [FeaturesService, PrismaService],
  controllers: [FeaturesController],
  imports: [SharedModule, CharactersModule],
})
export class FeaturesModule {}
