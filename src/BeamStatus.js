import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getStatus, setBeam, postState } from './actions';
import rainbow from './rainbow.svg';


class BeamStatus extends Component {
  onFetch(e) {
    e.preventDefault();
    getStatus().then(s => {
      return this.props.setBeam(s.delay, s.brightness, s.animation, s.colors);
    })
  }

  onPush(e) {
    e.preventDefault();
    postState({
      delay: this.props.delay,
      brightness: this.props.brightness,
      animation: this.props.animation,
      colors: this.props.colors
    })
  }

  render() {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#208aee', paddingTop: '20px', paddingBottom: '20px'
      }}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div onClick={e => this.onFetch(e)} style={{width: '120px', height: '30px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', 'cursor': 'pointer'}}>fetch</div>
          <div onClick={e => this.onPush(e)} style={{width: '120px', height: '30px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', 'cursor': 'pointer'}}>push</div>
        </div>
      </div>
    );
  }
}


BeamStatus = connect(
  state => (state.beamState),
  (dispatch, ownProps) => ({
    setBeam: (delay, brightness, animation, colors) => dispatch(setBeam(delay, brightness, animation, colors))
  })
)(BeamStatus);


export default BeamStatus;
