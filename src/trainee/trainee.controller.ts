import { Trainne } from './trainee.model';
import { TraineeService } from './trainee.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-trainee.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindTrainnesDto } from './dto/find-user.dto';

@Controller('trainees')
export class TraineeController {
  constructor(private traineeService: TraineeService) {}

  @Post()
  createTrainne(@Body() createTrainer: CreateUserDto) {
    return this.traineeService.createrTrainne(createTrainer);
  }

  @Put(':id')
  updateTrainne(
    @Body() updateTrainneDto: UpdateUserDto,
    @Param('id') id: string,
  ) {
    return this.traineeService.updateTrainne(+id, updateTrainneDto);
  }
  @Get()
  findOneTrainneParams(@Query() findTrainneDto: FindTrainnesDto) {
    return this.traineeService.findOneTrainneParams(findTrainneDto);
  }
  @Get()
  findTrainnes() {
    return this.traineeService.findTrainnes();
  }
  @Get(':id')
  findOneTrainne(@Param('id') id: string) {
    return this.traineeService.findOneTrainne(+id);
  }

  @Delete(':id')
  deleteTrainne(@Param('id') id: string): void {
    this.traineeService.deleteTrainner(+id);
  }
}
