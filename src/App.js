import React from 'react';
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import GeneralPreview from './components/GeneralPreview';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';

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
        Location: '',
        start: '',
        end: ''
      },
      education: {
        school: '',
        major: '',
        gradYear: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState(
      {[name]: value}
    );
  }
  
  render(){
    return(
      <div>
        <General general={this.state.general} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Education education={this.state.education} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Experience experience={this.state.experience} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <GeneralPreview info={this.state}/>
        <EducationPreview info={this.state} />
        <ExperiencePreview info={this.state} />
      </div>
    )
  }
}

export default App;
