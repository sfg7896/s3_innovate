import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import DeviceInformation from './device-information.entity';
import CreateDeviceInformationDto from './dto/create.dto';

@Injectable()
export class DeviceInformationService {
  constructor(
    @InjectRepository(DeviceInformation)
    private deviceInformationRepository: Repository<DeviceInformation>,
  ) {}
  /**
   * A method that fetches the categories from the database
   * @params deviceData: CreateDeviceInformationDto
   * @return object of DeviceInformation
   */
  async create(
    deviceData: CreateDeviceInformationDto,
  ): Promise<DeviceInformation> {
    const newDeviceInformation =
      this.deviceInformationRepository.create(deviceData);
    await this.deviceInformationRepository.save(newDeviceInformation);
    return newDeviceInformation;
  }
}
