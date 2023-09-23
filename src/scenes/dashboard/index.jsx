import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GaugeChart from "react-gauge-chart";
import toast, { Toaster } from "react-hot-toast";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Line_Chart from "../../components/Line_Chart";
import HeartRateOxygenMonitor from "../../components/HeartRateOxygenMonitor";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ProgressCircle from "../../components/ProgressCircle";
import Pie_Chart from "../../components/Pie_Chart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const gasData = useContext(DataContext);

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

  return (
    <Box m="10px 20px 10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
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
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
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
              sx={{ mt: "15px" }}
            >
              70 % of tank filled
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Risk Meter
            </Typography>
            <Typography
              variant="h4"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px", color: rColor }}
              className={rColor === "red" ? "blinking-text" : "none"}
            >
              {rText}
            </Typography>
          </Box>
          <Box height="250px" mt="20px">
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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Worker Health Status
          </Typography>
          <Box>
            <HeartRateOxygenMonitor />
          </Box>
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
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
            <Box>
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
          <Box height="300px" m="5px 0 0 0">
            <Line_Chart
              width={500}
              height={250}
              maxWidth="sm"
              isDashboard={true}
            />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Current Gas status
          </Typography>
          <Box marginLeft="100px">
            <Pie_Chart />
          </Box>
        </Box>
      </Box>
      <Toaster />
    </Box>
  );
};

export default Dashboard;
