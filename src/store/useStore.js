import { create } from 'zustand';

const useStore = create((set) => ({
  currentScene: 'welcome',
  audioEnabled: true,
  comfortMode: false,
  simulationScore: 0,
  quizScore: 0,
  substanceTaken: false,
  
  // Actions
  setScene: (scene) => set({ currentScene: scene }),
  toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
  toggleComfortMode: () => set((state) => ({ comfortMode: !state.comfortMode })),
  setSimulationScore: (score) => set({ simulationScore: score }),
  setQuizScore: (score) => set({ quizScore: score }),
  setSubstanceTaken: (taken) => set({ substanceTaken: taken }),
  resetExperience: () => set({
    currentScene: 'welcome',
    simulationScore: 0,
    quizScore: 0,
    substanceTaken: false
  })
}));

export default useStore;
