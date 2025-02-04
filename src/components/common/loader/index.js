import React from 'react';
import './style.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div className='loader-wrapper'>
      <CircularProgress />
    </div>
  );
}