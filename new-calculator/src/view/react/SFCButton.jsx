import React, { useEffect } from "react";

const SFCButton = (props, context) => {
    useEffect(() => {
        console.log("effect");
    });

    return (
        <button
            id={props.id}
            className={props.selector ? "red" : ""}
            data-type={props.type}
            data-value={props.value}
            onClick={props.onclick}
        >
            {props.innerText}
        </button>
    );
};

export default SFCButton;
