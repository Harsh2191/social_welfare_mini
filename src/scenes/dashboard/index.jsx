import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";
import { useState } from "react";
import GaugeChart from "react-gauge-chart";
import toast, { Toaster } from "react-hot-toast";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Line_Chart from "../../components/Line_Chart";
import HeartRateOxygenMonitor from "../../components/HeartRateOxygenMonitor";
import { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import ProgressCircle from "../../components/ProgressCircle";
import Pie_Chart from "../../components/Pie_Chart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { gasData } = useContext(DataContext);
  // console.log(gasData);
  // toast.success("Logged In successfully", { duration: 3000 });
  const normalizedAmmonia = gasData[gasData.length - 1].Ammonia / 800;
  const normalizedMethane = gasData[gasData.length - 1].Methane / 800;
  let risk = 0;
  let rColor = "";
  let rText = "";
  const averageNormalizedConcentration =
    (normalizedAmmonia + normalizedMethane) / 2;

  if (averageNormalizedConcentration <= 0.25) {
    risk = 0.17;
    rColor = "green";
    rText = "No risk";
  } else if (averageNormalizedConcentration <= 0.5) {
    risk = 0.33;
    rColor = "green";
    rText = "No risk";
  } else if (averageNormalizedConcentration <= 0.75) {
    risk = 0.5;
    rColor = "yellow";
    rText = "Moderate risk";
  } else {
    risk = 0.8;
    rColor = "red";
    rText = "High risk";
    toast.error("HIGH RISK!!", { duration: 2500 });
  }

  const [greet, setisgreet] = useState(true);
  useEffect(() => {
    if (greet) {
      toast.success("Logged in", { duration: 2000 });
      setisgreet(false);
    }
  }, []);

  const useStyles = makeStyles((theme) => ({
    hiddenBox: {
      display: "none", // Hide the box by default
      [theme.breakpoints.up("md")]: {
        display: "block", // Show the box on 'md' and larger screens
      },
    },
    flexBox: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    lineHeight: {
      height: "350px",
      [theme.breakpoints.up("md")]: {
        height: "310px",
      },
    },
    gauge: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Box m="10px 20px 10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box className={classes.hiddenBox}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            p={3}
            style={{ height: "300px" }}
            className={classes.hiddenBox}
          >
            <Typography variant="h5" fontWeight="600">
              Tank Status
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "20px" }}
              >
                70 % of tank filled
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            p={3}
            backgroundColor={colors.primary[400]}
            style={{ height: "300px" }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" fontWeight="600">
                Risk Meter
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{ color: rColor }}
                className={rColor === "red" ? "blinking-text" : "none"}
              >
                {rText}
              </Typography>
            </Box>
            <Box className={classes.gauge}>
              {/* <BarChart isDashboard={true} /> */}
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={3}
                hideText={true}
                percent={risk}
                animate={false}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            p={3}
            style={{ height: "300px" }}
          >
            <Typography variant="h5" fontWeight="600">
              Worker Health Status
            </Typography>
            <Box>
              <HeartRateOxygenMonitor />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box
            p={3}
            backgroundColor={colors.primary[400]}
            className={classes.lineHeight}
          >
            <Box className={classes.flexBox}>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Gas Concentration
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="600" color="#F47560">
                  Ammonia:
                  {gasData[gasData.length - 1].Ammonia}ppm
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="600" color="#E8C1A0">
                  Methane:
                  {gasData[gasData.length - 1].Methane}ppm
                </Typography>
              </Box>
              <Box className={classes.hiddenBox}>
                <a href="/line" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h4"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    View more
                  </Typography>
                </a>
              </Box>
            </Box>
            <Box m="10px 0 0 0" display="flex" justifyContent="center">
              <Line_Chart />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            padding={3}
            style={{ height: "310px" }}
          >
            <Typography variant="h5" fontWeight="600">
              Current Gas status
            </Typography>
            <Box display="flex" justifyContent="center">
              <Pie_Chart />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Toaster />
    </Box>
  );
};

export default Dashboard;
