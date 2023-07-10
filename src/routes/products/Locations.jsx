import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { roomList } from "../../mocks/reservations";

export default function Locations() {
  // const [locationData, setLocationData] = useState({});
  const params = useParams();
  let currentRoom = parseInt(params.id.replace(":", ""));
  let locationData = roomList[currentRoom - 1];
  // console.log(locationData);

  return (
    <div className="Location">
      <h1>{locationData.name}</h1>
      <h3>{locationData.description}</h3>
      <img src={locationData.imageLocation} alt={locationData.name} />
      <p>price: {locationData.price} $</p>
    </div>
  );
}
