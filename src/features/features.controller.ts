import { Controller, Get, Param } from '@nestjs/common';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get(':id/features')
  async getFeatures(@Param('id') id: number) {
    return this.featuresService.getFeaturesById(+id);
  }
}
