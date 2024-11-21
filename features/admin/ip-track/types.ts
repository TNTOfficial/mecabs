export interface IpTrack {
  id: string;
  ip: string;
  visitCount: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IpTrackData {
  visits: IpTrack[];
  totalVisitors: number;
  todayVisitors: number;
}
export type IpTrackResponse = IpTrackData;
