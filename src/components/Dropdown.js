import React, { Component } from 'react';
import DropdownItem from './DropdownItem';

class Dropdown extends Component {
  render() {
    return (
      <div>
        <select className='filter'>
          <option disabled selected value="Filter by Category">--Filter by Category--</option>
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