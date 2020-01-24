import React from 'react';
import Calendar from './components/Calendar';
import Schedule from './components/Schedule';
import logojob from './assets/logojob.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row Header">
          <div className="col-sm-2">
            <img src={logojob} alt="Logo" className="Logo" />
          </div>
          <div className="col-sm-8">
            <h1>Welcome to Jobsity Calendar</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <Calendar />
          </div>
          <div className="col-md-12 col-lg-4">
            <Schedule />
          </div>
        </div>
      </div>
      <div className="container-fluid Footer">
        <div className="row">
          <div className="col-12">
            Developed by Jean Karlo Obando - 2020
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
