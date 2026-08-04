"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useReducedMotion";

const NODE_COUNT = 42;
const CONNECT_DIST = 2.4;
const BOUNDS = { x: 5.4, y: 3.2, z: 2.4 };
const MAX_EDGES = (NODE_COUNT * (NODE_COUNT - 1)) / 2;

interface MousePosition {
  x: number;
  y: number;
}

function NodeField({ mouseRef }: { mouseRef: React.MutableRefObject<MousePosition> }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const nodes = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, () => ({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * BOUNDS.x * 2,
          (Math.random() - 0.5) * BOUNDS.y * 2,
          (Math.random() - 0.5) * BOUNDS.z * 2
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.004
        ),
      })),
    []
  );

  const nodePositions = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
  const edgePositions = useMemo(() => new Float32Array(MAX_EDGES * 2 * 3), []);
  const edgeColors = useMemo(() => new Float32Array(MAX_EDGES * 2 * 3), []);

  const amber = useMemo(() => new THREE.Color("#D9A441"), []);
  const teal = useMemo(() => new THREE.Color("#4FB8AE"), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    for (const axis of ["x", "y", "z"] as const) {
      for (const node of nodes) {
        node.position[axis] += node.velocity[axis];
        if (Math.abs(node.position[axis]) > BOUNDS[axis]) {
          node.velocity[axis] *= -1;
        }
      }
    }

    nodes.forEach((node, i) => {
      nodePositions[i * 3] = node.position.x;
      nodePositions[i * 3 + 1] = node.position.y;
      nodePositions[i * 3 + 2] = node.position.z;
    });

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.array.set(nodePositions);
      attr.needsUpdate = true;
    }

    let edgeIndex = 0;
    for (let i = 0; i < NODE_COUNT && edgeIndex < MAX_EDGES; i++) {
      for (let j = i + 1; j < NODE_COUNT && edgeIndex < MAX_EDGES; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < CONNECT_DIST) {
          const strength = 1 - dist / CONNECT_DIST;
          const base = edgeIndex * 6;

          edgePositions[base] = nodes[i].position.x;
          edgePositions[base + 1] = nodes[i].position.y;
          edgePositions[base + 2] = nodes[i].position.z;
          edgePositions[base + 3] = nodes[j].position.x;
          edgePositions[base + 4] = nodes[j].position.y;
          edgePositions[base + 5] = nodes[j].position.z;

          tmpColor.copy(amber).lerp(teal, 0.5).multiplyScalar(strength * 0.6);
          edgeColors[base] = tmpColor.r;
          edgeColors[base + 1] = tmpColor.g;
          edgeColors[base + 2] = tmpColor.b;
          edgeColors[base + 3] = tmpColor.r;
          edgeColors[base + 4] = tmpColor.g;
          edgeColors[base + 5] = tmpColor.b;

          edgeIndex++;
        }
      }
    }

    if (linesRef.current) {
      const posAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const colorAttr = linesRef.current.geometry.attributes.color as THREE.BufferAttribute;
      posAttr.array.set(edgePositions);
      colorAttr.array.set(edgeColors);
      posAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, edgeIndex * 2);
    }

    if (groupRef.current) {
      const targetY = mouseRef.current.x * 0.18;
      const targetX = -mouseRef.current.y * 0.12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.02);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.02);
    }

    void state;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#8B8F94"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.55}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_EDGES * 2}
            array={edgePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={MAX_EDGES * 2}
            array={edgeColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
}

export default function NodeNetwork({ className = "" }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const reducedMotion = useReducedMotion();
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const handleMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile, reducedMotion]);

  if (isMobile || reducedMotion) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <NodeField mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
