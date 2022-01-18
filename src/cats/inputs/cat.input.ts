import { Int, Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field(() => ID, { nullable: true })
  readonly id?: number;
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field()
  readonly breed: string;
}
