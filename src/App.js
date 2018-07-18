import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {

    var courses = [
      {name:'Complete iOS10 dev course', price:199},
      {name:'Complete FrontEnd dev course', price:299},
      {name:'Complete Android dev course', price:399},
      {name:'Complete React dev course', price:499},
      ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <CourseSales items={courses}/>

        </div>

    );
  }
}

export default App;
