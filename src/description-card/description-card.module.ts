import { Module } from '@nestjs/common';
import { DescriptionCardService } from './description-card.service';
import { DescriptionCardController } from './description-card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DescriptionCard } from './description-card.model';

@Module({
  imports: [SequelizeModule.forFeature([DescriptionCard])],
  controllers: [DescriptionCardController],
  providers: [DescriptionCardService],
})
export class DescriptionCardModule {}
