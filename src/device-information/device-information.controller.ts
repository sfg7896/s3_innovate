import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { ExceptionLogger } from '../utils/exceptionLogger';
import { DeviceInformationService } from './device-information.service';
import { CreateDeviceInformationDto } from './dto/create.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import DeviceInformation from './device-information.entity';

@ApiTags('device-information')
@Controller('device-information')
export class DeviceInformationController {
  constructor(
    private readonly deviceInformationService: DeviceInformationService,
  ) {}

  @Post()
  @UseFilters(ExceptionLogger)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DeviceInformation,
  })
  async createDeviceInformation(
    @Body() deviceInformation: CreateDeviceInformationDto,
  ): Promise<DeviceInformation> {
    return this.deviceInformationService.create(deviceInformation);
  }
}
