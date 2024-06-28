import React from "react";

function FunctionalGreetingWithProps(props) {
    return <h1>Helloooo, {props.greeting}{props.name}{props.age}</h1>
}

export default FunctionalGreetingWithProps;