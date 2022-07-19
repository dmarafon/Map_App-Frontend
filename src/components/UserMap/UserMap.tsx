import { Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { loadLocationsThunk } from "../../redux/thunks/locationThunks";

const UserMap = (): JSX.Element => {
  const locationState = useAppSelector((state) => state.location);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

  const markerIcon = new Icon({
    iconUrl: "../images/locationicon.png",
    iconSize: [35, 35],
  });

  const printMarkers = () => {
    if (locationState.length < 1) return null;

    return locationState.map((location) => (
      <Marker
        key={location.properties.name}
        position={[
          location.geometry.coordinates[0],
          location.geometry.coordinates[1],
        ]}
        icon={markerIcon}
      >
        {" "}
        <Popup
          position={[
            location.geometry.coordinates[0],
            location.geometry.coordinates[1],
          ]}
        >
          <div className="info-popup">
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
            <img src={location.images[0]} alt="marker location" width={150} />
          </div>
        </Popup>
      </Marker>
    ));
  };
  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {printMarkers()}
    </>
  );
};

export default UserMap;
