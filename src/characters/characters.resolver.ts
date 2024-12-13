import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { Character } from './character.model';
import { CreateCharacterDto } from './dto/create-character.dto';
@Resolver(() => Character)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [Character])
  getAllCharacters() {
    return this.charactersService.getAllCharacters();
  }

  @Query(() => Character, { nullable: true })
  getCharacterById(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.getCharacterById(id);
  }

  @Mutation(() => Character)
  createCharacter(@Args('characterData') characterData: CreateCharacterDto) {
    return this.charactersService.createCharacter(characterData);
  }

  @Mutation(() => Character)
  updateCharacter(
    @Args('id', { type: () => Int }) id: number,
    @Args('characterData') characterData: CreateCharacterDto,
  ) {
    return this.charactersService.updateCharacter(id, characterData);
  }
}
