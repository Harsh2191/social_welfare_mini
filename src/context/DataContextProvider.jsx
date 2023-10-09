import { useState, useEffect } from "react";
import { ref, getDatabase, get } from "firebase/database";
import { app, auth } from "../firebase";
import originalData from "../data/realData";
import DataContext from "./DataContext";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "@mui/material";

const DataContextProvider = ({ children }) => {
  const formattedData = originalData.map((item) => ({
    Ammonia: item[0],
    Methane: item[1],
  }));
  // console.log(formattedData);
  const [gasData, setGasData] = useState([
    { Methane: 0, Ammonia: 0, name: "0" },
  ]);
  const [ind, setInd] = useState(0);

  const gasRef = ref(getDatabase(app));
  const [user, setUser] = useState(null);
  const [shouldStart, setShouldStart] = useState(true);
  // console.log(user);
  // const start = () => {
  //   console.count("start");
  //   const interval = setInterval(() => {
  //     get(gasRef, "test")
  //       .then((snapshot) => {
  //         if (snapshot.exists()) {
  //           const value = snapshot.val().test;
  //           const gas = {
  //             Methane: value.a,
  //             Ammonia: value.b,
  //             name: value.Time,
  //           };
  //           // console.log(gasData);
  //           if (gas.name !== gasData[gasData.length - 1].name) {
  //             console.log(gas.name, gasData[gasData.length - 1].name);
  //             // console.log(gasData);
  //             setGasData((gasData) => {
  //               console.count("usestate");
  //               return [...gasData, { ...gas }];
  //             });
  //           }
  //         } else {
  //           console.log("No data available");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, 3000);
  //   return interval;
  // };

  var userData = {};
  if (user !== null) {
    // console.log(user[0].providerId);
    if (user[0].providerId == "password") {
      const name = user[0].email.split("@")[0];
      const img = null;
      userData = { name, img };
    } else {
      const name = user[0].displayName;
      const img = user[0].photoURL;
      userData = { name, img };
      // console.log(userData);
    }
  }
  // if (
  //   user &&
  //   user[0].email === "sih.ps1368@gmail.com" &&
  //   user[0].providerId === "google.com"
  // ) {
  //   if (shouldStart) {
  //     // toast.success("Logged in successfully", { duration: 3000 });
  //     // start();
  //     // setShouldStart(false);
  //   }
  // } else if (
  //   user &&
  //   user[0].email === "abc@sample.com" &&
  //   user[0].providerId === "password"
  // ) {
  //   // if (shouldStart) {
  //   //   console.log("started");
  //   //   const interval = setInterval(() => {
  //   //     const newGas = formattedData[ind];
  //   //     newGas.name = new Date().toLocaleTimeString("en-IN", {
  //   //       timeZone: "Asia/Kolkata",
  //   //     });
  //   //     setInd((ind) => ind + 1);
  //   //     setGasData((gasData) => [...gasData, newGas]);
  //   //     console.log(gasData);
  //   //     console.count("stt");
  //   //     console.log(newGas);
  //   //     console.log(ind);
  //   //   }, 2000);
  //   //   setShouldStart(false);
  //   // }
  // }
  useEffect(() => {
    if (
      user &&
      user[0].email === "abc@sample.com" &&
      user[0].providerId === "password"
    ) {
      const interval = setInterval(() => {
        const newGas = formattedData[ind];
        newGas.name = new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
        });
        setGasData([...gasData, newGas]);
        setInd(ind + 1);
      }, 2000);

      return () => clearInterval(interval);
    } else if (
      user &&
      user[0].email === "sih.ps1368@gmail.com" &&
      user[0].providerId === "google.com"
    ) {
      if (shouldStart) {
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
                // console.log(gasData);
                if (gas.name !== gasData[gasData.length - 1].name) {
                  console.log(gas.name, gasData[gasData.length - 1].name);
                  // console.log(gasData);
                  setGasData((gasData) => {
                    console.count("usestate");
                    return [...gasData, { ...gas }];
                  });
                }
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }, 3000);
        setShouldStart(false);
        return () => clearInterval(interval);
      }
    }
  }, [ind, user]);
  const data = { gasData, setUser, userData };
  return (
    <>
      {/* <Toaster /> */}
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
