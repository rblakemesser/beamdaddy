import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getStatus, setBeam, postState } from './actions';
import rainbow from './rainbow.svg';


class CurrentColor extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: this.props.color,
        height: '30px',
        width: '30px',
        borderRadius: '16px',
        border: '2px solid #eaeaea',
        margin: '1px'
      }}></div>
    );
  }
}


class CurrentColors extends Component {
  renderRainbow() {
    return <img style={{border: '2px solid #eaeaea', height: '30px', width: '30px', borderRadius: '16px', margin: '1px'}} src={rainbow} />;
  }

  render() {
    return (
      <div style={{
        display: 'flex', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'
      }}>
        {this.props.colors.map((c, n) => {
          return <CurrentColor key={n} color={c} />;
        })}
        {this.props.colors.length ? '' : this.renderRainbow()}
      </div>
    );
  }
}


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
        <CurrentColors colors={this.props.colors} />
        <div style={{marginTop: '15px'}}>
          {this.props.animation} / {this.props.brightness} / {this.props.delay}
        </div>
        <div onClick={e => this.onFetch(e)} style={{width: '120px', height: '30px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>fetch</div>
        <div onClick={e => this.onPush(e)} style={{width: '120px', height: '30px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>push</div>
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
