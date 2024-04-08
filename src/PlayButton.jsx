import React from "react";
import utils from "./utils";

function PlayButton(props) {
    return (
        <button 
            className="number" 
            onClick={() => console.log(props.number)}
            style={{backgroundColor: utils.colors[props.status]}}
        >
            {props.number}
        </button>
    );
}

export default PlayButton;