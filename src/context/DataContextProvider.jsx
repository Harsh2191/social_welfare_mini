import { useState, useEffect } from "react";
import { ref, getDatabase, get } from "firebase/database";
import { app } from "../firebase";
import DataContext from "./DataContext";

// const db = getDatabase(app);

const DataContextProvider = ({ children }) => {
  // const formattedData = originalData.map((item) => ({
  //   Ammonia: item[0],
  //   Methane: item[1],
  // }));
  // const [gasData, setGasData] = useState([
  //   {
  //     Ammonia: 0,
  //     Methane: 0,
  //     name: new Date().toLocaleTimeString("en-IN", {
  //       timeZone: "Asia/Kolkata",
  //     }),
  //   },
  // ]);
  // const [ind, setInd] = useState(0);
  // console.log(gasData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newGas = formattedData[ind];
  //     newGas.name = new Date().toLocaleTimeString("en-IN", {
  //       timeZone: "Asia/Kolkata",
  //     });
  //     setGasData([...gasData, newGas]);
  //     setInd(ind + 1);
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, [ind]);

  const [gasData, setGasData] = useState([
    { Methane: 0, Ammonia: 0, name: "0" },
  ]);
  // let gasData = [{ Methane: 0, Ammonia: 0, name: "0" }];
  const gasRef = ref(getDatabase(app));
  useEffect(() => {
    // Clean up the listener when the component unmounts
    const interval = setInterval(() => {
      get(gasRef, "test")
        .then((snapshot) => {
          if (snapshot.exists()) {
            const value = snapshot.val().test;
            const gas = {
              Methane: value.a,
              Ammonia: value.b,
              name: value.Time,
            };
            console.log(gas);
            // if (gas.name !== gasData[gasData.length - 1].name) {
            setGasData((gasData) => [...gasData, gas]);
            // }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <DataContext.Provider value={gasData}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
