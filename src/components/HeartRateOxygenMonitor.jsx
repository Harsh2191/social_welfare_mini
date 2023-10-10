import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles"; // For Material-UI v5
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Heart from "../images/heart-attack.png";
import Oxygen from "../images/o2.png";
import DataContext from "../context/DataContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: "40px 0",
  },
}));

const HeartRateOxygenMonitor = () => {
  const classes = useStyles();
  const { userData } = useContext(DataContext);
  // console.count("hh");
  // useEffect(() => {
  const newHeartRate = Math.floor(Math.random() * 10) + 110;
  const newOxygenLevel = Math.floor(Math.random() * 2) + 98;
  // console.log(newHeartRate, newOxygenLevel);
  // console.log(userData);
  // setHeartRate(newHeartRate);
  // setOxygenLevel(newOxygenLevel);

  // return () => clearInterval(interval);
  // }, []);

  return (
    <Paper className={classes.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <img src={Heart} style={{ height: "70px", width: "70px" }} alt="" />
        <Typography variant="h5">Heart Rate</Typography>
        <Typography variant="h3">
          {userData.name === "sih1368" || userData.name === "abc"
            ? newHeartRate
            : "0"}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <img src={Oxygen} style={{ height: "70px", width: "70px" }} alt="" />

        <Typography variant="h5">Oxygen Level</Typography>
        <Typography variant="h3">
          {" "}
          {userData.name === "sih1368" || userData.name === "abc"
            ? newOxygenLevel
            : "0"}
          %
        </Typography>
      </div>
    </Paper>
  );
};

export default HeartRateOxygenMonitor;
