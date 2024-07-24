import React, { useState } from "react";
import maze from "../../Assets/maze.png";
import maze2 from "../../Assets/maze2.png";
import maze3 from "../../Assets/maze3.png";
import Styles from "./Maze.module.css";


const Maze = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (number) => {
    if (number === "18") {
      setMessage(<span className={Styles.correct}>Correct!</span>);
    } else {
      setMessage(
        <div>
          <p>
          
            <span className={Styles.incorrect}>Incorrect!</span>
            <br />
            <span>Answer: 18</span>
            <br></br>
            <span>Explanation:

The given problem is a shortest path problem. There are different approaches to obtain the solution, one of which is to apply Dijkstra’s algorithm to find the shortest path from A to B. The image below shows the lengths of the optimal paths to all cells if starting from A.</span>
            <br>
            </br>
            <img src={maze2} alt="Explanation 1" className={Styles.explanationImage} />
            <br />
            <span>One can see that the length of the shortest path to B is 18. One of the possible optimal paths is the following: </span>
            <br></br>
          <img src={maze3} alt="Explanation 2" className={Styles.explanationImage} />
          <br></br>
          <span>Answer D (20) corresponds to the optimal path when moving only within one floor. Answer A (16) corresponds to the lower bound of the time to reach B from A if going via the other floor and assuming there are no walls (i. e. [Manhattan distance from A to B] + [time to move between floors]).</span>
           
            
            <br />
            
          </p>
        </div>
      );
    }
  };

  return (
    <div className={Styles.container}>
    
      <h1 className={Styles.heading}>Maze</h1>
      <div className={Styles.content}>
        <div className={Styles.explanation}>
         
          
        </div>
        <p>The Little Beaver is in a maze. The maze is made up of two floors, each with its own grid of obstacles.

</p>
        <img src={maze} alt="maze" className={Styles.image} />
        <div className={Styles.question}>
            <p>The Little Beaver can move between two adjacent cells within one floor if there is no wall between the cells; this takes one second.
            </p>
            <br></br>
            <p>The Little Beaver can also use her magic wand to move to the corresponding cell of the other floor; this takes five seconds.</p>
            <br></br>
            <p>For example, if the Little Beaver is in cell A, there are three possible moves:</p>
            <p>1. Move left. This move takes 1 second.</p>
            <p>2. Move down. This move takes 1 second.</p>
            <p>3. Move to the corresponding cell of the other floor. This move takes 5 seconds.</p>
            <br></br>
            <p>The Little Beaver starts at cell A and wants to reach cell B as soon as possible. </p>
            <br></br>
          <p>Question:</p>
          <p>What is the shortest time needed for the Little Beaver to reach cell B, if starting from cell A?</p>
          <div className={Styles.buttons}>
            <button onClick={() => handleButtonClick("16")}>16</button>
            <button onClick={() => handleButtonClick("17")}>17</button>
            <button onClick={() => handleButtonClick("18")}>18</button>
            <button onClick={() => handleButtonClick("20")}>20</button>
          </div>
          <div className={Styles.message}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Maze;
