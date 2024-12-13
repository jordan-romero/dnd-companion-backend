import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Feature } from './feature.model';

@ObjectType()
export class Character {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  race: string;

  @Field()
  class: string;

  @Field(() => Int)
  level: number;

  @Field(() => [Feature], { nullable: 'itemsAndList' })
  features: Feature[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
