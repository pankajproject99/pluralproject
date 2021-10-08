import { useState, useEffect, useCallback } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);

  const fetchHouses = useCallback(async () => {
    const rsp = await fetch("/houses.json");
    const houses = await rsp.json();
    setAllHouses(houses);
  }, []);

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  return allHouses;
};

export default useHouses;
