import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postState } from './actions';



class BackendUpdater extends Component {
  componentDidUpdate() {
    this.props.postState({
      speed: this.props.speed,
      brightness: this.props.brightness,
      animation: this.props.animation,
      colors: this.props.colors
    });
  }

  render() {
    return null;
  }
}


BackendUpdater = connect(
  state => state.beamState,
  (dispatch, ownProps) => ({
    postState
  })
)(BackendUpdater)

export default BackendUpdater;
