import { InputType, PartialType, Field } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto,
) {
  @Field((type) => String, { nullable: true })
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Field((type) => String, { nullable: true })
  @IsString()
  address: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @Length(5, 10)
  ownerName: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  categoryName: string;
}

@InputType()
export class UpdateRestaurantDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
