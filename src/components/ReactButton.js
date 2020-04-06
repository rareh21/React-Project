import React, { Component } from "react";
import { Button } from "reactstrap";

class ReactButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="sm" className="float-right">Close</Button>{' '}
        <Button color="success" size="sm" className="float-right">Reset</Button>{' '}
        <Button color="secondary" size="sm" className="float-right">Save & Close</Button>{' '}
        <Button color="primary" size="sm" className="float-right">Save</Button>{' '}
        
      </div>
    );
  }
}

export default ReactButton;