import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chart from './chart';

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
    float: 'right',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    marginTop: theme.spacing(4),
  },
}));

const ArtistVersatility = () => {
  const classes = useStyles();

  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState('Marshmello');
  const [inputData, setInputData] = useState({});

  const [init, setInit] = useState(true);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const initialize = async () => {
    const [response, artist_response] = await Promise.all([
      fetch('http://localhost:8080/api/v1/artists/names'),
      fetch('http://localhost:8080/api/v1/artists/Marshmello'),
    ]);

    if (artist_response.ok) {
      let data = await artist_response.json();
      setInputData(data);
      console.log(data);
      // debugger;
    }

    if (response.ok) {
      const data = await response.json();
      setArtists(data);
      setLoading(false);
    }
  };

  if (init) {
    setInit(false);
    initialize();
  }

  const selectArtist = async (value) => {
    setArtist(value ? value : 'Marshmello');
    const response = await fetch('http://localhost:8080/api/v1/artists/' + value);
    if (response.ok) {
      let data = await response.json();
      setInputData(data);
    }
  };

  return (
    <Container maxWidth={'lg'} className={classes.root}>
      <Typography variant={'h2'} align={'center'}>
        {`Artist Versatility - ${artist}`}
      </Typography>

      <Autocomplete
        style={{ width: 300 }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(e, value) => selectArtist(value)}
        options={artists}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Artist'
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

      {JSON.stringify(inputData) !== '{}' && <Chart data={inputData} />}

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

export default ArtistVersatility;
