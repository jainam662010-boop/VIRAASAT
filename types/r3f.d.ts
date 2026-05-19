import type * as THREE from 'three';
import type { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Three.js core objects
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      line: Object3DNode<THREE.Line, typeof THREE.Line>;
      points: Object3DNode<THREE.Points, typeof THREE.Points>;
      sprite: Object3DNode<THREE.Sprite, typeof THREE.Sprite>;
      lod: Object3DNode<THREE.LOD, typeof THREE.LOD>;

      // Geometries
      boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      circleGeometry: Object3DNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>;
      coneGeometry: Object3DNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>;
      cylinderGeometry: Object3DNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>;
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      planeGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      ringGeometry: Object3DNode<THREE.RingGeometry, typeof THREE.RingGeometry>;
      torusGeometry: Object3DNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
      torusKnotGeometry: Object3DNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>;
      dodecahedronGeometry: Object3DNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>;
      octahedronGeometry: Object3DNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>;
      tetrahedronGeometry: Object3DNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>;
      icosahedronGeometry: Object3DNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
      polyhedronGeometry: Object3DNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>;
      tubeGeometry: Object3DNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>;
      latheGeometry: Object3DNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>;
      extrudeGeometry: Object3DNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>;
      shapeGeometry: Object3DNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>;
      wireframeGeometry: Object3DNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>;
      edgesGeometry: Object3DNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>;
      bufferGeometry: Object3DNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;

      // Materials
      meshBasicMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      meshPhongMaterial: Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>;
      meshPhysicalMaterial: Object3DNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
      meshLambertMaterial: Object3DNode<THREE.MeshLambertMaterial, typeof THREE.MeshLambertMaterial>;
      meshToonMaterial: Object3DNode<THREE.MeshToonMaterial, typeof THREE.MeshToonMaterial>;
      meshNormalMaterial: Object3DNode<THREE.MeshNormalMaterial, typeof THREE.MeshNormalMaterial>;
      meshDepthMaterial: Object3DNode<THREE.MeshDepthMaterial, typeof THREE.MeshDepthMaterial>;
      meshDistanceMaterial: Object3DNode<THREE.MeshDistanceMaterial, typeof THREE.MeshDistanceMaterial>;
      meshMatcapMaterial: Object3DNode<THREE.MeshMatcapMaterial, typeof THREE.MeshMatcapMaterial>;
      lineBasicMaterial: Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;
      lineDashedMaterial: Object3DNode<THREE.LineDashedMaterial, typeof THREE.LineDashedMaterial>;
      pointsMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
      shaderMaterial: Object3DNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
      rawShaderMaterial: Object3DNode<THREE.RawShaderMaterial, typeof THREE.RawShaderMaterial>;
      shadowMaterial: Object3DNode<THREE.ShadowMaterial, typeof THREE.ShadowMaterial>;
      spriteMaterial: Object3DNode<THREE.SpriteMaterial, typeof THREE.SpriteMaterial>;

      // Lights
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
      hemisphereLight: Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>;
      rectAreaLight: Object3DNode<THREE.RectAreaLight, typeof THREE.RectAreaLight>;
      
      // React Three Fiber components
      primitive: Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      coneGeometry: Object3DNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>;
      cylinderGeometry: Object3DNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>;
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      pointsMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
      points: Object3DNode<THREE.Points, typeof THREE.Points>;
      Float: any;
      Environment: any;
      ContactShadows: any;
      OrbitControls: any;
      Canvas: any;
      Suspense: any;

      // Helpers
      axesHelper: Object3DNode<THREE.AxesHelper, typeof THREE.AxesHelper>;
      cameraHelper: Object3DNode<THREE.CameraHelper, typeof THREE.CameraHelper>;
      gridHelper: Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>;
      polarGridHelper: Object3DNode<THREE.PolarGridHelper, typeof THREE.PolarGridHelper>;

      // Misc
      bufferAttribute: Object3DNode<THREE.BufferAttribute, typeof THREE.BufferAttribute>;
      instancedBufferAttribute: Object3DNode<THREE.InstancedBufferAttribute, typeof THREE.InstancedBufferAttribute>;
      instancedMesh: Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;
      
      // Primitive
      primitive: Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
    }
  }
}

export {};