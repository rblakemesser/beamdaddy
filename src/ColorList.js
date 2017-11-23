import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import { Holdable } from 'react-touch';
import { addColor, removeColor, changeColor } from './actions';


class ColorItem extends Component {

  onChange(newColor) {
    if (this.props.color !== newColor.color) {
      this.props.change(newColor.color);
    }
  }

  handleHold(e) {
    console.log(e);
  }

  render() {

    return (
      <div style={{flexDirection: 'row', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <Holdable className="rc-color-picker-trigger" onHoldComplete={this.handleHold}>
          <ColorPicker
            color={this.props.color}
            onChange={e => this.onChange(e)}
            enableAlpha={false}
            mode={'RGB'}
          />
        </Holdable>

        {/* <RemoveColor position={this.props.position} /> */}
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
          this.props.remove(this.props.colors.length - 1);
        }}
        className="rc-color-picker-trigger"
      >
        -
      </div>
    );
  }
}

RemoveColor = connect(
  state => ({colors: state.beamState.colors}),
  (dispatch, ownProps) => ({
    remove: (i) => dispatch(removeColor(i))
  })
)(RemoveColor);


let AddColor = ({dispatch}) => {
  let hex = '#FF0000';

  return (
    <div
      className="rc-color-picker-trigger"
      onClick={e => {
        e.preventDefault();
        dispatch(addColor(hex));
      }}
    >
      +
    </div>
  );
}

AddColor = connect()(AddColor);


class ColorList extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop: '25px', marginBottom: '10px'}}>Colors</div>
        <div style={{display: 'flex', 'flexDirection': 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <RemoveColor />
          <AddColor />
        </div>
        <div style={{display: 'flex', 'flexDirection': 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>

          {this.props.beamState.colors.map((c, i) => <ColorItem key={i} position={i} color={c} />)}

        </div>
      </div>
    );
  }
}

ColorList = connect(
  state => ({beamState: state.beamState})
)(ColorList)

export default ColorList;
