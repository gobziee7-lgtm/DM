import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Sparkles, Layers, RotateCcw, Eye, ChevronDown, ChevronUp, X, Info } from 'lucide-react';

export type ModelType = 'crown-die' | 'dental-implant' | 'cavity-sandwich' | 'flame-zones' | 'gillmore-needle';

interface ThreeSceneProps {
  initialModel?: ModelType;
  onClose?: () => void;
}

interface ModelMeta {
  id: ModelType;
  title: string;
  badge: string;
  category: string;
  description: string;
  parts: { name: string; color: string; desc: string }[];
}

export const MODELS_METADATA: Record<ModelType, ModelMeta> = {
  'crown-die': {
    id: 'crown-die',
    title: 'Dental Crown, Cement & Prepared Die',
    badge: 'Restorative & Lab',
    category: 'Casting & Prosthetics',
    description: 'Anatomical model demonstrating a prepared tooth die, the 20–25 µm luting cement film, and a multi-layer ceramic-metal crown. Use the exploded slider to inspect the marginal seating.',
    parts: [
      { name: 'Prepared Die Core', color: '#F3E5AB', desc: 'Type IV high-strength die stone with 90° chamfer finish line' },
      { name: 'Luting Cement Film', color: '#FCE7F3', desc: '≤ 25 µm thin film (Zinc Phosphate / GIC / Resin cement)' },
      { name: 'Alloy Substructure', color: '#D4AF37', desc: 'Cast gold or Co-Cr metal coping with microscopic oxide layer' },
      { name: 'Aesthetic Porcelain Crown', color: '#FFF5F8', desc: 'Sintered feldspathic / lithium disilicate ceramic with natural enamel glaze' }
    ]
  },
  'dental-implant': {
    id: 'dental-implant',
    title: 'Titanium Dental Implant System',
    badge: 'Surgical & Biomaterials',
    category: 'Dental Implants',
    description: 'Complete 5-component endosseous implant demonstrating osseointegration into alveolar bone, cpTi micro-threaded fixture, abutment, and crown.',
    parts: [
      { name: 'Trabecular Bone Bed', color: '#E8D4B8', desc: 'Mandibular cortical/trabecular living bone' },
      { name: 'Implant Fixture (cpTi)', color: '#8A95A5', desc: 'Grade 4 pure titanium with SLA micro-textured surface' },
      { name: 'Internal Hex Connector', color: '#64748B', desc: 'Precision anti-rotational Morse taper connection' },
      { name: 'Titanium Abutment', color: '#CBD5E1', desc: 'Transmucosal abutment collar supporting restoration' },
      { name: 'Abutment Retaining Screw', color: '#F59E0B', desc: 'High-torque gold-coated alloy fixation screw' },
      { name: 'Prosthetic Ceramic Crown', color: '#FFFFFF', desc: 'Zirconia/Lithium disilicate crown with screw access channel' }
    ]
  },
  'cavity-sandwich': {
    id: 'cavity-sandwich',
    title: 'Sandwich Technique Cavity Restoration',
    badge: 'Operative Dentistry',
    category: 'Cements & Composites',
    description: 'Bi-layered restoration combining the dentin-sealing chemical adhesion & fluoride release of GIC base with the high polish and wear-resistance of composite resin.',
    parts: [
      { name: 'Molar Tooth Prep', color: '#F8E8D0', desc: 'Class I/II cavity preparation with 90° butt-joint cavosurface margin' },
      { name: 'Ca(OH)2 / Pulp Liner', color: '#EF4444', desc: 'Protective 0.5 mm alkaline sub-liner over near-pulp dentin' },
      { name: 'GIC / RMGIC Base', color: '#FDE047', desc: 'Dentin replacement base providing thermal insulation & fluoride release' },
      { name: 'Hybrid Layer & Resin Tags', color: '#F472B6', desc: 'Micromechanical bonding zone with 10–30 µm tags' },
      { name: 'Composite Enamel Cap', color: '#FFFFFF', desc: 'Incrementally light-cured hybrid/nanocomposite aesthetic layer' }
    ]
  },
  'flame-zones': {
    id: 'flame-zones',
    title: 'Blowtorch Flame Zones for Casting',
    badge: 'Dental Metallurgy',
    category: 'Casting & Soldering',
    description: 'The 4 distinct thermal zones of a blowtorch flame used in gold & base metal casting. Zone C (Reducing Zone) is the hottest and must always be used for alloy melting.',
    parts: [
      { name: 'Blowtorch Nozzle', color: '#475569', desc: 'Gas-air or gas-oxygen mixing torch tip' },
      { name: 'Zone A: Mixing Zone', color: '#1E293B', desc: 'Innermost dark unburned cold fuel-air gas mixture' },
      { name: 'Zone B: Combustion Zone', color: '#10B981', desc: 'Greenish partial-combustion oxidizing cone' },
      { name: 'Zone C: Reducing Zone', color: '#38BDF8', desc: 'Bright blue hottest zone (1300–1600°C) — MUST BE USED TO MELT ALLOY' },
      { name: 'Zone D: Oxidizing Zone', color: '#818CF8', desc: 'Outermost cool oxidizing sheath — NEVER USE (causes slag & porosity)' },
      { name: 'Crucible & Alloy Ingot', color: '#EAB308', desc: 'Refractory melting crucible with molten casting alloy button' }
    ]
  },
  'gillmore-needle': {
    id: 'gillmore-needle',
    title: 'Gillmore Needle Setting Apparatus',
    badge: 'Materials Testing',
    category: 'Gypsum & Cements',
    description: 'Classical ADA Spec double-needle instrument used to determine initial setting time (1/4 lb, 1/12" tip) and final setting time (1 lb, 1/24" tip) of dental stones and cements.',
    parts: [
      { name: 'Cast Base & Pillar Stand', color: '#334155', desc: 'Heavy stable laboratory pedestal' },
      { name: 'Horizontal Cross-Arm', color: '#64748B', desc: 'Precision dual-bearing guide crossbar' },
      { name: 'Initial Needle (1/4 lb)', color: '#EC4899', desc: '113.4 g weight with 2.12 mm cylindrical tip' },
      { name: 'Final Needle (1 lb)', color: '#A855F7', desc: '453.6 g weight with 1.06 mm cylindrical tip' },
      { name: 'Gypsum Test Specimens', color: '#F1F5F9', desc: 'Smooth setting gypsum patties indented by needles' }
    ]
  }
};

