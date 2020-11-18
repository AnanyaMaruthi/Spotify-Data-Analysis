import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "./radar";
import data from "../../../data/charts.json";
import OvelappingChart from "./overlappingRadar";

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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    gap: "15px",
    marginTop: theme.spacing(4),
  },
}));

const TopTracks = () => {
  const classes = useStyles();

  const [trackNumber, setTrackNumber] = useState(1);
  const labels = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
  ];

  const getRequiredData = (data) => [
    data["acousticness"],
    data["danceability"],
    data["energy"],
    data["instrumentalness"],
    data["liveness"],
    data["speechiness"],
    data["valence"],
  ];

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Typography variant={"h2"} align={"center"}>
        {`Top 100 Tracks - 2020`}
      </Typography>

      <div>
        <div className={classes.slider}>
          <Typography id="year-slider">Song</Typography>
          <Slider
            min={1}
            max={100}
            step={1}
            value={trackNumber}
            onChange={(e, newRange) => setTrackNumber(newRange)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            color={"secondary"}
          />
        </div>
        {/* <Typography variant={"body1"}>
          {`${data[trackNumber - 1]["name"]} by ${data[trackNumber - 1][
            "artists"
          ].join(", ")}`}
        </Typography> */}
      </div>

      <Chart
        trackData={getRequiredData(data[trackNumber - 1])}
        trackName={data[trackNumber - 1]["name"]}
        labels={labels}
      />

      <OvelappingChart data={data.slice(0, 5)} />

      <Typography variant={"body1"} style={{ color: "black" }}>
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
      </Typography>
    </Container>
  );
};

export default TopTracks;
