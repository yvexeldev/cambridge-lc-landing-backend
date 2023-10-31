import { Module } from '@nestjs/common';
import { OurStudentService } from './our-student.service';
import { OurStudentController } from './our-student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OurStudent } from './our-student.model';

@Module({
  imports: [SequelizeModule.forFeature([OurStudent])],
  controllers: [OurStudentController],
  providers: [OurStudentService],
})
export class OurStudentModule {}
