import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Icosahedron, Box, Sphere } from '@react-three/drei';

const SkillNode = ({ position, label, color, type }) => {
    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {type === 'box' && <Box args={[1, 1, 1]}><meshStandardMaterial color={color} wireframe /></Box>}
                {type === 'sphere' && <Sphere args={[0.7, 16, 16]}><meshStandardMaterial color={color} wireframe /></Sphere>}
                {type === 'icosahedron' && <Icosahedron args={[0.8, 0]}><meshStandardMaterial color={color} wireframe /></Icosahedron>}
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
                    {label}
                </Text>
            </Float>
        </group>
    );
};

const SkillsOrbit = () => {
    const orbitRef = useRef();

    useFrame((state) => {
        // Slow continuous rotation
        if (orbitRef.current) {
            orbitRef.current.rotation.y += 0.005;
            orbitRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group>
            {/* Center Core */}
            <Float speed={2} floatIntensity={0.5}>
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#0f172a" emissive="#3b82f6" emissiveIntensity={0.5} wireframe />
                </mesh>
            </Float>

            <group ref={orbitRef}>
                {/* Orbiting nodes spaced out */}
                <SkillNode position={[4, 0, 0]} label="React & Frontend" color="#3b82f6" type="box" />
                <SkillNode position={[-4, 0, 0]} label="Laravel & Backend" color="#ef4444" type="sphere" />
                <SkillNode position={[0, 0, 4]} label="AI / Tensorflow" color="#10b981" type="icosahedron" />
                <SkillNode position={[0, 0, -4]} label="Databases" color="#f59e0b" type="box" />
            </group>
            
            <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" distance={10} />
        </group>
    );
};

export default SkillsOrbit;
