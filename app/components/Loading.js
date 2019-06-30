import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: "35px",
        position: "absolute",
        left: "0",
        right: "0",
        marginTop: "20px",
        textAlign: "center",
    }
}

export default class Loading extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            content: props.text
        }
    }

    componentDidMount() {
        const { speed, text } = this.props

        // this.interval creates a interval so that the window will not infinitely
        // mount and cause a memory leak
        this.interval = window.setInterval(() => {
            this.state.content === text + "..."
                ? this.setState({ content: text })
                : this.setState(({ content }) => ({ content: content + "." }))
        }, speed)
    }

    componentWillUnmount() {
        // sets the interval so it can be unmounted and loading will not cause
        // a mem leak
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <p style={styles.content}> {this.state.content}</p >
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
    text: "Loading",
    speed: 300,
}