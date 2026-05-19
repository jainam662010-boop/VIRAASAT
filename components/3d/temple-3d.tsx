"use client";

import { useRef, useEffect, useState, Suspense, lazy } from "react";
import * as THREE from "three";

// Import Three.js components
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

// Enhanced Temple Model with better geometry
function TempleModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!groupRef.current) return;
    
    let animationId: number;
    const startTime = Date.now();
    
    const animate = () => {
      if (groupRef.current) {
        const time = (Date.now() - startTime) * 0.001;
        
        // Subtle cinematic rotation
        groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
        
        // Gentle floating motion
        groupRef.current.position.y = Math.sin(time * 0.3) * 0.1;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Create temple group
  const templeGroup = new THREE.Group();
  
  // Main temple structure (gopuram)
  const templeGeometry = new THREE.ConeGeometry(2, 6, 8);
  const templeMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xd4af37,
    emissive: 0xd4af37,
    emissiveIntensity: 0.15,
    shininess: 100,
    specular: 0x222222
  });
  const temple = new THREE.Mesh(templeGeometry, templeMaterial);
  temple.position.y = 3;
  temple.castShadow = true;
  temple.receiveShadow = true;
  templeGroup.add(temple);

  // Temple base
  const baseGeometry = new THREE.BoxGeometry(4, 1, 4);
  const baseMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x8b7355,
    shininess: 50,
    specular: 0x111111
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = -0.5;
  base.castShadow = true;
  base.receiveShadow = true;
  templeGroup.add(base);

  // Decorative elements around base
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 2.5;
    
    // Pillars
    const pillarGeometry = new THREE.CylinderGeometry(0.1, 0.15, 2, 8);
    const pillarMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xd4af37,
      emissive: 0xd4af37,
      emissiveIntensity: 0.1
    });
    const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
    pillar.position.set(
      Math.cos(angle) * radius,
      0.5,
      Math.sin(angle) * radius
    );
    pillar.castShadow = true;
    templeGroup.add(pillar);
    
    // Decorative spheres
    const sphereGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffd700,
      emissive: 0xffd700,
      emissiveIntensity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(
      Math.cos(angle) * radius,
      2,
      Math.sin(angle) * radius
    );
    templeGroup.add(sphere);
  }

  // Temple crown (kalash)
  const crownGeometry = new THREE.SphereGeometry(0.3, 8, 8);
  const crownMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xffd700,
    emissive: 0xffd700,
    emissiveIntensity: 0.4
  });
  const crown = new THREE.Mesh(crownGeometry, crownMaterial);
  crown.position.y = 6.5;
  templeGroup.add(crown);

  return <group ref={groupRef}>{templeGroup.children.map((child, index) => 
    <primitive key={index} object={child} />
  )}</group>;
}

// Enhanced Lighting Setup
function SceneLighting() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.4} color="#f2ca50" />
      
      {/* Main key light from above */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={1.5}
        color="#f2ca50"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Fill light from side */}
      <directionalLight
        position={[-10, 8, -10]}
        intensity={0.6}
        color="#8b7355"
      />
      
      {/* Rim light for definition */}
      <pointLight
        position={[0, 20, 0]}
        intensity={1.0}
        color="#ff9933"
        distance={30}
        decay={2}
      />
      
      {/* Back light */}
      <pointLight
        position={[0, 5, -15]}
        intensity={0.5}
        color="#d4af37"
        distance={20}
      />
    </>
  );
}

// Main 3D Scene Component
function TempleScene() {
  return (
    <>
      <SceneLighting />
      <TempleModel />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={8}
        maxDistance={25}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI * 0.85}
        minPolarAngle={Math.PI * 0.15}
        enableDamping={true}
        dampingFactor={0.05}
      />
      <PerspectiveCamera 
        makeDefault 
        position={[0, 5, 15]} 
        fov={45} 
      />
      {/* Atmospheric background */}
      <color attach="background" args={["#0a0a0a"]} />
    </>
  );
}

