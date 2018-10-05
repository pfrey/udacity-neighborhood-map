import React, { Component } from 'react';

class ListItem extends Component {

  itemClick = (venue) => { 
    var map = document.getElementById('map')
    var infoWindow = new window.google.maps.InfoWindow()
    var newmarker = new window.google.maps.Marker({
      position: {lat: venue.location.lat, lng: venue.location.lng},
      map: map,
      title: venue.name
    })

    newmarker.addListener('click', function() {
      infoWindow.setContent(venue.name)
      infoWindow.open(map, newmarker)
    })
    console.log(venue)
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