import React from "react";

function PlayAgain(props) {
    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: props.gameStatus === 'won' ? 'green' : 'red', fontSize: '25px', fontWeight: 'bold' }}
            >
                {props.gameStatus === 'won' ? "You Won..!" : "Game Over"}
            </div>
            <button
                style={{ backgroundColor: 'green', color: 'white', padding: '8px', fontSize: '15px', cursor: 'pointer' }}
                onClick={props.resetGame}
            >
                Play Again
            </button>
        </div>
    );
}

export default PlayAgain;