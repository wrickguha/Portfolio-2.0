import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

import HeroStation from './3D/HeroStation';
import SkillsOrbit from './3D/SkillsOrbit';
import ProjectsGallery from './3D/ProjectsGallery';

const ThreeScene = ({ onProjectClick }) => {
  const scroll = useScroll();
  const cameraGroup = useRef();

  useFrame((state, delta) => {
    // scroll.offset goes from 0 to 1
    const offset = scroll.offset;
    
    // Animate camera position based on scroll
    // Hero is z=0, Skills is z=-15, Projects is z=-30, Contact is z=-45
    const targetZ = -offset * 45;
    const targetY = -offset * 5; // Subtle dip
    
    // Lerp camera group position for smooth journey
    cameraGroup.current.position.z = THREE.MathUtils.lerp(cameraGroup.current.position.z, targetZ, 0.05);
    cameraGroup.current.position.y = THREE.MathUtils.lerp(cameraGroup.current.position.y, targetY, 0.05);
    
    // Add a slight wobble tied to the mouse/pointer
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, (state.pointer.y * Math.PI) / 30, 0.05);
    state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, (-state.pointer.x * Math.PI) / 30, 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      
      {/* Background Particles */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={cameraGroup}>
         {/* The camera itself sits inside this group, so it moves as the group moves */}
      </group>

      {/* 1. Hero Station */}
      <group position={[0, 0, -3]}>
        <HeroStation />
      </group>

      {/* 2. Skills Orbiting Center */}
      <group position={[0, -2, -18]}>
        <SkillsOrbit />
      </group>

      {/* 3. Projects Gallery */}
      <group position={[0, -4, -33]}>
        <ProjectsGallery onProjectClick={onProjectClick} />
      </group>
      
      {/* Easter Egg / Deco */}
      <mesh position={[10, 5, -25]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#10b981" wireframe />
      </mesh>
    </>
  );
};

export default ThreeScene;
