import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length, IsOptional } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean)
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  address: string;

  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  ownerName: string;

  @Field((type) => String)
  @IsString()
  categoryName: string;
}
