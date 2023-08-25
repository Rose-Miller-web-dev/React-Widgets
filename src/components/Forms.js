import React, {Component} from "react";

export class Forms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitHandler = (event) => {
        console.log(this.state.username, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>name</label>
                <input type={Text} value={this.state.username}
                onChange={this.handleInput}></input>

                <label>password</label>
                <input type={"password"} value={this.state.password}
                onChange={this.handlePassword}></input>

                <button type="submit">Submit</button>
            </form>
        )
    }
}