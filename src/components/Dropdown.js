import React, { Component } from 'react';
import DropdownItem from './DropdownItem';

class Dropdown extends Component {
  render() {
    return (
      <div>
        <select className='filter'>
          {this.props.venues && 
            this.props.venues.map((venue, referralId) => (
              <DropdownItem key={referralId} {...venue}/>
            ))}
        </select>
      </div>
    )
  }
}

export default Dropdown