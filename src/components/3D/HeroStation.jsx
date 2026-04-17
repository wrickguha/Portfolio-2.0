import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Box, Cylinder } from '@react-three/drei';

const HeroStation = () => {
    const chairRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Slight thinking wobble
        if (chairRef.current) {
            chairRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
        }
    });

    return (
        <group>
            {/* The "Desk" */}
            <Box args={[4, 0.2, 2]} position={[0, -1, 0]}>
                <meshStandardMaterial color="#1e293b" />
            </Box>

            {/* Laptop / Screen */}
            <group position={[0, -0.9, -0.5]} rotation={[-0.2, 0, 0]}>
                <Box args={[1.5, 1, 0.1]} position={[0, 0.5, 0]}>
                    <meshStandardMaterial color="#0f172a" />
                </Box>
                {/* Glowing Screen */}
                <Box args={[1.4, 0.9, 0.11]} position={[0, 0.5, 0]}>
                    <meshBasicMaterial color="#3b82f6" />
                </Box>
                <Box args={[1.5, 0.1, 1]} position={[0, 0, 0.5]}>
                    <meshStandardMaterial color="#334155" />
                </Box>
            </group>

            {/* Abstract Developer Avatar */}
            <group ref={chairRef} position={[0, -1, 1]}>
                {/* Chair */}
                <Cylinder args={[0.5, 0.5, 0.2, 16]} position={[0, -0.1, 0]}>
                     <meshStandardMaterial color="#475569" />
                </Cylinder>
                {/* Body Base */}
                <Box args={[0.8, 1, 0.6]} position={[0, 0.6, 0]}>
                     <meshStandardMaterial color="#10b981" />
                </Box>
                {/* Head */}
                <Box args={[0.6, 0.6, 0.6]} position={[0, 1.5, 0]}>
                     <meshStandardMaterial color="#fcd34d" />
                </Box>
                {/* Thinking / Loading Spinner above head */}
                <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={[0, 2.2, 0]}>
                        <torusGeometry args={[0.2, 0.05, 16, 32]} />
                        <meshBasicMaterial color="#3b82f6" />
                    </mesh>
                </Float>
            </group>

            {/* Floating Code Snippets representing typing */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Text position={[-2.5, 1, -1]} fontSize={0.3} color="#10b981" anchorX="center" anchorY="middle">
                    {"const dev = 'Pratik';"}
                </Text>
            </Float>
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5} position={[2, 0, 0]}>
                <Text position={[1, 1.5, -2]} fontSize={0.25} color="#8b5cf6" anchorX="center" anchorY="middle">
                    {"<React.Canvas />"}
                </Text>
            </Float>
            
            <pointLight position={[0, 1, -0.2]} intensity={2} color="#3b82f6" distance={5} />
        </group>
    );
};

export default HeroStation;
