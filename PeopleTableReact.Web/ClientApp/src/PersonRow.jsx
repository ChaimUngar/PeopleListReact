import React from 'react'

class PersonRow extends React.Component {

    getClassName = age => {
        if (age >= 65) {
            return 'table-danger'
        }

        return ''
    }

    createRow = () => {

        return (
            <tr className={this.getClassName(this.props.person.age)}>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.lastName}</td>
                <td>{this.props.person.age}</td>
            </tr>
        )

    }

    render() {
        return this.createRow()
    }
}


export default PersonRow