import React, { useEffect, useState } from 'react';

function Timer(params) {
    const [timer, setTimer] = useState(30)
    console.log('number of questions is updated:', params.QuestionNumber)

    // by update timer and if player went to next level use effect execute  
    useEffect(() => {

        // setInterval is a function that execute every 1s setInterval(myFunc,1000)
        const interval = setInterval(() => {
            timer === 0 ? params.setStop(true) : setTimer((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [params.setStop, timer])

    //if player went to next level timer start again
    useEffect(() => {
        setTimer(30)
    }, [params.QuestionNumber])



    return timer
}


export default Timer;