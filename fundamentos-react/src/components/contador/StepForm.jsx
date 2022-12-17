import React from "react";

export default class StepForm extends React.Component {
    render() {
        return (
            <div className="Step">
                <label htmlFor="stepValue">Passo</label>
                <input
                    id="stepValue"
                    type="number"
                    value={this.props.step}
                    onChange={this.props.onStepChange}
                />
            </div>
        )
    }
}