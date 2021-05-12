import React from "react";
import { connect } from 'react-redux';
import ComponentFactory from "./componentFactory";

class CalcReactContainer extends React.Component {
    render() {
        // @TODO 나중에 제거 redux 테스트용이다
        this.props.dispatch({ type: "INIT" });

        return (
            <React.Fragment>
                {this.props.itemList.map((item, index) => (
                    <ComponentFactory key={index} {...item} />
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalcReactContainer);