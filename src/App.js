import React from 'react';
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import GeneralPreview from './components/GeneralPreview';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';

class Input extends React.Component {
  render() {
      return (
          <input placeholder="Your input here" />
      );
  }
}

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
      },
      inputList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState(
      {[name]: value}
    );
  }

  handleAdd(event) {
    event.preventDefault();
    const inputList = this.state.inputList;
      this.setState({
          inputList: inputList.concat(<Input key={inputList.length} />)
      });
  }
  
  render(){
    return(
      <div>
        <General general={this.state.general} handleChange={this.handleChange}/>
        <Education education={this.state.education} handleChange={this.handleChange} handleAdd={this.handleAdd} inputList={this.state.inputList}/>
        <Experience experience={this.state.experience} handleChange={this.handleChange}/>
        <GeneralPreview info={this.state}/>
        <EducationPreview info={this.state} />
        <ExperiencePreview info={this.state} />
      </div>
    )
  }
}

export default App;
