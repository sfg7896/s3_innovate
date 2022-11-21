import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceInformationController } from './device-information.controller';
import { DeviceInformationService } from './device-information.service';
import DeviceInformation from './device-information.entity';

describe('DeviceInformationController', () => {
  let controller: DeviceInformationController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceInformationController],
      providers: [
        DeviceInformationService,
        {
          provide: getRepositoryToken(DeviceInformation),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<DeviceInformationController>(
      DeviceInformationController,
    );
  });

  describe('createDeviceInformation', () => {
    it('should return new DeviceInformation', async () => {
      expect(
        await controller.createDeviceInformation({
          deviceId: 'ibm-00976C',
          deviceType: 'computer1.0.0',
          deviceName: 'VN1-1-4',
          groupId: '49548881c4d2bea9',
          dataType: 'DATA',
          data: {
            fullPowerMode: false,
            activePowerControl: false,
            firmwareVersion: 1,
            temperature: 21,
            humidity: 53,
          },
          timestamp: 1629629040,
        }),
      ).toBeInstanceOf(DeviceInformation);
    });
  });
});
