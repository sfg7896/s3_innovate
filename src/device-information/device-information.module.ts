import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DeviceInformation from './device-information.entity';
import { DeviceInformationService } from './device-information.service';
import { DeviceInformationController } from './device-information.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceInformation])],
  providers: [DeviceInformationService],
  exports: [DeviceInformationService],
  controllers: [DeviceInformationController],
})
export class DeviceInformationModule {}
