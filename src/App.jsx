import './assets/app.css'
import Award from './componenets/awards';
import Quiz from './componenets/quiz';
import { useState } from 'react';
function App() {

  //send ON : question to components question
  const [questionNumber, setQuestionNumber] = useState(1)
  //send set time to every question
  const[timeOut,setTimeOut]=useState(false)
  return (
    <div className="App">
      <Quiz 
      setQuestionNumber={setQuestionNumber} 
      setTimeOut={setTimeOut}
      questionNumber={questionNumber}
      />
      <Award questionNumber={questionNumber}/>
    </div>
  );
}

export default App;
