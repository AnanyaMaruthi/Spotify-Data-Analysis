import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './chart';
import range from 'lodash/range';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  autocomplete: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: 'right',
    width: 120,
  },
}));

const AudioFeaturesDistribution = () => {
  const classes = useStyles();
  const [year, setYear] = useState(1921);

  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/api/v1//tracks/${year}/distribution`);
    if (response.ok) {
      let data = await response.json();
      setInputData(data['tracksDistForYear']);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [year]);

  return (
    <Container maxWidth={'lg'} className={classes.root}>
      <Typography variant={'h2'} align={'center'}>
        {`Audio Features Distribution - Year ${year}`}
      </Typography>
      <Autocomplete
        className={classes.autocomplete}
        onChange={(e, value) => setYear(value ? parseInt(value) : 2020)}
        options={range(1921, 2021).map((year) => year.toString())}
        renderInput={(params) => <TextField {...params} label={'Year'} />}
      />

      {loading ? <CircularProgress color='inherit' size={100} /> : <Chart year={year} data={inputData} />}

      <Typography variant={'body1'} style={{ color: 'black' }}>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.'
      </Typography>
      <Typography variant={'caption'}>
        {`db.collection.find({
                blabla: {
                  $aggregate: {do something}
                }
              })`}
      </Typography>
    </Container>
  );
};

export default AudioFeaturesDistribution;
