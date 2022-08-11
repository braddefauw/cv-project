import React from 'react';
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import GeneralPreview from './components/GeneralPreview';
import ExperiencePreview from './components/ExperiencePreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        email: '',
        phone: ''
      },
      experience: {
        company: '',
        position: '',
        tasks: '',
        start: '',
        end: ''
      },
      school: '',
      major: '',
      gradYear: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState(
      {[name]: value}
    );
  }

  handleSubmit(event) {
    alert(`Name: ${this.state.firstName}, Email: ${this.state.email}, Phone: ${this.state.phone}`);
    event.preventDefault();
  }
  
  render(){
    return(
      <div>
        <General general={this.state.general} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Experience experience={this.state.experience} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Education />
        <GeneralPreview info={this.state}/>
        <ExperiencePreview info={this.state} />
      </div>
    )
  }
}

export default App;
