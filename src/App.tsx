import L from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../src/App.css";
import ILocation from "./data/skateboardInterface";
import parkData from "./data/skateboards-parks";

const App = () => {
  const [activePark, setActivePark] = useState<ILocation | any>(null);

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
          eventHandlers={{
            click: () => {
              setActivePark(park);
            },
          }}
          icon={new customIcon()}
        />
      ))}
      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[0],
            activePark.geometry.coordinates[1],
          ]}
          eventHandlers={{
            click: () => {
              setActivePark(null);
            },
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default App;
