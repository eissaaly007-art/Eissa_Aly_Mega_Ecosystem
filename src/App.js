import React, { useState, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import BusinessCore from './modules/BusinessCore';
import AIInnovation from './modules/AIInnovation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function App() {
  const [activeModule, setActiveModule] = useState('business');

  return (
    <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
      <Sidebar setActiveModule={setActiveModule} activeModule={activeModule} />
      <main className="flex-1 relative overflow-y-auto">
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial color="#d4af37" speed={2} distort={0.4} />
            </Sphere>
          </Canvas>
        </div>
        <div className="relative z-10 p-10">
          <Suspense fallback={<div className="text-yellow-500 font-bold">Initializing Eissa Aly OS...</div>}>
            {activeModule === 'business' ? <BusinessCore /> : <AIInnovation />}
          </Suspense>
        </div>
      </main>
    </div>
  );
}