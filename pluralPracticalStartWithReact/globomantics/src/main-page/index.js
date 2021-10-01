import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./main-page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";

function App() {
  // load data
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);
  return (
    <div className="container">
      <Header
        subtitle={"Providing houses all over the world"}
        title="Some Title"
      />
    </div>
  );
}

export default App;
