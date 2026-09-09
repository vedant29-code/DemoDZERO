import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function Consequence() {
  const setScene = useStore((state) => state.setScene);
  const simulationScore = useStore((state) => state.simulationScore);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 2, 0]}
        title="CONSEQUENCES"
        text="Impaired perception leads to risky decisions."
        width={5}
        height={1}
        color="#7f1d1d"
      />
      
      <group position={[0, 0.5, 0]}>
        <TextPanel3D
          position={[-2.5, 0, 0]}
          title="IMMEDIATE"
          text="Reduced coordination and slower reaction times."
          width={2.2}
          height={1.5}
          color="#1e293b"
        />
        <TextPanel3D
          position={[0, 0, 0]}
          title="SHORT TERM"
          text={`Score: ${simulationScore}. Accidents, injuries, and poor choices.`}
          width={2.2}
          height={1.5}
          color="#1e293b"
        />
        <TextPanel3D
          position={[2.5, 0, 0]}
          title="LONG TERM"
          text="Dependence, mental health risks, and academic impact."
          width={2.2}
          height={1.5}
          color="#1e293b"
        />
      </group>

      <Button3D
        position={[0, -1, 0]}
        text="CONTINUE"
        onClick={() => setScene('reality_check')}
        width={3}
        color="#3b82f6"
        hoverColor="#60a5fa"
      />
    </group>
  );
}
