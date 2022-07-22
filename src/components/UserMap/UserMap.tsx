import { TileLayer } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { loadLocationsThunk } from "../../redux/thunks/locationThunks";
import UserMarker from "../UserMarker/UserMarker";
import AddMarkForm from "../AddMarkForm/AddMarkForm";
import { cleanApiResponseActionCreator } from "../../redux/features/uiSlice";

const UserMap = (): JSX.Element => {
  const locationState = useAppSelector((state) => state.location);
  const apiMessage = useAppSelector((store) => store.ui.apiResponse);
  const feedback = useAppSelector((store) => store.ui.feedback);

  const [coordinates, setCoordinates] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

  const submitClosingModalResponse = () => {
    dispatch(cleanApiResponseActionCreator());
  };

  const printMarkers = () => {
    if (locationState.length < 1) return null;

    return locationState.map((location) => (
      <UserMarker
        key={location.id}
        lat={location.geometry.coordinates[0]}
        lng={location.geometry.coordinates[1]}
        name={location.properties.name}
        description={location.properties.description}
        image={location.images[0]}
        id={location.id}
        setCoordinates={setCoordinates}
      />
    ));
  };
  return (
    <>
      {apiMessage === "Add Mark" && (
        <AddMarkForm
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          <p className="login__modal--break_text">{coordinates}</p>
        </AddMarkForm>
      )}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {printMarkers()}
    </>
  );
};

export default UserMap;
