import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAttribute } from './actions';

import ReactResponsiveSelect from 'react-responsive-select';

import 'react-responsive-select/dist/ReactResponsiveSelect.css';


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


const caretIcon = (
  <svg className="caret-icon" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
    <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z"/></g>
  </svg>
);


class AnimationList extends Component {

  onChange(newAnim) {
    this.props.setAnimation(newAnim.value);
  }

  render() {
    const animations = [
      'Light',
      'Strip',
      'Rainbow',
      'Bloom',
      'Rain',
      'LangtonsAnt',
      'ColorWipeRotate',
      'ColorWipeSequential',
      'Zap',
      'Twinkle',
    ];
    return (
      <div
        style={{marginTop: '25px'}}
        >
        <ReactResponsiveSelect
          caretIcon={caretIcon}
          prefix="Animation: "
          options={animations.map(a => ({'text': a, value: a}))}
          onChange={e => this.onChange(e)}
          />
      </div>
    );
  }
}

AnimationList = connect(
  state => (state.beamState),
  (dispatch, ownProps) => ({
    setAnimation: (name) => dispatch(changeAttribute('animation', name))
  })
)(AnimationList);


export default AnimationList;
