import React from 'react';
import Calendar from './components/Calendar';
import Schedule from './containers/VisibleSchedule';
import './App.css';
import logo from './assets/logojob.png'

const App: React.FC = () => {

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row Header">
          <div className="col-sm-8">
            <h1 className="Title">Welcome to Calendar: January 2020</h1>
          </div>
          <div className="col-sm-4">
            <img src={logo} className="Logo" />
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
