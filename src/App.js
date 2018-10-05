import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MapContainer';

class App extends Component {
  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBNiVrOQqLRb6SuJgjBRM_bQV2hYAs-hRw&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "ORMEUFMFTJIPPYRESL0CA30M1X0QNGU1NRZ03NKD311S4QDH",
      client_secret: "RN4OH1PHIAZAMH52FHZ5I4LGA5VULXXGQ304C00ALCZXCKNK",
      v: "20181003",
      query: "sights",
      near: "Detroit, MI"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        console.log("Error: " + error)
      })
  }


  initMap = () => {
    // Create a map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.3823699, lng: -83.0793885},
      zoom: 11
    })

    var infoWindow = new window.google.maps.InfoWindow()

    // Parse through results
    this.state.venues.map(v => {
      var venueName = `<p>${v.venue.name}</p> <p>${v.venue.location.address}</p>`

      // Create marker for each result
      var marker = new window.google.maps.Marker({
        position: {lat: v.venue.location.lat, lng: v.venue.location.lng},
        map: map,
        title: v.venue.name
      })

      // Listen for a click on a marker
      // Set content based on each marker
      // Display content in an info window
      marker.addListener('click', function() {
        infoWindow.setContent(venueName)
        infoWindow.open(map, marker)
      })
    })
  }

  render() {
    return (
      <div class="container">>
        <Sidebar 
          {...this.state}
        />
        <MapContainer />
      </div>
    )
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
