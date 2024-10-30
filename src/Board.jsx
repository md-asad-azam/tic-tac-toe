import React, { useState } from 'react'
import { Square } from './Square'



export const Board = () => {
    const [isXNext, setIsXNext] = useState(Math.random() < 0.5)
    const [squares, setSquares] = useState(Array(9).fill(null))

    var calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    var handleClick = (i) => {
        if (squares[i] || winner) return

        const newSquares = squares.slice();

        if (isXNext) {
            newSquares[i] = 'X'
        } else {
            newSquares[i] = 'O'
        }
        setSquares(newSquares)
        setIsXNext(!isXNext)
    }

    let draw = !squares.includes(null)
    let winner = calculateWinner(squares)
    let status = winner ? `${winner} wins the game` : draw ? `Match Tie ` : isXNext ? `X's Chance` : `O's Chance`


    return (
        <>
            <h3>{status}</h3>
            <div className="board">
                <div className="row">
                    <Square value={squares[0]} handleClick={() => { handleClick(0) }} />
                    <Square value={squares[1]} handleClick={() => { handleClick(1) }} />
                    <Square value={squares[2]} handleClick={() => { handleClick(2) }} />
                </div>
                <div className="row">
                    <Square value={squares[3]} handleClick={() => { handleClick(3) }} />
                    <Square value={squares[4]} handleClick={() => { handleClick(4) }} />
                    <Square value={squares[5]} handleClick={() => { handleClick(5) }} />
                </div>
                <div className="row">
                    <Square value={squares[6]} handleClick={() => { handleClick(6) }} />
                    <Square value={squares[7]} handleClick={() => { handleClick(7) }} />
                    <Square value={squares[8]} handleClick={() => { handleClick(8) }} />
                </div>
            </div>
        </>
    )
}
