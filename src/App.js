import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Sidebar from './components/Sidebar';
import BusinessCore from './modules/BusinessCore';
import AIInnovation from './modules/AIInnovation';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeModule, setActiveModule] = useState('business');

  return (
    <div className="flex h-screen w-full bg-slate-950 text-white overflow-hidden relative" style={{ fontFamily: 'sans-serif' }}>
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial color="#D4AF37" speed={3} distort={0.4} />
          </Sphere>
        </Canvas>
      </div>

      <Sidebar setActiveModule={setActiveModule} activeModule={activeModule} />

      <main className="relative z-10 flex-1 p-8 overflow-y-auto backdrop-blur-sm bg-black/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeModule === 'business' && <BusinessCore />}
            {activeModule === 'ai' && <AIInnovation />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}