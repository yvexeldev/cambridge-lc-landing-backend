import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDescriptionCardDto {
  @ApiProperty({
    description: 'The title of description card',
    type: String,
    example: 'Bizning kurs 1',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The description of description card',
    type: String,
    example: 'lorem ipsum dolor sit',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The icon name of description card',
    type: String,
    example: 'fa fa-icon',
  })
  @IsNotEmpty()
  @IsString()
  readonly icon_name: string;
}

export class UpdateDescriptionCardDto {
  @ApiProperty({
    description: 'The updated title for the Description Card',
    type: String,
    example: 'updated title',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The updated description for the Description Card',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The updated icon name for the Description Card',
    type: String,
    example: 'fa fa-icon',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly icon_name: string;
}
