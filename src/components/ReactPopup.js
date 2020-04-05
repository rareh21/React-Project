import React, { Component } from "react";
// import Popup from "reactjs-popup";
//import './ReactPopup.css';
import { Header, Button, Popup, Grid } from 'semantic-ui-react'

const ReactPopup = () => (
  <Popup trigger={<Button>Sh</Button>} flowing hoverable>
    <Grid centered divided columns={3}>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Basic</Header>
        <p>
          <b>2</b> projects
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>  
        <Header as='h4'>Business</Header>
        <p>
          <b>5</b> projects
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center' >
        <Header as='h4'>Premium </Header>
        <p>
          <b>8</b> projects
        </p>
        <Button>Choose</Button>
      </Grid.Column>
    </Grid>
  </Popup>
)
  

export default ReactPopup;