import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { connect } from 'react-redux';

import { addColor, removeColor } from './actions';


class ColorItem extends Component {
  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', 'margin': '10px 20px', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <HuePicker color={this.props.color} />
        <RemoveColor position={this.props.position} />
      </div>
    )
  }
}


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
    style={{width: '80px', height: '30px', border: '1px solid black'}}>
      add
    </div>
  );
}

AddColor = connect()(AddColor);


class ColorList extends Component {
  render() {

    return (
      <div style={{display: 'flex', 'flexDirection': 'column', alignItems: 'center'}}>

        {this.props.colors.map((c, i) => <ColorItem key={i} position={i} color={c} />)}
        <AddColor />

      </div>
    );
  }
}

ColorList = connect(
  state => ({colors: state.colors})
)(ColorList)

export default ColorList;
