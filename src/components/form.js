import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Chip from '@material-ui/core/Chip';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '500px',
  },
  sliderSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(4),
  },
  slider: {
    width: 200,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Form = ({ data, open, handleClose, handleSubmit }) => {
  const classes = useStyles();

  const [trackName, setTrackName] = useState(data.name);
  const [year, setYear] = useState(data.year);
  const [acousticness, setAcousticness] = useState(data.acousticness);
  const [danceability, setDanceability] = useState(data.danceability);
  const [energy, setEnergy] = useState(data.energy);
  const [instrumentalness, setInstrumentalness] = useState(data.instrumentalness);
  const [liveness, setLiveness] = useState(data.liveness);
  const [loudness, setLoudness] = useState(data.loudness);
  const [speechiness, setSpeechiness] = useState(data.speechiness);
  const [tempo, setTempo] = useState(data.tempo);
  const [valence, setValence] = useState(data.valence);
  const [popularity, setPopularity] = useState(data.popularity);
  const [artists, setArtists] = useState(data.artists);
  const [inputArtist, setInputArtist] = useState('');

  const onConfirm = () => {
    handleSubmit({
      acousticness,
      artists,
      danceability,
      duration_ms: 24000,
      energy,
      id: data.id ? data.id : uuidv4(),
      instrumentalness,
      key: 10,
      liveness,
      loudness,
      name: trackName,
      popularity,
      speechiness,
      tempo,
      valence,
      year: Number(year),
    });
  };

  const handleArtistDelete = (artistToDelete) => () => {
    setArtists((artists) => artists.filter((artist) => artist !== artistToDelete));
  };

  const handleArtistAdd = (e) => {
    setArtists((artists) => {
      artists.push(inputArtist);
      return artists;
    });
    setInputArtist('');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={'paper'}
      aria-labelledby='form-dialog-title'
      aria-describedby='form-dialog-description'
    >
      <DialogTitle id='form-dialog-title'>{`Track`}</DialogTitle>
      <DialogContent dividers={true} className={classes.root}>
        <form>
          <Box display='flex' flexDirection='row' justifyContent={'space-between'}>
            <TextField
              autoFocus
              margin='dense'
              id='track-name'
              label='Track Name'
              type='name'
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
            />
            <TextField
              margin='dense'
              id='track-year'
              label='Year'
              type='number'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Box>

          <Box className={classes.sliderSection}>
            <Box className={classes.slider}>
              <Typography id='acousticness-slider' variant={'body1'}>
                {` Acousticness - ${acousticness}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={acousticness}
                onChange={(e, value) => setAcousticness(value)}
                valueLabelDisplay='off'
                aria-labelledby='acousticness-slider'
                color={'primary'}
              />
            </Box>
            <Box className={classes.slider}>
              <Typography id='danceability-slider' variant={'body1'}>
                {` Danceability - ${danceability}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={danceability}
                onChange={(e, value) => setDanceability(value)}
                valueLabelDisplay='off'
                aria-labelledby='danceability-slider'
                color={'primary'}
              />
            </Box>
          </Box>

          <Box className={classes.sliderSection}>
            <Box className={classes.slider}>
              <Typography id='energy-slider' variant={'body1'}>
                {` Energy - ${energy}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={energy}
                onChange={(e, value) => setEnergy(value)}
                valueLabelDisplay='off'
                aria-labelledby='energy-slider'
                color={'primary'}
              />
            </Box>
            <Box className={classes.slider}>
              <Typography id='instrumentalness-slider' variant={'body1'}>
                {` Instrumentalness - ${instrumentalness}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={instrumentalness}
                onChange={(e, value) => setInstrumentalness(value)}
                valueLabelDisplay='off'
                aria-labelledby='instrumentalness-slider'
                color={'primary'}
              />
            </Box>
          </Box>

          <Box className={classes.sliderSection}>
            <Box className={classes.slider}>
              <Typography id='liveness-slider' variant={'body1'}>
                {` Liveness - ${liveness}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={liveness}
                onChange={(e, value) => setLiveness(value)}
                valueLabelDisplay='off'
                aria-labelledby='liveness-slider'
                color={'primary'}
              />
            </Box>
            <Box className={classes.slider}>
              <Typography id='loudness-slider' variant={'body1'}>
                {` Loudness - ${loudness}`}
              </Typography>
              <Slider
                min={-20}
                max={5}
                step={1}
                value={loudness}
                onChange={(e, value) => setLoudness(value)}
                valueLabelDisplay='off'
                aria-labelledby='loudness-slider'
                color={'primary'}
              />
            </Box>
          </Box>

          <Box className={classes.sliderSection}>
            <Box className={classes.slider}>
              <Typography id='speechiness-slider' variant={'body1'}>
                {` Speechiness - ${speechiness}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={speechiness}
                onChange={(e, value) => setSpeechiness(value)}
                valueLabelDisplay='off'
                aria-labelledby='speechiness-slider'
                color={'primary'}
              />
            </Box>
            <Box className={classes.slider}>
              <Typography id='valence-slider' variant={'body1'}>
                {` Valence - ${valence}`}
              </Typography>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={valence}
                onChange={(e, value) => setValence(value)}
                valueLabelDisplay='off'
                aria-labelledby='valence-slider'
                color={'primary'}
              />
            </Box>
          </Box>

          <Box className={classes.sliderSection}>
            <Box className={classes.slider}>
              <Typography id='popularity-slider' variant={'body1'}>
                {` Popularity - ${popularity}`}
              </Typography>
              <Slider
                min={0}
                max={100}
                step={1}
                value={popularity}
                onChange={(e, value) => setPopularity(value)}
                valueLabelDisplay='off'
                aria-labelledby='popularity-slider'
                color={'primary'}
              />
            </Box>
            <Box className={classes.slider}>
              <Typography id='tempo-slider' variant={'body1'}>
                {` Tempo - ${tempo}`}
              </Typography>
              <Slider
                min={60}
                max={240}
                step={1}
                value={tempo}
                onChange={(e, value) => setTempo(value)}
                valueLabelDisplay='off'
                aria-labelledby='tempo-slider'
                color={'primary'}
              />
            </Box>
          </Box>

          <Box display='flex' flexDirection='row'>
            <TextField
              fullWidth
              margin='dense'
              id='artist-name'
              label='Add Artist'
              type='name'
              value={inputArtist}
              onChange={(e) => setInputArtist(e.target.value)}
            />
            <Button color={'primary'} size={'small'} onClick={handleArtistAdd}>
              Add
            </Button>
          </Box>
          <Box>
            {artists.map((artist, index) => (
              <Chip
                key={index}
                label={artist}
                onDelete={handleArtistDelete(artist)}
                className={classes.chip}
                color={'primary'}
              />
            ))}
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
