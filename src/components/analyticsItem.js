import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ChartSample from "./charts/chartSample";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
}));

const AnalyticsItem = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Typography variant={"h2"} align={"center"} style={{ color: "black" }}>
        Some Analysis
      </Typography>

      <Grid container className={classes.content}>
        <Grid item sm={6}>
          <ChartSample />
        </Grid>
        <Grid
          item
          sm={6}
          style={{ display: "grid", alignContent: "space-around" }}
        >
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsItem;
