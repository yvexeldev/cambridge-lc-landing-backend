import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OurTeacher } from './our-teacher.model';
import { CreateTeacherDto, UpdateTeacherDto } from './our-teachers.dto';

@Injectable()
export class OurTeacherService {
  constructor(
    @InjectModel(OurTeacher)
    private ourTeacher: typeof OurTeacher,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const data = await this.ourTeacher.create(createTeacherDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.ourTeacher.findAll();
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.ourTeacher.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Teacher with ${id} not found!`);
    }
    const data = await this.ourTeacher.update(updateTeacherDto, {
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
      throw new NotFoundException(`teacher with ${id} not found!`);
    }

    const data = await this.ourTeacher.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.ourTeacher.findByPk(id);
    return !!value;
  }
}
