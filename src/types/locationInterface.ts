export interface LocationData {
  type: string;
  properties: {
    name: string;
    description: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  images: [string];
  backupimages: [string];
  userid: string;
  filter: string;
}
