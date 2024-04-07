import React from 'react'

class PersonForm extends React.Component {
    render() {
        return (
            <div id="root">
                <div className="container" >
                    <div className="row bg-light p-4 rounded mb-3">

                        {/*<h1>loaded first page!!</h1>*/}

                        <div className="col-md-3">
                            <input type="text" placeholder="First Name"
                                name="firstName" className="form-control"
                                value={this.props.currentPerson.firstName}
                                onChange={this.props.onFirstChange} />
                        </div>

                        <div className="col-md-3">
                            <input type="text" placeholder="Last Name"
                                name="lastName" className="form-control"
                                value={this.props.currentPerson.lastName}
                                onChange={this.props.onLastChange} />
                        </div>

                        <div className="col-md-3">
                            <input type="text" placeholder="Age"
                                name="age" className="form-control"
                                value={this.props.currentPerson.age}
                                onChange={this.props.onAgeChange} />
                        </div>

                        <div className="col-md-1">
                            <button className="btn btn-primary"
                                onClick={this.props.onAddClick}>Add</button>
                        </div>

                        <div className="col-md-2">
                            <button className="btn btn-warning ml-3"
                                onClick={this.props.onClearClick}>Clear All</button>
                        </div>


                    </div >
                </div>
            </div>
        )
    }
}

export default PersonForm