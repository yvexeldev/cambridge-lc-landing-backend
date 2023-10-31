import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DescriptionCard } from './description-card.model';
import {
  CreateDescriptionCardDto,
  UpdateDescriptionCardDto,
} from './description-card.dto';

@Injectable()
export class DescriptionCardService {
  constructor(
    @InjectModel(DescriptionCard)
    private descriptionCard: typeof DescriptionCard,
  ) {}

  async create(createDescriptionCardDto: CreateDescriptionCardDto) {
    const data = await this.descriptionCard.create(createDescriptionCardDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.descriptionCard.findAll();
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.descriptionCard.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateDescriptionCardDto: UpdateDescriptionCardDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Description Card with ${id} not found!`);
    }
    const data = await this.descriptionCard.update(updateDescriptionCardDto, {
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
      throw new NotFoundException(`Description Card with ${id} not found!`);
    }

    const data = await this.descriptionCard.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.descriptionCard.findByPk(id);
    return !!value;
  }
}
