import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Results from "./Results"
import { ThemeConsumer } from "../contexts/theme"

function Instructions() {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className="instructions-container">
                    <h1 className="center-text header-lg">
                        Instructions
                    </h1>
                    <ol className="container-sm grid center-text battle-instructions">
                        <li>
                            <h3 className="header-sm">Enter Two Github Users</h3>
                            <FaUserFriends className={`bg-${theme}`} color="#rgb(255, 191, 166)" size={140} />
                        </li>
                        <li>
                            <h3 className="header-sm">Battle</h3>
                            <FaFighterJet className={`bg-${theme}`} color="#727272" size={140} />
                        </li>
                        <li>
                            <h3 className="header-sm">See the Winners</h3>
                            <FaTrophy className={`bg-${theme}`} color="rgb(255, 215,0)" size={140} />
                        </li>
                    </ol>
                </div>
            )}
        </ThemeConsumer>

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
            <ThemeConsumer>
                {({ theme }) => (
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
                                className={`input-${theme}`}
                                placeholder="github username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <button
                                className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
                                type="submit"
                                disabled={!this.state.username}
                            >
                                Submit
                    </button>
                        </div>
                    </form>
                )}

            </ThemeConsumer>
        )
    }
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

function PlayerPreview({ username, onReset, label }) {
    return (
        <div className="column player">
            <h3 className="player-label">{label}</h3>
            <div className="row bg-light">
                <div className="player-info">
                    <img
                        src={`https://github.com/${username}.png?size=50`}
                        alt={`Avatar for ${username}`}
                    />
                    <a href={`https://github.com/${username}`} className="link">
                        {username}
                    </a>
                </div>
                <button
                    className="btn-clr flex-center"
                    onClick={onReset}>
                    <FaTimesCircle color="rgb(194,57,42)" size={26}></FaTimesCircle>
                </button>
            </div>
        </div>
    )

}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}
export default class Battle extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            playerOne: null,
            playerTwo: null,
            battle: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit(id, player) {
        this.setState({
            [id]: player
        })
    }

    handleReset(id) {
        this.setState({
            [id]: null
        })
    }

    render() {

        const { playerOne, playerTwo, battle } = this.state

        if (battle === true) {
            return (
                <Results
                    playerOne={playerOne}
                    playerTwo={playerTwo}
                    onReset={() => this.setState({
                        playerOne: null,
                        playerTwo: null,
                        battle: false,
                    })}
                />
            )
        }

        return (
            <React.Fragment>
                <Instructions />
                <div className="players-container">
                    <h1 className="center-text header-lg">Players</h1>
                    <div className="row space-around">
                        {playerOne === null
                            ?
                            <PlayerInput
                                label="Player One"
                                onSubmit={(player) => this.handleSubmit('playerOne', player)}
                            />
                            :
                            <PlayerPreview
                                username={playerOne}
                                label="Player One"
                                onReset={() => this.handleReset('playerOne')}
                            />
                        }
                        {playerTwo === null ?
                            <PlayerInput
                                label="Player Two"
                                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                            />
                            :
                            <PlayerPreview
                                username={playerTwo}
                                label="Player Two"
                                onReset={() => this.handleReset('playerTwo')}
                            />
                        }
                    </div>
                    <div>
                        {playerOne && playerTwo && (
                            <button
                                className="btn dark-btn btn-space"
                                onClick={() => { this.setState({ battle: true }) }}>
                                Battle
                            </button>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}