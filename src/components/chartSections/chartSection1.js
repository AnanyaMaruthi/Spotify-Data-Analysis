import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Stackedbar5 from "../charts/stackedBar5";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: "right",
  },
}));

const ChartSection1 = () => {
  const classes = useStyles();
  const [year, setYear] = useState(1921);

  const menuItems = [];
  for (let i = 1921; i <= 2020; i++) {
    menuItems.push(<MenuItem value={i}>{i}</MenuItem>);
  }

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Typography variant={"h2"} align={"center"} style={{ color: "black" }}>
        Some Analysis
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel id="year-label">Select Year</InputLabel>
        <Select
          labelId="year-label"
          id="year-select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {menuItems.map((_) => _)}
        </Select>
      </FormControl>

      <Stackedbar5 year={year} />

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

export default ChartSection1;
