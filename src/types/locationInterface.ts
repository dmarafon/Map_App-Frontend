export interface LocationData {
  type: string;
  properties: {
    name: string;
    description: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  images: string[];
  backupimages: string[];
  userid: string;
  filter: string;
  id: string;
}
