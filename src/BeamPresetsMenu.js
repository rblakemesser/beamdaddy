import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeam } from './actions';


const buttonConfigs = [
  {
    'name': 'roygbiv',
    'colors': ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'],
  },
  {
    'name': 'lava',
    'colors': ['#ff0000', '#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'],
  },
  {
    'name': 'easter',
    'colors': ['#58e7c7', '#ffebba', '#cc91ff', '#ffa8fb', '#f5ffa6'],
  },
  {
    'name': 'mud',
    'colors': ["#0190b6", "#37ad7e", "#84cc33", "#c69817", "#e13d14"],
  },
  {
    'name': 'autumn',
    'colors': ["#f3780a", "#fc7138", "#ffbd4a", "#7c4d25"],
  },
  {
    'name': 'catan',
    'colors': ["#7b6f83", "#9c4300", "#4fa6eb", "#517d19", "#f0ad00"],
  },
  {
    'name': 'mermaid',
    'colors': ["#180e80", "#300d80", "#530b80", "#780780", "#a10780"],
  },
  {
    'name': 'ionic',
    'colors': ["#ffc900", "#33cd5f", "#886aea", "#387ef5", "#ef473a"],
  },
  {
    'name': 'blue swirl',
    'colors': ["#00e4ff", "#00b1ff", "#0070ff", "#004aff", "#0009ff"],
  },
  {
    'name': 'lake',
    'colors': ["#f2f2f2", "#cccccc", "#b0d8da", "#007897", "#0a406e"],
  }
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
        <div style={{marginTop: '25px'}}>Color Presets</div>
        <div style={{flex: 1, 'display': 'flex', 'flexWrap': 'wrap', marginTop: '10px', 'borderRadius': '30px', justifyContent: 'space-around'}}>
          {buttonConfigs.map(config => {
            return <BeamPreset key={config.name} {...config} />;
          })}
        </div>
      </div>
    );
  }
}
