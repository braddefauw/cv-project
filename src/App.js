import React from 'react';
import './App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  render(){
    return(
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    )
  }
}

export default App;
