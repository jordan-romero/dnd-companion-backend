import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEnum, IsInt, IsString, Min } from 'class-validator';
import { DnDClassesEnum } from 'src/shared/dnd-api/dnd-api.types';

@InputType()
export class CreateCharacterDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  race: string;

  @Field(() => String)
  @IsEnum(DnDClassesEnum, { message: 'Invalid class value' })
  class: DnDClassesEnum;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  level: number;

  @Field(() => Int)
  @IsInt()
  userId: number;
}
