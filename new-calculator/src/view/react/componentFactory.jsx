import React from "react";
import Button from './button';
import Div from './div';

export default class ComponentFactory extends React.Component {
    render() {
        switch(this.props.controlType) {
            case "div":
                return <Div {...this.props} />;
            case "button":
                return <Button {...this.props} />;
            default:
        }
    }
}