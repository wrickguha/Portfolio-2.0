import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Icosahedron, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const ProjectModel = ({ position, title, description, modelType, color, onClick }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        // Smooth scaling for hover effect
        const targetScale = hovered ? 1.2 : 1;
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        
        // Continuous rotation
        meshRef.current.rotation.y += 0.01;
        if (hovered) {
             meshRef.current.rotation.x += 0.02;
        }
    });

    return (
        <group position={position}>
            <group 
                ref={meshRef}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                    document.body.style.cursor = 'pointer';
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    setHovered(false);
                    document.body.style.cursor = 'auto';
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick({ title, description });
                }}
            >
                {/* Abstract Models for Projects */}
                {modelType === 'store' && (
                    <Box args={[1.5, 1.5, 1.5]}>
                        <meshStandardMaterial color={color} emissive={hovered ? color : '#000'} emissiveIntensity={hovered ? 0.8 : 0} />
                    </Box>
                )}
                {modelType === 'brain' && (
                    <Icosahedron args={[1, 1]}>
                        <meshStandardMaterial color={color} wireframe emissive={hovered ? color : '#000'} emissiveIntensity={hovered ? 0.8 : 0} />
                    </Icosahedron>
                )}
                {modelType === 'corporate' && (
                    <Cylinder args={[1, 1, 1.5, 32]}>
                        <meshStandardMaterial color={color} emissive={hovered ? color : '#000'} emissiveIntensity={hovered ? 0.8 : 0} />
                    </Cylinder>
                )}
            </group>
            
            <Text position={[0, -2, 0]} fontSize={0.4} color="white" anchorX="center" anchorY="middle">
                {title}
            </Text>
        </group>
    );
};

const ProjectsGallery = ({ onProjectClick }) => {
    return (
        <group>
            <ProjectModel 
                position={[-4, 0, 0]} 
                title="Winkelkart" 
                description="Production-level e-commerce platform built with PHP (Laravel). Custom cart systems and secure payment integrations." 
                modelType="store" 
                color="#8b5cf6" 
                onClick={onProjectClick} 
            />
            <ProjectModel 
                position={[0, 0, 2]} 
                title="Nano-Ice" 
                description="Modern corporate site featuring premium responsive architecture focusing on leading-edge mechanical and industrial solutions." 
                modelType="corporate" 
                color="#3b82f6" 
                onClick={onProjectClick} 
            />
            <ProjectModel 
                position={[4, 0, 0]} 
                title="Paella Experience" 
                description="Restaurant booking & immersive culinary platform ensuring seamless reservation pipelines and bilingual frontend support." 
                modelType="brain" 
                color="#10b981" 
                onClick={onProjectClick} 
            />
            
            <pointLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
        </group>
    );
};

export default ProjectsGallery;
