import React, { Component } from 'react';
import ListItem from './ListItem';

class Locations extends Component {
  render() {
    return (
      <nav>
        <ul className='venues'>
          {this.props.venues && 
            this.props.venues.map((venue, referralId) => (
              <ListItem key={referralId} {...venue}/>
            ))}
        </ul>
      </nav>
    )
  }
}

export default Locations