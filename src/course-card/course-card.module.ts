import { Module } from '@nestjs/common';
import { CourseCardService } from './course-card.service';
import { CourseCardController } from './course-card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseCard } from './course-card.model';

@Module({
  imports: [SequelizeModule.forFeature([CourseCard])],
  controllers: [CourseCardController],
  providers: [CourseCardService],
})
export class CourseCardModule {}
