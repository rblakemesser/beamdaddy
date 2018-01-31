import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postState, getState, setBeam } from './actions';
import _ from 'lodash';


class BackendUpdater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      synced: false
    };
    this.props.getState().then(
      beamState => {
        this.props.setBeam(beamState.speed, beamState.brightness, beamState.animation, beamState.colors);
        this.setState({synced: true});
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.synced) {
      return;
    }

    if (this.props.speed == prevProps.speed && this.props.brightness == prevProps.brightness && this.props.animation == prevProps.animation && _.isEqual(this.props.colors, prevProps.colors)) {
      return;
    }

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
    postState,
    getState,
    setBeam: (speed, brightness, animation, colors) => dispatch(setBeam(speed, brightness, animation, colors))
  })
)(BackendUpdater)

export default BackendUpdater;
