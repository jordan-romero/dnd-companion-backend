import { Module } from '@nestjs/common';
import { OptimizationService } from './optimization.service';
import { OptimizationController } from './optimization.controller';
import { PrismaService } from 'src/prisma.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [OptimizationService, PrismaService],
  controllers: [OptimizationController],
  imports: [SharedModule],
})
export class OptimizationModule {}
