import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, setBeam } from './actions';

import hotdog from './hotdog.svg';


const buttonConfigs = [
  {
    'name': 'pure white',
    'animation': 'Light',
    'colors': ['#ffffff']
  },
  {
    'name': 'slow rainbow',
    'animation': 'Rainbow',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'lava trip',
    'animation': 'Strip',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'mermaid twinkle',
    'animation': 'Twinkle',
    'colors': ["#180e80", "#300d80", "#530b80", "#780780", "#a10780"],
  },
  {
    'name': 'ionic rain',
    'animation': 'Rain',
    'colors': ["#ffc900", "#33cd5f", "#886aea", "#387ef5", "#ef473a"],
  },
  {
    'name': 'blue swirl',
    'animation': 'ColorWipeRotate',
    'colors': ["#00e4ff", "#00b1ff", "#0070ff", "#004aff", "#0009ff"],
  }
];


class PresetButton extends Component {
  onClick(e) {
    this.props.setBeam();
  }

  render() {
    const colors = this.props.colors;
    const numColors = this.props.colors.length;

    const colorPositionList = [];
    colors.map((color, n) => {
      const lowerBound = n * 100 / numColors + '%';
      const upperBound = (n + 1) * 100 / numColors + '%';

      colorPositionList.push(color + ' ' + lowerBound);
      colorPositionList.push(color + ' ' + upperBound);
    });

    const backgroundValue = `-webkit-linear-gradient(left, ${colorPositionList.join(', ')})`;

    return (
      <div draggable={false} className="preset" onClick={e => this.onClick(e)}>
        <div draggable={false} className="preset-colors" style={{background: backgroundValue}}>
          <img draggable={false} src={hotdog} className="hotdog" alt="logo" />
        </div>
      </div>
    );
  }
}


PresetButton = connect(
  state => ({}),
  (dispatch, ownProps) => ({
    setBeam: () => dispatch(setBeam(
      ownProps.speed,
      ownProps.brightness,
      ownProps.animation,
      ownProps.colors
    ))
  })
)(PresetButton)


class BeamPresetsMenu extends Component {
  render() {
    let nextConfig;
    for (let n in buttonConfigs) {
      let val = buttonConfigs[n];
      if (val.animation === this.props.animation) {
        let idx = buttonConfigs.length - 1 === parseInt(n) ? 0 : parseInt(n) + 1;
        nextConfig = buttonConfigs[idx];

        console.log('next config is: ', nextConfig.name, '   n is: ', n, '    idx is: ', idx);
        break;
      }
    }

    if (!nextConfig) {
      nextConfig = buttonConfigs[0];
    }
    return (
      <div className="preset-wrapper">
        <PresetButton key={nextConfig.name} {...nextConfig} />
      </div>
    );
  }
}


BeamPresetsMenu = connect(
  state => state.beamState,
  (dispatch, ownProps) => ({})
)(BeamPresetsMenu)


export default BeamPresetsMenu;
