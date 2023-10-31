import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseCard } from './course-card.model';
import { CreateCourseCardDto, UpdateCourseCardDto } from './course-card.dto';

@Injectable()
export class CourseCardService {
  constructor(
    @InjectModel(CourseCard)
    private courseCard: typeof CourseCard,
  ) {}

  async create(createCourseCardDto: CreateCourseCardDto) {
    const data = await this.courseCard.create(createCourseCardDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.courseCard.findAll();
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.courseCard.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateCourseCardDto: UpdateCourseCardDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Course Card with ${id} not found!`);
    }
    const data = await this.courseCard.update(updateCourseCardDto, {
      where: { id },
      returning: true,
    });
    return {
      success: true,
      data: data[1],
    };
  }

  async remove(id: number) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Course Card with ${id} not found!`);
    }

    const data = await this.courseCard.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.courseCard.findByPk(id);
    return !!value;
  }
}
