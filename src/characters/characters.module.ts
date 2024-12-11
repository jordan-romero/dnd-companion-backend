import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { PrismaService } from 'src/prisma.service';
import { DndApiService } from 'src/shared/dnd-api/dnd-api.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, PrismaService, DndApiService],
  exports: [CharactersService],
  imports: [SharedModule],
})
export class CharactersModule {}
