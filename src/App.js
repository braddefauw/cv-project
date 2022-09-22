import React from 'react';
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import GeneralPreview from './components/GeneralPreview';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';
import "./styles/main.css";

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
      experience: [{
        id: 0,
        company: '',
        position: '',
        location: '',
        start: '',
        end: ''
      }],
      education: [{
        id: 0,
        school: '',
        location: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }],
      edList: [],
      exList: [],
    };

    this.handleChangeGen = this.handleChangeGen.bind(this);
    this.handleChangeEd = this.handleChangeEd.bind(this);
    this.handleChangeEx = this.handleChangeEx.bind(this);
    this.handleAddEd = this.handleAddEd.bind(this);
    this.handleAddEx = this.handleAddEx.bind(this)
    // this.handleDeleteEd = this.handleDeleteEd.bind(this);
    // this.handleDeleteEx = this.handleDeleteEx.bind(this);
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

  handleChangeEx(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const id = event.target.parentElement.parentElement.id;
    
    //make a shallow copy of the items
    let experience = [...this.state.experience];
    //make a shallow copy of the item to mutate
    let exItem = {...experience[id]};
    //replace the property that's being changed
    exItem[[name]] = value;
    //put back into array
    experience[id] = exItem;
    //set the state to our new copy
    this.setState({experience});
  }

  handleAddEd(event) {
    event.preventDefault();
    const edList = this.state.edList;
    const education = this.state.education;
    let _ = require('lodash');
    let index = _.uniqueId();
      this.setState({
        education: education.concat({
          id: Number(index),  
          school: '',
          location: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        }),  
        edList: edList.concat(
          <Education 
          key={index}
          id={index}  
          education={this.state.education} 
          handleChangeEd={this.handleChangeEd} 
          handleAddEd={this.handleAddEd} 
          handleDeleteEd={this.handleDeleteEd} 
          edList={this.state.edList}/>
        ),
      }
      // , () => 
      // console.log(this.state.education)
      );
      index++;
      // console.log(index);
  }

  // handleDeleteEd(e) {
  //   e.preventDefault();
  //   let array = [...this.state.education];
  //   let index = Number(e.target.parentElement.id);
  //   console.log(array, index);
  //   if(index !== -1){
  //     array.splice(index, 1);
  //     console.log(array);
  //     this.setState({
  //       education: array
  //     }, () => console.log(this.state))
  //     // this.setState({
  //     //   newArr: array
  //     // }, console.log(this.state))
  //   }
  // }

  handleAddEx(event) {
    event.preventDefault();
    const exList = this.state.exList;
    const experience = this.state.experience;
    let _ = require('lodash');
    let index = _.uniqueId();
      this.setState({
        experience: experience.concat({
          id: Number(index),
          company: '',
          position: '',
          location: '',
          start: '',
          end: ''
        }),  
        exList: exList.concat(
          <Experience 
          key={index}
          id={index}  
          experience={this.state.experience} 
          handleChangeEx={this.handleChangeEx} 
          handleAddEx={this.handleAddEx} 
          handleDeleteEx={this.handleDeleteEx} 
          exList={this.state.exList}/>
        ),
      }
      // , () => 
      // console.log(this.state.experience)
      );
      // index++;
      // console.log(index);
  }

  // handleDeleteEx(event) {
  //   console.log("test ex");
  // }
  
  render(){
    return(
      <div>
        <div className='title'>
          <h1>CV Creator</h1>
        </div>
        <div className="input-holder">
          <div className='inputs'>
            <General 
            general={this.state.general} 
            id={this.state.general[0].id} 
            handleChangeGen={this.handleChangeGen}
            />
            <h3>Education</h3>
            <Education 
            id={this.state.education[0].id} 
            education={this.state.education} 
            handleChangeEd={this.handleChangeEd} 
            handleAddEd={this.handleAddEd}
            handleDeleteEd={this.handleDeleteEd} 
            edList={this.state.edList}
            defaultSchool={this.state.education[0].school}
            defaultDegree={this.state.education[0].degree}
            defaultSubject={this.state.education[0].subject}
            defaultLocation={this.state.education[0].location}
            defaultFrom={this.state.education[0].from}
            defaultTo={this.state.education[0].to}
            />
            {this.state.edList.map(function(input, index) {
              return input
            })}
            <h3>Experience</h3>
            <Experience 
            experience={this.state.experience} 
            id={this.state.experience[0].id} 
            handleChangeEx={this.handleChangeEx}
            handleAddEx={this.handleAddEx}
            handleDeleteEx={this.handleDeleteEx} 
            exList={this.state.exList}
            />
            {this.state.exList.map(function(input, index) {
              return input
            })}
          </div>
        </div>
        <div className="preview-holder">
          <div className='preview'>
            <GeneralPreview info={this.state}/>
            <EducationPreview info={this.state}/>
            <ExperiencePreview info={this.state} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
