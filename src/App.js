import React, { Component } from 'react';
import beam from './beam.svg';
import BeamPresetsMenu from './BeamPresetsMenu';
import BeamSlider from './BeamSlider';
import BeamStatus from './BeamStatus';
import ColorList from './ColorList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}} className="App">
        <header className="App-header">
          <img src={beam} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, Beam Daddy</h1>
          <BeamStatus />
        </header>

        <div style={{maxWidth: '800px', display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
          <BeamSlider attrName="delay" label="Delay" min={1} max={20} />
          <BeamSlider attrName="brightness" label="Brightness" min={0} max={255} />
          <ColorList />

          <BeamPresetsMenu />
        </div>
      </div>
    );
  }
}

export default App;
