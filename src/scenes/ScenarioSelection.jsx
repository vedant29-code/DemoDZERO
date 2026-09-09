import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function ScenarioSelection() {
  const setScene = useStore((state) => state.setScene);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 2, 0]}
        title="CHOOSE SCENARIO"
        text="Select an environment to explore."
        width={6}
        height={1}
      />
      
      <group position={[0, 0.5, 0]}>
        <Button3D
          position={[-2, 0, 0]}
          text="Peer Pressure"
          onClick={() => setScene('peer_pressure')}
          width={3}
          color="#3b82f6"
          hoverColor="#60a5fa"
        />
        <Button3D
          position={[2, 0, 0]}
          text="Curiosity (Coming Soon)"
          disabled={true}
          width={3}
        />
        <Button3D
          position={[-2, -0.7, 0]}
          text="Stress (Coming Soon)"
          disabled={true}
          width={3}
        />
        <Button3D
          position={[2, -0.7, 0]}
          text="Party Situation (Coming Soon)"
          disabled={true}
          width={3}
        />
      </group>
      
      <Button3D
        position={[0, -1.5, 0]}
        text="BACK"
        onClick={() => setScene('welcome')}
        width={2}
        color="#475569"
        hoverColor="#64748b"
      />
    </group>
  );
}
