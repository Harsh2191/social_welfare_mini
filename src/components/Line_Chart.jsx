import { Container, Typography } from "@mui/material";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Line_Chart = ({ width, height, maxWidth, isDashboard }) => {
  const gasData = useContext(DataContext);
  let LineData = [];
  if (isDashboard) {
    LineData = gasData.slice(-Math.min(5, gasData.length));
  } else {
    LineData = gasData.slice(-Math.min(10, gasData.length));
  }
  return (
    <Container maxWidth={maxWidth}>
      <LineChart width={width} height={height} data={LineData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Ammonia" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Methane" stroke="#8884d8" />
      </LineChart>
    </Container>
  );
};

export default Line_Chart;
