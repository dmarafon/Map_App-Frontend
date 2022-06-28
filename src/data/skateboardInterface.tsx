export default interface ILocation {
  features: [
    {
      type: string;
      properties: {
        PARK_ID: number;
        NAME: string;
        DESCRIPTIO: string;
      };
      geometry: {
        type: string;
        coordinates: [number];
      };
    }
  ];
}
