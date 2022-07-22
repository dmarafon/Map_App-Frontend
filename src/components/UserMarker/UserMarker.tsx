import { useMapEvents } from "react-leaflet";
import L, { Icon } from "leaflet";
import ReactDOMServer from "react-dom/server";
import { useRef } from "react";
import { cleanApiResponseActionCreator } from "../../redux/features/uiSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteLocationThunk } from "../../redux/thunks/locationThunks";

const UserMarker = ({
  lat,
  lng,
  name,
  description,
  image,
  id,
}: {
  lat: number;
  lng: number;
  name: string;
  description: string;
  id: string;
  image: string;
}) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((store) => store.user.id);

  const icon = new Icon({
    iconUrl: "../images/locationicon.png",
    iconSize: [35, 35],
  });

  const map = useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      L.marker([lat, lng], { icon }).addTo(map);
    },
  });

  const removeMarker = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await dispatch(deleteLocationThunk(id));
    console.log("deleted");
    dispatch(cleanApiResponseActionCreator());
    return userMarker.removeFrom(map);

    // dispatch(loadUserArtworks(userId));
  };

  const addClickToButton = () => {
    const popupButton = document.getElementById("popup__button--delete") as any;

    if (popupButton) {
      popupButton.addEventListener("click", removeMarker);
    }
  };

  const userMarker = L.marker([lat, lng], { icon });

  // map.eachLayer((layer) => {
  //   if (layer instanceof L.Marker) {
  //     console.log(layer?._leaflet_id);
  //   }
  // });

  const storeLatitudeAndLongitude = `${lat}+${lng}`;
  const coordinatesUsed = useRef<string[]>([]);

  if (typeof coordinatesUsed.current[0] === "undefined")
    userMarker
      .addTo(map)
      .addEventListener("popupopen", addClickToButton)
      .bindPopup(
        ReactDOMServer.renderToStaticMarkup(
          <>
            <div className="info-popup">
              <h2>{name}</h2>
              <p>{description}</p>
              <img src={image} alt="marker location" width={150} />
              <button id="popup__button--delete">Remove Marker</button>
            </div>
          </>
        ),
        {
          closeButton: false,
        }
      );

  coordinatesUsed.current.push(storeLatitudeAndLongitude);

  return null;
};

export default UserMarker;
