import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './branch.model';
import { CreateBranchDto, UpdateBranchDto } from './branch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch)
    private branch: typeof Branch,
  ) {}

  async create(createBranchDto: CreateBranchDto) {
    const data = await this.branch.create(createBranchDto);
    return {
      success: true,
      data: { id: data.id },
    };
  }

  async findAll() {
    const data = await this.branch.findAll();
    return {
      success: true,
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.branch.findByPk(id);
    return {
      success: true,
      data,
    };
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    const isExists = await this.isExists(id);
    if (!isExists) {
      throw new NotFoundException(`Branch with ${id} not found!`);
    }
    const data = await this.branch.update(updateBranchDto, {
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
      throw new NotFoundException(`Branch with ${id} not found!`);
    }

    const data = await this.branch.destroy({ where: { id } });
    return {
      success: true,
      data,
    };
  }

  private async isExists(id: number): Promise<boolean> {
    const value = await this.branch.findByPk(id);
    return !!value;
  }
}
