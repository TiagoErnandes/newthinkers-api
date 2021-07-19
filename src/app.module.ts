import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Trainne } from './trainee/trainee.model';
import { TraineeModule } from './trainee/trainee.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'newthinkers',
      autoLoadModels: true,
      synchronize: true,
    }),
    TraineeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
