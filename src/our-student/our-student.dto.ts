import { IsNotEmpty, IsOptional, IsString, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOurStudentDto {
  @ApiProperty({
    description: 'The name of Student',
    type: String,
    example: 'Ketmonov Eshmat',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The IELTS overall level of Student',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly overall: string;

  @ApiProperty({
    description: 'The IELTS Listening level of Student',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly listening: string;

  @ApiProperty({
    description: 'The IELTS Reading level of Student',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly reading: string;

  @ApiProperty({
    description: 'The IELTS Writing level of Student',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly writing: string;

  @ApiProperty({
    description: 'The IELTS Speaking level of Student',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly speaking: string;

  @ApiProperty({
    description: 'The image of IELTS document',
    type: String,
    example: '/sdushdusd-sdsdsd.jpg',
  })
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}

export class UpdateOurStudentDto {
  @ApiProperty({
    description: 'The name of Student',
    type: String,
    example: 'Ketmonov Eshmat',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The IELTS overall level of Student',
    type: String,
    example: '8.5',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  readonly overall: string;

  @ApiProperty({
    description: 'The IELTS Listening level of Student',
    type: String,
    example: '8.5',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  readonly listening: string;

  @ApiProperty({
    description: 'The IELTS Reading level of Student',
    type: String,
    example: '8.5',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  readonly reading: string;

  @ApiProperty({
    description: 'The IELTS Writing level of Student',
    type: String,
    example: '8.5',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  readonly writing: string;

  @ApiProperty({
    description: 'The IELTS Speaking level of Student',
    type: String,
    example: '8.5',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  readonly speaking: string;

  @ApiProperty({
    description: 'The image of IELTS document',
    type: String,
    example: '/sdushdusd-sdsdsd.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly image: string;
}
