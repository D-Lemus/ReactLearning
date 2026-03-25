import { useState, useEffect, useRef } from "react";
import quizData from "./questions/math.json";
//cronometer
export default function App(){



return (


  <div>
  {quizData.map((problem) => (

  <div key={problem.id} className="card">
    <h2>{problem.question}</h2>
    <p>Difficulty: {problem.difficulty}</p>
  </div>
))}
</div>







)



}

