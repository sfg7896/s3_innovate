import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceInformationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  deviceType: string;

  @ApiProperty()
  @IsString()
  deviceName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  groupId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dataType: string;

  @ApiProperty({ type: () => DeviceDataTypeA })
  @ValidateNested()
  @Type(() => {
    return DeviceDataTypeA || DeviceDataTypeB;
  })
  data: DeviceDataTypeA | DeviceDataTypeB;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  timestamp: number;
}

class DeviceDataTypeA {
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  fullPowerMode: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  activePowerControl: boolean;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  firmwareVersion: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  temperature: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  humidity: number;
}

class DeviceDataTypeB {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  version: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  messageType: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  occupancy: boolean;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stateChanged: number;
}

export default CreateDeviceInformationDto;
