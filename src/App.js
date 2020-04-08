import React from 'react';
import Form from './components/task';
import ReactButton from './components/ReactButton';
import SimpleBreadcrumbs from './components/Address';
import SecondBreadcrumbs from './components/SecondAddress';
import FirstGrid from './components/FirstGrid';
import Example from './components/CheckboxReact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row-reverse" style={{marginTop:10, marginLeft:5, marginRight:2, marginBottom:10, borderBottom:"2px solid green", padding:22}}>
        <div>
        <ReactButton />
        <SimpleBreadcrumbs />
        </div>
      </div> 
      <div style={{marginTop:10, marginLeft:5, marginRight:2, marginBottom:10, padding:5}}>
      <SecondBreadcrumbs />
      </div>
      <div style={{marginLeft:5,marginRight:5}}>
      <FirstGrid />
      </div>
      <div style={{textAlign:"left", marginLeft:20}}>
        <Example />
      </div>
      <Form />
    </div>
  );
}

export default App;
