import { useState, useEffect } from "react";
import { ref, getDatabase, get } from "firebase/database";
import { app, auth } from "../firebase";
import DataContext from "./DataContext";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "@mui/material";

const DataContextProvider = ({ children }) => {
  const [gasData, setGasData] = useState([
    { Methane: 0, Ammonia: 0, name: "0" },
  ]);
  const gasRef = ref(getDatabase(app));
  const [user, setUser] = useState(null);
  const [shouldStart, setShouldStart] = useState(true);
  // console.log(user);
  const start = () => {
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
            console.log(gasData);
            if (gas.name !== gasData[gasData.length - 1].name) {
              // console.log(gas.name, gasData[gasData.length - 1].name);
              console.log(gasData);
              setGasData((gasData) => [...gasData, gas]);
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 3000);
    return interval;
  };
  useEffect(() => {
    // const curUser = auth.currentUser;
    // if (curUser) {
    //   if (curUser !== user) {
    //     setUser(curUser.providerData);
    //     console.log(user);
    //   }
    // }
    // if (user !== null) {
    // const interval = setInterval(() => {
    //   get(gasRef, "test")
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         const value = snapshot.val().test;
    //         const gas = {
    //           Methane: value.a,
    //           Ammonia: value.b,
    //           name: value.Time,
    //         };
    //         console.log(gas);
    //         if (gas !== gasData[gasData.length - 1]) {
    //           setGasData((gasData) => [...gasData, gas]);
    //         }
    //       } else {
    //         console.log("No data available");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, 3000);
    // return () => clearInterval(interval);
    // console.log("signedin", user);
    // }
  });
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
    if (shouldStart) {
      toast.success("Logged in successfully", { duration: 3000 });
    }
  }
  let stop = "";
  if (
    user &&
    user[0].email === "sih.ps1368@gmail.com" &&
    user[0].providerId === "google.com"
  ) {
    // console.log("starting");
    if (shouldStart) {
      stop = start();
      setShouldStart(false);
    }
  } else {
    // console.log("not starting");
  }
  // console.log(userData);
  if (user === null || user[0].email !== "sih.ps1368@gmail.com") {
    // console.log(user[0].email, "MEEEE!!!");
    // const intervalId = start();
    clearInterval(stop);
  }
  const data = { gasData, setUser, userData };
  return (
    <>
      <Toaster />
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
