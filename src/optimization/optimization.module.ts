import { Module } from '@nestjs/common';
import { OptimizationService } from './optimization.service';
import { OptimizationController } from './optimization.controller';
import { PrismaService } from 'src/prisma.service';
import { SharedModule } from 'src/shared/shared.module';
import { CharactersModule } from 'src/characters/characters.module';

@Module({
  providers: [OptimizationService, PrismaService],
  controllers: [OptimizationController],
  imports: [SharedModule, CharactersModule],
})
export class OptimizationModule {}
