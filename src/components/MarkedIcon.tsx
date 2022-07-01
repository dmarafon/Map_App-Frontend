import { useMapEvents } from "react-leaflet";
import L from "leaflet";

const MarkedIcon = () => {
  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
  });

  const map = useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      L.marker([lat, lng], { icon }).addTo(map);
      console.log(lat);
      console.log(lng);
    },
  });
  return null;
};

export default MarkedIcon;
