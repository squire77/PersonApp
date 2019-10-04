import React, { Component } from 'react';
import './App.css';
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'

class App extends Component {
  
  state = {
    people: [{firstName: "Lauren", lastName: "Peca"}],
    selectedView: 'PersonList',
    //selectedPerson: undefined
  }

  onEdit = (person) => {
    this.setState({selectedView : 'PersonEdit', selectedPerson : person})
  }

  onSubmit = (person) => {
    console.log(person)
    this.setState({selectedView : 'PersonList', /*selectedPerson : undefined,*/ people: [person]})
  }

  render() {
    return (
      <div className="App">
        {this.state.people.length === 0 ? "You have no people." : this.state.selectedView === 'PersonList'
            ? <PersonList people={this.state.people} onEdit={this.onEdit}/> : <PersonEdit person={this.state.selectedPerson} submit={this.onSubmit}/>}
      </div>
    );
  }
}

export default App;
