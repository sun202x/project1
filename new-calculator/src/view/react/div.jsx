import React, { useEffect } from "react";
import ComponentFactory from "./componentFactory";

export default function Div(props) {
    useEffect(() => {
        console.log("effect");
    });

    return (
        <div id={props.id} className={props.class}>
            {props.innerText}
            {props.itemList?.map((item, index) => (
                <ComponentFactory key={index} {...item} />
            ))}
        </div>
    );
}
