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
      education: [{
        id: 0,
        school: '',
        major: '',
        gradYear: '',
      }],
      inputList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddEd = this.handleAddEd.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const id = event.target.parentElement.parentElement.id;
    // console.log(id);

    let edItems = [{...this.state.education}];
    let edItem = {...edItems[id]};
    console.log(edItems,edItem, id);
    edItem[id][[name]]= value;
    edItems[id] = edItem;
    this.setState({edItems});
    // console.log(this.state.education[id]);
    
    //create id's for each object in education array -- DONE
    //access those id's in set state
    // this.setState({
    //     education: {
    //       ...this.state.education,
    //       [name]: value,
    //     }
    // });
    // console.log(this.state.education)
  }

  handleAddEd(event) {
    event.preventDefault();
    const inputList = this.state.inputList;
    const education = this.state.education;
    let index = this.state.education.length;
      this.setState({
          inputList: inputList.concat(
          <Education 
          key={inputList.length}
          id={index}  
          education={this.state.education} 
          handleChange={this.handleChange} 
          handleAddEd={this.handleAddEd} 
          inputList={this.state.inputList}/>
          ),
          education: education.concat({
          id: index,  
          school: '',
          major: '',
          gradYear: ''})
      }, () => console.log(this.state.education));
      index++;
      // console.log(index);
  }
  
  render(){
    return(
      <div>
        <General general={this.state.general} handleChange={this.handleChange}/>
        <Education key={this.state.inputList.length} id={this.state.education[0].id} education={this.state.education} handleChange={this.handleChange} handleAddEd={this.handleAddEd} inputList={this.state.inputList}/>
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
