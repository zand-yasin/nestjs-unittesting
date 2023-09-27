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

  describe('createTweet', () => {
    it('should create tweet', () => {
      // Arrange
      service.tweets = [];
      const payload = 'This is my tweet';

      // Act
      const tweet = service.createTweet(payload);

      // Assert
      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });
  });

  describe('createTweet', () => {
    it('should create tweet', () => {
      // ...
    });

    it('should prevent tweets created which are over 100 characters', () => {
      // Arrange
      const payload =
        'This is a long tweet over 100 characters This is a long tweet over 100 characters This is a long t...';

      // Act
      const tweet = () => {
        return service.createTweet(payload);
      };

      // Assert
      expect(tweet).toThrowError();
    });
  });
});
