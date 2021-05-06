import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);

        // state 정의
        // this.state = { active: false }

        // 이벤트 핸들러 등록
        // this.activeItem = this.activeItem.bind(this);
    }

    // activeItem() {
    //     this.setState((item) => ({
    //         active: this.state.active ? false : true,
    //     }));
    // }

    componentWillUnmount() {
        console.log(">>>>> componentWillUnmount");
    }

    componentDidMount() {
        console.log(">>>>> componentDidMount");
    }

    shouldComponentUpdate() {
        console.log(">>>>> shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return {};
    }

    render() {
        console.log(">>>>> render");
        return (
            <button
                id={this.props.id}
                className={this.props.selector ? "red" : ""}
                data-type={this.props.type}
                data-value={this.props.value}
                onClick={this.props.onclick}
            >
                {this.props.innerText}
            </button>
        );
    }
}
