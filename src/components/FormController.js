import React, {Component} from "react";

export class FormController extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }

    changeName = (event) => {
        this.setState ({
            name : event.target.value
        })
    }

    changePassword = (event) => {
        this.setState ({
            password : event.target.value
        })
    }

    submit_form = (event) => {
        console.log(this.state.name, this.state.password)
        event.preventDefault()
    }

    render() {
        return(
            <form className="form-control p-4 m-5 w-75 pe-5 bg-light" onSubmit={this.submit_form}>
                <label className="ms-3 text-info">name</label>
                <input className="input-group m-3 rounded-2" type={Text}  
                value={this.state.name}
                onChange={this.changeName}
                ></input>

                <label className="ms-3 text-info">password</label>
                <input className="input-group m-3 rounded-2"
                value={this.state.password}
                onChange={this.changePassword}
                type={"password"}></input>

                <button className="btn btn-lg btn-info m-3" type="submit">Submit</button>
            </form>
        )
    }
}