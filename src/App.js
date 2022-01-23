import './App.css';
import RustAKModelFinal from './RustAKModelFinal'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Canvas camera={{zoom: 100, position: [0, 0, 100]}}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <RustAKModelFinal />
          </Suspense>
        </Canvas>  
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Welcome To Rustboi's Official</h1>
        <h2>Fresh wipe every Thursday</h2>
        <h2>Last Wipe 01/16/2022</h2>
        <h3>10X Server & 2X Server</h3>
        <button><a href="https://discord.gg/t6umrsMWSq" title="discord">Discord</a></button>
        <Canvas camera={{zoom: 100, position: [0, 0, 100]}}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <RustAKModelFinal />
          </Suspense>
        </Canvas>  
       </header>
    </div>
  );
}

export default App;
