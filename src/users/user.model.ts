import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Character } from '../characters/character.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Character], { nullable: 'itemsAndList' })
  characters: Character[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
