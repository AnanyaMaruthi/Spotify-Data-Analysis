import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ChartSection1 from "./chartSections/chartSection1";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: theme.spacing(5),
  },
  heading: {
    color: theme.palette.common.black,
  },
}));

const Analytics = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant={"h1"} align={"center"} color={"textPrimary"}>
        Data Analysis
      </Typography>
      <ChartSection1 />
    </Box>
  );
};

export default Analytics;
