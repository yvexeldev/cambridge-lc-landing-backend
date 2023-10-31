import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OurStudentService } from './our-student.service';
import { CreateOurStudentDto, UpdateOurStudentDto } from './our-student.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Our Students')
@Controller('our-student')
export class OurStudentController {
  constructor(private readonly ourStudentService: OurStudentService) {}

  @Post()
  create(@Body() createOurStudentDto: CreateOurStudentDto) {
    return this.ourStudentService.create(createOurStudentDto);
  }

  @Get()
  findAll() {
    return this.ourStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourStudentService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOurStudentDto: UpdateOurStudentDto,
  ) {
    return this.ourStudentService.update(+id, updateOurStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourStudentService.remove(+id);
  }
}
