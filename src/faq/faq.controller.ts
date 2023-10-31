import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto, UpdateFaqDto } from './faq.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('FAQs')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @ApiCreatedResponse({ description: 'FAQ created successfully' })
  @Post()
  async create(@Body() createFaqDto: CreateFaqDto) {
    return await this.faqService.create(createFaqDto);
  }

  @ApiOkResponse({ description: 'List of FAQs' })
  @Get()
  async findAll() {
    return await this.faqService.findAll();
  }

  @ApiOkResponse({ description: 'A single FAQ' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.faqService.findOne(+id);
  }

  @ApiOkResponse({ description: 'FAQ updated successfully' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return await this.faqService.update(+id, updateFaqDto);
  }

  @ApiOkResponse({ description: 'FAQ deleted successfully' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.faqService.remove(+id);
  }
}
