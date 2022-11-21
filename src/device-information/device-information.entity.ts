import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class DeviceInformation {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id?: number;

  @Column()
  @ApiProperty()
  public deviceId: string;

  @Column()
  @ApiProperty()
  public deviceType: string;

  @Column()
  @ApiProperty()
  public deviceName: string;

  @Column()
  @ApiProperty()
  public groupId: string;

  @Column()
  @ApiProperty()
  public dataType: string;

  @Column({
    type: 'jsonb',
  })
  @ApiProperty()
  public data: DeviceDataTypeA | DeviceDataTypeB;

  @Column()
  @ApiProperty()
  public timestamp: number;
}

export interface DeviceDataTypeA {
  fullPowerMode: boolean;
  activePowerControl: boolean;
  firmwareVersion: number;
  temperature: number;
  humidity: number;
}

export interface DeviceDataTypeB {
  version: number;
  messageType: string;
  occupancy: boolean;
  stateChanged: number;
}

export default DeviceInformation;
