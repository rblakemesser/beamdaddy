import React, { Component } from 'react';
import config from './config';
import { connect } from 'react-redux';
import { setBeam } from './actions';


const buttonConfigs = [
  {
    'name': 'pure white',
    'animation': 'light',
    'colors': ['#ffffff'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'pure red',
    'animation': 'light',
    'colors': ['#FF0000'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'pure blue',
    'animation': 'light',
    'colors': ['#0000FF'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'pure green',
    'animation': 'light',
    'colors': ['#008000'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'bit trip',
    'animation': 'strip',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'bit still',
    'animation': 'light',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'rainbow slow',
    'animation': 'rainbow',
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'rainbow fast',
    'animation': 'rainbow',
    'delay': .01,
    'brightness': 255,
  },
  {
    'name': 'bloom fast',
    'animation': 'bloom',
    'delay': .01,
    'brightness': 255,
  },
  {
    'name': 'bloom slow',
    'animation': 'bloom',
    'delay': .05,
    'brightness': 255,
  },
  {
    'name': 'rain',
    'animation': 'rain',
    'delay': .25,
    'brightness': 255,
  },
  {
    'name': 'rain dots',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
    'animation': 'rain',
    'delay': .25,
    'brightness': 255,
  },
  {
    'name': 'lava trip',
    'animation': 'strip',
    'colors': ['#ff0000', '#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'],
    'delay': .05,
    'brightness': 255,
  },
];


class BeamPreset extends Component {
  onClick(e) {
    this.props.setBeam();
  }

  render() {
    return (
      <div onClick={e => this.onClick(e)} style={{'flex': 1, 'padding': '20px', 'margin': '15px', 'border': '1px solid black', flexDirection: 'column', 'justifyContent': 'center'}}>
        {this.props.name}
      </div>
    );
  }
}


BeamPreset = connect(
  state => ({}),
  (dispatch, ownProps) => ({
    setBeam: () => dispatch(setBeam(
      ownProps.delay,
      ownProps.brightness,
      ownProps.animation,
      ownProps.colors
    ))
  })
)(BeamPreset)


export default class BeamPresetsMenu extends Component {
  render() {
    return (
      <div style={{'padding': '15px', 'display': 'flex', 'flexWrap': 'wrap', 'maxWidth': '960px', 'margin': 'auto', 'justifyContent': 'space-between'}}>
        {buttonConfigs.map(config => {
          return <BeamPreset key={config.name} {...config} />;
        })}
      </div>
    );
  }
}
