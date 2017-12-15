import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import _ from 'lodash';
import 'rc-slider/assets/index.css';
import { changeAttribute } from './actions';


class BeamSlider extends Component {

  onSliderChange(newVal) {
    if (this.props.attrName === 'delay') {
      newVal /= 20;
    }

    this.props.changeAttribute(newVal);
  }

  render() {
    let val = this.props.attrName === 'delay' ? this.props.delay : this.props.brightness;
    if (this.props.attrName === 'delay') {
      val *= 20;
    }

    return (
      <div>
        <div>{this.props.label}</div>
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={val}
          onChange={newVal => this.onSliderChange(newVal)}
        />
      </div>
    );
  }
}


BeamSlider = connect(
  state => (state.beamState),
  (dispatch, ownProps) => ({
    changeAttribute: newVal => dispatch(changeAttribute(ownProps.attrName, newVal))
  })
)(BeamSlider);


export default BeamSlider;
