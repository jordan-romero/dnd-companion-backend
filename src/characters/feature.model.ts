import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Character } from './character.model';

@ObjectType()
export class Feature {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  level: number;

  @Field(() => [String])
  description: string[];

  @Field(() => Character)
  character: Character;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
