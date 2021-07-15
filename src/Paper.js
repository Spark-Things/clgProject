import React, { Component } from 'react'

export default class Paper extends Component {
  render() {
    return (
      <>
      <td class="tabledata" id="paperone">
        <div class="questionpaper">
        <img src={this.props.thumbnail} alt="image added" width="200px" height="250px"/>
        </div>
        <lable>{this.props.name}</lable>
        </td>
      </>
    )
  }
}
