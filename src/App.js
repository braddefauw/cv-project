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
        major: '',
        gradYear: '',
      }],
      edList: [],
      exList: [],
    };

    this.handleChangeGen = this.handleChangeGen.bind(this);
    this.handleChangeEd = this.handleChangeEd.bind(this);
    this.handleChangeEx = this.handleChangeEx.bind(this);
    this.handleAddEd = this.handleAddEd.bind(this);
    this.handleAddEx = this.handleAddEx.bind(this)
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
    let index = this.state.education.length;
      this.setState({
        education: education.concat({
          id: index,  
          school: '',
          major: '',
          gradYear: ''}),  
        edList: edList.concat(
          <Education 
          key={edList.length}
          id={index}  
          education={this.state.education} 
          handleChangeEd={this.handleChangeEd} 
          handleAddEd={this.handleAddEd} 
          edList={this.state.edList}/>
        ),
      }
      // , () => 
      // console.log(this.state.education)
      );
      // index++;
      // console.log(index);
  }

  handleAddEx(event) {
    event.preventDefault();
    const exList = this.state.exList;
    const experience = this.state.experience;
    let index = this.state.experience.length;
      this.setState({
        experience: experience.concat({
          id: index,
          company: '',
          position: '',
          Location: '',
          start: '',
          end: ''
        }),  
        exList: exList.concat(
          <Experience 
          key={exList.length}
          id={index}  
          experience={this.state.experience} 
          handleChangeEx={this.handleChangeEx} 
          handleAddEx={this.handleAddEx} 
          exList={this.state.exList}/>
        ),
      }
      // , () => 
      // console.log(this.state.experience)
      );
      // index++;
      // console.log(index);
  }
  
  render(){
    return(
      <div>
        <div className='title'>
          <h1>CV Creator</h1>
        </div>
        <div className='inputs'>
          <General 
          general={this.state.general} 
          id={this.state.general[0].id} 
          handleChangeGen={this.handleChangeGen}
          />
          <Education 
          key={this.state.edList.length} 
          id={this.state.education[0].id} 
          education={this.state.education} 
          handleChangeEd={this.handleChangeEd} 
          handleAddEd={this.handleAddEd} 
          edList={this.state.edList}
          defaultSchool={this.state.education[0].school}
          defaultMajor={this.state.education[0].major}
          defaultGrad={this.state.education[0].gradYear}
          />
          {this.state.edList.map(function(input, index) {
            return input
          })}
          <Experience 
          experience={this.state.experience} 
          id={this.state.experience[0].id} 
          handleChangeEx={this.handleChangeEx}
          handleAddEx={this.handleAddEx} 
          exList={this.state.exList}
          />
          {this.state.exList.map(function(input, index) {
            return input
          })}
        </div>
        <div className='preview'>
          <GeneralPreview info={this.state}/>
          <EducationPreview info={this.state}/>
          <ExperiencePreview info={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
