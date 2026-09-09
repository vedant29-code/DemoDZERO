import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';
import { Sphere } from '@react-three/drei';

export default function PeerPressure() {
  const setScene = useStore((state) => state.setScene);
  const setSubstanceTaken = useStore((state) => state.setSubstanceTaken);

  const handleRefuse = () => {
    setSubstanceTaken(false);
    setScene('reality_check');
  };

  const handleSimulation = () => {
    setSubstanceTaken(true);
    setScene('simulation');
  };

  return (
    <group position={[0, 1.5, -3]}>
      {/* Abstract Character */}
      <group position={[0, 0, -2]}>
        <Sphere args={[0.5, 32, 32]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#94a3b8" />
        </Sphere>
        <TextPanel3D
          position={[0, 2.5, 0]}
          title=""
          text="Hey, everyone is trying Substance X. Want some? It's fine."
          width={4}
          height={1}
          color="#334155"
        />
      </group>

      {/* Choices */}
      <group position={[0, -0.5, 0]}>
        <Button3D
          position={[-2, 0, 0]}
          text="REFUSE"
          onClick={handleRefuse}
          width={3.5}
          color="#10b981"
          hoverColor="#34d399"
        />
        <Button3D
          position={[2, 0, 0]}
          text="WALK AWAY"
          onClick={handleRefuse}
          width={3.5}
          color="#10b981"
          hoverColor="#34d399"
        />
        <Button3D
          position={[-2, -0.7, 0]}
          text="ASK FOR HELP"
          onClick={handleRefuse}
          width={3.5}
          color="#10b981"
          hoverColor="#34d399"
        />
        <Button3D
          position={[2, -0.7, 0]}
          text="ENTER SIMULATION"
          onClick={handleSimulation}
          width={3.5}
          color="#ef4444"
          hoverColor="#f87171"
        />
      </group>
    </group>
  );
}
