import React from "react";
import utils from "./utils";

function PlayButton(props) {
    return (
        <button
            className="number"
            onClick={() => props.onNumberClick(props.number, props.status)}
            style={{ backgroundColor: utils.colors[props.status] }}
        >
            {props.number}
        </button>
    );
}

export default PlayButton;