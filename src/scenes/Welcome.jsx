import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function Welcome() {
  const setScene = useStore((state) => state.setScene);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 1.2, 0]}
        title="DRUG AWARENESS VR"
        text="Experience the consequences. Never the substance."
        width={5}
        height={1.5}
      />
      
      <Button3D
        position={[0, 0, 0]}
        text="ENTER EXPERIENCE"
        onClick={() => setScene('disclaimer')}
        width={3}
      />
      
      <Button3D
        position={[0, -0.7, 0]}
        text="ABOUT"
        onClick={() => alert("This is an educational simulation built for awareness.")}
        width={3}
        color="#475569"
        hoverColor="#64748b"
      />
    </group>
  );
}
