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
import { OurTeacherService } from './our-teacher.service';
import { CreateTeacherDto, UpdateTeacherDto } from './our-teachers.dto';

@ApiTags('Our Teachers')
@Controller('our-teacher')
export class OurTeacherController {
  constructor(private readonly ourTeacherService: OurTeacherService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.ourTeacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.ourTeacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourTeacherService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.ourTeacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourTeacherService.remove(+id);
  }
}
