import React from 'react'
import { shallow } from 'enzyme'
import PersonEdit from './PersonEdit'

describe('PersonEdit',() => {
    let personEditWrapper
    let person = {firstName: 'Dat', lastName: 'RayBoi'}

    beforeEach(()=> {
        person = {firstName: 'Dat', lastName: 'RayBoi'}
        personEditWrapper = shallow(<PersonEdit person={person}/>)
    })

    it('renders the person from props', () => {
    
        expect(personEditWrapper.find('input')).toHaveLength(2)
        expect(personEditWrapper.find({value: person.firstName})).toHaveLength(1)
        expect(personEditWrapper.find({value: person.lastName})).toHaveLength(1)
    })

    it('has a submit button', () => {
        expect(personEditWrapper.find('button')).toHaveLength(1)
    })

    it('calls a submit function when button is clicked', () => {
        const mockOnSubmit = jest.fn()
        personEditWrapper = shallow(<PersonEdit person={person} submit={mockOnSubmit} />)
        personEditWrapper.find('button').simulate('click')

        expect(mockOnSubmit).toHaveBeenCalledWith(person)
    })
})