import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../src/App.css";
import MarkedIcon from "./components/MarkedIcon";
import parkData from "./data/skateboards-parks";

const App = () => {
  const customIcon = L.Icon.extend({
    options: {
      iconSize: [35, 35],

      iconUrl: "../images/locationicon.png",
    },
  });

  return (
    <MapContainer
      center={[41.390205, 2.154007]}
      zoom={13}
      scrollWheelZoom={true}
    >
      {parkData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[0],
            park.geometry.coordinates[1],
          ]}
          icon={new customIcon()}
        >
          {" "}
          <Popup
            position={[
              park.geometry.coordinates[0],
              park.geometry.coordinates[1],
            ]}
          >
            <div>
              <h2>{park.properties.NAME}</h2>
              <p>{park.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkedIcon />
    </MapContainer>
  );
};

export default App;
