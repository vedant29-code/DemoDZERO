import React from 'react';
import useStore from '../store/useStore';
import TextPanel3D from '../components/ui/TextPanel3D';
import Button3D from '../components/ui/Button3D';

export default function RealityCheck() {
  const setScene = useStore((state) => state.setScene);
  const substanceTaken = useStore((state) => state.substanceTaken);

  return (
    <group position={[0, 1.5, -3]}>
      <TextPanel3D
        position={[0, 2, 0]}
        title="WHAT YOU EXPERIENCED WAS A SIMULATION"
        text="No real drug was used. The purpose was to demonstrate how impaired perception and decision-making can create risks."
        width={6}
        height={1.5}
        color="#0f172a"
      />

      <group position={[0, 0, 0]}>
        <TextPanel3D
          position={[0, 0, 0]}
          title="WHAT TO REMEMBER"
          text={`• You never need to prove yourself by using a substance.\n• Peer pressure can be refused.\n• Asking for help is a safe choice.\n• Real drug effects can be unpredictable.\n• If you or someone else is struggling, seek qualified professional help.`}
          width={6}
          height={2}
          color="#1e293b"
        />
      </group>

      <Button3D
        position={[0, -1.5, 0]}
        text="TAKE AWARENESS QUIZ"
        onClick={() => setScene('quiz')}
        width={4}
        color="#8b5cf6"
        hoverColor="#a78bfa"
      />
    </group>
  );
}
