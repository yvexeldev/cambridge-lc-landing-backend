import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFaqDto {
  @ApiProperty({
    description: 'The question for the FAQ',
    type: String,
    example: 'What is NestJS?',
  })
  @IsNotEmpty()
  @IsString()
  readonly question: string;

  @ApiProperty({
    description: 'The answer for the FAQ',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
  })
  @IsNotEmpty()
  @IsString()
  readonly answer: string;
}

export class UpdateFaqDto {
  @ApiProperty({
    description: 'The updated question for the FAQ',
    type: String,
    example: 'What is NestJS?',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly question: string;

  @ApiProperty({
    description: 'The updated answer for the FAQ',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly answer: string;
}
