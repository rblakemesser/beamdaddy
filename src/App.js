import React, { Component } from 'react';
import BeamSlider from './BeamSlider';
import AnimationList from './AnimationList';
import ColorList from './ColorList';
import PresetButtons from './PresetButtons';
import BackendUpdater from './BackendUpdater';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <PresetButtons />
        <BackendUpdater />

        <div className="controls">
          <BeamSlider attrName="speed" label="Speed" min={1} max={10} />
          <BeamSlider attrName="brightness" label="Brightness" min={0} max={255} />

          <AnimationList />

        </div>
      </div>
    );
  }
}

export default App;
