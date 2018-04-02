import React, { Component } from 'react';
import BeamSlider from './BeamSlider';
import ColorList from './ColorList';
import PresetButtons from './PresetButtons';
import BackendUpdater from './BackendUpdater';
import { ioConfigs, colorConfigs, animConfigs } from './buttonConfigs';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <p>io</p>
        <PresetButtons buttonConfigs={ioConfigs} />
        <p>colors</p>
        <PresetButtons buttonConfigs={colorConfigs} />
        <p>anims</p>
        <PresetButtons buttonConfigs={animConfigs} />
        
        <BackendUpdater />

        <p>controls</p>
        <div className="controls">
          <BeamSlider attrName="speed" label="Speed" min={1} max={10} />
          <BeamSlider attrName="brightness" label="Brightness" min={0} max={255} />

        </div>
      </div>
    );
  }
}

export default App;
