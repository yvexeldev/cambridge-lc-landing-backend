import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OurTeacher } from './our-teacher.model';
import { OurTeacherService } from './our-teacher.service';
import { OurTeacherController } from './our-teacher.controller';

@Module({
  imports: [SequelizeModule.forFeature([OurTeacher])],
  controllers: [OurTeacherController],
  providers: [OurTeacherService],
})
export class OurTeacherModule {}
