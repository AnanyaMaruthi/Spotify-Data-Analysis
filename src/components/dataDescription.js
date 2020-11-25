import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StopIcon from '@material-ui/icons/Stop';

const fields_part1 = [
  {
    name: 'id',
    type: 'text',
    description: 'A unique identifier for the song.',
  },
  {
    name: 'acousticness',
    type: 'float',
    description: ' A confidence measure from 0.0 to 1.0 of whether the track is acoustic.',
  },
  {
    name: 'artistis',
    type: 'list<text>',
    description: 'A list of artists of the song.',
  },
  {
    name: 'danceability',
    type: 'float',
    description:
      'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.',
  },
  {
    name: 'duration_ms',
    type: 'int',
    description: 'The duration of the track in milliseconds.',
  },
  {
    name: 'energy',
    type: 'float',
    description:
      'Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.',
  },
];

const fields_part2 = [
  {
    name: 'instrumentalness',
    type: 'float',
    description:
      'Predicts whether a track contains no vocals. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.',
  },
  {
    name: 'key',
    type: 'int',
    description: 'The key the track is in. Integers map to pitches using standard Pitch Class notation.',
  },
  {
    name: 'liveliness',
    type: 'float',
    description:
      'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.',
  },
  {
    name: 'loudness',
    type: 'float',
    description:
      'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.',
  },
  {
    name: 'name',
    type: 'text',
    description: 'The name of the track.',
  },
];

const fields_part3 = [
  {
    name: 'popularity',
    type: 'float',
    description:
      'The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.',
  },
  {
    name: 'speechines',
    type: 'float',
    description:
      'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording, the closer to 1.0 the attribute value.',
  },
  {
    name: 'tempo',
    type: 'float',
    description:
      'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.',
  },
  {
    name: 'Valence',
    type: 'float',
    description:
      'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive.',
  },
  {
    name: 'Year',
    type: 'float',
    description: 'The year the song was released',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right, #1d3557 , #83c5be)`,
    padding: theme.spacing(5),
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
  },
  content: {
    paddingTop: theme.spacing(3),
  },
}));

const DataDescription = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant={'h1'} color={'textSecondary'} align={'center'}>
        Data Description
      </Typography>
      <Grid container className={classes.content} alignContent={'center'}>
        <Grid item sm={4}>
          <List dense>
            {fields_part1.map((field, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StopIcon fontSize={'small'} style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={'textSecondary'}>
                      <b> {field.name} </b> {'-'} <i> {field.type} </i>{' '}
                    </Typography>
                  }
                  secondary={<Typography color={'textSecondary'}>{field.description}</Typography>}
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
                  <StopIcon fontSize={'small'} style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={'textSecondary'}>
                      <b> {field.name} </b> {'-'} <i> {field.type} </i>{' '}
                    </Typography>
                  }
                  secondary={<Typography color={'textSecondary'}>{field.description}</Typography>}
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
                  <StopIcon fontSize={'small'} style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={'textSecondary'}>
                      <b> {field.name} </b> {'-'} <i> {field.type} </i>{' '}
                    </Typography>
                  }
                  secondary={<Typography color={'textSecondary'}>{field.description}</Typography>}
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
