import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'

describe('App', () => {
  let appWrapper

  beforeEach(()=> {
    appWrapper = shallow(<App/>)
  })

  it('renders a PersonList', () => {
    appWrapper.setState( { people: [{}] } )
    const personList = appWrapper.find(PersonList)
    expect(personList).toHaveLength(1)
  })

  it('has state for people', () =>{
    appWrapper.setState( { people: [{}] } )
    expect(appWrapper.state().people).toHaveLength(1)
  })

  it('has onEdit method that will change the state to PersonEdit and set the selectedPerson', () => {
    const person = { firstName: "Janet", lastName: "Jackson"}

    expect(appWrapper.state().selectedView).toEqual('PersonList')
    expect(appWrapper.state().selectedPerson).toEqual(undefined)
  
    appWrapper.instance().onEdit(person)

    expect(appWrapper.state().selectedView).toEqual('PersonEdit')
    expect(appWrapper.state().selectedPerson).toEqual(person)
  })

  it('renders the edit view when the selectedView state changes to PersonEdit', () => {
    const person = {firstName: "Lauren", lastName: "Peca"}

    appWrapper.setState( { people: [ person ] } )
    appWrapper.setState({ selectedView: 'PersonEdit', selectedPerson: person})

    const personEdit = appWrapper.find(PersonEdit)
    expect(personEdit).toHaveLength(1)    
    expect(personEdit.props().person).toEqual(person)
  })

  it('renders "You have no people" when you have no people', () => {
    const expected = "You have no people."
    
    expect(appWrapper.find('div').text()).toContain(expected)
  })

  it('has onSubmit method that will change the people property', () => {
    const person = { firstName: "Janet", lastName: "Jackson"}
    const afterPerson = { firstName: "Janet", lastName: "Johnson"}

    appWrapper.setState({ people: [person], selectedView: 'PersonEdit', selectedPerson: person})
    expect(appWrapper.state().selectedView).toEqual('PersonEdit')
  
    appWrapper.instance().onSubmit(afterPerson)

    expect(appWrapper.state().selectedView).toEqual('PersonList')
    expect(appWrapper.state().people).toEqual([afterPerson])
  })
})
