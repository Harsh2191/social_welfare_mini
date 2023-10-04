import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Pie_Chart = () => {
  const { gasData } = useContext(DataContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    { name: "Ammonia", value: gasData[gasData.length - 1].Ammonia },
    { name: "Methane", value: gasData[gasData.length - 1].Methane },
  ];
  const COLORS = ["#F47560", "#E8C1A0"];
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={60}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip animationBegin={0} />

      <Legend />
    </PieChart>
  );
};

export default Pie_Chart;
