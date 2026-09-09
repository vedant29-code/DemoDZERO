import React, { useState } from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

const questions = [
  {
    question: "Was the drug in the simulation real?",
    options: ["Yes", "No", "Not sure"],
    correct: 1
  },
  {
    question: "What is a safe choice when offered an unknown substance?",
    options: ["Try a little", "Refuse and walk away", "Ask someone else to try it"],
    correct: 1
  },
  {
    question: "Impaired perception affects:",
    options: ["Only vision", "Only hearing", "Decision making and coordination"],
    correct: 2
  },
  {
    question: "If someone is struggling with addiction, you should:",
    options: ["Ignore them", "Seek professional help", "Tell them to stop"],
    correct: 1
  },
  {
    question: "Peer pressure:",
    options: ["Can always be refused", "Must be accepted", "Is not real"],
    correct: 0
  }
];

export default function Quiz() {
  const setScene = useStore((state) => state.setScene);
  const setQuizScore = useStore((state) => state.setQuizScore);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    let newScore = score;
    if (index === questions[currentQuestion].correct) {
      newScore += 1;
      setScore(newScore);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizScore(Math.round((newScore / questions.length) * 100));
      setScene('final_screen');
    }
  };

  const q = questions[currentQuestion];

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 2, 0]}
        title={`QUESTION ${currentQuestion + 1} OF ${questions.length}`}
        text={q.question}
        width={6}
        height={1.5}
        color="#1e293b"
      />

      <group position={[0, 0, 0]}>
        {q.options.map((option, index) => (
          <Button3D
            key={index}
            position={[0, 0.5 - index * 0.8, 0]}
            text={option}
            onClick={() => handleAnswer(index)}
            width={5}
            color="#3b82f6"
            hoverColor="#60a5fa"
          />
        ))}
      </group>
    </group>
  );
}
