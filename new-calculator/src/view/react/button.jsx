import React from "react";

export default function Button(props) {

    return (
        <button id={props.id} 
            data-type={props.type}
            data-value={props.value}
            onClick={props.onclick}
            >
            {props.innerText}
        </button>
    );
}