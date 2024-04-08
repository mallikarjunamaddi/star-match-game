import React, { useState } from "react";
import utils from "./utils";
import PlayButton from "./PlayButton";
import StarDisplayArea from "./StarDisplayArea";

const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarDisplayArea starCount={stars}/>
                </div>
                <div className="right">
                    {utils.range(1,9).map(i => <PlayButton key={i} number={i}/> )}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

export default StarMatch;