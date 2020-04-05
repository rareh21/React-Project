import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
class Datefce extends Component {
  state = {
    date: "",
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
  
export default Datefce  