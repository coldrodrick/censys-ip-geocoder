import React from 'react';

class Form extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        latitude: "",
        longitude: ""
      };
    }

    geocodeIp = async event => {
      event.preventDefault()
  
      const res = await fetch('/api/geocodeIp', {
        body: JSON.stringify({
          ip_address: event.target.ip_address.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const result = await res.json();
      this.setState({latitude: result.location_geocoded.latitude, longitude: result.location_geocoded.longitude});
    }

    render() {
      return (
        <div>
          <form onSubmit={this.geocodeIp}>
            <label htmlFor="ip_address">IP Address:</label>
            <input id="ip_address" name="ip_address" type="text" required />
            <button type="submit">Submit</button>
          </form>
          <p>
            latitude: {this.state.latitude}
            longitude: {this.state.longitude}
          </p>
        </div>
      )
    }
  }

export default Form;