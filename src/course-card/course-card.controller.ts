import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CourseCardService } from './course-card.service';
import { CreateCourseCardDto, UpdateCourseCardDto } from './course-card.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Course Cards')
@Controller('course-card')
export class CourseCardController {
  constructor(private readonly courseCardService: CourseCardService) {}

  @Post()
  create(@Body() createCourseCardDto: CreateCourseCardDto) {
    return this.courseCardService.create(createCourseCardDto);
  }

  @Get()
  findAll() {
    return this.courseCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseCardService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseCardDto: UpdateCourseCardDto,
  ) {
    return this.courseCardService.update(+id, updateCourseCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseCardService.remove(+id);
  }
}
