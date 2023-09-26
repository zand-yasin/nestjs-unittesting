import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

// group related tests
describe('TweetsService', () => {
  let service: TweetsService;

  // handles any setup work, before test running.
  beforeEach(async () => {
   
    // access to all the methods inside the TweetsService
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  // tests...
  it('should be defined', () => {
    
    // ensuring that the TweetsService is defined.
    expect(service).toBeDefined();
  });
});
