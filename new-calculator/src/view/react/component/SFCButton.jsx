import React, { useEffect, useState } from "react";

const SFCButton = (props, context) => {
    // const [selector, setSelector] = useState(false);

    // const activeItem = () => {
    //     setSelector(selector);
    // };

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
