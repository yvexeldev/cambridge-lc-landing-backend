import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDecimal,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty({
    description: 'The name of teacher',
    type: String,
    example: 'Ketmonov Eshmat',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The description/bio of teacher',
    type: String,
    example: 'lorem ipsum dolor sit amet',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The IELTS level of teacher',
    type: String,
    example: '8.5',
  })
  @IsNotEmpty()
  @IsDecimal()
  readonly ielts: string;

  @ApiProperty({
    description: 'The experience of teacher',
    type: String,
    example: '10 years',
  })
  @IsNotEmpty()
  @IsString()
  readonly experience: string;

  @ApiProperty({
    description: 'The number of students of teacher',
    type: Number,
    example: 1000,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly students_count: number;

  @ApiProperty({
    description: 'The image of branch',
    type: String,
    example: '/sdushdusd-sdsdsd.jpg',
  })
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}

export class UpdateTeacherDto {
  @ApiProperty({
    description: 'The updated name for the teacher',
    type: String,
    example: 'updated title',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The updated description/bio for the teacher',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The updated IELTS result for the teacher',
    type: String,
    example: '8.0',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  @IsString()
  readonly ielts: string;

  @ApiProperty({
    description: 'The updated experience for the teacher',
    type: String,
    example: '10 years',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly experience: string;

  @ApiProperty({
    description: 'The updated students cound for the teacher',
    type: Number,
    example: 999,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  readonly students_count: number;

  @ApiProperty({
    description: 'The updated image url for the teacher',
    type: String,
    example: '/sdushdusd.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly image: string;
}
