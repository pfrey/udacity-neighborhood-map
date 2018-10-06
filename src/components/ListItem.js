import React, { Component } from 'react';

class ListItem extends Component {

  itemClick = (venue) => { 
    var infoWindow = new window.google.maps.InfoWindow()
    var newmarker = new window.google.maps.Marker({
      position: {lat: venue.location.lat, lng: venue.location.lng},
      map: venue.map,
      title: venue.name,
      id: venue.id
    })

    newmarker.addListener('click', function() {
      infoWindow.setContent(venue.name)
      infoWindow.open(venue.map, newmarker)
    })
    console.log(newmarker)
  }

  render() {
    return (
      <li className='venue-item' onClick={() => this.itemClick(this.props.venue)}>
        {this.props.venue.name}
      </li>
    )
  }
}

export default ListItem
