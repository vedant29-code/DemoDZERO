import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, createXRStore } from '@react-three/xr';
import { Environment, Sky, Stars } from '@react-three/drei';
import useStore from './store/useStore';

import Welcome from './scenes/Welcome';
import Disclaimer from './scenes/Disclaimer';
import ScenarioSelection from './scenes/ScenarioSelection';
import PeerPressure from './scenes/PeerPressure';
import Simulation from './scenes/Simulation';
import Consequence from './scenes/Consequence';
import RealityCheck from './scenes/RealityCheck';
import Quiz from './scenes/Quiz';
import FinalScreen from './scenes/FinalScreen';

const store = createXRStore();

function SceneManager() {
  const currentScene = useStore((state) => state.currentScene);

  return (
    <>
      {currentScene === 'welcome' && <Welcome />}
      {currentScene === 'disclaimer' && <Disclaimer />}
      {currentScene === 'scenario_selection' && <ScenarioSelection />}
      {currentScene === 'peer_pressure' && <PeerPressure />}
      {currentScene === 'simulation' && <Simulation />}
      {currentScene === 'consequence' && <Consequence />}
      {currentScene === 'reality_check' && <RealityCheck />}
      {currentScene === 'quiz' && <Quiz />}
      {currentScene === 'final_screen' && <FinalScreen />}
    </>
  );
}

export default function App() {
  const [xrSupported, setXrSupported] = useState(false);

  useEffect(() => {
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        setXrSupported(supported);
      });
    }
  }, []);

  return (
    <>
      <div className="overlay">
        <div className="overlay-header">
          <h2>Drug Awareness Simulation</h2>
          <button className="hud-button" onClick={() => store.enterVR()}>
            {xrSupported ? "ENTER VR" : "VR NOT SUPPORTED - DESKTOP MODE"}
          </button>
        </div>
      </div>
      
      <Canvas>
        <XR store={store}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <Sky sunPosition={[100, 20, 100]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Suspense fallback={null}>
            <SceneManager />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}
