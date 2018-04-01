import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, setBeam } from './actions';


const buttonConfigs = [
  {
    'name': 'slow rainbow',
    'animation': 'Rainbow',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'bit trip',
    'animation': 'Strip',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'lava trip',
    'animation': 'Strip',
    'colors': ['#ff0000', '#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'],
  },
  {
    'name': 'easter trip',
    'animation': 'Strip',
    'colors': ['#58e7c7', '#ffebba', '#cc91ff', '#ffa8fb', '#f5ffa6'],
  },
  {
    'name': 'mud wipe rotate',
    'animation': 'ColorWipeRotate',
    'colors': ["#0190b6", "#37ad7e", "#84cc33", "#c69817", "#e13d14"],
  },
  {
    'name': 'catan zap',
    'animation': 'Zap',
    'colors': ["#7b6f83", "#9c4300", "#4fa6eb", "#517d19", "#f0ad00"],
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
  },
  {
    'name': 'lake zap',
    'animation': 'Zap',
    'colors': ["#f2f2f2", "#cccccc", "#b0d8da", "#007897", "#0a406e"],
  },
  {
    'name': 'cold white',
    'animation': 'Light',
    'colors': ['#ffffff']
  },
  {
    'name': 'warm white',
    'animation': 'Light',
    'colors': ['#fff8e7']
  },
  {
    'name': 'off',
    'brightness': 0,
    'colors': [],
  },
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
      <div className="preset" onClick={e => this.onClick(e)}>
        <div className="preset-colors" style={{background: backgroundValue}}></div>
        <div className="preset-name">{this.props.name}</div>
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


export default class BeamPresetsMenu extends Component {
  render() {
    return (
      <div className="preset-wrapper">
        {buttonConfigs.map(config => {
          return <PresetButton key={config.name} {...config} />;
        })}
      </div>
    );
  }
}
