import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaqDto, UpdateFaqDto } from './faq.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Faq } from './faq.model';

@Injectable()
export class FaqService {
  constructor(
    @InjectModel(Faq)
    private faq: typeof Faq,
  ) {}

  async create(createFaqDto: CreateFaqDto) {
    const data = await this.faq.create(createFaqDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.faq.findAll({
      attributes: { exclude: ['deletedAt', 'updatedAt'] },
    });
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.faq.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Faq with ${id} not found!`);
    }
    const data = await this.faq.update(updateFaqDto, {
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
      throw new NotFoundException(`Faq with ${id} not found!`);
    }

    const data = await this.faq.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.faq.findByPk(id);
    return !!value;
  }
}
