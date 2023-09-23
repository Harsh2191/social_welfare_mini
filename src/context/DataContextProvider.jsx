import { useState, useEffect } from "react";
import originalData from "../data/realData";
import DataContext from "./DataContext";
const DataContextProvider = ({ children }) => {
  const formattedData = originalData.map((item) => ({
    Ammonia: item[0],
    Methane: item[1],
  }));
  const [gasData, setGasData] = useState([
    {
      Ammonia: 0,
      Methane: 0,
      name: new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    },
  ]);
  const [ind, setInd] = useState(0);
  console.log(gasData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newGas = formattedData[ind];
      newGas.name = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
      setGasData([...gasData, newGas]);
      setInd(ind + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [ind]);

  return (
    <DataContext.Provider value={gasData}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
