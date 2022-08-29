import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import { osm } from "./osm-providers";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";


const BasicMap = ({ center, popup }) => {
const [ctr, setCtr] = useState([])

useEffect(()=>{
  setCtr(center)
},[center])

  const ZOOM_LEVEL = 15;

  return (

    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url={osm.maptiler} attribution={osm.attribution} />
      <Marker position={center}>
        <Popup>{popup}</Popup>
      </Marker>
    </MapContainer>
  );
};
export default BasicMap;
