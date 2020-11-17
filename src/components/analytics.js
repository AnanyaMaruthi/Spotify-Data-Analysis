import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AnalyticsItem from "./analyticsItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white", // "#E8D9DC",
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
      <AnalyticsItem />
    </Box>
  );
};

export default Analytics;
