import React, { Component } from 'react';

class DropdownItem extends Component {

  render() {
    return (
      <option className='filter-item' value={this.props.venue.categories[0].name}>
        {this.props.venue.categories[0].name}
      </option>
    )
  }
}

export default DropdownItem