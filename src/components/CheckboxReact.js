import React, { Component } from 'react';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <form>
            <label style={{display: 'inline',marginRight:50}}>
                <input type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                />
                Active
            </label>

            <label style={{display: 'inline'}}>
                <input type="checkbox"
                checked={!this.state.isChecked}
                onChange={this.toggleChange}
                />
                History
            </label>




        </form>
        
      );
    }
  }
  
    
    
    

export default Example