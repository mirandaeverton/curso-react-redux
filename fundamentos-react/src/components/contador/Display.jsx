import React from "react";

export default class Display extends React.Component {
    state = {
        value: this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {value: props.value}
    }

    render() {
        return(
            <h2>{this.state.value}</h2>
        )
    }
}