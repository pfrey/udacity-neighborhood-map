import React, { Component } from 'react';
import { fillInfoWindow } from '../App'

class ListItem extends Component {

  itemClick = (venue) => { 
    var listInfoWindow = new window.google.maps.InfoWindow();
    var listBounds = new window.google.maps.LatLngBounds();
    var listMarkers = [];
    
    var listMarker = new window.google.maps.Marker({
      position: {lat: venue.location.lat, lng: venue.location.lng},
      map: this.props.map,
      title: venue.name,
      id: venue.id,
      animation: window.google.maps.Animation.BOUNCE
    })

    listMarkers.push(listMarker);


    fillInfoWindow(this, listInfoWindow);
  }

  render() {
  //console.log("props: ", this.props)
    return (
      <li className='venue-item' onClick={() => this.itemClick(this.props.venue)}>
        {this.props.venue.name}
      </li>
    )
  }
}

export default ListItem