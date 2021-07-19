import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trainne } from './trainee.model';
import { TraineeController } from './trainee.controller';
import { TraineeService } from './trainee.service';

@Module({
  imports: [SequelizeModule.forFeature([Trainne])],
  controllers: [TraineeController],
  providers: [TraineeService],
})
export class TraineeModule {}
