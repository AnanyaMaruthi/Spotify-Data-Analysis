import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Add, Delete, Edit, PlusOneRounded } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Form from './form';

const styles = {
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchBox: {
    marginRight: 'auto',
  },
  block: {
    display: 'block',
  },
  table: {
    minWidth: 620,
    overflow: 'hidden',
  },
};

const Display = () => {
  const emptyTrack = {
    name: '',
    year: '',
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    liveness: 0,
    loudness: -20,
    speechiness: 0,
    popularity: 0,
    tempo: 60,
    valence: 0,
    artists: [],
  };
  const columns = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'artists', headerName: 'Artists', width: 300 },
    { field: 'duration_ms', headerName: 'Duration (ms)', width: 120 },
    { field: 'year', headerName: 'Year', width: 70 },
    { field: 'popularity', headerName: 'Popularity', width: 100 },
    { field: 'danceability', headerName: 'Danceability', width: 120 },
    { field: 'energy', headerName: 'Energy', width: 80 },
    { field: 'valence', headerName: 'Valence', width: 90 },
    { field: 'tempo', headerName: 'Tempo', width: 100 },
    { field: 'instrumentalness', headerName: 'Instrumentalness', width: 150 },
    { field: 'speechiness', headerName: 'Speechiness', width: 110 },
    { field: 'acousticness', headerName: 'Acousticness', width: 120 },
    { field: 'liveness', headerName: 'Liveness', width: 90 },
    { field: 'key', headerName: 'Key', width: 60 },
    { field: 'loudness', headerName: 'Loudness', width: 100 },
    { field: 'id', headerName: 'ID', width: 240 },
  ];

  const [form, setForm] = useState(false);

  const [tracks, setTracks] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(emptyTrack);

  const init = async () => {
    const response = await fetch('http://localhost:8080/api/v1/tracks');
    if (response.ok) {
      const data = await response.json();
      setCount(data.count);
      setTracks(data.tracks);
    }
  };

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    init();
  }, []);

  const insert = () => {
    setData(emptyTrack);
    setForm(true);
  };

  const edit = () => {
    setData(tracks.find((value) => (value.id = selected[0])));
    setForm(true);
  };

  const remove = () => {};

  return (
    <>
      <Form open={form} data={data} handleClose={() => setForm(form)} />
      <IconButton color={'primary'} onClick={insert}>
        <Add />
      </IconButton>
      <IconButton color={'primary'} disabled={selected.length !== 1} onClick={edit}>
        <Edit />
      </IconButton>
      <IconButton color={'primary'} disabled={selected.length === 0} onClick={remove}>
        <Delete />
      </IconButton>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={tracks}
          columns={columns}
          checkboxSelection
          onSelectionChange={(selectionChangeParams) => setSelected(selectionChangeParams.rowIds)}
          rowCount={count}
        />
      </div>
    </>
  );
};

export default Display;
