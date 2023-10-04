import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import DataContext from "../../context/DataContext";
import toast, { Toaster } from "react-hot-toast";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useContext } from "react";
const Line_big = () => {
  const { gasData } = useContext(DataContext);
  const LineData = gasData.slice(-Math.min(15, gasData.length));
  const risk =
    (gasData[gasData.length - 1].Ammonia / 800 +
      gasData[gasData.length - 1].Methane / 800) /
    2;
  if (risk > 0.75) {
    toast.error("HIGH RISK!!", { duration: 2500 });
  }
  return (
    <Box m="20px">
      <Header
        title="Gas concentrations"
        subtitle="concentration over time"
        isDashboard={false}
      />
      <Box display="flex" gap={7} marginLeft="37%" marginBottom={2}>
        <Box>
          <Typography variant="h3" fontWeight="600" color="#F47560">
            Ammonia:
            {gasData[gasData.length - 1].Ammonia}ppm
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="600" color="#E8C1A0">
            Methane:
            {gasData[gasData.length - 1].Methane}ppm
          </Typography>
        </Box>
      </Box>
      <Box height="75vh" m={0}>
        <LineChart width={1500} height={600} data={LineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Ammonia" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Methane" stroke="#8884d8" />
        </LineChart>
      </Box>
      <Toaster />
    </Box>
  );
};

export default Line_big;
