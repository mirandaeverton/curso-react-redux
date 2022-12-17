import React from "react";
import Buttons from "./Buttons";
import "./Counter.css"

import Display from "./Display";
import StepForm from "./StepForm";

export default class Counter extends React.Component {

    state = {
        value: this.props.initialValue || 0,
        step: this.props.initialStep || 1
    }

    handleStepChange = (e) => {
        const newStep = Number(e.target.value)
        this.setState({
            step: newStep
        })
    }

    handleIncrement = () => {
        const currentValue = this.state.value
        const step = this.state.step
        this.setState({
            value: currentValue + step
        })
    }

    handleDecrement = () => {
        const currentValue = this.state.value
        const step = this.state.step
        this.setState({
            value: currentValue - step
        })
    }

    render() {
        return (
            <div className="Counter">
                <Display value={this.state.value} />
                <StepForm
                    step={this.state.step}
                    onStepChange={this.handleStepChange}
                />
                <Buttons 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        )
    }
}