import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function FinalScreen() {
  const setScene = useStore((state) => state.setScene);
  const quizScore = useStore((state) => state.quizScore);
  const resetExperience = useStore((state) => state.resetExperience);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 2.5, 0]}
        title="THE CHOICE MATTERS"
        text="Know the risks. Protect yourself. Look out for others."
        width={6}
        height={1.5}
        color="#0f172a"
      />

      <TextPanel3D
        position={[0, 0.8, 0]}
        title={`Awareness Score: ${quizScore}%`}
        text={quizScore > 80 ? "Great job. You understand the risks and how to make safe choices." : "Consider reviewing the safety information to better understand the risks."}
        width={4}
        height={1.2}
        color="#1e293b"
      />

      <group position={[0, -0.5, 0]}>
        <Button3D
          position={[-2, 0, 0]}
          text="EXPERIENCE AGAIN"
          onClick={() => resetExperience()}
          width={3.5}
          color="#3b82f6"
          hoverColor="#60a5fa"
        />
        <Button3D
          position={[2, 0, 0]}
          text="EXIT"
          onClick={() => resetExperience()}
          width={3.5}
          color="#ef4444"
          hoverColor="#f87171"
        />
        <Button3D
          position={[0, -0.8, 0]}
          text="EXPLORE SAFETY INFO"
          onClick={() => alert("Please consult trusted health resources or professionals for real-world safety information.")}
          width={4}
          color="#10b981"
          hoverColor="#34d399"
        />
      </group>
    </group>
  );
}
