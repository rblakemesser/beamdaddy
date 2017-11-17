import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { connect } from 'react-redux';

import { addColor, removeColor, changeColor } from './actions';


class ColorItem extends Component {

  onChange(newColor) {
    if (this.props.color !== newColor.hex) {
      this.props.change(newColor.hex);
    }
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', 'margin': '10px 20px', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <HuePicker color={this.props.color} onChangeComplete={e => this.onChange(e)}/>
        <RemoveColor position={this.props.position} />
      </div>
    )
  }
}

ColorItem = connect(
  state => ({}),
  (dispatch, ownProps) => ({
    change: c => dispatch(changeColor(ownProps.position, c))
  })
)(ColorItem);


class RemoveColor extends Component {
  render() {
    return (
      <div
        onClick={e => {
          e.preventDefault();
          this.props.remove();
        }}
        style={{width: '20px', height: '20px', border: '1px solid black', 'marginLeft': '5px'}}
      >
        x
      </div>
    );
  }
}

RemoveColor = connect(
  state => ({}),
  (dispatch, ownProps) => ({
    remove: () => dispatch(removeColor(ownProps.position))
  })
)(RemoveColor);


let AddColor = ({dispatch}) => {
  let hex = '#FF0000';

  return (
    <div
      onClick={e => {
        e.preventDefault();
        dispatch(addColor(hex));
      }}
    style={{width: '120px', height: '30px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      add color
    </div>
  );
}

AddColor = connect()(AddColor);


class ColorList extends Component {
  render() {
    return (
      <div style={{display: 'flex', 'flexDirection': 'column', alignItems: 'center'}}>

        <AddColor />
        {this.props.beamState.colors.map((c, i) => <ColorItem key={i} position={i} color={c} />)}

      </div>
    );
  }
}

ColorList = connect(
  state => ({beamState: state.beamState})
)(ColorList)

export default ColorList;
