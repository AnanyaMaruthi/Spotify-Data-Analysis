import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "./chart";
import data from "../../../data/versatility.json";

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

const ArtistVersatility = () => {
  const classes = useStyles();

  const [artist, setArtist] = useState("Ananya");
  const [inputData, setInputData] = useState(data);

  //   todo: make api call and Update inputData everytime artist changes

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Typography variant={"h2"} align={"center"}>
        {`Artist Versatility - ${artist}`}
      </Typography>

      {/* todo: fix this  */}
      <Autocomplete
        defaultValue={"Ananya"}
        id={"location-input"}
        onChange={(event, value) => {
          setArtist(value);
        }}
        options={["Ananya", "Nitesh"]}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              placeholder: "Select Artist",
            }}
            variant="outlined"
          />
        )}
      />
      <Chart data={inputData} />

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

export default ArtistVersatility;
