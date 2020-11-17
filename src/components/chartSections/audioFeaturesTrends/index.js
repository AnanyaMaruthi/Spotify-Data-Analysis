import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
// import Chart from "./chart";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  slider: {
    width: 275,
    float: "right",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
    marginTop: theme.spacing(4),
  },
}));

const AudioFeaturesTrends = () => {
  const classes = useStyles();

  const [years, setYears] = useState([1921, 2020]);

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Typography variant={"h2"} align={"center"}>
        {`Audio Features Trends - Years ${years[0]} to ${years[1]}`}
      </Typography>

      <div className={classes.slider}>
        <Typography id="year-slider">Years</Typography>
        <Slider
          min={1921}
          max={2020}
          step={1}
          value={years}
          onChange={(e, newRange) => setYears(newRange)}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          color={"secondary"}
        />
      </div>

      {/* <Chart year={year} /> */}

      {/* <Typography variant={"body1"} style={{ color: "black" }}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      </Typography>
      <Typography variant={"caption"}>
        {`db.collection.find({
                blabla: {
                  $aggregate: {do something}
                }
              })`}
      </Typography> */}
    </Container>
  );
};

export default AudioFeaturesTrends;
