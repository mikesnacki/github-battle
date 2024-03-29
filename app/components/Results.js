import React from 'react'
import { battle } from "../utils/api"
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa'
import Card from "./Card"
import Loading from "./Loading"
import Tooltip from "./Tooltip"
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

const styles = {
    container: {
        position: 'relative',
        display: 'flex'
    },
    tooltip: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '160px',
        bottom: '100%',
        left: '50%',
        marginLeft: '-80px',
        borderRadius: '3px',
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        padding: '7px',
        marginBottom: '5px',
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
    }
}


function ProfileList({ profile }) {
    return (
        <ul className="card-list">
            <li>
                <Tooltip text="User's Name">
                    <FaUser color="rgba(239,115,115" size={22} />
                    {profile.name}
                </Tooltip>
            </li>
            {profile.location && (
                <li>
                    <Tooltip text="User's Location">
                        <FaCompass color="rgb(144, 116,255)" size={22} />
                        {profile.location}
                    </Tooltip>
                </li>
            )}
            {profile.company && (
                <li>
                    <Tooltip text="User's Company">
                        <FaBriefcase color="#795548" size={22} />
                        {profile.company}
                    </Tooltip>
                </li>
            )}
            <li>
                <FaUsers color="rgba(129,195,245" size={22} />
                {profile.followers.toLocaleString()} followers
            </li>
            <li>
                <FaUserFriends color="rgba(64,183, 95" size={22} />
                {profile.following.toLocaleString()} following
            </li>
        </ul>
    )
}

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default class Results extends React.Component {

    state = {
        winner: null,
        loser: null,
        error: null,
        loading: true,
    }

    componentDidMount() {

        const { playerOne, playerTwo } = queryString.parse(this.props.location.search)

        battle([playerOne, playerTwo])
            .then((players) => {
                this.setState({
                    winner: players[0],
                    loser: players[1],
                    error: null,
                    loading: false
                })
            }).catch((message) => {
                this.setState({
                    error: message,
                    loading: false,
                })
            })
    }

    render() {

        const { winner, loser, error, loading } = this.state

        if (loading === true) {
            return <Loading text="Battling" />
        } if (error) {
            return (
                <p className="center-text error">
                    {error}
                </p>
            )
        }
        return (
            <React.Fragment>
                <div className="grid space-around container-sm">
                    <Card
                        header={winner.score === loser.score ? "Tie" : "Winner"}
                        subheader={`Score ${winner.score.toLocaleString()}`}
                        avatar={winner.profile.avatar_url}
                        href={winner.profile.html_url}
                        name={winner.profile.name}
                    >
                        <ProfileList profile={winner.profile} />
                    </Card>
                    <Card
                        header={winner.score === loser.score ? "Tie" : "Loser"}
                        subheader={`Score: ${loser.score.toLocaleString()}`}
                        avatar={loser.profile.avatar_url}
                        name={loser.profile.login}
                        href={loser.profile.html_url}
                    >
                        <ProfileList profile={loser.profile} />
                    </Card>
                </div>
                <Link
                    to="/battle"
                    className="btn btn-dark btn-space"
                    onClick={this.props.onReset}
                >
                    Reset
                </Link>
            </React.Fragment>
        )
    }
}

