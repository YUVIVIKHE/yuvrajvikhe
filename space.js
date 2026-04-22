// ================================================================
// space.js — Futuristic 3D Portfolio Universe Engine
// Three.js r148 (global) + GSAP 3 | Yuvraj Vikhe Portfolio
// Loaded via <script defer> — THREE is a global from CDN
// ================================================================


// ================================================================
// ── DATA
// ================================================================

const CLUSTERS = [
  { id:'ai',         name:'AI / ML / LLM Systems',       icon:'🤖', color:0x00d4ff, hex:'#00d4ff', z:-70  },
  { id:'research',   name:'Research & Algorithms',        icon:'🧪', color:0xffd700, hex:'#ffd700', z:-155 },
  { id:'blockchain', name:'Blockchain Systems',           icon:'🔗', color:0xff6b35, hex:'#ff6b35', z:-240 },
  { id:'iot',        name:'IoT / Robotics / Embedded',    icon:'⚙️', color:0x9040ff, hex:'#9040ff', z:-330 },
  { id:'web',        name:'Web & Software Systems',       icon:'💻', color:0x00ff88, hex:'#00ff88', z:-425 },
  { id:'platforms',  name:'Platforms & Tools',            icon:'🏗️', color:0xff3399, hex:'#ff3399', z:-500 },
];

