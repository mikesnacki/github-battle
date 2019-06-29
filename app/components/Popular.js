import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import { fetchPopularRepos } from "../utils/api"

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ["All",
        "JavaScript",
        "Ruby",
        "Java",
        "CSS",
        "Python"]

    return (
        <ul className="flex-center">
            {languages.map((language) =>
                <li key={language}>
                    <button
                        style={language === selected ? { color: "rgba(187, 46, 31)" } : null}
                        className="btn-clear nav-link"
                        onClick={() => onUpdateLanguage(language)}>
                        {language}
                    </button>
                </li>
            )}
        </ul>

    )
}
LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
}

function ReposGrid({ repos }) {
    return (
        <ul className="grid space-around">
            {repos.map((repo, index) => {
                const { name, owner, html_url, stargazers_count, forks, open_issues } = repo
                const { login, avatar_url } = owner

                return (
                    <li key={html_url} className="card bg-light">
                        <h4 className="header-lg center-text">
                            #{index + 1}
                        </h4>
                        <img src={avatar_url} alt={`Avatar for ${login}`} className="avatar" />
                        <h2 className="center-text">
                            <a href={html_url} className="link">{login}</a>
                        </h2>
                        <ul className="card-list">
                            <li>
                                <FaUser color='rgb(255, 191, 116)' size={22} />
                                <a href={`https://github.com/${login}`}>{login}</a>
                            </li>
                            <li>
                                <FaStar color="rgba(255, 215, 0)" size={22} />
                                {stargazers_count.toLocaleString()} stars
                            </li>
                            <li>
                                <FaCodeBranch color="rgba(129, 195, 245)" size={22} />
                                {forks.toLocaleString()} forks
                            </li>
                            <li>
                                <FaExclamationTriangle color="rgba(241), 138, 147)" size={22} />
                                {open_issues.toLocaleString()} open issues
                            </li>

                        </ul>
                    </li>
                )

            })}
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: "All",
            repos: {},
            error: null,
        }
        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }


    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
        })

        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data) => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                .catch(() => {
                    console.warn("Error Fetching", error)
                    this.setState({
                        error: "There was an error fetching the repositories"
                    })
                })
        }
    }


    isLoading() {
        const { selectedLanguage, repos, error } = this.state

        return !repos[selectedLanguage] && error === null

    }

    // "rgba(187, 46,31)" className="btn-clear nav-link">
    render() {
        const { selectedLanguage, repos, error } = this.state

        return (
            <React.Fragment >
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
                {this.isLoading() && <p>LOADING</p>}
                {error && <p className="center-text error">{error}</p>}
                {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
            </React.Fragment >
        )
    }
}