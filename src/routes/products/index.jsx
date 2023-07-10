import { useState, useEffect } from "react";
import "../../styles.jsx/routes/productsStatic.css";
import { useNavigate, Link } from "react-router-dom";
import { roomList } from "../../mocks/reservations";

export default function () {
  return (
    <div className="Products">
      {" "}
      {roomList.map(({ name, price, id }) => (
        <div>
          <h2>{name}</h2>
          <h3>{`${price}Euro`}</h3>
          <Link to={`/locations/${id}`}>
            <button>Prenota</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