const PROJECTS = [
  // ── AI / ML ──────────────────────────────────────────────
  { id:1,  cluster:'ai',         flagship:false, icon:'🧠', name:'EEG & ECG Disorder Prediction',
    desc:'Deep learning system for neurological and cardiac disorder detection from biosignals using CNN and BiLSTM architectures. Achieves 94% classification accuracy across multiple disease categories.',
    tech:['Python','TensorFlow','CNN','BiLSTM','Signal Processing','OpenCV','Keras'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:2,  cluster:'ai',         flagship:false, icon:'🔬', name:'Skin Cancer Classification',
    desc:'Computer vision system for dermoscopic image analysis using DRNet transfer learning architecture. Classifies 7 types of skin lesions with clinical-grade precision using Grad-CAM visualization.',
    tech:['Python','PyTorch','DRNet','Transfer Learning','OpenCV','Grad-CAM','NumPy'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:3,  cluster:'ai',         flagship:false, icon:'🌿', name:'AI Ayurvedic Doctor',
    desc:'LLM-powered Ayurvedic consultation system with a RAG pipeline that retrieves from ancient Ayurvedic texts to provide personalized dosha-based health recommendations.',
    tech:['Python','LangChain','OpenAI','ChromaDB','RAG','FastAPI','React'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:4,  cluster:'ai',         flagship:false, icon:'💬', name:'AI Chatbots',
    desc:'Multi-purpose AI chatbot framework with domain-specific fine-tuning, context memory, and multi-turn stateful conversation handling using LangGraph agents.',
    tech:['Python','LangGraph','OpenAI','Gemini API','FastAPI','React','Redis'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:5,  cluster:'ai',         flagship:false, icon:'🤖', name:'RAG-Based AI Agent',
    desc:'Production-grade RAG agent (CIVA / CARA) for ISO compliance guidance at CyberInsurify Labs. Handles policy queries, audit simulation, and automated document generation.',
    tech:['Python','LangChain','ChromaDB','FastAPI','OpenAI','AWS EC2','Docker'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:6,  cluster:'ai',         flagship:false, icon:'📈', name:'AI Market Trend Agent',
    desc:'Autonomous AI agent that monitors market data, performs sentiment analysis on financial news, and generates AI-driven investment insights using ReAct reasoning framework.',
    tech:['Python','LangChain','n8n','OpenAI','Web Scraping','FastAPI','SQLite'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:7,  cluster:'ai',         flagship:false, icon:'🔍', name:'Hallucination Detection System',
    desc:'Real-time verification layer for LLM outputs using Wikipedia context retrieval and semantic similarity scoring to detect, flag, and correct AI hallucinations before displaying answers.',
    tech:['Python','FastAPI','Gemini API','Wikipedia API','Sentence Transformers','React','FAISS'],
    github:'https://github.com/YUVIVIKHE', live:null },

  // ── RESEARCH ─────────────────────────────────────────────
  { id:8,  cluster:'research',   flagship:false, icon:'⚛️', name:'QEFFE – Quantum Entanglement Fractal Feature Extractor',
    desc:'Novel quantum-inspired algorithm applying fractal mathematics and quantum entanglement principles to extract hierarchical features from complex high-dimensional datasets with improved accuracy.',
    tech:['Python','Qiskit','NumPy','SciPy','Matplotlib','Fractal Math','Research'],
    github:'https://github.com/YUVIVIKHE', live:null },

  // ── BLOCKCHAIN ────────────────────────────────────────────
  { id:9,  cluster:'blockchain', flagship:false, icon:'🔗', name:'ERP using Blockchain (Corda R3)',
    desc:'Enterprise blockchain-based ERP system for transparent college fee management built with Corda R3. Features immutable transaction ledger, multi-party consensus, and an associated published research paper.',
    tech:['Corda R3','Kotlin','Java','Smart Contracts','PostgreSQL','Spring Boot','REST API'],
    github:'https://github.com/YUVIVIKHE', live:null },

  // ── IoT / ROBOTICS ────────────────────────────────────────
  { id:10, cluster:'iot',        flagship:false, icon:'🚨', name:'Emergency Auto SOS System',
    desc:'IoT-based emergency response device that automatically detects accidents via accelerometer and GPS sensors, then sends SOS alerts with precise coordinates to emergency contacts and services.',
    tech:['Arduino','ESP32','GSM Module','GPS','Embedded C','Firebase','PCB Design'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:11, cluster:'iot',        flagship:false, icon:'🏭', name:'Industry Equipment Prediction Device',
    desc:'Predictive maintenance IoT system using vibration, temperature, and current sensors with a TensorFlow Lite ML model to forecast equipment failure 48 hours in advance, reducing downtime.',
    tech:['Raspberry Pi','Python','TensorFlow Lite','MQTT','InfluxDB','Grafana','Sensors'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:12, cluster:'iot',        flagship:false, icon:'🤖', name:'Night Surveillance Robot',
    desc:'Autonomous surveillance robot with night vision camera (NOIRCam), motion detection, ultrasonic obstacle avoidance, and real-time video streaming to a companion mobile app.',
    tech:['Raspberry Pi','OpenCV','Arduino','Python','Flask','Android','WebSocket'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:13, cluster:'iot',        flagship:false, icon:'⚡', name:'V2G & G2V Model',
    desc:'Vehicle-to-Grid and Grid-to-Vehicle energy transfer model for smart EV charging optimization, balancing loads and maximizing renewable energy storage and distribution efficiency.',
    tech:['Python','MATLAB','IoT Sensors','ESP32','MySQL','React','Chart.js'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:14, cluster:'iot',        flagship:false, icon:'🏆', name:'Micromouse Robot (IIT Guwahati Winner)',
    desc:'Award-winning fully autonomous maze-solving robot that captured 1st Prize at IIT Guwahati Micromouse Competition. Implements flood-fill algorithm with PID-controlled DC motors for real-time navigation.',
    tech:['Embedded C','STM32','IR Sensors','PID Control','Flood-Fill','PCB Design','Motor Drivers'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:15, cluster:'iot',        flagship:false, icon:'🦾', name:'Robotic Arm IoT System',
    desc:'6-DOF robotic arm controlled via IoT with a mobile app and web dashboard. Supports gesture recognition input, programmable motion sequences, and real-time joint angle feedback over WebSocket.',
    tech:['Arduino','ESP32','Servo Motors','React','WebSocket','Python','Firebase'],
    github:'https://github.com/YUVIVIKHE', live:null },

  // ── WEB / SOFTWARE ────────────────────────────────────────
  { id:16, cluster:'web',        flagship:false, icon:'🌐', name:'KMA Web Platform',
    desc:'Full-stack web platform for KMA organization with member management, event coordination, dynamic content management, role-based access control, and real-time notifications.',
    tech:['React','PHP','MySQL','Bootstrap','REST API','AWS','JavaScript'],
    github:'https://github.com/YUVIVIKHE', live:'https://kmassociates.in' },
  { id:17, cluster:'web',        flagship:false, icon:'💼', name:'Strandforse Web App',
    desc:'Corporate web application with advanced multi-role user management, real-time socket.io notifications, an integrated analytics dashboard, and automated reporting system.',
    tech:['Angular','Node.js','MongoDB','Express','Socket.io','AWS EC2','TypeScript'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:18, cluster:'web',        flagship:false, icon:'🏛️', name:'Grampanchayat System',
    desc:'Digital governance platform for rural local bodies streamlining citizen services, complaint management, document issuance, fund allocation tracking, and public announcements.',
    tech:['PHP','MySQL','JavaScript','Bootstrap','PDF Generation','Charts.js','AJAX'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:19, cluster:'web',        flagship:false, icon:'👥', name:'HRMS System',
    desc:'Comprehensive Human Resource Management System with biometric attendance tracking, leave workflow approval, payroll processing, performance analytics, and manager dashboards.',
    tech:['PHP','MySQL','JavaScript','CSS','REST API','FullCalendar','Chart.js'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:20, cluster:'web',        flagship:false, icon:'📊', name:'KMA ERP',
    desc:'Enterprise Resource Planning system for KMA with integrated modules for finance, operations, HR, inventory, and executive reporting with role-based access and audit logging.',
    tech:['React','Node.js','PostgreSQL','Docker','Redis','AWS','TypeScript'],
    github:'https://github.com/YUVIVIKHE', live:'https://erp.kmassociates.in' },
  { id:21, cluster:'web',        flagship:false, icon:'🌾', name:'Sky Agro Inventory',
    desc:'Agricultural inventory management system for tracking crops, managing supplier relationships, setting stock alerts, and visualizing seasonal analytics for smarter procurement decisions.',
    tech:['PHP','MySQL','JavaScript','Chart.js','Bootstrap','REST API','AJAX'],
    github:'https://github.com/YUVIVIKHE', live:'https://skyagro.org' },
  { id:22, cluster:'web',        flagship:false, icon:'📚', name:'Gyanam India Learning Platform',
    desc:'Full-featured EdTech platform with course management, adaptive video streaming, interactive quizzes, progress visualization, instructor dashboards, and Razorpay payment integration.',
    tech:['React','Node.js','MongoDB','AWS S3','Razorpay','Socket.io','FFmpeg'],
    github:'https://github.com/YUVIVIKHE', live:'https://gyanamindia.labxco.in' },
  { id:23, cluster:'web',        flagship:false, icon:'📝', name:'Gyanam India Exam System',
    desc:'Secure online examination platform with AI-assisted proctoring, anti-cheating measures (tab-switch detection, webcam monitoring), real-time scoring, and AI-powered result analytics.',
    tech:['React','Node.js','MongoDB','WebRTC','JWT','Redis','TensorFlow.js'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:24, cluster:'web',        flagship:false, icon:'💧', name:'Swara Aqua System',
    desc:'Smart water delivery platform with route optimization, subscription management, live delivery tracking on Google Maps, IoT-connected water quality sensors, and payment gateway.',
    tech:['React Native','Node.js','MySQL','Google Maps API','Firebase','Express','Stripe'],
    github:'https://github.com/YUVIVIKHE', live:'https://swaraaqua.labxco.in' },
  { id:25, cluster:'web',        flagship:false, icon:'🔨', name:'Labour Link App',
    desc:'Gig economy platform connecting daily-wage laborers with local employers. Features AI-driven skill matching, geo-location job discovery, in-app chat, and UPI payment integration.',
    tech:['Flutter','Firebase','Google Maps','Razorpay','Node.js','MongoDB','Dart'],
    github:'https://github.com/YUVIVIKHE', live:'https://labourlink.labxco.cloud' },
  { id:26, cluster:'web',        flagship:false, icon:'🩸', name:'Blood Donation System',
    desc:'Life-saving platform connecting blood donors with recipients in need. Features ABO-compatible matching, emergency broadcast alerts, blood camp management, and donor history.',
    tech:['PHP','MySQL','JavaScript','Twilio SMS','Google Maps','Bootstrap','REST API'],
    github:'https://github.com/YUVIVIKHE', live:null },

  // ── PLATFORMS ─────────────────────────────────────────────
  { id:27, cluster:'platforms',  flagship:false, icon:'⚖️', name:'Depex Judging Platform',
    desc:'Digital competition judging system with multi-round evaluation workflows, judge assignment logic, weighted scoring algorithms, real-time leaderboards, and automated result generation for hackathons.',
    tech:['React','Node.js','MongoDB','Socket.io','JWT','AWS','GSAP'],
    github:'https://github.com/YUVIVIKHE', live:null },
  { id:28, cluster:'platforms',  flagship:true,  icon:'🦾', name:'Robotic Arm IoT Control System',
    desc:'FLAGSHIP PROJECT — Advanced IoT control system for a 6-DOF robotic arm with a real-time 3D web dashboard, computer vision gesture recognition, programmable motion sequences, cloud data sync, and Three.js 3D visualization of joint states.',
    tech:['React','FastAPI','Arduino','ESP32','WebSocket','Three.js','Firebase','OpenCV','Python'],
    github:'https://github.com/YUVIVIKHE', live:null },
];

// ================================================================
// ── CONFIG
// ================================================================

const CAMERA_Z_START = 10;
const CAMERA_Z_END   = -540;

// Scroll progress thresholds when each zone begins (0–1)
const ZONE_THRESHOLDS = [0, 0.12, 0.26, 0.40, 0.54, 0.70, 0.86];
const ZONE_BG_COLORS  = ['#020408','#00060e','#050400','#060200','#060012','#000b04','#0d0007'];

// ================================================================
// ── STATE
// ================================================================

let renderer, scene, camera, composer;
let clock, mouse, raycaster;

let allNodes    = []; // {mesh, project, cluster, nodeMat, glowMat}
let avatarGroup = null;
let hoveredNode = null;

let scrollProgress  = 0;
let targetProgress  = 0;
let currentZoneIdx  = 0;

// ================================================================
// ── INIT
// ================================================================

function init() {
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;

  // Init THREE state objects here so THREE is guaranteed to be loaded
  clock     = new THREE.Clock();
  mouse     = new THREE.Vector2(-10, -10);
  raycaster = new THREE.Raycaster();

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020408, 0.006);

  // Camera
  camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 800);
  camera.position.set(0, 0, CAMERA_Z_START);

  // Post-processing
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));

  const bloom = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.4, 0.35, 0.78
  );
  composer.addPass(bloom);

  // Lights
  const ambient = new THREE.AmbientLight(0x0d1a33, 4);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0x88aaff, 1.2);
  sun.position.set(15, 20, 10);
  scene.add(sun);

  // Build universe
  createStarfield();
  createNebulaClouds();
  createAllClusters();
  createAvatar();
  createGrid();

  // Events
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('click', onDocumentClick);

  // UI
  initModal();
  initChatbot();
  initSearch();
  initJumpButtons();
  initReveal();
  initStatCounters();
  buildMobileView();

  // Hide loader + start astronaut intro
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    setTimeout(startAstronautIntro, 300);
  }, 1600);

  animate();
}

// ================================================================
// ── SCENE BUILDERS
// ================================================================

function createStarfield() {
  const count = 9000;
  const pos   = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 700;
    pos[i*3+1] = (Math.random() - 0.5) * 350;
    pos[i*3+2] = Math.random() * -650 - 5;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color:0xffffff, size:0.16, sizeAttenuation:true, transparent:true, opacity:0.8 });
  scene.add(new THREE.Points(geo, mat));

  // Shooting star trails
  for (let t = 0; t < 12; t++) {
    const pts = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(3 + Math.random() * 5, (Math.random()-0.5)*2, 0)
    ];
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const m = new THREE.LineBasicMaterial({ color:0xffffff, transparent:true, opacity:0.35 });
    const line = new THREE.Line(g, m);
    line.position.set(
      (Math.random()-0.5)*180,
      (Math.random()-0.5)*80,
      Math.random()*-580 - 20
    );
    line.rotation.z = Math.random() * Math.PI;
    scene.add(line);
  }
}

function createNebulaClouds() {
  CLUSTERS.forEach(cluster => {
    const count = 400;
    const pos   = new Float32Array(count * 3);
    const spread = 40;
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random()-0.5) * spread;
      pos[i*3+1] = (Math.random()-0.5) * spread * 0.6;
      pos[i*3+2] = (Math.random()-0.5) * 18;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color:cluster.color, size:0.55, sizeAttenuation:true, transparent:true, opacity:0.1
    });
    const cloud = new THREE.Points(geo, mat);
    cloud.position.z = cluster.z;
    scene.add(cloud);
  });
}

function createAllClusters() {
  CLUSTERS.forEach(cluster => {
    const projs = PROJECTS.filter(p => p.cluster === cluster.id);
    createCluster(cluster, projs);
  });
}

function createCluster(cluster, projects) {
  const group = new THREE.Group();
  group.position.z = cluster.z;

  // ── Central Star Node ──
  const cGeo = new THREE.SphereGeometry(2.1, 32, 32);
  const cMat = new THREE.MeshStandardMaterial({
    color: cluster.color,
    emissive: cluster.color,
    emissiveIntensity: 2.0,
    transparent: true,
    opacity: 0.9,
  });
  group.add(new THREE.Mesh(cGeo, cMat));

  // ── Orbit Rings ──
  [[6,  0.06, 0.28, 0.3,  0.1],
   [11, 0.05, 0.14, -0.22, 0.15]
  ].forEach(([r, tube, op, rx, ry]) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, tube, 8, 100),
      new THREE.MeshBasicMaterial({ color:cluster.color, transparent:true, opacity:op })
    );
    ring.rotation.x = rx * Math.PI;
    ring.rotation.y = ry * Math.PI;
    group.add(ring);
  });

  // ── Point Light ──
  const light = new THREE.PointLight(cluster.color, 5, 60);
  group.add(light);

  // ── Project Node Positions (Fibonacci Sphere) ──
  const nodePositions = [];
  const clusterData   = [];

  projects.forEach((proj, i) => {
    const n = projects.length;
    let x, y, z;

    if (n === 1) {
      x = 13; y = 0; z = 0;
    } else {
      const phi   = Math.acos(-1 + (2 * i) / (n - 1));
      const theta = Math.sqrt(n * Math.PI) * phi;
      const r     = 11 + (i % 4) * 2;
      x = r * Math.sin(phi) * Math.cos(theta);
      y = r * Math.sin(phi) * Math.sin(theta);
      z = THREE.MathUtils.clamp(r * Math.cos(phi), -9, 9);
    }

    const pos = new THREE.Vector3(x, y, z);
    nodePositions.push(pos);

    // Node geometry
    const nodeGeo = new THREE.IcosahedronGeometry(proj.flagship ? 1.3 : 0.85, 2);
    const nodeMat = new THREE.MeshStandardMaterial({
      color:    cluster.color,
      emissive: cluster.color,
      emissiveIntensity: proj.flagship ? 0.8 : 0.35,
      metalness: 0.75,
      roughness: 0.25,
    });
    const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
    nodeMesh.position.copy(pos);

    // Outer glow sphere (larger, backside)
    const glowGeo = new THREE.SphereGeometry(proj.flagship ? 2.1 : 1.45, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color:cluster.color, transparent:true, opacity:proj.flagship ? 0.22 : 0.1, side:THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    nodeMesh.add(glow);

    // Flagship ring
    if (proj.flagship) {
      const fRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.07, 8, 64),
        new THREE.MeshBasicMaterial({ color:0xffd700, transparent:true, opacity:0.8 })
      );
      fRing.rotation.x = Math.PI / 2;
      nodeMesh.add(fRing);
    }

    nodeMesh.userData = { project:proj, cluster, initPos:pos.clone() };
    group.add(nodeMesh);

    allNodes.push({ mesh:nodeMesh, project:proj, cluster, nodeMat, glowMat });
    clusterData.push({ mesh:nodeMesh, pos });
  });

  // ── Connection Lines ──
  if (nodePositions.length > 1) {
    const linePts = [];
    nodePositions.forEach((pos, i) => {
      nodePositions
        .map((p, j) => ({ j, d:pos.distanceTo(p) }))
        .filter(x => x.j !== i)
        .sort((a,b) => a.d - b.d)
        .slice(0, 2)
        .forEach(({ j }) => linePts.push(pos.clone(), nodePositions[j].clone()));
    });
    if (linePts.length) {
      const lg = new THREE.BufferGeometry().setFromPoints(linePts);
      const lm = new THREE.LineBasicMaterial({ color:cluster.color, transparent:true, opacity:0.18 });
      group.add(new THREE.LineSegments(lg, lm));
    }
  }

  scene.add(group);
}

