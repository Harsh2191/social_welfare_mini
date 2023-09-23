import { Box } from "@mui/material";
import Header from "../../components/Header";
import Line_Chart from "../../components/Line_Chart";
const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="Gas concentrations"
        subtitle="concentration over time"
        isDashboard={false}
      />
      <Box height="75vh" m={0}>
        <Line_Chart width={1200} height={600} maxWidth="xl" />
      </Box>
    </Box>
  );
};

export default Line;
