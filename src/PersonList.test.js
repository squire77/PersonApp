import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'

describe('PersonList', () => {
    it('renders a ul', () => {
        const personListWrapper = shallow(<PersonList people={[]}/>)
        expect(personListWrapper.find('ul')).toHaveLength(1)
    })

    it('renders a li for each person', () => {
        const people = [
            { firstName: "Bob", lastName: "Dole"}
        ]

        const personListWrapper = shallow(<PersonList people={people}/>)
        expect(personListWrapper.find('li')).toHaveLength(1)
        expect(personListWrapper.find('a').text()).toContain("Edit")
    })

    it('renders the first and last name of each person', () => {
        const person = {firstName: 'Sweet Baby', lastName: 'RayRay'}

        const personListWrapper = shallow(<PersonList people={[person]}/>)
        expect(personListWrapper.find('li').text()).toContain(person.firstName)
        expect(personListWrapper.find('li').text()).toContain(person.lastName)
    })

    it('calls the onEdit on person when the Edit button is clicked', () => {
        const person = {firstName: 'Larry', lastName: 'Page'}
        const mockOnEdit = jest.fn()
        const personListWrapper = shallow(<PersonList people={[person]} onEdit={mockOnEdit}/>)

        personListWrapper.find('a').simulate('click')

        expect(mockOnEdit).toHaveBeenCalledWith(person)
    })
})