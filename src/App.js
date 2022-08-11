import React from 'react';
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends React.Component {
  render(){
    return(
      <div>
        <General />
        <Experience />
        <Education />
      </div>
    )
  }
}

export default App;
