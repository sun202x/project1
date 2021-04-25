import React from "react";
import ComponentFactory from "./componentFactory";

export default function Div(props) {

    return (
        <div id={props.id} className={props.class}>
            {props.innerText}
            {props.itemList?.map((item, index) => (
                <ComponentFactory key={index} {...item} />
            ))}
        </div>
    );
}