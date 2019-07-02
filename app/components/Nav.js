import React from 'react'
import { ThemeConsumer } from "../contexts/theme"
import { NavLink } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'

const activeStyle = {
    color: "rgb(187,46,31)"
}

const sun = {
    color: "#FFD87F"
}

export default function Nav() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className="row space-between">
                    <ul className="row nav">
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeStyle={activeStyle}
                                className="nav-link">
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/battle"
                                activeStyle={activeStyle}
                                className="nav-link">
                                Battle
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        style={{ fontSize: 30 }}
                        className="btn-clear"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <FaMoon /> : <FaSun style={sun} />}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}

