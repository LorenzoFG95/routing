import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("logged")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">dashboard</div>
  ) : (
    navigate("/login")
  );
}
