import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    location: {}
  } 

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(obj => {
      console.table(obj);
      this.setState({ location: obj.coords })
    })
  }

  render() {
    return (
      <div>
        <h1>This is your geolocation</h1>
        <p>Latitude: {this.state.location.latitude}</p>
        <p>Longitude: {this.state.location.longitude}</p>
      </div>
    );
  }
}

export default App;
