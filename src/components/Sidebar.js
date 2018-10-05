import React, { Component } from 'react';
import Locations from './Locations';
import Dropdown from './Dropdown';

class Sidebar extends Component {
  state = { query: '' }

  render() {
    return (
      <div className='sidebar'>
        <h1>Neighborhood Sights</h1>
        <div class='search'>
          <Dropdown 
            {...this.props}
          />
        </div>

        <Locations 
          {...this.props}
        />
      </div>
    )
  }
}

export default Sidebar
