import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../redux/reducer";
import CalcReactContainer from "./CalcReactContainer";

export default class CalcReactView {
    render(itemList) {
        ReactDOM.render(
            <Provider store={createStore(reducer)}>
                <CalcReactContainer itemList={itemList} />
            </Provider>,
            document.getElementById("layout-contents")
        );
    }
}