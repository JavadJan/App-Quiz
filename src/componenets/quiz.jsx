import { useState } from "react";
import Question from "./questions";

function Quiz(params) {

    const sendQestion = () => {
       return params.setQuestionNumber(2)
    }
    return (
        <div className="main">
            <div className="top">
                <div className="timer"><h2>30 min</h2></div>
            </div>
            <Question setquestion={params.questionNumber}  />
            {sendQestion()}
        </div>
    )
}

export default Quiz;