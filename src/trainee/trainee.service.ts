import { Trainne } from './trainee.model';
import { CreateUserDto } from './dto/create-trainee.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindTrainnesDto } from './dto/find-user.dto';

@Injectable()
export class TraineeService {
  constructor(
    @InjectModel(Trainne)
    private trainneModel: typeof Trainne,
  ) {}

  async createrTrainne(createTrainneDto: CreateUserDto) {
    const trainne = await this.trainneModel.findOne({
      where: { email: createTrainneDto.email },
    });
    if (trainne) {
      throw new ConflictException('Email já cadastrado!');
    }
    return this.trainneModel.create(createTrainneDto);
  }

  async updateTrainne(id: number, updateTrainneDto: UpdateUserDto) {
    await this.trainneModel.update(updateTrainneDto, { where: { id: id } });
  }

  async findTrainnes(): Promise<Trainne[]> {
    return await this.trainneModel.findAll();
  }

  async findOneTrainne(id: number): Promise<Trainne> {
    return await this.trainneModel.findOne({ where: { id: id } });
  }

  async findOneTrainneParams(
    findTrainneDto: FindTrainnesDto,
  ): Promise<Trainne[]> {
    const where: any = {};
    if (findTrainneDto.name) {
      where.name = findTrainneDto.name;
    }
    if (findTrainneDto.email) {
      where.email = findTrainneDto.email;
    }
    return await this.trainneModel.findAll({ where });
  }
  async deleteTrainner(id: number) {
    const trainner = await this.findOneTrainne(id);
    await trainner.destroy();
  }
}
