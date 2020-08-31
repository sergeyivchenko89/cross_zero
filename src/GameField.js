import React from 'react';
import GameCell from './GameCell.js';

function GameField(props) {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const cells = numbers.map(function (n) {
        return {
            number: n,
            value: null
        };
    });

    const cellViews = cells.map((cell) =>
        <GameCell
            number={cell.number}
            value={cell.value}
        />
    );

    console.log(cells);

    return (
        <div>
            {cellViews}
        </div>
    );
}

export default GameField;