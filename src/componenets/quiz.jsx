import React, { useState } from "react";
import Question from "./questions";
import Timer from "./timer";
import useSound from "use-sound";
import play from "../music/start.wav"


import { useEffect } from "react";


function Quiz(params) {

    const [selectQuestion, setSelectQuestion] = useState(0)

    const [start] = useSound(play)

    // when get game over
    const [stop, setStop] = useState(false)

    // amount of award at the end of game
    const [earned, setEarned] = useState("$ 100")

    const sendQestion = () => {
        return params.setQuestionNumber(selectQuestion)
    }
    return (

        <div className="main">
            {stop ? (<h1 className="endText">Game Over! You earned: <span>${earned}</span> </h1>) :
                <React.Fragment>
                    <div className="top">
                        <div className="timer"><h2><Timer setStop={setStop} QuestionNumber={selectQuestion} /></h2></div>
                    </div>
                    <Question setquestion={setSelectQuestion} setStop={setStop} setEarned={setEarned} />
                    {sendQestion()}
                </React.Fragment>
            }

        </div>


    )
}

export default Quiz;