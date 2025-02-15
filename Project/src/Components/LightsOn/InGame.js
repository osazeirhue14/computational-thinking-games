
// REACT IMPORTS
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Ball from "../ball/Ball";

//I IMPORTED ALL THE FILES / STYLE IMPORTS
import BlackBoard from "../../Assets/board-layer-black-large.svg";
import SmallBlackBoard from "../../Assets/board-layer-black-small.svg";
import WhiteBoard from "../../Assets/board-layer-white-large.svg";
import SmallWhiteBoard from "../../Assets/board-layer-white-small.svg";
import PlayerOne from "../../Assets/player-one.svg";
import PlayerTwo from "../../Assets/player-two.svg";
import CPU from "../../Assets/cpu.svg";
import YellowTurn from "../../Assets/turn-background-yellow.svg";
import RedTurn from "../../Assets/turn-background-red.svg";
import YellowMarker from "../../Assets/marker-yellow.svg";
import RedMarker from "../../Assets/marker-red.svg";
import Styles from "./InGame.module.css";

const InGame = () => {
  let winningArray = [
    // Array contents
    // Array of winning combinations
    [0, 1, 2, 3], //would be top left to top right running horizontally
    [41, 40, 39, 38], //etc
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21], //represents a vertical win on the first column
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24], //represents a diagonal win from the top left to the bottom right.
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 7, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ];
  // Refs to various elements
  //const button1 = useRef(); to const button7 = useRef();: These references correspond to the buttons used to drop the game pieces into the columns of the Connect 4 board.
  const boardRef = useRef();
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();
  // State variable
  const [redPlayerBalls, setRedPlayerBalls] = useState([]); //This state keeps track of all the positions on the board where the red player has placed their pieces.
  const [yellowPlayerBalls, setYellowPlayerBalls] = useState([]); //This state keeps track of all the positions on the board where the yellow player has placed their pieces.
  const [slot, setSlot] = useState({ 0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5 }); //This state keeps track of the next available row in each column. Each key represents a column, and its value represents the next available row in that column.
  const [modalShow, setModalShow] = useState(false); //This state manages the visibility of a modal, which might be used for displaying messages or settings.
  const [markerMove, setMarkerMove] = useState({ x: 200, y: 200 }); //This state tracks the position of a marker, probably for highlighting the current column where a piece will be dropped.
  const [turn, setTurn] = useState(true); //This state manages whose turn it is to play. A value of true might represent the yellow player's turn, while false represents the red player's turn.
  const [balls, setBalls] = useState([]); //This state keeps track of all the pieces on the board, including their position and color.
  const [timer, setTimer] = useState(0); //This state is a timer that could be used to track the duration of the game or the time taken for each turn.
  const [winner, setWinner] = useState(""); //This state keeps track of the winner of the game. It starts as an empty string and is set to the winning player's color when someone wins.
  const [winningBalls, setWinningBalls] = useState([]); //This state stores the positions of the winning pieces when there is a winner.
  const [redScore, setRedScore] = useState(0); //This state tracks the red player's score.
  const [yellowScore, setYellowScore] = useState(0); //This state tracks the yellow player's score.
  const [cpuTurn, setcpuTurn] = useState(true); //This state is used to manage the CPU's turn in a single-player game.
  const [isScreenSmall, setIsScreenSmall] = useState(false); //This state determines whether the screen size is small, which might affect the layout or behavior of the game.
  const [isGameFinished, setIsGameFinished] = useState(false); //This state indicates whether the game has finished.
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); //This state is used to enable or disable the column buttons, preventing multiple rapid clicks.

   // Get the location object to determine if it's a player or CPU
  const location = useLocation();
  const isPlayer = location?.state?.test;

  useEffect(() => {
    function handleResize() {
      window.location.reload();
    }
    window.addEventListener("resize", handleResize);
  }, [isScreenSmall]); //for resizing the window and updating the state accordingly.

  useEffect(() => {
    let newBalls = balls.map((ball) => { // create a new array newBalls by mapping through the current balls array, which contains all the balls on the game board.
      if (
        String(ball.num) === String(winningBalls[0]) ||
        String(ball.num) === String(winningBalls[1]) || //For each ball, we check if matches any of the numbers in the winningBalls array.
        String(ball.num) === String(winningBalls[2]) ||
        String(ball.num) === String(winningBalls[3])
      ) {
        return {
          check: true, //if true
          color: ball.color, // visually highlight the winning balls on the game board.
          left: ball.left,
          num: ball.num,
          top: ball.top,
        };
      } else {
        return {
          check: false,
          color: ball.color,
          left: ball.left,
          num: ball.num,
          top: ball.top,
        };
      }
    });
    setBalls(newBalls);
    if (winner === "red") {
      setRedScore(redScore + 1); //updating scores
    } else {
      setYellowScore(yellowScore + 1);
    }
    setIsGameFinished(false);
  }, [winningBalls, isGameFinished]); //reset function

  useEffect(() => {
    let macroTimer = setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearTimeout(macroTimer);
    };
  }, [timer]);

  useEffect(() => { //sets everything to 0
    setYellowPlayerBalls([]);
    setRedPlayerBalls([]);
    setRedScore(0);
    setYellowScore(0);
    setTurn(!turn);
    setcpuTurn(!cpuTurn);
    const width = window.innerWidth;
    if (width < 1190) {
      setIsScreenSmall(true);
    }
  }, []);

  const handlePlay = (event) => {
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 600); //disables button and re-anables afer 600 ms to stop rapid clicking

    if (slot[event.target.id] >= 0 && !winner) {
      if (!isScreenSmall) {
        setBalls([
          ...balls,
          {
            color: turn ? "yellow" : "red",
            left: 68 * Number(event.target.id) + 15 + 20 * (Number(event.target.id) - 1) + 25,
            top: 69 * slot[Number(event.target.id)] + 15 + 20 * slot[Number(event.target.id)] + 4,
            num: slot[Number(event.target.id)] * 7 + Number(event.target.id),
            check: false,
          },
        ]);
        if (turn) {
          setRedPlayerBalls([...redPlayerBalls, slot[Number(event.target.id)] * 7 + Number(event.target.id)]);
        } else {
          setYellowPlayerBalls([...yellowPlayerBalls, slot[Number(event.target.id)] * 7 + Number(event.target.id)]);
        }
        setSlot({ ...slot, [Number(event.target.id)]: slot[Number(event.target.id)] - 1 });
      } else {
        setBalls([
          ...balls,
          {
            color: turn ? "yellow" : "red",
            left: 33.5 * Number(event.target.id) + 15 + 13 * (Number(event.target.id) - 1) + 10,
            top: 33.5 * slot[Number(event.target.id)] + 10 + 15 * slot[Number(event.target.id)] + 10,
            num: slot[Number(event.target.id)] * 7 + Number(event.target.id),
            check: false,
          },
        ]);
        if (turn) {
          setRedPlayerBalls([...redPlayerBalls, slot[Number(event.target.id)] * 7 + Number(event.target.id)]);
        } else {
          setYellowPlayerBalls([...yellowPlayerBalls, slot[Number(event.target.id)] * 7 + Number(event.target.id)]);
        }
        setSlot({ ...slot, [Number(event.target.id)]: slot[Number(event.target.id)] - 1 });
      }
      setTurn(!turn);
    }
    if (!winner && !isPlayer && turn) {
      setcpuTurn(!cpuTurn);
      setTurn(!turn);
    }
  };

  useEffect(() => {
    if (!winner && !isPlayer) {
      let cpuTimer = setTimeout(cpuPlay, 1000);
      return () => clearTimeout(cpuTimer);
    }
  }, [cpuTurn, winner]);

  const handleReset = () => { //Resets the game state to start a new game 
    setBalls([]);
    setTimer(0);
    setWinner("");
    setRedPlayerBalls([]);
    setYellowPlayerBalls([]);
    setSlot({ 0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5 });
  };

  const handleRestart = () => { //Resets the game state to start a new game and the score
    setBalls([]);
    setTimer(0);
    setWinner("");
    setRedPlayerBalls([]);
    setYellowPlayerBalls([]);
    setSlot({ 0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5 });
    setRedScore(0); //<<
    setYellowScore(0); //<<
  };

  const updateDisplay = (event) => { //Updates the position of a marker based on mouse movement.
    setMarkerMove({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    let redCounter = 0;
    let yellowCounter = 0; //These counters keep track of how many consecutive pieces each player has in the current winning combination being checked.
    for (let i = 0; i < winningArray.length; i++) { // iterates through each combination in winningArray.
      for (let j = 0; j < winningArray[i].length; j++) { // iterates through each position in the current winning combination.
        if (redPlayerBalls.includes(winningArray[i][j])) {
          redCounter++;
        } else if (yellowPlayerBalls.includes(winningArray[i][j])) {
          yellowCounter++;
        }
        if (redCounter > 3) { //If redCounter exceeds 3, it means the red player has a winning combination. 
          setWinner("yellow");
          let won = winningArray[i];
          setWinningBalls(won);
          break;
        }
        if (yellowCounter > 3) { //If yellowCounter exceeds 3, it means the yellow player has a winning combination. 
          setWinner("red");
          let won = winningArray[i];
          setWinningBalls(won);
          break;
        }
      }
      redCounter = 0;
      yellowCounter = 0;
    }
  }, [turn]);

  const cpuPlay = () => { //handles the logic for the CPU's move in the game.
    let emptySlot;
    let cpuNum;
    while (true) { //A while loop is used to randomly select a column (myNum) and check if there is an available slot (cpuSlot) in that column.
      let myNum = Math.floor(Math.random() * 6); //Randomly selects a column index between 0 and 5.
      let cpuSlot = slot[myNum];
      if (cpuSlot >= 0) { // Checks if the selected column has an available slot.
        emptySlot = cpuSlot;
        cpuNum = myNum;
        break;
      }
    }
    //changes coordinations according to the size of the screen
    if (!isScreenSmall) {
      setBalls([
        ...balls,
        {
          color: turn ? "yellow" : "red",
          left: 68 * cpuNum + 15 + 20 * (cpuNum - 1) + 25,
          top: 69 * emptySlot + 15 + 20 * emptySlot + 4,
          num: emptySlot * 7 + cpuNum,
          check: false,
        },
      ]);
    } else {
      setBalls([
        ...balls,
        {
          color: turn ? "yellow" : "red",
          left: 33.5 * cpuNum + 15 + 13 * (cpuNum - 1) + 10,
          top: 33.5 * emptySlot + 10 + 15 * emptySlot + 10,
          num: emptySlot * 7 + cpuNum,
          check: false,
        },
      ]);
    }
    if (turn) {
      setRedPlayerBalls([...redPlayerBalls, emptySlot * 7 + cpuNum]);
    } else {
      setYellowPlayerBalls([...yellowPlayerBalls, emptySlot * 7 + cpuNum]);
    }
    setSlot({ ...slot, [cpuNum]: emptySlot - 1 });
    setTurn(!turn);
  };

  return (
    
    <div className={Styles.inGameContainer}>
      <img
        src={!turn ? YellowMarker : RedMarker}
        className={Styles.marker}
        style={{ position: "absolute", left: `${markerMove.x}px` }}
        alt="YellowMarker"
      />
      <div className={Styles.main}>
        <div className={Styles.playerOne}>
          <img src={PlayerOne} alt="PlayerOne" />
          <p>{!isPlayer ? "YOU" : "PLAYER 1"}</p>
          <h2>{yellowScore}</h2>
        </div>
        <div
          className={Styles.board}
          onMouseMove={updateDisplay}
          ref={boardRef}
        >
          <button
            id="0"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button1}
          >
            1
          </button>
          <button
            id="1"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button2}
          >
            
          </button>
          <button
            id="2"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button3}
          >
            3
          </button>
          <button
            id="3"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button4}
          >
            4
          </button>
          <button
            id="4"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button5}
          >
            5
          </button>
          <button
            id="5"
            className={Styles.mobileButton}
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button6}
          >
            6
          </button>
          <button
            className={Styles.mobileButton}
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button7}
            id="6"
          >
            7
          </button>
          {balls.map((ball) => {
            return (
              <div
                key={ball.num}
                className={`${ball.check && Styles.ballDiv} ${Styles.ballClass}`}
                style={{
                  position: "absolute",
                  left: `${ball.left}px`,
                  top: `${ball.top}px`,
                  zIndex: "4",
                }}
              >
                <Ball turn={turn} ball={ball} isScreenSmall={isScreenSmall} />
              </div>
            );
          })}
          <img
            src={isScreenSmall ? SmallBlackBoard : BlackBoard}
            alt="BlackBoard"
            className={Styles.BlackBoard}
          />
          <img
            src={isScreenSmall ? SmallWhiteBoard : WhiteBoard}
            alt="WhiteBoard"
            className={Styles.WhiteBoard}
          />
        </div>
        <div className={Styles.playerTwo}>
          <img src={isPlayer ? PlayerTwo : CPU} alt="PlayerTwo" />
          <p>{!isPlayer ? "CPU" : "PLAYER 2"}</p>
          <h2>{redScore}</h2>
        </div>
      </div>
      {winner ? (
        <div className={Styles.winnerBoard}>
          <p>
            {!isPlayer && turn
              ? "CPU"
              : !isPlayer
              ? "PLAYER "
              : winner === "yellow"
              ? "PLAYER 1"
              : "PLAYER 2"}
          </p>
          <h2>WINS</h2>
          <button onClick={handleReset}>PLAY AGAIN</button>
        </div>
      ) : (
        <div className={Styles.turn}>
          <img
            className={Styles.yellowTurn}
            src={!turn ? YellowTurn : RedTurn}
            alt="YellowTurn"
          />
          <div
            className={Styles.turnText}
            style={{ color: !turn ? "black" : "rgb(251, 251, 251)" }}
          >
            <p style={{ marginTop: "9px" }}>
              {!isPlayer && turn
                ? "PLAYER"
                : !isPlayer && !turn
                ? "CPU"
                : turn
                ? "PLAYER 1"
                : " PLAYER 2"}
              'S TURN
            </p>
            <h2>{timer}s</h2>
          </div>
        </div>
      )}
      <div
        className={`${Styles.inGameFooter} ${
          winner === "yellow"
            ? Styles.inGameFooterRed
            : winner === "red"
            ? Styles.inGameFooterYellow
            : Styles.inGameFooterBlue
        }`}
      ></div>
      
    </div>
  );
};

export default InGame;
