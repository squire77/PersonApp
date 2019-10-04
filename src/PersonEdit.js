import React, { Component } from 'react'

class PersonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.person.firstName,
            lastName: props.person.lastName
        };
    }

    onChangeFirst = (event) => {
        this.setState({ firstName: event.target.value })
    }

    onChangeLast = (event) => {
        this.setState({ lastName: event.target.value })
    }

    onSubmit= (event) => {
        event.preventDefault()
        console.log("MEOW!!!")
        this.props.submit(this.state)
    }

    render = () => {

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChangeFirst} placeholder="First Name: " defaultValue={this.state.firstName} />
                <input type="text" onChange={this.onChangeLast} placeholder="Last Name: " defaultValue={this.state.lastName}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PersonEdit