export const ThreeScene: React.FC<ThreeSceneProps> = ({ initialModel = 'crown-die', onClose }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentModel, setCurrentModel] = useState<ModelType>(initialModel);
  const [explodedVal, setExplodedVal] = useState<number>(0.3);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState<boolean>(false);
  const [activePartHighlight, setActivePartHighlight] = useState<string | null>(null);

  // References to dynamic Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const explodedPartsRef = useRef<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>([]);
  const animFrameIdRef = useRef<number>(0);

  // Switch initialModel when prop changes
  useEffect(() => {
    setCurrentModel(initialModel);
  }, [initialModel]);

  // Set up Three.js Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect Software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xfff0f6);
    scene.fog = new THREE.Fog(0xfff0f6, 12, 35);

    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(5.5, 4.2, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    rendererRef.current = renderer;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Environment Lighting (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio Lighting Rig
    const warmKeyLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    warmKeyLight.position.set(6, 10, 6);
    warmKeyLight.castShadow = !isSoftwareGl;
    if (warmKeyLight.shadow) {
      warmKeyLight.shadow.mapSize.width = 1024;
      warmKeyLight.shadow.mapSize.height = 1024;
      warmKeyLight.shadow.bias = -0.0005;
      warmKeyLight.shadow.normalBias = 0.02;
    }
    scene.add(warmKeyLight);

    const coolFillLight = new THREE.HemisphereLight(0xffe4f0, 0xdccbff, 1.4);
    scene.add(coolFillLight);

    const pinkRimLight = new THREE.DirectionalLight(0xff4fa3, 1.6);
    pinkRimLight.position.set(-6, 4, -6);
    scene.add(pinkRimLight);

    // Damped OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // allow slightly below horizontal
    controls.minDistance = 2.5;
    controls.maxDistance = 16;
    controls.target.set(0, 1.2, 0);
    controls.update();

    // Contact Shadow Ground Plane
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.01;
    groundMesh.receiveShadow = !isSoftwareGl;
    scene.add(groundMesh);

    // Soft radial contact shadow under subject
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, 'rgba(112, 32, 79, 0.45)');
      grad.addColorStop(0.5, 'rgba(255, 79, 163, 0.15)');
      grad.addColorStop(1, 'rgba(255, 240, 246, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.005;
    scene.add(shadowPlane);

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let lastTime = performance.now();
    const tick = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (autoRotate && modelGroupRef.current) {
        modelGroupRef.current.rotation.y = (modelGroupRef.current.rotation.y + dt * 0.35) % (Math.PI * 2);
      }

      controls.update();
      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(tick);
    };
    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Build Procedural 3D Model whenever `currentModel` changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (modelGroupRef.current) {
      scene.remove(modelGroupRef.current);
      // Clean up geometries and materials
      modelGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    const group = new THREE.Group();
    group.position.set(0, 0, 0);
    modelGroupRef.current = group;
    explodedPartsRef.current = [];

    // Construct specific procedural model with 3–12 parts
    if (currentModel === 'crown-die') {
      buildCrownDieModel(group, explodedPartsRef);
    } else if (currentModel === 'dental-implant') {
      buildImplantModel(group, explodedPartsRef);
    } else if (currentModel === 'cavity-sandwich') {
      buildCavitySandwichModel(group, explodedPartsRef);
    } else if (currentModel === 'flame-zones') {
      buildFlameZonesModel(group, explodedPartsRef);
    } else if (currentModel === 'gillmore-needle') {
      buildGillmoreNeedleModel(group, explodedPartsRef);
    }

    scene.add(group);
    applyExplodedFactor(explodedVal);
  }, [currentModel]);

  // Apply exploded view slider factor
  const applyExplodedFactor = (factor: number) => {
    explodedPartsRef.current.forEach(({ obj, basePos, offsetDir }) => {
      obj.position.copy(basePos).addScaledVector(offsetDir, factor * 2.5);
    });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setExplodedVal(val);
    applyExplodedFactor(val);
  };

  const resetCamera = () => {
    if (!controlsRef.current) return;
    controlsRef.current.reset();
    controlsRef.current.target.set(0, 1.2, 0);
    if (modelGroupRef.current) modelGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className="relative w-full h-full min-h-[540px] md:min-h-[620px] rounded-3xl overflow-hidden border-2 border-[#FFD6E8] bg-[#FFF0F6] shadow-xl">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Top Header Badge & Close Button */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#FFD6E8] shadow-md flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF4FA3] to-[#FF8DC7] text-white flex items-center justify-center font-bold text-sm shadow-sm">
            3D
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-['Fredoka'] font-semibold text-[#4B244A] text-sm md:text-base leading-tight">
                {MODELS_METADATA[currentModel].title}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFF0F6] text-[#FF1493] border border-[#FFD6E8]">
                {MODELS_METADATA[currentModel].badge}
              </span>
            </div>
            <p className="text-xs text-[#70204F]/80 hidden md:block">
              {MODELS_METADATA[currentModel].category} • Interactive Dental Materials Explainer
            </p>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-2xl bg-white/90 hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] flex items-center justify-center transition-all shadow-md active:scale-95"
              title="Close 3D View"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Model Selector Bar (Top Right Below Close or Floating Center) */}
      <div className="absolute top-16 left-4 right-4 flex items-center gap-2 overflow-x-auto pb-2 z-10 pointer-events-auto scrollbar-none">
        {(Object.keys(MODELS_METADATA) as ModelType[]).map((key) => {
          const meta = MODELS_METADATA[key];
          const isActive = currentModel === key;
          return (
            <button
              key={key}
              onClick={() => {
                setCurrentModel(key);
                setActivePartHighlight(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm border ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF4FA3] to-[#FF1493] text-white border-transparent shadow-[#FF4FA3]/30 scale-105'
                  : 'bg-white/85 text-[#70204F] border-[#FFD6E8] hover:bg-[#FFF0F6]'
              }`}
            >
              {meta.title.split(',')[0]}
            </button>
          );
        })}
      </div>

      {/* Part Inspection Floating Card (Left side, minimal) */}
      <div className="absolute left-4 bottom-24 max-w-xs hidden lg:block z-10 pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#FFD6E8] shadow-lg text-xs">
          <div className="flex items-center gap-1.5 font-bold text-[#4B244A] mb-2 font-['Fredoka']">
            <Info className="w-3.5 h-3.5 text-[#FF1493]" />
            <span>Structural Components:</span>
          </div>
          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
            {MODELS_METADATA[currentModel].parts.map((p, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePartHighlight(p.name)}
                onMouseLeave={() => setActivePartHighlight(null)}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  activePartHighlight === p.name
                    ? 'bg-[#FFD6E8] border-[#FF4FA3]'
                    : 'bg-[#FFF9F2]/70 border-[#FFD6E8]/60 hover:bg-[#FFF0F6]'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-[#70204F]">
                  <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: p.color }} />
                  <span>{p.name}</span>
                </div>
                <div className="text-[11px] text-[#70204F]/75 mt-0.5 leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collapsible Unified Bottom Control Dock */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] transition-all duration-300 z-20 pointer-events-auto ${
          isControlsCollapsed ? 'translate-y-[calc(100%-24px)]' : 'translate-y-0'
        }`}
      >
        {/* Toggle Button on Top Edge */}
        <div className="flex justify-center -mb-2 relative z-30">
          <button
            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
            className="px-3 py-1 bg-white hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] rounded-full text-xs font-bold shadow-md flex items-center gap-1 transition-all"
          >
            {isControlsCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[#FF1493]" />
                <span>Show Controls 🎀</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-[#FF1493]" />
                <span>Hide Controls</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Body */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#FFD6E8] p-3 shadow-xl flex flex-wrap items-center justify-between gap-3">
          {/* Exploded View Slider */}
          <div className="flex items-center gap-3 flex-1 min-w-[220px]">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4B244A] whitespace-nowrap">
              <Layers className="w-4 h-4 text-[#FF1493]" />
              <span>Exploded View:</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explodedVal}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[#FFD6E8] rounded-lg appearance-none cursor-pointer accent-[#FF1493]"
            />
            <span className="text-xs font-mono font-bold text-[#FF1493] w-9 text-right">
              {Math.round(explodedVal * 100)}%
            </span>
          </div>

          {/* Controls Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                autoRotate
                  ? 'bg-[#FFD6E8] text-[#70204F] border-[#FF4FA3]'
                  : 'bg-white text-gray-500 border-[#FFD6E8] hover:bg-[#FFF0F6]'
              }`}
              title="Toggle Auto Rotation"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${autoRotate ? 'text-[#FF1493]' : ''}`} />
              <span className="hidden sm:inline">Rotate</span>
            </button>

            <button
              onClick={resetCamera}
              className="px-2.5 py-1.5 bg-white hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Reset View"
            >
              <Eye className="w-3.5 h-3.5 text-[#FF1493]" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// PROCEDURAL 3D MODELS BUILDERS (Composite 3-12 parts with PBR materials)
// =========================================================================

function buildCrownDieModel(
  group: THREE.Group,
  explodedPartsRef: React.MutableRefObject<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>
) {
  // Part 1: Die Base Pedestal (Type IV Stone cylinder)
  const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.8, 32);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0xdeb887,
    roughness: 0.65,
    metalness: 0.05
  });
  const dieBase = new THREE.Mesh(baseGeo, baseMat);
  dieBase.position.y = 0.4;
  dieBase.castShadow = true;
  dieBase.receiveShadow = true;
  group.add(dieBase);

  // Part 2: Prepared Tooth Stump / Die Abutment with 90° Chamfer Margin
  const stumpGeo = new THREE.CylinderGeometry(0.7, 0.95, 1.2, 32);
  const stumpMat = new THREE.MeshStandardMaterial({
    color: 0xf5deb3,
    roughness: 0.45,
    metalness: 0.05
  });
  const stumpMesh = new THREE.Mesh(stumpGeo, stumpMat);
  stumpMesh.position.y = 1.4;
  stumpMesh.castShadow = true;
  group.add(stumpMesh);

  // Part 3: Chamfer Margin Collar
  const marginGeo = new THREE.TorusGeometry(0.96, 0.08, 16, 32);
  const marginMat = new THREE.MeshStandardMaterial({ color: 0xe5c391, roughness: 0.4 });
  const marginMesh = new THREE.Mesh(marginGeo, marginMat);
  marginMesh.rotation.x = Math.PI / 2;
  marginMesh.position.y = 0.82;
  group.add(marginMesh);

  // Part 4: Cement Film Layer (microscopic luting space, expanded in exploded view)
  const cementGeo = new THREE.CylinderGeometry(0.72, 0.97, 1.18, 32);
  const cementMat = new THREE.MeshStandardMaterial({
    color: 0xffe4f0,
    roughness: 0.3,
    metalness: 0.1,
    transparent: true,
    opacity: 0.75
  });
  const cementMesh = new THREE.Mesh(cementGeo, cementMat);
  cementMesh.position.y = 1.42;
  group.add(cementMesh);
  explodedPartsRef.current.push({
    obj: cementMesh,
    basePos: cementMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 0.6, 0)
  });

  // Part 5: Metal Coping Substructure (Noble Gold / Co-Cr alloy layer)
  const metalCopingGeo = new THREE.CylinderGeometry(0.76, 1.01, 1.2, 32);
  const metalCopingMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Rich Gold alloy
    metalness: 0.85,
    roughness: 0.25
  });
  const metalCoping = new THREE.Mesh(metalCopingGeo, metalCopingMat);
  metalCoping.position.y = 1.44;
  group.add(metalCoping);
  explodedPartsRef.current.push({
    obj: metalCoping,
    basePos: metalCoping.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.2, 0)
  });

  // Part 6: Opaque Ceramic Layer
  const opaqueGeo = new THREE.CylinderGeometry(0.78, 1.03, 1.22, 32);
  const opaqueMat = new THREE.MeshStandardMaterial({
    color: 0xfff0f5,
    roughness: 0.5,
    metalness: 0.05
  });
  const opaqueMesh = new THREE.Mesh(opaqueGeo, opaqueMat);
  opaqueMesh.position.y = 1.46;
  group.add(opaqueMesh);
  explodedPartsRef.current.push({
    obj: opaqueMesh,
    basePos: opaqueMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.7, 0)
  });

  // Part 7: Aesthetic Ceramic Enamel Crown Anatomy (Upper Cusp & Outer Enamel)
  const crownGroup = new THREE.Group();
  crownGroup.position.y = 1.5;

  const crownBodyGeo = new THREE.CylinderGeometry(0.85, 1.08, 1.25, 32);
  const crownEnamelMat = new THREE.MeshPhysicalMaterial({
    color: 0xfffcf7,
    roughness: 0.15,
    metalness: 0.05,
    clearcoat: 0.9,
    clearcoatRoughness: 0.1,
    transmission: 0.15
  });
  const crownBody = new THREE.Mesh(crownBodyGeo, crownEnamelMat);
  crownGroup.add(crownBody);

  // 4 Anatomical Molar Cusps on Crown Top
  const cuspGeo = new THREE.SphereGeometry(0.38, 16, 16);
  const cuspPositions = [
    [-0.45, 0.65, -0.45],
    [0.45, 0.65, -0.45],
    [-0.45, 0.65, 0.45],
    [0.45, 0.65, 0.45]
  ];
  cuspPositions.forEach(([x, y, z]) => {
    const cusp = new THREE.Mesh(cuspGeo, crownEnamelMat);
    cusp.position.set(x, y, z);
    cusp.scale.set(1, 0.7, 1);
    crownGroup.add(cusp);
  });

  group.add(crownGroup);
  explodedPartsRef.current.push({
    obj: crownGroup,
    basePos: crownGroup.position.clone(),
    offsetDir: new THREE.Vector3(0, 2.3, 0)
  });
}

function buildImplantModel(
  group: THREE.Group,
  explodedPartsRef: React.MutableRefObject<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>
) {
  // Part 1: Alveolar Bone Cross-Section Cylinder
  const boneGeo = new THREE.CylinderGeometry(1.6, 1.7, 2.2, 32);
  const boneMat = new THREE.MeshStandardMaterial({
    color: 0xe5d0ba,
    roughness: 0.85,
    metalness: 0.05
  });
  const boneMesh = new THREE.Mesh(boneGeo, boneMat);
  boneMesh.position.y = 1.1;
  boneMesh.receiveShadow = true;
  group.add(boneMesh);

  // Part 2: Titanium Implant Body (cpTi with threads)
  const fixtureGroup = new THREE.Group();
  fixtureGroup.position.y = 1.3;

  const coreGeo = new THREE.CylinderGeometry(0.55, 0.38, 1.8, 32);
  const tiMat = new THREE.MeshStandardMaterial({
    color: 0x8a95a5,
    roughness: 0.38,
    metalness: 0.82
  });
  const coreMesh = new THREE.Mesh(coreGeo, tiMat);
  coreMesh.castShadow = true;
  fixtureGroup.add(coreMesh);

  // 6 Screw Thread Ridges on Fixture
  const threadGeo = new THREE.TorusGeometry(0.58, 0.04, 12, 32);
  for (let i = -3; i <= 3; i++) {
    const thread = new THREE.Mesh(threadGeo, tiMat);
    thread.rotation.x = Math.PI / 2 + 0.08;
    thread.position.y = i * 0.22;
    fixtureGroup.add(thread);
  }
  group.add(fixtureGroup);

  // Part 3: Internal Hex Connection Ring
  const hexGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.3, 6);
  const hexMat = new THREE.MeshStandardMaterial({
    color: 0x475569,
    roughness: 0.25,
    metalness: 0.9
  });
  const hexMesh = new THREE.Mesh(hexGeo, hexMat);
  hexMesh.position.y = 2.3;
  group.add(hexMesh);
  explodedPartsRef.current.push({
    obj: hexMesh,
    basePos: hexMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 0.5, 0)
  });

  // Part 4: Transmucosal Titanium Abutment Collar & Post
  const abutmentGeo = new THREE.CylinderGeometry(0.48, 0.58, 0.9, 32);
  const abutmentMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    roughness: 0.22,
    metalness: 0.88
  });
  const abutmentMesh = new THREE.Mesh(abutmentGeo, abutmentMat);
  abutmentMesh.position.y = 2.8;
  group.add(abutmentMesh);
  explodedPartsRef.current.push({
    obj: abutmentMesh,
    basePos: abutmentMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.1, 0)
  });

  // Part 5: Central Gold Abutment Screw
  const screwGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 16);
  const screwHeadGeo = new THREE.CylinderGeometry(0.22, 0.12, 0.2, 16);
  const screwMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    roughness: 0.2,
    metalness: 0.9
  });
  const screwMesh = new THREE.Mesh(screwGeo, screwMat);
  const screwHead = new THREE.Mesh(screwHeadGeo, screwMat);
  screwHead.position.y = 0.6;
  const screwGroup = new THREE.Group();
  screwGroup.add(screwMesh);
  screwGroup.add(screwHead);
  screwGroup.position.y = 3.1;
  group.add(screwGroup);
  explodedPartsRef.current.push({
    obj: screwGroup,
    basePos: screwGroup.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.8, 0)
  });

  // Part 6: Translucent Aesthetic Zirconia Crown with Access Hole
  const crownGeo = new THREE.CylinderGeometry(0.78, 0.62, 1.2, 32);
  const crownMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.12,
    metalness: 0.05,
    clearcoat: 0.95
  });
  const crownMesh = new THREE.Mesh(crownGeo, crownMat);
  crownMesh.position.y = 3.6;
  group.add(crownMesh);
  explodedPartsRef.current.push({
    obj: crownMesh,
    basePos: crownMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 2.5, 0)
  });
}

function buildCavitySandwichModel(
  group: THREE.Group,
  explodedPartsRef: React.MutableRefObject<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>
) {
  // Tooth Block Base (Molar Tooth cross section)
  const toothBlockGeo = new THREE.BoxGeometry(2.4, 2.0, 2.4);
  const toothBlockMat = new THREE.MeshStandardMaterial({
    color: 0xfdf4dc,
    roughness: 0.45
  });
  const toothMesh = new THREE.Mesh(toothBlockGeo, toothBlockMat);
  toothMesh.position.y = 1.0;
  toothMesh.castShadow = true;
  group.add(toothMesh);

  // Outer Enamel Shell Lip
  const enamelGeo = new THREE.BoxGeometry(2.5, 0.4, 2.5);
  const enamelMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.15,
    clearcoat: 0.9,
    transmission: 0.2
  });
  const enamelMesh = new THREE.Mesh(enamelGeo, enamelMat);
  enamelMesh.position.y = 1.9;
  group.add(enamelMesh);

  // Layer 1: Calcium Hydroxide Pulp-Capping Sub-Base Liner
  const caGeo = new THREE.BoxGeometry(1.2, 0.15, 1.2);
  const caMat = new THREE.MeshStandardMaterial({
    color: 0xef4444, // Red liner representation
    roughness: 0.6
  });
  const caMesh = new THREE.Mesh(caGeo, caMat);
  caMesh.position.y = 1.2;
  group.add(caMesh);
  explodedPartsRef.current.push({
    obj: caMesh,
    basePos: caMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 0.4, 0)
  });

  // Layer 2: Glass Ionomer Cement (GIC) Base
  const gicGeo = new THREE.BoxGeometry(1.4, 0.5, 1.4);
  const gicMat = new THREE.MeshStandardMaterial({
    color: 0xfde047, // Yellowish dental cement
    roughness: 0.55
  });
  const gicMesh = new THREE.Mesh(gicGeo, gicMat);
  gicMesh.position.y = 1.55;
  group.add(gicMesh);
  explodedPartsRef.current.push({
    obj: gicMesh,
    basePos: gicMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.0, 0)
  });

  // Layer 3: Hybrid Bonding Zone & Resin Tags
  const bondGeo = new THREE.BoxGeometry(1.42, 0.08, 1.42);
  const bondMat = new THREE.MeshStandardMaterial({
    color: 0xf472b6,
    roughness: 0.2,
    transparent: true,
    opacity: 0.85
  });
  const bondMesh = new THREE.Mesh(bondGeo, bondMat);
  bondMesh.position.y = 1.85;
  group.add(bondMesh);
  explodedPartsRef.current.push({
    obj: bondMesh,
    basePos: bondMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 1.6, 0)
  });

  // Layer 4: Composite Resin Enamel Cap
  const compGeo = new THREE.BoxGeometry(1.4, 0.65, 1.4);
  const compMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.18,
    clearcoat: 0.85
  });
  const compMesh = new THREE.Mesh(compGeo, compMat);
  compMesh.position.y = 2.15;
  group.add(compMesh);
  explodedPartsRef.current.push({
    obj: compMesh,
    basePos: compMesh.position.clone(),
    offsetDir: new THREE.Vector3(0, 2.3, 0)
  });
}

function buildFlameZonesModel(
  group: THREE.Group,
  explodedPartsRef: React.MutableRefObject<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>
) {
  // Part 1: Torch Metal Nozzle Tip
  const nozzleGeo = new THREE.CylinderGeometry(0.3, 0.45, 1.4, 32);
  const nozzleMat = new THREE.MeshStandardMaterial({
    color: 0x475569,
    metalness: 0.8,
    roughness: 0.2
  });
  const nozzleMesh = new THREE.Mesh(nozzleGeo, nozzleMat);
  nozzleMesh.rotation.z = Math.PI / 4;
  nozzleMesh.position.set(-1.8, 0.8, 0);
  group.add(nozzleMesh);

  // Flame Cones
  // Zone A: Mixing Zone (Inner Dark Cone)
  const zoneAGeo = new THREE.ConeGeometry(0.22, 0.9, 32);
  const zoneAMat = new THREE.MeshBasicMaterial({
    color: 0x1e293b,
    transparent: true,
    opacity: 0.95
  });
  const zoneAMesh = new THREE.Mesh(zoneAGeo, zoneAMat);
  zoneAMesh.rotation.z = -Math.PI / 4;
  zoneAMesh.position.set(-1.0, 1.5, 0);
  group.add(zoneAMesh);

  // Zone B: Combustion Zone (Greenish intermediate cone)
  const zoneBGeo = new THREE.ConeGeometry(0.42, 1.7, 32);
  const zoneBMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    transparent: true,
    opacity: 0.65
  });
  const zoneBMesh = new THREE.Mesh(zoneBGeo, zoneBMat);
  zoneBMesh.rotation.z = -Math.PI / 4;
  zoneBMesh.position.set(-0.6, 1.85, 0);
  group.add(zoneBMesh);

  // Zone C: Reducing Zone (Bright Blue, HOTTEST 1300–1600°C)
  const zoneCGeo = new THREE.ConeGeometry(0.65, 2.6, 32);
  const zoneCMat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.75
  });
  const zoneCMesh = new THREE.Mesh(zoneCGeo, zoneCMat);
  zoneCMesh.rotation.z = -Math.PI / 4;
  zoneCMesh.position.set(0.1, 2.3, 0);
  group.add(zoneCMesh);

  // Zone D: Oxidizing Sheath (Outer faint blue)
  const zoneDGeo = new THREE.ConeGeometry(0.85, 3.4, 32);
  const zoneDMat = new THREE.MeshBasicMaterial({
    color: 0x818cf8,
    transparent: true,
    opacity: 0.3
  });
  const zoneDMesh = new THREE.Mesh(zoneDGeo, zoneDMat);
  zoneDMesh.rotation.z = -Math.PI / 4;
  zoneDMesh.position.set(0.6, 2.7, 0);
  group.add(zoneDMesh);

  // Part 5: Casting Crucible & Molten Alloy Button in Zone C path
  const crucibleGeo = new THREE.CylinderGeometry(0.9, 0.65, 0.8, 32);
  const crucibleMat = new THREE.MeshStandardMaterial({
    color: 0x44403c,
    roughness: 0.9
  });
  const crucibleMesh = new THREE.Mesh(crucibleGeo, crucibleMat);
  crucibleMesh.position.set(1.4, 1.6, 0);
  group.add(crucibleMesh);

  // Molten Gold Alloy Ingot
  const alloyGeo = new THREE.SphereGeometry(0.35, 16, 16);
  const alloyMat = new THREE.MeshStandardMaterial({
    color: 0xffbf00,
    metalness: 0.9,
    roughness: 0.15,
    emissive: 0xff6600,
    emissiveIntensity: 0.35
  });
  const alloyMesh = new THREE.Mesh(alloyGeo, alloyMat);
  alloyMesh.position.set(1.4, 1.9, 0);
  group.add(alloyMesh);
}

function buildGillmoreNeedleModel(
  group: THREE.Group,
  explodedPartsRef: React.MutableRefObject<{ obj: THREE.Object3D; basePos: THREE.Vector3; offsetDir: THREE.Vector3 }[]>
) {
  // Heavy Metal Base Stand
  const baseGeo = new THREE.BoxGeometry(3.6, 0.4, 2.0);
  const metalMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.35,
    metalness: 0.85
  });
  const baseMesh = new THREE.Mesh(baseGeo, metalMat);
  baseMesh.position.y = 0.2;
  baseMesh.castShadow = true;
  group.add(baseMesh);

  // Dual Upright Columns
  const colGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.2, 24);
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.92,
    roughness: 0.15
  });
  const colL = new THREE.Mesh(colGeo, chromeMat);
  colL.position.set(-1.4, 1.8, 0);
  const colR = new THREE.Mesh(colGeo, chromeMat);
  colR.position.set(1.4, 1.8, 0);
  group.add(colL, colR);

  // Horizontal Cross-Arm Support
  const crossGeo = new THREE.BoxGeometry(3.2, 0.25, 0.4);
  const crossMesh = new THREE.Mesh(crossGeo, metalMat);
  crossMesh.position.set(0, 2.8, 0);
  group.add(crossMesh);

  // Needle 1: Initial Gillmore (1/4 lb weight, 1/12" = 2.12mm tip)
  const needle1Group = new THREE.Group();
  needle1Group.position.set(-0.7, 1.9, 0);

  const weight1Geo = new THREE.CylinderGeometry(0.35, 0.35, 0.4, 32);
  const brassMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.85,
    roughness: 0.25
  });
  const weight1 = new THREE.Mesh(weight1Geo, brassMat);
  weight1.position.y = 0.5;

  const stem1Geo = new THREE.CylinderGeometry(0.045, 0.045, 1.8, 16);
  const stem1 = new THREE.Mesh(stem1Geo, chromeMat);
  needle1Group.add(weight1, stem1);
  group.add(needle1Group);

  explodedPartsRef.current.push({
    obj: needle1Group,
    basePos: needle1Group.position.clone(),
    offsetDir: new THREE.Vector3(0, 0.8, 0)
  });

  // Needle 2: Final Gillmore (1 lb weight, 1/24" = 1.06mm tip)
  const needle2Group = new THREE.Group();
  needle2Group.position.set(0.7, 1.9, 0);

  const weight2Geo = new THREE.CylinderGeometry(0.55, 0.55, 0.7, 32);
  const weight2 = new THREE.Mesh(weight2Geo, brassMat);
  weight2.position.y = 0.5;

  const stem2Geo = new THREE.CylinderGeometry(0.025, 0.025, 1.8, 16);
  const stem2 = new THREE.Mesh(stem2Geo, chromeMat);
  needle2Group.add(weight2, stem2);
  group.add(needle2Group);

  explodedPartsRef.current.push({
    obj: needle2Group,
    basePos: needle2Group.position.clone(),
    offsetDir: new THREE.Vector3(0, 0.8, 0)
  });

  // Gypsum Sample Test Patties underneath
  const pattyGeo = new THREE.CylinderGeometry(0.45, 0.5, 0.2, 32);
  const gypsumMat = new THREE.MeshStandardMaterial({
    color: 0xfff0f6,
    roughness: 0.7
  });
  const patty1 = new THREE.Mesh(pattyGeo, gypsumMat);
  patty1.position.set(-0.7, 0.5, 0);
  const patty2 = new THREE.Mesh(pattyGeo, gypsumMat);
  patty2.position.set(0.7, 0.5, 0);
  group.add(patty1, patty2);
}
