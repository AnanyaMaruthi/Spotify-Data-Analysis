import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StopIcon from "@material-ui/icons/Stop";

const fields_part1 = [
  {
    name: "id",
    type: "text",
    description: "A unique identifier",
  },
  {
    name: "acousticness",
    type: "float",
    description: ".......",
  },
  {
    name: "artistis",
    type: "list<text>",
    description: "A list of artists",
  },
  {
    name: "danceability",
    type: "float",
    description: "......",
  },
  {
    name: "duration_ms",
    type: "int",
    description: "Song duration in milli seconds",
  },
  {
    name: "energy",
    type: "float",
    description: "......",
  },
];

const fields_part2 = [
  {
    name: "instrumentalness",
    type: "float",
    description: ".....",
  },
  {
    name: "key",
    type: "int",
    description: "....",
  },
  {
    name: "liveliness",
    type: "float",
    description: "....",
  },
  {
    name: "loudness",
    type: "float",
    description: "....",
  },
  {
    name: "name",
    type: "text",
    description: "Name of the song",
  },
  {
    name: "populatity",
    type: "float",
    description: "Polpularity of the song",
  },
];

const fields_part3 = [
  {
    name: "speechines",
    type: "float",
    description: "Speechiness of the song",
  },
  {
    name: "tempo",
    type: "float",
    description: "Tempo of the song",
  },
  {
    name: "populatity",
    type: "float",
    description: "Polpularity of the song",
  },
  {
    name: "Valence",
    type: "float",
    description: "......",
  },
  {
    name: "Year",
    type: "float",
    description: "Song release year?",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right, #1d3557 , #83c5be)`,
    padding: theme.spacing(5),
  },
  list: {
    paddingLeft: theme.spacing(10),
  },
}));

const DataDescription = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant={"h1"} color={"textSecondary"} align={"center"}>
        Data Description
      </Typography>
      <Grid container className={classes.list}>
        <Grid item sm={4}>
          <List dense>
            {fields_part1.map((field, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StopIcon fontSize={"small"} style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={"textSecondary"}>
                      <b> {field.name} </b> {"-"} <i> {field.type} </i>{" "}
                    </Typography>
                  }
                  secondary={
                    <Typography color={"textSecondary"}>
                      {field.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item sm={4}>
          <List dense>
            {fields_part2.map((field, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StopIcon fontSize={"small"} style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={"textSecondary"}>
                      <b> {field.name} </b> {"-"} <i> {field.type} </i>{" "}
                    </Typography>
                  }
                  secondary={
                    <Typography color={"textSecondary"}>
                      {field.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item sm={4}>
          <List dense>
            {fields_part3.map((field, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StopIcon fontSize={"small"} style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={"textSecondary"}>
                      <b> {field.name} </b> {"-"} <i> {field.type} </i>{" "}
                    </Typography>
                  }
                  secondary={
                    <Typography color={"textSecondary"}>
                      {field.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataDescription;
