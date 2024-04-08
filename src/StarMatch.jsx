import React, { useState } from "react";
import utils from "./utils";

const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {utils.range(1, stars).map( i => <div className="star" key={i}/> )}
                </div>
                <div className="right">
                    {utils.range(1,9).map(i => <button className="number" key={i}>{i}</button>)}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

export default StarMatch;