// Loading Component
function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-temple-gold/30 border-t-temple-gold rounded-full animate-spin" />
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-temple-gold/20 rounded-full animate-spin animation-delay-150" />
      </div>
      <p className="text-caption font-mono text-ivory-cream/60 mt-6">
        Loading Sacred Architecture
      </p>
      <p className="text-xs font-mono text-ivory-cream/40 mt-2">
        Preparing 3D Temple Experience
      </p>
    </div>
  );
}

// Error Boundary Component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-temple-gold/20 to-stone-charcoal/40 rounded-lg flex items-center justify-center">
          <span className="text-3xl">🏛️</span>
        </div>
        <h3 className="text-xl font-display text-temple-gold mb-3">
          3D Experience Unavailable
        </h3>
        <p className="text-body text-ivory-cream/80 mb-4">
          We're having trouble loading the 3D temple model. 
          This might be due to your browser or device capabilities.
        </p>
        <div className="glass-panel-dark p-4 text-left">
          <p className="text-caption font-mono text-ivory-cream/60 mb-2">
            Error Details:
          </p>
          <p className="text-xs text-ivory-cream/40">
            {error.message || "Unknown error occurred"}
          </p>
        </div>
        <p className="text-body text-ivory-cream/70 mt-4">
          Please enjoy the rest of our museum experience
        </p>
      </div>
    </div>
  );
}

// Main Export Component
export function Temple3D() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Comprehensive capability checking
    const checkCapabilities = () => {
      try {
        // WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || 
                    canvas.getContext('webgl') || 
                    canvas.getContext('experimental-webgl');
        setIsWebGLSupported(!!gl);
        
        // Reduced motion preference
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setIsReducedMotion(prefersReduced);
        
        // Simulate loading
        setTimeout(() => setIsLoaded(true), 1500);
        
      } catch (e) {
        setHasError(true);
        setError(e instanceof Error ? e : new Error('Capability check failed'));
      }
    };

    checkCapabilities();
  }, []);

  // Show fallback for unsupported scenarios
  if (hasError) {
    return <ErrorFallback error={error || new Error('Unknown error')} />;
  }

  if (!isWebGLSupported || isReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-temple-gold to-stone-charcoal rounded-lg flex items-center justify-center">
            <span className="text-4xl">🏛️</span>
          </div>
          <h3 className="text-2xl font-display text-temple-gold mb-3">
            South Indian Temple Architecture
          </h3>
          <p className="text-body text-ivory-cream/90 mb-4">
            Experience the grandeur of Dravidian temple architecture with towering gopurams, 
            intricate stone carvings, and sacred geometry that defines South Indian spiritual spaces.
          </p>
          <div className="space-y-3 text-left glass-panel-dark p-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-temple-gold rounded-full" />
              <span className="text-body text-ivory-cream/80">
                Monumental gopuram gateways reaching toward heavens
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-temple-gold rounded-full" />
              <span className="text-body text-ivory-cream/80">
                Intricate stone carvings depicting divine stories
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-temple-gold rounded-full" />
              <span className="text-body text-ivory-cream/80">
                Sacred geometry and mathematical precision
              </span>
            </div>
          </div>
          <p className="text-caption font-mono text-ivory-cream/60 mt-4">
            {isReducedMotion ? "3D animation disabled for accessibility" : "WebGL not supported on this device"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <LoadingFallback />
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            shadows
            camera={{ position: [0, 5, 15], fov: 45 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
              preserveDrawingBuffer: false,
              logarithmicDepthBuffer: true
            }}
            className="w-full h-full"
            onCreated={() => console.log('Canvas created successfully')}
            onError={(error) => {
              setHasError(true);
              setError(error instanceof Error ? error : new Error('Canvas creation failed'));
            }}
          >
            <TempleScene />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}
