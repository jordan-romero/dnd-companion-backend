import { Module } from '@nestjs/common';
import { DndApiService } from './dnd-api/dnd-api.service';

@Module({
  providers: [DndApiService],
  exports: [DndApiService],
})
export class SharedModule {}
