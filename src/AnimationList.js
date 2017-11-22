import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAttribute } from './actions';


class Animation extends Component {
  render() {
    const borderColor = this.props.animation === this.props.name ? '#ff0000': '#eaeaea';
    return (

      <div onClick={e => this.props.setAnimation()} style={{
        height: '50px',
        width: '50px',
        borderRadius: '25px',
        border: '2px solid ' + borderColor,
        margin: '2px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}>{this.props.name}</div>
    );
  }
}
Animation = connect(
  state => (state.beamState),
  (dispatch, ownProps) => ({
    setAnimation: () => dispatch(changeAttribute('animation', ownProps.name))
  })
)(Animation);


class AnimationList extends Component {

  render() {
    const animations = ['light', 'strip', 'rainbow', 'kimbow', 'bloom', 'rain'];
    return (
      <div>
        <div>Animation</div>
        <div style={{
          display: 'flex', flexDirection: 'row',
          justifyContent: 'center', alignItems: 'center',
          marginBottom: '15px'
        }}>
          {animations.map((a, n) => {
            return <Animation key={n} name={a} />;
          })}
        </div>
      </div>
    );
  }
}


export default AnimationList;
