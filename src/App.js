import './App.css';
import React from 'react';
import Hero from '../src/Components/Hero'
import quizData from './quizData';
import Card from './Components/Card';

function App() {


const [data, setData] = React.useState(quizData)

const quizCard = data.map((item) => {
  return(
    <Card 
      question= {item.question}
      option1={item.option1}
      option2={item.option2}
      option3={item.option3}
      option4={item.option4}
    />
  )
})


  return (
    <div>
      <Hero />
      {quizCard}
    </div>
  );
}

export default App;
