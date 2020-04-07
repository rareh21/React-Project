import React, { Component } from "react";
import { Button } from "reactstrap";
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import RestoreIcon from '@material-ui/icons/Restore';

class ReactButton extends Component {
  render() {
    return (
      <div>
        <Button style={{marginRight:5, marginTop:3, marginBottom:5}} color="info" size="sm" className="float-right">Close <CloseIcon /></Button>{' '}
        <Button style={{marginRight:3, marginTop:3, marginBottom:5}} color="success" size="sm" className="float-right">Reset <RestoreIcon /></Button>{' '}
        <Button style={{marginRight:3, marginTop:3, marginBottom:5}} color="secondary" size="sm" className="float-right">Save & Close <SaveIcon /></Button>{' '}
        <Button style={{marginRight:3, marginTop:3, marginBottom:5}} color="primary" size="sm" className="float-right">Save <SaveIcon /></Button>{' '}
        
      </div>
    );
  }
}

export default ReactButton;