import React from "react";
import LocationDetails from "./LocationDetails";

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

class MarketLocationControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayVisibleOnPage: <LocationDetails day={marketSchedule[0].day} 
      location={marketSchedule[0].location} 
      hours={marketSchedule[0].hours}
      booth={marketSchedule[0].booth}/>
    };
  }

  monday = () => {
    this.setState({dayVisibleOnPage: <LocationDetails day={marketSchedule[1].day} 
      location={marketSchedule[1].location} 
      hours={marketSchedule[1].hours}
      booth={marketSchedule[1].booth}/>})
  }
  tuesday = () => {
    this.setState({dayVisibleOnPage: <LocationDetails day={marketSchedule[2].day} 
      location={marketSchedule[2].location} 
      hours={marketSchedule[2].hours}
      booth={marketSchedule[2].booth}/>})
  }
  wednesday = () => {
    this.setState({dayVisibleOnPage: <LocationDetails day={marketSchedule[3].day} 
      location={marketSchedule[3].location} 
      hours={marketSchedule[3].hours}
      booth={marketSchedule[3].booth}/>})
  }
  thursday = () => {
    this.setState({dayVisibleOnPage: <LocationDetails day={marketSchedule[4].day} 
      location={marketSchedule[4].location} 
      hours={marketSchedule[4].hours}
      booth={marketSchedule[4].booth}/>})
  }
  
  saturday = () => {
    this.setState({dayVisibleOnPage: <LocationDetails day={marketSchedule[5].day} 
      location={marketSchedule[5].location} 
      hours={marketSchedule[5].hours}
      booth={marketSchedule[5].booth}/>})
  }

  render(){
    let currentlyVisibleState = null;
    //let input = document.getElementById("days").value;
    // console.log(input);
    if (this.state.dayVisibleOnPage) {
      currentlyVisibleState = this.state.dayVisibleOnPage;
    }



  return(
    <React.Fragment>
    <h3>Market Location Search</h3>
    <label for="dayOfWeek">Choose a day of the week:</label><br></br>
  
    <button onClick={this.monday}>Monday</button>
    <button onClick={this.tuesday}>Tuesday</button>
    <button onClick={this.wednesday}>Wednesday</button>
    <button onClick={this.thursday}>Thursday</button>
    <button onClick={this.saturday}>Saturday</button>
    {currentlyVisibleState}
    </React.Fragment>
  );
}
}

export default MarketLocationControl;
