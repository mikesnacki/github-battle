import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Instructions() {
    return (
        <div className="instructions-container">
            <h1 className="center-text header-lg">
                Instructions
            </h1>
            <ol className="container-sm grid center-text battle-instructions">
                <li>
                    <h3 className="header-sm">Enter Two Github Users</h3>
                    <FaUserFriends className="bg-light" color="#rgb(255, 191, 166)" size={140} />
                </li>
                <li>
                    <h3 className="header-sm">Battle</h3>
                    <FaFighterJet className="bg-light" color="#727272" size={140} />
                </li>
                <li>
                    <h3 className="header-sm">See the Winners</h3>
                    <FaTrophy className="bg-light" color="rgb(255, 215,0)" size={140} />
                </li>
            </ol>
        </div>
    )
}

class PlayerInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // this method binds the submit function to the username passed within the component
    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.username)
    }
    //this method updates the username within the state
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <form
                className="column player"
                //calls handleSubmit to pass the form values
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="username" className="player-label">
                    {this.props.label}
                </label>
                <div className="row-player-inputs">
                    <input
                        type="text"
                        name=""
                        id="username"
                        className="input-light"
                        placeholder="github username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <button
                        className="btn btn-dark"
                        type="submit"
                        disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default class Battle extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Instructions />
                <PlayerInput label="Label!" onSubmit={(value) => console.log(value)} />
            </React.Fragment>
        )
    }
}