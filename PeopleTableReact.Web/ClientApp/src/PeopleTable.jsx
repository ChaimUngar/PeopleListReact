import React from 'react'
import PersonForm from './PersonForm'
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {

    state = {

        firstName: '',
        lastName: '',
        age: '',

        people: []
    }

    clearPerson = () => {
        this.setState({
            firstName: '',
            lastName: '',
            age: ''
        })
    }

    currentPerson = () => {
        return {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
    }

    onAddClick = () => {
        console.log('add button was clicked......')

        //this.setState({ people: [...this.state.people, this.currentPerson()] })

        //console.log(this.state.people)
        //this.clearPerson()

        const copy = [...this.state.people];
        copy.push(this.currentPerson());
        this.setState({ people: copy })
        console.log(this.state.people)
        this.clearPerson()
    }

    onFirstChange = e => {
        //console.log(e.target.value)
        this.setState({ firstName: e.target.value })
    }

    onLastChange = e => {
       // console.log(e.target.value)
        this.setState({ lastName: e.target.value })
    }

    onAgeChange = e => {
        //console.log(e.target.value)
        this.setState({ age: e.target.value })
    }

    onClearClick = () => {
        this.setState({ people: [], currentPerson: this.clearPerson() })
    }

    createTable = () => {

        if (this.state.people.length === 0) {
            return (<h1>No people added yet! Add some people!</h1>)
        }

        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map(person => <PersonRow person={person} />)}
                </tbody>
            </table>

        )
    }

    testClick = () => {
        console.log('success!!')
    }

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm
                    currentPerson={this.currentPerson()}                    onFirstChange={this.onFirstChange}                    onLastChange={this.onLastChange}                    onAgeChange={this.onAgeChange}                    onAddClick={this.onAddClick}                    onClearClick={this.onClearClick}                    testClick={this.testClick}                />

                {this.createTable()}
            </div>
        )
    }
}

export default PeopleTable