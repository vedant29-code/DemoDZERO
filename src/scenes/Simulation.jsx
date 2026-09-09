import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import useStore from '../store/useStore';
import Button3D from '../components/ui/Button3D';
import TextPanel3D from '../components/ui/TextPanel3D';
import { Sphere, Box, Torus, Plane } from '@react-three/drei';
import { Interactive } from '@react-three/xr';
import * as THREE from 'three';

const IMPAIRMENT_MAX = 0.8;

export default function Simulation() {
  const setScene = useStore((state) => state.setScene);
  const setSimulationScore = useStore((state) => state.setSimulationScore);
  
  const [impairmentLevel, setImpairmentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [targetPosition, setTargetPosition] = useState([0, 1, -3]);

  // Gradually increase impairment
  useFrame((state, delta) => {
    if (impairmentLevel < IMPAIRMENT_MAX) {
      setImpairmentLevel(prev => Math.min(prev + delta * 0.05, IMPAIRMENT_MAX));
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSimulationScore(score);
          setScene('consequence');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [score, setScene, setSimulationScore]);

  const handleTargetClick = () => {
    setScore(s => s + 1);
    setTargetPosition([
      (Math.random() - 0.5) * 4,
      Math.random() * 2 + 0.5,
      -Math.random() * 3 - 1
    ]);
  };

  return (
    <>
      <fog attach="fog" args={['#0f172a', 2 - impairmentLevel, 10 - impairmentLevel * 5]} />
      
      <group position={[0, 1.5, -3]}>
        <TextPanel3D
          position={[0, 2, 0]}
          title="COGNITIVE CHALLENGE"
          text={`Find and click the blue sphere.\nTime Left: ${timeLeft}s | Score: ${score}\n\nSimulation score, not a medical assessment.`}
          width={5}
          height={1.5}
        />
        
        <Button3D
          position={[-2, -1, 0]}
          text="SKIP SIMULATION"
          onClick={() => {
            setSimulationScore(score);
            setScene('consequence');
          }}
          width={3.5}
          color="#f59e0b"
          hoverColor="#fbbf24"
        />
        <Button3D
          position={[2, -1, 0]}
          text="EXIT EXPERIENCE"
          onClick={() => setScene('welcome')}
          width={3.5}
          color="#ef4444"
          hoverColor="#f87171"
        />
      </group>

      <Interactive onSelect={handleTargetClick}>
        <Sphere args={[0.3, 32, 32]} position={targetPosition} onClick={handleTargetClick}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>
      </Interactive>

      <Box args={[0.5, 0.5, 0.5]} position={[-2, 1, -2]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
      <Torus args={[0.3, 0.1, 16, 32]} position={[2, 1.5, -3]}>
        <meshStandardMaterial color="#10b981" />
      </Torus>
    </>
  );
}
