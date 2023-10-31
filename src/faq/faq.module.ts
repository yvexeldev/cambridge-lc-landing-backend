import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Faq } from './faq.model';

@Module({
  imports: [SequelizeModule.forFeature([Faq])],
  controllers: [FaqController],
  providers: [FaqService],
})
export class FaqModule {}
