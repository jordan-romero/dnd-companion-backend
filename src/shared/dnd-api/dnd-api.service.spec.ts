import { Test, TestingModule } from '@nestjs/testing';
import { DndApiService } from './dnd-api.service';

describe('DndApiService', () => {
  let service: DndApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DndApiService],
    }).compile();

    service = module.get<DndApiService>(DndApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
