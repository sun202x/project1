import React from "react";
import ReactDOM from "react-dom";
import ComponentFactory from "./componentFactory";

export default class CalcReactView {

    render(itemList) {
        ReactDOM.render(
            <CalcReactContainer itemList={itemList} />,
            document.getElementById('layout-contents')
        );
    }

}

class CalcReactContainer extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                {this.props.itemList.map((item, index) => (
                    <ComponentFactory key={index} {...item} />
                ))}
            </React.Fragment>
        );
    }
}