function createAvatar() {
  avatarGroup = new THREE.Group();

  // ── MATERIALS ──────────────────────────────────────────────
  const suitMat    = () => new THREE.MeshStandardMaterial({ color:0xdce8f0, metalness:0.35, roughness:0.55 });
  const suitDarkMat= () => new THREE.MeshStandardMaterial({ color:0x8a9bb0, metalness:0.5,  roughness:0.45 });
  const greyMat    = () => new THREE.MeshStandardMaterial({ color:0x6a7a90, metalness:0.6,  roughness:0.4  });
  const darkMat    = () => new THREE.MeshStandardMaterial({ color:0x1a2535, metalness:0.7,  roughness:0.3  });
  const goldMat    = () => new THREE.MeshStandardMaterial({ color:0xffd700, emissive:0xffa500, emissiveIntensity:0.4, metalness:0.9, roughness:0.1 });
  const glowCyan   = () => new THREE.MeshStandardMaterial({ color:0x00d4ff, emissive:0x00d4ff, emissiveIntensity:2.5, metalness:0.1, roughness:0.05 });
  const glowPurple = () => new THREE.MeshStandardMaterial({ color:0x7b2fff, emissive:0x7b2fff, emissiveIntensity:2.0, metalness:0.1, roughness:0.05 });
  const visorMat   = new THREE.MeshStandardMaterial({
    color:0x00d4ff, emissive:0x0088cc, emissiveIntensity:1.2,
    transparent:true, opacity:0.82, metalness:0.05, roughness:0.0,
    envMapIntensity: 1.5
  });
  const visorOuterMat = new THREE.MeshStandardMaterial({
    color:0xffd700, emissive:0xffa500, emissiveIntensity:0.3,
    metalness:0.95, roughness:0.05
  });

  // ── TORSO ──────────────────────────────────────────────────
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.33, 0.48, 6, 16), suitMat());
  torso.scale.set(1, 1, 0.88);
  avatarGroup.add(torso);

  // Chest panel (dark inset)
  const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.05), darkMat());
  chestPanel.position.set(0, 0.1, 0.28);
  avatarGroup.add(chestPanel);

  // Chest panel glow strips
  [0.08, -0.08].forEach(x => {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.02), glowCyan());
    strip.position.set(x, 0.1, 0.31);
    avatarGroup.add(strip);
  });

  // Center chest light
  const chestLight = new THREE.Mesh(new THREE.CircleGeometry(0.055, 16), glowCyan());
  chestLight.position.set(0, 0.06, 0.32);
  avatarGroup.add(chestLight);
  const chestPointLight = new THREE.PointLight(0x00d4ff, 1.5, 3);
  chestPointLight.position.set(0, 0.06, 0.5);
  avatarGroup.add(chestPointLight);

  // Shoulder pads
  [-0.38, 0.38].forEach((x, i) => {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), suitMat());
    pad.scale.set(1, 0.75, 0.85);
    pad.position.set(x, 0.28, 0);
    avatarGroup.add(pad);
    // Shoulder stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.18), i === 0 ? glowPurple() : glowCyan());
    stripe.position.set(x, 0.28, 0);
    avatarGroup.add(stripe);
  });

  // Waist belt
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.07, 20), darkMat());
  belt.position.set(0, -0.18, 0);
  avatarGroup.add(belt);
  // Belt buckle
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.06), goldMat());
  buckle.position.set(0, -0.18, 0.32);
  avatarGroup.add(buckle);

  // ── HELMET ─────────────────────────────────────────────────
  const helmetGroup = new THREE.Group();
  helmetGroup.position.y = 0.62;
  avatarGroup.add(helmetGroup);

  // Helmet shell
  const helmetShell = new THREE.Mesh(new THREE.SphereGeometry(0.30, 24, 20), suitMat());
  helmetShell.scale.set(1, 1.05, 0.98);
  helmetGroup.add(helmetShell);

  // Helmet visor frame (gold ring)
  const visorFrame = new THREE.Mesh(
    new THREE.TorusGeometry(0.195, 0.025, 8, 40, Math.PI * 1.1),
    visorOuterMat
  );
  visorFrame.position.set(0, 0.01, 0.08);
  visorFrame.rotation.x = -Math.PI * 0.08;
  helmetGroup.add(visorFrame);

  // Visor glass
  const visor = new THREE.Mesh(
    new THREE.SphereGeometry(0.21, 20, 12, 0, Math.PI * 2, 0.28, Math.PI * 0.48),
    visorMat
  );
  visor.position.set(0, 0.01, 0.06);
  visor.rotation.x = -Math.PI * 0.08;
  helmetGroup.add(visor);

  // Visor inner glow
  const visorGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 16, 10, 0, Math.PI * 2, 0.3, Math.PI * 0.44),
    new THREE.MeshBasicMaterial({ color:0x00aaff, transparent:true, opacity:0.15 })
  );
  visorGlow.position.set(0, 0.01, 0.06);
  visorGlow.rotation.x = -Math.PI * 0.08;
  helmetGroup.add(visorGlow);

  // Helmet side details
  [-0.22, 0.22].forEach(x => {
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 8), greyMat());
    vent.rotation.z = Math.PI / 2;
    vent.position.set(x, 0, 0.1);
    helmetGroup.add(vent);
  });

  // Helmet top light
  const topLight = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), glowCyan());
  topLight.position.set(0, 0.31, 0);
  helmetGroup.add(topLight);

  // Antenna
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.26, 6),
    new THREE.MeshStandardMaterial({ color:0x8a9bb0, metalness:0.8, roughness:0.2 }));
  ant.position.set(0.14, 0.38, 0);
  helmetGroup.add(ant);
  const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), glowCyan());
  antTip.position.set(0.14, 0.52, 0);
  helmetGroup.add(antTip);
  // Antenna glow light
  const antLight = new THREE.PointLight(0x00d4ff, 1.2, 1.5);
  antLight.position.set(0.14, 0.52, 0);
  helmetGroup.add(antLight);

  // ── ARMS ───────────────────────────────────────────────────
  const armGeo = new THREE.CapsuleGeometry(0.095, 0.30, 6, 10);
  [-0.44, 0.44].forEach((x, i) => {
    const arm = new THREE.Mesh(armGeo, suitMat());
    arm.position.set(x, 0.06, 0);
    arm.rotation.z = i === 0 ? 0.28 : -0.28;
    avatarGroup.add(arm);

    // Elbow joint
    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), suitDarkMat());
    elbow.position.set(x * 1.08, -0.1, 0);
    avatarGroup.add(elbow);

    // Glove
    const glove = new THREE.Mesh(new THREE.SphereGeometry(0.095, 10, 8), darkMat());
    glove.scale.set(1, 0.85, 0.9);
    glove.position.set(x * 1.14, -0.28, 0);
    avatarGroup.add(glove);

    // Wrist glow ring
    const wristRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.1, 0.015, 6, 20),
      i === 0 ? glowPurple() : glowCyan()
    );
    wristRing.position.set(x * 1.12, -0.22, 0);
    wristRing.rotation.z = i === 0 ? 0.28 : -0.28;
    avatarGroup.add(wristRing);
  });

  // ── LEGS ───────────────────────────────────────────────────
  const legGeo = new THREE.CapsuleGeometry(0.105, 0.30, 6, 10);
  [-0.18, 0.18].forEach((x, i) => {
    const leg = new THREE.Mesh(legGeo, suitMat());
    leg.position.set(x, -0.60, 0);
    avatarGroup.add(leg);

    // Knee pad
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 8), suitDarkMat());
    knee.scale.set(1.1, 0.7, 1);
    knee.position.set(x, -0.68, 0.06);
    avatarGroup.add(knee);

    // Boot
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.14, 4, 8), darkMat());
    boot.scale.set(1, 0.7, 1.2);
    boot.position.set(x, -0.88, 0.04);
    avatarGroup.add(boot);

    // Boot glow strip
    const bootStrip = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.02), i === 0 ? glowPurple() : glowCyan());
    bootStrip.position.set(x, -0.84, 0.12);
    avatarGroup.add(bootStrip);
  });

  // ── JETPACK ────────────────────────────────────────────────
  const jetpack = new THREE.Group();
  jetpack.position.set(0, 0.05, -0.36);
  avatarGroup.add(jetpack);

  // Main body
  const jpBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.50, 0.18), darkMat());
  jetpack.add(jpBody);

  // Side panels
  [-0.22, 0.22].forEach(x => {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.38, 0.14), greyMat());
    panel.position.set(x, 0, 0);
    jetpack.add(panel);
  });

  // Thruster nozzles (4x)
  [[-0.12,-0.28],[ 0.12,-0.28],[-0.12,-0.18],[0.12,-0.18]].forEach(([x,y]) => {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.055, 0.1, 8), greyMat());
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x, y, -0.1);
    jetpack.add(nozzle);

    // Thruster glow
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 8), new THREE.MeshBasicMaterial({
      color:0x00d4ff, transparent:true, opacity:0.7
    }));
    flame.rotation.x = -Math.PI / 2;
    flame.position.set(x, y, -0.22);
    jetpack.add(flame);
  });

  // Jetpack top handle
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 6, 16, Math.PI), greyMat());
  handle.position.set(0, 0.28, 0);
  handle.rotation.x = Math.PI / 2;
  jetpack.add(handle);

  // ── TETHER CABLE ───────────────────────────────────────────
  const tetherPts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    tetherPts.push(new THREE.Vector3(
      Math.sin(t * Math.PI * 1.5) * 0.4,
      -0.3 - t * 1.2,
      -0.1 + Math.cos(t * Math.PI) * 0.15
    ));
  }
  const tetherGeo = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(tetherPts), 20, 0.012, 6, false
  );
  const tetherMesh = new THREE.Mesh(tetherGeo,
    new THREE.MeshStandardMaterial({ color:0xffd700, emissive:0xffa500, emissiveIntensity:0.5, metalness:0.8, roughness:0.2 })
  );
  tetherMesh.position.set(0.2, 0, -0.1);
  avatarGroup.add(tetherMesh);

  // ── OVERALL SCALE & SCENE ──────────────────────────────────
  avatarGroup.scale.setScalar(0.72);
  scene.add(avatarGroup);
}

