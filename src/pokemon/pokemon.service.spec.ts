import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let pokemonService: PokemonService; // renamed variable to pokemonService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PokemonService],
    }).compile();

    pokemonService = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(pokemonService).toBeDefined();
  });
});

