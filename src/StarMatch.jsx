import React, { useState } from "react";
import utils from "./utils";
import PlayButton from "./PlayButton";
import StarDisplayArea from "./StarDisplayArea";

const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNumbers, setAvailableNumbers] = useState([2,4,5,6,8]);
    const [candidateNumbers, setCandidateNumbers] = useState([5,6]);
    
    const getNumberStatus = (number => {
        if(!availableNumbers.includes(number)){
            return 'used';
        }

        if(candidateNumbers.includes(number)) {
            return utils.sum(candidateNumbers) > stars ? 'wrong' : 'candidate';
        }

        return 'available';
    });

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
                    {
                        utils.range(1,9).map(i => 
                            <PlayButton 
                                key={i} 
                                number={i}
                                status={getNumberStatus(i)}
                            />
                        )
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

export default StarMatch;