function createGrid() {
  const grid = new THREE.GridHelper(280, 44, 0x001133, 0x001133);
  grid.position.set(0, -22, -280);
  grid.material.opacity    = 0.5;
  grid.material.transparent = true;
  scene.add(grid);
}

// ================================================================
// ── SCROLL HANDLER
// ================================================================

function onScroll() {
  const driver = document.getElementById('space-driver');
  if (!driver) return;
  const rect  = driver.getBoundingClientRect();
  const total = driver.offsetHeight - window.innerHeight;
  const raw   = Math.max(0, Math.min(1, -rect.top / total));
  targetProgress = raw;
  updateZoneUI(raw);
  updateHeroVisibility(raw);
  updateSpaceUIFade(raw);
}

// ================================================================
// ── ZONE UI
// ================================================================

function updateZoneUI(progress) {
  // Determine zone index
  let zone = 0;
  for (let i = ZONE_THRESHOLDS.length - 1; i >= 0; i--) {
    if (progress >= ZONE_THRESHOLDS[i]) { zone = i; break; }
  }

  if (zone !== currentZoneIdx) {
    currentZoneIdx = zone;

    // Hide all cluster labels
    document.querySelectorAll('.cluster-label').forEach(el => el.classList.remove('visible'));

    // Show label for current zone (zones 1-6 map to clusters)
    const ids = ['', 'ai', 'research', 'blockchain', 'iot', 'web', 'platforms'];
    if (zone > 0 && zone <= 6) {
      const lbl = document.getElementById('label-' + ids[zone]);
      if (lbl) requestAnimationFrame(() => lbl.classList.add('visible'));
    }

    // Update progress dots
    document.querySelectorAll('.progress-stop').forEach((el, i) => {
      el.classList.toggle('active', i === zone);
    });

    // Update nav cluster buttons
    document.querySelectorAll('.cluster-jump-btn').forEach((el, i) => {
      el.classList.toggle('active', i === zone);
    });

    // Background color shift
    document.getElementById('zone-bg').style.background = ZONE_BG_COLORS[zone] || '#020408';

    // Fire zone change event for astronaut speech
    window.dispatchEvent(new CustomEvent('astroZoneChange', { detail: { zone } }));
  }
}

