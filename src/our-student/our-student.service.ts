import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OurStudent } from './our-student.model';
import { CreateOurStudentDto, UpdateOurStudentDto } from './our-student.dto';

@Injectable()
export class OurStudentService {
  constructor(
    @InjectModel(OurStudent)
    private ourStudent: typeof OurStudent,
  ) {}

  async create(createOurStudentDto: CreateOurStudentDto) {
    const data = await this.ourStudent.create(createOurStudentDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.ourStudent.findAll();
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.ourStudent.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateOurStudentDto: UpdateOurStudentDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Student with ${id} not found!`);
    }
    const data = await this.ourStudent.update(updateOurStudentDto, {
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
      throw new NotFoundException(`Student with ${id} not found!`);
    }

    const data = await this.ourStudent.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.ourStudent.findByPk(id);
    return !!value;
  }
}
