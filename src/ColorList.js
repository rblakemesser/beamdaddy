import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import { addColor, removeColor, changeColor } from './actions';


class ColorItem extends Component {

  onChange(newColor) {
    if (this.props.color !== newColor.color) {
      this.props.change(newColor.color);
    }
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <ColorPicker
          animation="slide-up"
          color={this.props.color}
          onChange={e => this.onChange(e)}
          enableAlpha={false}
          mode={'RGB'}
        />

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


// class RemoveColor extends Component {
//   render() {
//     return (
//       <div
//         onClick={e => {
//           e.preventDefault();
//           this.props.remove();
//         }}
//         style={{cursor: 'pointer', width: '20px', height: '20px', border: '1px solid black', 'marginLeft': '5px'}}
//       >
//         x
//       </div>
//     );
//   }
// }
//
// RemoveColor = connect(
//   state => ({}),
//   (dispatch, ownProps) => ({
//     remove: () => dispatch(removeColor(ownProps.position))
//   })
// )(RemoveColor);
//

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
        <div style={{display: 'flex', 'flexDirection': 'row', flexWrap: 'wrap', alignItems: 'center'}}>

          <AddColor />
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
