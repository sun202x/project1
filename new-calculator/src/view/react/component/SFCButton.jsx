import React, { useEffect, useState } from "react";

const SFCButton = (props, context) => {
    const [selector, setSelector] = useState(props.selector ?? false);

    const activeItem = (e) => {
        setSelector(!selector); 

        props.onclick(e);
    };

    useEffect(
        // componentDidMount, componentDidUpdate
        () => {

            // componentWillUnmount
            return () => {

            };
        }
    );

    useEffect(
        // componentDidMount
        () => {

        },
        []
    );

    useEffect(
        // componentDidUpdate - selector, type에 대한 update 처리
        () => {
            
        },
        [props.selector, props.type]
    );

    return (
        <button
            id={props.id}
            className={props.selector ? "red" : ""}
            data-type={props.type}
            data-value={props.value}
            onClick={activeItem}
        >
            {props.innerText}
        </button>
    );
};

export default SFCButton;
