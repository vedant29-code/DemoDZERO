import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function Disclaimer() {
  const setScene = useStore((state) => state.setScene);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 1, 0]}
        title="SAFETY DISCLAIMER"
        text="This experience is a fictional educational simulation. No real drugs or substances are involved. The effects shown are simplified representations intended for awareness and education."
        width={5}
        height={2}
      />
      
      <Button3D
        position={[-1.6, -0.7, 0]}
        text="I UNDERSTAND"
        onClick={() => setScene('scenario_selection')}
        width={3}
        color="#10b981"
        hoverColor="#34d399"
      />
      
      <Button3D
        position={[1.6, -0.7, 0]}
        text="EXIT"
        onClick={() => setScene('welcome')}
        width={3}
        color="#ef4444"
        hoverColor="#f87171"
      />
    </group>
  );
}
