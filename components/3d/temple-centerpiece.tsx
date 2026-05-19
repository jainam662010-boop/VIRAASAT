"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Temple geometry component
function TempleModel({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (groupRef.current) {
        const time = Date.now() * 0.001;
        // Subtle cinematic rotation
        groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
        // Gentle floating motion
        groupRef.current.position.y = position[1] + Math.sin(time * 0.3) * 0.1;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [position]);

  // Create temple geometry procedurally
  const geometry = new THREE.Group();
  
  // Main tower (gopuram)
  const towerGeometry = new THREE.ConeGeometry(1.5, 4, 8);
  const towerMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xd4af37,
    emissive: 0xd4af37,
    emissiveIntensity: 0.1,
    shininess: 100
  });
  const tower = new THREE.Mesh(towerGeometry, towerMaterial);
  tower.position.y = 2;
  geometry.add(tower);

  // Base structure
  const baseGeometry = new THREE.BoxGeometry(3, 1, 3);
  const baseMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x8b7355,
    shininess: 50
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = -0.5;
  geometry.add(base);

  // Decorative elements
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const decorGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const decorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffd700,
      emissive: 0xffd700,
      emissiveIntensity: 0.2
    });
    const decor = new THREE.Mesh(decorGeometry, decorMaterial);
    decor.position.set(
      Math.cos(angle) * 1.8,
      1,
      Math.sin(angle) * 1.8
    );
    geometry.add(decor);
  }

  return (
    <primitive 
      ref={groupRef}
      object={geometry} 
      position={position} 
      scale={scale}
    />
  );
}

// Lighting setup
function TempleLighting() {
  return (
    <>
      {/* Ambient lighting for atmosphere */}
      <ambientLight intensity={0.3} color="#f2ca50" />
      
      {/* Main key light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        color="#f2ca50"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Fill light */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.5}
        color="#8b7355"
      />
      
      {/* Rim light for definition */}
      <pointLight
        position={[0, 15, 0]}
        intensity={0.8}
        color="#ff9933"
        distance={20}
      />
      
      {/* Atmospheric fog */}
      <fog attach="fog" args={["#1a1a1a", 5, 15]} />
    </>
  );
}

// Main 3D Scene
function TempleScene() {
  return (
    <>
      <TempleLighting />
      <TempleModel position={[0, 0, 0]} scale={1.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
      <PerspectiveCamera makeDefault position={[0, 2, 8]} />
    </>
  );
}

// Loading component
function TempleLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-temple-gold border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-caption font-mono text-ivory-cream/60">
        Loading Sacred Architecture
      </p>
    </div>
  );
}

// Main export component
export function TempleCenterpiece() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setIsWebGLSupported(!!gl);
      } catch (e) {
        setIsWebGLSupported(false);
      }
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReduced);
    };

    checkWebGL();
    checkReducedMotion();

    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show fallback if WebGL not supported or reduced motion preferred
  if (!isWebGLSupported || isReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-temple-gold to-stone-charcoal rounded-lg" />
          <p className="text-body text-ivory-cream/80 mb-2">
            South Indian Temple Architecture
          </p>
          <p className="text-caption font-mono text-ivory-cream/60">
            Interactive 3D Experience
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <TempleLoader />
      ) : (
        <Canvas
          shadows
          camera={{ position: [0, 2, 8], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <TempleScene />
            <Environment preset="sunset" background={false} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
