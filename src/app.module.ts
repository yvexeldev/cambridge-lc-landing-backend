import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FaqModule } from './faq/faq.module';
import { CourseCardModule } from './course-card/course-card.module';
import { DescriptionCardModule } from './description-card/description-card.module';
import { BranchModule } from './branch/branch.module';
import { OurTeacherModule } from './our-teachers/our-teacher.module';
import { OurStudentModule } from './our-student/our-student.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.getOrThrow('DB_HOST'),
        port: +configService.getOrThrow('DB_PORT'),
        username: configService.getOrThrow('DB_USER'),
        password: configService.getOrThrow('DB_PASSWORD'),
        database: configService.getOrThrow('DB_NAME'),
        autoLoadModels: true,
        logging: false,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    FaqModule,
    CourseCardModule,
    DescriptionCardModule,
    BranchModule,
    OurTeacherModule,
    OurStudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
