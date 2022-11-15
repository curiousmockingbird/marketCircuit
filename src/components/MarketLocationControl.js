import React from "react";

class MarketLocationControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayVisibleOnPage: <LocationDetails day=>
    };
  }

  handleSearch = (input) => {
    this.setState({dayVisibleOnPage: {input}})
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.dayVisibleOnPage) {
      currentlyVisibleState = <LocationDetails />
    } else {
    }

    const marketSchedule = [  
      {  
         day: "Sunday",
         location: "Lents International",
         hours: "9:00am - 2:00pm",
         booth: "4A"
      },
      {  
         day: "Monday",
         location: "Pioneer Courthouse Square",
         hours: "10:00am - 2:00pm",
         booth: "7C"
      },
      {  
         day: "Tuesday",
         location: "Hillsboro",
         hours: "5:00pm - 8:30pm",
         booth: "1F"
      },
      {  
         day: "Wednesday",
         location: "Shemanski Park",
         hours: "10:00am - 2:00pm",
         booth: "3E"
      },
      {  
         day: "Thursday",
         location: "Northwest Portland",
         hours: "2:00pm - 6:00pm",
         booth: "6D"
      },
      {  
         day: "Saturday",
         location: "Beaverton",
         hours: "10:00am - 1:30pm",
         booth: "9G"
      }
     ];

  return(
    <React.Fragment>
    <h3>Market Location Search</h3>
    <label for="dayOfWeek">Choose a day of the week:</label>
    <select name="days" id="days">
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
    </select>
    <button onClick={this.handleSearch}>Search</button>
    <LocationDetails />
    </React.Fragment>
  );
}
}

export default MarketLocationControl;
