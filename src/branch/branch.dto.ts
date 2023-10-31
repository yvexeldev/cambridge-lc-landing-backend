import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchDto {
  @ApiProperty({
    description: 'The title of branch',
    type: String,
    example: 'Yunusabad Branch',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The address of branch',
    type: String,
    example: 'Tashkent, uzbekistan, chilanzar',
  })
  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @ApiProperty({
    description: 'The url for google maps of branch',
    type: String,
    example: 'https://maps.google.com/url',
  })
  @IsNotEmpty()
  @IsString()
  readonly google_maps_url: string;

  @ApiProperty({
    description: 'The url for yandex maps of branch',
    type: String,
    example: 'https://maps.yandex.ru/url',
  })
  @IsNotEmpty()
  @IsString()
  readonly yandex_maps_url: string;

  @ApiProperty({
    description: 'The image of branch',
    type: String,
    example: '/sdushdusd-sdsdsd.jpg',
  })
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}

export class UpdateBranchDto {
  @ApiProperty({
    description: 'The updated title for the branch',
    type: String,
    example: 'updated title',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The updated description for the branch',
    type: String,
    example:
      'NestJS is a framework for building efficient and scalable server-side applications.',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The updated image url for the branch',
    type: String,
    example: '/sdushdusd.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly image: string;
}