function updateHeroVisibility(progress) {
  const hero = document.getElementById('hero-overlay');
  if (!hero) return;
  if (progress > 0.04) {
    hero.classList.add('fading');
  } else {
    hero.classList.remove('fading');
  }
}

function updateSpaceUIFade(progress) {
  // Fade out space UI when leaving the 3D section
  const fade = progress >= 0.94 ? Math.max(0, 1 - (progress - 0.94) / 0.06) : 1;
  const labels   = document.getElementById('cluster-labels');
  const progress_ = document.getElementById('universe-progress');
  if (labels)   { labels.style.opacity   = fade; labels.style.pointerEvents   = fade < 0.1 ? 'none' : 'auto'; }
  if (progress_) { progress_.style.opacity = fade; progress_.style.pointerEvents = fade < 0.1 ? 'none' : 'auto'; }
}

// ================================================================
// ── ANIMATION LOOP
// ================================================================

function animate() {
  requestAnimationFrame(animate);
  const delta   = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  // Smooth scroll lerp
  scrollProgress = THREE.MathUtils.lerp(scrollProgress, targetProgress, 0.07);

  // Camera Z travel
  const tZ = CAMERA_Z_START + (CAMERA_Z_END - CAMERA_Z_START) * scrollProgress;
  camera.position.z = THREE.MathUtils.lerp(camera.position.z, tZ, 0.07);

  // Anti-gravity camera drift
  camera.position.y = Math.sin(elapsed * 0.28) * 0.9;
  camera.position.x = Math.sin(elapsed * 0.19) * 0.55;
  camera.rotation.z = Math.sin(elapsed * 0.23) * 0.008;

  // Animate project nodes (float + spin)
  allNodes.forEach((node, i) => {
    const t = elapsed * 0.38 + i * 0.72;
    node.mesh.position.y = node.mesh.userData.initPos.y + Math.sin(t) * 0.42;
    node.mesh.rotation.y += delta * 0.38;
    node.mesh.rotation.x += delta * 0.09;
  });

  // Avatar — intro sequence + normal follow
  if (avatarGroup) {
    const bob = Math.sin(elapsed * 1.9) * 0.1;

    // Normal follow position (where astronaut rests after intro)
    const normalPos = new THREE.Vector3(
      camera.position.x - 2.9,
      camera.position.y - 0.85 + bob,
      camera.position.z - 2.6
    );

    if (introPhase === 'flyIn') {
      introTimer += delta;
      const t = Math.min(introTimer / 2.2, 1); // 2.2s fly-in
      const ease = 1 - Math.pow(1 - t, 4);     // ease-out-quart

      // Fly from deep space toward normal position
      avatarGroup.position.lerpVectors(
        new THREE.Vector3(18, -8, camera.position.z - 60),
        new THREE.Vector3(camera.position.x - 2.9, camera.position.y - 0.85, camera.position.z - 2.6),
        ease
      );
      // Scale up from tiny to full
      const s = 0.01 + ease * 0.71;
      avatarGroup.scale.setScalar(s);
      // Barrel roll + tumble during fly-in
      avatarGroup.rotation.z = Math.PI * 1.5 * (1 - ease) + Math.sin(elapsed * 6) * (1 - ease) * 0.5;
      avatarGroup.rotation.x = Math.sin(elapsed * 4) * (1 - ease) * 0.8;
      avatarGroup.rotation.y = -Math.PI * 2 * (1 - ease) - 0.25;

      if (t >= 1) { introPhase = 'orbit'; introTimer = 0; }

    } else if (introPhase === 'orbit') {
      introTimer += delta;
      const t = Math.min(introTimer / 1.4, 1); // 1.4s orbit loop
      const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t; // ease-in-out

      // Do a wide arc loop around the camera
      const angle = ease * Math.PI * 2;
      const radius = 3.5 * (1 - ease * 0.6);
      avatarGroup.position.set(
        camera.position.x + Math.sin(angle) * radius - 1.5,
        camera.position.y + Math.sin(angle * 0.5) * 1.2 - 0.5,
        camera.position.z - 2.0 - Math.cos(angle) * 1.5
      );
      avatarGroup.scale.setScalar(0.72);
      avatarGroup.rotation.y = angle + Math.PI;
      avatarGroup.rotation.z = Math.sin(angle * 2) * 0.3;
      avatarGroup.rotation.x = Math.sin(angle) * 0.2;

      if (t >= 1) { introPhase = 'settle'; introTimer = 0; }

    } else if (introPhase === 'settle') {
      introTimer += delta;
      const t = Math.min(introTimer / 0.8, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      // Smoothly settle into normal follow position
      avatarGroup.position.lerp(normalPos, ease * 0.12);
      avatarGroup.rotation.y = THREE.MathUtils.lerp(avatarGroup.rotation.y, -0.25, ease * 0.08);
      avatarGroup.rotation.z = THREE.MathUtils.lerp(avatarGroup.rotation.z, 0, ease * 0.1);
      avatarGroup.rotation.x = THREE.MathUtils.lerp(avatarGroup.rotation.x, 0, ease * 0.1);
      avatarGroup.scale.setScalar(0.72);

      if (t >= 1) { introPhase = 'done'; }

    } else {
      // Normal follow mode
      avatarGroup.position.lerp(normalPos, 0.06);
      avatarGroup.scale.setScalar(0.72);
      avatarGroup.rotation.z = Math.sin(elapsed * 1.2) * 0.04;
      avatarGroup.rotation.x = -Math.sin(elapsed * 0.6) * 0.03;

      // Tilt toward nearest cluster
      const nearCluster = CLUSTERS.reduce((best, c) => {
        const d = Math.abs(c.z - camera.position.z);
        return d < Math.abs(best.z - camera.position.z) ? c : best;
      }, CLUSTERS[0]);
      const dir = nearCluster.z < camera.position.z ? 1 : -1;
      avatarGroup.rotation.y = THREE.MathUtils.lerp(
        avatarGroup.rotation.y, dir * 0.18 - 0.25, 0.04
      );
    }
  }

  // Hover check
  updateHover();

  composer.render();
}

// ================================================================
// ── INTERACTION
// ================================================================

function onMouseMove(e) {
  mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  const tt = document.getElementById('node-tooltip');
  tt.style.left = (e.clientX + 18) + 'px';
  tt.style.top  = (e.clientY -  8) + 'px';
}

function updateHover() {
  raycaster.setFromCamera(mouse, camera);
  const meshes     = allNodes.map(n => n.mesh);
  const intersects = raycaster.intersectObjects(meshes, true);

  let found = null;
  for (const hit of intersects) {
    let obj = hit.object;
    while (obj && !allNodes.find(n => n.mesh === obj)) obj = obj.parent;
    if (obj && obj.userData.project) { found = obj; break; }
  }

  if (found !== hoveredNode) {
    // Restore previous hovered
    if (hoveredNode) {
      const prev = allNodes.find(n => n.mesh === hoveredNode);
      gsap.to(hoveredNode.scale,   { x:1, y:1, z:1, duration:0.35, ease:'back.out(1)' });
      if (prev) gsap.to(prev.nodeMat, { emissiveIntensity:prev.project.flagship ? 0.8 : 0.35, duration:0.35 });
    }

    hoveredNode = found;

    if (hoveredNode) {
      const cur = allNodes.find(n => n.mesh === hoveredNode);
      gsap.to(hoveredNode.scale, { x:1.5, y:1.5, z:1.5, duration:0.35, ease:'back.out(1.7)' });
      if (cur) gsap.to(cur.nodeMat, { emissiveIntensity:2.5, duration:0.35 });

      const proj    = hoveredNode.userData.project;
      const cluster = hoveredNode.userData.cluster;
      document.getElementById('tooltip-name').textContent    = proj.name;
      document.getElementById('tooltip-cluster').textContent = cluster.name;
      document.getElementById('node-tooltip').classList.add('visible');
      document.body.style.cursor = 'pointer';
    } else {
      document.getElementById('node-tooltip').classList.remove('visible');
      document.body.style.cursor = 'crosshair';
    }
  }
}

function onDocumentClick(e) {
  if (e.target.closest('nav, #project-modal, #chatbot-panel, #chatbot-btn, button, a, input, #search-results')) return;
  if (hoveredNode && hoveredNode.userData.project) {
    openModal(hoveredNode.userData.project, hoveredNode.userData.cluster);
  }
}

// ================================================================
// ── MODAL
// ================================================================

function openModal(project, cluster) {
  const modal = document.getElementById('project-modal');

  document.getElementById('modal-icon').textContent  = project.icon;
  document.getElementById('modal-num').textContent   = `PROJECT #${String(project.id).padStart(2,'0')}`;
  document.getElementById('modal-title').textContent = project.name;
  document.getElementById('modal-desc').textContent  = project.desc;

  const badge = document.getElementById('modal-badge');
  badge.textContent        = `${cluster.icon}  ${cluster.name}`;
  badge.style.color        = cluster.hex;
  badge.style.borderColor  = cluster.hex;
  badge.style.background   = cluster.hex + '18';

  document.getElementById('modal-tags').innerHTML =
    project.tech.map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('modal-actions').innerHTML = `
    <a href="${project.github}" target="_blank" class="modal-btn modal-btn-primary">⌥ View on GitHub</a>
    ${project.live ? `<a href="${project.live}" target="_blank" class="modal-btn modal-btn-secondary">↗ Live Demo</a>` : ''}
    ${project.flagship ? '<span class="flagship-badge">★ Flagship Project</span>' : ''}
  `;

  // Live preview embed
  const existingPreview = document.getElementById('modal-live-preview');
  if (existingPreview) existingPreview.remove();

  if (project.live) {
    const divider = document.createElement('div');
    divider.className = 'modal-divider';

    const wrap = document.createElement('div');
    wrap.id = 'modal-live-preview';
    wrap.innerHTML = `
      <div class="modal-preview-label">◈ Live Preview</div>
      <div class="modal-preview-wrap">
        <iframe src="${project.live}" loading="lazy" title="${project.name} preview" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
        <div class="modal-preview-overlay" onclick="window.open('${project.live}','_blank')">
          <a href="${project.live}" target="_blank" class="modal-preview-open-btn">↗ Open Live Site</a>
        </div>
      </div>
    `;

    const panel = document.querySelector('.modal-panel');
    panel.appendChild(divider);
    panel.appendChild(wrap);
  }

  modal.classList.add('open');
}

function initModal() {
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-close-btn').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
}

// Expose for mobile cards
window.openProjectModal = id => {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const c = CLUSTERS.find(x => x.id === p.cluster);
  openModal(p, c);
};

// ================================================================
// ── ASTRONAUT INTRO STATE
// ================================================================

let introPhase    = 'idle';   // 'idle' | 'flyIn' | 'orbit' | 'settle' | 'done'
let introTimer    = 0;
let introStartPos = new THREE.Vector3();
let introTargetPos= new THREE.Vector3();

function startAstronautIntro() {
  if (!avatarGroup) return;
  introPhase = 'flyIn';
  introTimer = 0;
  // Start far away deep in space, off to the side
  avatarGroup.position.set(18, -8, camera.position.z - 60);
  avatarGroup.rotation.set(0, 0, Math.PI * 1.5); // upside down tumbling
  avatarGroup.scale.setScalar(0.01); // tiny — far away
}



const KB = {
  'eeg':           'EEG & ECG Disorder Prediction: Uses CNN + BiLSTM for neurological/cardiac disorder detection from biosignals. 94% accuracy.',
  'ecg':           'EEG & ECG Disorder Prediction: Deep learning biosignal analysis with CNN + BiLSTM achieving 94% classification accuracy.',
  'skin cancer':   'Skin Cancer Classification: DRNet transfer learning classifying 7 skin lesion types from dermoscopic images with Grad-CAM visualization.',
  'skin':          'Skin Cancer Classification: DRNet transfer learning for dermoscopic lesion classification across 7 categories.',
  'ayurvedic':     'AI Ayurvedic Doctor: LLM + RAG consultations from ancient Ayurvedic texts. Provides dosha-based personalized recommendations.',
  'chatbot':       'AI Chatbots: LangGraph stateful multi-turn chatbot framework with domain-specific fine-tuning and context memory.',
  'rag':           'RAG-Based AI Agent (CIVA/CARA): Production compliance AI for CyberInsurify — policy queries, audit simulation, document generation.',
  'market':        'AI Market Trend Agent: Autonomous agent with ReAct reasoning for financial sentiment analysis and investment insights.',
  'hallucination': 'Hallucination Detection: Real-time LLM verification using Wikipedia context + Sentence Transformers semantic similarity.',
  'qeffe':         'QEFFE: Quantum Entanglement Fractal Feature Extractor — novel quantum-inspired hierarchical feature extraction algorithm.',
  'quantum':       'QEFFE: Quantum-inspired fractal feature extraction combining Qiskit and fractal math for complex dataset processing.',
  'blockchain':    'ERP using Blockchain (Corda R3): College fee management with immutable Corda ledger and multi-party consensus. Research published.',
  'corda':         'ERP using Corda R3: Blockchain-based transparent college fee ERP system that led to a published research paper.',
  'sos':           'Emergency Auto SOS: IoT device detecting accidents via accelerometer + GPS and auto-sending SOS alerts with coordinates.',
  'equipment':     'Industry Equipment Prediction: Predictive maintenance IoT device forecasting failures 48h ahead using TFLite ML model.',
  'surveillance':  'Night Surveillance Robot: Autonomous robot with night vision, motion detection, obstacle avoidance, and live streaming.',
  'v2g':           'V2G & G2V Model: EV Vehicle-to-Grid energy optimization for smart charging and renewable energy storage balancing.',
  'micromouse':    'Micromouse Robot: 1st Prize IIT Guwahati — autonomous maze solver with flood-fill algorithm and PID-controlled motors.',
  'iit':           'Micromouse: 1st Prize at IIT Guwahati! Flood-fill algorithm on STM32 with PID-tuned DC motors.',
  'robotic arm':   'Robotic Arm IoT Control System (FLAGSHIP): 6-DOF arm with 3D dashboard, gesture recognition, cloud sync, Three.js visualization.',
  'arm':           'Robotic Arm Systems: Two projects — IoT Arm (ESP32 + WebSocket control) and the FLAGSHIP system with gesture CV and 3D dashboard.',
  'kma':           'KMA Platform & ERP: Member management, events, and full ERP with finance, HR, operations, and reporting modules.',
  'strandforse':   'Strandforse Web App: Corporate platform with multi-role management, Socket.io notifications, and analytics dashboard.',
  'grampanchayat': 'Grampanchayat System: Digital rural governance — citizen services, complaints, document issuance, and fund tracking.',
  'hrms':          'HRMS System: Full HR management with attendance, leave workflows, payroll, and performance analytics.',
  'sky agro':      'Sky Agro Inventory: Agricultural stock management with crop tracking, supplier management, and seasonal analytics.',
  'gyanam':        'Gyanam India: EdTech ecosystem — Learning Platform (video streaming, quizzes) + Exam System (AI proctoring, anti-cheat).',
  'swara':         'Swara Aqua System: Smart water delivery with route optimization, IoT quality sensors, and live tracking.',
  'labour':        'Labour Link: Gig platform connecting daily-wage workers with employers via AI skill matching and geo-location discovery.',
  'blood':         'Blood Donation System: ABO-compatible donor-recipient matching with emergency alerts, camp management, and donor history.',
  'depex':         'Depex Judging Platform: Hackathon judging with multi-round evaluation, weighted scoring, and automated result generation.',
  'flagship':      'FLAGSHIP: Robotic Arm IoT Control System — 6-DOF arm with real-time 3D web dashboard, gesture recognition, cloud sync, Three.js.',
  'ai':            'Yuvraj has 7 AI/ML projects: EEG/ECG Prediction, Skin Cancer Classification, AI Ayurvedic Doctor, AI Chatbots, RAG Agent (CIVA/CARA), Market Trend Agent, and Hallucination Detection.',
  'web':           'Yuvraj has 11 Web & Software projects spanning React, Angular, Flutter, PHP — including KMA, HRMS, Gyanam, Swara Aqua, Labour Link, and more.',
  'iot':           'Yuvraj has 6 IoT/Robotics projects: Emergency SOS, Equipment Prediction, Night Surveillance Robot, V2G Model, IIT-winning Micromouse, and Robotic Arm.',
  'projects':      'Yuvraj built 28 projects: 7 AI/ML, 1 Research, 1 Blockchain, 6 IoT/Robotics, 11 Web/Software, 2 Platforms. Ask about any!',
  'experience':    'Yuvraj is an AI Software Engineer at CyberInsurify Labs (Kuwait, Remote) since March 2025, building LLM/RAG compliance systems.',
  'award':         'Awards: 🥇 1st at IIT Guwahati Micromouse, 🏆 INSPIRE MANAK (State), 🥈 2nd at National Project Competition, Research Published.',
  'education':     'B.Tech Computer Engineering at Sanjivani University (2024–2027). Diploma from DVVP Institute — 78% (2021–2024).',
  'president':     'Yuvraj is President of the Innovation Cell at Sanjivani University — driving technical events, projects, and student innovation programs.',
};

function getChatbotResponse(msg) {
  const lower = msg.toLowerCase();
  for (const [kw, resp] of Object.entries(KB)) {
    if (lower.includes(kw)) return resp;
  }
  return "🚀 I know all 28 of Yuvraj's projects! Ask about: 'AI projects', 'Micromouse', 'Blockchain ERP', 'Robotic Arm', 'HRMS', 'Hallucination Detection', or any project name.";
}

function initChatbot() {
  const btn   = document.getElementById('chatbot-btn');
  const panel = document.getElementById('chatbot-panel');
  const close = document.getElementById('chat-close-btn');
  const send  = document.getElementById('chat-send');
  const input = document.getElementById('chat-input');
  if (!btn) return;

  btn.addEventListener('click',  () => panel.classList.toggle('open'));
  close.addEventListener('click',() => panel.classList.remove('open'));
  send.addEventListener('click',  sendMsg);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
}

function sendMsg() {
  const input = document.getElementById('chat-input');
  const text  = input.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  input.value = '';
  setTimeout(() => addMsg(getChatbotResponse(text), 'bot'), 480);
}

function addMsg(text, type) {
  const wrap = document.getElementById('chat-messages');
  const el   = document.createElement('div');
  el.className   = `chat-msg ${type}`;
  el.textContent = text;
  wrap.appendChild(el);
  wrap.scrollTop = wrap.scrollHeight;
}

// ================================================================
// ── SEARCH
// ================================================================

function initSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (q.length < 2) { results.classList.remove('open'); return; }

    const matches = PROJECTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tech.some(t => t.toLowerCase().includes(q)) ||
      p.cluster.includes(q)
    ).slice(0, 7);

    if (!matches.length) { results.classList.remove('open'); return; }

    results.innerHTML = matches.map(p => {
      const c = CLUSTERS.find(x => x.id === p.cluster);
      return `<div class="search-result-item" data-id="${p.id}">
        <div class="search-result-name">${p.icon} ${p.name}</div>
        <div class="search-result-cluster" style="color:${c.hex}">${c.name}</div>
      </div>`;
    }).join('');
    results.classList.add('open');

    results.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const p = PROJECTS.find(x => x.id === +el.dataset.id);
        const c = CLUSTERS.find(x => x.id === p.cluster);
        openModal(p, c);
        const zi = CLUSTERS.findIndex(x => x.id === c.id) + 1;
        jumpToZone(zi);
        input.value = '';
        results.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#search-container')) results.classList.remove('open');
  });
}

