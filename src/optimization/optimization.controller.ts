import { Controller, Get, Param } from '@nestjs/common';
import { OptimizationService } from './optimization.service';

@Controller('optimization')
export class OptimizationController {
  constructor(private readonly optimizationService: OptimizationService) {}

  @Get(':id')
  async getOptimization(@Param('id') id: number) {
    return this.optimizationService.getOptimizationById(+id);
  }
}
