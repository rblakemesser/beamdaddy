import React, { Component } from 'react';
import config from './config';
import { connect } from 'react-redux';
import { setBeam } from './actions';


const buttonConfigs = [
  {
    'name': 'bit trip',
    'animation': 'strip',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'rain dots',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
    'animation': 'rain',
  },
  {
    'name': 'lava trip',
    'animation': 'strip',
    'colors': ['#ff0000', '#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'],
  },
];


class BeamPreset extends Component {
  onClick(e) {
    this.props.setBeam();
  }

  render() {
    return (
      <div onClick={e => this.onClick(e)} style={{display: 'flex', 'border': '1px solid black', 'alignItems': 'center', justifyContent: 'center', 'cursor': 'pointer', 'height': '60px', 'width': '60px', 'borderRadius': '30px'}}>
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
      <div>
        <div style={{marginTop: '25px'}}>Presets</div>
        <div style={{flex: 1, 'display': 'flex', 'flexWrap': 'wrap', marginTop: '10px', 'borderRadius': '30px', justifyContent: 'space-around'}}>
          {buttonConfigs.map(config => {
            return <BeamPreset key={config.name} {...config} />;
          })}
        </div>
      </div>
    );
  }
}
