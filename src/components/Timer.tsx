import React, { useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        const callback =
            currentPlayer?.color === Colors.WHITE
                ? decrementWhiteTime
                : decrementBlackTime;
        timer.current = setInterval(callback, 1000);
    }
    function decrementWhiteTime() {
        setWhiteTime((prevState) => prevState - 1);
    }
    function decrementBlackTime() {
        setBlackTime((prevState) => prevState - 1);
    }

    const handleRestart = () => {
        setBlackTime(300);
        setWhiteTime(300);
        restart();
    };

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Белые - {whiteTime}</h2>
        </div>
    );
};

export default Timer;
