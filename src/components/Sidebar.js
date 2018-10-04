import React, { Component } from 'react';
import Locations from './Locations'

class Sidebar extends Component {
  state = { query: '' }

  render() {
    return (
      <div className='sidebar'>
        <h1>Neighborhood Sights</h1>
        <div class='search'>
          <input placeholder='Search List' type={'search'} id={'search'} value={this.state.query}></input>
        </div>
        <Locations 
          {...this.props}
        />
      </div>
    )
  }
}

export default Sidebar