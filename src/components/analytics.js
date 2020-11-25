import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AudioFeaturesDistribution from './chartSections/audioFeaturesDistribution';
import { Divider } from '@material-ui/core';
import AudioFeaturesTrends from './chartSections/audioFeaturesTrends';
import TopTracks from './chartSections/topTracks';
import ArtistVersatility from './chartSections/artistVersatility';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    padding: theme.spacing(5),
  },
  heading: {
    paddingBottom: theme.spacing(3),
  },
}));

const Analytics = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant={'h1'} align={'center'} color={'textPrimary'} className={classes.heading}>
        Data Analysis
      </Typography>
      <AudioFeaturesDistribution />
      <Divider />
      <AudioFeaturesTrends />
      <Divider />
      <ArtistVersatility />
      <Divider />
      <TopTracks />
      <Divider />
    </Box>
  );
};

export default Analytics;
