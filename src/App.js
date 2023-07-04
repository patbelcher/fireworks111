import ParticlesOptions  from './data/tunnel.json';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import {useCallback} from 'react';
import './App.css';

function App() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
);


  return (
    <>
      <h1 style={{color: "red"}}>Particles</h1>
      <Particles
          options={ParticlesOptions}
          init={particlesInit} />
    
    </>


  );
}

export default App;
