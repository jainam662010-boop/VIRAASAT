"use client";

import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useFBX,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { TEMPLE_MODEL_URL } from "@/lib/temple-assets";
import { usePrefersReducedMotion, useWebGLSupported } from "@/lib/client-env";

function isMesh(o: THREE.Object3D): o is THREE.Mesh {
  return (o as THREE.Mesh).isMesh === true;
}

function configureShadows(root: THREE.Group) {
  root.traverse((child) => {
    if (!isMesh(child)) return;
    child.castShadow = true;
    child.receiveShadow = true;
    const mats = child.material;
    const list = Array.isArray(mats) ? mats : [mats];
    for (const m of list) {
      if (m && "envMapIntensity" in m) {
        (m as THREE.MeshStandardMaterial).envMapIntensity = 0.85;
      }
    }
  });
}

function fitAndCenterModel(root: THREE.Group, targetSize = 6) {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z, 1e-6);
  const s = targetSize / maxDim;
  root.scale.setScalar(s);
  box.setFromObject(root);
  const center = box.getCenter(new THREE.Vector3());
  root.position.sub(center);
  root.position.y -= 0.15;
}

function FbxTemple({ onReady }: { onReady?: () => void }) {
  const fbx = useFBX(TEMPLE_MODEL_URL);

  useLayoutEffect(() => {
    configureShadows(fbx);
    fitAndCenterModel(fbx, 6.5);
    onReady?.();
  }, [fbx, onReady]);

  return <primitive object={fbx} />;
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function DustParticles({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const rnd = mulberry32(0x9e3779b9);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rnd() - 0.5) * 24;
      arr[i * 3 + 1] = rnd() * 10;
      arr[i * 3 + 2] = (rnd() - 0.5) * 24;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.018;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#e8dcc4"
        transparent
        opacity={0.28}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function HeroCameraRig({
  scrollRef,
  mouseRef,
}: {
  scrollRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  const tmp = useMemo(() => new THREE.Vector3(), []);

  /* eslint-disable react-hooks/immutability -- Three.js camera rig */
  useFrame(() => {
    const s = THREE.MathUtils.clamp(scrollRef.current, 0, 1);
    const m = mouseRef.current;
    const targetZ = THREE.MathUtils.lerp(15, 8.5, s);
    const targetY = THREE.MathUtils.lerp(2.1, 3.6, s);
    const targetX = m.x * 0.55;

    camera.position.x += (targetX - camera.position.x) * 0.045;
    tmp.set(camera.position.x, targetY, targetZ);
    camera.position.lerp(tmp, 0.06);
    camera.lookAt(0, 2.15, 0);
  });
  /* eslint-enable react-hooks/immutability */

  return null;
}

function SceneContent({
  mode,
  scrollRef,
  mouseRef,
  onReady,
}: {
  mode: "hero" | "orbital";
  scrollRef?: React.MutableRefObject<number>;
  mouseRef?: React.MutableRefObject<{ x: number; y: number }>;
  onReady?: () => void;
}) {
  const rigRef = useRef<THREE.Group>(null);
  const readyOnce = useRef(false);

  useFrame((_, delta) => {
    if (rigRef.current) {
      rigRef.current.rotation.y += delta * (mode === "hero" ? 0.06 : 0.04);
      const bob = Math.sin(performance.now() * 0.00035) * 0.04;
      rigRef.current.position.y = bob;
    }
  });

  const handleReady = () => {
    if (readyOnce.current) return;
    readyOnce.current = true;
    onReady?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("temple-loaded"));
    }
  };

  return (
    <>
      <color attach="background" args={["#080706"]} />
      <fogExp2 attach="fog" args={["#0c0a08", 0.045]} />
      <PerspectiveCamera makeDefault position={[0, 2.2, 15]} fov={42} near={0.1} far={200} />

      <ambientLight intensity={0.35} color="#f2e6c9" />
      <directionalLight
        position={[10, 18, 12]}
        intensity={1.35}
        color="#ffe6b0"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00025}
        shadow-camera-near={1}
        shadow-camera-far={80}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <directionalLight position={[-12, 8, -10]} intensity={0.35} color="#6a5a4a" />
      <spotLight
        position={[0, 22, 2]}
        angle={0.45}
        penumbra={0.85}
        intensity={0.9}
        color="#ffd59a"
        castShadow={false}
      />

      <Environment preset="night" background={false} />

      <group ref={rigRef}>
        <FbxTemple onReady={handleReady} />
        <DustParticles count={mode === "hero" ? 420 : 260} />
      </group>

      <ContactShadows
        position={[0, -1.65, 0]}
        opacity={0.55}
        scale={22}
        blur={2.4}
        far={9}
        color="#1a1410"
      />

      {mode === "hero" && scrollRef && mouseRef ? (
        <HeroCameraRig scrollRef={scrollRef} mouseRef={mouseRef} />
      ) : null}

      {mode === "orbital" ? (
        <OrbitControls
          enablePan={false}
          minDistance={7}
          maxDistance={22}
          autoRotate
          autoRotateSpeed={0.35}
          maxPolarAngle={Math.PI * 0.52}
          minPolarAngle={Math.PI * 0.18}
          enableDamping
          dampingFactor={0.06}
          target={[0, 2.1, 0]}
        />
      ) : null}

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.22} intensity={0.72} mipmapBlur radius={0.55} levels={7} />
        <Vignette eskil={false} offset={0.12} darkness={0.42} />
      </EffectComposer>
    </>
  );
}

function CanvasFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center bg-gradient-to-b from-museum-black via-stone-charcoal to-temple-shadow px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-ivory-cream/50">{label}</p>
    </div>
  );
}

export type TempleStageProps = {
  mode: "hero" | "orbital";
  className?: string;
  scrollRef?: React.MutableRefObject<number>;
  mouseRef?: React.MutableRefObject<{ x: number; y: number }>;
  onReady?: () => void;
};

export function TempleStage({ mode, className, scrollRef, mouseRef, onReady }: TempleStageProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const webglSupported = useWebGLSupported();

  if (!webglSupported || prefersReducedMotion) {
    return (
      <CanvasFallback
        label={
          prefersReducedMotion
            ? "Immersive 3D paused (reduced motion)"
            : "WebGL unavailable — static presentation"
        }
      />
    );
  }

  return (
    <div className={className ?? "h-full w-full min-h-[320px]"}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Suspense fallback={null}>
          <SceneContent
            mode={mode}
            scrollRef={mode === "hero" ? scrollRef : undefined}
            mouseRef={mode === "hero" ? mouseRef : undefined}
            onReady={onReady}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
