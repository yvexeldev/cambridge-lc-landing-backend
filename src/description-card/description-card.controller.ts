import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DescriptionCardService } from './description-card.service';
import {
  CreateDescriptionCardDto,
  UpdateDescriptionCardDto,
} from './description-card.dto';

@ApiTags('Description Cards')
@Controller('description-card')
export class DescriptionCardController {
  constructor(
    private readonly descriptionCardService: DescriptionCardService,
  ) {}

  @Post()
  create(@Body() createDescriptionCardDto: CreateDescriptionCardDto) {
    return this.descriptionCardService.create(createDescriptionCardDto);
  }

  @Get()
  findAll() {
    return this.descriptionCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionCardService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescriptionCardDto: UpdateDescriptionCardDto,
  ) {
    return this.descriptionCardService.update(+id, updateDescriptionCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionCardService.remove(+id);
  }
}
