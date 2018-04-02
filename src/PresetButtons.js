import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, setBeam } from './actions';


class PresetButton extends Component {
  onClick(e) {
    this.props.setBeam();
  }

  render() {
    const colors = this.props.displayColors || this.props.colors;
    const numColors = colors ? colors.length : 0;

    const colorPositionList = [];
    if (colors) {
      colors.map((color, n) => {
        const lowerBound = n * 100 / numColors + '%';
        const upperBound = (n + 1) * 100 / numColors + '%';

        colorPositionList.push(color + ' ' + lowerBound);
        colorPositionList.push(color + ' ' + upperBound);
      });
    }

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
        {this.props.buttonConfigs.map(config => {
          return <PresetButton key={config.name} {...config} />;
        })}
      </div>
    );
  }
}
