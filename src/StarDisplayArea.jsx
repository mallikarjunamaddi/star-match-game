import utils from "./utils";
import React from "react";

function StarDisplayArea(props) {
    return (
        <>
            {
                utils.range(1, props.starCount).map(i => <div className="star" key={i} />)
            }
        </>
    );
}

export default StarDisplayArea;