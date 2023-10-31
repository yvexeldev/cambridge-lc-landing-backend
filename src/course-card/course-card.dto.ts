import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseCardDto {
  @ApiProperty({
    description: 'The title of course card',
    type: String,
    example: 'Bizning kurs 1',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The description of course card',
    type: String,
    example: 'lorem ipsum dolor sit',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The image of course card',
    type: String,
    example: '/sdushdusd-sdsdsd.jpg',
  })
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}

export class UpdateCourseCardDto {
  @ApiProperty({
    description: 'The updated title for the Course Card',
    type: String,
    example: 'updated title',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The updated description for the Course Card',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The updated image url for the Course Card',
    type: String,
    example: '/sdushdusd.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly image: string;
}
