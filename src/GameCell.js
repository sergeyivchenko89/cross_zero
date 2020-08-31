import React from 'react';
import './GameCell.css'

function GameCell(props) {
    function handleClick(event) {
        event.preventDefault();
        alert(Object.keys(props));
    }

    const className = props.number % 3 === 2 ? 'game-cell game-cell--end-row' : 'game-cell';

    return (
        <div class={className} onClick={handleClick}>
            GameCell {props.number % 3}
            </div>
    );
}

export default GameCell;