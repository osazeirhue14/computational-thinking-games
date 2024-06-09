import React, { useState, useRef } from "react";
import './TicTac.css';
import BeaverPic from "../../Assets/BeaverPic.png";
import muskRatImage from '../../Assets/MuskRat.png';

let data = ["", "", "", "", "", "", "", "", ""];
const gotogames = (event) => {
    window.location.href = '/games';
  };
  

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);
    const boxRefs = useRef(Array.from({ length: 9 }, () => React.createRef()));

    const toggle = (e, num) => {
        if (lock || data[num]) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${BeaverPic}" alt="Beaver" />`;
            data[num] = 'x';
        } else {
            e.target.innerHTML = `<img src="${muskRatImage}" alt="MuskRat" />`;
            data[num] = 'o';
        }
        setCount(count + 1);
        checkWin();
    };

    const checkWin = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (const [a, b, c] of winningCombinations) {
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `Congratulations: <img src=${winner === 'x' ? BeaverPic : muskRatImage} alt="${winner === 'x' ? 'Beaver' : 'MuskRat'}" />`;
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        boxRefs.current.forEach(box => {
            box.current.innerHTML = "";
        });
        titleRef.current.innerHTML = "Tic Tac Toe";
    };

    return (
        <div className='container'>
            <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
            <div className="board">
                {boxRefs.current.map((ref, index) => (
                    <div className="boxes" ref={ref} key={index} onClick={(e) => toggle(e, index)}></div>
                ))}
            </div>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="reset" onClick={gotogames}>Back to Games</button>
        </div>
    );
};

export default TicTacToe;
