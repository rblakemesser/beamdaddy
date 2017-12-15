import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HuePicker } from 'react-color';
import { addColor, removeColor, changeColor } from './actions';


class ColorItem extends Component {

  onChange(newColor) {
    if (this.props.color !== newColor.hex) {
      this.props.change(newColor.hex);
    }
  }

  handleHold(e) {
    console.log(e);
  }

  render() {

    return (
      <div>
        <div>
          <HuePicker
            color={this.props.color}
            onChange={e => this.onChange(e)}
          />
        </div>

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
        <div>Colors</div>
        <div>
          <RemoveColor />
          <AddColor />
        </div>
        <div>

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
