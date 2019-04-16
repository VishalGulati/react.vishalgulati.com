import React from 'react';
import './Me.css';
import Accomplishments from '../Accomplishments/Accomplishments';
import InProgress from '../InProgress/InProgress';
import ToDo from '../ToDo/ToDo';

/**
 * The application body
 */
const Me = () => {
  return (
    <div className="app-me container-fluid">
      <Accomplishments />
      <InProgress />
      <ToDo />
    </div>
  );
};

export default Me;
