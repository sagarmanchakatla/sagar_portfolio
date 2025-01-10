import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Button3D = ({ 
  icon: Icon, 
  label, 
  position, 
  color, 
  hoverColor, 
  onClick 
}) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        hovered ? Math.PI * 0.02 : 0,
        0.1
      );
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        clicked ? -0.5 : 0,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => {
          setClicked(false);
          onClick();
        }}
      >
        <boxGeometry args={[2, 0.8, 0.2]} />
        <meshStandardMaterial 
          color={hovered ? hoverColor : color}
          roughness={0.3}
          metalness={0.7}
        />
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </mesh>
    </group>
  );
};

const Scene = ({ router }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  const buttons = [
    {
      label: 'Github',
      color: '#808080',
      hoverColor: '#606060',
      position: [-2.2, 1.5, 0],
      onClick: () => router.push('https://github.com/sagarmanchakatla')
    },
    {
      label: 'LinkedIn',
      color: '#e4a853',
      hoverColor: '#dc7723',
      position: [0, 1.5, 0],
      onClick: () => router.push('https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284')
    },
    {
      label: 'Projects',
      color: '#ff7043',
      hoverColor: '#e3441c',
      position: [2.2, 1.5, 0],
      onClick: () => router.push('/projects')
    },
    {
      label: 'Resume',
      color: '#2196f3',
      hoverColor: '#2069df',
      position: [-2.2, 0, 0],
      onClick: () => router.push('/pdfs/resume')
    },
    {
      label: 'Skills',
      color: '#424242',
      hoverColor: '#323232',
      position: [0, 0, 0],
      onClick: () => router.push('/skills')
    },
    {
      label: 'Socials',
      color: '#4a148c',
      hoverColor: '#3a1078',
      position: [2.2, 0, 0],
      onClick: () => router.push('/socials')
    },
    {
      label: 'Blog',
      color: '#9c27b0',
      hoverColor: '#8e24aa',
      position: [0, -1.5, 0],
      onClick: () => router.push('/blog')
    }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {buttons.map((button, index) => (
        <Button3D key={index} {...button} />
      ))}
    </>
  );
};

const ThreeJSButtons = ({ router }) => {
  return (
    <div className="h-[600px] w-full">
      <Canvas>
        <Scene router={router} />
      </Canvas>
    </div>
  );
};

export default ThreeJSButtons;