// ================================================================
// ── JUMP NAVIGATION
// ================================================================

function initJumpButtons() {
  document.querySelectorAll('[data-zone]').forEach(el => {
    el.addEventListener('click', () => jumpToZone(+el.dataset.zone));
  });
  document.getElementById('explore-btn')?.addEventListener('click', () => jumpToZone(1));
}

function jumpToZone(zoneIndex) {
  const driver = document.getElementById('space-driver');
  if (!driver) return;
  const dH  = driver.offsetHeight - window.innerHeight;
  const top = driver.offsetTop + (ZONE_THRESHOLDS[zoneIndex] || 0) * dH + 60;
  window.scrollTo({ top, behavior:'smooth' });
}

// ================================================================
// ── MOBILE VIEW
// ================================================================

function buildMobileView() {
  const container = document.getElementById('mobile-cluster-list');
  if (!container) return;

  CLUSTERS.forEach(cluster => {
    const projs = PROJECTS.filter(p => p.cluster === cluster.id);
    const sec   = document.createElement('div');
    sec.style.cssText = 'margin-bottom:36px;';
    sec.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,0.05);">
        <span style="font-size:22px;">${cluster.icon}</span>
        <div>
          <div style="font-size:9px;font-family:'Space Mono',monospace;color:${cluster.hex};letter-spacing:.2em;text-transform:uppercase;margin-bottom:3px;">${cluster.name}</div>
          <div style="font-size:10px;color:var(--muted);font-family:'Space Mono',monospace;">${projs.length} project${projs.length !== 1 ? 's' : ''}</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${projs.map(p => `
          <div onclick="openProjectModal(${p.id})" style="background:var(--card);border:1px solid rgba(255,255,255,0.04);border-left:3px solid ${cluster.hex};padding:18px;cursor:pointer;">
            <div style="font-size:18px;margin-bottom:7px;">${p.icon}${p.flagship ? ' ★' : ''}</div>
            <div style="font-size:14px;font-weight:600;margin-bottom:7px;">${p.name}</div>
            <div style="font-size:12px;color:var(--muted);line-height:1.6;">${p.desc.substring(0,110)}…</div>
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:10px;">
              ${p.tech.slice(0,4).map(t => `<span style="font-size:9px;padding:2px 8px;background:rgba(0,212,255,0.07);border:1px solid rgba(0,212,255,0.14);color:var(--accent);font-family:'Space Mono',monospace;">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(sec);
  });
}

// ================================================================
// ── REVEAL & COUNTERS
// ================================================================

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initStatCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const tgt = +el.dataset.target;
      let cur   = 0;
      const step    = tgt / 55;
      const timer   = setInterval(() => {
        cur += step;
        if (cur >= tgt) { el.textContent = tgt; clearInterval(timer); }
        else             { el.textContent = Math.floor(cur); }
      }, 35);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
}

// ================================================================
// ── RESIZE
// ================================================================

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

// ================================================================
// ── BOOTSTRAP
// ================================================================

const isMobile = window.innerWidth <= 768;

if (!isMobile) {
  try {
    init();
  } catch (e) {
    console.error('Space engine failed to init:', e);
    document.getElementById('loading-screen').classList.add('hidden');
  }
} else {
  // Mobile: skip WebGL, just init UI
  document.getElementById('loading-screen').classList.add('hidden');
  initModal();
  initChatbot();
  buildMobileView();
  initReveal();
  initStatCounters();
}
