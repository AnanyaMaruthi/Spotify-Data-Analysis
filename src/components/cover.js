import React from 'react';
import coverImage from '../images/cover.jpg';
import {Toolbar, Typography} from "@material-ui/core";

const Cover = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${coverImage})`,
        height: '750px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: 'red',
      }}
    >
      <Toolbar style={{justifyContent:'center', height:'100%', }}>
        <Typography variant={'h1'} style={{color:'#FFF', fontSize:'4rem'}}>
          SPOTIFY DATA ANALYSIS
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Cover;
