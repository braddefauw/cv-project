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
      general: [{
        id: 0,
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        email: '',
        phone: ''
      }],
      experience: {
        company: '',
        position: '',
        Location: '',
        start: '',
        end: ''
      },
      education: [{
        id: 0,
        school: '',
        major: '',
        gradYear: '',
      }],
      inputList: [],
    };

    this.handleChangeGen = this.handleChangeGen.bind(this);
    this.handleChangeEd = this.handleChangeEd.bind(this);
    this.handleAddEd = this.handleAddEd.bind(this);
  }

  handleChangeGen(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const id = event.target.parentElement.parentElement.parentElement.id;
    
    //make a shallow copy of the items
    let general = [...this.state.general];
    //make a shallow copy of the item to mutate
    let genItem = {...general[id]};
    console.log(id, general, genItem)
    //replace the property that's being changed
    genItem[[name]] = value;
    //put back into array
    general[id] = genItem;
    //set the state to our new copy
    this.setState({general});
  }

  handleChangeEd(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const id = event.target.parentElement.parentElement.id;

    //make a shallow copy of the items
    let education = [...this.state.education];
    //make a shallow copy of the item to mutate
    let edItem = {...education[id]};
    //replace the property that's being changed
    edItem[[name]] = value;
    //put back into array
    education[id] = edItem;
    //set the state to our new copy
    this.setState({education});
  }

  handleAddEd(event) {
    event.preventDefault();
    const inputList = this.state.inputList;
    const education = this.state.education;
    let index = this.state.education.length;
      this.setState({
        education: education.concat({
          id: index,  
          school: '',
          major: '',
          gradYear: ''}),  
        inputList: inputList.concat(
          <Education 
          key={inputList.length}
          id={index}  
          education={this.state.education} 
          handleChangeEd={this.handleChangeEd} 
          handleAddEd={this.handleAddEd} 
          inputList={this.state.inputList}/>
        ),
      }, () => console.log(this.state.education));
      // index++;
      // console.log(index);
  }
  
  render(){
    return(
      <div>
        <General general={this.state.general} id={this.state.general[0].id} handleChangeGen={this.handleChangeGen}/>
        <Education 
        key={this.state.inputList.length} 
        id={this.state.education[0].id} 
        education={this.state.education} 
        handleChangeEd={this.handleChangeEd} 
        handleAddEd={this.handleAddEd} 
        inputList={this.state.inputList}
        defaultSchool={this.state.education[0].school}
        defaultMajor={this.state.education[0].major}
        defaultGrad={this.state.education[0].gradYear}
        />
        {this.state.inputList.map(function(input, index) {
          return input
        })}
        <Experience experience={this.state.experience} handleChange={this.handleChange}/>
        <GeneralPreview info={this.state}/>
        <EducationPreview info={this.state} inputList={this.state.inputList}/>
        <ExperiencePreview info={this.state} />
      </div>
    )
  }
}

export default App;
