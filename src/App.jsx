import './assets/app.css'
import Award from './componenets/awards';
import Quiz from './componenets/quiz';
import { useState } from 'react';
function App() {

  //send ON : question to components question
  const [questionNumber, setQuestionNumber] = useState(1)
  const[amount,setEmount]=useState('$ 0')
  //send set time to every question
  // setEmount(document.getElementsByClassName('moneyListItem active'))
  return (
    <div className="App">
      <Quiz 
      setQuestionNumber={setQuestionNumber} 
      
      questionNumber={questionNumber}
      amount={amount}
      />
      <Award questionNumber={questionNumber}
      />
    </div>
  );
}

export default App;
