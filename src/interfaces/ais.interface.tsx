export interface IShipResponse {
  code: number;
  data: IShipData[];
  message: string;
  status: number;
}

export interface IShipData {
  Uuid: string;
  MessageId: number;
  RepeatIndicator: number;
  UserID: number;
  Valid: boolean;
  Spare1: number;
  Sog: number;
  PositionAccuracy: boolean;
  Longitude: number;
  Latitude: number;
  Cog: number;
  TrueHeading: number;
  Timestamp: number;
  Spare2: number;
  Name: string;
  Type: number;
  Dimension: string;
  Eta: string;
  FixType: number;
  Raim: boolean;
  Dte: boolean;
  AssignedMode: boolean;
  Spare3: number;
  CreateAt: string;
  UpdateAt: string;
  BaseStationIp: string;
  BaseStationPort: string;
  CallSign: string;
  ImoNumber: number;
  Destination: string;
}

export interface EtaFormat {
  Month: number;
  Day: number;
  Hour: number;
  Minute: number;
}
