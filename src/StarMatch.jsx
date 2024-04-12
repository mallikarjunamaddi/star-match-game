import React, { useState } from "react";
import utils from "./utils";
import PlayButton from "./PlayButton";
import StarDisplayArea from "./StarDisplayArea";
import PlayAgain from "./PlayAgain";


//Custom Hook
const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
    const [candidateNumbers, setCandidateNumbers] = useState([]);
    const [timeLeftInSeconds, setTimeLeftInSeconds] = useState(10);

    React.useEffect(() => {
        if (timeLeftInSeconds > 0 && availableNumbers.length > 0) {
            const timerId = setTimeout(() => {
                setTimeLeftInSeconds(timeLeftInSeconds - 1);
            }, 1000)
            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandidateNumbers) => {
        if (utils.sum(newCandidateNumbers) === stars) {
            const newAvailableNumbers = availableNumbers.filter(n => !newCandidateNumbers.includes(n));
            setAvailableNumbers(newAvailableNumbers);
            setCandidateNumbers([]);

            const newStars = utils.randomSumIn(newAvailableNumbers, 9);
            setStars(newStars);
        } else {
            setCandidateNumbers(newCandidateNumbers);
        }
    };

    return [stars, availableNumbers, candidateNumbers, timeLeftInSeconds, setGameState];
}

const StarMatch = (props) => {
    const [stars, availableNumbers, candidateNumbers, timeLeftInSeconds, setGameState] = useGameState();

    const gameStatus = availableNumbers.length === 0 ? 'won' :
        timeLeftInSeconds === 0 ? 'lost' : 'active';

    const getNumberStatus = (number => {
        if (!availableNumbers.includes(number)) {
            return 'used';
        }

        if (candidateNumbers.includes(number)) {
            return utils.sum(candidateNumbers) > stars ? 'wrong' : 'candidate';
        }

        return 'available';
    });

    const numberClickHandler = (number, currentNumberStatus) => {
        if (gameStatus !== 'active' || currentNumberStatus === 'used') {
            return;
        }

        const newCandidateNumbers = candidateNumbers.includes(number) ?
            candidateNumbers.filter(n => n !== number) :
            candidateNumbers.concat(number);
        
        setGameState(newCandidateNumbers);
    }

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {
                        gameStatus !== 'active' ?
                            <PlayAgain resetGame={props.startNewGame} gameStatus={gameStatus} /> :
                            <StarDisplayArea starCount={stars} />
                    }
                </div>
                <div className="right">
                    {
                        utils.range(1, 9).map(i =>
                            <PlayButton
                                key={i}
                                number={i}
                                status={getNumberStatus(i)}
                                onNumberClick={numberClickHandler}
                            />
                        )
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: {timeLeftInSeconds}</div>
        </div>
    );
};

export default StarMatch;