import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
          emissive="#00f2ff"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

function Grid() {
  return (
    <gridHelper
      args={[100, 50, 0x00f2ff, 0x01131a]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null!);

  const dummy = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
       temp[i * 3] = (Math.random() - 0.5) * 50;
       temp[i * 3 + 1] = (Math.random() - 0.5) * 50;
       temp[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={dummy}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f2ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 10, 50]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ea" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f2ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Particles count={2000} />
        <AnimatedSphere />
        <Grid />
      </Canvas>
    </div>
  );
}
