import { MapContainer } from "react-leaflet";
import UserMap from "../../components/UserMap/UserMap";

const MapPage = (): JSX.Element => {
  return (
    <div className="main">
      <h1>Trippy</h1>
      <MapContainer
        center={[41.3879, 2.16992]}
        zoom={12}
        scrollWheelZoom={false}
        className="map"
      >
        <UserMap />
      </MapContainer>
    </div>
  );
};

export default MapPage;
