import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import HeroStation from './3D/HeroStation';
import SkillsOrbit from './3D/SkillsOrbit';
import ProjectsGallery from './3D/ProjectsGallery';

const SceneObjects = () => {
    useFrame((state) => {
        const scrollY = window.scrollY;
        // Approximate total height for normalized offset
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const offset = scrollY / maxScroll;
        
        // Z travels backwards out from initial to deep space
        const targetZ = 8 - (offset * 45);
        const targetY = -(offset * 15);
        
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);

        // Subtly track mouse movement for cinematic pan
        state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, (state.pointer.y * Math.PI) / 30, 0.05);
        state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, (-state.pointer.x * Math.PI) / 30, 0.05);
    });

    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Adjusted X positions to offset nicely behind the 2D elements */}
        <group position={[3, -1, -3]}>
            <HeroStation />
        </group>

        {/* Orbit element behind Skills / Experience */}
        <group position={[-5, -12, -22]}>
            <SkillsOrbit />
        </group>

        {/* Floating projects behind Projects grid */}
        <group position={[0, -20, -40]}>
            <ProjectsGallery onProjectClick={() => {}} />
        </group>
      </>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
                {/* Deep background color matching dark theme */}
                <color attach="background" args={['#050810']} />
                {/* Fog to obscure far elements */}
                <fog attach="fog" args={['#050810', 10, 45]} />
                <SceneObjects />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
