import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
        <li>
          <Link to={"/locations"}>Locations</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
