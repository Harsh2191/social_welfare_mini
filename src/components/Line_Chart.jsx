import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";
import DataContext from "../context/DataContext";
import { useContext, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const useStyles = makeStyles((theme) => ({
  contAlign: {
    position: "relative",
    left: "-40px",
    maxWidth: "lg",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "-30px",
      maxWidth: "sm",
    },
  },
}));

const Line_Chart = () => {
  const { gasData } = useContext(DataContext);
  let LineData = gasData.slice(-Math.min(5, gasData.length));
  const classes = useStyles();

  const [values, setValues] = useState({
    wt: 100,
    ht: 100,
  });
  const theme = createTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isXs) {
      setValues({ wt: 380, ht: 250 });
    } else if (isSm) {
      setValues({ wt: 950, ht: 250 });
    }
  }, [isXs, isSm]);
  return (
    <Container
      // maxWidth={maxWidth}
      sx={{ margin: 0, display: "flex", justifyContent: "center" }}
      className={classes.contAlign}
    >
      <LineChart width={values.wt} height={values.ht} data={LineData}>
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
