import React, { Component } from 'react';
import Slider from 'rc-slider';
import _ from 'lodash';
import 'rc-slider/assets/index.css';


class BeamSlider extends Component {

  onSliderChange(newVal) {
    console.log(newVal);
  }

  render() {
    return (
      <div style={{margin: '10px 25px'}}>
        <div>{this.props.label}</div>
        <Slider
          min={this.props.min}
          max={this.props.max}
          onChange={_.throttle(newVal => this.onSliderChange(newVal), 1000)}
        />
      </div>
    );
  }
}

export default BeamSlider;
