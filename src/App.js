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
      </div>
    );
  }
}

export default App;
