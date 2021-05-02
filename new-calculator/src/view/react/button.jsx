import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <button id={this.props.id} className={this.props.selector ? "red" : ""} data-type={this.props.type} data-value={this.props.value} onClick={this.props.onclick}>
                {this.props.innerText}
            </button>
        )
    }
}