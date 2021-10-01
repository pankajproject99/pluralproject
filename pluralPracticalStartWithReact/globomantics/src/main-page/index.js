import { useEffect, useState, useMemo } from "react";
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

let featuredHouse = {};
if(allHouses.length){
  const randomIndex = Math.floor(Math.random() * allHouses.length);
  featuredHouse=allHouses[randomIndex];
}

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
