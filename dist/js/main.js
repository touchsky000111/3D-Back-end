const updateNormalMapTextureRepeats = import(
  "./utils/updateNormalMapTextureRepeats.js"
);
const showAlertDialog = import("./utils/showAlertDialog.js");
const padWithZero = import("./utils/padWithZero.js");

// Iterate over all controllers and apply the callback function
const forEachController = (callback) => {
  for (const key in dat.controllers) {
    if (Object.prototype.hasOwnProperty.call(dat.controllers, key)) {
      callback(dat.controllers[key]);
    }
  }
};

// Set or remove the "id" attribute on this.__li element
function setIdAttribute(id) {
  if (id) {
    this.__li.setAttribute("id", id);
  } else {
    this.__li.removeAttribute("id");
  }
  return this;
}

// Set or remove the "class" attribute on this.__li element
function setClassAttribute(className) {
  if (className) {
    this.__li.setAttribute("class", className);
  } else {
    this.__li.removeAttribute("class");
  }
  return this;
}

// Set or remove the "hidden" attribute on this.__li element
function setHiddenAttribute(hidden) {
  if (hidden) {
    this.__li.setAttribute("hidden", hidden);
  } else {
    this.__li.removeAttribute("hidden");
  }
  return this;
}

function ColorOption(e, t, a) {
  (this.categories = a || false),
    (this.name = e),
    (this.hex = t),
    (this.id = this.name.replace(/[^a-zA-Z]/gi, ""));
  a = new THREE.Color(this.hex);
  (this.r = Math.round(255 * a.r)),
    (this.g = Math.round(255 * a.g)),
    (this.b = Math.round(255 * a.b));
}

forEachController(function (e) {
  e.prototype.hasOwnProperty("id") || (e.prototype.id = setIdAttribute);
}),
  forEachController(function (e) {
    e.prototype.hasOwnProperty("class") ||
      (e.prototype.class = setClassAttribute);
  }),
  forEachController(function (e) {
    e.prototype.hasOwnProperty("hidden") ||
      (e.prototype.hidden = setHiddenAttribute);
  }),
  Detector.webgl || Detector.addGetWebGLMessage();
// INFO: 1st Variable Part
let activeColor,
  currentMaterial,
  viewState,
  hoverElement,
  currentColorName = "";

let colorOptions = [
  new ColorOption("STD W/O TRIM", "#B09976", ["trim"]),
  new ColorOption("Bone White", "#E4E4E4", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Light Gray", "#979B9A", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Shadow Gray", "#5c6262", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Black", "#15191c", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Clay", "#a39a8b", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Sierra Tan", "#b2977a", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Cocoa Brown", "#573f35", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Sand White", "#f4ebcd", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Ivory", "#f4f0d3", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Red", "#7f3832", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Dark Green", "#4b644f", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Marina Blue", "#2a5568", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Light Stone", "#c7c4a3", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Light Brown", "#6f5d4f", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Berry", "#583c3b", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Bronze", "#4b4330", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Patina Green", "#8da188", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Copper Metallic", "#9d5c26", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Hawaiian Blue", "#4b7281", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
  new ColorOption("Galvalume", "#bebebe", [
    "roof",
    "wall",
    "trim",
    "soffit",
    "interior",
    "wainscot",
    "other",
  ]),
];
// INFO: 2nd variable part
let isGlassMode = false,
  isWireframeMode = false,
  isDebugMode = false,
  // Core 3D Setup
  sceneManager,
  sceneRoot,
  mainCamera,
  renderer,
  lightGroup,
  orbitControls,
  environmentMap,
  currentModel,
  selectedMesh,
  meshGeometry,
  // materials
  isMaterialUpdateEnabled = !0,
  materialLibrary,
  defaultNormalMap,
  activeMaterial,
  shouldUpdateMaterials = false,
  // Animation
  animationMixer,
  animationClip,
  currentAnimationAction,
  previousAnimationAction,
  // Interaction
  lastHoveredItem,
  inputController,
  raycastHelper,
  activeUIElement,
  hoveredObject,
  selectedObject,
  // Camera Config
  cameraPosition,
  cameraTarget,
  // Post-processing
  bloomPass,
  toneMappingPass,
  aoPass,
  fxaaPass,
  effectComposer,
  // UI Elements
  uiRoot,
  uiOverlay,
  // Temp Variables
  // g,
  // u,
  // T,
  // b,
  // f,
  // w,
  // v,
  // Grouping Objects
  roofGroup,
  wallGroup,
  // fe,
  // we,
  windowGroup,
  snapshotBuffer,
  exportButton,
  exportPanel,
  exportedSceneData,
  // Retry Mechanism
  retryCount = 0,
  fallbackMesh,
  // Meshed
  wallMesh,
  roofMesh,
  trimMesh,
  glassMesh,
  doorMesh,
  // Material Array
  n = [null, null, null, null, null, null],
  // Flags & Settings
  isUIInitialized = false,
  materialDisplayMode = "standard",
  // Last Selected Info
  y = null,
  lastSelectedMaterial = null,
  // Loaders / Caches
  textureAtlas,
  sharedMaterialLibrary,
  colorOptionList,
  lightingSetup,
  shadowConfig,
  toneMappingConfig,
  textureCache,
  materialCache,
  modelCache,
  // Environment Maps
  skyboxHDR,
  iblDiffuse,
  reflectionProbe,
  irradianceMap,
  // Helpers
  gridHelper,
  axisHelper,
  statsMonitor,
  guiPanel,
  // Controls
  dragControls,
  selectionBox,
  transformControls,
  boundingBoxHelper,
  modelBoundingBox,
  tempBoundingBox,
  // Secondary Views
  minimapRenderer,
  orthoCamera,
  //  Model loaders
  gltfLoader,
  textureLoader,
  hdrLoader,
  dracoLoader,
  objLoader,
  mtlLoader,
  fbxLoader,
  stlLoader,
  plyLoader,
  glbLoader,
  // Config
  configMain,
  configAlt,
  configShadows,
  configCamera,
  configEnvironment,
  configTextures,
  configMesh,
  configUI,
  configSnapping,
  configPhysics,
  configAnimation,
  configLighting,
  configExport,
  configRender,
  configPreview,
  configImport,
  // Miscellaneous
  tempToolA,
  tempToolB,
  tempToolC,
  tempToolD,
  tempToolE,
  tempToolF,
  tempToolG,
  tempToolH,
  tempToolI,
  tempToolJ,
  worldTransformMatrix,
  sceneSelectionState,
  renderFrameIndex,
  transformControlHelper,
  // Render Parameters
  renderWidth = 6,
  renderHeight = 3 * renderWidth,
  // Placeholder Variables
  placeholderA,
  placeholderB,
  placeholderC,
  placeholderD,
  placeholderE,
  // Temporary Scene Parts
  sceneElementA,
  sceneElementB,
  sceneElementC,
  sceneElementD;
var mainVar,
  isHidden = false,
  isKeyboardTriggered = false,
  isInitialized = false,
  t;
(isFocused = false),
  (isGestureActive = false),
  (isTemporary = false),
  (isDollarTriggered = false),
  (isActive = false),
  (isQuiet = false),
  (viewTop = 0),
  (queryTop = 0),
  (xPosition = 0),
  (userTop = 0),
  (yPosition = 0),
  (zIndex = 0),
  // Colors
  (baseColor = new THREE.Color(11573622)),
  (trimColor = new THREE.Color(11508086)),
  (accentColor = new THREE.Color(7895160)),
  (ta = new THREE.Color(4861486));

let currentUrl = window.location.href,
  parsedUrl = new URL(currentUrl),
  scriptVersion = document.currentScript.getAttribute("data-version"),
  pathName = parsedUrl.pathname.replace(/\/+$/, ""),
  assetBaseUrl =
    "https://static.custom3dbuilder.com/metalbuildings/" + scriptVersion + "/",
  projectId = parsedUrl.searchParams.get("id"),
  dateToken = parsedUrl.searchParams.get("dt"),
  companyName =
    ((isHidden = null !== projectId && null !== dateToken),
      (l = document.currentScript.hasAttribute("data-status")
        ? document.currentScript.getAttribute("data-status")
        : "live"),
      document.currentScript.hasAttribute("data-ref") &&
      (m = document.currentScript.getAttribute("data-ref")),
      (B =
        !!document.currentScript.hasAttribute("data-color-visualizer") &&
        document.currentScript.getAttribute("data-color-visualizer")),
      document.currentScript.getAttribute("data-company-name")),
  toolName = document.currentScript.getAttribute("data-tool-name"),
  userLocale = (!isHidden && B && (isHidden = !0), "US"),
  localizationLabels =
    (document.currentScript.hasAttribute("data-localization") &&
      (userLocale = document.currentScript.getAttribute("data-localization")),
    {
      US: {
        Color: "Color",
        color: "color",
        Colors: "Colors",
        colors: "colors",
      },
      CA: {
        Color: "Colour",
        color: "colour",
        Colors: "Colours",
        colors: "colours",
      },
    }),
  meshMap = {
    1234: {
      object: "directions-1234.lwo",
    },
    ABCD: {
      object: "directions-abcd.lwo",
      N: {
        name: "Endwall B",
        short: "EWB",
        abbr: "B",
      },
      S: {
        name: "Endwall D",
        short: "EWD",
        abbr: "D",
      },
      E: {
        name: "Sidewall C",
        short: "SWC",
        abbr: "C",
      },
      W: {
        name: "Sidewall A",
        short: "SWA",
        abbr: "A",
      },
      NE: {
        name: "Corner BC",
        short: "BC",
        abbr: "BC",
      },
      NW: {
        name: "Corner AB",
        short: "AB",
        abbr: "AB",
      },
      SE: {
        name: "Corner CD",
        short: "CD",
        abbr: "CD",
      },
      SW: {
        name: "Corner AD",
        short: "AD",
        abbr: "AD",
      },
    },
    "Front Back Left Right": {
      object: "directions-frontBackLeftRight.lwo",
    },
    "Front End Wall": {
      object: "directions-frontEndWall.lwo",
      N: {
        name: "Front Endwall",
        short: "Front",
        abbr: "F",
      },
      S: {
        name: "Back Endwall",
        short: "Back",
        abbr: "B",
      },
      E: {
        name: "Left Sidewall",
        short: "Left",
        abbr: "L",
      },
      W: {
        name: "Right Sidewall",
        short: "Right",
        abbr: "R",
      },
      NE: {
        name: "Front Left Corner",
        short: "Front Left",
        abbr: "FL",
      },
      NW: {
        name: "Front Right Corner",
        short: "Front Right",
        abbr: "FR",
      },
      SE: {
        name: "Back Left Corner",
        short: "Back Left",
        abbr: "BL",
      },
      SW: {
        name: "Back Right Corner",
        short: "Back Right",
        abbr: "BR",
      },
    },
    "Front Side Wall": {
      object: "directions-frontSideWall.lwo",
      N: {
        name: "Right Endwall",
        short: "Right",
        abbr: "R",
      },
      S: {
        name: "Left Endwall",
        short: "Left",
        abbr: "L",
      },
      E: {
        name: "Front Sidewall",
        short: "Front",
        abbr: "F",
      },
      W: {
        name: "Back Sidewall",
        short: "Back",
        abbr: "B",
      },
      NE: {
        name: "Front Right Corner",
        short: "Front Right",
        abbr: "FR",
      },
      NW: {
        name: "Back Right Corner",
        short: "Back Right",
        abbr: "BR",
      },
      SE: {
        name: "Front Left Corner",
        short: "Front Left",
        abbr: "FL",
      },
      SW: {
        name: "Back Left Corner",
        short: "Back Left",
        abbr: "BL",
      },
    },
    "Front Side Wall Reversed": {
      object: "directions-frontSideWallReversed.lwo",
      N: {
        name: "Left Endwall",
        short: "Left",
        abbr: "L",
      },
      S: {
        name: "Right Endwall",
        short: "Right",
        abbr: "R",
      },
      E: {
        name: "Back Sidewall",
        short: "Back",
        abbr: "B",
      },
      W: {
        name: "Front Sidewall",
        short: "Front",
        abbr: "F",
      },
      NE: {
        name: "Back Left Corner",
        short: "Back Left",
        abbr: "BL",
      },
      NW: {
        name: "Front Left Corner",
        short: "Front Left",
        abbr: "FL",
      },
      SE: {
        name: "Back Right Corner",
        short: "Back Right",
        abbr: "BR",
      },
      SW: {
        name: "Front Right Corner",
        short: "Front Right",
        abbr: "FR",
      },
    },
    "North Front": {
      object: "directions-northFront.lwo",
      N: {
        name: "North End Wall",
        short: "North",
        abbr: "N",
      },
      S: {
        name: "South End Wall",
        short: "South",
        abbr: "S",
      },
      E: {
        name: "East Sidewall",
        short: "East",
        abbr: "E",
      },
      W: {
        name: "West Sidewall",
        short: "West",
        abbr: "W",
      },
      NE: {
        name: "Northeast Corner",
        short: "Northeast",
        abbr: "NE",
      },
      NW: {
        name: "Northwest Corner",
        short: "Northwest",
        abbr: "NW",
      },
      SE: {
        name: "Southeast Corner",
        short: "Southeast",
        abbr: "SE",
      },
      SW: {
        name: "Southwest Corner",
        short: "Southwest",
        abbr: "SW",
      },
    },
    "South Front": {
      object: "directions-southFront.lwo",
      N: {
        name: "South End Wall",
        short: "South",
        abbr: "S",
      },
      S: {
        name: "North End Wall",
        short: "North",
        abbr: "N",
      },
      E: {
        name: "West Sidewall",
        short: "West",
        abbr: "W",
      },
      W: {
        name: "East Sidewall",
        short: "East",
        abbr: "E",
      },
      NE: {
        name: "Southwest Corner",
        short: "Southwest",
        abbr: "SW",
      },
      NW: {
        name: "Southeast Corner",
        short: "Southeast",
        abbr: "SE",
      },
      SE: {
        name: "Northwest Corner",
        short: "Northwest",
        abbr: "NW",
      },
      SW: {
        name: "Northeast Corner",
        short: "Northeast",
        abbr: "NE",
      },
    },
    "Front Side Wall A": {
      object: "directions-frontSideWallA.lwo",
      N: {
        name: "Left End Wall B",
        short: "Left B",
        abbr: "L",
      },
      S: {
        name: "Right End Wall D",
        short: "Right D",
        abbr: "R",
      },
      E: {
        name: "Back Sidewall C",
        short: "Back C",
        abbr: "B",
      },
      W: {
        name: "Front Sidewall A",
        short: "Front A",
        abbr: "F",
      },
      NE: {
        name: "Back Left Corner",
        short: "Back Left",
        abbr: "BL",
      },
      NW: {
        name: "Front Left Corner",
        short: "Front Left",
        abbr: "FL",
      },
      SE: {
        name: "Back Right Corner",
        short: "Back Right",
        abbr: "BR",
      },
      SW: {
        name: "Front Right Corner",
        short: "Front Right",
        abbr: "FR",
      },
    },
  },
  frontEndWallMesh = meshMap["Front End Wall"];
selectedMesh = new dat.GUI({
  autoplace: false,
  width: 300,
  hideable: false,
});
var transformController = new To(),
  helperObject = new ho();

let meshArray = [
  {
    enabled: !0,
    fogColor: 12637405,
    skyImage: "images/sky/sky-grass.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Grass Plains",
  },
  {
    enabled: !0,
    fogColor: 7109683,
    skyImage: "images/sky/sky-grass-2.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Treed Vally",
  },
  {
    enabled: !0,
    fogColor: 9671499,
    skyImage: "images/sky/sky-grass-3.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Clearing",
  },
  {
    enabled: !0,
    fogColor: 6185017,
    skyImage: "images/sky/sky-grass-mountains.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Green Mountains",
  },
  {
    enabled: !0,
    fogColor: 8618883,
    skyImage: "images/sky/sky-mountains.jpg",
    groundImage: "images/ground/rocky/rocky_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Rocky Mountains",
  },
  {
    enabled: !0,
    fogColor: 10452824,
    skyImage: "images/sky/sky-desert.jpg",
    groundImage: "images/ground/southwest/southwest_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: false,
    friendlyName: "Desert Terrain",
  },
  {
    enabled: !0,
    fogColor: 16777215,
    skyImage: "",
    groundImage: "",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !0,
    friendlyName: "None",
  },
];

function initializeBuildingConfiguration() {
  (this.width = 30),
    (this.depth = 40),
    (this.height = 10),
    (this.roofType = "Gabled"),
    (this.asymmetrical = 0),
    (this.roofPitch = 1),
    (this.frameType = "Hybrid"),
    (this.environment = enabledEnvironments[0].friendlyName),
    (this.trussThickness = 2 / 12),
    (this.maxTrussSpacing = 10),
    (this.maxPostSpacing = this.maxTrussSpacing),
    (this.maxLeantoPostSpacing = this.maxPostSpacing),
    (this.secondaryMembers = "Wood"),
    (this.postFooting = "None"),
    (this.columnSize = "6x6"),
    (this.girtSpacing = 2),
    (this.flushGirts = false),
    (this.standingGirts = !0),
    (this.girtThickness = 3.5 / 12),
    (this.purlinSpacing = 2),
    (this.flushPurlins = false),
    (this.standingPurlins = !0),
    (this.purlinThickness = 5.5 / 12),
    (this.logoPlacement = "Peak"),
    (this.logoShape = "Standard"),
    (this.hideWalls = 0),
    (this.allowLeanToCeilingHeight = false),
    (this.roofColor = "Black"),
    (this.wallColor = "Dark Green"),
    (this.trimColor = "STD W/O TRIM"),
    (this.ridgeCapColor = "Match Roof"),
    (this.soffitColor = "Bone White"),
    (this.walkDoorColor = "Bone White"),
    (this.largeDoorColor = "Bone White"),
    (this.wainscotColor = "Black"),
    (this.boardAndBattenWoodenBarnSiding = false),
    (this.enclosedN = false),
    (this.enclosedS = false),
    (this.enclosedE = false),
    (this.enclosedW = false),
    (this.showGableDressWithOpenGableWalls = false),
    (this.wainscotAll = false),
    (this.wainscot1 = false),
    (this.wainscot2 = false),
    (this.wainscot3 = false),
    (this.wainscot4 = false),
    (this.wainscotHeight = 2.5),
    (this.baseTrim = false),
    (this.gableRoofOverhangs = 18),
    (this.eaveRoofOverhangs = 18),
    (this.gableFront = 1.5),
    (this.gableBack = 1.5),
    (this.eaveL = 1),
    (this.eavePitchL = 4),
    (this.eaveSoffitL = false),
    (this.eaveR = 1),
    (this.eavePitchR = 4),
    (this.eaveSoffitR = false),
    (this.gutters = false),
    (this.boxedOverhangs = false),
    (this.additionalFrontBays = 0),
    (this.additionalBackBays = 0),
    (this.cupola18in = 0),
    (this.cupola2 = 0),
    (this.cupola30in = 0),
    (this.cupola3 = 0),
    (this.cupola42in = 0),
    (this.cupola4 = 0),
    (this.cupolaWindow18in = 0),
    (this.cupolaWindow2 = 0),
    (this.cupolaWindow30in = 0),
    (this.cupolaWindow3 = 0),
    (this.cupolaWindow42in = 0),
    (this.cupolaWindow4 = 0),
    (this.eaveLightsEast = false),
    (this.eaveLightsWest = false),
    (this.eaveLightWidth = 48),
    (this.eaveLightHeight = 24),
    (this.eaveLightPanelsEast = false),
    (this.eaveLightPanelsWest = false),
    (this.weatherVane = "None"),
    (this.leanTo1 = false),
    (this.leanTo1CutL = 0),
    (this.leanTo1CutR = 0),
    (this.leanTo1Drop = 0),
    (this.leanTo1Length = 8),
    (this.leanTo1Depth = 8),
    (this.leanTo1Height = 8),
    (this.leanTo1Pitch = 1),
    (this.leanTo1Enclosed = !0),
    (this.leanTo1Walls = "Open"),
    (this.leanTo1WrappedPosts = false),
    (this.leanTo1MiteredPosts = false),
    (this.leanTo2 = false),
    (this.leanTo2CutL = 0),
    (this.leanTo2CutR = 0),
    (this.leanTo2Drop = 0),
    (this.leanTo2Length = 8),
    (this.leanTo2Depth = 8),
    (this.leanTo2Height = 8),
    (this.leanTo2Pitch = 1),
    (this.leanTo2Enclosed = !0),
    (this.leanTo2Walls = "Open"),
    (this.leanTo2WrappedPosts = false),
    (this.leanTo2MiteredPosts = false),
    (this.leanTo3 = false),
    (this.leanTo3CutL = 0),
    (this.leanTo3CutR = 0),
    (this.leanTo3Drop = 0),
    (this.leanTo3Length = 8),
    (this.leanTo3Depth = 8),
    (this.leanTo3Height = 8),
    (this.leanTo3Pitch = 1),
    (this.leanTo3Enclosed = !0),
    (this.leanTo3Walls = "Open"),
    (this.leanTo3WrappedPosts = false),
    (this.leanTo3MiteredPosts = false),
    (this.leanTo4 = false),
    (this.leanTo4CutL = 0),
    (this.leanTo4CutR = 0),
    (this.leanTo4Drop = 0),
    (this.leanTo4Length = 8),
    (this.leanTo4Depth = 8),
    (this.leanTo4Height = 8),
    (this.leanTo4Pitch = 1),
    (this.leanTo4Enclosed = !0),
    (this.leanTo4Walls = "Open"),
    (this.leanTo4WrappedPosts = false),
    (this.leanTo4MiteredPosts = false),
    (this.maxPorchPostSpacing = this.maxPostSpacing),
    (this.porchN = false),
    (this.porchS = false),
    (this.porchE = false),
    (this.porchW = false),
    (this.porchWrapNW = false),
    (this.porchWrapNE = false),
    (this.porchWrapSE = false),
    (this.porchWrapSW = false),
    (this.porchWrapHipNW = false),
    (this.porchWrapHipNE = false),
    (this.porchWrapHipSE = false),
    (this.porchWrapHipSW = false),
    (this.windowPictureQty = 0),
    (this.windowSliderQty = 0),
    (this.windowDoubleHungQty = 0),
    (this.windowSingleHungQty = 0),
    (this.windowTwinsetQty = 0),
    (this.windowCasementQty = 0),
    (this.windowSlopeLeftQty = 0),
    (this.windowSlopeRightQty = 0),
    (this.windowAwningQty = 0),
    (this.windowHopperQty = 0),
    (this.windowFramedOpeningQty = 0),
    (this.louverQty = 0),
    (this.mansardQty = 0),
    (this.mansardWoodQty = 0),
    (this.mansardHipQty = 0),
    (this.mansardHip2Qty = 0),
    (this.walkDoorSolidQty = 0),
    (this.walkDoorSolidDoubleQty = 0),
    (this.walkDoorHalfGlassDoubleQty = 0),
    (this.walkDoorHalfGlassQty = 0),
    (this.walkDoor6PanelQty = 0),
    (this.walkDoor6PanelDoubleQty = 0),
    (this.walkDoor6LiteQty = 0),
    (this.walkDoor9LiteQty = 0),
    (this.walkDoor9LiteDoubleQty = 0),
    (this.walkDoor9LiteNoPanelQty = 0),
    (this.walkDoorSlidingGlassDoubleQty = 0),
    (this.walkDoorFrenchDoubleDoubleQty = 0),
    (this.walkDoorAllGlassQty = 0),
    (this.walkDoorAllGlassDoubleQty = 0),
    (this.walkDoorCrossbuckQty = 0),
    (this.walkDoorEquineQty = 0),
    (this.walkDoorEquineSmoothQty = 0),
    (this.walkDoorFramedOpeningQty = 0),
    (this.garageOverheadPanelQty = 0),
    (this.garageOverheadPanelWindowQty = 0),
    (this.garageOverheadFlatQty = 0),
    (this.garageOverheadFlatWindowQty = 0),
    (this.garageOverheadFlatModernQty = 0),
    (this.garageOverheadRibbedQty = 0),
    (this.garageSlideQty = 0),
    (this.garageSlideLeftQty = 0),
    (this.garageSlideRightQty = 0),
    (this.garageSlideCrossbuckQty = 0),
    (this.garageSlideCrossbuckSmoothQty = 0),
    (this.garageBiFoldQty = 0),
    (this.garageHydraulicQty = 0),
    (this.garageRollUpQty = 0),
    (this.garageFramedOpeningQty = 0),
    (this.divisionWall = false),
    (this.divisionAmount = 20),
    (this.divisionMaterial = "Steel"),
    (this.perimeterWalls = "None"),
    (this.perimeterWalls2 = "None"),
    (this.flooring2 = "None"),
    (this.ceiling = "None"),
    (this.ceiling2 = "None"),
    (this.insulationRoof = "None"),
    (this.insulationWalls = "None"),
    (this.interiorWallQty = 0),
    (this.interiorDoorQty = 0),
    (this.mezzanineBays = 0),
    (this.mezzanineStartingBay = 1),
    (this.mezzanineDepth = 0),
    (this.useMezzanineDepth = false),
    (this.mezzanineHeight = 8),
    (this.framing = "Post Frame"),
    (this.person = 0),
    (this.man = 0),
    (this.woman = 0),
    (this.truck = 0),
    (this.car = 0),
    (this.airplane = 0),
    (this.atv = 0),
    (this.jetski = 0),
    (this.combine = 0),
    (this.tractor = 0),
    (this.boat = 0),
    (this.skiBoat = 0),
    (this.driveway = 0),
    (this.grainCart = 0),
    (this.semiTruck = 0),
    (this.semiTrailer = 0),
    (this.semiTrailer53 = 0),
    (this.shippingContainer20 = 0),
    (this.shippingContainer40 = 0),
    (this.backhoe = 0),
    (this.cornHead6 = 0),
    (this.cornHead = 0),
    (this.cornHead12 = 0),
    (this.beanHead = 0),
    (this.beanHead35 = 0),
    (this.beanHead40 = 0),
    (this.desk = 0),
    (this.chair = 0),
    (this.conferenceTable = 0),
    (this.lawnMower = 0),
    (this.rv = 0),
    (this.camper = 0),
    (this.horseStall = 0),
    (this.hayBales = 0),
    (this.workbench = 0),
    (this.airCompressor = 0),
    (this.cultivator = 0),
    (this.utv = 0),
    (this.kitchenChair = 0),
    (this.nightStand = 0),
    (this.coffeeTable = 0),
    (this.endTable = 0),
    (this.version = scriptVersion);
}
(enabledEnvironments = meshArray.filter((e) => !0 === e.enabled)),
  (initializeBuildingConfiguration.prototype.settings = {
    roofPitchMin: 1,
    roofPitchMax: 4,
    showPostsWithOpenGableWall: false,
    showLeantoWallTriangleWhenOpen: false,
    showExtensionTriangleWhenOpen: !0,
    firstGirtSpacingOffGround: 3,
    shadows: "medium",
    ground: "grass",
    showWatermark: !0,
    watermarkOpacity: 0.15,
    watermarkOnConcrete: !0,
    showLogoOnTruss: false,
    downspountsOnEndsOnly: !0,
    ridgidFrameStraightColumns: false,
    disclaimerButtonText: "Disclaimer",
    disclaimerText:
      "The 3D Designer is not intended to create a physically accurate or structurally sound representation of a building. It is for visualization only and should not be considered a substitute for proper engineering, drawings, or building plans. Due to variations in displays, colors may not be accurately portrayed on all devices. We highly recommend requesting physical color samples.",
    boxedEaves: false,
    boxedEavesMatchTrim: !0,
    postsOnGableRoofOverhangsOver: 2,
    enclosedGableRoofOverhangTriangles: false,
    woodenPorchPosts: !0,
    variableLargeDoorSizes: !0,
    leantoRoofOverhangsFollowMainRoof: !0,
    roundAllButMinimumRoofPitch: false,
    showPostFrameBottomPlate: false,
    restrictPeakOfCoverdGablesToEaveHeight: !0,
    restrictEaveOfCoverdGablesToEaveHeight: !0,
    wrappedPorchPostColorMatches: "trimColor",
    vaultedCeiling: false,
    showPorchMidPostsOnEndwallsOnly: false,
    showPorchPostsOnEndwallsOnly: false,
    orientCeilingPanelsToWidth: !0,
    matchPeakSignBackgroundToTrimColor: false,
    customWallLogo: false,
    offerMeasurements: !0,
  }),
  (initializeBuildingConfiguration.prototype.coreBuildingDimensions =
    function () {
      return {
        width: this.width,
        depth: this.depth,
        height: this.height,
        center: {
          x: 0,
          y: 0,
          z: 0,
        },
        northEdge: this.depth / 2,
        southEdge: this.depth / -2,
        eastEdge: this.width / -2,
        westEdge: this.width / 2,
      };
    }),
  (initializeBuildingConfiguration.prototype.buildingWithLeantoDimensions =
    function () {
      this.coreBuildingDimensions().width, this.coreBuildingDimensions().depth;
      var e = this.coreBuildingDimensions().height;
      let t = this.coreBuildingDimensions().northEdge,
        a = this.coreBuildingDimensions().southEdge,
        o = this.coreBuildingDimensions().eastEdge,
        i = this.coreBuildingDimensions().westEdge;
      ma.leanTo1 && (t += ma.leanTo1Depth),
        ma.leanTo3 && (a -= ma.leanTo3Depth),
        ma.leanTo2 && (o -= ma.leanTo2Depth),
        ma.leanTo4 && (i += ma.leanTo4Depth);
      var n = Math.abs(t) + Math.abs(a),
        r = Math.abs(o) + Math.abs(i),
        s = {};
      return (
        (s.x = (o + i) / 2),
        (s.y = this.peakHeight() / 2),
        (s.z = (t + a) / 2),
        {
          width: r,
          depth: n,
          height: e,
          center: s,
          northEdge: t,
          southEdge: a,
          eastEdge: o,
          westEdge: i,
        }
      );
    }),
  (initializeBuildingConfiguration.prototype.buildingWithGableExtensionsDimensions =
    function () {
      let e, t, a, o, i, n, r;
      (e =
        ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN
          ? Math.max(
            this.buildingWithLeantoDimensions().northEdge,
            this.coreBuildingDimensions().northEdge +
            ma.coveredGableExtensionNDepth
          )
          : this.buildingWithLeantoDimensions().northEdge),
        (t =
          ma.hasOwnProperty("coveredGableExtensionS") &&
            ma.coveredGableExtensionS
            ? Math.min(
              this.buildingWithLeantoDimensions().southEdge,
              this.coreBuildingDimensions().southEdge -
              ma.coveredGableExtensionSDepth
            )
            : this.buildingWithLeantoDimensions().southEdge),
        (a =
          ma.hasOwnProperty("coveredGableExtensionE") &&
            ma.coveredGableExtensionE
            ? Math.min(
              this.buildingWithLeantoDimensions().eastEdge,
              this.coreBuildingDimensions().eastEdge -
              ma.coveredGableExtensionEDepth
            )
            : this.buildingWithLeantoDimensions().eastEdge),
        (o =
          ma.hasOwnProperty("coveredGableExtensionW") &&
            ma.coveredGableExtensionW
            ? Math.max(
              this.buildingWithLeantoDimensions().westEdge,
              this.coreBuildingDimensions().westEdge +
              ma.coveredGableExtensionWDepth
            )
            : this.buildingWithLeantoDimensions().westEdge),
        (n = Math.abs(e) + Math.abs(t)),
        (i = Math.abs(a) + Math.abs(o)),
        (r = this.buildingWithLeantoDimensions().height);
      var s = {};
      return (
        (s.x = (a + o) / 2),
        (s.y = this.peakHeight() / 2),
        (s.z = (e + t) / 2),
        {
          width: i,
          depth: n,
          height: r,
          center: s,
          northEdge: e,
          southEdge: t,
          eastEdge: a,
          westEdge: o,
        }
      );
    }),
  (initializeBuildingConfiguration.prototype.buildingWithPorchesDimensions =
    function () {
      let e = this.buildingWithGableExtensionsDimensions().width,
        t = this.buildingWithGableExtensionsDimensions().depth;
      var a = this.buildingWithGableExtensionsDimensions().height,
        o = this.buildingWithGableExtensionsDimensions().northEdge,
        i = this.buildingWithGableExtensionsDimensions().southEdge,
        n = this.buildingWithGableExtensionsDimensions().eastEdge,
        r = this.buildingWithGableExtensionsDimensions().westEdge;
      let s = 0,
        l = 0,
        h = 0,
        c = 0;
      ma.porchN &&
        ((d = sceneRoot.getObjectByName("porchN-clone")),
          (s = d.userData.porchDepth),
          (t += d.userData.porchDepth)),
        ma.porchS &&
        ((d = sceneRoot.getObjectByName("porchS-clone")),
          (l = d.userData.porchDepth),
          (t += d.userData.porchDepth)),
        ma.porchE &&
        ((d = sceneRoot.getObjectByName("porchE-clone")),
          (h = d.userData.porchDepth),
          (e += d.userData.porchDepth)),
        ma.porchW &&
        ((d = sceneRoot.getObjectByName("porchW-clone")),
          (c = d.userData.porchDepth),
          (e += d.userData.porchDepth)),
        ma.porchWrapNW &&
        ((d = sceneRoot.getObjectByName("porchWrapNW-clone")),
          (s = Math.max(s, d.userData.porchDepth)),
          (c = Math.max(c, d.userData.porchDepth))),
        ma.porchWrapNE &&
        ((d = sceneRoot.getObjectByName("porchWrapNE-clone")),
          (s = Math.max(s, d.userData.porchDepth)),
          (h = Math.max(h, d.userData.porchDepth))),
        ma.porchWrapSE &&
        ((d = sceneRoot.getObjectByName("porchWrapSE-clone")),
          (l = Math.max(l, d.userData.porchDepth)),
          (h = Math.max(h, d.userData.porchDepth))),
        ma.porchWrapSW &&
        ((d = sceneRoot.getObjectByName("porchWrapSW-clone")),
          (l = Math.max(l, d.userData.porchDepth)),
          (c = Math.max(c, d.userData.porchDepth))),
        ma.porchWrapHipNW &&
        ((d = sceneRoot.getObjectByName("porchWrapHipNW-clone")),
          (s = Math.max(s, d.userData.porchDepth)),
          (c = Math.max(c, d.userData.porchDepth))),
        ma.porchWrapHipNE &&
        ((d = sceneRoot.getObjectByName("porchWrapHipNE-clone")),
          (s = Math.max(s, d.userData.porchDepth)),
          (h = Math.max(h, d.userData.porchDepth))),
        ma.porchWrapHipSE &&
        ((d = sceneRoot.getObjectByName("porchWrapHipSE-clone")),
          (l = Math.max(l, d.userData.porchDepth)),
          (h = Math.max(h, d.userData.porchDepth))),
        ma.porchWrapHipSW &&
        ((d = sceneRoot.getObjectByName("porchWrapHipSW-clone")),
          (l = Math.max(l, d.userData.porchDepth)),
          (c = Math.max(c, d.userData.porchDepth))),
        (o += s),
        (i -= l),
        (n -= h),
        (r += c),
        (e += n + r),
        (t += o + i);
      var d = {};
      return (
        (d.x = (n + r) / 2),
        (d.y = this.peakHeight() / 2),
        (d.z = (o + i) / 2),
        {
          width: e,
          depth: t,
          height: a,
          center: d,
          northEdge: o,
          southEdge: i,
          eastEdge: n,
          westEdge: r,
        }
      );
    }),
  (initializeBuildingConfiguration.prototype.roofHeightAtX = function (e) {
    e = e || 0;
    let t = this.height,
      a = 0,
      o = (this.width / 2) * (this.roofPitch / 12),
      i =
        ("Asymmetrical" == this.roofType &&
          ((a = this.asymmetrical),
            (o =
              ((this.width + Math.abs(this.asymmetrical)) / 2) *
              (this.roofPitch / 12))),
          0),
      n = 0;
    return (
      "Single Slope" == this.roofType
        ? ((i = 0 <= this.roofPitch ? this.width / -2 - e : this.width / 2 - e),
          (t += Math.abs((i * this.roofPitch) / 12)))
        : 0 <= a && e <= a
          ? ((i = Math.abs(this.width / -2 - e)),
            (t += (i * this.roofPitch) / 12))
          : a < 0 && e >= a
            ? ((i = Math.abs(this.width / 2 - e)), (t += (i * this.roofPitch) / 12))
            : 0 <= a && e >= a
              ? ((i = Math.abs(this.width / 2 - e)),
                (n = Math.abs(this.width / 2 - a)),
                (t += ri(i, 0, n, 0, o)))
              : a < 0 &&
              e <= a &&
              ((i = Math.abs(this.width / -2 - e)),
                (n = Math.abs(this.width / -2 - a)),
                (t += ri(i, 0, n, 0, o))),
      t
    );
  }),
  (initializeBuildingConfiguration.prototype.lowerChordHeightAtX = function (
    e
  ) {
    let t, a;
    return (t =
      !ma.hasOwnProperty("trussStyle") ||
        ("Scissor" != ma.trussStyle && "Raised Lower Chord" != ma.trussStyle)
        ? ma.height
        : e < 0
          ? ((a = Math.abs(ma.width / -2 - e)),
            ma.wallHeightL() + (ma.lowerChordScissorPitch * a) / 12)
          : ((a = ma.width / 2 - e),
            ma.wallHeightR() + (ma.lowerChordScissorPitch * a) / 12));
  }),
  (initializeBuildingConfiguration.prototype.peakHeight = function () {
    return "Asymmetrical" == this.roofType
      ? this.roofHeightAtX(this.asymmetrical)
      : "Single Slope" == this.roofType
        ? 0 <= this.roofPitch
          ? this.roofHeightAtX(this.width / 2)
          : this.roofHeightAtX(this.width / -2)
        : this.roofHeightAtX(0);
  }),
  (initializeBuildingConfiguration.prototype.wallHeightL = function () {
    return "Single Slope" === ma.roofType && (ma.width * ma.roofPitch) / 12 < 0
      ? ma.height + (ma.width * Math.abs(ma.roofPitch)) / 12
      : ma.height;
  }),
  (initializeBuildingConfiguration.prototype.wallHeightR = function () {
    return "Single Slope" === ma.roofType && 0 < (ma.width * ma.roofPitch) / 12
      ? ma.height + (ma.width * Math.abs(ma.roofPitch)) / 12
      : ma.height;
  });
var ma = new initializeBuildingConfiguration();

if ((isWireframeMode && console.log(ma), isHidden)) {
  isHidden = !0;
  let e = "api/v1/build/get?id=" + projectId + "&dt=" + dateToken;
  B &&
    null == projectId &&
    null == dateToken &&
    (e = "color-visualizer-default.json"),
    $.getJSON(e, function (e) {
      if (
        e.hasOwnProperty("success") &&
        false === e.success &&
        e.hasOwnProperty("errors")
      )
        console.log(e.errors);
      else if (e.hasOwnProperty("params") && null !== e.params) {
        console.log("Loading saved building"),
          isWireframeMode && console.log(e),
          e.hasOwnProperty("version")
            ? e.version !== scriptVersion &&
            window.location.replace("./v" + e.version)
            : (e.params.hasOwnProperty("weatherVane") &&
              ("true" === e.params.weatherVane || !0 === e.params.weatherVane
                ? (e.params.weatherVane = "Rooster")
                : (e.params.weatherVane = "None")),
              e.hasOwnProperty("doorsWindows") &&
              null !== e.doorsWindows &&
              0 !== Object.keys(e.doorsWindows).length &&
              (e.doorsWindows
                .filter((e) => "window3x4-clone" == e.name)
                .forEach((e) => {
                  (e.name = "windowDoubleHung-clone"),
                    (e.grid = "1"),
                    (e.scale = "3,4,0");
                }),
                e.doorsWindows
                  .filter((e) => "window3x4Shutters-clone" == e.name)
                  .forEach((e) => {
                    (e.name = "windowDoubleHung-clone"),
                      (e.grid = "1"),
                      (e.scale = "3,4,0"),
                      (e.shutters = "1");
                  }),
                e.doorsWindows
                  .filter((e) => "window4x3-clone" == e.name)
                  .forEach((e) => {
                    (e.name = "windowSlider-clone"),
                      (e.grid = "1"),
                      (e.scale = "4,3,0");
                  }),
                e.doorsWindows
                  .filter((e) => "window4x3Shutters-clone" == e.name)
                  .forEach((e) => {
                    (e.name = "windowSlider-clone"),
                      (e.grid = "1"),
                      (e.scale = "4,3,0"),
                      (e.shutters = "1");
                  }),
                e.doorsWindows
                  .filter((e) => "walkDoorEquine-clone" == e.name)
                  .forEach((e) => {
                    e.scale = "4,7,0";
                  }),
                e.doorsWindows
                  .filter((e) => "walkDoorEquineSmooth-clone" == e.name)
                  .forEach((e) => {
                    e.scale = "4,7,0";
                  }),
                e.doorsWindows
                  .filter((e) => "walkDoorSolid-clone" == e.name)
                  .forEach((e) => {
                    e.scale = "3,6.67,0";
                  }),
                e.doorsWindows
                  .filter((e) => "walkDoor9Lite-clone" == e.name)
                  .forEach((e) => {
                    e.scale = "3,6.67,0";
                  }),
                e.doorsWindows
                  .filter((e) => "walkDoorCrossbuck-clone" == e.name)
                  .forEach((e) => {
                    e.scale = "3,6.67,0";
                  }),
                e.doorsWindows
                  .filter((e) => "garageOverhead-clone" == e.name)
                  .forEach((e) => {
                    e.name = "garageOverheadPanel-clone";
                  }),
                e.doorsWindows
                  .filter((e) => "garageOverheadWindow-clone" == e.name)
                  .forEach((e) => {
                    e.name = "garageOverheadPanelWindow-clone";
                  })),
              e.hasOwnProperty("porches") &&
              null !== e.porches &&
              0 !== Object.keys(e.porches).length &&
              e.porches.forEach((e) => {
                var t = e.rotation.split(",");
                e.rotation = "0," + t[1] + "," + t[2];
              })),
          e.params.hasOwnProperty("hideWalls") && (e.params.hideWalls = 0),
          e.hasOwnProperty("porches") &&
          null !== e.porches &&
          (isInitialized = e.porches),
          e.hasOwnProperty("doorsWindows") &&
          null !== e.doorsWindows &&
          (isFocused = e.doorsWindows),
          e.hasOwnProperty("scaleItems") &&
          null !== e.scaleItems &&
          (isGestureActive = e.scaleItems),
          e.hasOwnProperty("interiorItems") &&
          null !== e.interiorItems &&
          (isTemporary = e.interiorItems);
        var a = e.params;
        for (let t in a)
          a.hasOwnProperty(t) &&
            ma.hasOwnProperty(t) &&
            ("object" != typeof a[t] || null === a[t] || Array.isArray(a[t])
              ? isNaN(a[t])
                ? ("true" !== a[t] && "false" !== a[t]) ||
                (a[t] = "true" === a[t])
                : (a[t] = parseFloat(a[t]))
              : Object.keys(a[t]).forEach((e) => {
                isNaN(a[t][e])
                  ? ("true" !== a[t][e] && "false" !== a[t][e]) ||
                  (a[t][e] = "true" === a[t][e])
                  : (a[t][e] = parseFloat(a[t][e]));
              }),
              (ma[t] = a[t]));
        Va();
      }
    });
}
var za = {},
  ka = {},
  Ia = false,
  Fa = false,
  Ga = new THREE.Vector3(),
  _a = [],
  $a = [],
  Aa = new THREE.Raycaster(),
  r = new THREE.Vector2();

function qa() {
  for (var e = TWEEN.getAll(), t = e.length - 1; 0 <= t; t--) e[t].stop();
}

function Va() {
  Qa(),
    Ua(),
    environmentMap.addEventListener("start", function () {
      (environmentMap.autoRotate = false), qa();
    }),
    orbitControls.domElement.addEventListener("mousedown", no, false),
    orbitControls.domElement.addEventListener("mousemove", ro, false),
    orbitControls.domElement.addEventListener("mouseup", so, false),
    orbitControls.domElement.addEventListener("touchstart", no, false),
    orbitControls.domElement.addEventListener("touchmove", ro, false),
    orbitControls.domElement.addEventListener("touchend", so, false),
    $(".guiColor select")
      .each(function () {
        $(this).val()
          ? $(this).addClass(
            $(this).children(":selected").val().replace(/\W/g, "")
          )
          : console.error(
            "Invalid color selected for: " +
            $(this)[0].parentElement.parentElement.innerText
          );
      })
      .on("change", function (e) {
        $(this)
          .attr("class", "")
          .addClass($(this).children(":selected").val().replace(/\W/g, ""));
      }),
    (y = null),
    (lastSelectedMaterial = null);
}

function Qa() {
  ((sceneRoot = new THREE.Scene()).background = new THREE.Color(16777215)),
    Detector.webgl
      ? (orbitControls = new THREE.WebGLRenderer({
        antialias: !0,
        preserveDrawingBuffer: !0,
      }))
      : $("#modal-loading").modal("hide");
  var e = zo(),
    e =
      ((orbitControls.shadowMap.enabled = !0),
        (orbitControls.shadowMap.type = THREE.PCFSoftShadowMap),
        (orbitControls.localClippingEnabled = !0),
        (sceneManager = orbitControls.domElement).setAttribute(
          "id",
          "viewport3D"
        ),
        document.body.appendChild(sceneManager),
        ((renderer = new THREE.PerspectiveCamera(
          60,
          e.aspectRatio,
          0.5,
          1e3
        )).name = "UserCamera"),
        renderer.position.set(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth),
        renderer.layers.enable(1),
        sceneRoot.add(renderer),
        ((lightGroup = new THREE.OrthographicCamera(
          -sceneManager.clientWidth / 2,
          sceneManager.clientWidth / 2,
          sceneManager.clientHeight / 2,
          -sceneManager.clientHeight / 2,
          1,
          1e3
        )).name = "TopView"),
        lightGroup.position.set(0, 0, 400),
        lightGroup.layers.enable(1),
        sceneRoot.add(lightGroup),
        (mainCamera = renderer),
        ((environmentMap = new THREE.OrbitControls(
          renderer,
          orbitControls.domElement
        )).enableKeys = false),
        (environmentMap.autoRotate = !0),
        (environmentMap.autoRotateSpeed = 0.03),
        (environmentMap.enableDamping = !0),
        (environmentMap.dampingFactor = 0.1),
        (environmentMap.rotateSpeed = 0.1),
        (environmentMap.minDistance = 1),
        (environmentMap.maxDistance = 250),
        (environmentMap.panSpeed = 0.1),
        (environmentMap.maxPolarAngle = Math.PI / 2 + 0.05),
        environmentMap.target.set(0, ma.height / 2, 0),
        environmentMap.addEventListener("change", () => {
          renderer.position.y <= 0.5 && (renderer.position.y = 0.5),
            (isMaterialUpdateEnabled = !0);
        }),
        B &&
        ((environmentMap.minDistance = 40), (environmentMap.enablePan = false)),
        ((currentModel = new THREE.OrbitControls(
          lightGroup,
          orbitControls.domElement
        )).enableKeys = false),
        (currentModel.enableRotate = false),
        (currentModel.screenSpacePanning = !0),
        (currentModel.minZoom = 1.25),
        (currentModel.maxZoom = 100),
        currentModel.target.set(0, 0, 0),
        currentModel.addEventListener("change", () => {
          isMaterialUpdateEnabled = !0;
        }),
      {
        quoteRequest: function () {
          // $("#modal-quote").modal("show");
        },
      }),
    e =
      (selectedMesh
        .add(e, "quoteRequest")
        .id("guiQuote")
        .name(
          '&nbsp;<i class="fas align-middle fa-clipboard-check"></i>'
        ),
      {
        print: function () {
          Mo();
        },
      }),
    // e = {
    //   print: function () {
    //     Mo();
    //   },
    // },
    e =
      (selectedMesh
        .add(e, "print")
        .id("guiPrint")
        .name('Print &nbsp;<i class="fas align-middle fa-print"></i>')
        .class("threeAcross actionButton"),
      {
        share: function () {
          $("#modal-share").modal("show"), Po();
        },
      }),
    e =
      (selectedMesh
        .add(e, "share")
        .id("guiShare")
        .name(
          'Share &nbsp;<i class="fas align-middle fa-share-alt-square"></i>'
        )
        .class("threeAcross actionButton"),
      {
        save: function () {
          $("#modal-save").modal("show");
        },
      });
  if (
    (selectedMesh
      .add(e, "save")
      .id("guiSave")
      .name('Save &nbsp;<i class="fas align-middle fa-save"></i>')
      .class("threeAcross actionButton"),
      B ||
      ((e = {
        resetCameraFunction: function () {
          mainCamera !== renderer
            ? (handleRetryAttempt(), Ro("3dView"), Bo("showWalls"))
            : (handleRetryAttempt(), Wo(!0, 1500));
        },
      }),
        selectedMesh
          .add(e, "resetCameraFunction")
          .id("guiResetCamera")
          .name("Reset View")
          .class("threeAcross actionButton"),
        (e = {
          camInOut: function () {
            So();
          },
        }),
        selectedMesh
          .add(e, "camInOut")
          .id("guiInOut")
          .name("Look Inside")
          .class("threeAcross actionButton"),
        (e = {
          hideWalls: function () {
            Bo();
          },
        }),
        selectedMesh
          .add(e, "hideWalls")
          .id("guiHideWalls")
          .name("Hide Walls")
          .class("threeAcross actionButton")),
      (sceneElementA = "Lean-tos"),
      (sceneElementB = "Lean-to"),
      (sceneElementC = "Gable Extensions"),
      (sceneElementD = "Gable Extension"),
      B || (w = selectedMesh.addFolder("Building Dimensions")),
      (e = selectedMesh.addFolder(localizationLabels[userLocale].Colors)),
      (a = selectedMesh.addFolder("Walls")),
      B || (v = selectedMesh.addFolder("Roof")),
      B || (r = selectedMesh.addFolder(sceneElementA)),
      !B &&
      (ma.hasOwnProperty("coveredGableExtensionN") ||
        ma.hasOwnProperty("coveredGableExtensionS") ||
        ma.hasOwnProperty("coveredGableExtensionE") ||
        ma.hasOwnProperty("coveredGableExtensionW")) &&
      (t = selectedMesh.addFolder(sceneElementC)),
      B || (o = selectedMesh.addFolder("Windows & Doors")),
      ma.settings.offerMeasurements && (c = selectedMesh.addFolder("Measure")),
      (y = selectedMesh.addFolder("Add for Scale")),
      B || (folderEnvironment = selectedMesh.addFolder("Environment")),
      !B)
  ) {
    ma.hasOwnProperty("location") &&
      w
        .add(ma, "location", ["Manitoba", "Saskatchewan"])
        .name("Building Location")
        .onChange(function () {
          S();
        }),
      (ma.hasOwnProperty("size")
        ? w
          .add(ma, "size", [
            "30'x40'",
            "30'x60'",
            "40'x40'",
            "40'x60'",
            "40'x80'",
          ])
          .name("Building Size")
          .listen()
        : (w
          .add(ma, "width", 10, 50)
          .step(2)
          .name("Width (ft)")
          .onChange(function () {
            "Gabled" == ma.roofType &&
              (ma.width < 12
                ? (ma.width = 12)
                : 18 == ma.width
                  ? (ma.width = 20)
                  : 22 == ma.width
                    ? (ma.width = 24)
                    : 26 == ma.width
                      ? (ma.width = 28)
                      : 34 == ma.width
                        ? (ma.width = 36)
                        : 38 == ma.width
                          ? (ma.width = 40)
                          : 40 < ma.width && (ma.width = 50)),
              "Single Slope" == ma.roofType &&
              28 < ma.width &&
              (ma.width = 28),
              S();
          }),
          w.add(ma, "depth", 10, 300).step(10).name("Length (ft)"))
      ).onChange(function () {
        S();
      }),
      w
        .add(ma, "height", 10, 18)
        .step(2)
        .name("Height (ft)")
        .onChange(function () {
          console.log("Height changed"),
            S();
        }),
      w
        .add(ma, "roofType", ["Gabled", "Single Slope"])
        .name("Roof Type")
        .listen()
        .onChange(function () {
          "Single Slope" === ma.roofType
            ? (ma.roofPitch = 1)
            : ma.width <= 30
              ? (ma.roofPitch = 4)
              : (ma.roofPitch = 3),
            oo();
        }),
      w
        .add(ma, "asymmetrical", -20, 20)
        .step(1)
        .name("Asymmetrical")
        .onChange(function () {
          S();
        }),
      w
        .add(
          ma,
          "roofPitch",
          ma.settings.roofPitchMin,
          ma.settings.roofPitchMax
        )
        .step(1)
        .name('Roof Pitch / 12"')
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("trussStyle") &&
      w
        .add(ma, "trussStyle", ["Standard", "Raised Lower Chord"])
        .name("Truss Type")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("lowerChordScissorPitch") &&
      w
        .add(ma, "lowerChordScissorPitch", 1, 3)
        .step(1)
        .name('Lower Chord Pitch / 12"')
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("frameConstruction") &&
      w
        .add(ma, "frameConstruction", [
          "Open Web Tapered",
          "Residential Flush",
        ])
        .name("Column Type")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("splashBoard") &&
      w
        .add(ma, "splashBoard", ["Standard", "Morton DuraPlank"])
        .name("Splash Board")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("postType") &&
      w
        .add(ma, "postType", [
          "6x6 Solid",
          "8x8 Solid",
          "Glue Laminated",
          "Steel Tube",
        ])
        .name("Post Type")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("columnSize") &&
      w
        .add(ma, "columnSize", ["6x6", "8x8", "10x10"])
        .name("Post Size")
        .listen()
        .onChange(function () {
          console.log("post size was changed", ma.columnSize)
          S();
        }),
      ma.hasOwnProperty("purlinType") &&
      w
        .add(ma, "purlinType", ["2x6 Wood", "2x6 Metal C-channel"])
        .name("Purlin Type")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("snowLoad") &&
      w
        .add(ma, "snowLoad", ["None", "20", "30", "40", "50", "60"])
        .name("Snow Load lbs/ft&sup2;")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("wallPanelType") &&
      w
        .add(ma, "wallPanelType", ["Royal-Rib", "Tex-Rib", "R-Panel"])
        .name("Wall Panel Type")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("roofPanelType") &&
      w
        .add(ma, "roofPanelType", ["Screw Down", "Standing Seam"])
        .name("Roof Panel Type")
        .listen()
        .onChange(function () {
          S();
        }),
      w
        .add(ma, "maxTrussSpacing", 10, 12)
        .step(2)
        .name("Post Spacing (ft)")
        .listen()
        .onChange(function () {
          (ma.maxPostSpacing = ma.maxTrussSpacing),
            (ma.maxLeantoPostSpacing = ma.maxTrussSpacing),
            S();
        }),
      ma.hasOwnProperty("framing") &&
      w
        .add(ma, "framing", ["Post Frame", "Engineered Wall/Vertical Stud"])
        .name("Framing")
        .listen()
        .onChange(function () {
          if (selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
            for (
              i = 0;
              i <
              selectedMesh.__folders["Building Dimensions"].__controllers
                .length;
              i++
            ) {
              var e =
                selectedMesh.__folders["Building Dimensions"].__controllers[
                i
                ];
              "version" === e.property &&
                ("Engineered Wall/Vertical Stud" == ma.framing
                  ? (e.domElement.parentElement.parentElement.hidden = false)
                  : (e.domElement.parentElement.parentElement.hidden = !0));
            }
        });
    let e = !0;
    "Engineered Wall/Vertical Stud" == ma.framing && (e = false),
      w
        .add(ma, "version")
        .class("message")
        .hidden(e)
        .name(
          "Note: Studs are not rendered in 3D, but will be quoted according to your selection above."
        ),
      folderEnvironment
        .add(
          ma,
          "environment",
          enabledEnvironments.map((e) => e.friendlyName)
        )
        .name("Background")
        .listen()
        .onChange(function () {
          di();
        });
  }
  (gridHelper = e
    .add(
      ma,
      "roofColor",
      colorOptions
        .filter((e) => e.categories.includes("roof"))
        .map((e) => e.name)
    )
    .class("guiColor")
    .name("Roof Color")
    .onChange(function () {
      O();
    })),
    (axisHelper = e
      .add(
        ma,
        "wallColor",
        colorOptions
          .filter((e) => e.categories.includes("wall"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Wall Color")
      .onChange(function () {
        O(), S();
      })),
    ma.hasOwnProperty("trimCornerColor") ||
    ma.hasOwnProperty("trimWallColor") ||
    (statsMonitor = e
      .add(
        ma,
        "trimColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Trim Color")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimWallColor") &&
    (guiPanel = e
      .add(
        ma,
        "trimWallColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Wall Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimRoofColor") &&
    (dragControls = e
      .add(
        ma,
        "trimRoofColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Roof Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimBaseColor") &&
    (selectionBox = e
      .add(
        ma,
        "trimBaseColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Trim Color - Base")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimGableColor") &&
    (transformControls = e
      .add(
        ma,
        "trimGableColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Trim Color - Gable")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimCornerColor") &&
    (boundingBoxHelper = e
      .add(
        ma,
        "trimCornerColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Trim Color - Corner")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimEaveColor") &&
    (modelBoundingBox = e
      .add(
        ma,
        "trimEaveColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Trim Color - Eave")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("doorWindowTrimColor") &&
    (plyLoader = e
      .add(
        ma,
        "doorWindowTrimColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Door & Window Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("windowTrimColor") &&
    (glbLoader = e
      .add(
        ma,
        "windowTrimColor",
        colorOptions
          .filter((e) => e.categories.includes("windowTrim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Window Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("doorTrimColor") &&
    (configMain = e
      .add(
        ma,
        "doorTrimColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Door Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("garageDoorTrimColor") &&
    (configAlt = e
      .add(
        ma,
        "garageDoorTrimColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Large Door Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trimEaveLightsColor") &&
    (stlLoader = e
      .add(
        ma,
        "trimEaveLightsColor",
        colorOptions
          .filter((e) => e.categories.includes("eaveLightTrim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Eave Lights Trim")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("ridgeCapColor") &&
    e
      .add(ma, "ridgeCapColor", ["Match Trim", "Match Roof"])
      .name("Ridge Cap Color")
      .onChange(function () {
        O();
      }),
    ma.hasOwnProperty("gutterColor") &&
    (mtlLoader = e
      .add(
        ma,
        "gutterColor",
        colorOptions
          .filter((e) => e.categories.includes("gutter"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Gutter Color")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("downspoutColor") &&
    (fbxLoader = e
      .add(
        ma,
        "downspoutColor",
        colorOptions
          .filter((e) => e.categories.includes("trim"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Downspout Color")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("overheadDoorColor") &&
    (configCamera = e
      .add(
        ma,
        "overheadDoorColor",
        colorOptions
          .filter((e) => e.categories.includes("overheadDoor"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Overhead Door")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("slidingDoorColor") &&
    (configEnvironment = e
      .add(
        ma,
        "slidingDoorColor",
        colorOptions
          .filter((e) => e.categories.includes("slidingDoor"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Sliding Door")
      .onChange(function () {
        O();
      })),
    ma.hasOwnProperty("trackColor") &&
    (objLoader = e
      .add(
        ma,
        "trackColor",
        colorOptions
          .filter((e) => e.categories.includes("trackColor"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Door Track")
      .onChange(function () {
        O();
      })),
    B ||
    (minimapRenderer = e
      .add(
        ma,
        "wainscotColor",
        colorOptions
          .filter((e) => e.categories.includes("wainscot"))
          .map((e) => e.name)
      )
      .class("guiColor")
      .name("Wainscot Color")
      .onChange(function () {
        O();
      })),
    B ||
    (a
      .add(ma, "enclosedN")
      .name("Enclosed " + frontEndWallMesh.N.short)
      .listen()
      .onChange(function () {
        S();
      }),
      a
        .add(ma, "enclosedS")
        .name("Enclosed " + frontEndWallMesh.S.short)
        .listen()
        .onChange(function () {
          S();
        }),
      a
        .add(ma, "enclosedE")
        .name("Enclosed " + frontEndWallMesh.E.short)
        .listen()
        .onChange(function () {
          S();
        }),
      a
        .add(ma, "enclosedW")
        .name("Enclosed " + frontEndWallMesh.W.short)
        .listen()
        .onChange(function () {
          S();
        }),
      a
        .add(ma, "showGableDressWithOpenGableWalls")
        .name("Gable Dress")
        .onChange(function () {
          S();
        })),
    ma.hasOwnProperty("wainscotAll")
      ? a
        .add(ma, "wainscotAll")
        .name("Wainscot")
        .onChange(function () {
          (ma.wainscot1 = ma.wainscotAll),
            (ma.wainscot2 = ma.wainscotAll),
            (ma.wainscot3 = ma.wainscotAll),
            (ma.wainscot4 = ma.wainscotAll),
            S(),
            O();
        })
      : (a
        .add(ma, "wainscot1")
        .name("Wainscot " + frontEndWallMesh.N.short)
        .onChange(function () {
          S(), O();
        }),
        a
          .add(ma, "wainscot3")
          .name("Wainscot " + frontEndWallMesh.S.short)
          .onChange(function () {
            S(), O();
          }),
        a
          .add(ma, "wainscot2")
          .name("Wainscot " + frontEndWallMesh.E.short)
          .onChange(function () {
            S(), O();
          }),
        a
          .add(ma, "wainscot4")
          .name("Wainscot " + frontEndWallMesh.W.short)
          .onChange(function () {
            S(), O();
          })),
    ma.hasOwnProperty("eaveLightPanelTint") &&
    a
      .add(ma, "eaveLightPanelTint", ["Clear", "White", "Tint", "Gray Tint"])
      .name("Eave Light Tint")
      .listen()
      .onChange(function () {
        S();
      }),
    B ||
    (ma.hasOwnProperty("roofMaterial") &&
      v
        .add(ma, "roofMaterial", [
          "Screw Down Roof (SDR)",
          "Standing Seam Roof (SSR)",
        ])
        .name("Roof Material")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("allRoofOverhangs")
        ? v
          .add(ma, "allRoofOverhangs", 0, 2)
          .step(1)
          .name("Roof Overhangs")
          .listen()
          .onChange(function () {
            (ma.gableFront = ma.allRoofOverhangs),
              ma.hasOwnProperty("additionalFrontBays") &&
              (ma.gableFront += ma.additionalFrontBays * ma.maxPostSpacing),
              (ma.gableBack = ma.allRoofOverhangs),
              ma.hasOwnProperty("additionalBackBays") &&
              (ma.gableBack += ma.additionalBackBays * ma.maxPostSpacing),
              (ma.eaveL = ma.allRoofOverhangs),
              (ma.eaveR = ma.allRoofOverhangs),
              S();
          })
        : (ma.hasOwnProperty("gableRoofOverhangs")
          ? v
            .add(ma, "gableRoofOverhangs", 0, 24)
            .step(6)
            .name("Front & Back Overhangs (in.)")
            .listen()
            .onChange(function () {
              ma.gableRoofOverhangs < 12
                ? (ma.gableRoofOverhangs = 0)
                : ma.gableRoofOverhangs < 18 &&
                (ma.gableRoofOverhangs = 18),
                (ma.gableFront = ma.gableRoofOverhangs / 12),
                ma.hasOwnProperty("additionalFrontBays") &&
                (ma.gableFront +=
                  ma.additionalFrontBays * ma.maxPostSpacing),
                (ma.gableBack = ma.gableRoofOverhangs / 12),
                ma.hasOwnProperty("additionalBackBays") &&
                (ma.gableBack +=
                  ma.additionalBackBays * ma.maxPostSpacing),
                S();
            })
          : (v
            .add(ma, "gableFront", 0, 60)
            .step(0.5)
            .name(frontEndWallMesh.N.name + " Roof Overhang")
            .listen()
            .onChange(function () {
              ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver &&
                (ma.gableFront =
                  Math.round(ma.gableFront / ma.maxTrussSpacing) *
                  ma.maxTrussSpacing),
                S();
            }),
            v
              .add(ma, "gableBack", 0, 60)
              .step(0.5)
              .name(frontEndWallMesh.S.name + " Roof Overhang")
              .listen()
              .onChange(function () {
                ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver &&
                  (ma.gableBack =
                    Math.round(ma.gableBack / ma.maxTrussSpacing) *
                    ma.maxTrussSpacing),
                  S();
              })),
          ma.hasOwnProperty("eaveRoofOverhangs")
            ? v
              .add(ma, "eaveRoofOverhangs", 0, 24)
              .step(6)
              .name("Left & Right Overhangs (in.)")
              .listen()
              .onChange(function () {
                ma.eaveRoofOverhangs < 12
                  ? (ma.eaveRoofOverhangs = 0)
                  : ma.eaveRoofOverhangs < 18 && (ma.eaveRoofOverhangs = 18),
                  (ma.eaveL = ma.eaveRoofOverhangs / 12),
                  (ma.eaveR = ma.eaveRoofOverhangs / 12),
                  S();
              })
            : (v
              .add(ma, "eaveL", 0, 2)
              .step(1)
              .name(frontEndWallMesh.E.name + " Roof Overhang")
              .onChange(function () {
                S();
              }),
              v
                .add(ma, "eaveR", 0, 2)
                .step(1)
                .name(frontEndWallMesh.W.name + " Roof Overhang")
                .onChange(function () {
                  S();
                }))),
      ma.hasOwnProperty("additionalFrontBays") &&
      v
        .add(ma, "additionalFrontBays", 0, 5)
        .name(frontEndWallMesh.N.abbr + " Bay Add-On")
        .step(1)
        .listen()
        .onChange(function () {
          (ma.gableFront =
            ma.gableRoofOverhangs / 12 +
            ma.additionalFrontBays * ma.maxPostSpacing),
            S();
        }),
      ma.hasOwnProperty("additionalBackBays") &&
      v
        .add(ma, "additionalBackBays", 0, 5)
        .name(frontEndWallMesh.S.abbr + " Bay Add-On")
        .step(1)
        .listen()
        .onChange(function () {
          (ma.gableBack =
            ma.gableRoofOverhangs / 12 +
            ma.additionalBackBays * ma.maxPostSpacing),
            S();
        }),
      ma.hasOwnProperty("ridgeVents") &&
      v
        .add(ma, "ridgeVents", 0, 6)
        .name("Ridge Vents")
        .step(1)
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("skylights") &&
      v
        .add(ma, "skylights", 0, 24)
        .name("Skylights")
        .step(2)
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("skylightLength") &&
      v
        .add(ma, "skylightLength", 4, 8)
        .name("Skylight Length")
        .step(2)
        .onChange(function () {
          S();
        }),
      v
        .add(ma, "cupola2", 0, renderWidth)
        .step(1)
        .name("2' Cupola")
        .onChange(function () {
          to();
        }),
      v
        .add(ma, "cupola3", 0, renderWidth)
        .step(1)
        .name("3' Cupola")
        .onChange(function () {
          to();
        }),
      selectedMesh.__folders.hasOwnProperty(sceneElementA) &&
      ((a = r.addFolder(frontEndWallMesh.N.name + " " + sceneElementB))
        .add(ma, "leanTo1")
        .name("Enabled")
        .onChange(function () {
          S(), ao();
        }),
        a
          .add(ma, "leanTo1Drop", 0, 4)
          .step(1)
          .name("Drop")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo1CutL", 0, 20)
          .step(8)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo1CutR", 0, 20)
          .step(8)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo1Depth", 8, 28)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo1Pitch", 1, ma.settings.roofPitchMax)
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo1Walls", [
            "Fully Enclosed",
            "Open",
            "Gable Dress",
            "Gable Walls Only",
            "2ft Apron Wall",
            "4ft Apron Wall",
            "6ft Apron Wall",
          ])
          .name("Walls")
          .listen()
          .onChange(function () {
            S(), ao();
          }),
        (v = r.addFolder(frontEndWallMesh.E.name + " " + sceneElementB))
          .add(ma, "leanTo2")
          .name("Enabled")
          .onChange(function () {
            S(), ao();
          }),
        v
          .add(ma, "leanTo2Drop", 0, 4)
          .step(1)
          .name("Drop")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo2CutL", 0, 20)
          .step(8)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo2CutR", 0, 20)
          .step(8)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo2Depth", 8, 28)
          .step(1)
          .name("Width")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo2Pitch", 1, ma.settings.roofPitchMax)
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo2Walls", [
            "Fully Enclosed",
            "Open",
            "Gable Dress",
            "Gable Walls Only",
            "2ft Apron Wall",
            "4ft Apron Wall",
            "6ft Apron Wall",
          ])
          .name("Walls")
          .listen()
          .onChange(function () {
            S(), ao();
          }),
        (a = r.addFolder(frontEndWallMesh.S.name + " " + sceneElementB))
          .add(ma, "leanTo3")
          .name("Enabled")
          .onChange(function () {
            S(), ao();
          }),
        a
          .add(ma, "leanTo3Drop", 0, 4)
          .step(1)
          .name("Drop")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo3CutL", 0, 20)
          .step(8)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo3CutR", 0, 20)
          .step(8)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo3Depth", 8, 28)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo3Pitch", 1, ma.settings.roofPitchMax)
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "leanTo3Walls", [
            "Fully Enclosed",
            "Open",
            "Gable Dress",
            "Gable Walls Only",
            "2ft Apron Wall",
            "4ft Apron Wall",
            "6ft Apron Wall",
          ])
          .name("Walls")
          .listen()
          .onChange(function () {
            S(), ao();
          }),
        (v = r.addFolder(frontEndWallMesh.W.name + " " + sceneElementB))
          .add(ma, "leanTo4")
          .name("Enabled")
          .onChange(function () {
            S(), ao();
          }),
        v
          .add(ma, "leanTo4Drop", 0, 4)
          .step(1)
          .name("Drop")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo4CutL", 0, 20)
          .step(8)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo4CutR", 0, 20)
          .step(8)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo4Depth", 8, 28)
          .step(1)
          .name("Width")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo4Pitch", 1, ma.settings.roofPitchMax)
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "leanTo4Walls", [
            "Fully Enclosed",
            "Open",
            "Gable Dress",
            "Gable Walls Only",
            "2ft Apron Wall",
            "4ft Apron Wall",
            "6ft Apron Wall",
          ])
          .name("Walls")
          .listen()
          .onChange(function () {
            S(), ao();
          })),
      ma.hasOwnProperty("coveredGableExtensionN") &&
      selectedMesh.__folders.hasOwnProperty(sceneElementC) &&
      ((a = t.addFolder(frontEndWallMesh.N.name + " " + sceneElementD))
        .add(ma, "coveredGableExtensionN")
        .name("Enabled")
        .onChange(function () {
          S(), ao();
        }),
        a
          .add(ma, "coveredGableExtensionNHeight", 8, 20)
          .step(1)
          .name("Height")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionNCutL", 0, 20)
          .step(1)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionNCutR", 0, 20)
          .step(1)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionNDepth", 6, 24)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        a
          .add(
            ma,
            "coveredGableExtensionNPitch",
            ma.settings.roofPitchMin,
            ma.settings.roofPitchMax
          )
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionNEnclosed")
          .name("Enclosed")
          .onChange(function () {
            S(), ao();
          })),
      ma.hasOwnProperty("coveredGableExtensionS") &&
      selectedMesh.__folders.hasOwnProperty(sceneElementC) &&
      ((r = t.addFolder(frontEndWallMesh.S.name + " " + sceneElementD))
        .add(ma, "coveredGableExtensionS")
        .name("Enabled")
        .onChange(function () {
          S(), ao();
        }),
        r
          .add(ma, "coveredGableExtensionSHeight", 8, 20)
          .step(1)
          .name("Height")
          .onChange(function () {
            S();
          }),
        r
          .add(ma, "coveredGableExtensionSCutL", 0, 20)
          .step(1)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        r
          .add(ma, "coveredGableExtensionSCutR", 0, 20)
          .step(1)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        r
          .add(ma, "coveredGableExtensionSDepth", 6, 24)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        r
          .add(
            ma,
            "coveredGableExtensionSPitch",
            ma.settings.roofPitchMin,
            ma.settings.roofPitchMax
          )
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        r
          .add(ma, "coveredGableExtensionSEnclosed")
          .name("Enclosed")
          .onChange(function () {
            S(), ao();
          })),
      ma.hasOwnProperty("coveredGableExtensionE") &&
      selectedMesh.__folders.hasOwnProperty(sceneElementC) &&
      ((v = t.addFolder(frontEndWallMesh.E.name + " " + sceneElementD))
        .add(ma, "coveredGableExtensionE")
        .name("Enabled")
        .onChange(function () {
          S(), ao();
        }),
        v
          .add(ma, "coveredGableExtensionEHeight", 8, 20)
          .step(1)
          .name("Height")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "coveredGableExtensionECutL", 0, 20)
          .step(1)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "coveredGableExtensionECutR", 0, 20)
          .step(1)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "coveredGableExtensionEDepth", 6, 24)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        v
          .add(
            ma,
            "coveredGableExtensionEPitch",
            ma.settings.roofPitchMin,
            ma.settings.roofPitchMax
          )
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        v
          .add(ma, "coveredGableExtensionEEnclosed")
          .name("Enclosed")
          .onChange(function () {
            S(), ao();
          })),
      ma.hasOwnProperty("coveredGableExtensionW") &&
      selectedMesh.__folders.hasOwnProperty(sceneElementC) &&
      ((a = t.addFolder(frontEndWallMesh.W.name + " " + sceneElementD))
        .add(ma, "coveredGableExtensionW")
        .name("Enabled")
        .onChange(function () {
          S(), ao();
        }),
        a
          .add(ma, "coveredGableExtensionWHeight", 8, 20)
          .step(1)
          .name("Height")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionWCutL", 0, 20)
          .step(1)
          .name("Cut L")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionWCutR", 0, 20)
          .step(1)
          .name("Cut R")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionWDepth", 6, 24)
          .step(1)
          .name("Depth")
          .onChange(function () {
            S();
          }),
        a
          .add(
            ma,
            "coveredGableExtensionWPitch",
            ma.settings.roofPitchMin,
            ma.settings.roofPitchMax
          )
          .step(1)
          .name("Roof Pitch")
          .onChange(function () {
            S();
          }),
        a
          .add(ma, "coveredGableExtensionWEnclosed")
          .name("Enclosed")
          .onChange(function () {
            S(), ao();
          })),
      o
        .add(transformController, "addWindowSingleHung")
        .name("Add Single Hung Window"),
      o
        .add(transformController, "addWalkDoor6Panel")
        .name("Add Walk Door 6-Panel"),
      o
        .add(transformController, "addWalkDoor9Lite")
        .name("Add Walk Door 9-Lite"),
      isGlassMode &&
      (o
        .add(transformController, "addGarageSlideMortonStandardCrossbuck")
        .name("Add Diamond M Sliding Door w/ Crossbucks"),
        o
          .add(transformController, "addGarageSlideMortonStandardCrossbuckLeft")
          .name("Add Diamond M Sliding Door w/ Crossbucks (Left)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonStandardCrossbuckRight"
          )
          .name("Add Diamond M Sliding Door w/ Crossbucks (Right)"),
        o
          .add(transformController, "addGarageSlideMortonStandardMullionWindow")
          .name("Add Diamond M Sliding Door w/ Window"),
        o
          .add(
            transformController,
            "addGarageSlideMortonStandardMullionWindowLeft"
          )
          .name("Add Diamond M Sliding Door w/ Window (Left)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonStandardMullionWindowRight"
          )
          .name("Add Diamond M Sliding Door w/ Window (Right)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackMullionWindow"
          )
          .name("Add Diamond M Sliding Door w/ Window & top"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackMullionWindowLeft"
          )
          .name("Add Diamond M Sliding Door w/ Window & top (Left)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackMullionWindowRight"
          )
          .name("Add Diamond M Sliding Door w/ Window & top (Right)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackCrossbuckMullionWindow"
          )
          .name("Add Diamond M Sliding Door w/ Window & Crossbuck top"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackCrossbuckMullionWindowLeft"
          )
          .name("Add Diamond M Sliding Door w/ Window & Crossbuck top (Left)"),
        o
          .add(
            transformController,
            "addGarageSlideMortonThreeStackCrossbuckMullionWindowRight"
          )
          .name(
            "Add Diamond M Sliding Door w/ Window & Crossbuck top (Right)"
          )),
      o.add(transformController, "addGarageRollUp").name("Add Roll Up Door"),
      ma.useMezzanineDepth,
      ma.hasOwnProperty("mezzanineSupport") &&
      n
        .add(ma, "mezzanineSupport", ["Floor Support", "Roof Support"])
        .name("Mezzanine Support")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("mezzanineRailing") &&
      n
        .add(ma, "mezzanineRailing", ["None", "Framed", "Steel Covered"])
        .name("Mezzanine Railing")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("mezzanineStairs") &&
      n
        .add(ma, "mezzanineStairs", [
          "None",
          "Left Straight",
          "Right Straight",
          "Left Landing",
          "Right Landing",
        ])
        .name("Mezzanine Stairs")
        .listen()
        .onChange(function () {
          S();
        }),
      ma.hasOwnProperty("permits") &&
      folderServices.add(ma, "permits").name("Permits").listen(),
      ma.hasOwnProperty("engineerPlans") &&
      folderServices.add(ma, "engineerPlans").name("Engineer Plans").listen(),
      ma.hasOwnProperty("clearingLand") &&
      folderServices.add(ma, "clearingLand").name("Clearing Land").listen(),
      ma.hasOwnProperty("sitePrep") &&
      folderServices.add(ma, "sitePrep").name("Site Prep").listen(),
      ma.hasOwnProperty("insulation") &&
      folderServices.add(ma, "insulation").name("Insulation").listen(),
      ma.hasOwnProperty("concreteWork") &&
      folderServices.add(ma, "concreteWork").name("Concrete Work").listen(),
      ma.hasOwnProperty("concreteFoundation") &&
      folderServices
        .add(ma, "concreteFoundation")
        .name("Concrete Foundation")
        .listen(),
      ma.hasOwnProperty("concreteApproach") &&
      folderServices
        .add(ma, "concreteApproach")
        .name("Concrete Approach")
        .listen(),
      ma.hasOwnProperty("gravel") &&
      folderServices.add(ma, "gravel").name("Gravel").listen(),
      ma.hasOwnProperty("asphalt") &&
      folderServices.add(ma, "asphalt").name("Asphalt").listen(),
      ma.hasOwnProperty("masonry") &&
      folderServices.add(ma, "masonry").name("Masonry").listen(),
      ma.settings.offerMeasurements &&
      ((r = {
        measure: function () {
          $o();
        },
      }),
        (v = {
          measureClear: function () {
            _o();
          },
        }),
        c
          .add(
            {
              toggleDimensions: function () {
                wi((isUIInitialized = !isUIInitialized)),
                  isUIInitialized && ((ma.environment = "None"), di());
              },
            },
            "toggleDimensions"
          )
          .name(
            'Toggle Dimensions &nbsp;<i class="fas align-middle fa-ruler-combined"></i>'
          ),
        c
          .add(r, "measure")
          .name(
            'Make Measurements &nbsp;<i class="fas align-middle fa-tape"></i>'
          ),
        c
          .add(v, "measureClear")
          .name(
            'Clear Measurements &nbsp;<i class="fas align-middle fa-trash-alt"></i>'
          )));
  var t = y.addFolder("Vehicles"),
    a =
      (t.add(helperObject, "addTruck").name("Add Truck"),
        t.add(helperObject, "addCar").name("Add Car"),
        t.add(helperObject, "addAirplane").name("Add Airplane"),
        t.add(helperObject, "addRV").name("Add RV"),
        t.add(helperObject, "addATV").name("Add ATV"),
        t.add(helperObject, "addUTV").name("Add UTV"),
        t.add(helperObject, "addJetski").name("Add Jet Ski"),
        t.add(helperObject, "addBoat").name("Add Fishing Boat"),
        t.add(helperObject, "addSkiBoat").name("Add Ski Boat"),
        t.add(helperObject, "addCamper").name("Add Camper"),
        t.add(helperObject, "addSemiTruck").name("Add Semi Truck"),
        t.add(helperObject, "addSemiTrailer").name("Add Semi Trailer"),
        t.add(helperObject, "addSemiTrailer53").name("Add Semi Trailer 53'"),
        y.addFolder("Residential")),
    o =
      (a.add(helperObject, "addDesk").name("Add Desk"),
        a.add(helperObject, "addChair").name("Add Chair"),
        a.add(helperObject, "addKitchenTable").name("Add Kitchen Table"),
        a.add(helperObject, "addKitchenChair").name("Add Kitchen Chair"),
        a.add(helperObject, "addBed").name("Add Bed"),
        a.add(helperObject, "addCouch").name("Add Couch"),
        a.add(helperObject, "addNightStand").name("Add Night Stand"),
        a.add(helperObject, "addCoffeeTable").name("Add Coffee Table"),
        a.add(helperObject, "addEndTable").name("Add End Table"),
        a.add(helperObject, "addRecliner").name("Add Recliner"),
        a.add(helperObject, "addConferenceTable").name("Add Conference Table"),
        a.add(helperObject, "addToilet").name("Add Toilet"),
        a.add(helperObject, "addUtilitySink").name("Add Utility Sink"),
        a.add(helperObject, "addPedestalSink").name("Add Pedestal Sink"),
        a.add(helperObject, "addLawnMower").name("Add Lawn Mower"),
        a.add(helperObject, "addRidingMower").name("Add Riding Mower"),
        a.add(helperObject, "addWorkbench").name("Add Workbench"),
        a.add(helperObject, "addAirCompressor").name("Add Air Compressor"),
        y.addFolder("Farm & Equestrian")),
    n =
      (o.add(helperObject, "addTractor").name("Add Tractor"),
        o.add(helperObject, "addCombine").name("Add Combine"),
        o.add(helperObject, "addGrainCart").name("Add Grain Cart"),
        o.add(helperObject, "addBackhoe").name("Add Backhoe"),
        o.add(helperObject, "addCornHead6").name("Add Corn Head 6 Row"),
        o.add(helperObject, "addCornHead").name("Add Corn Head 8 Row"),
        o.add(helperObject, "addCornHead12").name("Add Corn Head 12 Row"),
        o.add(helperObject, "addBeanHead").name("Add Bean Head 30'"),
        o.add(helperObject, "addBeanHead35").name("Add Bean Head 35'"),
        o.add(helperObject, "addBeanHead40").name("Add Bean Head 40'"),
        o.add(helperObject, "addCultivator").name("Add Cultivator"),
        o.add(helperObject, "addHayBales").name("Add Hay Bales"),
        o.add(helperObject, "addHorseStall").name("Add Horse Stall"),
        o.add(helperObject, "addHorse").name("Add Horse"),
        y.addFolder("General")),
    r =
      (n.add(helperObject, "addMan").name("Add Man"),
        n.add(helperObject, "addWoman").name("Add Woman"),
        n.add(helperObject, "addDriveway").name("Add Driveway"),
        (B ? e : w).open(),
        selectedMesh.open(),
        ((lastHoveredItem = new THREE.Group()).name = "buildingNull"),
        sceneRoot.add(lastHoveredItem),
        ((raycastHelper = new THREE.Group()).name = "hiddenItemsNull"),
        sceneRoot.add(raycastHelper),
        ((inputController = new THREE.Group()).name = "dimensionsNull"),
        lastHoveredItem.add(inputController),
        new THREE.Group()),
    s =
      ((r.name = "lightsNull"),
        sceneRoot.add(r),
        new THREE.HemisphereLight(16770491, 16760576, 1)),
    l =
      (s.color.setHex(16777215),
        s.groundColor.setHex(16777215),
        (s.name = "HemisphereLight"),
        r.add(s),
        new THREE.AmbientLight(4210752, 1)),
    h =
      ((l.name = "AmbientLight"),
        r.add(l),
        new THREE.DirectionalLight("white", 1));
  switch (
  ((h.name = "FrontDirectionalLight"),
    h.position.set(60, 75, 120),
    h.target.position.set(0, 0, 0),
    (h.castShadow = !0),
    (h.shadow.mapSize.width = 4096),
    (h.shadow.mapSize.height = 4096),
    (h.shadow.camera.right = 110),
    (h.shadow.camera.left = -110),
    (h.shadow.camera.top = 110),
    (h.shadow.camera.bottom = -110),
    (h.shadow.camera.near = 25),
    (h.shadow.camera.far = 300),
    (h.shadow.camera.visible = !0),
    (h.shadow.bias = -5e-4),
    r.add(h),
    ma.settings.shadows)
  ) {
    case "none":
      (s.intensity = 0.5),
        (l.intensity = 0.5),
        (h.intensity = 0.5),
        (h.castShadow = false);
      break;
    case "dark":
      (s.intensity = 0.25), (l.intensity = 0.25), (h.intensity = 0.75);
      break;
    case "medium":
      (s.intensity = 0.3), (l.intensity = 0.8), (h.intensity = 0.5);
      break;
    default:
      (s.intensity = 0.5), (l.intensity = 1), (h.intensity = 0.1);
  }
  var c = new THREE.DirectionalLight("white", 0.2);
  (c.name = "BackDirectionalLight"),
    c.position.set(-30, 75, -150),
    c.target.position.set(0, 0, 0),
    r.add(c),
    ((c = new THREE.DirectionalLight("white", 0.2)).name =
      "BackLeftDirectionalLight"),
    c.position.set(-100, -75, 50),
    c.target.position.set(0, 0, 0),
    r.add(c),
    ((c = new THREE.DirectionalLight("white", 0.2)).name =
      "BackRightDirectionalLight"),
    c.position.set(75, 25, -100),
    c.target.position.set(0, 0, 0),
    r.add(c),
    (sceneRoot.fog = new THREE.Fog(12637405, 250, 1e3));
  let d, p, m, g, u, T;
  (d = new THREE.SphereGeometry(750, 25, 25)),
    (m = assetBaseUrl + "images/sky/sky-sq.jpg"),
    (u = new THREE.TextureLoader()),
    (g = u.load(m)),
    (meshGeometry = new THREE.MeshBasicMaterial({
      name: "skySphere-Material",
      map: g,
      fog: false,
    })),
    ((animationClip = new THREE.Mesh(d, meshGeometry)).material.side =
      THREE.BackSide),
    (animationClip.name = "skySphere-Mesh"),
    sceneRoot.add(animationClip),
    ma.settings.showWatermark &&
    ((m = "images/logo-watermark.png"),
      (u = new THREE.TextureLoader(f)),
      (g = u.load(m)),
      (d = new THREE.PlaneGeometry(1, 1)),
      ((meshGeometry = new THREE.MeshBasicMaterial({
        name: "watermark",
        map: g,
        opacity: ma.settings.watermarkOpacity,
        transparent: !0,
      })).depthTest = false),
      (meshGeometry.polygonOffset = !0),
      (meshGeometry.polygonOffsetFactor = -1),
      ((exportPanel = new THREE.Mesh(d, meshGeometry)).name = "watermark"),
      (exportPanel.castShadow = false),
      (exportPanel.receiveShadow = false),
      exportPanel.position.set(0, 0, -1.25),
      mainCamera.add(exportPanel)),
    ma.settings.showLogoOnTruss &&
    ((m = "images/logo-watermark.png"),
      (u = new THREE.TextureLoader()),
      ((g = u.load(m)).anisotropy =
        orbitControls.capabilities.getMaxAnisotropy()),
      (d = new THREE.PlaneGeometry(1, 1)),
      ((meshGeometry = new THREE.MeshBasicMaterial({
        name: "logo",
        map: g,
        transparent: !0,
      })).polygonOffset = !0),
      (meshGeometry.polygonOffsetFactor = -1),
      ((v = new THREE.Mesh(d, meshGeometry)).name = "postLogo"),
      (v.castShadow = false),
      (v.receiveShadow = false),
      (v.position.y = -1),
      (v.visible = false),
      (v.frustumCulled = false),
      raycastHelper.add(v)),
    (previousAnimationAction = new THREE.GridHelper(
      1e3,
      100,
      13421772,
      13421772
    )),
    (z = new THREE.GridHelper(1e3, 1200, 13421772, 13421772)),
    (previousAnimationAction.material.transparent = !0),
    (z.material.transparent = !0),
    (previousAnimationAction.material.opacity = 0.5),
    (z.material.opacity = 0.35),
    (previousAnimationAction.visible = false),
    (z.visible = false),
    sceneRoot.add(previousAnimationAction),
    sceneRoot.add(z),
    (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
    u.load(assetBaseUrl + "objects/ground.lwo", function (e) {
      e.meshes.forEach(function (t) {
        (t.visible = !0),
          (t.castShadow = false),
          (t.receiveShadow = !0),
          (t.frustumCulled = false),
          (t.name = "ground"),
          0 < t.material.length
            ? t.material.forEach(function (e) {
              t.hasOwnProperty("morphTargetInfluences") &&
                (e.morphTargets = !0),
                "MeshStandardMaterial" == e.type &&
                null !== e.roughnessMap &&
                (e.roughness = 1);
            })
            : (t.hasOwnProperty("morphTargetInfluences") &&
              (t.material.morphTargets = !0),
              "MeshStandardMaterial" == t.material.type &&
              null !== t.material.roughnessMap &&
              (t.material.roughness = 1)),
          (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
          u.load(assetBaseUrl + "objects/ground.lwo", function (e) {
            e.meshes.forEach(function (t) {
              (t.visible = !0),
                (t.castShadow = false),
                (t.receiveShadow = !0),
                (t.frustumCulled = false),
                0 < t.material.length
                  ? t.material.forEach(function (e) {
                    t.hasOwnProperty("morphTargetInfluences") &&
                      (e.morphTargets = !0),
                      "MeshStandardMaterial" == e.type &&
                      null !== e.roughnessMap &&
                      (e.roughness = 1);
                  })
                  : (t.hasOwnProperty("morphTargetInfluences") &&
                    (t.material.morphTargets = !0),
                    "MeshStandardMaterial" == t.material.type &&
                    null !== t.material.roughnessMap &&
                    (t.material.roughness = 1)),
                (animationMixer = t),
                sceneRoot.add(t),
                di();
            });
          });
      });
    }),
    (m = assetBaseUrl + "images/ground/map/mapBlend.jpg"),
    (u = new THREE.TextureLoader()),
    ((g = u.load(m)).anisotropy =
      orbitControls.capabilities.getMaxAnisotropy()),
    (g.anisotropy = 5),
    ma.hasOwnProperty("mapEnabled") &&
    (((activeUIElement = new THREE.Group()).name = "mapRotationNull"),
      (F.visible = ma.mapEnabled),
      (F.userData.previouslyShown = false),
      sceneRoot.add(activeUIElement),
      (d = new THREE.PlaneGeometry(1, 1)),
      (meshGeometry = new THREE.MeshPhongMaterial({
        name: "map1",
        alphaMap: g,
        transparent: !0,
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        fog: false,
      })),
      (object3d = new THREE.Mesh(d, meshGeometry)).rotateX(-Math.PI / 2),
      (object3d.name = "map1"),
      (object3d.renderOrder = -1),
      (object3d.castShadow = false),
      (object3d.receiveShadow = !0),
      (hoveredObject = object3d),
      F.add(object3d),
      (d = new THREE.PlaneGeometry(4, 4)).applyMatrix(
        new THREE.Matrix4().makeTranslation(0, 0, -0.01)
      ),
      (meshGeometry = new THREE.MeshPhongMaterial({
        name: "map2",
        alphaMap: g,
        transparent: !0,
        polygonOffset: !0,
        polygonOffsetFactor: 2,
        fog: false,
      })),
      ((object3d = new THREE.Mesh(d, meshGeometry)).name = "map2"),
      (object3d.receiveShadow = !(object3d.castShadow = !(object3d.renderOrder =
        -2))),
      (selectedObject = object3d),
      hoveredObject.add(object3d),
      (d = new THREE.PlaneGeometry(8, 8)).applyMatrix(
        new THREE.Matrix4().makeTranslation(0, 0, -0.02)
      ),
      (meshGeometry = new THREE.MeshPhongMaterial({
        name: "map3",
        polygonOffset: !0,
        polygonOffsetFactor: 3,
        fog: false,
      })),
      ((object3d = new THREE.Mesh(d, meshGeometry)).name = "map3"),
      (object3d.receiveShadow = !(object3d.castShadow = !(object3d.renderOrder =
        -3))),
      (cameraPosition = object3d),
      hoveredObject.add(object3d),
      (t = selectedMesh.addFolder("Place Building On Map"))
        .add(
          {
            clicked: function () {
              ci();
            },
          },
          "clicked"
        )
        .id("mapNavButton")
        .name("Open Map Details Menu"),
      t
        .add(ma, "mapRotation", -180, 180)
        .step(1)
        .name("Rotate Building")
        .onChange(function () {
          (sceneRoot.rotation.y = THREE.Math.degToRad(ma.mapRotation)),
            (lastHoveredItem.rotation.y = -THREE.Math.degToRad(ma.mapRotation)),
            (uiOverlay.rotation.y = -THREE.Math.degToRad(ma.mapRotation));
        }),
      t
        .add(ma.mapPosition, "x", -400, 400)
        .step(0.1)
        .name("Move East/West")
        .onChange(function () {
          hoveredObject.position.x = ma.mapPosition.x;
        }),
      t
        .add(ma.mapPosition, "z", -400, 400)
        .step(0.1)
        .name("Move North/South")
        .onChange(function () {
          hoveredObject.position.z = ma.mapPosition.z;
        })),
    (d = new THREE.BoxGeometry(1, 0.05, 1)),
    (m = assetBaseUrl + "images/building/concrete.jpg"),
    (u = new THREE.TextureLoader()),
    ((g = u.load(m)).anisotropy = orbitControls.getMaxAnisotropy()),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: "white",
      name: "foundation-Material",
      map: g,
      bumpMap: g,
      bumpScale: 0.04,
      specularMap: g,
    })),
    ((cameraTarget = new THREE.Mesh(d, meshGeometry)).name = "foundation"),
    (cameraTarget.castShadow = !0),
    (cameraTarget.receiveShadow = !0),
    lastHoveredItem.add(cameraTarget),
    Ya(),
    ma.settings.watermarkOnConcrete &&
    (sceneRoot.add(exportPanel),
      (exportPanel.position.y = 1.1),
      (exportPanel.rotation.x = THREE.Math.degToRad(-90)),
      exportPanel.scale.set(10, 10, 10),
      (exportPanel.frustumCulled = false),
      (exportPanel.material.opacity = 1),
      (exportPanel.material.depthTest = !0),
      (exportPanel.material.polygonOffset = false)),
    (materialLibrary = assetBaseUrl + "images/building/building-normal.jpg"),
    (activeMaterial = 12 / 9),
    isGlassMode &&
    ((materialLibrary = "images/morton-building-normal.jpg"),
      (activeMaterial = 1),
      (N = !0)),
    ((defaultNormalMap = new THREE.TextureLoader().load(
      materialLibrary
    )).anisotropy = orbitControls.getMaxAnisotropy()),
    (defaultNormalMap.wrapS = THREE.RepeatWrapping),
    (defaultNormalMap.wrapT = THREE.RepeatWrapping),
    (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
      new THREE.Matrix4().makeTranslation(0, 0.5, 0)
    ),
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: 16770491,
      wireframe: !0,
      side: THREE.DoubleSide,
      visible: false,
    })),
    ((toneMappingPass = new THREE.Mesh(d, meshGeometry)).name =
      "boundingBoxes"),
    lastHoveredItem.add(toneMappingPass),
    (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
      new THREE.Matrix4().makeTranslation(0, 0.5, 0)
    ),
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: 16770491,
      wireframe: !0,
      side: THREE.DoubleSide,
      visible: false,
    })),
    isDebugMode &&
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: 11199999,
      wireframe: !0,
      wireframeLinewidth: 3,
      side: THREE.DoubleSide,
    })),
    ((aoPass = new THREE.Mesh(d, meshGeometry)).name = "buildingBoundingBox"),
    $a.push(aoPass),
    toneMappingPass.add(aoPass),
    (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
      new THREE.Matrix4().makeTranslation(0, 0.5, 0.5)
    ),
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: 16770491,
      wireframe: !0,
      side: THREE.DoubleSide,
      visible: false,
    })),
    isDebugMode &&
    (meshGeometry = new THREE.MeshPhongMaterial({
      color: 16770491,
      wireframe: !0,
      side: THREE.DoubleSide,
    }));
  var a = new THREE.Mesh(d, meshGeometry),
    o =
      ((a.name = "leanTo1BoundingBox"),
        (a.rotation.y = 0),
        $a.push(a),
        toneMappingPass.add(a),
        (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
          new THREE.Matrix4().makeTranslation(0, 0.5, 0.5)
        ),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
          visible: false,
        })),
        isDebugMode &&
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
        })),
        new THREE.Mesh(d, meshGeometry)),
    y =
      ((o.name = "leanTo2BoundingBox"),
        (o.rotation.y = Math.PI / -2),
        $a.push(o),
        toneMappingPass.add(o),
        (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
          new THREE.Matrix4().makeTranslation(0, 0.5, 0.5)
        ),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
          visible: false,
        })),
        isDebugMode &&
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
        })),
        new THREE.Mesh(d, meshGeometry)),
    n =
      ((y.name = "leanTo3BoundingBox"),
        (y.rotation.y = Math.PI),
        $a.push(y),
        toneMappingPass.add(y),
        (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
          new THREE.Matrix4().makeTranslation(0, 0.5, 0.5)
        ),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
          visible: false,
        })),
        isDebugMode &&
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 16770491,
          wireframe: !0,
          side: THREE.DoubleSide,
        })),
        new THREE.Mesh(d, meshGeometry));
  switch (
  ((n.name = "leanTo4BoundingBox"),
    (n.rotation.y = Math.PI / 2),
    $a.push(n),
    toneMappingPass.add(n),
    ma.secondaryMembers)
  ) {
    case "Insulated Panels":
      mainVar = baseColor;
      break;
    case "Red Iron":
      mainVar = ta;
      break;
    case "Metal":
    case "Steel":
      mainVar = accentColor;
      break;
    default:
      mainVar = baseColor;
  }
  (d = new THREE.PlaneBufferGeometry()).translate(0, -0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((exportedSceneData = new THREE.Mesh(d, meshGeometry)).name = "floor"),
    (exportedSceneData.rotation.x = THREE.Math.degToRad(90)),
    (exportedSceneData.position.y = 0.03),
    (exportedSceneData.visible = false),
    lastHoveredItem.add(exportedSceneData),
    (d = new THREE.PlaneBufferGeometry()).translate(0, 0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((fallbackMesh = new THREE.Mesh(d, meshGeometry)).name = "floor2"),
    (fallbackMesh.rotation.x = THREE.Math.degToRad(90)),
    (fallbackMesh.position.y = 0.03),
    (fallbackMesh.visible = false),
    lastHoveredItem.add(fallbackMesh),
    (d = new THREE.PlaneBufferGeometry()),
    ma.settings.orientCeilingPanelsToWidth &&
    d.rotateZ(THREE.Math.degToRad(90)),
    d.translate(0.5, -0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((wallMesh = new THREE.Mesh(d, meshGeometry)).name = "ceilingL"),
    (wallMesh.rotation.x = THREE.Math.degToRad(90)),
    (wallMesh.visible = false),
    lastHoveredItem.add(wallMesh),
    (d = new THREE.PlaneBufferGeometry()),
    ma.settings.orientCeilingPanelsToWidth &&
    d.rotateZ(THREE.Math.degToRad(90)),
    d.translate(-0.5, -0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((roofMesh = new THREE.Mesh(d, meshGeometry)).name = "ceilingR"),
    (roofMesh.rotation.x = THREE.Math.degToRad(90)),
    (roofMesh.visible = false),
    lastHoveredItem.add(roofMesh),
    (d = new THREE.PlaneBufferGeometry()),
    ma.settings.orientCeilingPanelsToWidth &&
    d.rotateZ(THREE.Math.degToRad(90)),
    d.translate(0.5, 0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((trimMesh = new THREE.Mesh(d, meshGeometry)).name = "ceiling2L"),
    (trimMesh.rotation.x = THREE.Math.degToRad(90)),
    (trimMesh.visible = false),
    lastHoveredItem.add(trimMesh),
    (d = new THREE.PlaneBufferGeometry()),
    ma.settings.orientCeilingPanelsToWidth &&
    d.rotateZ(THREE.Math.degToRad(90)),
    d.translate(-0.5, 0.5, 0),
    (meshGeometry = new THREE.MeshStandardMaterial({
      color: 13369395,
      side: THREE.DoubleSide,
    })),
    ((glassMesh = new THREE.Mesh(d, meshGeometry)).name = "ceiling2R"),
    (glassMesh.rotation.x = THREE.Math.degToRad(90)),
    (glassMesh.visible = false),
    lastHoveredItem.add(glassMesh),
    (u = new THREE.TextureLoader()),
    (m = assetBaseUrl + "images/building/floor-carpet.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping);
  let b = u.load(m);
  (b.anisotropy = Math.min(orbitControls.capabilities.getMaxAnisotropy(), 5)),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolF = new THREE.MeshPhongMaterial({
      map: g,
      color: 16777215,
      specular: 3947580,
      shininess: 5,
      side: THREE.DoubleSide,
    })),
    (renderFrameIndex = new THREE.MeshPhongMaterial({
      map: b,
      color: 16777215,
      specular: 3947580,
      shininess: 5,
      side: THREE.DoubleSide,
    })),
    (m = assetBaseUrl + "images/building/floor-tile.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolD = new THREE.MeshPhongMaterial({
      map: g,
      color: 16777215,
      specular: 3947580,
      shininess: 30,
      side: THREE.DoubleSide,
    })),
    (worldTransformMatrix = new THREE.MeshPhongMaterial({
      map: b,
      color: 16777215,
      specular: 3947580,
      shininess: 30,
      side: THREE.DoubleSide,
    })),
    (m = assetBaseUrl + "images/building/floor-wood.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolE = new THREE.MeshPhongMaterial({
      map: g,
      color: 16777215,
      specular: 3947580,
      shininess: 20,
      side: THREE.DoubleSide,
    })),
    (sceneSelectionState = new THREE.MeshPhongMaterial({
      map: b,
      color: 16777215,
      specular: 3947580,
      shininess: 20,
      side: THREE.DoubleSide,
    })),
    (m = assetBaseUrl + "images/building/gravel-color.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolG = new THREE.MeshPhongMaterial({
      map: g,
      color: 16777215,
      shininess: 30,
      side: THREE.DoubleSide,
    })),
    (transformControlHelper = new THREE.MeshPhongMaterial({
      map: b,
      color: 16777215,
      shininess: 30,
      side: THREE.DoubleSide,
    })),
    (m = assetBaseUrl + "images/building/gravel-normal.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolG.normalMap = g),
    (transformControlHelper.normalMap = b),
    (m = assetBaseUrl + "images/building/gravel-rough.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolG.specularMap = g),
    (transformControlHelper.specularMap = b),
    (m = assetBaseUrl + "images/building/ceiling-tile2x2.jpg"),
    ((g = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(m)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolA = new THREE.MeshPhongMaterial({
      map: g,
      color: 16777215,
      specular: 3947580,
      shininess: 10,
      side: THREE.DoubleSide,
    })),
    (tempToolH = new THREE.MeshPhongMaterial({
      map: b,
      color: 16777215,
      specular: 3947580,
      shininess: 10,
      side: THREE.DoubleSide,
    })),
    ((g = u.load(materialLibrary)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (g.wrapS = THREE.RepeatWrapping),
    (g.wrapT = THREE.RepeatWrapping),
    ((b = u.load(materialLibrary)).anisotropy = Math.min(
      orbitControls.capabilities.getMaxAnisotropy(),
      5
    )),
    (b.wrapS = THREE.RepeatWrapping),
    (b.wrapT = THREE.RepeatWrapping),
    (tempToolB = new THREE.MeshPhongMaterial({
      normalMap: g,
      color: 16777215,
      specular: 3947580,
      shininess: 40,
      side: THREE.DoubleSide,
    })),
    (tempToolI = new THREE.MeshPhongMaterial({
      normalMap: b,
      color: 16777215,
      specular: 3947580,
      shininess: 40,
      side: THREE.DoubleSide,
    })),
    tempToolB.color.setStyle(
      colorOptions
        .filter((e) => e.name === ma.interiorPanelColor)
        .map((e) => e.hex)
    ),
    tempToolI.color.setStyle(
      colorOptions
        .filter((e) => e.name === ma.interiorPanelColor)
        .map((e) => e.hex)
    ),
    ma.settings.customWallLogo &&
    (u = new THREE.LWOLoader()).load("objects/Logo-Wall.lwo", function (e) {
      e.meshes.forEach(function (e) {
        (e.visible = false), raycastHelper.add(e);
      });
    }),
    isGlassMode &&
    ((u = new THREE.LWOLoader()).setResourcePath("images/"),
      u.load("objects/Morton.lwo", function (e) {
        e.meshes.forEach(function (t) {
          if (
            ((t.visible = false),
              raycastHelper.add(t),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0),
                    "MeshStandardMaterial" == e.type &&
                    null !== e.roughnessMap &&
                    (e.roughness = 1);
                })
                : (t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0),
                  "MeshStandardMaterial" == t.material.type &&
                  null !== t.material.roughnessMap &&
                  (t.material.roughness = 1)),
              t.name.startsWith("weatherVane"))
          )
            for (let e = 1; e <= renderHeight; e++) {
              var a = t.clone();
              (a.visible = false),
                (a.name = t.name + "-" + e),
                lastHoveredItem.add(a);
            }
        });
      })),
    (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
    u.load(assetBaseUrl + "objects/Mansards.lwo", function (e) {
      e.meshes.forEach(function (t) {
        (t.visible = false),
          (t.castShadow = !0),
          (t.receiveShadow = !0),
          (t.frustumCulled = false),
          0 < t.material.length
            ? t.material.forEach(function (e) {
              t.hasOwnProperty("morphTargetInfluences") &&
                (e.morphTargets = !0),
                "MeshStandardMaterial" == e.type &&
                null !== e.roughnessMap &&
                (e.roughness = 1);
            })
            : (t.hasOwnProperty("morphTargetInfluences") &&
              (t.material.morphTargets = !0),
              "MeshStandardMaterial" == t.material.type &&
              null !== t.material.roughnessMap &&
              (t.material.roughness = 1)),
          raycastHelper.add(t);
      });
    });
  var f = new THREE.LoadingManager(),
    e =
      ((u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        u.load(assetBaseUrl + "objects/Cupola.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false),
              (t.castShadow = !0),
              (t.receiveShadow = !0),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  (e.castShadow = !0),
                    (e.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0);
                })
                : ((t.material.castShadow = !0),
                  (t.material.receiveShadow = !0),
                  t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0)),
              raycastHelper.add(t);
            for (let e = 1; e <= renderWidth; e++) {
              var a = t.clone();
              (a.visible = false),
                (a.name = t.name + "-" + e),
                ma[t.name] >= e && (a.visible = !0),
                lastHoveredItem.add(a);
            }
          });
        }),
        (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        u.load(assetBaseUrl + "objects/WeatherVane.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false), raycastHelper.add(t);
            for (let e = 1; e <= renderHeight; e++) {
              var a = t.clone();
              (a.visible = false),
                (a.name = t.name + "-" + e),
                lastHoveredItem.add(a);
            }
          });
        }),
        ma.hasOwnProperty("ridgeVents") &&
        ((u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
          u.load(assetBaseUrl + "objects/RidgeVents.lwo", function (e) {
            e.meshes.forEach(function (e) {
              (e.visible = false), raycastHelper.add(e);
            });
          })),
        (d = new THREE.PlaneGeometry(350, 350, 1)),
        (meshGeometry = new THREE.MeshBasicMaterial({
          color: 16776960,
        })),
        isWireframeMode
          ? (meshGeometry.wireframe = !0)
          : ((meshGeometry.transparent = !0), (meshGeometry.opacity = 0)),
        ((uiOverlay = new THREE.Mesh(d, meshGeometry)).position.y = 1),
        (uiOverlay.rotation.x = THREE.Math.degToRad(-90)),
        sceneRoot.add(uiOverlay),
        ((uiOverlay = new THREE.Group()).name = "measurementsNull"),
        sceneRoot.add(uiOverlay),
        u.load(assetBaseUrl + "objects/measure.lwo", function (e) {
          e.meshes.forEach(function (e) {
            (e.visible = false),
              (e.frustumCulled = false),
              (e.userData.fileType = "lwo"),
              raycastHelper.add(e);
          });
        }),
        u.load(assetBaseUrl + "objects/WindowsDoors.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  (e.castShadow = !0),
                    (e.receiveShadow = !0),
                    e.emissive.setHex(0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0);
                })
                : ((t.material.castShadow = !0),
                  (t.material.receiveShadow = !0),
                  t.material.emissive.setHex(0),
                  t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0)),
              raycastHelper.add(t);
          });
        }),
        ((lightingSetup = new THREE.Group()).name = "RigidFramingParent"),
        lastHoveredItem.add(lightingSetup),
        ((shadowConfig = new THREE.Group()).name = "RigidFramingMaster"),
        lightingSetup.add(shadowConfig),
        (u = new THREE.LWOLoader()).load(
          assetBaseUrl + "objects/Frame-Rigid.lwo",
          function (e) {
            e.meshes.forEach(function (t) {
              (t.visible = false),
                (t.frustumCulled = false),
                0 < t.material.length
                  ? t.material.forEach(function (e) {
                    (e.castShadow = !0),
                      (e.receiveShadow = !0),
                      t.hasOwnProperty("morphTargetInfluences") &&
                      (e.morphTargets = !0);
                  })
                  : ((t.material.castShadow = !0),
                    (t.material.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (t.material.morphTargets = !0)),
                shadowConfig.add(t);
            }),
              ((T = lightingSetup.getObjectByName("columnSide").clone()).name =
                "columnSideR"),
              (T.visible = !0),
              (T.rotation.y = THREE.Math.degToRad(180)),
              (T.position.y = 0.05),
              ma.settings.ridgidFrameStraightColumns &&
              (T.morphTargetInfluences[T.morphTargetDictionary.unTaper] = 1),
              shadowConfig.add(T),
              ((T = lightingSetup.getObjectByName("columnSide").clone()).name =
                "columnSideL"),
              (T.visible = !0),
              (T.position.y = 0.05),
              ma.settings.ridgidFrameStraightColumns &&
              (T.morphTargetInfluences[T.morphTargetDictionary.unTaper] = 1),
              shadowConfig.add(T),
              ((T = lightingSetup.getObjectByName("beamRoof").clone()).name =
                "beamRoofR"),
              (T.visible = !0),
              (T.rotation.y = THREE.Math.degToRad(180)),
              (T.position.y = 0.05),
              shadowConfig.add(T),
              ((T = lightingSetup.getObjectByName("beamRoof").clone()).name =
                "beamRoofL"),
              (T.visible = !0),
              (T.position.y = 0.05),
              shadowConfig.add(T),
              shadowConfig.traverse(function (e) {
                e instanceof THREE.Mesh &&
                  "Truss" == e.material.name &&
                  e.material.color.copy(mainVar);
              });
          }
        ),
        ((materialCache = new THREE.Group()).name = "PostFrameParent"),
        lastHoveredItem.add(materialCache),
        ((modelCache = new THREE.Group()).name = "PostFrameMaster"),
        materialCache.add(modelCache),
        (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        u.load(assetBaseUrl + "objects/Frame-PostFrame.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false),
              (t.frustumCulled = false),
              (t.castShadow = !0),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  (e.castShadow = !0),
                    (e.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0);
                })
                : ((t.material.castShadow = !0),
                  (t.material.receiveShadow = !0),
                  t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0)),
              modelCache.add(t);
          }),
            ((T = materialCache.getObjectByName("columnSide").clone()).name =
              "columnSideR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            modelCache.add(T),
            ((T = materialCache.getObjectByName("columnSide").clone()).name =
              "columnSideL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            modelCache.add(T);
          e = materialCache.getObjectByName("webbing").clone();
          if (
            ((e.name = "webbingVertR1"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingVertR2"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingVertL1"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingVertL2"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingDiagR1"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingDiagR2"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingDiagL1"),
              (e.visible = !0),
              modelCache.add(e),
              ((e = materialCache.getObjectByName("webbing").clone()).name =
                "webbingDiagL2"),
              (e.visible = !0),
              modelCache.add(e),
              ((T = materialCache.getObjectByName("beamRoof").clone()).name =
                "beamRoofR"),
              (T.visible = !0),
              (T.rotation.y = THREE.Math.degToRad(180)),
              (T.position.y = 0.05),
              modelCache.add(T),
              ((T = materialCache.getObjectByName("beamRoof").clone()).name =
                "beamRoofL"),
              (T.visible = !0),
              (T.position.y = 0.05),
              modelCache.add(T),
              ((T = materialCache.getObjectByName("truss")).visible = !0),
              ma.settings.showLogoOnTruss)
          ) {
            let e = sceneRoot.getObjectByName("postLogo").clone();
            (e.visible = !0),
              (e.frustumCulled = false),
              (e.position.z = 0.3),
              (e.position.y = -0.35),
              e.scale.set(1.1, 1.1, 1.1),
              T.add(e),
              ((e = e.clone()).visible = !0),
              (e.frustumCulled = false),
              (e.rotation.y = THREE.Math.degToRad(180)),
              (e.position.z = -0.3),
              T.add(e);
          }
        }),
        ((reflectionProbe = new THREE.Group()).name = "OpenWebFrameParent"),
        (reflectionProbe.visible = false),
        lastHoveredItem.add(reflectionProbe),
        ((irradianceMap = new THREE.Group()).name = "OpenWebFrameMaster"),
        reflectionProbe.add(irradianceMap),
        (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        u.load(assetBaseUrl + "objects/Frame-OpenWebFrame.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false),
              (t.frustumCulled = false),
              (t.castShadow = !0),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  (e.castShadow = !0),
                    (e.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0);
                })
                : ((t.material.castShadow = !0),
                  (t.material.receiveShadow = !0),
                  t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0)),
              irradianceMap.add(t);
          }),
            ((T = reflectionProbe.getObjectByName("columnSide").clone()).name =
              "columnSideR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("columnSide").clone()).name =
              "columnSideL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe
              .getObjectByName("columnTubeSide")
              .clone()).name = "columnTubeSideR"),
            (T.visible = false),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe
              .getObjectByName("columnTubeSide")
              .clone()).name = "columnTubeSideL"),
            (T.visible = false),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe
              .getObjectByName("columnSideInner")
              .clone()).name = "columnSideInnerR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe
              .getObjectByName("columnSideInner")
              .clone()).name = "columnSideInnerL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("beamRoof").clone()).name =
              "beamRoofR"),
            T.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("beamRoof").clone()).name =
              "beamRoofL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("beamRoofInner").clone()).name =
              "beamRoofInnerR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            (T = reflectionProbe
              .getObjectByName("beamRoofInner")
              .clone()).applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)),
            (T.name = "beamRoofInnerL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("trussVert").clone()).name =
              "columnSideTangentR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            irradianceMap.add(T),
            ((T = reflectionProbe.getObjectByName("trussVert").clone()).name =
              "columnSideTangentL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            irradianceMap.add(T);
        }),
        ((skyboxHDR = new THREE.Group()).name = "HybridFrameParent"),
        (skyboxHDR.visible = false),
        lastHoveredItem.add(skyboxHDR),
        ((iblDiffuse = new THREE.Group()).name = "HybridFrameMaster"),
        skyboxHDR.add(iblDiffuse),
        (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        u.load(assetBaseUrl + "objects/Frame-HybridFrame.lwo", function (e) {
          e.meshes.forEach(function (t) {
            (t.visible = false),
              (t.frustumCulled = false),
              (t.castShadow = !0),
              0 < t.material.length
                ? t.material.forEach(function (e) {
                  (e.castShadow = !0),
                    (e.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (e.morphTargets = !0);
                })
                : ((t.material.castShadow = !0),
                  (t.material.receiveShadow = !0),
                  t.hasOwnProperty("morphTargetInfluences") &&
                  (t.material.morphTargets = !0)),
              iblDiffuse.add(t);
          }),
            ((T = skyboxHDR.getObjectByName("columnSide").clone()).name =
              "columnSideR"),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            iblDiffuse.add(T),
            ((T = skyboxHDR.getObjectByName("columnSide").clone()).name =
              "columnSideL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            iblDiffuse.add(T);
          e = skyboxHDR.getObjectByName("trussVert").clone();
          (e.name = "trussVertR1"),
            e.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)),
            (e.visible = !0),
            iblDiffuse.add(e),
            ((e = skyboxHDR.getObjectByName("trussVert").clone()).name =
              "trussVertR2"),
            (e.visible = !0),
            iblDiffuse.add(e),
            ((e = skyboxHDR.getObjectByName("trussVert").clone()).name =
              "trussVertL1"),
            (e.visible = !0),
            iblDiffuse.add(e),
            ((e = skyboxHDR.getObjectByName("trussVert").clone()).name =
              "trussVertL2"),
            e.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)),
            (e.visible = !0),
            iblDiffuse.add(e),
            ((T = skyboxHDR.getObjectByName("beamRoof").clone()).name =
              "beamRoofR"),
            T.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)),
            (T.visible = !0),
            (T.rotation.y = THREE.Math.degToRad(180)),
            (T.position.y = 0.05),
            iblDiffuse.add(T),
            ((T = skyboxHDR.getObjectByName("beamRoof").clone()).name =
              "beamRoofL"),
            (T.visible = !0),
            (T.position.y = 0.05),
            iblDiffuse.add(T),
            ((T = skyboxHDR.getObjectByName("trussVertL1").clone()).name =
              "crossMemberL"),
            (T.visible = !0),
            iblDiffuse.add(T),
            ((T = skyboxHDR.getObjectByName("trussVertR1").clone()).name =
              "crossMemberR"),
            (T.visible = !0),
            iblDiffuse.add(T),
            iblDiffuse.traverse(function (e) {
              e instanceof THREE.Mesh && e.material.name;
            });
        }),
        ((toneMappingConfig = new THREE.Group()).name =
          "SteelTrussFramingParent"),
        (toneMappingConfig.visible = false),
        lastHoveredItem.add(toneMappingConfig),
        ((textureCache = new THREE.Group()).name = "SteelTrussFramingMaster"),
        toneMappingConfig.add(textureCache),
        (u = new THREE.LWOLoader()).load(
          assetBaseUrl + "objects/Frame-SteelTruss.lwo",
          function (e) {
            e.meshes.forEach(function (t) {
              (t.visible = false),
                (t.frustumCulled = false),
                0 < t.material.length
                  ? t.material.forEach(function (e) {
                    (e.castShadow = !0),
                      (e.receiveShadow = !0),
                      t.hasOwnProperty("morphTargetInfluences") &&
                      (e.morphTargets = !0);
                  })
                  : ((t.material.castShadow = !0),
                    (t.material.receiveShadow = !0),
                    t.hasOwnProperty("morphTargetInfluences") &&
                    (t.material.morphTargets = !0)),
                textureCache.add(t);
            }),
              ((T = toneMappingConfig
                .getObjectByName("columnSide")
                .clone()).name = "columnSideR"),
              (T.visible = !0),
              (T.rotation.y = THREE.Math.degToRad(180)),
              (T.position.y = 0.05),
              textureCache.add(T),
              ((T = toneMappingConfig
                .getObjectByName("columnSide")
                .clone()).name = "columnSideL"),
              (T.visible = !0),
              (T.position.y = 0.05),
              textureCache.add(T);
            e = toneMappingConfig.getObjectByName("webbing").clone();
            (e.name = "webbingVertR1"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingVertR2"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingVertL1"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingVertL2"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingDiagR1"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingDiagR2"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingDiagL1"),
              (e.visible = !0),
              textureCache.add(e),
              ((e = toneMappingConfig.getObjectByName("webbing").clone()).name =
                "webbingDiagL2"),
              (e.visible = !0),
              textureCache.add(e),
              ((T = toneMappingConfig.getObjectByName("beamRoof").clone()).name =
                "beamRoofR"),
              (T.visible = !0),
              (T.rotation.y = THREE.Math.degToRad(180)),
              (T.position.y = 0.05),
              textureCache.add(T),
              ((T = toneMappingConfig.getObjectByName("beamRoof").clone()).name =
                "beamRoofL"),
              (T.visible = !0),
              (T.position.y = 0.05),
              textureCache.add(T),
              ((T = toneMappingConfig.getObjectByName("truss")).visible = !0),
              textureCache.traverse(function (e) {
                e instanceof THREE.Mesh &&
                  "Truss" == e.material.name &&
                  e.material.color.copy(mainVar);
              });
          }
        ),
        (d = new THREE.BoxGeometry(0.125, 1, 1)),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: mainVar,
          name: "framing",
          specular: 3947580,
          shininess: 40,
        })),
        new THREE.Mesh(d, meshGeometry)),
    w =
      ((e.visible = false),
        (e.castShadow = !0),
        (e.receiveShadow = false),
        (e.name = "masterSecondaryFramingPiece"),
        raycastHelper.add(e),
        (d = new THREE.BoxGeometry(0.2, 0.085, 1)).translate(-0.1, 0, 0),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 12026452,
          name: "mezzanineWood",
          specular: 5394505,
          shininess: 15,
        })),
        new THREE.Mesh(d, meshGeometry)),
    v =
      ((w.visible = false),
        (w.name = "MezzanineWood"),
        raycastHelper.add(w),
        (d = new THREE.BoxGeometry(0.2, 0.085, 1)).translate(-0.1, 0, 0),
        (meshGeometry = new THREE.MeshPhongMaterial({
          color: 7895160,
          name: "mezzanineFrame",
          specular: 5394505,
          shininess: 15,
        })),
        new THREE.Mesh(d, meshGeometry));
  (v.visible = false),
    (v.name = "Mezzanine"),
    raycastHelper.add(v),
    (d = new THREE.PlaneGeometry(1, 1, 1)),
    (meshGeometry = new THREE.MeshBasicMaterial({
      color: 65535,
    })),
    isWireframeMode
      ? (meshGeometry.wireframe = !0)
      : ((meshGeometry.transparent = !0), (meshGeometry.opacity = 0)),
    ((fxaaPass = new THREE.Mesh(d, meshGeometry)).position.y = 0.05),
    (fxaaPass.rotation.x = THREE.Math.degToRad(-90)),
    sceneRoot.add(fxaaPass),
    ((effectComposer = new THREE.Group()).name = "interiorNull"),
    sceneRoot.add(effectComposer),
    u.load(assetBaseUrl + "objects/interiorObjects.lwo", function (e) {
      e.meshes.forEach(function (e) {
        (e.visible = false),
          (e.frustumCulled = false),
          (e.userData.fileType = "lwo"),
          raycastHelper.add(e);
      }),
        ((doorMesh = sceneRoot
          .getObjectByName("interiorWall")
          .clone()).visible = ma.divisionWall),
        (doorMesh.name = "dividingWall");
      var t = new THREE.TextureLoader().load(materialLibrary),
        e =
          ((t.anisotropy = Math.min(
            orbitControls.capabilities.getMaxAnisotropy(),
            5
          )),
            (t.wrapS = THREE.RepeatWrapping),
            (t.wrapT = THREE.RepeatWrapping),
            assetBaseUrl + "images/building/OSB.jpg"),
        a = new THREE.TextureLoader().load(e);
      (a.anisotropy = Math.min(
        orbitControls.capabilities.getMaxAnisotropy(),
        5
      )),
        (a.wrapS = THREE.RepeatWrapping),
        (a.wrapT = THREE.RepeatWrapping);
      for (let e = 0; e < doorMesh.material.length; e++)
        "interiorWallUpper" === doorMesh.material[e].name &&
          ((doorMesh.material[e].normalMap = t),
            (doorMesh.userData.metalTexture = t),
            (doorMesh.userData.topMaterial = doorMesh.material[e])),
          "interiorWallLower" === doorMesh.material[e].name &&
          ((doorMesh.material[e].map = a),
            (doorMesh.userData.woodTexture = a),
            (doorMesh.userData.bottomMaterial = doorMesh.material[e])),
          doorMesh.hasOwnProperty("morphTargetInfluences") &&
          (doorMesh.material[e].morphTargets = !0);
      lastHoveredItem.add(doorMesh);
    }),
    (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
    u.load(assetBaseUrl + "objects/Building.lwo", function (e) {
      e.meshes.forEach(function (t) {
        (t.visible = false),
          (t.frustumCulled = false),
          (t.castShadow = !0),
          (t.receiveShadow = !0),
          0 < t.material.length
            ? t.material.forEach(function (e) {
              (e.castShadow = !0),
                (e.receiveShadow = !0),
                t.hasOwnProperty("morphTargetInfluences") &&
                (e.morphTargets = !0);
            })
            : ((t.material.castShadow = !0),
              (t.material.receiveShadow = !0),
              t.hasOwnProperty("morphTargetInfluences") &&
              (t.material.morphTargets = !0)),
          "roofR" == t.name &&
          (((roofGroup = t).visible = !0),
            ((wallGroup = t.GdeepCloneMaterials()).name = "roofL"),
            (wallGroup.visible = !0),
            (wallGroup.rotation.y = Math.PI),
            (wallGroup.material.side = THREE.DoubleSide),
            (wallGroup.castShadow = !0),
            (wallGroup.receiveShadow = !0),
            (wallGroup.frustumCulled = false),
            lastHoveredItem.add(wallGroup)),
          "building" == t.name &&
          (((bloomPass = t).castShadow = !0),
            (bloomPass.receiveShadow = !0),
            (bloomPass.visible = !0)),
          t.name.startsWith("Logo") &&
          t.material.forEach(function (t) {
            if ("Logo" == t.name) {
              u = new THREE.TextureLoader();
              let e = "images/logo-square.jpg";
              isGlassMode && (e = "images/logo-square.png");
              var a = u.load(e);
              (t.map = a), (t.needsUpdate = !0);
            }
          }),
          lastHoveredItem.add(t);
      });
    }),
    (u = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
    u.load(assetBaseUrl + "objects/" + frontEndWallMesh.object, function (e) {
      e.meshes.forEach(function (t) {
        (t.visible = !0),
          (t.castShadow = false),
          (t.receiveShadow = !0),
          (t.frustumCulled = false),
          0 < t.material.length
            ? t.material.forEach(function (e) {
              void 0 !== t.morphTargetDictionary && (e.morphTargets = !0),
                "MeshStandardMaterial" == e.type &&
                null !== e.roughnessMap &&
                (e.roughness = 1);
            })
            : (void 0 !== t.morphTargetDictionary &&
              (t.material.morphTargets = !0),
              "MeshStandardMaterial" == t.material.type &&
              null !== t.material.roughnessMap &&
              (t.material.roughness = 1)),
          lastHoveredItem.add(t);
      });
    }),
    (u = new THREE.LWOLoader()).load(
      assetBaseUrl + "objects/dimensions.lwo",
      function (e) {
        e.meshes.forEach(function (t) {
          (t.visible = false),
            (t.castShadow = false),
            (t.receiveShadow = false),
            (t.frustumCulled = false),
            0 < t.material.length
              ? t.material.forEach(function (e) {
                void 0 !== t.morphTargetDictionary && (e.morphTargets = !0),
                  "MeshStandardMaterial" == e.type &&
                  null !== e.roughnessMap &&
                  (e.roughness = 1);
              })
              : (void 0 !== t.morphTargetDictionary &&
                (t.material.morphTargets = !0),
                "MeshStandardMaterial" == t.material.type &&
                null !== t.material.roughnessMap &&
                (t.material.roughness = 1),
                t.material.color.setHex(0),
                t.material.emissive.setHex(0)),
            raycastHelper.add(t);
        });
      }
    ),
    (configUI = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)),
    (configSnapping = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)),
    (configPhysics = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)),
    (configAnimation = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)),
    (configLighting = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)),
    (configExport = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)),
    (configRender = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)),
    (configPreview = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)),
    (configImport = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)),
    (configTextures = [
      configUI,
      configSnapping,
      configPhysics,
      configAnimation,
    ]),
    (configMesh = [configRender, configPreview]),
    isWireframeMode &&
    ((t = new THREE.PlaneHelper(configUI, 35, 16776960)),
      lastHoveredItem.add(t)),
    isWireframeMode &&
    ((a = new THREE.PlaneHelper(configSnapping, 35, 65535)),
      lastHoveredItem.add(a)),
    isWireframeMode &&
    ((o = new THREE.PlaneHelper(configPhysics, 35, 15921664)),
      lastHoveredItem.add(o)),
    isWireframeMode &&
    ((y = new THREE.PlaneHelper(configAnimation, 35, 62194)),
      lastHoveredItem.add(y)),
    isWireframeMode &&
    ((n = new THREE.PlaneHelper(configLighting, 35, 15921664)),
      sceneRoot.add(n)),
    isWireframeMode &&
    ((f = new THREE.PlaneHelper(configExport, 35, 62194)), sceneRoot.add(f)),
    isWireframeMode &&
    ((e = new THREE.PlaneHelper(configRender, 35, 15921664)),
      lastHoveredItem.add(e)),
    isWireframeMode &&
    ((w = new THREE.PlaneHelper(configPreview, 35, 62194)),
      lastHoveredItem.add(w)),
    isWireframeMode &&
    ((v = new THREE.PlaneHelper(configImport, 35, 62194)),
      lastHoveredItem.add(v)),
    isWireframeMode &&
    (((placeholderC = new Stats()).domElement.style.position = "absolute"),
      (placeholderC.domElement.style.bottom = "0px"),
      (placeholderC.domElement.style.zIndex = 100),
      document.getElementById("builder").appendChild(placeholderC.domElement),
      console.log(sceneRoot),
      console.log(ma));
}

function Xa() {
  if (isHidden && false !== isFocused)
    for (var e in isFocused)
      isFocused.hasOwnProperty(e) &&
        d(isFocused[e].name.replace("-clone", ""), isFocused[e]);
  if (isHidden && false !== isGestureActive)
    for (var t in isGestureActive)
      isGestureActive.hasOwnProperty(t) &&
        c(
          isGestureActive[t].name.replace("scale-", "").replace("-clone", ""),
          isGestureActive[t]
        );
  if (
    (isHidden &&
      false !== isInitialized &&
      0 < isInitialized.length &&
      isInitialized.forEach(function (e) {
        var t = e.name.replace("-clone", ""),
          a = t
            .replace("porch", "")
            .replace("Wrap", "")
            .replace("Hip", "")
            .replace("GableExtension", ""),
          o = t.replace(a, "");
        Za(ma[t], a, o, e);
      }),
      isHidden && false !== isTemporary)
  )
    for (var a in isTemporary)
      isTemporary.hasOwnProperty(a) &&
        mo(isTemporary[a].name.replace("-clone", ""), isTemporary[a]);
  var o,
    i,
    n = false;
  for (o in placeholderB) n = !!placeholderB.hasOwnProperty(o);
  if (n)
    for (var r in placeholderB)
      placeholderB.hasOwnProperty(r) &&
        ((i = (r = placeholderB[r].split(","))[0]), r.shift(), d(i, r));
  (isHidden = false),
    (lastSelectedMaterial = y),
    (y = null),
    Qo(),
    sceneRoot.traverse(function (e) {
      e.userData.hasOwnProperty("hasBoundingBox") &&
        e.userData.hasBoundingBox &&
        Yo(e);
    });
}

function Ua() {
  Ko(),
    requestAnimationFrame(Ua),
    isMaterialUpdateEnabled &&
    (orbitControls.render(sceneRoot, mainCamera),
      (isMaterialUpdateEnabled = false)),
    isWireframeMode && placeholderC.update(),
    TWEEN.update(),
    environmentMap.update(),
    currentModel.update(),
    Ho();
}

function Ya() {
  var e = sceneRoot.getObjectByName("foundation"),
    t = 0,
    a = 0,
    o = 0,
    i = 0;
  ma.leanTo2 && (t = ma.leanTo2Depth),
    ma.leanTo4 && (a = ma.leanTo4Depth),
    ma.leanTo1 && (o = ma.leanTo1Depth),
    ma.leanTo3 && (i = ma.leanTo3Depth),
    ma.hasOwnProperty("coveredGableExtensionE") &&
    ma.coveredGableExtensionE &&
    ma.coveredGableExtensionEEnclosed &&
    (t = Math.max(t, ma.coveredGableExtensionEDepth)),
    ma.hasOwnProperty("coveredGableExtensionW") &&
    ma.coveredGableExtensionW &&
    ma.coveredGableExtensionWEnclosed &&
    (a = Math.max(a, ma.coveredGableExtensionWDepth)),
    ma.hasOwnProperty("coveredGableExtensionN") &&
    ma.coveredGableExtensionN &&
    ma.coveredGableExtensionNEnclosed &&
    (o = Math.max(o, ma.coveredGableExtensionNDepth)),
    ma.hasOwnProperty("coveredGableExtensionS") &&
    ma.coveredGableExtensionS &&
    ma.coveredGableExtensionSEnclosed &&
    (i = Math.max(i, ma.coveredGableExtensionSDepth)),
    (e.scale.x = ma.width + t + a + 8 / 12),
    (e.scale.z = ma.depth + o + i + 8 / 12),
    (e.position.x = (a - t) / 2),
    (e.position.z = (o - i) / 2),
    e.material.map.repeat.set(
      (ma.width + 8 / 12) / 10,
      (ma.depth + 8 / 12) / 10
    ),
    (e.material.map.offset.x = (ma.width + 8 / 12) / -20 + 0.5),
    (e.material.map.offset.y = (ma.depth + 8 / 12) / -20 + 0.5),
    void 0 !== fxaaPass &&
    ((fxaaPass.scale.x = e.scale.x - 1),
      (fxaaPass.scale.y = e.scale.z - 1),
      (fxaaPass.position.x = e.position.x),
      (fxaaPass.position.z = e.position.z)),
    isKeyboardTriggered &&
    ((a = ma.buildingWithPorchesDimensions()),
      void 0 !== sceneRoot.getObjectByName("North") &&
      a.northEdge &&
      (sceneRoot.getObjectByName("North").position.z = a.northEdge + 10),
      void 0 !== sceneRoot.getObjectByName("East") &&
      a.eastEdge &&
      (sceneRoot.getObjectByName("East").position.x = a.eastEdge - 10),
      void 0 !== sceneRoot.getObjectByName("South") &&
      a.southEdge &&
      (sceneRoot.getObjectByName("South").position.z = a.southEdge - 10),
      void 0 !== sceneRoot.getObjectByName("West")) &&
    a.westEdge &&
    (sceneRoot.getObjectByName("West").position.x = a.westEdge + 10);
}

function S() {
  let o;
  if (
    (ma.hasOwnProperty("size") &&
      ((e = ma.size.split("x")),
        (ma.width = parseInt(e[0].replace("'", ""))),
        (ma.depth = parseInt(e[1].replace("'", "")))),
      isGlassMode &&
      (ma.width <= 72
        ? ((e = ma.width % 6),
          (ma.width = e <= 3 ? ma.width - e : ma.width + 6 - e))
        : (ma.width = 81)),
      isGlassMode)
  ) {
    let e = ma.settings.roofPitchMin,
      t = ma.settings.roofPitchMax;
    if (
      (ma.width <= 66
        ? (e = 4)
        : ma.width <= 72
          ? (e = 3.5)
          : ma.width <= 81 && (e = 3),
        42 <= ma.width && (t = 4),
        70 <= ma.width && (t = 4),
        72 <= ma.width && (t = 3.5),
        81 <= ma.width && (t = 3),
        ma.roofPitch < e && (ma.roofPitch = e),
        ma.roofPitch > t && (ma.roofPitch = t),
        72 !== ma.width && (ma.roofPitch = Math.round(ma.roofPitch)),
        selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
    )
      for (
        i = 0;
        i < selectedMesh.__folders["Building Dimensions"].__controllers.length;
        i++
      ) {
        var a = selectedMesh.__folders["Building Dimensions"].__controllers[i];
        "roofPitch" === a.property && (a.min(e), a.max(t), a.updateDisplay());
      }
  } else {
    let e = ma.settings.roofPitchMin,
      t = ma.settings.roofPitchMax;
    if (
      ("Single Slope" === ma.roofType
        ? ((e = -4), (t = 4), 0 == ma.roofPitch && (ma.roofPitch = 1))
        : ((e = 3), (t = 8)),
        ma.roofPitch < e && (ma.roofPitch = e),
        ma.roofPitch > t && (ma.roofPitch = t),
        selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
    )
      for (
        i = 0;
        i < selectedMesh.__folders["Building Dimensions"].__controllers.length;
        i++
      ) {
        var n = selectedMesh.__folders["Building Dimensions"].__controllers[i];
        "roofPitch" === n.property && (n.min(e), n.max(t), n.updateDisplay());
      }
  }
  if (
    (ma.hasOwnProperty("frameConstruction") &&
      ("Weld Up" == ma.frameConstruction &&
        (ma.settings.ridgidFrameStraightColumns = !0),
        "Bolt Up" == ma.frameConstruction &&
        (ma.settings.ridgidFrameStraightColumns = false),
        (e = shadowConfig.getObjectByName("columnSideR")),
        (x = shadowConfig.getObjectByName("columnSideL")),
        ma.settings.ridgidFrameStraightColumns
          ? ((e.morphTargetInfluences[e.morphTargetDictionary.unTaper] = 1),
            (x.morphTargetInfluences[x.morphTargetDictionary.unTaper] = 1))
          : ((e.morphTargetInfluences[e.morphTargetDictionary.unTaper] = 0),
            (x.morphTargetInfluences[x.morphTargetDictionary.unTaper] = 0))),
      ma.hasOwnProperty("location"))
  ) {
    switch (ma.location) {
      case "Saskatchewan":
        (ma.flushGirts = false),
          (ma.flushPurlins = false),
          (ma.girtSpacing = 2),
          (ma.purlinSpacing = 2);
        break;
      case "Manitoba":
        (ma.flushGirts = !0),
          (ma.flushPurlins = !0),
          (ma.girtSpacing = 4),
          (ma.purlinSpacing = 2);
    }
    de !== ma.location &&
      ((de = ma.location), colorOptions.forEach(function (e) { }));
  }
  ma.secondaryMembers;
  switch (ma.secondaryMembers) {
    case "Insulated Panels":
      mainVar = baseColor;
      break;
    case "Red Iron":
      mainVar = ta;
      break;
    case "Metal":
    case "Steel":
      mainVar = accentColor;
      break;
    default:
      mainVar = baseColor;
  }
  if (
    (shadowConfig.traverse(function (e) {
      e instanceof THREE.Mesh &&
        "Truss" == e.material.name &&
        e.material.color.copy(mainVar);
    }),
      raycastHelper
        .getObjectByName("masterSecondaryFramingPiece")
        .material.color.copy(mainVar),
      ma.settings.watermarkOnConcrete &&
      (22 <= ma.width
        ? exportPanel.scale.set(20, 20, 20)
        : exportPanel.scale.set(10, 10, 10)),
      "Gabled" === ma.roofType &&
      ma.settings.roundAllButMinimumRoofPitch &&
      ma.roofPitch > ma.settings.roofPitchMin &&
      (ma.roofPitch = Math.ceil(ma.roofPitch)),
      selectedMesh.__folders.hasOwnProperty("Interior"))
  )
    for (
      let e = 0;
      e < selectedMesh.__folders.Interior.__controllers.length;
      e++
    ) {
      var z = selectedMesh.__folders.Interior.__controllers[e];
      "divisionAmount" === z.property &&
        (z.max(ma.depth),
          ma.divisionAmount > ma.depth - 5 && (ma.divisionAmount = ma.depth - 5),
          z.updateDisplay());
    }
  if (
    "Asymmetrical" === ma.roofType &&
    selectedMesh.__folders.hasOwnProperty("Building Dimensions")
  )
    for (
      let e = 0;
      e < selectedMesh.__folders["Building Dimensions"].__controllers.length;
      e++
    ) {
      var t = selectedMesh.__folders["Building Dimensions"].__controllers[e];
      "asymmetrical" === t.property &&
        ((t.domElement.parentElement.parentElement.hidden = false),
          t.min(ma.width / -2 + 3),
          t.max(ma.width / 2 - 3),
          ma.asymmetrical < ma.width / -2 + 3 &&
          (ma.asymmetrical = ma.width / -2 + 3),
          ma.asymmetrical > ma.width / 2 - 3 &&
          (ma.asymmetrical = ma.width / 2 - 3),
          t.updateDisplay());
    }
  ma.settings.hasOwnProperty("alternateTrussSpacingOver40FT") &&
    (40 < ma.width
      ? (ma.maxTrussSpacing = ma.settings.alternateTrussSpacingOver40FT.over)
      : (ma.maxTrussSpacing = ma.settings.alternateTrussSpacingOver40FT.under)),
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
    (40 < ma.width
      ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
      : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
  for (
    let e = 0;
    e < selectedMesh.__folders["Building Dimensions"].__controllers.length;
    e++
  ) {
    var r = selectedMesh.__folders["Building Dimensions"].__controllers[e];
    "depth" === r.property &&
      (r.min(ma.maxTrussSpacing),
        r.step(ma.maxTrussSpacing),
        (ma.depth =
          Math.round(ma.depth / ma.maxTrussSpacing) * ma.maxTrussSpacing),
        r.updateDisplay());
  }
  if (
    (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver &&
      (ma.gableFront =
        Math.round(ma.gableFront / ma.maxTrussSpacing) * ma.maxTrussSpacing),
      ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver &&
      (ma.gableBack =
        Math.round(ma.gableBack / ma.maxTrussSpacing) * ma.maxTrussSpacing),
      selectedMesh.__folders.hasOwnProperty(sceneElementA))
  ) {
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.N.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.N.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var s =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.N.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo1CutL" === s.property &&
          (s.step(ma.maxTrussSpacing),
            (ma.leanTo1CutL =
              Math.round(ma.leanTo1CutL / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            s.updateDisplay()),
          "leanTo1CutR" === s.property &&
          (s.step(ma.maxTrussSpacing),
            (ma.leanTo1CutR =
              Math.round(ma.leanTo1CutR / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            s.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.E.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.E.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var l =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.E.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo2CutL" === l.property &&
          (l.step(ma.maxTrussSpacing),
            (ma.leanTo2CutL =
              Math.round(ma.leanTo2CutL / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            l.updateDisplay()),
          "leanTo2CutR" === l.property &&
          (l.step(ma.maxTrussSpacing),
            (ma.leanTo2CutR =
              Math.round(ma.leanTo2CutR / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            l.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.S.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.S.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var h =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.S.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo3CutL" === h.property &&
          (h.step(ma.maxTrussSpacing),
            (ma.leanTo3CutL =
              Math.round(ma.leanTo3CutL / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            h.updateDisplay()),
          "leanTo3CutR" === h.property &&
          (h.step(ma.maxTrussSpacing),
            (ma.leanTo3CutR =
              Math.round(ma.leanTo3CutR / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            h.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.W.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.W.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var c =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.W.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo4CutL" === c.property &&
          (c.step(ma.maxTrussSpacing),
            (ma.leanTo4CutL =
              Math.round(ma.leanTo4CutL / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            c.updateDisplay()),
          "leanTo4CutR" === c.property &&
          (c.step(ma.maxTrussSpacing),
            (ma.leanTo4CutR =
              Math.round(ma.leanTo4CutR / ma.maxTrussSpacing) *
              ma.maxTrussSpacing),
            c.updateDisplay());
      }
  }
  (configUI.constant = ma.width / -2),
    (configSnapping.constant = ma.width / -2),
    (configRender.constant = ma.depth / -2),
    (configPreview.constant = ma.depth / -2);
  let d,
    p = 0;
  var k = ma.eaveLightHeight / 12;
  if (
    (void 0 === lastHoveredItem.getObjectByName("eaveLightsClones") &&
      void 0 === lastHoveredItem.getObjectByName("eaveLightsClones") &&
      (((d = new THREE.Group()).name = "eaveLightsClones"),
        lastHoveredItem.add(d)),
      void 0 !== lastHoveredItem.getObjectByName("eaveLightsClones"))
  ) {
    lastHoveredItem.remove(lastHoveredItem.getObjectByName("eaveLightsClones")),
      void 0 === lastHoveredItem.getObjectByName("eaveLightsClones") &&
      (((d = new THREE.Group()).name = "eaveLightsClones"),
        lastHoveredItem.add(d));
    var m = raycastHelper.getObjectByName("eaveLight");
    if (isGlassMode && m)
      for (let e = 0; e < m.material.length; e++)
        "Glass" === m.material[e].name && m.material[e].color.setHex(12500670);
    let t = -0.15,
      a = -0.15;
    var I,
      F,
      G = 0.25,
      g = ma.eaveLightWidth / 12;
    if (
      ("Single Slope" === ma.roofType &&
        ((p = (ma.width * ma.roofPitch) / 12),
          (t += ma.roofHeightAtX(ma.width / -2) - ma.height),
          (a += ma.roofHeightAtX(ma.width / 2) - ma.height)),
        ma.eaveLightsEast)
    )
      for (let e = 0; e <= (ma.depth - 0.5) / g; e++)
        (o = m.clone()).position.set(
          ma.width / -2,
          ma.height + t,
          ma.depth / -2 + g / 2 + e * g + G
        ),
          (o.morphTargetInfluences[o.morphTargetDictionary.height] = k - 1),
          (o.morphTargetInfluences[o.morphTargetDictionary.width] = g - 1),
          e + 1 > (ma.depth - 0.5) / g &&
          ((inputController = ma.depth / 2 - o.position.z - G + g / 2),
            (o.morphTargetInfluences[o.morphTargetDictionary.width] =
              inputController - 1),
            (o.position.z += (g - I) / -2)),
          (o.name = "eaveLight-clone"),
          (o.visible = !0),
          d.add(o);
    if (ma.eaveLightsWest)
      for (let e = 0; e <= (ma.depth - 0.5) / g; e++)
        (o = m.clone()).position.set(
          ma.width / 2,
          ma.height + a,
          ma.depth / -2 + g / 2 + e * g + G
        ),
          (o.morphTargetInfluences[o.morphTargetDictionary.height] = k - 1),
          (o.morphTargetInfluences[o.morphTargetDictionary.width] = g - 1),
          e + 1 > (ma.depth - 0.5) / g &&
          ((activeUIElement = ma.depth / 2 - o.position.z - G + g / 2),
            (o.morphTargetInfluences[o.morphTargetDictionary.width] = F - 1),
            (o.position.z += (g - F) / -2)),
          (o.name = "eaveLight-clone"),
          (o.visible = !0),
          d.add(o);
  }
  let u;
  if (
    (void 0 === lastHoveredItem.getObjectByName("eaveLightPanelClones") &&
      void 0 === lastHoveredItem.getObjectByName("eaveLightPanelClones") &&
      (((u = new THREE.Group()).name = "eaveLightPanelClones"),
        lastHoveredItem.add(u)),
      void 0 !== lastHoveredItem.getObjectByName("eaveLightPanelClones"))
  ) {
    if (
      (lastHoveredItem.remove(
        lastHoveredItem.getObjectByName("eaveLightPanelClones")
      ),
        void 0 === lastHoveredItem.getObjectByName("eaveLightPanelClones") &&
        (((u = new THREE.Group()).name = "eaveLightPanelClones"),
          lastHoveredItem.add(u)),
        (p = 0.1),
        "Single Slope" === ma.roofType && (p = (ma.width * ma.roofPitch) / 12),
        ma.eaveLightPanelsEast)
    )
      for (let e = 0; e <= ma.depth - 2; e++)
        (o = raycastHelper
          .getObjectByName("eaveLightPanel")
          .clone()).position.set(
            ma.width / -2,
            ma.height - 0.25 + Math.max(p, 0),
            e - (ma.depth - 2) / 2
          ),
          (o.rotation.y = THREE.Math.degToRad(90)),
          (o.morphTargetInfluences[o.morphTargetDictionary.height] = k - 1),
          (o.name = "eaveLightPanel-clone"),
          (o.visible = !0),
          u.add(o);
    if (ma.eaveLightPanelsWest)
      for (let e = 0; e <= ma.depth - 2; e++)
        (o = raycastHelper
          .getObjectByName("eaveLightPanel")
          .clone()).position.set(
            ma.width / 2,
            ma.height - 0.25 + Math.max(p, 0),
            e - (ma.depth - 2) / 2
          ),
          (o.rotation.y = THREE.Math.degToRad(-90)),
          (o.morphTargetInfluences[o.morphTargetDictionary.height] = k - 1),
          (o.name = "eaveLightPanel-clone"),
          (o.visible = !0),
          u.add(o);
  }
  if (selectedMesh.__folders.hasOwnProperty(sceneElementA)) {
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.N.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.N.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var T =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.N.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo1Drop" === T.property &&
          (ma.leanTo1Drop < 0 && (ma.leanTo1Drop = 0),
            (ma.leanTo1Height = ma.height - ma.leanTo1Drop),
            T.updateDisplay()),
          "leanTo1CutL" === T.property &&
          (T.max(ma.width - ma.leanTo1CutR - 6),
            !isHidden && ma.leanTo1CutL > T.__max && (ma.leanTo1CutL = T.__max),
            ma.leanTo1CutL < 0 && (ma.leanTo1CutL = 0),
            T.updateDisplay()),
          "leanTo1CutR" === T.property &&
          (T.max(ma.width - ma.leanTo1CutL - 6),
            !isHidden && ma.leanTo1CutR > T.__max && (ma.leanTo1CutR = T.__max),
            ma.leanTo1CutR < 0 && (ma.leanTo1CutR = 0),
            T.updateDisplay(),
            (ma.leanTo1Length = ma.width - ma.leanTo1CutL - ma.leanTo1CutR)),
          "leanTo1Height" === T.property &&
          (T.max(ma.height),
            !isHidden &&
            ma.leanTo1Height > ma.height &&
            (ma.leanTo1Height = ma.height),
            T.updateDisplay()),
          "leanTo1Length" === T.property &&
          (T.max(ma.width),
            !isHidden &&
            ma.leanTo1Length > ma.width &&
            (ma.leanTo1Length = ma.width),
            T.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.S.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.S.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var y =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.S.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo3Drop" === y.property &&
          (ma.leanTo3Drop < 0 && (ma.leanTo3Drop = 0),
            (ma.leanTo3Height = ma.height - ma.leanTo3Drop),
            y.updateDisplay()),
          "leanTo3CutL" === y.property &&
          (y.max(ma.width - ma.leanTo3CutR - 6),
            !isHidden && ma.leanTo3CutL > y.__max && (ma.leanTo3CutL = y.__max),
            ma.leanTo3CutL < 0 && (ma.leanTo3CutL = 0),
            y.updateDisplay()),
          "leanTo3CutR" === y.property &&
          (y.max(ma.width - ma.leanTo3CutL - 6),
            !isHidden && ma.leanTo3CutR > y.__max && (ma.leanTo3CutR = y.__max),
            ma.leanTo3CutR < 0 && (ma.leanTo3CutR = 0),
            y.updateDisplay(),
            (ma.leanTo3Length = ma.width - ma.leanTo3CutL - ma.leanTo3CutR)),
          "leanTo3Height" === y.property &&
          (y.max(ma.height),
            !isHidden &&
            ma.leanTo3Height > ma.height &&
            (ma.leanTo3Height = ma.height),
            y.updateDisplay()),
          "leanTo3Length" === y.property &&
          (y.max(ma.width),
            !isHidden &&
            ma.leanTo3Length > ma.width &&
            (ma.leanTo3Length = ma.width),
            y.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.E.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.E.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var b =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.E.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo2Drop" === b.property &&
          (ma.leanTo2Drop < 0 && (ma.leanTo2Drop = 0),
            (ma.leanTo2Height = ma.wallHeightL() - ma.leanTo2Drop),
            b.updateDisplay()),
          "leanTo2CutL" === b.property &&
          (b.max(ma.depth - ma.leanTo2CutR - 6),
            !isHidden && ma.leanTo2CutL > b.__max && (ma.leanTo2CutL = b.__max),
            ma.leanTo2CutL < 0 && (ma.leanTo2CutL = 0),
            b.updateDisplay()),
          "leanTo2CutR" === b.property &&
          (b.max(ma.depth - ma.leanTo2CutL - 6),
            !isHidden && ma.leanTo2CutR > b.__max && (ma.leanTo2CutR = b.__max),
            ma.leanTo2CutR < 0 && (ma.leanTo2CutR = 0),
            b.updateDisplay(),
            (ma.leanTo2Length = ma.depth - ma.leanTo2CutL - ma.leanTo2CutR)),
          "leanTo2Height" === b.property &&
          (b.max(ma.wallHeightL()),
            !isHidden &&
            ma.leanTo2Height > ma.wallHeightL() &&
            (ma.leanTo2Height = ma.wallHeightL()),
            b.updateDisplay()),
          "leanTo2Length" === b.property &&
          (b.max(ma.depth),
            !isHidden &&
            ma.leanTo2Length > ma.depth &&
            (ma.leanTo2Length = ma.depth),
            b.updateDisplay());
      }
    if (
      selectedMesh.__folders[sceneElementA].__folders.hasOwnProperty(
        frontEndWallMesh.W.name + " " + sceneElementB
      )
    )
      for (
        let e = 0;
        e <
        selectedMesh.__folders[sceneElementA].__folders[
          frontEndWallMesh.W.name + " " + sceneElementB
        ].__controllers.length;
        e++
      ) {
        var f =
          selectedMesh.__folders[sceneElementA].__folders[
            frontEndWallMesh.W.name + " " + sceneElementB
          ].__controllers[e];
        "leanTo4Drop" === f.property &&
          (ma.leanTo4Drop < 0 && (ma.leanTo4Drop = 0),
            (ma.leanTo4Height = ma.wallHeightR() - ma.leanTo4Drop),
            f.updateDisplay()),
          "leanTo4CutL" === f.property &&
          (f.max(ma.depth - ma.leanTo4CutR - 6),
            !isHidden && ma.leanTo4CutL > f.__max && (ma.leanTo4CutL = f.__max),
            ma.leanTo4CutL < 0 && (ma.leanTo4CutL = 0),
            f.updateDisplay()),
          "leanTo4CutR" === f.property &&
          (f.max(ma.depth - ma.leanTo4CutL - 6),
            !isHidden && ma.leanTo4CutR > f.__max && (ma.leanTo4CutR = f.__max),
            ma.leanTo4CutR < 0 && (ma.leanTo4CutR = 0),
            f.updateDisplay(),
            (ma.leanTo4Length = ma.depth - ma.leanTo4CutL - ma.leanTo4CutR)),
          "leanTo4Height" === f.property &&
          (f.max(ma.wallHeightR()),
            !isHidden &&
            ma.leanTo4Height > ma.wallHeightR() &&
            (ma.leanTo4Height = ma.wallHeightR()),
            f.updateDisplay()),
          "leanTo4Length" === f.property &&
          (f.max(ma.depth),
            !isHidden &&
            ma.leanTo4Length > ma.depth &&
            (ma.leanTo4Length = ma.depth),
            f.updateDisplay());
      }
  }
  let w;
  if (ma.leanTo1 || ma.leanTo3 || ma.leanTo2 || ma.leanTo4) {
    if (sceneRoot.getObjectByName("leanTo1"))
      for (let e = 1; e <= 4; e++)
        if (
          ((w = "leanTo" + e),
            sceneRoot.getObjectByName(w).visible == ma[w] ||
            isHidden ||
            (1 === e || 3 === e
              ? (ma[w + "Length"] = ma.width - ma[w + "CutL"] - ma[w + "CutR"])
              : (ma[w + "Length"] =
                ma.depth - ma[w + "CutL"] - ma[w + "CutR"])),
            void 0 !== sceneRoot.getObjectByName(w))
        ) {
          (sceneRoot.getObjectByName(w).visible = ma[w]),
            (sceneRoot.getObjectByName(w + "Roof").visible = ma[w]),
            (0 != ma[w] &&
              ma[w + "Enclosed"] &&
              "Fully Enclosed" === ma[w + "Walls"]) ||
            (sceneRoot
              .getObjectByName(w + "BoundingBox")
              .position.set(0, 0, 0),
              sceneRoot
                .getObjectByName(w + "BoundingBox")
                .scale.set(0.1, 0.1, 0.1)),
            2 !== e && e;
          var v = sceneRoot.getObjectByName(w);
          if (
            ma[w + "Enclosed"] &&
            0 === ma.hideWalls &&
            "Fully Enclosed" == ma[w + "Walls"]
          )
            (v.morphTargetInfluences[
              v.morphTargetDictionary.unEnclosedHeight
            ] = 0),
              sceneRoot.getObjectByName(w).traverse(function (t) {
                if (t instanceof THREE.Mesh)
                  for (let e = 0; e < t.material.length; e++)
                    ("BuildingWalls" !== t.material[e].name.substring(0, 13) &&
                      "BuildingWainscot" !==
                      t.material[e].name.substring(0, 16) &&
                      "LeantoWalls" !== t.material[e].name.substring(0, 11) &&
                      "LeantoWainscot" !==
                      t.material[e].name.substring(0, 14) &&
                      "BuildingTrim" !== t.material[e].name.substring(0, 12)) ||
                      (t.material[e].visible = !0);
              });
          else if (
            0 === ma.hideWalls &&
            (!ma[w + "Enclosed"] || "Fully Enclosed" !== ma[w + "Walls"])
          )
            if (
              ma.settings.showLeantoWallTriangleWhenOpen ||
              "Upper Triangles Only" == ma[w + "Walls"] ||
              "Gable Dress" == ma[w + "Walls"]
            )
              (v.morphTargetInfluences[
                v.morphTargetDictionary.unEnclosedHeight
              ] =
                (ma[w + "Height"] -
                  (ma[w + "Pitch"] / 12) * ma[w + "Depth"] -
                  1.75) /
                100),
                sceneRoot.getObjectByName(w).traverse(function (t) {
                  if (t instanceof THREE.Mesh)
                    for (let e = 0; e < t.material.length; e++)
                      ("BuildingWalls" !==
                        t.material[e].name.substring(0, 13) &&
                        "BuildingWainscot" !==
                        t.material[e].name.substring(0, 16) &&
                        "LeantoWalls" !== t.material[e].name.substring(0, 11) &&
                        "LeantoWainscot" !==
                        t.material[e].name.substring(0, 14) &&
                        "BuildingTrim" !==
                        t.material[e].name.substring(0, 12)) ||
                        (t.material[e].visible = !0);
                });
            else if (
              ma[w + "Walls"].startsWith("Ends Enclosed") ||
              ma[w + "Walls"].startsWith("Gable Walls Only")
            )
              (v.morphTargetInfluences[
                v.morphTargetDictionary.unEnclosedHeight
              ] = 0),
                sceneRoot.getObjectByName(w).traverse(function (t) {
                  if (t instanceof THREE.Mesh)
                    for (let e = 0; e < t.material.length; e++)
                      (t.material[e].name.startsWith("LeantoWallsWidth") ||
                        t.material[e].name.startsWith("LeantoWainscot1") ||
                        t.material[e].name.startsWith("LeantoWainscot3") ||
                        t.material[e].name.startsWith("LeantoWainscotTrim1") ||
                        t.material[e].name.startsWith("LeantoWainscotTrim3") ||
                        t.material[e].name.startsWith("BuildingTrim1") ||
                        t.material[e].name.startsWith("BuildingTrim3") ||
                        t.material[e].name.startsWith("BuildingTrim-Base1") ||
                        t.material[e].name.startsWith("BuildingTrim-Base3")) &&
                        (t.material[e].visible = !0),
                        (t.material[e].name.startsWith("LeantoWallsDepth") ||
                          t.material[e].name.startsWith("LeantoWainscot2") ||
                          t.material[e].name.startsWith(
                            "LeantoWainscotTrim2"
                          ) ||
                          t.material[e].name.startsWith("BuildingTrim2") ||
                          t.material[e].name.startsWith(
                            "BuildingTrim-Base2"
                          )) &&
                        (t.material[e].visible = false);
                });
            else if (
              ma[w + "Walls"].startsWith("Length") ||
              ma[w + "Walls"].startsWith("Full Length") ||
              ma[w + "Walls"].endsWith("Apron Wall")
            ) {
              let e = 0;
              "Enclosed" ==
                (e = (e = (e = (e = (e = ma[w + "Walls"].replace(
                  /^(Length)/,
                  ""
                )).replace(/Apron Wall/, "")).replace(/\s+/g, "")).replace(
                  /tempToolD$/,
                  ""
                )).replace(/"$/, "")) || "Full" == e
                ? (v.morphTargetInfluences[
                  v.morphTargetDictionary.unEnclosedHeight
                ] = 0)
                : (v.morphTargetInfluences[
                  v.morphTargetDictionary.unEnclosedHeight
                ] =
                  (ma[w + "Height"] -
                    (ma[w + "Pitch"] / 12) * ma[w + "Depth"] -
                    e) /
                  100),
                sceneRoot.getObjectByName(w).traverse(function (t) {
                  if (t instanceof THREE.Mesh)
                    for (let e = 0; e < t.material.length; e++)
                      (t.material[e].name.startsWith("LeantoWallsWidth") ||
                        t.material[e].name.startsWith("LeantoWainscot1") ||
                        t.material[e].name.startsWith("LeantoWainscot3") ||
                        t.material[e].name.startsWith("LeantoWainscotTrim1") ||
                        t.material[e].name.startsWith("LeantoWainscotTrim3") ||
                        t.material[e].name.startsWith("BuildingTrim1") ||
                        t.material[e].name.startsWith("BuildingTrim3") ||
                        t.material[e].name.startsWith("BuildingTrim-Base1") ||
                        t.material[e].name.startsWith("BuildingTrim-Base3")) &&
                        (t.material[e].visible = false),
                        (t.material[e].name.startsWith("LeantoWallsDepth") ||
                          t.material[e].name.startsWith("LeantoWainscot2") ||
                          t.material[e].name.startsWith(
                            "LeantoWainscotTrim2"
                          ) ||
                          t.material[e].name.startsWith("BuildingTrim2") ||
                          t.material[e].name.startsWith(
                            "BuildingTrim-Base2"
                          )) &&
                        (t.material[e].visible = !0);
                });
            } else
              sceneRoot.getObjectByName(w).traverse(function (t) {
                if (t instanceof THREE.Mesh)
                  for (let e = 0; e < t.material.length; e++)
                    ("BuildingWalls" !== t.material[e].name.substring(0, 13) &&
                      "BuildingWainscot" !==
                      t.material[e].name.substring(0, 16) &&
                      "LeantoWalls" !== t.material[e].name.substring(0, 11) &&
                      "LeantoWainscot" !==
                      t.material[e].name.substring(0, 14) &&
                      "BuildingTrim" !== t.material[e].name.substring(0, 12)) ||
                      (t.material[e].visible = false);
              });
        }
  } else
    for (let e = 0; e < 4; e++) {
      var _ = (w = "leanTo" + (e + 1)) + "BoundingBox";
      void 0 !== sceneRoot.getObjectByName(w) &&
        ((sceneRoot.getObjectByName(w).visible = ma[w]),
          (sceneRoot.getObjectByName(w + "Roof").visible = ma[w]),
          sceneRoot.getObjectByName(_).position.set(0, 0, 0),
          sceneRoot.getObjectByName(_).scale.set(0.1, 0.1, 0.1));
    }
  (ma.hasOwnProperty("coveredGableExtensionN") ||
    ma.hasOwnProperty("coveredGableExtensionS") ||
    ma.hasOwnProperty("coveredGableExtensionE") ||
    ma.hasOwnProperty("coveredGableExtensionW")) &&
    hi(
      sceneRoot,
      ma,
      Z,
      isHidden,
      frontEndWallMesh,
      modelCache,
      materialCache,
      me,
      $a,
      configTextures,
      configMesh,
      vo
    );
  var E = sceneRoot.getObjectByName("building").material;
  for (let e = 0; e < E.length; e++)
    0 !== ma.hideWalls ||
      ("BuildingTrim-Corner" !== E[e].name &&
        "BuildingTrim1" !== E[e].name &&
        "BuildingTrim2" !== E[e].name &&
        "BuildingTrim3" !== E[e].name &&
        "BuildingTrim4" !== E[e].name) ||
      (E[e].visible = !0),
      0 !== ma.hideWalls ||
      ("BuildingWallsDepthL" !== E[e].name &&
        "BuildingWallsDepthL-Interior" !== E[e].name &&
        "BuildingWallsDepthR" !== E[e].name &&
        "BuildingWallsDepthR-Interior" !== E[e].name) ||
      (E[e].visible = !0),
      0 !== ma.hideWalls ||
      ("BuildingWallsDepthL-Interior" !== E[e].name &&
        "BuildingWallsDepthR-Interior" !== E[e].name &&
        "BuildingWallsWidthLeftBack-Interior" !== E[e].name &&
        "BuildingWallsWidthLeftFront-Interior" !== E[e].name &&
        "BuildingWallsWidthRightBack-Interior" !== E[e].name &&
        "BuildingWallsWidthRightFront-Interior" !== E[e].name) ||
      (E[e].visible = !0);
  var M,
    D,
    P = [0, 0, 0, 0, 0];
  for (let e = 1; e <= 4; e++) {
    var $ =
      sceneRoot.getObjectByName("building").morphTargetDictionary[
      "TrimStartHeight" + e
      ];
    sceneRoot.getObjectByName("building").morphTargetInfluences[$] =
      (ma.height - Math.abs(P[e] - ma.height)) / 100;
  }
  ma.gutters && ma.hideWalls <= 1
    ? sceneRoot.traverse(function (t) {
      if (t instanceof THREE.Mesh && t.material)
        if (t.material.length)
          for (let e = 0; e < t.material.length; e++)
            t.material[e].name.startsWith("Gutters") &&
              (t.material[e].visible = !0);
        else
          t.material.name.startsWith("Downspouts") &&
            (t.material.visible = !0);
    })
    : sceneRoot.traverse(function (t) {
      if (t instanceof THREE.Mesh && t.material)
        if (t.material.length)
          for (let e = 0; e < t.material.length; e++)
            t.material[e].name.startsWith("Gutters") &&
              (t.material[e].visible = false);
        else
          t.material.name.startsWith("Downspouts") &&
            (t.material.visible = false);
    }),
    ma.boxedOverhangs
      ? ((e = 2 * Math.cos(ma.roofPitch / 12)),
        (x = 2 * Math.atan(ma.roofPitch / 12)),
        (wallGroup.morphTargetInfluences[
          wallGroup.morphTargetDictionary.boxedOverhangX
        ] = x),
        (wallGroup.morphTargetInfluences[
          wallGroup.morphTargetDictionary.boxedOverhangY
        ] = e),
        "Single Slope" === ma.roofType
          ? (roofGroup.morphTargetInfluences[
            roofGroup.morphTargetDictionary.boxedOverhangX
          ] = -x)
          : (roofGroup.morphTargetInfluences[
            roofGroup.morphTargetDictionary.boxedOverhangX
          ] = x),
        (roofGroup.morphTargetInfluences[
          roofGroup.morphTargetDictionary.boxedOverhangY
        ] = e))
      : ((wallGroup.morphTargetInfluences[
        wallGroup.morphTargetDictionary.boxedOverhangX
      ] = 0),
        (wallGroup.morphTargetInfluences[
          wallGroup.morphTargetDictionary.boxedOverhangY
        ] = 0),
        (roofGroup.morphTargetInfluences[
          roofGroup.morphTargetDictionary.boxedOverhangX
        ] = 0),
        (roofGroup.morphTargetInfluences[
          roofGroup.morphTargetDictionary.boxedOverhangY
        ] = 0)),
    io(),
    void 0 !== lastHoveredItem.getObjectByName("skylightNullR") &&
    lastHoveredItem.remove(sceneRoot.getObjectByName("skylightNullR")),
    void 0 !== lastHoveredItem.getObjectByName("skylightNullL") &&
    lastHoveredItem.remove(sceneRoot.getObjectByName("skylightNullL")),
    ((M = new THREE.Group()).name = "skylightNullR"),
    M.position.copy(roofGroup.position),
    (M.rotation.z = roofGroup.rotation.z),
    (M.position.z = 0),
    lastHoveredItem.add(M),
    ((D = new THREE.Group()).name = "skylightNullL"),
    D.position.copy(wallGroup.position),
    (D.rotation.z = wallGroup.rotation.z),
    (D.rotation.y = THREE.Math.degToRad(180)),
    (D.position.z = 0),
    lastHoveredItem.add(D);
  let assetBaseUrl = 11;
  ma.hasOwnProperty("skylightLength") && (assetBaseUrl = ma.skylightLength);
  var helperObject,
    S = sceneRoot.getObjectByName("skylight");
  if (ma.skylights) {
    var q = ma.depth / (ma.skylights / 2),
      V = ((assetBaseUrl - 1) / 100) * 2;
    let t;
    for (let e = 1; e <= ma.skylights / 2; e++)
      (o = S.clone()),
        (t = ma.depth / -2 + q * (e - 0.5)),
        o.position.set(0.25, 0, t),
        (o.name = "skylight-clone"),
        (o.morphTargetInfluences[o.morphTargetDictionary.width] = V),
        (o.morphTargetInfluences[o.morphTargetDictionary.depth] = 0.002),
        (o.frustumCulled = false),
        (o.visible = !0),
        D.add(o);
    for (let e = 1; e <= ma.skylights / 2; e++)
      (o = S.clone()),
        (t = ma.depth / -2 + q * (e - 0.5)),
        o.position.set(0.25, 0, -t),
        (o.name = "skylight-clone"),
        (o.morphTargetInfluences[o.morphTargetDictionary.width] = V),
        (o.morphTargetInfluences[o.morphTargetDictionary.depth] = 0.002),
        (o.frustumCulled = false),
        (o.visible = !0),
        M.add(o);
    for (let e = 0; e < S.material.length; e++)
      ("Skylight" !== S.material[e].name &&
        "Skylight-Inside" !== S.material[e].name) ||
        (S.material[e].normalMap.repeat.set(3 * activeMaterial, 1),
          (S.material[e].normalMap.offset.x = 3 * activeMaterial + 0.5),
          isGlassMode &&
          "Skylight" === S.material[e].name &&
          S.material[e].color.setHex(12500670));
  }
  if (0 === ma.hideWalls) {
    ma.showGableTriangleWithOpenGableWall
      ? (ma.enclosedN
        ? (bloomPass.morphTargetInfluences[
          bloomPass.morphTargetDictionary.unEnclosedHeight1
        ] = 0)
        : (bloomPass.morphTargetInfluences[
          bloomPass.morphTargetDictionary.unEnclosedHeight1
        ] = ma.height - 0.5),
        ma.enclosedS
          ? (bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.unEnclosedHeight3
          ] = 0)
          : (bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.unEnclosedHeight3
          ] = ma.height - 0.5))
      : ma.hasOwnProperty("showGableDressWithOpenGableWalls") &&
        ma.showGableDressWithOpenGableWalls
        ? ((bloomPass.morphTargetInfluences[
          bloomPass.morphTargetDictionary.unEnclosedHeight
        ] = ma.height - 2),
          (ma.enclosedN = false),
          (ma.enclosedS = false),
          (ma.enclosedE = false),
          (ma.enclosedW = false))
        : ((bloomPass.morphTargetInfluences[
          bloomPass.morphTargetDictionary.unEnclosedHeight1
        ] = 0),
          (bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.unEnclosedHeight3
          ] = 0),
          (bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.unEnclosedHeight
          ] = 0));
    for (let e = 0; e < bloomPass.material.length; e++)
      ((helperObject = bloomPass.material[e]).name.startsWith(
        "BuildingWallsWidthLeftFront"
      ) ||
        helperObject.name.startsWith("BuildingWallsWidthRightFront") ||
        "BuildingWainscot1" === helperObject.name ||
        "BuildingWainscotTrim1" === helperObject.name ||
        "BuildingTrimN" === helperObject.name ||
        "BuildingTrim-Base1" === helperObject.name) &&
        (ma.enclosedN ||
          ma.showGableTriangleWithOpenGableWall ||
          ma.showGableDressWithOpenGableWalls
          ? (helperObject.visible = !0)
          : (helperObject.visible = false)),
        (helperObject.name.startsWith("BuildingWallsWidthLeftBack") ||
          helperObject.name.startsWith("BuildingWallsWidthRightBack") ||
          "BuildingWainscot3" === helperObject.name ||
          "BuildingWainscotTrim3" === helperObject.name ||
          "BuildingTrimS" === helperObject.name ||
          "BuildingTrim-Base3" === helperObject.name) &&
        (ma.enclosedS ||
          ma.showGableTriangleWithOpenGableWall ||
          ma.showGableDressWithOpenGableWalls
          ? (helperObject.visible = !0)
          : (helperObject.visible = false)),
        (!helperObject.name.startsWith("BuildingWallsDepthL") &&
          "BuildingWainscot2" !== helperObject.name &&
          "BuildingWainscotTrim2" !== helperObject.name &&
          "BuildingTrimE" !== helperObject.name &&
          "BuildingTrim-Base2" !== helperObject.name) ||
        (ma.enclosedE || ma.showGableDressWithOpenGableWalls
          ? (helperObject.visible = !0)
          : (helperObject.visible = false)),
        (!helperObject.name.startsWith("BuildingWallsDepthR") &&
          "BuildingWainscot4" !== helperObject.name &&
          "BuildingWainscotTrim4" !== helperObject.name &&
          "BuildingTrimW" !== helperObject.name &&
          "BuildingTrim-Base4" !== helperObject.name) ||
        (ma.enclosedW || ma.showGableDressWithOpenGableWalls
          ? (helperObject.visible = !0)
          : (helperObject.visible = false)),
        !helperObject.name.startsWith("BuildingTrim1") ||
        ma.enclosedN ||
        ma.enclosedE ||
        (helperObject.visible = false),
        !helperObject.name.startsWith("BuildingTrim2") ||
        ma.enclosedS ||
        ma.enclosedE ||
        (helperObject.visible = false),
        !helperObject.name.startsWith("BuildingTrim3") ||
        ma.enclosedS ||
        ma.enclosedW ||
        (helperObject.visible = false),
        !helperObject.name.startsWith("BuildingTrim4") ||
        ma.enclosedN ||
        ma.enclosedW ||
        (helperObject.visible = false),
        !ma.hasOwnProperty("baseTrim") ||
        (helperObject.name.startsWith("BuildingTrim-Base") &&
          !ma.baseTrim &&
          (helperObject.visible = false));
  }
  if (selectedMesh.__folders.hasOwnProperty("Interior")) {
    if (ma.hasOwnProperty("perimeterWallHeight"))
      for (
        let e = 0;
        e < selectedMesh.__folders.Interior.__controllers.length;
        e++
      ) {
        var cameraPosition = selectedMesh.__folders.Interior.__controllers[e];
        "perimeterWallHeight" === cameraPosition.property &&
          (cameraPosition.max(ma.height),
            cameraPosition.updateDisplay(),
            ma.perimeterWallHeight > ma.height) &&
          ((ma.perimeterWallHeight = ma.height), uo());
      }
    if (ma.divisionWall)
      for (
        let e = 0;
        e < selectedMesh.__folders.Interior.__controllers.length;
        e++
      ) {
        var O = selectedMesh.__folders.Interior.__controllers[e];
        ("divisionAmount" !== O.property &&
          "divisionMaterial" !== O.property &&
          "perimeterWalls2" !== O.property &&
          "flooring2" !== O.property &&
          "ceiling2" !== O.property) ||
          ((O.domElement.parentElement.parentElement.hidden = false),
            O.updateDisplay());
      }
    else if (selectedMesh.__folders.hasOwnProperty("Interior"))
      for (
        let e = 0;
        e < selectedMesh.__folders.Interior.__controllers.length;
        e++
      ) {
        var B = selectedMesh.__folders.Interior.__controllers[e];
        ("divisionAmount" !== B.property &&
          "divisionMaterial" !== B.property &&
          "perimeterWalls2" !== B.property &&
          "flooring2" !== B.property &&
          "ceiling2" !== B.property) ||
          ((B.domElement.parentElement.parentElement.hidden = !0),
            B.updateDisplay());
      }
  }
  if (
    (ma.divisionWall && 0 < ma.divisionAmount
      ? (doorMesh.visible = !0)
      : (doorMesh.visible = false),
      (doorMesh.position.z = ma.depth / 2 - ma.divisionAmount),
      (doorMesh.scale.x = ma.width - 1.4),
      (doorMesh.scale.y = ma.height - 0.8),
      "Steel" == ma.divisionMaterial)
  )
    (doorMesh.userData.topMaterial.map = null),
      (doorMesh.userData.topMaterial.normalMap =
        doorMesh.userData.metalTexture),
      doorMesh.userData.topMaterial.specular.setHex(6250335),
      (doorMesh.userData.topMaterial.shininess = 90),
      (doorMesh.userData.topMaterial.reflectivity = 0.05),
      doorMesh.userData.topMaterial.normalMap.repeat.set(
        (ma.width - 1.4) * activeMaterial,
        1
      ),
      (doorMesh.userData.bottomMaterial.map = null),
      (doorMesh.userData.bottomMaterial.normalMap =
        doorMesh.userData.metalTexture),
      doorMesh.userData.bottomMaterial.specular.setHex(6250335),
      (doorMesh.userData.bottomMaterial.shininess = 90),
      (doorMesh.userData.bottomMaterial.reflectivity = 0.05),
      doorMesh.userData.bottomMaterial.normalMap.repeat.set(
        (ma.width - 1.4) * activeMaterial,
        1
      );
  else if ("Half Wood" == ma.divisionMaterial)
    (doorMesh.userData.topMaterial.map = null),
      (doorMesh.userData.topMaterial.normalMap =
        doorMesh.userData.metalTexture),
      doorMesh.userData.topMaterial.specular.setHex(6250335),
      (doorMesh.userData.topMaterial.shininess = 90),
      (doorMesh.userData.topMaterial.reflectivity = 0.05),
      doorMesh.userData.topMaterial.normalMap.repeat.set(
        (ma.width - 1.4) * activeMaterial,
        1
      ),
      (doorMesh.userData.bottomMaterial.map = doorMesh.userData.woodTexture),
      (doorMesh.userData.bottomMaterial.normalMap = null),
      doorMesh.userData.bottomMaterial.specular.setHex(2500134),
      (doorMesh.userData.bottomMaterial.shininess = 5.117649),
      (doorMesh.userData.bottomMaterial.reflectivity = 0),
      doorMesh.userData.bottomMaterial.map.repeat.set(
        (ma.width - 1.4) / 2.5,
        (ma.height - 0.8) / 2.5
      );
  else if (
    "Wood" == ma.divisionMaterial ||
    "OSB" == ma.divisionMaterial ||
    "Plywood" == ma.divisionMaterial
  )
    (doorMesh.userData.topMaterial.map = doorMesh.userData.woodTexture),
      (doorMesh.userData.topMaterial.normalMap = null),
      doorMesh.userData.topMaterial.specular.setHex(2500134),
      (doorMesh.userData.topMaterial.shininess = 5.117649),
      (doorMesh.userData.topMaterial.reflectivity = 0),
      doorMesh.userData.topMaterial.map.repeat.set(
        (ma.width - 1.4) / 2.5,
        (ma.height - 0.8) / 2.5
      ),
      (doorMesh.userData.bottomMaterial.map = doorMesh.userData.woodTexture),
      (doorMesh.userData.bottomMaterial.normalMap = null),
      doorMesh.userData.bottomMaterial.specular.setHex(2500134),
      (doorMesh.userData.bottomMaterial.shininess = 5.117649),
      (doorMesh.userData.bottomMaterial.reflectivity = 0),
      doorMesh.userData.bottomMaterial.map.repeat.set(
        (ma.width - 1.4) / 2.5,
        (ma.height - 0.8) / 2.5
      );
  else if ("8' OSB with Steel above" == ma.divisionMaterial) {
    var x = ma.height - 1;
    let a = x / 2;
    if (isGlassMode) {
      let e = 8,
        t = e - a;
      t + a > x && ((t = x - a), (e = x)),
        (a = e),
        (doorMesh.morphTargetInfluences[
          doorMesh.morphTargetDictionary.halfWallAdjustment
        ] = t / doorMesh.scale.y);
    }
    (doorMesh.userData.topMaterial.map = null),
      (doorMesh.userData.topMaterial.normalMap =
        doorMesh.userData.metalTexture),
      doorMesh.userData.topMaterial.specular.setHex(6250335),
      (doorMesh.userData.topMaterial.shininess = 90),
      (doorMesh.userData.topMaterial.reflectivity = 0.05),
      doorMesh.userData.topMaterial.normalMap.repeat.set(
        (ma.width - 1.4) * activeMaterial,
        1
      ),
      (doorMesh.userData.bottomMaterial.map = doorMesh.userData.woodTexture),
      (doorMesh.userData.bottomMaterial.normalMap = null),
      doorMesh.userData.bottomMaterial.specular.setHex(2500134),
      (doorMesh.userData.bottomMaterial.shininess = 5.117649),
      (doorMesh.userData.bottomMaterial.reflectivity = 0),
      doorMesh.userData.bottomMaterial.map.repeat.set(
        (ma.width - 1.4) / 2.5,
        (2 * a) / 2.5
      );
  } else
    "Drywall" == ma.divisionMaterial &&
      ((doorMesh.userData.topMaterial.map = null),
        (doorMesh.userData.topMaterial.normalMap = null),
        doorMesh.userData.topMaterial.specular.setHex(14540253),
        (doorMesh.userData.topMaterial.shininess = 6),
        (doorMesh.userData.topMaterial.reflectivity = 0),
        (doorMesh.userData.bottomMaterial.map = null),
        (doorMesh.userData.bottomMaterial.normalMap = null),
        doorMesh.userData.bottomMaterial.specular.setHex(14540253),
        (doorMesh.userData.bottomMaterial.shininess = 6),
        (doorMesh.userData.bottomMaterial.reflectivity = 0));
  if (
    ((doorMesh.userData.bottomMaterial.needsUpdate = !0),
      (doorMesh.userData.topMaterial.needsUpdate = !0),
      ma.hasOwnProperty("flooring") &&
        "None" != ma.flooring &&
        "Concrete" != ma.flooring
        ? ((exportedSceneData.visible = !0),
          (exportedSceneData.scale.x = ma.width),
          ma.divisionWall
            ? (exportedSceneData.scale.y = ma.divisionAmount)
            : (exportedSceneData.scale.y = ma.depth),
          (exportedSceneData.position.z = ma.depth / 2),
          "Ceramic Tile" == ma.flooring
            ? ((exportedSceneData.material = tempToolD),
              exportedSceneData.material.map.repeat.set(
                exportedSceneData.scale.x / 4,
                exportedSceneData.scale.y / 4
              ))
            : "Wood" == ma.flooring
              ? ((exportedSceneData.material = tempToolE),
                exportedSceneData.material.map.repeat.set(
                  exportedSceneData.scale.x / 4,
                  exportedSceneData.scale.y / 10
                ))
              : "Carpet" == ma.flooring
                ? ((exportedSceneData.material = tempToolF),
                  exportedSceneData.material.map.repeat.set(
                    exportedSceneData.scale.x / 3,
                    exportedSceneData.scale.y / 3
                  ))
                : "Gravel" == ma.flooring &&
                ((exportedSceneData.material = tempToolG),
                  exportedSceneData.material.map.repeat.set(
                    exportedSceneData.scale.x / 8,
                    exportedSceneData.scale.y / 4
                  ),
                  exportedSceneData.material.normalMap.repeat.set(
                    exportedSceneData.scale.x / 8,
                    exportedSceneData.scale.y / 4
                  ),
                  exportedSceneData.material.specularMap.repeat.set(
                    exportedSceneData.scale.x / 8,
                    exportedSceneData.scale.y / 4
                  )))
        : (exportedSceneData.visible = false),
      "None" != ma.flooring2 && ma.divisionWall
        ? ((fallbackMesh.visible = !0),
          (fallbackMesh.scale.x = ma.width),
          ma.divisionWall
            ? (fallbackMesh.scale.y = ma.depth - ma.divisionAmount)
            : (fallbackMesh.scale.y = ma.depth),
          (fallbackMesh.position.z = ma.depth / -2),
          "Ceramic Tile" == ma.flooring2
            ? ((fallbackMesh.material = worldTransformMatrix),
              fallbackMesh.material.map.repeat.set(
                fallbackMesh.scale.x / 4,
                fallbackMesh.scale.y / 4
              ))
            : "Wood" == ma.flooring2
              ? ((fallbackMesh.material = sceneSelectionState),
                fallbackMesh.material.map.repeat.set(
                  fallbackMesh.scale.x / 4,
                  fallbackMesh.scale.y / 10
                ))
              : "Carpet" == ma.flooring2 &&
              ((fallbackMesh.material = renderFrameIndex),
                fallbackMesh.material.map.repeat.set(
                  fallbackMesh.scale.x / 3,
                  fallbackMesh.scale.y / 3
                )))
        : (fallbackMesh.visible = false),
      "None" == ma.ceiling || 1 < ma.hideWalls
        ? ((wallMesh.visible = false), (roofMesh.visible = false))
        : ((wallMesh.visible = !0),
          (roofMesh.visible = !0),
          ma.divisionWall
            ? ((wallMesh.scale.y = ma.divisionAmount - 0.7),
              (roofMesh.scale.y = ma.divisionAmount - 0.7))
            : ((wallMesh.scale.y = ma.depth - 1.4),
              (roofMesh.scale.y = ma.depth - 1.4)),
          (wallMesh.position.z = ma.depth / 2 - 0.7),
          (roofMesh.position.z = ma.depth / 2 - 0.7),
          "Post Frame" == ma.frameType
            ? ((wallMesh.position.y = ma.height - 1.1),
              (roofMesh.position.y = ma.height - 1.1),
              (wallMesh.scale.x = ma.width / 2 - 0.7),
              (roofMesh.scale.x = ma.width / 2 - 0.7),
              (wallMesh.scale.z = wallMesh.scale.y),
              (roofMesh.scale.z = roofMesh.scale.y),
              (wallMesh.position.x = ma.width / -2 + 0.7),
              (roofMesh.position.x = ma.width / 2 - 0.7),
              (wallMesh.rotation.y = 0),
              (roofMesh.rotation.y = 0))
            : ((wallMesh.position.y = ma.height - 1.58),
              (roofMesh.position.y = ma.height - 1.58),
              (wallMesh.position.x = ma.width / -2 + 0.7),
              (roofMesh.position.x = ma.width / 2 - 0.7),
              (wallMesh.rotation.y = Math.atan2(ma.roofPitch, 12)),
              (roofMesh.rotation.y = Math.atan2(-ma.roofPitch, 12)),
              (wallMesh.scale.x =
                -wallMesh.position.x / Math.cos(wallMesh.rotation.y)),
              (roofMesh.scale.x =
                roofMesh.position.x / Math.cos(roofMesh.rotation.y)),
              (wallMesh.scale.z = wallMesh.scale.y),
              (roofMesh.scale.z = roofMesh.scale.y)),
          "Steel" == ma.ceiling
            ? ((wallMesh.material = tempToolB),
              ma.settings.orientCeilingPanelsToWidth
                ? wallMesh.material.normalMap.repeat.set(
                  wallMesh.scale.z * activeMaterial,
                  1
                )
                : wallMesh.material.normalMap.repeat.set(
                  wallMesh.scale.x * activeMaterial,
                  1
                ),
              (roofMesh.material = tempToolB),
              ma.settings.orientCeilingPanelsToWidth
                ? roofMesh.material.normalMap.repeat.set(
                  roofMesh.scale.z * activeMaterial,
                  1
                )
                : roofMesh.material.normalMap.repeat.set(
                  roofMesh.scale.x * activeMaterial,
                  1
                ))
            : "Wood" == ma.ceiling
              ? ((wallMesh.material = tempToolC),
                wallMesh.material.map.repeat.set(
                  wallMesh.scale.x / 4,
                  wallMesh.scale.y / 4
                ),
                (roofMesh.material = tempToolJ),
                roofMesh.material.map.repeat.set(
                  roofMesh.scale.x / 4,
                  roofMesh.scale.y / 4
                ))
              : "2x2 Tile" == ma.ceiling &&
              ((wallMesh.material = tempToolA),
                wallMesh.material.map.repeat.set(
                  wallMesh.scale.x / 2,
                  wallMesh.scale.y / 2
                ),
                (roofMesh.material = tempToolA),
                roofMesh.material.map.repeat.set(
                  roofMesh.scale.x / 2,
                  roofMesh.scale.y / 2
                ))),
      "None" == ma.ceiling2 || !ma.divisionWall || 1 < ma.hideWalls
        ? ((trimMesh.visible = false), (glassMesh.visible = false))
        : ((trimMesh.visible = !0),
          (glassMesh.visible = !0),
          ma.divisionWall
            ? ((trimMesh.scale.y = ma.depth - ma.divisionAmount - 0.7),
              (glassMesh.scale.y = ma.depth - ma.divisionAmount - 0.7))
            : ((trimMesh.scale.y = ma.depth - 1.4),
              (glassMesh.scale.y = ma.depth - 1.4)),
          (trimMesh.position.z = ma.depth / -2 + 0.7),
          (glassMesh.position.z = ma.depth / -2 + 0.7),
          "Post Frame" == ma.frameType
            ? ((trimMesh.position.y = ma.height - 1.1),
              (glassMesh.position.y = ma.height - 1.1),
              (trimMesh.scale.x = ma.width / 2 - 0.7),
              (glassMesh.scale.x = ma.width / 2 - 0.7),
              (trimMesh.scale.z = trimMesh.scale.y),
              (glassMesh.scale.z = glassMesh.scale.y),
              (trimMesh.position.x = ma.width / -2 + 0.7),
              (glassMesh.position.x = ma.width / 2 - 0.7),
              (trimMesh.rotation.y = 0),
              (glassMesh.rotation.y = 0))
            : ((trimMesh.position.y = ma.height - 1.58),
              (glassMesh.position.y = ma.height - 1.58),
              (trimMesh.position.x = ma.width / -2 + 0.7),
              (glassMesh.position.x = ma.width / 2 - 0.7),
              (trimMesh.rotation.y = Math.atan2(ma.roofPitch, 12)),
              (glassMesh.rotation.y = Math.atan2(-ma.roofPitch, 12)),
              (trimMesh.scale.x =
                -trimMesh.position.x / Math.cos(trimMesh.rotation.y)),
              (glassMesh.scale.x =
                glassMesh.position.x / Math.cos(glassMesh.rotation.y)),
              (trimMesh.scale.z = trimMesh.scale.y),
              (glassMesh.scale.z = glassMesh.scale.y)),
          "Steel" == ma.ceiling2
            ? ((trimMesh.material = tempToolI),
              ma.settings.orientCeilingPanelsToWidth
                ? trimMesh.material.normalMap.repeat.set(
                  trimMesh.scale.z * activeMaterial,
                  1
                )
                : trimMesh.material.normalMap.repeat.set(
                  trimMesh.scale.x * activeMaterial,
                  1
                ),
              (glassMesh.material = tempToolI),
              ma.settings.orientCeilingPanelsToWidth
                ? glassMesh.material.normalMap.repeat.set(
                  glassMesh.scale.z * activeMaterial,
                  1
                )
                : glassMesh.material.normalMap.repeat.set(
                  glassMesh.scale.x * activeMaterial,
                  1
                ))
            : "2x2 Tile" == ma.ceiling2 &&
            ((trimMesh.material = tempToolH),
              trimMesh.material.map.repeat.set(
                trimMesh.scale.x / 2,
                trimMesh.scale.y / 2
              ),
              (glassMesh.material = tempToolH),
              glassMesh.material.map.repeat.set(
                glassMesh.scale.x / 2,
                glassMesh.scale.y / 2
              ))),
      Za(ma.porchN, "N", "porch"),
      Za(ma.porchS, "S", "porch"),
      Za(ma.porchE, "E", "porch"),
      Za(ma.porchW, "W", "porch"),
      Za(ma.porchWrapNW, "NW", "porchWrap"),
      Za(ma.porchWrapNE, "NE", "porchWrap"),
      Za(ma.porchWrapSW, "SW", "porchWrap"),
      Za(ma.porchWrapSE, "SE", "porchWrap"),
      Za(ma.porchWrapHipNW, "NW", "porchWrapHip"),
      Za(ma.porchWrapHipNE, "NE", "porchWrapHip"),
      Za(ma.porchWrapHipSW, "SW", "porchWrapHip"),
      Za(ma.porchWrapHipSE, "SE", "porchWrapHip"),
      io(),
      Jo(),
      placeholderA.sort(function (e, t) {
        return e - t;
      }),
      placeholderA.reverse(),
      selectedMesh.__folders.hasOwnProperty("Interior"))
  ) {
    for (
      let e = 0;
      e < selectedMesh.__folders.Interior.__controllers.length;
      e++
    ) {
      var R = selectedMesh.__folders.Interior.__controllers[e];
      "mezzanineStartingBay" === R.property &&
        (R.max(placeholderA.length - 1),
          ma.mezzanineStartingBay > placeholderA.length - 1 &&
          (ma.mezzanineStartingBay = placeholderA.length - 1),
          R.updateDisplay()),
        "mezzanineBays" === R.property &&
        (R.max(placeholderA.length - ma.mezzanineStartingBay),
          ma.mezzanineBays > placeholderA.length - ma.mezzanineStartingBay &&
          (ma.mezzanineBays = placeholderA.length - ma.mezzanineStartingBay),
          R.updateDisplay()),
        "mezzanineDepth" === R.property &&
        (R.max(ma.depth),
          ma.mezzanineDepth > ma.depth && (ma.mezzanineDepth = ma.depth),
          R.updateDisplay());
    }
    for (
      let e = 0;
      e < selectedMesh.__folders.Interior.__controllers.length;
      e++
    ) {
      var X = selectedMesh.__folders.Interior.__controllers[e];
      "mezzanineHeight" === X.property &&
        (X.max(ma.height),
          ma.mezzanineHeight > ma.height && (ma.mezzanineHeight = ma.height - 1),
          X.updateDisplay());
    }
  }
  if (
    (void 0 !== lastHoveredItem.getObjectByName("mezzanineParent") &&
      lastHoveredItem.remove(
        lastHoveredItem.getObjectByName("mezzanineParent")
      ),
      0 < ma.mezzanineBays || 0 < ma.mezzanineDepth)
  ) {
    var H,
      C = new THREE.Group(),
      L =
        ((C.name = "mezzanineParent"),
          lastHoveredItem.add(C),
          "Post Frame" == ma.frameType || "Hybrid" == ma.frameType
            ? sceneRoot
              .getObjectByName("Mezzanine")
              .material.color.setHex(12026452)
            : sceneRoot
              .getObjectByName("Mezzanine")
              .material.color.setHex(7895160),
          (H = ma.useMezzanineDepth
            ? ((ma.mezzanineBays = Math.floor(
              ma.mezzanineDepth / placeholderA.spacingBetweenTrusses
            )),
              -placeholderA[0])
            : ((ma.mezzanineDepth =
              ma.mezzanineBays * placeholderA.spacingBetweenTrusses),
              -placeholderA[ma.mezzanineStartingBay - 1])) + ma.mezzanineDepth),
      U =
        (ma.mezzanineDepth == ma.depth && (L = placeholderA[0]),
          ma.mezzanineDepth),
      N =
        (ma.mezzanineDepth == ma.depth &&
          (U = -placeholderA[placeholderA.length - 1] + placeholderA[0]),
          (o = sceneRoot.getObjectByName("MezzanineWood").clone()).position.set(
            0,
            ma.mezzanineHeight,
            H
          ),
          (o.rotation.y = Math.PI / 2),
          (o.scale.z = ma.width - 0.6),
          1 == ma.mezzanineStartingBay && (o.scale.z -= 0.3),
          ma.mezzanineStartingBay + ma.mezzanineBays == placeholderA.length &&
          (o.scale.z -= 0.3),
          (o.scale.x = 5 * U),
          (o.visible = !0),
          C.add(o),
          sceneRoot.getObjectByName("Mezzanine").clone());
    if (
      (N.position.set(0, ma.mezzanineHeight - 0.04, H),
        (N.rotation.y = Math.PI / 2),
        (N.rotation.x = Math.PI / 2),
        N.scale.set(0.25, 2, ma.width - 0.6),
        (N.visible = !0),
        C.add(N),
        (o = N.clone()).position.set(0, ma.mezzanineHeight - 0.6, H),
        (o.rotation.y = Math.PI / 2),
        (o.rotation.x = Math.PI / 2),
        o.scale.set(0.25, 2, ma.width - 0.6),
        (o.visible = !0),
        C.add(o),
        ((o = N.clone()).name = "Mezzanine-Truss-Top"),
        o.position.set(0, ma.mezzanineHeight - 0.04, L),
        (o.rotation.y = Math.PI / 2),
        (o.rotation.x = Math.PI / 2),
        o.scale.set(0.25, 2, ma.width - 0.6),
        "Post Frame" == ma.frameType && (o.scale.x = 3),
        (o.visible = !0),
        C.add(o),
        "Post Frame" !== ma.frameType &&
        (((o = N.clone()).name = "Mezzanine-Truss-Bottom"),
          o.position.set(0, ma.mezzanineHeight - 0.6, L),
          (o.rotation.x = Math.PI / 2),
          (o.rotation.y = Math.PI / 2),
          o.scale.set(0.25, 2, ma.width - 0.6),
          (o.visible = !0),
          C.add(o)),
        ma.useMezzanineDepth)
    )
      for (let e = 0; e < ma.width / 3; e++)
        (o = sceneRoot.getObjectByName("MezzanineWood").clone()).position.set(
          1.5 * e,
          ma.mezzanineHeight,
          (H + L) / 2
        ),
          (o.rotation.z = Math.PI / 2),
          (o.scale.z = U),
          (o.scale.x = 3),
          (o.visible = !0),
          C.add(o),
          (o = sceneRoot.getObjectByName("MezzanineWood").clone()).position.set(
            -1.5 * e,
            ma.mezzanineHeight,
            (H + L) / 2
          ),
          (o.rotation.z = Math.PI / 2),
          (o.scale.z = U),
          (o.scale.x = 3),
          (o.visible = !0),
          C.add(o);
    for (
      let t = ma.mezzanineStartingBay - 1;
      t < ma.mezzanineBays + ma.mezzanineStartingBay - 1;
      t++
    ) {
      ((o = N.clone()).name = "Mezzanine-Truss-Top"),
        o.position.set(0, ma.mezzanineHeight - 0.04, -placeholderA[t + 1]),
        (o.rotation.y = Math.PI / 2),
        (o.rotation.x = Math.PI / 2),
        o.scale.set(0.25, 2, ma.width - 0.6),
        "Post Frame" == ma.frameType && (o.scale.x = 3),
        (o.visible = !0),
        C.add(o),
        "Post Frame" !== ma.frameType &&
        (((o = N.clone()).name = "Mezzanine-Truss-Bottom"),
          o.position.set(0, ma.mezzanineHeight - 0.6, -placeholderA[t + 1]),
          (o.rotation.x = Math.PI / 2),
          (o.rotation.y = Math.PI / 2),
          o.scale.set(0.25, 2, ma.width - 0.6),
          (o.visible = !0),
          C.add(o));
      for (var j = 0; j < ma.width / 3; j++)
        if (
          (ma.useMezzanineDepth ||
            ((o = sceneRoot
              .getObjectByName("MezzanineWood")
              .clone()).position.set(
                1.5 * j,
                ma.mezzanineHeight,
                -placeholderA[t + 1] +
                (placeholderA[t] - placeholderA[t + 1]) / -2
              ),
              (o.rotation.z = Math.PI / 2),
              (o.rotation.y = 0),
              (o.scale.z = placeholderA[t] - placeholderA[t + 1] - 0.06),
              (o.scale.x = 3),
              (o.visible = !0),
              C.add(o),
              (o = sceneRoot
                .getObjectByName("MezzanineWood")
                .clone()).position.set(
                  -1.5 * j,
                  ma.mezzanineHeight,
                  -placeholderA[t + 1] +
                  (placeholderA[t] - placeholderA[t + 1]) / -2
                ),
              (o.rotation.z = Math.PI / 2),
              (o.rotation.y = 0),
              (o.scale.z = placeholderA[t] - placeholderA[t + 1] - 0.06),
              (o.scale.x = 3),
              (o.visible = !0),
              C.add(o)),
            "Post Frame" !== ma.frameType)
        ) {
          let e;
          t == ma.mezzanineStartingBay - 1 &&
            ((o = N.clone()).material.color.copy(mainVar),
              (o.name = "Mezzanine-Webbing-Vertical"),
              o.position.set(
                1.5 * j + 0.1,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t]
              ),
              o.scale.set(1, 0.5, 0.55),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 0),
              C.add(o),
              ((o = N.clone()).name = "Mezzanine-Webbing-Vertical"),
              o.position.set(
                -1.5 * j + 0.1,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t]
              ),
              o.scale.set(1, 0.5, 0.55),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 0),
              C.add(o),
              3 * (j + 1) < ma.width) &&
            ((e = j % 2 == 0 ? 1 : -1),
              ((o = N.clone()).name = "Mezzanine-Webbing-Diagonal"),
              o.position.set(
                1.5 * j + 0.85,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t]
              ),
              o.scale.set(0.25, 0.5, 1.6),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 1.23 * e),
              C.add(o),
              (e = j % 2 == 0 ? 1 : -1),
              ((o = N.clone()).name = "Mezzanine-Webbing-Diagonal"),
              o.position.set(
                -1.5 * j + 0.85,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t]
              ),
              o.scale.set(0.25, 0.5, 1.6),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 1.23 * e),
              C.add(o)),
            ((o = N.clone()).name = "Mezzanine-Webbing-Vertical"),
            o.position.set(
              1.5 * j + 0.1,
              ma.mezzanineHeight - 0.35,
              -placeholderA[t + 1]
            ),
            o.scale.set(1, 0.5, 0.55),
            (o.rotation.x = Math.PI / 2),
            (o.rotation.y = 0),
            C.add(o),
            ((o = N.clone()).name = "Mezzanine-Webbing-Vertical"),
            o.position.set(
              -1.5 * j + 0.1,
              ma.mezzanineHeight - 0.35,
              -placeholderA[t + 1]
            ),
            o.scale.set(1, 0.5, 0.55),
            (o.rotation.x = Math.PI / 2),
            (o.rotation.y = 0),
            C.add(o),
            3 * (j + 1) < ma.width &&
            ((e = j % 2 == 0 ? 1 : -1),
              ((o = N.clone()).name = "Mezzanine-Webbing-Diagonal"),
              o.position.set(
                1.5 * j + 0.85,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t + 1]
              ),
              o.scale.set(0.25, 0.5, 1.6),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 1.23 * e),
              C.add(o),
              (e = j % 2 == 0 ? 1 : -1),
              ((o = N.clone()).name = "Mezzanine-Webbing-Diagonal"),
              o.position.set(
                -1.5 * j + 0.85,
                ma.mezzanineHeight - 0.35,
                -placeholderA[t + 1]
              ),
              o.scale.set(0.25, 0.5, 1.6),
              (o.rotation.x = Math.PI / 2),
              (o.rotation.y = 1.23 * e),
              C.add(o));
        }
    }
    var e;
    let t = ma.width - 0.6,
      a = 0;
    if (
      (ma.hasOwnProperty("mezzanineStairs") &&
        "None" !== ma.mezzanineStairs &&
        ((t -= 4),
          ma.mezzanineStairs.startsWith("Left")
            ? (a = 2)
            : ma.mezzanineStairs.startsWith("Right") && (a = -2)),
        "Framed" == ma.mezzanineRailing)
    ) {
      (o = N.clone()).position.set(a, ma.mezzanineHeight + 4, L - 0.15),
        (o.rotation.x = THREE.Math.degToRad(0)),
        o.scale.set(1.5, 1.5, t),
        (o.visible = !0),
        C.add(o),
        (o = N.clone()).position.set(a, ma.mezzanineHeight + 3, L - 0.15),
        (o.rotation.x = THREE.Math.degToRad(-90)),
        o.scale.set(1.5, 1.5, t),
        (o.visible = !0),
        C.add(o),
        (o = N.clone()).position.set(a, ma.mezzanineHeight + 2, L - 0.15),
        (o.rotation.x = THREE.Math.degToRad(-90)),
        o.scale.set(1.5, 1.5, t),
        (o.visible = !0),
        C.add(o),
        (o = N.clone()).position.set(a, ma.mezzanineHeight + 1, L - 0.15),
        (o.rotation.x = THREE.Math.degToRad(-90)),
        o.scale.set(1.5, 1.5, t),
        (o.visible = !0),
        C.add(o);
      for (let e = 0; e < t / 4; e++)
        (o = N.clone()),
          ma.mezzanineStairs.startsWith("Right")
            ? o.position.set(
              t / 2 - a - 4 * e,
              ma.mezzanineHeight + 2,
              L - 0.15
            )
            : o.position.set(
              a - t / 2 + 4 * e,
              ma.mezzanineHeight + 2,
              L - 0.15
            ),
          (o.rotation.y = THREE.Math.degToRad(0)),
          (o.rotation.z = THREE.Math.degToRad(-90)),
          o.scale.set(1.5, 1.5, 4),
          (o.visible = !0),
          C.add(o);
    } else
      "Steel Covered" == ma.mezzanineRailing &&
        ((e = new THREE.BoxGeometry(1, 1, 1)),
          ((newTexture = defaultNormalMap.clone()).needsUpdate = !0),
          ((x = new THREE.MeshPhongMaterial({
            normalMap: newTexture,
            color: 16777215,
            specular: 3947580,
            shininess: 40,
            side: THREE.DoubleSide,
          })).normalMap = newTexture),
          (o = new THREE.Mesh(e, x)).position.set(
            a,
            ma.mezzanineHeight + 2,
            L - 0.15
          ),
          o.scale.set(t, 4, 4 / 12),
          C.add(o),
          x.normalMap.repeat.set(t * activeMaterial, 1));
    if (
      ma.hasOwnProperty("mezzanineStairs") &&
      "Left Straight" == ma.mezzanineStairs
    ) {
      (o = sceneRoot.getObjectByName("Stairs").clone()).position.set(
        a - ma.width / 2 + 0.6,
        ma.mezzanineHeight,
        L
      ),
        (o.visible = !0),
        (o.castShadow = !0),
        (o.receiveShadow = false);
      for (let e = 0; e < o.material.length; e++)
        (o.material[e].clippingPlanes = [configImport]),
          (o.material[e].clipIntersection = !0),
          (o.material[e].clipShadows = !0),
          o.material[e].name.startsWith("StairsMetal") &&
          ("Steel Covered" == ma.mezzanineRailing
            ? (o.material[e].visible = !0)
            : (o.material[e].visible = false));
      C.add(o),
        (configImport.constant = L + (ma.mezzanineHeight / 7) * 11 + 0.01),
        configImport.normal.set(0, 0, -1);
    }
    if (
      ma.hasOwnProperty("mezzanineStairs") &&
      "Right Straight" == ma.mezzanineStairs
    ) {
      (o = sceneRoot.getObjectByName("Stairs").clone()).position.set(
        ma.width / 2 + a - 0.6,
        ma.mezzanineHeight,
        L
      ),
        (o.visible = !0),
        (o.castShadow = !0),
        (o.receiveShadow = false);
      for (let e = 0; e < o.material.length; e++)
        (o.material[e].clippingPlanes = [configImport]),
          (o.material[e].clipIntersection = !0),
          (o.material[e].clipShadows = !0),
          o.material[e].name.startsWith("StairsMetal") &&
          ("Steel Covered" == ma.mezzanineRailing
            ? (o.material[e].visible = !0)
            : (o.material[e].visible = false));
      C.add(o),
        (configImport.constant = L + (ma.mezzanineHeight / 7) * 11 + 0.01),
        configImport.normal.set(0, 0, -1);
    }
    if (
      ma.hasOwnProperty("mezzanineStairs") &&
      "Left Landing" == ma.mezzanineStairs
    ) {
      (o = sceneRoot.getObjectByName("Stairs-L").clone()).position.set(
        ma.width / -2 + 0.6,
        ma.mezzanineHeight,
        L
      ),
        (o.visible = !0),
        (o.castShadow = !0),
        (o.receiveShadow = false);
      for (let e = 0; e < o.material.length; e++)
        (o.material[e].clippingPlanes = [configImport]),
          (o.material[e].clipIntersection = !0),
          (o.material[e].clipShadows = !0),
          o.material[e].name.startsWith("StairsMetal") &&
          ("Steel Covered" == ma.mezzanineRailing
            ? (o.material[e].visible = !0)
            : (o.material[e].visible = false));
      C.add(o),
        (configImport.constant =
          ma.width / -2 + 0.6 + 4 + (ma.mezzanineHeight / 7) * 11 + 0.01),
        configImport.normal.set(-1, 0, 0);
    }
    if (
      ma.hasOwnProperty("mezzanineStairs") &&
      "Right Landing" == ma.mezzanineStairs
    ) {
      (o = sceneRoot.getObjectByName("Stairs-R").clone()).position.set(
        ma.width / 2 - 0.6,
        ma.mezzanineHeight,
        L
      ),
        (o.visible = !0),
        (o.castShadow = !0),
        (o.receiveShadow = false);
      for (let e = 0; e < o.material.length; e++)
        (o.material[e].clippingPlanes = [configImport]),
          (o.material[e].clipIntersection = !0),
          (o.material[e].clipShadows = !0),
          o.material[e].name.startsWith("StairsMetal") &&
          ("Steel Covered" == ma.mezzanineRailing
            ? (o.material[e].visible = !0)
            : (o.material[e].visible = false));
      C.add(o),
        (configImport.constant =
          ma.width / -2 + 0.6 + 4 + (ma.mezzanineHeight / 7) * 11 + 0.01),
        configImport.normal.set(1, 0, 0);
    }
  }
  sceneRoot.traverse(function (i) {
    if ("scale-driveway-clone" === i.name) {
      let e = 0,
        t = 0,
        a = 0,
        o = 0;
      ma.leanTo2 && (e = ma.leanTo2Depth),
        ma.leanTo4 && (t = ma.leanTo4Depth),
        ma.leanTo1 && (a = ma.leanTo1Depth),
        ma.leanTo3 && (o = ma.leanTo3Depth),
        0 === i.rotation.y
          ? (i.position.z = ma.depth / 2 + a)
          : i.rotation.y === Math.PI / -2
            ? (i.position.x = ma.width / -2 - e)
            : i.rotation.y === Math.PI
              ? (i.position.z = ma.depth / -2 - o)
              : i.rotation.y === Math.PI / 2 && (i.position.x = ma.width / 2 + t);
    }
    if (i instanceof THREE.Mesh) {
      var e = 0;
      if ("building" === i.name) {
        "Asymmetrical" === ma.roofType
          ? (i.morphTargetInfluences[i.morphTargetDictionary.right] =
            ma.asymmetrical / 100)
          : (i.morphTargetInfluences[i.morphTargetDictionary.right] = 0);
        var t, a;
        for (
          ma.leanTo2 && ma.leanTo2Depth,
          ma.leanTo4 && ma.leanTo4Depth,
          ma.leanTo1 && ma.leanTo1Depth,
          ma.leanTo3 && ma.leanTo3Depth,
          aoPass.scale.set(ma.width, ma.peakHeight(), ma.depth),
          i.morphTargetInfluences[i.morphTargetDictionary.width] =
          (ma.width - 1) / 100,
          i.morphTargetInfluences[i.morphTargetDictionary.depth] =
          (ma.depth - 1) / 1e3,
          i.morphTargetInfluences[i.morphTargetDictionary.height] !=
          (ma.height - 1) / 100 &&
          (i.morphTargetInfluences[i.morphTargetDictionary.height] =
            (ma.height - 1) / 100),
          e = 0;
          e < i.material.length;
          e++
        )
          ("BuildingWallsWidthLeftFront" !== i.material[e].name &&
            "BuildingWallsWidthLeftBack" !== i.material[e].name &&
            "BuildingWallsWidthLeftFront-Interior" !== i.material[e].name &&
            "BuildingWallsWidthLeftBack-Interior" !== i.material[e].name) ||
            ((a =
              "Asymmetrical" === ma.roofType
                ? ((t = ma.width + 2 * ma.asymmetrical), ma.asymmetrical)
                : ((t = ma.width), 0)),
              ma.hasOwnProperty("boardAndBattenWoodenBarnSiding") &&
              ma.boardAndBattenWoodenBarnSiding &&
              (i.material[e].map.repeat.set(t / 3, 2),
                (i.material[e].map.offset.x = (t + a) * activeMaterial + 0.5)),
              i.material[e].normalMap.repeat.set(t * activeMaterial, 1),
              (i.material[e].normalMap.offset.x =
                (t + a) * activeMaterial + 0.5)),
            ("BuildingWallsWidthRightFront" !== i.material[e].name &&
              "BuildingWallsWidthRightBack" !== i.material[e].name &&
              "BuildingWallsWidthRightFront-Interior" !== i.material[e].name &&
              "BuildingWallsWidthRightBack-Interior" !== i.material[e].name) ||
            ((a =
              "Asymmetrical" === ma.roofType
                ? ((t = ma.width - 2 * ma.asymmetrical), ma.asymmetrical)
                : ((t = ma.width), 0)),
              i.material[e].normalMap.repeat.set(t * activeMaterial, 1),
              (i.material[e].normalMap.offset.x =
                (t + a) * activeMaterial + 0.5)),
            ("BuildingWallsWidth" !== i.material[e].name &&
              "BuildingWainscot1" !== i.material[e].name &&
              "BuildingWainscot3" !== i.material[e].name) ||
            (i.material[e].normalMap.repeat.set(ma.width * activeMaterial, 1),
              (i.material[e].normalMap.offset.x =
                ma.width * activeMaterial + 0.5)),
            ("BuildingWallsDepthL" !== i.material[e].name &&
              "BuildingWallsDepthR" !== i.material[e].name &&
              "BuildingWallsDepthL-Interior" !== i.material[e].name &&
              "BuildingWallsDepthR-Interior" !== i.material[e].name &&
              "BuildingWainscot2" !== i.material[e].name &&
              "BuildingWainscot4" !== i.material[e].name) ||
            (i.material[e].normalMap.repeat.set(ma.depth * activeMaterial, 1),
              (i.material[e].normalMap.offset.x =
                ma.depth * activeMaterial + 0.5)),
            ("BuildingCeilingLeft-Interior" !== i.material[e].name &&
              "BuildingCeilingRight-Interior" !== i.material[e].name) ||
            (i.material[e].normalMap.repeat.set(ma.depth * activeMaterial, 1),
              (i.material[e].normalMap.offset.x =
                ma.depth * activeMaterial + 0.5));
      }
      if (
        "roofL" === i.name ||
        "roofR" === i.name ||
        "roofEaveL" === i.name ||
        "roofEaveR" === i.name
      )
        for (
          i.morphTargetInfluences[i.morphTargetDictionary.depth] =
          (ma.depth + ma.gableFront + ma.gableBack - 1) / 1e3,
          i.position.z = ma.gableFront / 2 - ma.gableBack / 2,
          e = 0;
          e < i.material.length;
          e++
        )
          ("BuildingRoof" !== i.material[e].name &&
            "BuildingSoffit" !== i.material[e].name) ||
            (i.material[e].normalMap.repeat.set(
              (ma.depth + ma.gableFront + ma.gableBack) * activeMaterial,
              1
            ),
              (i.material[e].normalMap.offset.x =
                (ma.depth + ma.gableFront / 2 - 6 * ma.gableBack) *
                activeMaterial +
                0.5));
      if (
        "leanTo1" === i.name ||
        "leanTo2" === i.name ||
        "leanTo3" === i.name ||
        "leanTo4" === i.name
      ) {
        let o = i.name.replace(/\D/g, ""),
          e = 0,
          t = 0;
        "leanTo1" === i.name || "leanTo3" === i.name
          ? (e = ma[i.name + "CutL"] / 2 - ma[i.name + "CutR"] / 2)
          : (t = ma[i.name + "CutL"] / 2 - ma[i.name + "CutR"] / 2),
          "leanTo1" === i.name &&
          (i.position.set(e, 0, ma.depth / 2),
            sceneRoot
              .getObjectByName(i.name + "Roof")
              .position.set(e, 0, ma.depth / 2)),
          "leanTo2" === i.name &&
          (i.position.set(ma.width / -2, 0, t),
            sceneRoot
              .getObjectByName(i.name + "Roof")
              .position.set(ma.width / -2, 0, t)),
          "leanTo3" === i.name &&
          (i.position.set(-e, 0, ma.depth / -2),
            sceneRoot
              .getObjectByName(i.name + "Roof")
              .position.set(-e, 0, ma.depth / -2)),
          "leanTo4" === i.name &&
          (i.position.set(ma.width / 2, 0, -t),
            sceneRoot
              .getObjectByName(i.name + "Roof")
              .position.set(ma.width / 2, 0, -t)),
          "leanTo1" === i.name &&
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          sceneRoot
            .getObjectByName("leanTo1BoundingBox")
            .position.set(e, 0, ma.depth / 2),
          "leanTo2" === i.name &&
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          sceneRoot
            .getObjectByName("leanTo2BoundingBox")
            .position.set(ma.width / -2, 0, t),
          "leanTo3" === i.name &&
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          sceneRoot
            .getObjectByName("leanTo3BoundingBox")
            .position.set(-e, 0, ma.depth / -2),
          "leanTo4" === i.name &&
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          sceneRoot
            .getObjectByName("leanTo4BoundingBox")
            .position.set(ma.width / 2, 0, -t),
          ma.settings.roundAllButMinimumRoofPitch &&
          ma["leanTo" + o + "Pitch"] < ma.settings.roofPitchMin &&
          (ma["leanTo" + o + "Pitch"] = ma.settings.roofPitchMin),
          ma.settings.roundAllButMinimumRoofPitch &&
          (ma["leanTo" + o + "Pitch"] > ma.settings.roofPitchMin ||
            ma["leanTo" + o + "Pitch"] < -ma.settings.roofPitchMin) &&
          (ma["leanTo" + o + "Pitch"] = Math.round(
            ma["leanTo" + o + "Pitch"]
          )),
          (1 == o || 3 == o) &&
          ma["leanTo" + o + "Height"] > ma.height &&
          (ma["leanTo" + o + "Height"] = ma.height),
          ma.leanTo2Height > ma.wallHeightL() &&
          (ma["leanTo" + o + "Height"] = ma.wallHeightL()),
          ma.leanTo4Height > ma.wallHeightR() &&
          (ma["leanTo" + o + "Height"] = ma.wallHeightR()),
          1 == o || 3 == o
            ? ma["leanTo" + o + "Length"] > ma.width &&
            (ma["leanTo" + o + "Length"] = ma.width)
            : (2 != o && 4 != o) ||
            (ma["leanTo" + o + "Length"] > ma.depth &&
              (ma["leanTo" + o + "Length"] = ma.depth));
        var n = (ma["leanTo" + o + "Depth"] * ma["leanTo" + o + "Pitch"]) / 12,
          r = Math.atan(ma["leanTo" + o + "Depth"] / n),
          s = Math.sqrt(
            Math.pow(n, 2) + Math.pow(ma["leanTo" + o + "Depth"], 2)
          ),
          l =
            ((i.morphTargetInfluences[i.morphTargetDictionary.roofPeak] =
              n / 100),
              (sceneRoot.getObjectByName("leanTo" + o + "Roof").position.y =
                ma["leanTo" + o + "Height"] + 0.1),
              1 == o &&
              sceneRoot
                .getObjectByName("leanTo" + o + "Roof")
                .rotation.set(-r, Math.PI / -2, Math.PI / -2),
              2 == o &&
              sceneRoot
                .getObjectByName("leanTo" + o + "Roof")
                .rotation.set(0, Math.PI, r - Math.PI / 2),
              3 == o &&
              sceneRoot
                .getObjectByName("leanTo" + o + "Roof")
                .rotation.set(r - Math.PI, Math.PI / 2, Math.PI / 2),
              4 == o &&
              sceneRoot
                .getObjectByName("leanTo" + o + "Roof")
                .rotation.set(0, 0, Math.PI / -2 + r),
              2 == o &&
              (sceneRoot.getObjectByName("leanTo" + o + "Roof").position.z =
                t + (ma.gableFront - ma.gableBack) / 2),
              4 == o &&
              (sceneRoot.getObjectByName("leanTo" + o + "Roof").position.z =
                -t + (ma.gableFront - ma.gableBack) / 2),
              2 == o &&
              ((sceneRoot.getObjectByName(
                "leanTo" + o + "Roof"
              ).morphTargetInfluences[
                sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetDictionary.width
              ] = (s - 0.5) / 50),
                ma.settings.leantoRoofOverhangsFollowMainRoof) &&
              (sceneRoot.getObjectByName(
                "leanTo" + o + "Roof"
              ).morphTargetInfluences[
                sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetDictionary.width
              ] += ma.eaveL / 50),
              4 == o &&
              ((sceneRoot.getObjectByName(
                "leanTo" + o + "Roof"
              ).morphTargetInfluences[
                sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetDictionary.width
              ] = (s - 0.5) / 50),
                ma.settings.leantoRoofOverhangsFollowMainRoof) &&
              (sceneRoot.getObjectByName(
                "leanTo" + o + "Roof"
              ).morphTargetInfluences[
                sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetDictionary.width
              ] += ma.eaveR / 50),
              2 == o || 4 == o
                ? ((sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetInfluences[
                  sceneRoot.getObjectByName(
                    "leanTo" + o + "Roof"
                  ).morphTargetDictionary.depth
                ] = (ma["leanTo" + o + "Length"] - 1) / 1e3),
                  ma.settings.leantoRoofOverhangsFollowMainRoof &&
                  (sceneRoot.getObjectByName(
                    "leanTo" + o + "Roof"
                  ).morphTargetInfluences[
                    sceneRoot.getObjectByName(
                      "leanTo" + o + "Roof"
                    ).morphTargetDictionary.depth
                  ] += (ma.gableFront + ma.gableBack) / 1e3))
                : ((sceneRoot.getObjectByName(
                  "leanTo" + o + "Roof"
                ).morphTargetInfluences[
                  sceneRoot.getObjectByName(
                    "leanTo" + o + "Roof"
                  ).morphTargetDictionary.width
                ] = (s - 0.5) / 50),
                  (sceneRoot.getObjectByName(
                    "leanTo" + o + "Roof"
                  ).morphTargetInfluences[
                    sceneRoot.getObjectByName(
                      "leanTo" + o + "Roof"
                    ).morphTargetDictionary.depth
                  ] = (ma["leanTo" + o + "Length"] - 1) / 1e3)),
              (i.morphTargetInfluences[i.morphTargetDictionary.depth] =
                (ma["leanTo" + o + "Length"] - 1) / 1e3),
              (i.morphTargetInfluences[i.morphTargetDictionary.width] =
                (ma["leanTo" + o + "Depth"] - 0.5) / 50),
              (i.morphTargetInfluences[i.morphTargetDictionary.height] =
                (ma["leanTo" + o + "Height"] - 1 - n) / 100),
              "leanTo1" === i.name &&
              ma.leanTo1 &&
              ma.leanTo1Enclosed &&
              "Fully Enclosed" == ma.leanTo1Walls &&
              sceneRoot
                .getObjectByName("leanTo1BoundingBox")
                .scale.set(
                  ma["leanTo" + o + "Length"],
                  ma["leanTo" + o + "Height"],
                  ma["leanTo" + o + "Depth"]
                ),
              "leanTo2" === i.name &&
              ma.leanTo2 &&
              ma.leanTo2Enclosed &&
              "Fully Enclosed" == ma.leanTo2Walls &&
              sceneRoot
                .getObjectByName("leanTo2BoundingBox")
                .scale.set(
                  ma["leanTo" + o + "Length"],
                  ma["leanTo" + o + "Height"],
                  ma["leanTo" + o + "Depth"]
                ),
              "leanTo3" === i.name &&
              ma.leanTo3 &&
              ma.leanTo3Enclosed &&
              "Fully Enclosed" == ma.leanTo3Walls &&
              sceneRoot
                .getObjectByName("leanTo3BoundingBox")
                .scale.set(
                  ma["leanTo" + o + "Length"],
                  ma["leanTo" + o + "Height"],
                  ma["leanTo" + o + "Depth"]
                ),
              "leanTo4" === i.name &&
              ma.leanTo4 &&
              ma.leanTo4Enclosed &&
              "Fully Enclosed" == ma.leanTo4Walls &&
              sceneRoot
                .getObjectByName("leanTo4BoundingBox")
                .scale.set(
                  ma["leanTo" + o + "Length"],
                  ma["leanTo" + o + "Height"],
                  ma["leanTo" + o + "Depth"]
                ),
              sceneRoot.getObjectByName("leanTo" + o).material);
        let a = 0;
        for (let e = 0; e < l.length; e++)
          ("LeantoWallsDepth" !== l[e].name &&
            "LeantoWainscot2" !== l[e].name) ||
            ((a = ma["leanTo" + o + "Length"]),
              l[e].normalMap.repeat.set(a * activeMaterial, 1),
              (l[e].normalMap.offset.x = a + 0.5)),
            ("LeantoWallsWidth" !== l[e].name &&
              "LeantoWainscot1" !== l[e].name &&
              "LeantoWainscot3" !== l[e].name) ||
            ((a = ma["leanTo" + o + "Depth"]),
              l[e].normalMap.repeat.set((24 * a) / 9, 1),
              (l[e].normalMap.offset.x = (24 * a) / 9 + 0.5));
        if (
          ma.leanTo2 &&
          ma.leanTo2Height == ma.wallHeightL() &&
          ma.leanTo2Length == ma.depth
        )
          sceneRoot.traverse(function (t) {
            if (t instanceof THREE.Mesh && "leanTo2Roof" === t.name)
              for (let e = 0; e < t.material.length; e++)
                ("BuildingTrim-RoofPivot" !== t.material[e].name &&
                  "BuildingRidgeCap" !== t.material[e].name) ||
                  (t.material[e].visible = false);
            for (let e = 0; e < wallGroup.material.length; e++)
              "BuildingTrim-RoofEdge" === wallGroup.material[e].name &&
                (wallGroup.material[e].visible = false);
          });
        else
          for (let e = 0; e < wallGroup.material.length; e++)
            ma.hideWalls <= 1 &&
              "BuildingTrim-RoofEdge" === wallGroup.material[e].name &&
              (wallGroup.material[e].visible = !0);
        if (
          ma.leanTo4 &&
          ma.leanTo4Height == ma.wallHeightR() &&
          ma.leanTo4Length == ma.depth
        )
          sceneRoot.traverse(function (t) {
            if (t instanceof THREE.Mesh && "leanTo4Roof" === t.name)
              for (let e = 0; e < t.material.length; e++)
                ("BuildingTrim-RoofPivot" !== t.material[e].name &&
                  "BuildingRidgeCap" !== t.material[e].name) ||
                  (t.material[e].visible = false);
            for (let e = 0; e < roofGroup.material.length; e++)
              "BuildingTrim-RoofEdge" === roofGroup.material[e].name &&
                (roofGroup.material[e].visible = false);
          });
        else
          for (let e = 0; e < roofGroup.material.length; e++)
            ma.hideWalls <= 1 &&
              "BuildingTrim-RoofEdge" === roofGroup.material[e].name &&
              (roofGroup.material[e].visible = !0);
        if (
          ((l = sceneRoot.getObjectByName("building").material),
            ma["leanTo" + o] &&
            ma["leanTo" + o + "Enclosed"] &&
            "Fully Enclosed" == ma["leanTo" + o + "Walls"] &&
            (((1 == o || 3 == o) && ma["leanTo" + o + "Length"] == ma.width) ||
              ((2 == o || 4 == o) && ma["leanTo" + o + "Length"] == ma.depth)))
        )
          if (
            (ma["leanTo" + o + "Height"] == ma.wallHeightL() && 2 == o) ||
            (ma["leanTo" + o + "Height"] == ma.wallHeightR() && 4 == o)
          )
            for (let e = 0; e < l.length; e++)
              2 != o ||
                ("BuildingWallsDepthL" !== l[e].name &&
                  "BuildingWallsDepthL-Interior" !== l[e].name) ||
                (l[e].visible = false),
                4 != o ||
                ("BuildingWallsDepthR" !== l[e].name &&
                  "BuildingWallsDepthR-Interior" !== l[e].name) ||
                (l[e].visible = false),
                l[e].name === "BuildingTrim" + o && (l[e].visible = false),
                o - 1 == 0
                  ? "BuildingTrim4" === l[e].name && (l[e].visible = false)
                  : l[e].name === "BuildingTrim" + (o - 1) &&
                  (l[e].visible = false);
          else {
            let e, t, a;
            (a =
              1 == o
                ? ((e = +o + 1), (t = +o + 3), ma.depth)
                : 4 == o
                  ? ((e = +o - 3), (t = +o - 1), ma.depth)
                  : ((e = +o + 1), (t = +o - 1), ma.width)),
              (P[t] = Math.max(P[t], ma["leanTo" + o + "Height"])),
              ma["leanTo" + t] &&
              ma["leanTo" + t + "Length"] == a &&
              (P[t] = Math.max(P[t], ma["leanTo" + t + "Height"])),
              (P[o] = Math.max(P[o], ma["leanTo" + o + "Height"])),
              ma["leanTo" + e] &&
              ma["leanTo" + e + "Length"] == a &&
              (P[o] = Math.max(P[o], ma["leanTo" + e + "Height"]));
          }
      }
      if (
        (i.name.startsWith("window") ||
          i.name.startsWith("walkDoor") ||
          i.name.startsWith("garage") ||
          i.name.startsWith("mansard")) &&
        _a.includes(i.getObjectByName("itemSelectionBox"))
      ) {
        let t = new THREE.Raycaster();
        (r = new THREE.Vector3()),
          (s = new THREE.Vector3()),
          (n =
            (i.getWorldDirection(s),
              r.copy(i.position).add(s.multiplyScalar(200)),
              new THREE.Vector3())),
          (s = i.getWorldDirection(n).multiply(new THREE.Vector3(-1, 1, -1)));
        t.set(r, s),
          ma.hasOwnProperty("perimeterWalls") &&
          i.morphTargetDictionary.hasOwnProperty("thickness") &&
          ("None" !== ma.perimeterWalls ||
            (ma.hasOwnProperty("perimeterWalls2") &&
              "None" !== ma.perimeterWalls2)
            ? (i.morphTargetInfluences[
              i.morphTargetDictionary.thickness
            ] = 0.5)
            : (i.morphTargetInfluences[
              i.morphTargetDictionary.thickness
            ] = 0)),
          setTimeout(function () {
            var e = t.intersectObjects($a, !0);
            0 < e.length && e[0].object.name.endsWith("BoundingBox")
              ? i.position.copy(e[0].point)
              : (ma[i.name.replace("-clone", "") + "Qty"]--,
                sceneRoot.remove(i)),
              (isMaterialUpdateEnabled = !0);
          }, 25);
      }
    }
  }),
    Ya(),
    ao(),
    go(),
    uo(),
    eo(),
    to(),
    wi(isUIInitialized),
    (isMaterialUpdateEnabled = !0);
}

function Za(h, c, d, p) {
  (h = h || false), (c = c || false), (d = d || false), (p = p || false);
  let m,
    g = 0,
    u = 0,
    T = 0,
    y = 0,
    b =
      (ma.leanTo2 &&
        ma.leanTo2Length == ma.depth &&
        ma.leanTo2Enclosed &&
        "Fully Enclosed" == ma.leanTo2Walls &&
        (g = ma.leanTo2Depth),
        ma.leanTo4 &&
        ma.leanTo4Length == ma.depth &&
        ma.leanTo4Enclosed &&
        "Fully Enclosed" == ma.leanTo4Walls &&
        (u = ma.leanTo4Depth),
        ma.leanTo1 &&
        ma.leanTo1Length == ma.width &&
        ma.leanTo1Enclosed &&
        "Fully Enclosed" == ma.leanTo1Walls &&
        (T = ma.leanTo1Depth),
        ma.leanTo3 &&
        ma.leanTo3Length == ma.width &&
        ma.leanTo3Enclosed &&
        "Fully Enclosed" == ma.leanTo3Walls &&
        (y = ma.leanTo3Depth),
        0),
    f = 0,
    w = 0;
  if (h) {
    "NW" == c && ((b = ma.width / 2 + u), (f = ma.depth / 2 + T)),
      "NE" == c &&
      ((b = ma.width / -2 - g), (f = ma.depth / 2 + T), (w = Math.PI / -2)),
      "SW" == c &&
      ((b = ma.width / 2 + u), (f = ma.depth / -2 - y), (w = Math.PI / 2)),
      "SE" == c &&
      ((b = ma.width / -2 - g), (f = ma.depth / -2 - y), (w = Math.PI)),
      "N" == c && ((b = false), (f = ma.depth / 2 + T)),
      "S" == c && ((b = false), (f = ma.depth / -2 - y), (w = Math.PI)),
      "E" == c && ((b = ma.width / -2 - g), (f = false), (w = Math.PI / -2)),
      "W" == c && ((b = ma.width / 2 + u), (f = false), (w = Math.PI / 2));
    let e = 4,
      t = 10;
    "S" == c || "N" == c
      ? (t = ma.width)
      : ("E" != c && "W" != c) || (t = ma.depth);
    h = ma.height;
    let a = false;
    let o = 0;
    let i = 0;
    if (lastHoveredItem.getObjectByName(d + c + "-clone"))
      (m = lastHoveredItem.getObjectByName(d + c + "-clone")),
        b && (m.position.x = b),
        f && (m.position.z = f),
        (m.visible = !0),
        Ja(d + c + "-clone");
    else if (lastHoveredItem.getObjectByName(d)) {
      if (
        (((m = lastHoveredItem.getObjectByName(d).deepClone()).name =
          d + c + "-clone"),
          (m.visible = !0),
          (m.castShadow = !0),
          Xo(m),
          b && (m.position.x = b),
          f && (m.position.z = f),
          (m.rotation.y = w),
          lastHoveredItem.add(m),
          (m.morphTargetInfluences[m.morphTargetDictionary.porchDepth] = -4),
          (o = ((e - 3.5) / 12) * 6),
          (m.morphTargetInfluences[m.morphTargetDictionary.slope] = o),
          (m.morphTargetInfluences[m.morphTargetDictionary.height] =
            h - 13.5 - o),
          ma.allowLeanToCeilingHeight
            ? ((m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
              ma.height - 10 - 1.5),
              ma.allowLeanToCeilingHeight &&
              ma.height < 10.5 &&
              (m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
                ma.height - 10 - (6 * e) / 12))
            : ((i = h - (6 * e) / 12 - 0.25),
              (m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
                i - 10 - 4 / 12)),
          (m.morphTargetInfluences[m.morphTargetDictionary.Overhang] = 0),
          ("S" != c && "N" != c && "E" != c && "W" != c) ||
          (m.morphTargetInfluences[m.morphTargetDictionary.width] = t - 10),
          !ma.settings.woodenPorchPosts)
      )
        for (let e = 0; e < m.material.length; e++)
          "PorchPosts" === m.material[e].name &&
            (m.material[e].visible = false),
            "PorchPostsMetal" === m.material[e].name &&
            m.material[e].color.copy(mainVar);
      if (
        ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") &&
        ma.settings.showPorchPostsOnEndwallsOnly
      ) {
        if ("E" == c || "W" == c)
          for (let e = 0; e < m.material.length; e++)
            ("PorchPosts" !== m.material[e].name &&
              "PorchPostsMetal" !== m.material[e].name) ||
              (m.material[e].visible = false);
        ("NW" != c && "SE" != c) || console.log(m),
          ("NE" != c && "SW" != c) || console.log(m);
      }
      Ja(d + c + "-clone");
      for (let e = 0; e < m.material.length; e++)
        "PorchPosts" === m.material[e].name &&
          (m.material[e].color.setStyle(
            colorOptions
              .filter(
                (e) => e.name === ma[ma.settings.wrappedPorchPostColorMatches]
              )
              .map((e) => e.hex)
          ),
            m.material[e].specular.setHex(3947580),
            (m.material[e].shininess.value = 40));
    }
    if ("object" == typeof p) {
      var h = p.position.split(","),
        h =
          ((m.position.x = parseFloat(h[0])),
            (m.position.z = parseFloat(h[2])),
            p.rotation.split(",")),
        h =
          ((m.rotation.x = parseFloat(h[0])),
            (m.rotation.y = parseFloat(h[1])),
            (m.rotation.z = parseFloat(h[2])),
            p.scale.split(",")),
        v = parseFloat(h[0]),
        E = ((t = v), parseFloat(h[1])),
        h = parseFloat(h[2]),
        M = parseFloat(p.porchDepth);
      if (
        ((m.userData.porchDepth = M),
          (i = parseFloat(p.ceilingHeight)),
          (m.userData.ceilingHeight = i),
          p.hasOwnProperty("porchPitch") &&
          ((e = parseFloat(p.porchPitch)), (m.userData.porchPitch = e)),
          p.hasOwnProperty("concrete") &&
          ((a = "1" == p.concrete), (m.userData.concrete = a)),
          (o = ((e - 3.5) / 12) * M),
          (m.morphTargetInfluences[m.morphTargetDictionary.slope] = o),
          (m.morphTargetInfluences[m.morphTargetDictionary.width] = v - 10),
          ("NW" != c && "NE" != c && "SW" != c && "SE" != c) ||
          (m.morphTargetInfluences[m.morphTargetDictionary.depth] = h - 10),
          (m.morphTargetInfluences[m.morphTargetDictionary.height] =
            E - 13.5 - o),
          (m.morphTargetInfluences[m.morphTargetDictionary.porchDepth] = M - 10),
          ma.allowLeanToCeilingHeight
            ? ((m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
              ma.height - 10 - 1.5),
              ma.allowLeanToCeilingHeight &&
              ma.height < 10.5 &&
              (m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
                ma.height - 10 - (M * e) / 12))
            : (m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] =
              i - 10 - 4 / 12),
          (m.morphTargetInfluences[m.morphTargetDictionary.Overhang] =
            p.porchOverhang / 12),
          "1" == p.postMiter &&
          (m.morphTargetInfluences[m.morphTargetDictionary.miters] = 1),
          "1" == p.postWrap)
      )
        for (let e = 0; e < m.material.length; e++)
          "PorchPosts" === m.material[e].name &&
            (m.material[e].color.setStyle(
              colorOptions
                .filter(
                  (e) => e.name === ma[ma.settings.wrappedPorchPostColorMatches]
                )
                .map((e) => e.hex)
            ),
              m.material[e].specular.setHex(3947580),
              (m.material[e].shininess.value = 40));
      if (p.hasOwnProperty("posts")) {
        let t = false;
        "1" == p.posts && (t = !0);
        for (let e = 0; e < m.material.length; e++)
          ("PorchPosts" !== m.material[e].name &&
            "PorchPostsMetal" !== m.material[e].name) ||
            (!ma.settings.woodenPorchPosts &&
              "PorchPostsMetal" !== m.material[e].name) ||
            (m.material[e].visible = t);
      }
      Ja(d + c + "-clone");
    }
    (m.userData.porchSide = c),
      (m.userData.masterObjectName = d),
      (m.userData.name = m.name),
      (m.userData.position = {
        x: m.position.x,
        y: m.position.y,
        z: m.position.z,
      }),
      "N" == c && (m.userData.toBuildingCenter = m.position.x),
      "S" == c && (m.userData.toBuildingCenter = -m.position.x),
      "E" == c && (m.userData.toBuildingCenter = -m.position.z),
      "W" == c && (m.userData.toBuildingCenter = m.position.z),
      (m.userData.rotation = w),
      m.name.startsWith("porchWrapHip")
        ? (m.userData.width =
          m.morphTargetInfluences[m.morphTargetDictionary.width] +
          (m.morphTargetInfluences[m.morphTargetDictionary.porchDepth] + 10))
        : (m.userData.width =
          m.morphTargetInfluences[m.morphTargetDictionary.width] + 10),
      (m.userData.height =
        m.morphTargetInfluences[m.morphTargetDictionary.height] + 13.5),
      (m.userData.porchPitch = e),
      ("NW" != c && "NE" != c && "SW" != c && "SE" != c) ||
      (m.name.startsWith("porchWrapHip")
        ? (m.userData.depth =
          m.morphTargetInfluences[m.morphTargetDictionary.depth] +
          (m.morphTargetInfluences[m.morphTargetDictionary.porchDepth] +
            10))
        : (m.userData.depth =
          m.morphTargetInfluences[m.morphTargetDictionary.depth] + 10)),
      (m.userData.porchDepth =
        m.morphTargetInfluences[m.morphTargetDictionary.porchDepth] + 10),
      (m.userData.postMiter = !!parseInt(
        m.morphTargetInfluences[m.morphTargetDictionary.miters]
      ));
    let n = false,
      r = !0,
      s = a,
      l =
        (m.userData.hasOwnProperty("concrete") && (s = m.userData.concrete),
          m.getObjectByName("concrete"));
    if (l)
      (l.visible = s),
        (l.scale.x = m.userData.width),
        (l.scale.z = m.userData.porchDepth),
        ("NW" != c && "NE" != c && "SW" != c && "SE" != c) ||
        ((l.scale.x = m.userData.width + m.userData.porchDepth),
          (l.scale.z = m.userData.depth + m.userData.porchDepth),
          (l.position.x =
            (m.userData.width + m.userData.porchDepth) / 2 - m.userData.width),
          (l.position.z =
            (m.userData.depth + m.userData.porchDepth) / 2 - m.userData.depth));
    else {
      let e = 0.5;
      ("NW" != c && "NE" != c && "SW" != c && "SE" != c) || (e = 0);
      (v = new THREE.BoxGeometry(1, 0.04, 1)),
        (h =
          (v.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, e)),
            assetBaseUrl + "images/building/concrete.jpg")),
        (E = (loader = new THREE.TextureLoader()).load(h)),
        (M =
          ((E.anisotropy = orbitControls.capabilities.getMaxAnisotropy()),
            (E.wrapS = THREE.RepeatWrapping),
            (E.wrapT = THREE.RepeatWrapping),
            new THREE.MeshPhongMaterial({
              color: "white",
              name: "foundation-Material",
              map: E,
              bumpMap: E,
              bumpScale: 0.04,
              specularMap: E,
            })));
      ((l = new THREE.Mesh(v, M)).name = "concrete"),
        (l.visible = s),
        (l.receiveShadow = !0),
        (l.scale.x = m.userData.width),
        (l.scale.z = m.userData.porchDepth),
        ("NW" != c && "NE" != c && "SW" != c && "SE" != c) ||
        ((l.scale.x = m.userData.width + m.userData.porchDepth),
          (l.scale.z = m.userData.depth + m.userData.porchDepth),
          (l.position.x =
            (m.userData.width + m.userData.porchDepth) / 2 - m.userData.width),
          (l.position.z =
            (m.userData.depth + m.userData.porchDepth) / 2 - m.userData.depth)),
        m.add(l);
    }
    for (let e = 0; e < m.material.length; e++)
      "PorchPosts" === m.material[e].name &&
        40 == m.material[e].shininess.value &&
        (n = !0),
        "PorchPostsMetal" === m.material[e].name && (r = m.material[e].visible);
    (m.userData.postWrap = n),
      (m.userData.posts = r),
      (m.userData.concrete = s),
      (m.userData.porchPitch = e),
      (m.userData.porchOverhang =
        m.morphTargetInfluences[m.morphTargetDictionary.Overhang]),
      (m.userData.ceilingHeight =
        m.morphTargetInfluences[m.morphTargetDictionary.ceilingHeight] + 10),
      (m.userData.scale = {
        x: m.userData.width,
        y: m.userData.height,
        z: m.userData.porchDepth,
      }),
      Ka(m),
      Yo(m);
  } else
    lastHoveredItem.getObjectByName(d + c + "-clone") &&
      (lastHoveredItem.getObjectByName(d + c + "-clone").visible = false),
      Ja(d + c + "-clone", !0);
}

function Ka(o) {
  o = o || false;
  for (let a = 0; a < o.material.length; a++) {
    let e =
      (o.morphTargetInfluences[o.morphTargetDictionary.width] + 10) *
      activeMaterial;
    var i =
      (o.morphTargetInfluences[o.morphTargetDictionary.porchDepth] + 10) *
      activeMaterial;
    let t = 0;
    "porchWrapHip" === o.name.substring(0, 12)
      ? ((e =
        o.morphTargetInfluences[o.morphTargetDictionary.width] *
        activeMaterial),
        (t =
          o.morphTargetInfluences[o.morphTargetDictionary.depth] *
          activeMaterial),
        ("BuildingRoofWidth" !== o.material[a].name &&
          "BuildingWallsWidth" !== o.material[a].name) ||
        o.material[a].normalMap.repeat.set(e, 1),
        ("BuildingRoofDepth" !== o.material[a].name &&
          "BuildingWallsDepth" !== o.material[a].name) ||
        o.material[a].normalMap.repeat.set(t, 1),
        ("BuildingRoof" !== o.material[a].name &&
          "BuildingWalls" !== o.material[a].name) ||
        o.material[a].normalMap.repeat.set(i, 1))
      : "porchWrap" === o.name.substring(0, 9)
        ? ((t =
          (o.morphTargetInfluences[o.morphTargetDictionary.depth] + 10) *
          activeMaterial),
          ("BuildingRoofWidth" !== o.material[a].name &&
            "BuildingWallsWidth" !== o.material[a].name) ||
          o.material[a].normalMap.repeat.set(e, 1),
          ("BuildingRoofDepth" !== o.material[a].name &&
            "BuildingWallsDepth" !== o.material[a].name) ||
          o.material[a].normalMap.repeat.set(t, 1),
          ("BuildingRoof" !== o.material[a].name &&
            "BuildingWalls" !== o.material[a].name) ||
          o.material[a].normalMap.repeat.set(i, 1))
        : ((t = 0),
          ("BuildingRoof" !== o.material[a].name &&
            "BuildingWalls" !== o.material[a].name) ||
          o.material[a].normalMap.repeat.set(e, 1));
  }
}

function Ja(a, e) {
  if (
    ((a = a || false),
      (e = e || false),
      void 0 !== lastHoveredItem.getObjectByName(a))
  ) {
    var o,
      i = lastHoveredItem.getObjectByName(a);
    if (!0 === i.visible)
      if (
        (void 0 === i.getObjectByName("porchPosts")
          ? (((o = new THREE.Group()).name = "porchPosts"), i.add(o))
          : (o = i.getObjectByName("porchPosts")),
          vo(o),
          false === e &&
          i.userData.hasOwnProperty("posts") &&
          !0 === i.userData.posts)
      ) {
        var n = 0,
          e = 0,
          t = 0,
          r = 0,
          n = i.morphTargetInfluences[i.morphTargetDictionary.width],
          e = i.morphTargetInfluences[i.morphTargetDictionary.depth],
          t = i.morphTargetInfluences[i.morphTargetDictionary.porchDepth],
          r = i.morphTargetInfluences[i.morphTargetDictionary.ceilingHeight],
          s =
            ((e =
              "porchWrapHip" === a.substring(0, 12)
                ? ((n = n + 10 + 10 + 2 * t), e + 10 + 10 + 2 * t)
                : "porchWrap" === a.substring(0, 9)
                  ? ((n = n + 10 + 10 + +t), e + 10 + 10 + +t)
                  : ((n += 10), 0)),
              (t += 10),
              ma.maxPorchPostSpacing),
          l = Math.floor(n / s) - 1,
          h = Math.floor(e / s) - 1,
          c =
            (((ma.settings.hasOwnProperty("showPorchMidPostsOnEndwallsOnly") &&
              ma.settings.showPorchMidPostsOnEndwallsOnly) ||
              (ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") &&
                ma.settings.showPorchPostsOnEndwallsOnly)) &&
              ((a.startsWith("porchWrapNW") ||
                a.startsWith("porchWrapHipNW") ||
                a.startsWith("porchWrapSE") ||
                a.startsWith("porchWrapHipSE")) &&
                (console.log("wrap A: " + a), (h = 0)),
                (a.startsWith("porchWrapNE") ||
                  a.startsWith("porchWrapHipNE") ||
                  a.startsWith("porchWrapSW") ||
                  a.startsWith("porchWrapHipSW")) &&
                (console.log("wrap: " + a), (l = 0)),
                a.startsWith("porchE") || a.startsWith("porchW")) &&
              (l = 0),
              n / ((l = Math.max(0, l)) + 1)),
          d = e / ((h = Math.max(0, h)) + 1);
        if (
          ("porchWrap" === a.substring(0, 9) && (o.position.x = t),
            (o.position.z = t - 0.4),
            void 0 !== lastHoveredItem.getObjectByName("porchPost") &&
            void 0 !== lastHoveredItem.getObjectByName("porchPostMetal"))
        ) {
          let t;
          if (ma.settings.woodenPorchPosts)
            t = lastHoveredItem.getObjectByName("porchPost");
          else {
            t = lastHoveredItem.getObjectByName("porchPostMetal");
            for (let e = 0; e < t.material.length; e++)
              "PorchPostsMetal" === t.material[e].name &&
                t.material[e].color.copy(mainVar);
          }
          for (let e = 1; e <= l + h; e++) {
            var p = t.GdeepCloneMaterials();
            (p.name = "porchPost-Clone"),
              (p.castShadow = !0),
              (p.visible = !0),
              (p.rotation.x = 0),
              e <= l
                ? "porchWrap" === a.substring(0, 9)
                  ? (p.position.x = e * -c)
                  : (p.position.x = n / 2 + e * -c)
                : ((p.rotation.y = Math.PI / 2), (p.position.z = (e - l) * -d)),
              (p.morphTargetInfluences[p.morphTargetDictionary.ceilingHeight] =
                r),
              (p.morphTargetInfluences[p.morphTargetDictionary.miters] =
                i.morphTargetInfluences[i.morphTargetDictionary.miters]);
            for (let e = 0; e < i.material.length; e++)
              if (
                "PorchPosts" === i.material[e].name &&
                i.material[e].color.getHex() !== baseColor.getHex() &&
                i.material[e].color.getHex() !== trimColor.getHex()
              )
                for (let e = 0; e < p.material.length; e++)
                  "PorchPosts" === p.material[e].name &&
                    (p.material[e].color.setStyle(
                      colorOptions
                        .filter(
                          (e) =>
                            e.name ===
                            ma[ma.settings.wrappedPorchPostColorMatches]
                        )
                        .map((e) => e.hex)
                    ),
                      p.material[e].specular.setHex(3947580),
                      (p.material[e].shininess.value = 40));
            o.add(p);
          }
        }
        ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") &&
          ma.settings.showPorchPostsOnEndwallsOnly &&
          ((a.startsWith("porchWrapNW") ||
            a.startsWith("porchWrapHipNW") ||
            a.startsWith("porchWrapSE") ||
            a.startsWith("porchWrapHipSE")) &&
            (h = 0),
            (a.startsWith("porchWrapNE") ||
              a.startsWith("porchWrapHipNE") ||
              a.startsWith("porchWrapSW") ||
              a.startsWith("porchWrapHipSW")) &&
            (l = 0),
            a.startsWith("porchE") || a.startsWith("porchW"));
      }
  }
}

function eo() {
  var e =
    ma.cupola18in +
    ma.cupola2 +
    ma.cupola30in +
    ma.cupola3 +
    ma.cupola42in +
    ma.cupola4 +
    ma.cupolaWindow18in +
    ma.cupolaWindow2 +
    ma.cupolaWindow30in +
    ma.cupolaWindow3 +
    ma.cupolaWindow42in +
    ma.cupolaWindow4;
  let a = ((ma.width / 2) * ma.roofPitch) / 12 + ma.height;
  sceneRoot.traverse(function (e) {
    e instanceof THREE.Mesh &&
      e.name.startsWith("weatherVane") &&
      ((e.visible = false), (e.parent = sceneRoot));
  }),
    "None" !== ma.weatherVane &&
    0 == e &&
    ((sceneRoot.getObjectByName(
      "weatherVane" + ma.weatherVane + "-1"
    ).visible = !0),
      sceneRoot
        .getObjectByName("weatherVane" + ma.weatherVane + "-1")
        .position.set(0, a, ma.depth / 2 - 0.25));
  let o = 1;
  0 < e &&
    "None" !== ma.weatherVane &&
    sceneRoot.traverse(function (e) {
      var t;
      e instanceof THREE.Mesh &&
        e.name.startsWith("cupola") &&
        e.visible &&
        ((a =
          e.name.startsWith("cupola18in") ||
            e.name.startsWith("cupolaWindow18in")
            ? 2.25
            : e.name.startsWith("cupola2") || e.name.startsWith("cupolaWindow2")
              ? 2.75
              : e.name.startsWith("cupola30in") ||
                e.name.startsWith("cupolaWindow30in")
                ? 3.5
                : e.name.startsWith("cupola3") || e.name.startsWith("cupolaWindow3")
                  ? 4.25
                  : e.name.startsWith("cupola42in") ||
                    e.name.startsWith("cupolaWindow42in")
                    ? 4.75
                    : e.name.startsWith("cupola4") || e.name.startsWith("cupolaWindow4")
                      ? 5.25
                      : 2.75),
          (t = sceneRoot.getObjectByName(
            "weatherVane" + ma.weatherVane + "-" + o
          )).position.set(0, a, 0),
          (t.visible = !0),
          (t.parent = e),
          o++);
    }),
    (isMaterialUpdateEnabled = !0);
}

function to() {
  var e =
    ma.cupola18in +
    ma.cupola2 +
    ma.cupola30in +
    ma.cupola3 +
    ma.cupola42in +
    ma.cupola4 +
    ma.cupolaWindow18in +
    ma.cupolaWindow2 +
    ma.cupolaWindow30in +
    ma.cupolaWindow3 +
    ma.cupolaWindow42in +
    ma.cupolaWindow4,
    t = ((ma.roofPitch / 12) * 2) / 100,
    a = sceneRoot.getObjectByName("roofR").position.x,
    o = sceneRoot.getObjectByName("roofR").position.y,
    i = (ma.depth - 3 - 3) / (e - 1),
    n = ma.depth / 2 - 3,
    r =
      (1 === e && (n = 0),
        2 === e && (i = 2 * (n = ma.depth / 2 / 2)),
        2 <= e &&
        isGlassMode &&
        ((n = ma.depth / 2 - ma.depth / e / 2), (i = ma.depth / e)),
        ma.cupola18in),
    s = 0,
    l = ma.cupolaWindow18in,
    h = 0,
    c = ma.cupola2,
    d = 0,
    p = ma.cupolaWindow2,
    m = 0,
    g = ma.cupola30in,
    u = 0,
    T = ma.cupolaWindow30in,
    y = 0,
    b = ma.cupola3,
    f = 0,
    w = ma.cupolaWindow3,
    v = 0,
    E = ma.cupola42in,
    M = 0,
    D = ma.cupolaWindow42in,
    P = 0,
    helperObject = ma.cupola4,
    S = ma.cupolaWindow4;
  1 < ma.cupola18in &&
    ((r = Math.round(ma.cupola18in / 2)), (s = ma.cupola18in - r)),
    1 < ma.cupolaWindow18in &&
    ((l = Math.round(ma.cupolaWindow18in / 2)),
      (h = ma.cupolaWindow18in - l)),
    1 < ma.cupola2 && ((c = Math.round(ma.cupola2 / 2)), (d = ma.cupola2 - c)),
    1 < ma.cupolaWindow2 &&
    ((p = Math.round(ma.cupolaWindow2 / 2)), (m = ma.cupolaWindow2 - p)),
    1 < ma.cupola30in &&
    ((g = Math.round(ma.cupola30in / 2)), (u = ma.cupola30in - g)),
    1 < ma.cupolaWindow30in &&
    ((T = Math.round(ma.cupolaWindow30in / 2)),
      (y = ma.cupolaWindow30in - T)),
    1 < ma.cupola3 && ((b = Math.round(ma.cupola3 / 2)), (f = ma.cupola3 - b)),
    1 < ma.cupolaWindow3 &&
    ((w = Math.round(ma.cupolaWindow3 / 2)), (v = ma.cupolaWindow3 - w)),
    1 < ma.cupola42in &&
    ((E = Math.round(ma.cupola42in / 2)), (M = ma.cupola42in - E)),
    1 < ma.cupolaWindow42in &&
    ((D = Math.round(ma.cupolaWindow42in / 2)),
      (P = ma.cupolaWindow42in - D));
  for (let e = 1; e <= renderWidth; e++)
    sceneRoot.getObjectByName("cupola18in-" + e) &&
      (sceneRoot.getObjectByName("cupola18in-" + e).visible = false),
      sceneRoot.getObjectByName("cupola2-" + e) &&
      (sceneRoot.getObjectByName("cupola2-" + e).visible = false),
      sceneRoot.getObjectByName("cupola30in-" + e) &&
      (sceneRoot.getObjectByName("cupola30in-" + e).visible = false),
      sceneRoot.getObjectByName("cupola3-" + e) &&
      (sceneRoot.getObjectByName("cupola3-" + e).visible = false),
      sceneRoot.getObjectByName("cupola42in-" + e) &&
      (sceneRoot.getObjectByName("cupola42in-" + e).visible = false),
      sceneRoot.getObjectByName("cupola4-" + e) &&
      (sceneRoot.getObjectByName("cupola4-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow18in-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow18in-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow2-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow2-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow30in-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow30in-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow3-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow3-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow42in-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow42in-" + e).visible = false),
      sceneRoot.getObjectByName("cupolaWindow4-" + e) &&
      (sceneRoot.getObjectByName("cupolaWindow4-" + e).visible = false),
      sceneRoot.getObjectByName("cupola18in-" + e) &&
      ma.cupola18in >= e &&
      (sceneRoot.getObjectByName("cupola18in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupola2-" + e) &&
      ma.cupola2 >= e &&
      (sceneRoot.getObjectByName("cupola2-" + e).visible = !0),
      sceneRoot.getObjectByName("cupola30in-" + e) &&
      ma.cupola30in >= e &&
      (sceneRoot.getObjectByName("cupola30in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupola3-" + e) &&
      ma.cupola3 >= e &&
      (sceneRoot.getObjectByName("cupola3-" + e).visible = !0),
      sceneRoot.getObjectByName("cupola42in-" + e) &&
      ma.cupola42in >= e &&
      (sceneRoot.getObjectByName("cupola42in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupola4-" + e) &&
      ma.cupola4 >= e &&
      (sceneRoot.getObjectByName("cupola4-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow18in-" + e) &&
      ma.cupolaWindow18in >= e &&
      (sceneRoot.getObjectByName("cupolaWindow18in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow2-" + e) &&
      ma.cupolaWindow2 >= e &&
      (sceneRoot.getObjectByName("cupolaWindow2-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow30in-" + e) &&
      ma.cupolaWindow30in >= e &&
      (sceneRoot.getObjectByName("cupolaWindow30in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow3-" + e) &&
      ma.cupolaWindow3 >= e &&
      (sceneRoot.getObjectByName("cupolaWindow3-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow42in-" + e) &&
      ma.cupolaWindow42in >= e &&
      (sceneRoot.getObjectByName("cupolaWindow42in-" + e).visible = !0),
      sceneRoot.getObjectByName("cupolaWindow4-" + e) &&
      ma.cupolaWindow4 >= e &&
      (sceneRoot.getObjectByName("cupolaWindow4-" + e).visible = !0);
  let O = 1,
    B;
  for (let e = 1; e <= r; e++)
    (B = sceneRoot.getObjectByName("cupola18in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= l; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow18in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= c; e++)
    (B = sceneRoot.getObjectByName("cupola2-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= p; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow2-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= g; e++)
    (B = sceneRoot.getObjectByName("cupola30in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= T; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow30in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= b; e++)
    (B = sceneRoot.getObjectByName("cupola3-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= w; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow3-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= E; e++)
    (B = sceneRoot.getObjectByName("cupola42in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= D; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow42in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= helperObject; e++)
    (B = sceneRoot.getObjectByName("cupola4-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = 1; e <= S; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow4-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = w + 1; e <= v + w; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow3-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = D + 1; e <= P + D; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow42in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = E + 1; e <= M + E; e++)
    (B = sceneRoot.getObjectByName("cupola42in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = b + 1; e <= f + b; e++)
    (B = sceneRoot.getObjectByName("cupola3-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = T + 1; e <= y + T; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow30in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = g + 1; e <= u + g; e++)
    (B = sceneRoot.getObjectByName("cupola30in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = p + 1; e <= m + p; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow2-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = c + 1; e <= d + c; e++)
    (B = sceneRoot.getObjectByName("cupola2-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = l + 1; e <= h + l; e++)
    (B = sceneRoot.getObjectByName("cupolaWindow18in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  for (let e = r + 1; e <= s + r; e++)
    (B = sceneRoot.getObjectByName("cupola18in-" + e)),
      1 < O && (n += -i),
      B.position.set(a, o, n),
      (B.morphTargetInfluences[B.morphTargetDictionary.cupolaSlope] = t),
      O++;
  eo();
}

function ao() {
  sceneRoot.traverse(function (t) {
    if (
      0 === ma.hideWalls &&
      t instanceof THREE.Mesh &&
      ("building" === t.name ||
        "leanTo1" === t.name ||
        "leanTo2" === t.name ||
        "leanTo3" === t.name ||
        "leanTo4" === t.name ||
        t.name.startsWith("coveredGableExtension"))
    ) {
      t.hasOwnProperty("morphTargetDictionary") &&
        t.morphTargetDictionary.hasOwnProperty("wainscotHeight") &&
        (ma.hasOwnProperty("wainscotHeight")
          ? (t.morphTargetInfluences[t.morphTargetDictionary.wainscotHeight] =
            ma.wainscotHeight - 1)
          : (t.morphTargetInfluences[
            t.morphTargetDictionary.wainscotHeight
          ] = 2.5));
      for (let e = 0; e < t.material.length; e++)
        ("BuildingWainscot1" !== t.material[e].name &&
          !t.material[e].name.startsWith("BuildingWainscotTrim1") &&
          ("leanTo1" !== t.name ||
            ("LeantoWainscot1" !== t.material[e].name &&
              "LeantoWainscotTrim1" !== t.material[e].name &&
              "LeantoWainscot2" !== t.material[e].name &&
              "LeantoWainscotTrim2" !== t.material[e].name &&
              "LeantoWainscot3" !== t.material[e].name &&
              "LeantoWainscotTrim3" !== t.material[e].name))) ||
          (!ma.wainscot1 ||
            !(
              (ma.enclosedN &&
                t.material[e].name.startsWith("BuildingWainscot") &&
                (!ma.leanTo1 || (ma.leanTo1 && !ma.leanTo1Enclosed))) ||
              (t.material[e].name.startsWith("LeantoWainscot") &&
                ma.leanTo1 &&
                ma.leanTo1Enclosed &&
                "Fully Enclosed" == ma.leanTo1Walls)
            ) ||
            ((!t.name.startsWith("coveredGableExtensionN") ||
              !ma.coveredGableExtensionNEnclosed) &&
              t.name.startsWith("coveredGableExtensionN") &&
              !ma.coveredGableExtensionNEnclosed)
            ? (t.material[e].visible = false)
            : (t.material[e].visible = !0)),
          ("BuildingWainscot2" !== t.material[e].name &&
            !t.material[e].name.startsWith("BuildingWainscotTrim2") &&
            ("leanTo2" !== t.name ||
              ("LeantoWainscot1" !== t.material[e].name &&
                "LeantoWainscotTrim1" !== t.material[e].name &&
                "LeantoWainscot2" !== t.material[e].name &&
                "LeantoWainscotTrim2" !== t.material[e].name &&
                "LeantoWainscot3" !== t.material[e].name &&
                "LeantoWainscotTrim3" !== t.material[e].name))) ||
          (!ma.wainscot2 ||
            !(
              (ma.enclosedE &&
                t.material[e].name.startsWith("BuildingWainscot") &&
                (!ma.leanTo2 ||
                  (ma.leanTo2 &&
                    (!ma.leanTo2Enclosed ||
                      "Fully Enclosed" !== ma.leanTo2Walls)))) ||
              (t.material[e].name.startsWith("LeantoWainscot") &&
                ma.leanTo2 &&
                ma.leanTo2Enclosed &&
                "Fully Enclosed" == ma.leanTo2Walls)
            ) ||
            ((!t.name.startsWith("coveredGableExtensionE") ||
              !ma.coveredGableExtensionEEnclosed) &&
              t.name.startsWith("coveredGableExtensionE") &&
              !ma.coveredGableExtensionEEnclosed)
            ? (t.material[e].visible = false)
            : (t.material[e].visible = !0)),
          ("BuildingWainscot3" !== t.material[e].name &&
            !t.material[e].name.startsWith("BuildingWainscotTrim3") &&
            ("leanTo3" !== t.name ||
              ("LeantoWainscot1" !== t.material[e].name &&
                "LeantoWainscotTrim1" !== t.material[e].name &&
                "LeantoWainscot2" !== t.material[e].name &&
                "LeantoWainscotTrim2" !== t.material[e].name &&
                "LeantoWainscot3" !== t.material[e].name &&
                "LeantoWainscotTrim3" !== t.material[e].name))) ||
          (!ma.wainscot3 ||
            !(
              (ma.enclosedS &&
                t.material[e].name.startsWith("BuildingWainscot") &&
                (!ma.leanTo3 || (ma.leanTo3 && !ma.leanTo3Enclosed))) ||
              (t.material[e].name.startsWith("LeantoWainscot") &&
                ma.leanTo3 &&
                ma.leanTo3Enclosed &&
                "Fully Enclosed" == ma.leanTo3Walls)
            ) ||
            ((!t.name.startsWith("coveredGableExtensionS") ||
              !ma.coveredGableExtensionSEnclosed) &&
              t.name.startsWith("coveredGableExtensionS") &&
              !ma.coveredGableExtensionSEnclosed)
            ? (t.material[e].visible = false)
            : (t.material[e].visible = !0)),
          ("BuildingWainscot4" !== t.material[e].name &&
            !t.material[e].name.startsWith("BuildingWainscotTrim4") &&
            ("leanTo4" !== t.name ||
              ("LeantoWainscot1" !== t.material[e].name &&
                "LeantoWainscotTrim1" !== t.material[e].name &&
                "LeantoWainscot2" !== t.material[e].name &&
                "LeantoWainscotTrim2" !== t.material[e].name &&
                "LeantoWainscot3" !== t.material[e].name &&
                "LeantoWainscotTrim3" !== t.material[e].name))) ||
          (!ma.wainscot4 ||
            !(
              (ma.enclosedW &&
                t.material[e].name.startsWith("BuildingWainscot") &&
                (!ma.leanTo4 ||
                  (ma.leanTo4 &&
                    (!ma.leanTo4Enclosed ||
                      "Fully Enclosed" !== ma.leanTo4Walls)))) ||
              (t.material[e].name.startsWith("LeantoWainscot") &&
                ma.leanTo4 &&
                ma.leanTo4Enclosed &&
                "Fully Enclosed" == ma.leanTo4Walls)
            ) ||
            ((!t.name.startsWith("coveredGableExtensionW") ||
              !ma.coveredGableExtensionWEnclosed) &&
              t.name.startsWith("coveredGableExtensionW") &&
              !ma.coveredGableExtensionWEnclosed)
            ? (t.material[e].visible = false)
            : (t.material[e].visible = !0)),
          ("BuildingWainscot1" !== t.material[e].name &&
            "BuildingWainscot2" !== t.material[e].name &&
            "BuildingWainscot3" !== t.material[e].name &&
            "BuildingWainscot4" !== t.material[e].name &&
            "LeantoWainscot1" !== t.material[e].name &&
            "LeantoWainscot2" !== t.material[e].name &&
            "LeantoWainscot3" !== t.material[e].name) ||
          ((("Stone" === ma.wainscotColor || "Brick" === ma.wainscotColor) &&
            (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4)) ||
            ((t.morphTargetInfluences[
              t.morphTargetDictionary.trimWainscot1
            ] = 0),
              (t.morphTargetInfluences[
                t.morphTargetDictionary.trimWainscot2
              ] = 0),
              (t.morphTargetInfluences[
                t.morphTargetDictionary.trimWainscot3
              ] = 0),
              (t.morphTargetInfluences[
                t.morphTargetDictionary.trimWainscot4
              ] = 0)),
            (t.geometry.dynamic = !0),
            t.geometry.hasOwnProperty("normalsNeedUpdate") &&
            (t.geometry.normalsNeedUpdate = !0),
            t.geometry.hasOwnProperty("tangentsNeedUpdate") &&
            (t.geometry.tangentsNeedUpdate = !0)),
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          ma.leanTo1Length === ma.depth &&
          false === ma.wainscot1 &&
          ma.wainscot2 &&
          "leanTo1" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          ma.leanTo1Length === ma.depth &&
          false === ma.wainscot1 &&
          ma.wainscot4 &&
          "leanTo1" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          ma.leanTo1Length === ma.width &&
          ma.wainscot1 &&
          false === ma.wainscot2 &&
          "leanTo1" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          ma.leanTo1Length === ma.width &&
          ma.wainscot1 &&
          false === ma.wainscot4 &&
          "leanTo1" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          ma.leanTo2Length === ma.depth &&
          false === ma.wainscot2 &&
          ma.wainscot1 &&
          "leanTo2" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          ma.leanTo2Length === ma.depth &&
          false === ma.wainscot2 &&
          ma.wainscot3 &&
          "leanTo2" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          ma.leanTo2Length === ma.depth &&
          ma.wainscot2 &&
          false === ma.wainscot1 &&
          "leanTo2" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          ma.leanTo2Length === ma.depth &&
          ma.wainscot2 &&
          false === ma.wainscot3 &&
          "leanTo2" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          ma.leanTo3Length === ma.depth &&
          false === ma.wainscot3 &&
          ma.wainscot2 &&
          "leanTo3" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          ma.leanTo3Length === ma.depth &&
          false === ma.wainscot3 &&
          ma.wainscot4 &&
          "leanTo3" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          ma.leanTo3Length === ma.width &&
          ma.wainscot3 &&
          false === ma.wainscot2 &&
          "leanTo3" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          ma.leanTo3Length === ma.width &&
          ma.wainscot3 &&
          false === ma.wainscot4 &&
          "leanTo3" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          ma.leanTo4Length === ma.depth &&
          false === ma.wainscot4 &&
          ma.wainscot1 &&
          "leanTo4" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          ma.leanTo4Length === ma.depth &&
          false === ma.wainscot4 &&
          ma.wainscot3 &&
          "leanTo4" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          ma.leanTo4Length === ma.depth &&
          ma.wainscot4 &&
          false === ma.wainscot1 &&
          "leanTo4" === t.name &&
          ("LeantoWainscot1" === t.material[e].name ||
            "LeantoWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          ma.leanTo4Length === ma.depth &&
          ma.wainscot4 &&
          false === ma.wainscot3 &&
          "leanTo4" === t.name &&
          ("LeantoWainscot3" === t.material[e].name ||
            "LeantoWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = false),
          ma.leanTo1 &&
          ma.leanTo1Enclosed &&
          "Fully Enclosed" == ma.leanTo1Walls &&
          ma.wainscot1 &&
          ma.leanTo1Length !== ma.width &&
          ("BuildingWainscot1" === t.material[e].name ||
            "BuildingWainscotTrim1" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo2 &&
          ma.leanTo2Enclosed &&
          "Fully Enclosed" == ma.leanTo2Walls &&
          ma.wainscot2 &&
          ma.leanTo2Length !== ma.depth &&
          ("BuildingWainscot2" === t.material[e].name ||
            "BuildingWainscotTrim2" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo3 &&
          ma.leanTo3Enclosed &&
          "Fully Enclosed" == ma.leanTo3Walls &&
          ma.wainscot3 &&
          ma.leanTo3Length !== ma.width &&
          ("BuildingWainscot3" === t.material[e].name ||
            "BuildingWainscotTrim3" === t.material[e].name) &&
          (t.material[e].visible = !0),
          ma.leanTo4 &&
          ma.leanTo4Enclosed &&
          "Fully Enclosed" == ma.leanTo4Walls &&
          ma.wainscot4 &&
          ma.leanTo4Length !== ma.depth &&
          ("BuildingWainscot4" === t.material[e].name ||
            "BuildingWainscotTrim4" === t.material[e].name) &&
          (t.material[e].visible = !0);
    }
  }),
    (isMaterialUpdateEnabled = !0);
}

function oo() {
  var e = 0;
  if ("Gabled" === ma.roofType) {
    if (selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
      for (
        e = 0;
        e < selectedMesh.__folders["Building Dimensions"].__controllers.length;
        e++
      ) {
        var t = selectedMesh.__folders["Building Dimensions"].__controllers[e];
        "asymmetrical" === t.property &&
          ((t.domElement.parentElement.parentElement.hidden = !0),
            t.updateDisplay()),
          "roofPitch" === t.property &&
          (t.min(ma.settings.roofPitchMin),
            ma.roofPitch < ma.settings.roofPitchMin &&
            (ma.roofPitch = ma.settings.roofPitchMin),
            t.updateDisplay());
      }
    sceneRoot.traverse(function (t) {
      if (t instanceof THREE.Mesh) {
        if ("roofL" === t.name || "roofR" === t.name)
          for (let e = 0; e < t.material.length; e++)
            "BuildingRidgeCap" === t.material[e].name &&
              (t.material[e].visible = !0);
        "building" === t.name &&
          ((t.morphTargetInfluences[t.morphTargetDictionary.heightRight] = 0),
            (t.morphTargetInfluences[t.morphTargetDictionary.heightLeft] = 0));
      }
    });
  }
  if ("Single Slope" === ma.roofType) {
    if (selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
      for (
        e = 0;
        e < selectedMesh.__folders["Building Dimensions"].__controllers.length;
        e++
      ) {
        var a = selectedMesh.__folders["Building Dimensions"].__controllers[e];
        "asymmetrical" === a.property &&
          ((a.domElement.parentElement.parentElement.hidden = !0),
            a.updateDisplay()),
          "roofPitch" === a.property &&
          (a.min(-ma.settings.roofPitchMax), a.updateDisplay());
      }
    sceneRoot.traverse(function (t) {
      if (t instanceof THREE.Mesh && ("roofL" === t.name || "roofR" === t.name))
        for (let e = 0; e < t.material.length; e++)
          "BuildingRidgeCap" === t.material[e].name &&
            (t.material[e].visible = false);
    });
  }
  if ("Asymmetrical" === ma.roofType) {
    if (selectedMesh.__folders.hasOwnProperty("Building Dimensions"))
      for (
        e = 0;
        e < selectedMesh.__folders["Building Dimensions"].__controllers.length;
        e++
      ) {
        var o = selectedMesh.__folders["Building Dimensions"].__controllers[e];
        "asymmetrical" === o.property &&
          ((o.domElement.parentElement.parentElement.hidden = false),
            o.min(ma.width / -2 + 3),
            o.max(ma.width / 2 - 3),
            ma.asymmetrical < ma.width / -2 + 3 &&
            (ma.asymmetrical = ma.width / -2 + 3),
            ma.asymmetrical > ma.width / 2 - 3 &&
            (ma.asymmetrical = ma.width / 2 - 3),
            o.updateDisplay()),
          "roofPitch" === o.property &&
          (o.min(ma.settings.roofPitchMin),
            ma.roofPitch < ma.settings.roofPitchMin &&
            (ma.roofPitch = ma.settings.roofPitchMin),
            o.updateDisplay());
      }
    sceneRoot.traverse(function (t) {
      if (t instanceof THREE.Mesh) {
        if ("roofL" === t.name || "roofR" === t.name)
          for (let e = 0; e < t.material.length; e++)
            "BuildingRidgeCap" === t.material[e].name &&
              (t.material[e].visible = !0);
        "building" === t.name &&
          ((t.morphTargetInfluences[t.morphTargetDictionary.heightRight] = 0),
            (t.morphTargetInfluences[t.morphTargetDictionary.heightLeft] = 0));
      }
    });
  }
  S();
}

function io() {
  0.5 < ma.eavePitchL
    ? (ma.eavePitchL = Math.round(ma.eavePitchL))
    : (ma.eavePitchL = 0.5),
    0.5 < ma.eavePitchR
      ? (ma.eavePitchR = Math.round(ma.eavePitchR))
      : (ma.eavePitchR = 0.5);
  ma.height;
  let t = 0,
    a,
    o,
    i,
    n,
    r,
    s,
    e,
    l,
    h;
  if (
    ("Single Slope" === ma.roofType
      ? (ma.width,
        Math.abs(ma.roofPitch),
        (t = (ma.width * Math.abs(ma.roofPitch)) / 12),
        (a = Math.atan(ma.width / t)),
        (o = a),
        (i = -a),
        ma.roofPitch < 0 && ((o = -a), (i = a)),
        (n = Math.sqrt(Math.pow(t, 2) + Math.pow(ma.width, 2))),
        (r = n / 2),
        (s = n / 2),
        ma.roofPitch < 0
          ? (wallGroup.rotation.z = (Math.PI / -180) * -90 - a)
          : (wallGroup.rotation.z = (Math.PI / 180) * -90 + a),
        (wallGroup.position.x = 0),
        (wallGroup.position.y = t / 2 + ma.height + 0.1),
        (wallGroup.morphTargetInfluences[
          wallGroup.morphTargetDictionary.width
        ] = (n / 2 - 0.5) / 50 + ma.eaveL / 50),
        ma.roofPitch < 0
          ? (roofGroup.rotation.z = (-Math.PI / -180) * -90 + a)
          : (roofGroup.rotation.z = (-Math.PI / 180) * -90 - a),
        (roofGroup.position.x = 0),
        (roofGroup.position.y = t / 2 + ma.height + 0.1),
        (roofGroup.morphTargetInfluences[
          roofGroup.morphTargetDictionary.width
        ] = (n / 2 - 0.5) / 50 + ma.eaveR / 50),
        ma.roofPitch < 0
          ? ((bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.heightLeft
          ] = t / 100),
            (bloomPass.morphTargetInfluences[
              bloomPass.morphTargetDictionary.heightRight
            ] = 0))
          : ((bloomPass.morphTargetInfluences[
            bloomPass.morphTargetDictionary.heightRight
          ] = t / 100),
            (bloomPass.morphTargetInfluences[
              bloomPass.morphTargetDictionary.heightLeft
            ] = 0)),
        (bloomPass.morphTargetInfluences[
          bloomPass.morphTargetDictionary.roofPeak
        ] = t / 100 / 2))
      : "Asymmetrical" === ma.roofType
        ? (ma.settings.roundAllButMinimumRoofPitch &&
          ma.roofPitch < ma.settings.roofPitchMin &&
          (ma.roofPitch = ma.settings.roofPitchMin),
          ma.settings.roundAllButMinimumRoofPitch &&
          (ma.roofPitch > ma.settings.roofPitchMin ||
            ma.roofPitch < -ma.settings.roofPitchMin) &&
          (ma.roofPitch = Math.round(ma.roofPitch)),
          (e = ma.width / 2 + ma.asymmetrical),
          (l = ma.width / 2 - ma.asymmetrical),
          (h = Math.max(e, l)),
          (t = (h * ma.roofPitch) / 12),
          (o = Math.atan(e / t)),
          (i = Math.atan(l / t)),
          (r = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2))),
          (s = Math.sqrt(Math.pow(t, 2) + Math.pow(l, 2))),
          sceneRoot.traverse(function (e) {
            e instanceof THREE.Mesh &&
              ("roofL" === e.name &&
                ((e.rotation.z = (Math.PI / 180) * -90 + o),
                  (e.position.x = ma.asymmetrical),
                  (e.position.y = t + ma.height + 0.1),
                  (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                    (r - 0.5) / 50 + ma.eaveL / 50)),
                "roofR" === e.name &&
                ((e.rotation.z = (-Math.PI / 180) * 90 + i),
                  (e.position.x = ma.asymmetrical),
                  (e.position.y = t + ma.height + 0.1),
                  (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                    (s - 0.5) / 50 + ma.eaveR / 50)),
                "building" === e.name) &&
              (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
                t / 100);
          }))
        : (ma.settings.roundAllButMinimumRoofPitch &&
          ma.roofPitch < ma.settings.roofPitchMin &&
          (ma.roofPitch = ma.settings.roofPitchMin),
          ma.settings.roundAllButMinimumRoofPitch &&
          (ma.roofPitch > ma.settings.roofPitchMin ||
            ma.roofPitch < -ma.settings.roofPitchMin) &&
          (ma.roofPitch = Math.round(ma.roofPitch)),
          (t = ((ma.width / 2) * ma.roofPitch) / 12),
          (a = Math.atan(ma.width / 2 / t)),
          (o = a),
          (i = a),
          (n = Math.sqrt(Math.pow(t, 2) + Math.pow(ma.width / 2, 2))),
          (r = n),
          (s = n),
          ma.leanTo2 &&
          (ma.leanTo2Depth, Math.tan(Math.atan(ma.leanTo2Pitch / 12))),
          ma.leanTo4 &&
          (ma.leanTo4Depth, Math.tan(Math.atan(ma.leanTo4Pitch / 12))),
          sceneRoot.traverse(function (e) {
            e instanceof THREE.Mesh &&
              ("roofL" === e.name &&
                ((e.rotation.z = (Math.PI / 180) * -90 + a),
                  (e.position.x = 0),
                  (e.position.y = t + ma.height + 0.1),
                  0 < ma.eaveL &&
                    (!ma.leanTo2 || (ma.leanTo2 && ma.leanTo2Height < ma.height))
                    ? (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                      (n - 0.5) / 50 + ma.eaveL / 50)
                    : (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                      (n - 0.5) / 50)),
                "roofR" === e.name &&
                ((e.rotation.z = (-Math.PI / 180) * 90 + a),
                  (e.position.x = 0),
                  (e.position.y = t + ma.height + 0.1),
                  0 < ma.eaveR &&
                    (!ma.leanTo4 || (ma.leanTo4 && ma.leanTo4Height < ma.height))
                    ? (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                      (n - 0.5) / 50 + ma.eaveR / 50)
                    : (e.morphTargetInfluences[e.morphTargetDictionary.width] =
                      (n - 0.5) / 50)),
                ("roofEaveL" !== e.name && "roofEaveR" !== e.name) ||
                (e.visible = false),
                "building" === e.name) &&
              (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
                t / 100);
          })),
      ma.settings.boxedEaves)
  ) {
    var c = sceneRoot.getObjectByName("boxedEaveL"),
      d = sceneRoot.getObjectByName("boxedEaveR");
    if (
      (0 < ma.eaveL && (c.visible = !0),
        0 < ma.eaveR && (d.visible = !0),
        (c.position.y = ma.wallHeightL()),
        (d.position.y = ma.wallHeightR()),
        (c.position.x = ma.width / -2),
        (d.position.x = ma.width / 2),
        (c.position.z = -ma.gableBack / 2 + ma.gableFront / 2),
        (d.position.z = -ma.gableBack / 2 + ma.gableFront / 2),
        (c.morphTargetInfluences[c.morphTargetDictionary.depth] =
          ma.depth + ma.gableBack + ma.gableFront - 1),
        (d.morphTargetInfluences[d.morphTargetDictionary.depth] =
          ma.depth + ma.gableBack + ma.gableFront - 1),
        (c.morphTargetInfluences[c.morphTargetDictionary.width] =
          (ma.eaveL / Math.hypot(12, ma.roofPitch)) * 12 - 1.1),
        (d.morphTargetInfluences[d.morphTargetDictionary.width] =
          (ma.eaveR / Math.hypot(12, ma.roofPitch)) * 12 - 1.1),
        (c.morphTargetInfluences[c.morphTargetDictionary.height] =
          (ma.eaveL / Math.hypot(12, ma.roofPitch)) * ma.roofPitch - 0.5),
        (d.morphTargetInfluences[d.morphTargetDictionary.height] =
          (ma.eaveR / Math.hypot(12, ma.roofPitch)) * ma.roofPitch - 0.5),
        (c.morphTargetInfluences[c.morphTargetDictionary.slope] =
          c.morphTargetInfluences[c.morphTargetDictionary.height] + 1 - 0.5),
        (d.morphTargetInfluences[d.morphTargetDictionary.slope] =
          d.morphTargetInfluences[d.morphTargetDictionary.height] + 1 - 0.5),
        ma.settings.boxedEavesMatchTrim)
    ) {
      for (let e = 0; e < d.material.length; e++)
        null !== d.material[e].normalMap &&
          "BuildingSoffit" !== d.material[e].name &&
          ((d.material[e] = d.material[e].clone()),
            (d.material[e].name = "BuildingTrim"),
            (d.material[e].normalMap = null),
            (d.material[e].needsUpdate = !0));
      for (let e = 0; e < c.material.length; e++)
        null !== c.material[e].normalMap &&
          "BuildingSoffit" !== c.material[e].name &&
          ((c.material[e] = c.material[e].clone()),
            (c.material[e].name = "BuildingTrim"),
            (c.material[e].normalMap = null),
            (c.material[e].needsUpdate = !0));
    }
  }
  if (ma.hasOwnProperty("ridgeVents")) {
    var p = sceneRoot.getObjectByName("RidgeVent");
    if (0 == ma.ridgeVents)
      for (let e = 1; e <= 6; e++)
        void 0 !== sceneRoot.getObjectByName("RidgeVent" + e + "-clone") &&
          (lastHoveredItem.getObjectByName(
            "RidgeVent" + e + "-clone"
          ).visible = false);
    else {
      let t;
      for (let e = 1; e <= 6; e++)
        void 0 === sceneRoot.getObjectByName("RidgeVent" + e + "-clone") &&
          (((t = p.clone()).name = "RidgeVent" + e + "-clone"),
            lastHoveredItem.add(t)),
          (t = sceneRoot.getObjectByName("RidgeVent" + e + "-clone")),
          e <= ma.ridgeVents ? (t.visible = !0) : (t.visible = false),
          (t.position.y = sceneRoot.getObjectByName("roofR").position.y),
          (t.position.z =
            ma.depth / -2 -
            ma.depth / (2 * ma.ridgeVents) +
            (ma.depth / (2 * ma.ridgeVents)) * 2 * e);
    }
  }
  let m = "Logo-" + ma.logoShape;
  if (
    ("Wall" == ma.logoPlacement && (m = "Logo-Round"),
      ma.settings.matchPeakSignBackgroundToTrimColor && (m += "-ColorMatch"),
      isGlassMode && "Wall" == ma.logoPlacement && (m = "Logo-MortonHex"),
      sceneRoot.getObjectByName(m) &&
      (windowGroup ||
        (((windowGroup = sceneRoot.getObjectByName(m)).castShadow = !0),
          (windowGroup.receiveShadow = !0),
          (windowGroup.visible = !0)),
        snapshotBuffer ||
        (((snapshotBuffer = windowGroup.clone()).name += "2"),
          (snapshotBuffer.rotation.y = THREE.Math.degToRad(180)),
          lastHoveredItem.add(snapshotBuffer)),
        ("Peak" != ma.logoPlacement && "Morton" != ma.logoPlacement) ||
        ((u = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0),
          (T =
            "Single Slope" === ma.roofType
              ? ma.height + t / 2 - 0.25
              : ma.height + t - 0.25),
          (g = ma.depth / 2 + ma.gableFront + 0.1),
          (y = ma.depth / 2 + ma.gableBack + 0.1)),
        "Wall" == ma.logoPlacement &&
        ((u = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0),
          (T =
            "Single Slope" === ma.roofType
              ? ma.height + t / 2 - 1.5
              : ((T = ma.height + t - 1.5),
                (ma.peakHeight() + ma.height) / 2 - 0.5)),
          (g = ma.depth / 2 + 0.1),
          (y = ma.depth / 2 + 0.1)),
        "None" == ma.logoPlacement
          ? ((windowGroup.visible = false), (snapshotBuffer.visible = false))
          : (windowGroup.position.set(u, T, g),
            snapshotBuffer.position.set(u, T, -y))),
      isGlassMode && ((m = "Logo-MortonHex"), raycastHelper.getObjectByName(m)))
  ) {
    let e, t;
    lastHoveredItem.getObjectByName(m + "-Front")
      ? (e = lastHoveredItem.getObjectByName(m + "-Front"))
      : (((e = raycastHelper.getObjectByName(m).clone()).name += "-Front"),
        (e.visible = !0),
        lastHoveredItem.add(e)),
      lastHoveredItem.getObjectByName(m + "-Back")
        ? (t = lastHoveredItem.getObjectByName(m + "-Back"))
        : (((t = raycastHelper.getObjectByName(m).clone()).name += "-Back"),
          (t.rotation.y = THREE.Math.degToRad(180)),
          (t.visible = !0),
          lastHoveredItem.add(t)),
      (e.position.y = (ma.peakHeight() + ma.height) / 2 - 0.5),
      (t.position.y = (ma.peakHeight() + ma.height) / 2 - 0.5),
      (e.position.z = ma.depth / 2 + 0.1),
      (t.position.z = ma.depth / -2 - 0.1);
  }
  if (
    ma.settings.customWallLogo &&
    ((m = "Logo-Wall"), raycastHelper.getObjectByName(m))
  ) {
    let e;
    lastHoveredItem.getObjectByName(m + "-Front")
      ? (e = lastHoveredItem.getObjectByName(m + "-Front"))
      : (((e = raycastHelper.getObjectByName(m).clone()).name += "-Front"),
        (e.visible = !0),
        lastHoveredItem.add(e)),
      (e.position.y = (ma.peakHeight() + ma.height) / 2 - 0.5),
      (e.position.z = ma.depth / 2 + 0.1);
    var g = new THREE.Color();
    g.setStyle(
      colorOptions.filter((e) => e.name === ma.wallColor).map((e) => e.hex)
    );
    let t = "#ffffff";
    1.5 < g.r + g.g + g.b && (t = "#000000"), e.material.color.setStyle(t);
  }
  var u = new THREE.Vector3(),
    T = new THREE.Vector3(),
    y = new THREE.Vector3();
  u.set(0, 1, 0).applyQuaternion(wallGroup.quaternion),
    T.set(0, -1, 0).applyQuaternion(wallGroup.quaternion),
    y.copy(wallGroup.position),
    configPhysics.setFromNormalAndCoplanarPoint(u, y),
    configLighting.setFromNormalAndCoplanarPoint(T, y),
    (u = new THREE.Vector3()),
    (T = new THREE.Vector3()),
    (y = new THREE.Vector3()),
    u.set(0, 1, 0).applyQuaternion(roofGroup.quaternion),
    T.set(0, -1, 0).applyQuaternion(roofGroup.quaternion),
    y.copy(roofGroup.position),
    configAnimation.setFromNormalAndCoplanarPoint(u, y),
    configExport.setFromNormalAndCoplanarPoint(T, y);
}

function O() {
  if (ma.hasOwnProperty("downspoutColor")) {
    let e = false;
    if (
      (ma.hasOwnProperty("gutters") && !0 === ma.gutters && (e = !0),
        selectedMesh.__folders.hasOwnProperty(
          localizationLabels[userLocale].Colors
        ))
    )
      for (
        i = 0;
        i <
        selectedMesh.__folders[localizationLabels[userLocale].Colors]
          .__controllers.length;
        i++
      ) {
        var t =
          selectedMesh.__folders[localizationLabels[userLocale].Colors]
            .__controllers[i];
        "downspoutColor" === t.property &&
          ((t.domElement.parentElement.parentElement.hidden = !e),
            t.updateDisplay());
      }
  }
  if (ma.hasOwnProperty("gutterColor")) {
    let e = false;
    if (
      (ma.hasOwnProperty("gutters") && !0 === ma.gutters && (e = !0),
        selectedMesh.__folders.hasOwnProperty(
          localizationLabels[userLocale].Colors
        ))
    )
      for (
        i = 0;
        i <
        selectedMesh.__folders[localizationLabels[userLocale].Colors]
          .__controllers.length;
        i++
      ) {
        var a =
          selectedMesh.__folders[localizationLabels[userLocale].Colors]
            .__controllers[i];
        "gutterColor" === a.property &&
          ((a.domElement.parentElement.parentElement.hidden = !e),
            a.updateDisplay());
      }
  }
  if (ma.hasOwnProperty("wainscotColor")) {
    let e = false;
    if (
      (((ma.hasOwnProperty("wainscot1") && !0 === ma.wainscot1) ||
        (ma.hasOwnProperty("wainscot2") && !0 === ma.wainscot2) ||
        (ma.hasOwnProperty("wainscot3") && !0 === ma.wainscot3) ||
        (ma.hasOwnProperty("wainscot4") && !0 === ma.wainscot4)) &&
        (e = !0),
        selectedMesh.__folders.hasOwnProperty(
          localizationLabels[userLocale].Colors
        ))
    )
      for (
        i = 0;
        i <
        selectedMesh.__folders[localizationLabels[userLocale].Colors]
          .__controllers.length;
        i++
      ) {
        var o =
          selectedMesh.__folders[localizationLabels[userLocale].Colors]
            .__controllers[i];
        "wainscotColor" === o.property &&
          ((o.domElement.parentElement.parentElement.hidden = !e),
            o.updateDisplay());
      }
  }
  sceneRoot.traverse(function (a) {
    if (a instanceof THREE.Mesh && a.material) {
      a.name.startsWith("ceiling") &&
        "Steel" == ma.ceiling &&
        a.material.color.setStyle(
          colorOptions
            .filter((e) => e.name === ma.interiorPanelColor)
            .map((e) => e.hex)
        ),
        "Downspouts" === a.material.name &&
        (ma.hasOwnProperty("downspoutColor")
          ? a.material.color.setStyle(
            colorOptions
              .filter((e) => e.name === ma.downspoutColor)
              .map((e) => e.hex)
          )
          : ma.hasOwnProperty("gutterColor")
            ? a.material.color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.gutterColor)
                .map((e) => e.hex)
            )
            : ma.hasOwnProperty("trimCornerColor")
              ? a.material.color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimCornerColor)
                  .map((e) => e.hex)
              )
              : ma.hasOwnProperty("trimWallColor")
                ? a.material.color.setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.trimWallColor)
                    .map((e) => e.hex)
                )
                : a.material.color.setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.trimColor)
                    .map((e) => e.hex)
                ));
      for (let t = 0; t < a.material.length; t++) {
        var e, o;
        if (
          (("BuildingRoof" === a.material[t].name ||
            "BuildingRoofWidth" === a.material[t].name ||
            "BuildingRoofDepth" === a.material[t].name ||
            "CupolaRoof" === a.material[t].name ||
            "BuildingRidgeCap" === a.material[t].name ||
            a.material[t].name.startsWith("Shutters")) &&
            (a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.roofColor)
                .map((e) => e.hex)
            ),
              ma.hasOwnProperty("shutterColor")) &&
            a.material[t].name.startsWith("Shutters") &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.shutterColor)
                .map((e) => e.hex)
            ),
            a.name.startsWith("garageSlide") ||
            ("BuildingWallsWidth" !== a.material[t].name &&
              "BuildingWallsWidthLeftFront" !== a.material[t].name &&
              "BuildingWallsWidthLeftBack" !== a.material[t].name &&
              "BuildingWallsWidthRightFront" !== a.material[t].name &&
              "BuildingWallsWidthRightBack" !== a.material[t].name &&
              "BuildingWallsDepth" !== a.material[t].name &&
              "BuildingWallsDepthL" !== a.material[t].name &&
              "BuildingWallsDepthR" !== a.material[t].name &&
              "BuildingWalls" !== a.material[t].name &&
              "LeantoWallsWidth" !== a.material[t].name &&
              "LeantoWallsDepth" !== a.material[t].name) ||
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.wallColor)
                .map((e) => e.hex)
            ),
            "PorchPosts" === a.material[t].name &&
            a.material[t].color &&
            a.material[t].color.getHex() !== baseColor.getHex() &&
            a.material[t].color.getHex() !== trimColor.getHex() &&
            a.material[t].color.setStyle(
              colorOptions
                .filter(
                  (e) => e.name === ma[ma.settings.wrappedPorchPostColorMatches]
                )
                .map((e) => e.hex)
            ),
            ma.hasOwnProperty("baseTrim") &&
            a.material[t].name.startsWith("BuildingTrim-Base") &&
            (ma.baseTrim
              ? (a.material[t].visible = !0)
              : (a.material[t].visible = false)),
            (a.material[t].name.startsWith("BuildingTrim") ||
              "BuildingRidgeCap" === a.material[t].name ||
              "Track" === a.material[t].name) &&
            (a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.trimColor)
                .map((e) => e.hex)
            ),
              ma.hasOwnProperty("trimWallColor") &&
              (a.material[t].name.startsWith("BuildingTrim-Base") ||
                a.material[t].name.startsWith("BuildingTrim-Corner") ||
                "BuildingTrim1" == a.material[t].name ||
                "BuildingTrim2" == a.material[t].name ||
                "BuildingTrim3" == a.material[t].name ||
                "BuildingTrim4" == a.material[t].name) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimWallColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("doorWindowTrimColor") &&
              a.material[t].name.startsWith("BuildingTrim") &&
              (a.name.startsWith("window") ||
                a.name.startsWith("walkDoor") ||
                a.name.startsWith("garage")) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.doorWindowTrimColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("doorTrimColor") &&
              a.material[t].name.startsWith("BuildingTrim") &&
              (a.name.startsWith("walkDoor") || a.name.startsWith("garage")) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.doorTrimColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("walkDoorTrimColor") &&
              a.material[t].name.startsWith("BuildingTrim") &&
              a.name.startsWith("walkDoor") &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.walkDoorTrimColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("garageDoorTrimColor") &&
              a.material[t].name.startsWith("BuildingTrim") &&
              a.name.startsWith("garage") &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.garageDoorTrimColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("windowTrimColor") &&
              a.material[t].name.startsWith("BuildingTrim") &&
              a.name.startsWith("window") &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.windowTrimColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trimRoofColor") &&
              (a.material[t].name.startsWith("BuildingTrim-RoofPivot") ||
                a.material[t].name.startsWith("BuildingTrim-Gable") ||
                "BuildingRidgeCap" === a.material[t].name ||
                a.material[t].name.startsWith("BuildingTrim-RoofEdge") ||
                (a.name.startsWith("cupola") &&
                  a.material[t].name.startsWith("BuildingTrim"))) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimRoofColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trimBaseColor") &&
              a.material[t].name.startsWith("BuildingTrim-Base") &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimBaseColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trimGableColor") &&
              (a.material[t].name.startsWith("BuildingTrim-RoofPivot") ||
                a.material[t].name.startsWith("BuildingTrim-Gable") ||
                "BuildingRidgeCap" === a.material[t].name) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimGableColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trimCornerColor") &&
              (a.material[t].name.startsWith("BuildingTrim-Corner") ||
                "BuildingTrim1" == a.material[t].name ||
                "BuildingTrim2" == a.material[t].name ||
                "BuildingTrim3" == a.material[t].name ||
                "BuildingTrim4" == a.material[t].name) &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimCornerColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trimEaveColor") &&
              a.material[t].name.startsWith("BuildingTrim-RoofEdge") &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimEaveColor)
                  .map((e) => e.hex)
              ),
              ma.hasOwnProperty("trackColor")) &&
            a.material[t].name.startsWith("Track") &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.trackColor)
                .map((e) => e.hex)
            ),
            isGlassMode &&
            (a.material[t].name.startsWith("LogoBG") &&
              ("White" == ma.trimColor || "Ivory" == ma.trimColor
                ? a.material[t].color.setStyle("#D6112F")
                : a.material[t].color.setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.trimColor)
                    .map((e) => e.hex)
                )),
              a.material[t].name.startsWith("LogoColor")) &&
            ("White" == ma.trimColor || "Ivory" == ma.trimColor
              ? a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimColor)
                  .map((e) => e.hex)
              )
              : a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => "White" === e.name)
                  .map((e) => e.hex)
              )),
            ma.settings.matchPeakSignBackgroundToTrimColor &&
            windowGroup &&
            snapshotBuffer &&
            ((a != windowGroup && a != snapshotBuffer) ||
              ((e = new THREE.Color()),
                (o = new THREE.Color()).setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.trimColor)
                    .map((e) => e.hex)
                ),
                1.75 < o.r + o.g + o.b
                  ? e.setStyle("#000000")
                  : e.setStyle("#ffffff"),
                "LogoTransparent" == a.material[t].name
                  ? a.material[t].color.copy(e)
                  : a.material[t].name.startsWith("Logo") &&
                  (a.material[t].color.setStyle(
                    colorOptions
                      .filter((e) => e.name === ma.trimColor)
                      .map((e) => e.hex)
                  ),
                    a.material[t].emissive.setStyle("#000000")))),
            ma.hasOwnProperty("ridgeCapColor") &&
            ("Match Trim" == ma.ridgeCapColor &&
              "BuildingRidgeCap" === a.material[t].name &&
              a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.trimColor)
                  .map((e) => e.hex)
              ),
              "Match Roof" == ma.ridgeCapColor) &&
            "BuildingRidgeCap" === a.material[t].name &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.roofColor)
                .map((e) => e.hex)
            ),
            "Gutters" === a.material[t].name &&
            (ma.hasOwnProperty("gutterColor")
              ? a.material[t].color.setStyle(
                colorOptions
                  .filter((e) => e.name === ma.gutterColor)
                  .map((e) => e.hex)
              )
              : ma.hasOwnProperty("downspoutColor")
                ? a.material[t].color.setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.downspoutColor)
                    .map((e) => e.hex)
                )
                : ma.hasOwnProperty("trimRoofColor")
                  ? a.material[t].color.setStyle(
                    colorOptions
                      .filter((e) => e.name === ma.trimRoofColor)
                      .map((e) => e.hex)
                  )
                  : a.material[t].color.setStyle(
                    colorOptions
                      .filter((e) => e.name === ma.trimColor)
                      .map((e) => e.hex)
                  )),
            ma.hasOwnProperty("walkDoorColor") &&
            a.name.startsWith("walkDoor") &&
            "Door" === a.material[t].name &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.walkDoorColor)
                .map((e) => e.hex)
            ),
            ma.hasOwnProperty("largeDoorColor") &&
            a.name.startsWith("garage") &&
            ("Door" === a.material[t].name ||
              "RollUpDoor" === a.material[t].name ||
              "BuildingWalls" === a.material[t].name) &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.largeDoorColor)
                .map((e) => e.hex)
            ),
            ma.hasOwnProperty("commercialDoorColor") &&
            a.name.startsWith("garageOverheadFlat") &&
            "Door" === a.material[t].name &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.commercialDoorColor)
                .map((e) => e.hex)
            ),
            ma.hasOwnProperty("residentialDoorColor") &&
            a.name.startsWith("garageOverheadPanel") &&
            "Door" === a.material[t].name &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.residentialDoorColor)
                .map((e) => e.hex)
            ),
            ma.hasOwnProperty("overheadDoorColor") &&
            a.name.startsWith("garageOverhead") &&
            "Door" === a.material[t].name &&
            a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.overheadDoorColor)
                .map((e) => e.hex)
            ),
            (a.name.startsWith("garageSlide") ||
              a.name.startsWith("walkDoorEquine") ||
              a.name.startsWith("garageBiFold") ||
              a.name.startsWith("garageHydraulic")) &&
            ("BuildingWalls" === a.material[t].name ||
              "BuildingWallsSmooth" === a.material[t].name) &&
            a.name.endsWith("-clone") &&
            (a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.wallColor)
                .map((e) => e.hex)
            ),
              a.material[t].normalMap))
        ) {
          let e = a.userData.scale.x;
          a.name.startsWith("garageSlide") && (e /= 2),
            a.material[t].normalMap.repeat.set(e * activeMaterial, 1),
            (a.material[t].needsUpdate = !0);
        }
        ma.hasOwnProperty("slidingDoorColor") &&
          a.name.startsWith("garageSlide") &&
          ("BuildingWalls" === a.material[t].name ||
            "Door" === a.material[t].name) &&
          a.material[t].color.setStyle(
            colorOptions
              .filter((e) => e.name === ma.slidingDoorColor)
              .map((e) => e.hex)
          ),
          a.name.startsWith("perimeterWall") &&
          ("Steel" === ma.perimeterWalls
            ? a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.interiorPanelColor)
                .map((e) => e.hex)
            )
            : "Half Wood" === ma.perimeterWalls
              ? ("interiorWallUpper" === a.material[t].name &&
                a.material[t].color.setStyle(
                  colorOptions
                    .filter((e) => e.name === ma.interiorPanelColor)
                    .map((e) => e.hex)
                ),
                "interiorWallLower" === a.material[t].name &&
                a.material[t].color.setStyle("#ffffff"))
              : "8' OSB with Steel above" === ma.perimeterWalls
                ? ("interiorWallUpper" === a.material[t].name &&
                  a.material[t].color.setStyle(
                    colorOptions
                      .filter((e) => e.name === ma.interiorPanelColor)
                      .map((e) => e.hex)
                  ),
                  "interiorWallLower" === a.material[t].name &&
                  a.material[t].color.setStyle("#ffffff"))
                : "Drywall" === ma.perimeterWalls
                  ? a.material[t].color.setStyle("#eeeeee")
                  : a.material[t].color.setStyle("#ffffff")),
          (a.material[t].name.startsWith("BuildingWainscot1") ||
            a.material[t].name.startsWith("BuildingWainscot2") ||
            a.material[t].name.startsWith("BuildingWainscot3") ||
            a.material[t].name.startsWith("BuildingWainscot4") ||
            "BuildingWainscotTrim1" === a.material[t].name ||
            "BuildingWainscotTrim2" === a.material[t].name ||
            "BuildingWainscotTrim3" === a.material[t].name ||
            "BuildingWainscotTrim4" === a.material[t].name ||
            "LeantoWainscot1" === a.material[t].name ||
            "LeantoWainscot2" === a.material[t].name ||
            "LeantoWainscot3" === a.material[t].name ||
            "LeantoWainscotTrim1" === a.material[t].name ||
            "LeantoWainscotTrim2" === a.material[t].name ||
            "LeantoWainscotTrim3" === a.material[t].name) &&
          a.material[t].color.setStyle(
            colorOptions
              .filter((e) => e.name === ma.wainscotColor)
              .map((e) => e.hex)
          ),
          (a.material[t].name.startsWith("BuildingWainscot1") ||
            a.material[t].name.startsWith("BuildingWainscot2") ||
            a.material[t].name.startsWith("BuildingWainscot3") ||
            a.material[t].name.startsWith("BuildingWainscot4") ||
            "LeantoWainscot1" === a.material[t].name ||
            "LeantoWainscot2" === a.material[t].name ||
            "LeantoWainscot3" === a.material[t].name) &&
          ((("Stone" === ma.wainscotColor || "Brick" === ma.wainscotColor) &&
            (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4)) ||
            ((a.morphTargetInfluences[
              a.morphTargetDictionary.trimWainscot1
            ] = 0),
              (a.morphTargetInfluences[
                a.morphTargetDictionary.trimWainscot2
              ] = 0),
              (a.morphTargetInfluences[
                a.morphTargetDictionary.trimWainscot3
              ] = 0),
              (a.morphTargetInfluences[
                a.morphTargetDictionary.trimWainscot4
              ] = 0)),
            (a.geometry.dynamic = !0),
            a.geometry.hasOwnProperty("normalsNeedUpdate") &&
            (a.geometry.normalsNeedUpdate = !0),
            a.geometry.hasOwnProperty("tangentsNeedUpdate") &&
            (a.geometry.tangentsNeedUpdate = !0),
            "Stone" === ma.wainscotColor
              ? (a.material[t].color.setHex(16777215),
                a.material[t].specular.setHex(0),
                (a.material[t].shininess = 0.1),
                (a.material[t].map = new THREE.TextureLoader().load(
                  assetBaseUrl + "images/building/Stone.jpg"
                )),
                a.material[t].normalScale.set(0.01, 0.01),
                (a.material[t].map.wrapS = THREE.RepeatWrapping),
                (a.material[t].map.wrapT = THREE.RepeatWrapping),
                (a.material[t].map.anisotropy = 1),
                (a.material[t].map.repeat.x =
                  a.material[t].normalMap.repeat.x / 8),
                (a.material[t].map.offset.x =
                  a.material[t].normalMap.offset.x / 8))
              : "Brick" === ma.wainscotColor
                ? (a.material[t].color.setHex(16777215),
                  a.material[t].specular.setHex(0),
                  (a.material[t].shininess = 0.1),
                  (a.material[t].map = new THREE.TextureLoader().load(
                    assetBaseUrl + "images/building/Brick.jpg"
                  )),
                  a.material[t].normalScale.set(0.01, 0.01),
                  (a.material[t].map.wrapS = THREE.RepeatWrapping),
                  (a.material[t].map.wrapT = THREE.RepeatWrapping),
                  (a.material[t].map.anisotropy = 1),
                  (a.material[t].map.repeat.x =
                    a.material[t].normalMap.repeat.x / 8),
                  (a.material[t].map.offset.x =
                    a.material[t].normalMap.offset.x / 8))
                : ((a.material[t].map = null),
                  a.material[t].normalScale.set(1, 1),
                  a.material[t].specular.setHex(4144959),
                  (a.material[t].shininess = 40)),
            (a.material[t].needsUpdate = !0)),
          "BuildingSoffit" === a.material[t].name &&
          a.material[t].color.setStyle(
            colorOptions
              .filter((e) => e.name === ma.soffitColor)
              .map((e) => e.hex)
          ),
          "EaveLightsTrim" === a.material[t].name &&
          (ma.hasOwnProperty("trimEaveLightsColor")
            ? a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.trimEaveLightsColor)
                .map((e) => e.hex)
            )
            : a.material[t].color.setStyle(
              colorOptions
                .filter((e) => e.name === ma.trimColor)
                .map((e) => e.hex)
            ));
      }
    }
  }),
    (isMaterialUpdateEnabled = !0);
}

function no(e) {
  var t = false,
    a =
      (("touchstart" !== e.type &&
        "touchmove" !== e.type &&
        "touchend" !== e.type) ||
        (t = !0),
        (r.x =
          ((e.clientX - orbitControls.domElement.getBoundingClientRect().left) /
            orbitControls.domElement.clientWidth) *
          2 -
          1),
        (r.y =
          2 *
          -(
            (e.clientY - orbitControls.domElement.getBoundingClientRect().top) /
            orbitControls.domElement.clientHeight
          ) +
          1),
        t &&
        ((r.x =
          ((e.touches[0].clientX -
            orbitControls.domElement.getBoundingClientRect().left) /
            orbitControls.domElement.clientWidth) *
          2 -
          1),
          (r.y =
            2 *
            -(
              (e.touches[0].clientY -
                orbitControls.domElement.getBoundingClientRect().top) /
              orbitControls.domElement.clientHeight
            ) +
            1)),
        Aa.setFromCamera(r, mainCamera),
        (ka = t
          ? ((za = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          }),
          {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          })
          : ((za = {
            x: e.clientX,
            y: e.clientY,
          }),
          {
            x: e.clientX,
            y: e.clientY,
          })),
        (Fa = !0),
        fo(),
        Aa.intersectObjects(_a)),
    o = -1;
  for (let e = 0; e < a.length; e++)
    if (
      (a[e].object.name.startsWith("selectionBox") &&
        (a[e].object = a[e].object.parent),
        a[e].object.userData.hasOwnProperty("fileType") &&
        "lwo" == a[e].object.userData.fileType)
    ) {
      if (
        (mainCamera !== lightGroup ||
          !a[e].object.name.startsWith("buildingBoundingBox")) &&
        !0 === a[e].object.visible
      ) {
        o = e;
        break;
      }
    } else if (!0 === a[e].object.parent.visible) {
      o = e;
      break;
    }
  B &&
    0 < a.length &&
    -1 < o &&
    !a[o].object.parent.name.startsWith("scale") &&
    (o = -1),
    !0 === isQuiet || 2 === isQuiet
      ? ($("#popup").hide(), $("#line").hide())
      : 0 < a.length &&
      -1 < o &&
      (0 === e.button || (t && 1 === e.touches.length)) &&
      (("buildingBoundingBox" != a[o].object.name &&
        "leanTo1BoundingBox" != a[o].object.name &&
        "leanTo2BoundingBox" != a[o].object.name &&
        "leanTo3BoundingBox" != a[o].object.name &&
        "leanTo4BoundingBox" != a[o].object.name) ||
        mainCamera == lightGroup) &&
      (mainCamera == lightGroup &&
        1 < a.length &&
        ("buildingBoundingBox" == a[o].object.name ||
          "leanTo1BoundingBox" == a[o].object.name ||
          "leanTo2BoundingBox" == a[o].object.name ||
          "leanTo3BoundingBox" == a[o].object.name ||
          "leanTo4BoundingBox" == a[o].object.name) &&
        (a[0] = a[1]),
        e.stopPropagation(),
        (environmentMap.enableRotate = false),
        (currentModel.enablePan = false),
        (isActive = !0),
        "porc" === a[o].object.name.substring(0, 4) ||
          "scal" === a[o].object.parent.name.substring(0, 4) ||
          (a[o].object.name.startsWith("scale") &&
            a[o].object.userData.hasOwnProperty("fileType") &&
            "lwo" == a[o].object.userData.fileType) ||
          a[o].object.name.startsWith("mansard") ||
          "wind" === a[o].object.name.substring(0, 4) ||
          "walk" === a[o].object.name.substring(0, 4) ||
          "gara" === a[o].object.name.substring(0, 4)
          ? ((lastSelectedMaterial = y),
            Zo((y = a[o].object)),
            (a =
              a[o].object.name.startsWith("scale") &&
                "lwo" == a[o].object.userData.fileType
                ? Aa.intersectObject(animationMixer)
                : a[o].object.parent.name.startsWith("scale")
                  ? ((y = a[o].object.parent), Aa.intersectObject(animationMixer))
                  : Aa.intersectObjects($a, !0)),
            Lo())
          : a[o].object.name.startsWith("measure")
            ? (null != y &&
              sceneRoot.traverse(function (t) {
                if (t instanceof THREE.Mesh && !y.name.startsWith("measure"))
                  if (((t.renderOrder = 1), t.material.length))
                    for (let e = 0; e < t.material.length; e++)
                      (t.material[e].opacity = 1),
                        (t.material[e].depthTest = !0),
                        t.material[e].emissive.setHex(0);
                  else
                    (t.material.opacity = 1),
                      (t.material.depthTest = !0),
                      t.material.emissive.setHex(0);
              }),
              (lastSelectedMaterial = y),
              (y = null),
              (y = a[o].object),
              (a = Aa.intersectObject(uiOverlay)),
              $("#popup").hide(),
              $("#line").hide())
            : ((lastSelectedMaterial = y),
              (y = null),
              (y =
                a[o].object.userData.hasOwnProperty("fileType") &&
                  "lwo" == a[o].object.userData.fileType
                  ? a[o].object
                  : a[o].object.parent),
              (a = Aa.intersectObject(animationMixer)),
              Zo(y),
              $("#popup").is(":visible")
                ? ($("#line").show(), Ho(), Lo())
                : ($("#popup").hide(), $("#line").hide())));
}

function ro(e) {
  Qo();
  let t = false,
    s = null,
    l;
  if (Fa) {
    if (
      (("touchstart" !== e.type &&
        "touchmove" !== e.type &&
        "touchend" !== e.type) ||
        (t = !0),
        (r.x =
          ((e.clientX - orbitControls.domElement.getBoundingClientRect().left) /
            orbitControls.domElement.clientWidth) *
          2 -
          1),
        (r.y =
          2 *
          -(
            (e.clientY - orbitControls.domElement.getBoundingClientRect().top) /
            orbitControls.domElement.clientHeight
          ) +
          1),
        t &&
        (e.preventDefault(),
          (r.x =
            ((e.touches[0].clientX -
              orbitControls.domElement.getBoundingClientRect().left) /
              orbitControls.domElement.clientWidth) *
            2 -
            1),
          (r.y =
            2 *
            -(
              (e.touches[0].clientY -
                orbitControls.domElement.getBoundingClientRect().top) /
              orbitControls.domElement.clientHeight
            ) +
            1)),
        Aa.setFromCamera(r, mainCamera),
        (ka = {
          x: r.x,
          y: r.y,
        }),
        "popup" !== e.target.id &&
        "popup" !== e.target.parentNode.id &&
        "popup" !== e.target.parentNode.parentNode.id &&
        "popup" !== e.target.parentNode.parentNode.parentNode.id &&
        (false === Ia &&
          (sceneManager.getBoundingClientRect(),
            t
              ? (1 <
                Math.abs(
                  za.x - (e.touches[0].pageX - sceneManager.offsetLeft)
                ) ||
                1 <
                Math.abs(
                  za.y - (e.touches[0].pageY - sceneManager.offsetTop)
                )) &&
              (Ia = !0)
              : (1 < Math.abs(za.x - (e.pageX - sceneManager.offsetLeft)) ||
                1 < Math.abs(za.y - (e.pageY - sceneManager.offsetTop))) &&
              (Ia = !0)),
          y) &&
        Ia)
    ) {
      Lo();
      let a = 0,
        o = 0,
        i = 0,
        n = 0,
        r = "front";
      if (
        !isActive ||
        (0 !== e.button && 1 !== e.touches.length) ||
        (!y.name.startsWith("mansard") &&
          "porc" !== y.name.substring(0, 4) &&
          "wind" !== y.name.substring(0, 4) &&
          "walk" !== y.name.substring(0, 4) &&
          "gara" !== y.name.substring(0, 4)) ||
        0 != isDollarTriggered
      ) {
        if (
          isActive &&
          (0 === e.button || 1 === e.touches.length) &&
          (void 0 !==
            (l = y.name.startsWith("measure")
              ? Aa.intersectObject(uiOverlay)
              : y.name.startsWith("interior")
                ? Aa.intersectObject(U)
                : Aa.intersectObject(animationMixer))[0] &&
            ((s = l[0].point.sub(Ga)),
              y.position.copy(s),
              y.name.startsWith("measure")) &&
            ((y.userData.position = {
              x: s.x,
              y: s.y,
              z: s.z,
            }),
              Ao(y)),
            "scale-driveway-clone" === y.name)
        ) {
          var h = -1 * s.z - ma.width / 2,
            c = s.x - ma.depth / 2,
            d = s.z - ma.width / 2,
            p = -1 * s.x - ma.depth / 2,
            m = Math.min(h, c, d, p);
          h === m
            ? ((y.rotation.y = 0), (r = 1))
            : c === m
              ? ((y.rotation.y = Math.PI / -2), (r = 2))
              : d === m
                ? ((y.rotation.y = +Math.PI), (r = 3))
                : p === m && ((y.rotation.y = Math.PI / 2), (r = 4)),
            (a = 0),
            (o = 0),
            (i = 0),
            (n = 0),
            ma.leanTo2 && (a = ma.leanTo2Depth),
            ma.leanTo4 && (o = ma.leanTo4Depth),
            ma.leanTo1 && (i = ma.leanTo1Depth),
            ma.leanTo3 && (n = ma.leanTo3Depth);
          let e, t;
          (e =
            19 <= ma.width && (1 === r || 3 === r)
              ? Math.min(Math.max(s.x, ma.width / -2 + 9.5), ma.width / 2 - 9.5)
              : Math.min(Math.max(s.x, ma.width / -2), ma.width / 2)),
            (t =
              19 <= ma.depth && (2 === r || 4 === r)
                ? Math.min(
                  Math.max(s.z, ma.depth / -2 + 9.5),
                  ma.depth / 2 - 9.5
                )
                : Math.min(Math.max(s.z, ma.depth / -2), ma.depth / 2)),
            1 === r && (t += i),
            2 === r && (e -= a),
            3 === r && (t -= n),
            4 === r && (e += o),
            y.position.set(e, 0, t);
        }
      } else {
        (h = 0), (c = 0), (d = 0), (p = 0);
        if (
          ((l = Aa.intersectObjects($a, !0)),
            "porc" === y.name.substring(0, 4) &&
            (l = l.concat(Aa.intersectObject(animationMixer))),
            0 < (l = "porchWrap" === y.name.substring(0, 9) ? [] : l).length &&
            Ia)
        ) {
          "porc" !== y.name.substring(0, 4)
            ? 0 === l[0].faceIndex || 1 === l[0].faceIndex
              ? (y.rotation.y = Math.PI / 2 + l[0].object.rotation.y)
              : 2 === l[0].faceIndex || 3 === l[0].faceIndex
                ? (y.rotation.y = Math.PI / -2 + l[0].object.rotation.y)
                : 8 === l[0].faceIndex || 9 === l[0].faceIndex
                  ? (y.rotation.y = 0 + l[0].object.rotation.y)
                  : 10 === l[0].faceIndex || 11 === l[0].faceIndex
                    ? (y.rotation.y = +Math.PI + l[0].object.rotation.y)
                    : (r = false)
            : (r = false),
            false !== r &&
            (0 === y.rotation.y && (r = "front"),
              y.rotation.y === Math.PI / 2 && (r = "right"),
              y.rotation.y === Math.PI / -2 && (r = "left"),
              y.rotation.y === +Math.PI) &&
            (r = "back");
          var m = y.morphTargetInfluences[y.morphTargetDictionary.width],
            g = y.morphTargetInfluences[y.morphTargetDictionary.height];
          let e = 0;
          null !== y.morphTargetDictionary.depth &&
            (e = y.morphTargetInfluences[y.morphTargetDictionary.depth]),
            "window3x4-clone" === y.name || "window3x4Grid-clone" === y.name
              ? (("front" !== r && "back" !== r) ||
                ((h = 2), (c = 4.7), (d = 2.5)),
                ("left" !== r && "right" !== r) ||
                ((p = 2), (c = 4.7), (d = 2.5)))
              : "window3x4Shutters-clone" === y.name
                ? (("front" !== r && "back" !== r) ||
                  ((h = 3), (c = 4.7), (d = 2.5)),
                  ("left" !== r && "right" !== r) ||
                  ((p = 3), (c = 4.7), (d = 2.5)))
                : "window4x3-clone" === y.name || "window4x3Grid-clone" === y.name
                  ? (("front" !== r && "back" !== r) ||
                    ((h = 2.5), (c = 5.2), (d = 2)),
                    ("left" !== r && "right" !== r) ||
                    ((p = 2.5), (c = 5.2), (d = 2)))
                  : "window4x3Shutters-clone" === y.name
                    ? (("front" !== r && "back" !== r) ||
                      ((h = 4), (c = 5.2), (d = 2)),
                      ("left" !== r && "right" !== r) ||
                      ((p = 4), (c = 5.2), (d = 2)))
                    : "windowPicture-clone" === y.name ||
                      "windowCasement-clone" === y.name ||
                      "windowSlider-clone" === y.name ||
                      "windowDoubleHung-clone" === y.name ||
                      "windowSingleHung-clone" === y.name ||
                      "windowTwinset-clone" === y.name ||
                      "windowAwning-clone" === y.name ||
                      "windowHopper-clone" === y.name ||
                      "windowSlopeLeft-clone" === y.name ||
                      "windowSlopeRight-clone" === y.name
                      ? (("front" !== r && "back" !== r) ||
                        ((h = 1 + m / 2), (c = 1 + g / 2 + 2), (d = 1 + g / 2)),
                        ("left" !== r && "right" !== r) ||
                        ((p = 1 + m / 2), (c = 1 + g / 2 + 2), (d = 1 + g / 2)))
                      : "windowLouver-clone" === y.name
                        ? (("front" !== r && "back" !== r) ||
                          ((h = 1 + m / 2), (c = 0.5 + g / 2), (d = 1 + g / 2)),
                          ("left" !== r && "right" !== r) ||
                          ((p = 1 + m / 2), (c = 0.5 + g / 2), (d = 1 + g / 2)))
                        : "windowFramedOpening-clone" === y.name
                          ? (("front" !== r && "back" !== r) ||
                            ((h = 1 + m / 2), (c = 1 + g / 2 + 2), (d = 1 + g / 2)),
                            ("left" !== r && "right" !== r) ||
                            ((p = 1 + m / 2), (c = 1 + g / 2 + 2), (d = 1 + g / 2)))
                          : "walkDoorSolid-clone" === y.name
                            ? (("front" !== r && "back" !== r) || ((h = 2 + m / 2), (c = 0)),
                              ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                            : "walkDoorSolidDouble-clone" === y.name
                              ? (("front" !== r && "back" !== r) ||
                                ((h = 3.5 + m / 2), (c = 0)),
                                ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                              : "walkDoorHalfGlass-clone" === y.name
                                ? (("front" !== r && "back" !== r) || ((h = 2 + m / 2), (c = 0)),
                                  ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                : "walkDoorHalfGlassDouble-clone" === y.name
                                  ? (("front" !== r && "back" !== r) ||
                                    ((h = 3.5 + m / 2), (c = 0)),
                                    ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                  : "walkDoor6Panel-clone" === y.name
                                    ? (("front" !== r && "back" !== r) || ((h = 2.5), (c = 0)),
                                      ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                    : "walkDoor6PanelDouble-clone" === y.name
                                      ? (("front" !== r && "back" !== r) ||
                                        ((h = 3.5 + m / 2), (c = 0)),
                                        ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                      : "walkDoor6Lite-clone" === y.name ||
                                        "walkDoor9Lite-clone" === y.name ||
                                        "walkDoor9LiteNoPanel-clone" === y.name
                                        ? (("front" !== r && "back" !== r) || ((h = 2.5), (c = 0)),
                                          ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                        : "walkDoor9LiteDouble-clone" === y.name ||
                                          "walkDoorSlidingGlassDouble-clone" === y.name ||
                                          "walkDoorFrenchDouble-clone" === y.name
                                          ? (("front" !== r && "back" !== r) ||
                                            ((h = 3.5 + m / 2), (c = 0)),
                                            ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                          : "walkDoorAllGlass-clone" === y.name
                                            ? (("front" !== r && "back" !== r) || ((h = 2.5), (c = 0)),
                                              ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                            : "walkDoorAllGlassDouble-clone" === y.name
                                              ? (("front" !== r && "back" !== r) ||
                                                ((h = 3.5 + m / 2), (c = 0)),
                                                ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                              : "walkDoorCrossbuck-clone" === y.name
                                                ? (("front" !== r && "back" !== r) || ((h = 2.5), (c = 0)),
                                                  ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                                : "walkDoorEquine-clone" === y.name ||
                                                  "walkDoorEquineSmooth-clone" === y.name
                                                  ? (("front" !== r && "back" !== r) || ((h = 3), (c = 0)),
                                                    ("left" !== r && "right" !== r) || ((p = 3), (c = 0)))
                                                  : "walkDoorFramedOpening-clone" === y.name
                                                    ? (("front" !== r && "back" !== r) || ((h = 2 + m / 2), (c = 0)),
                                                      ("left" !== r && "right" !== r) || ((p = 2.5), (c = 0)))
                                                    : "garageOverheadPanel-clone" === y.name ||
                                                      "garageOverheadPanelWindow-clone" === y.name ||
                                                      "garageOverheadFlat-clone" === y.name ||
                                                      "garageOverheadFlatWindow-clone" === y.name ||
                                                      "garageOverheadFlatModern-clone" === y.name ||
                                                      "garageOverheadRibbed-clone" === y.name
                                                      ? (("front" !== r && "back" !== r) || ((h = 6 + 10 * m), (c = 0)),
                                                        ("left" !== r && "right" !== r) || ((p = 6 + 10 * m), (c = 0)))
                                                      : y.name.startsWith("garageSlide") && y.name.endsWith("-clone")
                                                        ? (("front" !== r && "back" !== r) ||
                                                          ((h = 10.25 + 10 * m * 2), (c = 0)),
                                                          ("left" !== r && "right" !== r) ||
                                                          ((p = 10.25 + 10 * m * 2), (c = 0)))
                                                        : "garageBiFold-clone" === y.name ||
                                                          "garageHydraulic-clone" === y.name ||
                                                          "garageRollUp-clone" === y.name ||
                                                          "garageFramedOpening-clone" === y.name
                                                          ? (("front" !== r && "back" !== r) || ((h = 6 + 10 * m), (c = 0)),
                                                            ("left" !== r && "right" !== r) || ((p = 6 + 10 * m), (c = 0)))
                                                          : "mansard-clone" === y.name || "mansardWood-clone" === y.name
                                                            ? (("front" !== r && "back" !== r) ||
                                                              ((h = 1 + m / 2), (c = 4.7), (d = 2.5 + e)),
                                                              ("left" !== r && "right" !== r) ||
                                                              ((p = 1 + m / 2), (c = 4.7), (d = 2.5 + e)))
                                                            : ("mansardHip-clone" !== y.name &&
                                                              "mansardHip2-clone" !== y.name) ||
                                                            (("front" !== r && "back" !== r) ||
                                                              ((h = 2.5 + m / 2), (c = 4.7), (d = 2 + e)),
                                                              "left" !== r && "right" !== r) ||
                                                            ((p = 2.5 + m / 2), (c = 4.7), (d = 2 + e)),
            "porc" === y.name.substring(0, 4)
              ? (null === (s = l[0].point.sub(Ga)) &&
                ((l = Aa.intersectObject(animationMixer)),
                  (s = l[0].point.sub(Ga))),
                (a = 0),
                (o = 0),
                (i = 0),
                (n = 0),
                ma.leanTo2 && (a = ma.leanTo2Depth),
                ma.leanTo4 && (o = ma.leanTo4Depth),
                ma.leanTo1 && (i = ma.leanTo1Depth),
                ma.leanTo3 && (n = ma.leanTo3Depth),
                ma.hasOwnProperty("coveredGableExtensionE") &&
                ma.coveredGableExtensionE &&
                ma.coveredGableExtensionEEnclosed &&
                (a = Math.max(a, ma.coveredGableExtensionEDepth)),
                ma.hasOwnProperty("coveredGableExtensionW") &&
                ma.coveredGableExtensionW &&
                ma.coveredGableExtensionWEnclosed &&
                (o = Math.max(o, ma.coveredGableExtensionWDepth)),
                ma.hasOwnProperty("coveredGableExtensionN") &&
                ma.coveredGableExtensionN &&
                ma.coveredGableExtensionNEnclosed &&
                (i = Math.max(i, ma.coveredGableExtensionNDepth)),
                ma.hasOwnProperty("coveredGableExtensionS") &&
                ma.coveredGableExtensionS &&
                ma.coveredGableExtensionSEnclosed &&
                (n = Math.max(n, ma.coveredGableExtensionSDepth)),
                "porchN-clone" === y.name &&
                ((s.z = ma.depth / 2 + i), (h = 6)),
                "porchS-clone" === y.name && (s.z = ma.depth / -2 - n),
                "porchE-clone" === y.name && (s.x = ma.width / -2 - a),
                "porchW-clone" === y.name && (s.x = ma.width / 2 + o),
                (s.y = 0))
              : r
                ? (null === (s = l[0].point.sub(Ga)) &&
                  "porc" === y.name.substring(0, 4) &&
                  ((l = Aa.intersectObject(animationMixer)),
                    (s = l[0].point.sub(Ga))),
                  (a = 0),
                  (o = 0),
                  (i = 0),
                  (n = 0),
                  ma.leanTo2 && (a = ma.leanTo2Depth),
                  ma.leanTo4 && (o = ma.leanTo4Depth),
                  ma.leanTo1 && (i = ma.leanTo1Depth),
                  ma.leanTo3 && (n = ma.leanTo3Depth),
                  ma.hasOwnProperty("coveredGableExtensionE") &&
                  ma.coveredGableExtensionE &&
                  ma.coveredGableExtensionEEnclosed &&
                  (a = Math.max(a, ma.coveredGableExtensionEDepth)),
                  ma.hasOwnProperty("coveredGableExtensionW") &&
                  ma.coveredGableExtensionW &&
                  ma.coveredGableExtensionWEnclosed &&
                  (o = Math.max(o, ma.coveredGableExtensionWDepth)),
                  ma.hasOwnProperty("coveredGableExtensionN") &&
                  ma.coveredGableExtensionN &&
                  ma.coveredGableExtensionNEnclosed &&
                  (i = Math.max(i, ma.coveredGableExtensionNDepth)),
                  ma.hasOwnProperty("coveredGableExtensionS") &&
                  ma.coveredGableExtensionS &&
                  ma.coveredGableExtensionSEnclosed &&
                  (n = Math.max(n, ma.coveredGableExtensionSDepth)),
                  (s.x = Math.min(
                    Math.max(s.x, ma.width / -2 - a + h),
                    ma.width / 2 + o - h
                  )),
                  (s.y =
                    0 === c
                      ? 0
                      : Math.min(Math.max(s.y, c), ma.roofHeightAtX(s.x) - d)),
                  (s.z = Math.min(
                    Math.max(s.z, ma.depth / -2 - n + p),
                    ma.depth / 2 + i - p
                  )))
                : (s.z = Math.min(
                  Math.max(s.z, ma.depth / -2 + p),
                  ma.depth / 2 - p
                )),
            null != s && y.position.copy(s);
        }
      }
    }
  } else if (
    y &&
    (!0 === isQuiet || 2 === isQuiet) &&
    y.name.startsWith("measure")
  )
    (t = false),
      ("touchstart" !== e.type &&
        "touchmove" !== e.type &&
        "touchend" !== e.type) ||
      (t = !0),
      (r.x =
        ((e.clientX - orbitControls.domElement.getBoundingClientRect().left) /
          orbitControls.domElement.clientWidth) *
        2 -
        1),
      (r.y =
        2 *
        -(
          (e.clientY - orbitControls.domElement.getBoundingClientRect().top) /
          orbitControls.domElement.clientHeight
        ) +
        1),
      t &&
      (e.preventDefault(),
        (r.x =
          ((e.touches[0].clientX -
            orbitControls.domElement.getBoundingClientRect().left) /
            orbitControls.domElement.clientWidth) *
          2 -
          1),
        (r.y =
          2 *
          -(
            (e.touches[0].clientY -
              orbitControls.domElement.getBoundingClientRect().top) /
            orbitControls.domElement.clientHeight
          ) +
          1)),
      Aa.setFromCamera(r, mainCamera),
      (ka = {
        x: r.x,
        y: r.y,
      }),
      void 0 !== (l = Aa.intersectObject(uiOverlay))[0] &&
      ((s = l[0].point.sub(Ga)),
        y.position.copy(s),
        (y.userData.position = {
          x: s.x,
          y: s.y,
          z: s.z,
        })),
      2 === isQuiet && (Ao(y), (isMaterialUpdateEnabled = !0));
  else {
    (t = false),
      ("touchstart" !== e.type &&
        "touchmove" !== e.type &&
        "touchend" !== e.type) ||
      (t = !0),
      (r.x =
        ((e.clientX - orbitControls.domElement.getBoundingClientRect().left) /
          orbitControls.domElement.clientWidth) *
        2 -
        1),
      (r.y =
        2 *
        -(
          (e.clientY - orbitControls.domElement.getBoundingClientRect().top) /
          orbitControls.domElement.clientHeight
        ) +
        1),
      t &&
      (e.preventDefault(),
        (r.x =
          ((e.touches[0].clientX -
            orbitControls.domElement.getBoundingClientRect().left) /
            orbitControls.domElement.clientWidth) *
          2 -
          1),
        (r.y =
          2 *
          -(
            (e.touches[0].clientY -
              orbitControls.domElement.getBoundingClientRect().top) /
            orbitControls.domElement.clientHeight
          ) +
          1)),
      Aa.setFromCamera(r, mainCamera),
      (l = Aa.intersectObjects(_a, !0));
    for (let e = 0; e < l.length; e++)
      if (l[e].object.name.startsWith("itemSelectionBox")) {
        if (B && !l[e].object.parent.name.startsWith("scale")) break;
        (l[e].object = l[e].object.parent), Uo(l[e].object);
        break;
      }
  }
}

function so(e) {
  var t = false;
  ("touchstart" !== e.type &&
    "touchmove" !== e.type &&
    "touchend" !== e.type) ||
    (t = !0),
    (r.x =
      ((e.clientX - orbitControls.domElement.getBoundingClientRect().left) /
        orbitControls.domElement.clientWidth) *
      2 -
      1),
    (r.y =
      2 *
      -(
        (e.clientY - orbitControls.domElement.getBoundingClientRect().top) /
        orbitControls.domElement.clientHeight
      ) +
      1),
    t &&
    (r = {
      x: ka.x,
      y: ka.y,
    }),
    y && false === Ia
      ? y.name.startsWith("interior") ||
        y.name.startsWith("mansard") ||
        y.name.startsWith("porch") ||
        y.name.startsWith("scale") ||
        y.name.startsWith("window") ||
        y.name.startsWith("walk") ||
        y.name.startsWith("garage")
        ? $("#popup").is(":hidden")
          ? ($("#popup").css("display", "flex"),
            (t = Math.min(
              e.clientX + 50,
              $("#viewport3D").innerWidth() - $("#popup").outerWidth()
            )),
            (e = Math.max(e.clientY - 275, 0)),
            $("#popup").css({
              top: e,
              left: t,
            }),
            $("#line").show(),
            Ho(),
            Lo())
          : lastSelectedMaterial &&
          y.uuid === lastSelectedMaterial.uuid &&
          !y.name.startsWith("measure") &&
          ($("#popup").hide(),
            $("#line").hide(),
            (lastSelectedMaterial = y),
            (y = null),
            Qo())
        : y && y.name.startsWith("measure") && !0 === isQuiet
          ? ($o(y), (isMaterialUpdateEnabled = !0))
          : y &&
          y.name.startsWith("measure") &&
          2 === isQuiet &&
          ((isQuiet = false),
            (lastSelectedMaterial = y),
            (y = null),
            (isMaterialUpdateEnabled = !0))
      : y &&
      Ia &&
      $("#popup").is(":hidden") &&
      !y.name.startsWith("measure") &&
      (Zo(false),
        (lastSelectedMaterial = y),
        (y = null),
        (isMaterialUpdateEnabled = !0)),
    (zIndex = yPosition = userTop = xPosition = queryTop = viewTop = 0),
    (Ia = Fa = isActive = false),
    $("#touchGUI").hide(),
    (environmentMap.enableRotate = !0),
    (environmentMap.enablePan = !B),
    (environmentMap.enableZoom = !0),
    (currentModel.enablePan = !B),
    (currentModel.enableZoom = !0);
}

function lo(e, t, a) {
  (e = e || ""), (t = t || 0), (a = a || false);
  var o = new THREE.Vector3(),
    o = sceneRoot.getObjectByName("UserCamera").getWorldDirection(o),
    o = Math.atan2(o.x, o.z),
    i = sceneRoot.getObjectByName("UserCamera").position;
  let n = 1,
    r = 0,
    s = 0,
    l = 0,
    h =
      (i.x < ma.width / 2 &&
        i.x > ma.width / -2 &&
        i.y < ma.height / 2 &&
        0 < i.y &&
        i.z < ma.depth / 2 &&
        i.z > ma.depth / -2 &&
        (n = -1),
        0),
    c = 0,
    d = 0,
    p = 0;
  ma.leanTo1 &&
    ma.leanTo1Enclosed &&
    "Fully Enclosed" == ma.leanTo1Walls &&
    (d = ma.leanTo1Depth),
    ma.leanTo2 &&
    ma.leanTo2Enclosed &&
    "Fully Enclosed" == ma.leanTo2Walls &&
    (h = ma.leanTo2Depth),
    ma.leanTo3 &&
    ma.leanTo3Enclosed &&
    "Fully Enclosed" == ma.leanTo3Walls &&
    (p = ma.leanTo3Depth),
    ma.leanTo4 &&
    ma.leanTo4Enclosed &&
    "Fully Enclosed" == ma.leanTo4Walls &&
    (c = ma.leanTo4Depth),
    ma.hasOwnProperty("coveredGableExtensionE") &&
    ma.coveredGableExtensionE &&
    ma.coveredGableExtensionEEnclosed &&
    (h = Math.max(h, ma.coveredGableExtensionEDepth)),
    ma.hasOwnProperty("coveredGableExtensionW") &&
    ma.coveredGableExtensionW &&
    ma.coveredGableExtensionWEnclosed &&
    (c = Math.max(c, ma.coveredGableExtensionWDepth)),
    ma.hasOwnProperty("coveredGableExtensionN") &&
    ma.coveredGableExtensionN &&
    ma.coveredGableExtensionNEnclosed &&
    (d = Math.max(d, ma.coveredGableExtensionNDepth)),
    ma.hasOwnProperty("coveredGableExtensionS") &&
    ma.coveredGableExtensionS &&
    ma.coveredGableExtensionSEnclosed &&
    (p = Math.max(p, ma.coveredGableExtensionSDepth)),
    (l =
      Math.abs(o * n) < Math.PI / 4 || Math.abs(o * n) > (3 * Math.PI) / 4
        ? Math.abs(o) > Math.PI / 2
          ? ((s = (ma.depth / 2 + d) * n + n * n),
            0.5 * Math.PI * Math.abs(n - 1))
          : ((s = (ma.depth / -2 - p) * n - n * n), 0.5 * Math.PI * (n + 1))
        : 0 < i.x
          ? ((r = (ma.width / 2 + c) * n + n * n), (Math.PI / 2) * n)
          : ((r = (ma.width / -2 - h) * n - n * n), (Math.PI / -2) * n));
  var m = sceneRoot.getObjectByName(e).GdeepCloneMaterials();
  if (
    ((m.name = e + "-clone"),
      (m.visible = !0),
      (m.castShadow = !0),
      (m.receiveShadow = false),
      (m.userData.scale = {
        x: 1,
        y: 1,
        z: 1,
      }),
      m.name.startsWith("walkDoor") &&
      ((m.userData.doorSwing = 1),
        (m.userData.scale = {
          x: 3,
          y: 7,
          z: 0,
        })),
      m.name.startsWith("walkDoor") &&
      m.name.endsWith("Double-clone") &&
      ((m.userData.doorSwing = 1),
        (m.userData.scale = {
          x: 6,
          y: 7,
          z: 0,
        })),
      m.name.startsWith("garage") &&
      (m.userData.scale = {
        x: 10,
        y: Math.min(ma.height - 2, 10),
        z: 0,
      }),
      m.name.startsWith("mansardHip") &&
      (m.userData.scale = {
        x: 6,
        y: 2,
        z: 2,
      }),
      (m.userData.position = {
        x: r,
        y: t,
        z: s,
      }),
      (m.userData.rotation = {
        x: 0,
        y: l,
        z: 0,
      }),
      Xo(m),
      a)
  ) {
    if ("object" == typeof a) {
      o = a.position.split(",");
      if (
        (m.position.set(parseFloat(o[0]), parseFloat(o[1]), parseFloat(o[2])),
          (m.userData.position = {
            x: parseFloat(o[0]),
            y: parseFloat(o[1]),
            z: parseFloat(o[2]),
          }),
          (o = a.rotation.split(",")),
          m.rotation.set(parseFloat(o[0]), parseFloat(o[1]), parseFloat(o[2])),
          (m.userData.rotation = {
            x: parseFloat(o[0]),
            y: parseFloat(o[1]),
            z: parseFloat(o[2]),
          }),
          m.name.startsWith("walk") &&
          ((o = a.scale.split(",")),
            m.name.endsWith("Double-clone")
              ? (m.morphTargetInfluences[m.morphTargetDictionary.width] =
                parseFloat(o[0]) - 6)
              : (m.morphTargetInfluences[m.morphTargetDictionary.width] =
                parseFloat(o[0]) - 3),
            (m.morphTargetInfluences[m.morphTargetDictionary.height] =
              parseFloat(o[1]) - 7),
            (m.userData.scale = {
              x: parseFloat(o[0]),
              y: parseFloat(o[1]),
              z: parseFloat(o[2]),
            })),
          m.name.startsWith("window") &&
          ((o = a.scale.split(",")),
            (m.morphTargetInfluences[m.morphTargetDictionary.width] =
              parseFloat(o[0]) - 1),
            (m.morphTargetInfluences[m.morphTargetDictionary.height] =
              parseFloat(o[1]) - 1),
            (m.userData.scale = {
              x: parseFloat(o[0]),
              y: parseFloat(o[1]),
              z: parseFloat(o[2]),
            }),
            m.name.startsWith("windowSlope")) &&
          (m.morphTargetInfluences[m.morphTargetDictionary.slope] =
            (ma.roofPitch / 12) * parseFloat(o[0])),
          m.name.startsWith("gara") &&
          ((o = a.scale.split(",")),
            (m.morphTargetInfluences[m.morphTargetDictionary.width] =
              (parseFloat(o[0]) - 10) / 10 / 2),
            (m.morphTargetInfluences[m.morphTargetDictionary.height] =
              (parseFloat(o[1]) - 10) / 10),
            (m.userData.scale = {
              x: parseFloat(o[0]),
              y: parseFloat(o[1]),
              z: parseFloat(o[2]),
            })),
          m.name.startsWith("mansard") &&
          ((o = a.scale.split(",")),
            m.name.startsWith("mansardHip")
              ? (m.morphTargetInfluences[m.morphTargetDictionary.width] =
                parseFloat(o[0]) - 5)
              : (m.morphTargetInfluences[m.morphTargetDictionary.width] =
                parseFloat(o[0]) - 1),
            (m.morphTargetInfluences[m.morphTargetDictionary.depth] =
              parseFloat(o[2]) - 2),
            (m.morphTargetInfluences[m.morphTargetDictionary.height] =
              parseFloat(o[1]) - 2),
            (m.userData.scale = {
              x: parseFloat(o[0]),
              y: parseFloat(o[1]),
              z: parseFloat(o[2]),
            }),
            updateNormalMapTextureRepeats(m)),
          "-1" === a.doorSwing && ((m.scale.x = -1), (y.userData.doorSwing = -1)),
          a.shutters)
      )
        m.morphTargetInfluences[m.morphTargetDictionary.hideShutters] = 0;
      else {
        m.morphTargetInfluences[m.morphTargetDictionary.hideShutters] = 1;
        for (let e = 0; e < m.material.length; e++)
          "Shutters" === m.material[e].name && (m.material[e].visible = false);
      }
      if (a.grid)
        for (let e = 0; e < m.material.length; e++)
          "WindowGrid" === m.material[e].name && (m.material[e].visible = !0);
      else
        for (let e = 0; e < m.material.length; e++)
          "WindowGrid" === m.material[e].name &&
            (m.material[e].visible = false);
      (lastSelectedMaterial = y),
        a.hasOwnProperty("select") && !0 === a.select ? Zo(m) : (y = null),
        Qo();
    }
  } else {
    if (
      (m.position.set(r, t, s),
        m.rotation.set(0, l, 0),
        m.name.startsWith("mansard") &&
        ((m.userData.scale = {
          x: 6,
          y: 2,
          z: 3,
        }),
          m.name.startsWith("mansardHip")
            ? (m.morphTargetInfluences[m.morphTargetDictionary.width] = 1)
            : (m.morphTargetInfluences[m.morphTargetDictionary.width] = 5),
          (m.morphTargetInfluences[m.morphTargetDictionary.depth] = 1),
          (m.morphTargetInfluences[m.morphTargetDictionary.height] = 0),
          updateNormalMapTextureRepeats(m)),
        m.name.startsWith("window"))
    ) {
      let e = 3,
        t = 4;
      m.name.startsWith("windowSlider") && ((e = 4), (t = 3)),
        m.name.startsWith("windowDoubleHung") && ((e = 3), (t = 4)),
        m.name.startsWith("windowTwinset") && ((e = 3), (t = 4)),
        m.name.startsWith("windowPicture") && ((e = 5), (t = 4)),
        m.name.startsWith("windowSingleHung") && ((e = 3), (t = 4)),
        m.name.startsWith("windowLouver") && ((e = 4), (t = 2)),
        (m.userData.scale = {
          x: e,
          y: t,
          z: 0,
        }),
        (m.morphTargetInfluences[m.morphTargetDictionary.width] = e - 1),
        (m.morphTargetInfluences[m.morphTargetDictionary.height] = t - 1),
        m.name.startsWith("windowSlope") &&
        (m.morphTargetInfluences[m.morphTargetDictionary.slope] =
          (ma.roofPitch / 12) * e),
        isGlassMode &&
        ((m.position.y = 7 - t / 2), (m.userData.position.y = 7 - t / 2));
    }
    if (m.name.startsWith("window"))
      for (let e = 0; e < m.material.length; e++)
        "Shutters" === m.material[e].name &&
          ((m.material[e].visible = false),
            (m.morphTargetInfluences[m.morphTargetDictionary.hideShutters] = 1)),
          "WindowGrid" === m.material[e].name &&
          (m.material[e].visible = false);
    if (m.name.startsWith("walkDoor")) {
      let e = 3,
        t = 80 / 12;
      m.name.startsWith("walkDoorEquine") && ((e = 4), (t = 82 / 12)),
        m.name.endsWith("Double") && ((e = 6), (t = 80 / 12)),
        (m.userData.scale = {
          x: e,
          y: t,
          z: 0,
        }),
        m.name.endsWith("Double")
          ? (m.morphTargetInfluences[m.morphTargetDictionary.width] = e - 6)
          : (m.morphTargetInfluences[m.morphTargetDictionary.width] = e - 3),
        (m.morphTargetInfluences[m.morphTargetDictionary.height] = t - 7);
    }
    m.name.startsWith("gara") &&
      (isGlassMode &&
        (m.name.startsWith("garageSlideMorton") &&
          (m.name.endsWith("Left-clone") || m.name.endsWith("Right-clone"))
          ? m.name.startsWith("garageSlideMortonThreeStack") ||
            m.name.startsWith("garageSlideMortonThreeStackCrossbuck")
            ? ((m.userData.scale.x = 6),
              m.name.startsWith("garageSlideMortonThreeStackCrossbuck")
                ? (m.userData.scale.y = 14)
                : (m.userData.scale.y = 11))
            : (m.userData.scale.x = 5)
          : m.name.startsWith("garageSlideMortonThreeStack")
            ? (m.userData.scale.y = 11)
            : m.name.startsWith("garageSlideMortonThreeStackCrossbuck") &&
            ((m.userData.scale.x = 12), (m.userData.scale.y = 14))),
        (m.morphTargetInfluences[m.morphTargetDictionary.width] =
          (m.userData.scale.x - 10) / 10 / 2),
        (m.morphTargetInfluences[m.morphTargetDictionary.height] =
          (m.userData.scale.y - 10) / 10)),
      ma.hasOwnProperty(e + "Qty") && ma[e + "Qty"]++,
      Zo(m);
  }
  lastHoveredItem.add(m), O(), (isMaterialUpdateEnabled = !0);
}

function ho() {
  (this.addPerson = function () {
    c("person");
  }),
    (this.addMan = function () {
      c("man");
    }),
    (this.addWoman = function () {
      c("woman");
    }),
    (this.addTruck = function () {
      c("truck");
    }),
    (this.addCar = function () {
      c("car");
    }),
    (this.addAirplane = function () {
      c("airplane");
    }),
    (this.addATV = function () {
      c("atv");
    }),
    (this.addJetski = function () {
      c("jetski");
    }),
    (this.addCombine = function () {
      c("combine");
    }),
    (this.addTractor = function () {
      c("tractor");
    }),
    (this.addBoat = function () {
      c("boat");
    }),
    (this.addSkiBoat = function () {
      c("skiBoat");
    }),
    (this.addDriveway = function () {
      c("driveway");
    }),
    (this.addGrainCart = function () {
      c("grainCart");
    }),
    (this.addSemiTruck = function () {
      c("semiTruck");
    }),
    (this.addSemiTrailer = function () {
      c("semiTrailer");
    }),
    (this.addSemiTrailer53 = function () {
      c("semiTrailer53");
    }),
    (this.addShippingContainer20 = function () {
      c("shippingContainer20");
    }),
    (this.addShippingContainer40 = function () {
      c("shippingContainer40");
    }),
    (this.addBackhoe = function () {
      c("backhoe");
    }),
    (this.addCornHead6 = function () {
      c("cornHead6");
    }),
    (this.addCornHead = function () {
      c("cornHead");
    }),
    (this.addCornHead12 = function () {
      c("cornHead12");
    }),
    (this.addBeanHead = function () {
      c("beanHead");
    }),
    (this.addBeanHead35 = function () {
      c("beanHead35");
    }),
    (this.addBeanHead40 = function () {
      c("beanHead40");
    }),
    (this.addDesk = function () {
      c("desk");
    }),
    (this.addChair = function () {
      c("chair");
    }),
    (this.addConferenceTable = function () {
      c("conferenceTable");
    }),
    (this.addLawnMower = function () {
      c("lawnMower");
    }),
    (this.addRV = function () {
      c("rv");
    }),
    (this.addCamper = function () {
      c("camper");
    }),
    (this.addHorseStall = function () {
      c("horseStall");
    }),
    (this.addHayBales = function () {
      c("hayBales");
    }),
    (this.addWorkbench = function () {
      c("workbench");
    }),
    (this.addAirCompressor = function () {
      c("airCompressor");
    }),
    (this.addBed = function () {
      c("bed");
    }),
    (this.addCouch = function () {
      c("couch");
    }),
    (this.addRidingMower = function () {
      c("ridingMower");
    }),
    (this.addKitchenTable = function () {
      c("kitchenTable");
    }),
    (this.addRecliner = function () {
      c("recliner");
    }),
    (this.addToilet = function () {
      c("toilet");
    }),
    (this.addUtilitySink = function () {
      c("utilitySink");
    }),
    (this.addPedestalSink = function () {
      c("pedestalSink");
    }),
    (this.addHorse = function () {
      c("horse");
    }),
    (this.addUTV = function () {
      c("utv");
    }),
    (this.addCultivator = function () {
      c("cultivator");
    }),
    (this.addKitchenChair = function () {
      c("kitchenChair");
    }),
    (this.addNightStand = function () {
      c("nightStand");
    }),
    (this.addCoffeeTable = function () {
      c("coffeeTable");
    }),
    (this.addEndTable = function () {
      c("endTable");
    });
}

function c(t, a) {
  var e, o;
  (t = t || false),
    (a = a || false),
    void 0 === sceneRoot.getObjectByName(t)
      ? ((e = assetBaseUrl + "objects/scale-" + t),
        (o = new THREE.LWOLoader()).setResourcePath(assetBaseUrl + "images/"),
        o.load(e + ".lwo", function (e) {
          e.meshes.forEach(function (e) {
            (e.name = t),
              (e.visible = false),
              (e.castShadow = !0),
              (e.receiveShadow = !0),
              (e.frustumCulled = false),
              (e.userData.fileType = "lwo"),
              e.hasOwnProperty("morphTargetInfluences") &&
              (e.material.morphTargets = !0),
              0 < e.material.length
                ? e.material.forEach(function (e) {
                  "MeshStandardMaterial" == e.type &&
                    null !== e.roughnessMap &&
                    (e.roughness = 1);
                })
                : "MeshStandardMaterial" == e.material.type &&
                null !== e.material.roughnessMap &&
                (e.material.roughness = 1),
              raycastHelper.add(e),
              co(t, a);
          });
        }))
      : co(t, a);
}

function co(e, t) {
  (e = e || ""), (t = t || false);
  var a = 0,
    o = 0,
    i = 0,
    n = 0,
    n =
      (ma.leanTo1 && (i = ma.leanTo1Depth),
        ma.leanTo2 && (a = ma.leanTo2Depth),
        ma.leanTo3 && (n = ma.leanTo3Depth),
        ma.leanTo4 && (o = ma.leanTo4Depth),
        ma.hasOwnProperty("coveredGableExtensionE") &&
        ma.coveredGableExtensionE &&
        ma.coveredGableExtensionEEnclosed &&
        (a = Math.max(a, ma.coveredGableExtensionEDepth)),
        ma.hasOwnProperty("coveredGableExtensionW") &&
        ma.coveredGableExtensionW &&
        ma.coveredGableExtensionWEnclosed &&
        (o = Math.max(o, ma.coveredGableExtensionWDepth)),
        ma.hasOwnProperty("coveredGableExtensionN") &&
        ma.coveredGableExtensionN &&
        ma.coveredGableExtensionNEnclosed &&
        (i = Math.max(i, ma.coveredGableExtensionNDepth)),
        ma.hasOwnProperty("coveredGableExtensionS") &&
        ma.coveredGableExtensionS &&
        ma.coveredGableExtensionSEnclosed &&
        (n = Math.max(n, ma.coveredGableExtensionSDepth)),
        []),
    o =
      ("person" == e &&
        (n = [ma.width / 2 + o + 0.75, 0, ma.depth / 2 + i + 3.5]),
        "man" == e && (n = [ma.width / 2 + o + 0.25, 0, ma.depth / 2 + i + 3.5]),
        "woman" == e && (n = [ma.width / 2 + o + 2.5, 0, ma.depth / 2 + i + 3.5]),
        "truck" == e &&
        (n = [ma.width / 2 + o + 7.75, 0, ma.depth / 2 + i - 3.25]),
        "car" == e && (n = [ma.width / 2 + o + 16, 0, ma.depth / 2 + i - 3.25]),
        "airplane" == e &&
        (n = [ma.width / -2 - a - 12, 0, ma.depth / 2 + i + 8.5]),
        "atv" == e && (n = [ma.width / 2 - 4.5, 0, ma.depth / 2 + i + 5.5]),
        "utv" == e && (n = [ma.width / 2 - 4.5, 0, ma.depth / 2 + i + 5.5]),
        "jetski" == e && (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "combine" == e && (n = [ma.width / -2 + 8.4, 0, ma.depth / 2 + i + 23.5]),
        "tractor" == e && (n = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]),
        "boat" == e && (n = [ma.width / 2 + 3, 0, ma.depth / 2 + i + 14]),
        "skiBoat" == e && (n = [ma.width / 2 + 3, 0, ma.depth / 2 + i + 14]),
        "driveway" == e && (n = [0, 0, +(ma.depth / 2 + i)]),
        "grainCart" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "semiTruck" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "semiTrailer" == e &&
        (n = [ma.width / 2 + 6.25, 0, ma.depth / 2 + i + 22.75]),
        "semiTrailer53" == e &&
        (n = [ma.width / 2 + 6.25, 0, ma.depth / 2 + i + 26.75]),
        "shippingContainer20" == e && (n = [ma.width / 2 + 6, 0, 0]),
        "shippingContainer40" == e && (n = [ma.width / 2 + 8, 0, 0]),
        "backhoe" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "cornHead6" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "cornHead" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "cornHead12" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "beanHead" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "beanHead35" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "beanHead40" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "cultivator" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "desk" == e && (n = [0, 0, 0]),
        "chair" == e && (n = [0, 0, 0]),
        "conferenceTable" == e && (n = [0, 0, 0]),
        "lawnMower" == e &&
        (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "rv" == e && (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "camper" == e && (n = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]),
        "horseStall" == e && (n = [0, 0, 0]),
        "hayBales" == e && (n = [0, 0, 0]),
        "workbench" == e && (n = [0, 0, 0]),
        "airCompressor" == e && (n = [0, 0, 0]),
        "bed" == e && (n = [0, 0, 0]),
        "couch" == e && (n = [0, 0, 0]),
        "kitchenTable" == e && (n = [0, 0, 0]),
        "recliner" == e && (n = [0, 0, 0]),
        "toilet" == e && (n = [0, 0, 0]),
        "utilitySink" == e && (n = [0, 0, 0]),
        "pedestalSink" == e && (n = [0, 0, 0]),
        "ridingMower" == e &&
        (n = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]),
        "horse" == e && (n = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]),
        "kitchenChair" == e && (n = [0, 0, 0]),
        "nightStand" == e && (n = [0, 0, 0]),
        "coffeeTable" == e && (n = [0, 0, 0]),
        "endTable" == e && (n = [0, 0, 0]),
        sceneRoot.getObjectByName(e).GdeepCloneMaterials());
  (o.name = "scale-" + e + "-clone"),
    (o.visible = !0),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    (o.userData.fileType = sceneRoot.getObjectByName(e).userData.fileType),
    (o.userData.rotationMultiplyer = 0),
    Xo(o),
    t
      ? "object" == typeof t &&
      ((a = t.position.split(",")),
        o.position.set(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])),
        (a = t.rotation.split(",")),
        o.rotation.set(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])),
        (o.userData.rotationMultiplyer = parseFloat(a[1])))
      : o.position.set(n[0], n[1], n[2]),
    lastHoveredItem.add(o),
    ma.hasOwnProperty(e) && ma[e]++,
    (isMaterialUpdateEnabled = !0);
}

function po() {
  (this.addInteriorWall = function () {
    mo("interiorWall");
  }),
    (this.addInteriorDoor = function () {
      mo("interiorDoor");
    });
}

function mo(e, t) {
  (e = e || false), (t = t || false);
  var a = sceneRoot.getObjectByName(e);
  let o;
  if (
    (((o = "interiorWall" == e ? a.deepClone() : a.clone()).name += "-clone"),
      (o.visible = !0),
      (o.userData.rotationMultiplyer = 0),
      (o.userData.position = new THREE.Vector3()),
      (o.userData.scale = new THREE.Vector3(1, 1, 1)),
      (o.userData.toNorthWall = function (e) {
        if (void 0 === e)
          return ma.coreBuildingDimensions().northEdge - o.position.z;
        o.userData.position.z = o.position.z =
          ma.coreBuildingDimensions().northEdge - e;
      }),
      "interiorDoor" == e && (o.userData.doorSwing = 1),
      effectComposer.add(o),
      "interiorWall" === e)
  ) {
    var i = new THREE.TextureLoader().load(q),
      a =
        ((i.anisotropy = Math.min(
          orbitControls.capabilities.getMaxAnisotropy(),
          5
        )),
          (i.wrapS = THREE.RepeatWrapping),
          (i.wrapT = THREE.RepeatWrapping),
          assetBaseUrl + "images/building/OSB.jpg"),
      n = new THREE.TextureLoader().load(a);
    (n.anisotropy = Math.min(orbitControls.capabilities.getMaxAnisotropy(), 5)),
      (n.wrapS = THREE.RepeatWrapping),
      (n.wrapT = THREE.RepeatWrapping);
    for (let e = 0; e < o.material.length; e++)
      (o.material[e] = o.material[e].clone()),
        "interiorWallUpper" === o.material[e].name &&
        ((o.material[e].normalMap = i),
          (o.userData.metalTexture = i),
          (o.userData.topMaterial = o.material[e])),
        "interiorWallLower" === o.material[e].name &&
        ((o.userData.woodTexture = n),
          (o.userData.bottomMaterial = o.material[e]));
    (o.scale.x = 5), (o.userData.scale.x = 5), (o.userData.material = "Steel");
  }
  Xo(o),
    t
      ? ((a = t.position.split(",")),
        o.position.set(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])),
        (a = t.rotation.split(",")),
        o.rotation.set(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])),
        (o.userData.rotationMultiplyer = parseFloat(a[1])),
        (a = t.scale.split(",")),
        o.scale.set(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])),
        (o.userData.width = parseFloat(a[0])),
        (o.userData.height = parseFloat(a[1])),
        t.hasOwnProperty("doorSwing") &&
        (-1 == t.doorSwing
          ? ((o.userData.doorSwing = -1), (o.scale.x = -1))
          : (o.userData.doorSwing = 1)),
        t.hasOwnProperty("material") && (o.userData.material = t.material))
      : ma.hasOwnProperty(e + "Qty") && ma[e + "Qty"]++,
    go(),
    t || ($("#popup").show(), $("#line").show(), Ho(), Lo());
}

function go() {
  sceneRoot.traverse(function (o) {
    if (
      o instanceof THREE.Mesh &&
      ("interiorWall-clone" == o.name || "dividingWall" == o.name)
    ) {
      var i = (o.scale.y = ma.height - 1),
        e = o.scale.x;
      if (
        ((o.userData.height = i),
          (o.userData.width = e),
          "interiorWall-clone" == o.name)
      ) {
        if (
          "Half Wood" == o.userData.material ||
          "8' OSB with Steel above" == o.userData.material
        ) {
          let a = i / 2;
          if (isGlassMode) {
            let e = 8,
              t = e - a;
            t + a > i && ((t = i - a), (e = i)),
              (a = e),
              (o.morphTargetInfluences[
                o.morphTargetDictionary.halfWallAdjustment
              ] = t / o.scale.y);
          }
          (o.userData.topMaterial.map = null),
            (o.userData.topMaterial.normalMap = o.userData.metalTexture),
            o.userData.topMaterial.specular.setHex(6250335),
            (o.userData.topMaterial.shininess = 90),
            (o.userData.topMaterial.reflectivity = 0.05),
            o.userData.topMaterial.normalMap.repeat.set(e * activeMaterial, 1),
            (o.userData.bottomMaterial.map = o.userData.woodTexture),
            (o.userData.bottomMaterial.normalMap = null),
            o.userData.bottomMaterial.specular.setHex(2500134),
            (o.userData.bottomMaterial.shininess = 5.117649),
            (o.userData.bottomMaterial.reflectivity = 0),
            o.userData.bottomMaterial.map.repeat.set(e / 2.5, (2 * a) / 2.5);
        } else
          "Wood" == o.userData.material
            ? ((o.userData.topMaterial.map = o.userData.woodTexture),
              (o.userData.topMaterial.normalMap = null),
              o.userData.topMaterial.specular.setHex(2500134),
              (o.userData.topMaterial.shininess = 5.117649),
              (o.userData.topMaterial.reflectivity = 0),
              o.userData.topMaterial.map.repeat.set(e / 2.5, i / 2.5),
              (o.userData.bottomMaterial.map = o.userData.woodTexture),
              (o.userData.bottomMaterial.normalMap = null),
              o.userData.bottomMaterial.specular.setHex(2500134),
              (o.userData.bottomMaterial.shininess = 5.117649),
              (o.userData.bottomMaterial.reflectivity = 0),
              o.userData.bottomMaterial.map.repeat.set(e / 2.5, i / 2.5))
            : "Drywall" == ma.divisionMaterial
              ? ((o.userData.topMaterial.map = null),
                (o.userData.topMaterial.normalMap = null),
                o.userData.topMaterial.specular.setHex(14540253),
                (o.userData.topMaterial.shininess = 6),
                (o.userData.topMaterial.reflectivity = 0),
                (o.userData.bottomMaterial.map = null),
                (o.userData.bottomMaterial.normalMap = null),
                o.userData.bottomMaterial.specular.setHex(14540253),
                (o.userData.bottomMaterial.shininess = 6),
                (o.userData.bottomMaterial.reflectivity = 0))
              : ((o.userData.topMaterial.map = null),
                (o.userData.topMaterial.normalMap = o.userData.metalTexture),
                o.userData.topMaterial.specular.setHex(6250335),
                (o.userData.topMaterial.shininess = 90),
                (o.userData.topMaterial.reflectivity = 0.05),
                o.userData.topMaterial.normalMap.repeat.set(
                  e * activeMaterial,
                  1
                ),
                (o.userData.bottomMaterial.map = null),
                (o.userData.bottomMaterial.normalMap = o.userData.metalTexture),
                o.userData.bottomMaterial.specular.setHex(6250335),
                (o.userData.bottomMaterial.shininess = 90),
                (o.userData.bottomMaterial.reflectivity = 0.05),
                o.userData.bottomMaterial.normalMap.repeat.set(
                  e * activeMaterial,
                  1
                ));
        (o.userData.topMaterial.needsUpdate = !0),
          (o.userData.bottomMaterial.needsUpdate = !0);
      }
    }
  });
}

function uo() {
  var t, a;
  if (null == n[0])
    for (let e = 0; e < 6; e++) {
      ((t = doorMesh.deepClone()).name = "perimeterWall" + (e + 1)),
        (t.scale.z = 0.075),
        (t.userData.material = "Steel"),
        ((a = new THREE.TextureLoader().load(materialLibrary)).anisotropy =
          Math.min(orbitControls.capabilities.getMaxAnisotropy(), 5)),
        (a.wrapS = THREE.RepeatWrapping),
        (a.wrapT = THREE.RepeatWrapping);
      var o,
        i = assetBaseUrl + "images/building/OSB.jpg";
      ((o = new THREE.TextureLoader().load(i)).anisotropy = Math.min(
        orbitControls.capabilities.getMaxAnisotropy(),
        5
      )),
        (o.wrapS = THREE.RepeatWrapping),
        (o.wrapT = THREE.RepeatWrapping);
      for (let e = 0; e < t.material.length; e++)
        (t.material[e] = t.material[e].clone()),
          "interiorWallUpper" === t.material[e].name &&
          ((t.material[e].normalMap = a),
            (t.userData.metalTexture = a),
            (t.userData.topMaterial = t.material[e])),
          "interiorWallLower" === t.material[e].name &&
          ((t.userData.woodTexture = o),
            (t.userData.bottomMaterial = t.material[e]));
      lastHoveredItem.add(t), (n[e] = t);
    }
  n[0].hasOwnProperty("parent") &&
    ((n[0].visible = false),
      (n[1].visible = false),
      (n[2].visible = false),
      (n[3].visible = false),
      (n[4].visible = false),
      (n[5].visible = false),
      ma.divisionWall ||
      "None" === ma.perimeterWalls ||
      0 !== ma.hideWalls ||
      (ma.enclosedN && (n[0].visible = !0),
        ma.enclosedE && (n[1].visible = !0),
        ma.enclosedS && (n[2].visible = !0),
        ma.enclosedW && (n[3].visible = !0)),
      ma.divisionWall &&
      "None" !== ma.perimeterWalls &&
      0 === ma.hideWalls &&
      (ma.enclosedN && (n[0].visible = !0),
        ma.enclosedE && (n[1].visible = !0),
        ma.enclosedW) &&
      (n[5].visible = !0),
      ma.divisionWall &&
      "None" !== ma.perimeterWalls2 &&
      0 === ma.hideWalls &&
      (ma.enclosedE && (n[2].visible = !0),
        ma.enclosedS && (n[3].visible = !0),
        ma.enclosedW) &&
      (n[4].visible = !0),
      ma.divisionWall || "None" === ma.perimeterWalls
        ? ma.divisionWall &&
        "None" !== ma.perimeterWalls &&
        (n[0].position.set(0, 0, ma.depth / 2 - 0.7),
          n[1].position.set(
            ma.width / -2 + 0.7,
            0,
            (ma.depth - ma.divisionAmount - 0.7) / 2
          ),
          n[5].position.set(
            ma.width / 2 - 0.7,
            0,
            (ma.depth - ma.divisionAmount - 0.7) / 2
          ),
          (n[0].rotation.y = 0),
          (n[1].rotation.y = THREE.Math.degToRad(90)),
          (n[5].rotation.y = THREE.Math.degToRad(90)),
          (n[0].scale.x = ma.width - 1.4),
          (n[1].scale.x = ma.divisionAmount - 0.7),
          (n[5].scale.x = ma.divisionAmount - 0.7),
          (n[0].userData.material = ma.perimeterWalls),
          (n[1].userData.material = ma.perimeterWalls),
          (n[5].userData.material = ma.perimeterWalls))
        : (n[0].position.set(0, 0, ma.depth / 2 - 0.7),
          n[1].position.set(ma.width / -2 + 0.7, 0, 0),
          n[2].position.set(0, 0, ma.depth / -2 + 0.7),
          n[3].position.set(ma.width / 2 - 0.7, 0, 0),
          (n[0].rotation.y = 0),
          (n[1].rotation.y = THREE.Math.degToRad(90)),
          (n[2].rotation.y = 0),
          (n[3].rotation.y = THREE.Math.degToRad(90)),
          (n[0].scale.x = ma.width - 1.4),
          (n[1].scale.x = ma.depth - 1.4),
          (n[2].scale.x = ma.width - 1.4),
          (n[3].scale.x = ma.depth - 1.4),
          (n[0].userData.material = ma.perimeterWalls),
          (n[1].userData.material = ma.perimeterWalls),
          (n[2].userData.material = ma.perimeterWalls),
          (n[3].userData.material = ma.perimeterWalls)),
      ma.divisionWall &&
      "None" !== ma.perimeterWalls2 &&
      (n[2].position.set(
        ma.width / -2 + 0.7,
        0,
        (ma.divisionAmount - 0.7) / -2
      ),
        n[3].position.set(0, 0, ma.depth / -2 + 0.7),
        n[4].position.set(ma.width / 2 - 0.7, 0, (ma.divisionAmount - 0.7) / -2),
        (n[2].rotation.y = THREE.Math.degToRad(90)),
        (n[3].rotation.y = 0),
        (n[4].rotation.y = THREE.Math.degToRad(90)),
        (n[2].scale.x = ma.depth - 0.7 - ma.divisionAmount),
        (n[3].scale.x = ma.width - 1.4),
        (n[4].scale.x = ma.depth - 0.7 - ma.divisionAmount),
        (n[2].userData.material = ma.perimeterWalls2),
        (n[3].userData.material = ma.perimeterWalls2),
        (n[4].userData.material = ma.perimeterWalls2)),
      sceneRoot.traverse(function (i) {
        if (
          i instanceof THREE.Mesh &&
          i.name.startsWith("perimeterWall") &&
          ("None" !== ma.perimeterWalls || "None" !== ma.perimeterWalls2)
        ) {
          let o = (i.userData.height = i.scale.y = ma.height - 1);
          if (ma.hasOwnProperty("perimeterWallHeight"))
            o = i.userData.height = i.scale.y = ma.perimeterWallHeight;
          else if (
            ma.settings.vaultedCeiling &&
            ("perimeterWall1" == i.name || "perimeterWall3" == i.name)
          ) {
            console.log(i), (o = i.userData.height = i.scale.y = ma.peakHeight());
            for (let e = 0; e < i.material.length; e++)
              (i.material[e].clippingPlanes = [configLighting, configExport]),
                (i.material[e].clipIntersection = false),
                (i.material[e].clipShadows = !0);
          }
          var e = (i.userData.width = i.scale.x);
          if (
            "Half Wood" == i.userData.material ||
            "8' OSB with Steel above" == i.userData.material
          ) {
            let a = o / 2;
            if (isGlassMode) {
              let e = 8,
                t = e - a;
              t + a > o && ((t = o - a), (e = o)),
                (a = e),
                (i.morphTargetInfluences[
                  i.morphTargetDictionary.halfWallAdjustment
                ] = t / i.scale.y);
            }
            (i.userData.topMaterial.map = null),
              (i.userData.topMaterial.normalMap = i.userData.metalTexture),
              i.userData.topMaterial.specular.setHex(6250335),
              (i.userData.topMaterial.shininess = 90),
              (i.userData.topMaterial.reflectivity = 0.05),
              i.userData.topMaterial.normalMap.repeat.set(e * activeMaterial, 1),
              (i.userData.bottomMaterial.map = i.userData.woodTexture),
              (i.userData.bottomMaterial.normalMap = null),
              i.userData.bottomMaterial.specular.setHex(2500134),
              (i.userData.bottomMaterial.shininess = 5.117649),
              (i.userData.bottomMaterial.reflectivity = 0),
              i.userData.bottomMaterial.map.repeat.set(e / 2.5, (2 * a) / 2.5);
          } else
            "Wood" == i.userData.material ||
              "Plywood" == i.userData.material ||
              "OSB" == i.userData.material
              ? ((i.userData.topMaterial.map = i.userData.woodTexture),
                (i.userData.topMaterial.normalMap = null),
                i.userData.topMaterial.specular.setHex(2500134),
                (i.userData.topMaterial.shininess = 5.117649),
                (i.userData.topMaterial.reflectivity = 0),
                i.userData.topMaterial.map.repeat.set(e / 2.5, o / 2.5),
                (i.userData.bottomMaterial.map = i.userData.woodTexture),
                (i.userData.bottomMaterial.normalMap = null),
                i.userData.bottomMaterial.specular.setHex(2500134),
                (i.userData.bottomMaterial.shininess = 5.117649),
                (i.userData.bottomMaterial.reflectivity = 0),
                i.userData.bottomMaterial.map.repeat.set(e / 2.5, o / 2.5))
              : "Drywall" == i.userData.material
                ? ((i.userData.topMaterial.map = null),
                  (i.userData.topMaterial.normalMap = null),
                  i.userData.topMaterial.specular.setHex(14540253),
                  (i.userData.topMaterial.shininess = 6),
                  (i.userData.topMaterial.reflectivity = 0),
                  (i.userData.bottomMaterial.map = null),
                  (i.userData.bottomMaterial.normalMap = null),
                  i.userData.bottomMaterial.specular.setHex(14540253),
                  (i.userData.bottomMaterial.shininess = 6),
                  (i.userData.bottomMaterial.reflectivity = 0))
                : ((i.userData.topMaterial.map = null),
                  (i.userData.topMaterial.normalMap = i.userData.metalTexture),
                  i.userData.topMaterial.specular.setHex(6250335),
                  (i.userData.topMaterial.shininess = 90),
                  (i.userData.topMaterial.reflectivity = 0.05),
                  i.userData.topMaterial.normalMap.repeat.set(
                    e * activeMaterial,
                    1
                  ),
                  (i.userData.bottomMaterial.map = null),
                  (i.userData.bottomMaterial.normalMap = i.userData.metalTexture),
                  i.userData.bottomMaterial.specular.setHex(6250335),
                  (i.userData.bottomMaterial.shininess = 90),
                  (i.userData.bottomMaterial.reflectivity = 0.05),
                  i.userData.bottomMaterial.normalMap.repeat.set(
                    e * activeMaterial,
                    1
                  ));
          (i.userData.topMaterial.needsUpdate = !0),
            (i.userData.bottomMaterial.needsUpdate = !0);
        }
      }));
}

function To() {
  (this.addWindow3x4 = function () {
    d("window3x4");
  }),
    (this.addWindow3x4Grid = function () {
      d("window3x4Grid");
    }),
    (this.addWindow3x4Shutters = function () {
      d("window3x4Shutters");
    }),
    (this.addWindow4x3 = function () {
      d("window4x3");
    }),
    (this.addWindow4x3Grid = function () {
      d("window4x3Grid");
    }),
    (this.addWindow4x3Shutters = function () {
      d("window4x3Shutters");
    }),
    (this.addWindowPicture = function () {
      d("windowPicture");
    }),
    (this.addWindowSlider = function () {
      d("windowSlider");
    }),
    (this.addWindowCasement = function () {
      d("windowCasement");
    }),
    (this.addWindowDoubleHung = function () {
      d("windowDoubleHung");
    }),
    (this.addWindowSingleHung = function () {
      d("windowSingleHung");
    }),
    (this.addWindowTwinset = function () {
      d("windowTwinset");
    }),
    (this.addWindowAwning = function () {
      d("windowAwning");
    }),
    (this.addWindowHopper = function () {
      d("windowHopper");
    }),
    (this.addWindowSlopeLeft = function () {
      d("windowSlopeLeft");
    }),
    (this.addWindowSlopeRight = function () {
      d("windowSlopeRight");
    }),
    (this.addLouver = function () {
      d("windowLouver");
    }),
    (this.addWindowFramedOpening = function () {
      d("windowFramedOpening");
    }),
    (this.addMansard = function () {
      d("mansard");
    }),
    (this.addMansardWood = function () {
      d("mansardWood");
    }),
    (this.addMansardHip = function () {
      d("mansardHip");
    }),
    (this.addMansardHip2 = function () {
      d("mansardHip2");
    }),
    (this.addWalkDoorSolid = function () {
      d("walkDoorSolid");
    }),
    (this.addWalkDoorSolidDouble = function () {
      d("walkDoorSolidDouble");
    }),
    (this.addWalkDoorHalfGlass = function () {
      d("walkDoorHalfGlass");
    }),
    (this.addWalkDoorHalfGlassDouble = function () {
      d("walkDoorHalfGlassDouble");
    }),
    (this.addWalkDoor6Panel = function () {
      d("walkDoor6Panel");
    }),
    (this.addWalkDoor6PanelDouble = function () {
      d("walkDoor6PanelDouble");
    }),
    (this.addWalkDoor6Lite = function () {
      d("walkDoor6Lite");
    }),
    (this.addWalkDoor9Lite = function () {
      d("walkDoor9Lite");
    }),
    (this.addWalkDoor9LiteDouble = function () {
      d("walkDoor9LiteDouble");
    }),
    (this.addWalkDoor9LiteNoPanel = function () {
      d("walkDoor9LiteNoPanel");
    }),
    (this.addWalkDoorSlidingGlassDouble = function () {
      d("walkDoorSlidingGlassDouble");
    }),
    (this.addWalkDoorFrenchDouble = function () {
      d("walkDoorFrenchDouble");
    }),
    (this.addWalkDoorAllGlass = function () {
      d("walkDoorAllGlass");
    }),
    (this.addWalkDoorAllGlassDouble = function () {
      d("walkDoorAllGlassDouble");
    }),
    (this.addWalkDoorCrossbuck = function () {
      d("walkDoorCrossbuck");
    }),
    (this.addWalkDoorEquine = function () {
      d("walkDoorEquine");
    }),
    (this.addWalkDoorEquineSmooth = function () {
      d("walkDoorEquineSmooth");
    }),
    (this.addWalkDoorFramedOpening = function () {
      d("walkDoorFramedOpening");
    }),
    (this.addGarageOverheadPanel = function () {
      d("garageOverheadPanel");
    }),
    (this.addGarageOverheadPanelWindow = function () {
      d("garageOverheadPanelWindow");
    }),
    (this.addGarageOverheadFlat = function () {
      d("garageOverheadFlat");
    }),
    (this.addGarageOverheadFlatWindow = function () {
      d("garageOverheadFlatWindow");
    }),
    (this.addGarageOverheadFlatModern = function () {
      d("garageOverheadFlatModern");
    }),
    (this.addGarageOverheadRibbed = function () {
      d("garageOverheadRibbed");
    }),
    (this.addGarageSlide = function () {
      d("garageSlide");
    }),
    (this.addGarageSlideLeft = function () {
      d("garageSlideLeft");
    }),
    (this.addGarageSlideRight = function () {
      d("garageSlideRight");
    }),
    (this.addGarageSlideCrossbuck = function () {
      d("garageSlideCrossbuck");
    }),
    (this.addGarageSlideCrossbuckSmooth = function () {
      d("garageSlideCrossbuckSmooth");
    }),
    (this.addGarageSlideMortonStandardMullionWindow = function () {
      d("garageSlideMortonStandardMullionWindow");
    }),
    (this.addGarageSlideMortonStandardMullionWindowLeft = function () {
      d("garageSlideMortonStandardMullionWindowLeft");
    }),
    (this.addGarageSlideMortonStandardMullionWindowRight = function () {
      d("garageSlideMortonStandardMullionWindowRight");
    }),
    (this.addGarageSlideMortonStandardQuadWindow = function () {
      d("garageSlideMortonStandardQuadWindow");
    }),
    (this.addGarageSlideMortonStandardQuadWindowLeft = function () {
      d("garageSlideMortonStandardQuadWindowLeft");
    }),
    (this.addGarageSlideMortonStandardQuadWindowRight = function () {
      d("garageSlideMortonStandardQuadWindowRight");
    }),
    (this.addGarageSlideMortonStandard = function () {
      d("garageSlideMortonStandard");
    }),
    (this.addGarageSlideMortonStandardLeft = function () {
      d("garageSlideMortonStandardLeft");
    }),
    (this.addGarageSlideMortonStandardRight = function () {
      d("garageSlideMortonStandardRight");
    }),
    (this.addGarageSlideMortonThreeStackMullionWindow = function () {
      d("garageSlideMortonThreeStackMullionWindow");
    }),
    (this.addGarageSlideMortonThreeStackMullionWindowLeft = function () {
      d("garageSlideMortonThreeStackMullionWindowLeft");
    }),
    (this.addGarageSlideMortonThreeStackMullionWindowRight = function () {
      d("garageSlideMortonThreeStackMullionWindowRight");
    }),
    (this.addGarageSlideMortonThreeStackQuadWindow = function () {
      d("garageSlideMortonThreeStackQuadWindow");
    }),
    (this.addGarageSlideMortonThreeStackQuadWindowLeft = function () {
      d("garageSlideMortonThreeStackQuadWindowLeft");
    }),
    (this.addGarageSlideMortonThreeStackQuadWindowRight = function () {
      d("garageSlideMortonThreeStackQuadWindowRight");
    }),
    (this.addGarageSlideMortonThreeStackCrossbuckMullionWindow = function () {
      d("garageSlideMortonThreeStackCrossbuckMullionWindow");
    }),
    (this.addGarageSlideMortonThreeStackCrossbuckMullionWindowLeft =
      function () {
        d("garageSlideMortonThreeStackCrossbuckMullionWindowLeft");
      }),
    (this.addGarageSlideMortonThreeStackCrossbuckMullionWindowRight =
      function () {
        d("garageSlideMortonThreeStackCrossbuckMullionWindowRight");
      }),
    (this.addGarageSlideMortonThreeStackCrossbuckQuadWindow = function () {
      d("garageSlideMortonThreeStackCrossbuckQuadWindow");
    }),
    (this.addGarageSlideMortonThreeStackCrossbuckQuadWindowLeft = function () {
      d("garageSlideMortonThreeStackCrossbuckQuadWindowLeft");
    }),
    (this.addGarageSlideMortonThreeStackCrossbuckQuadWindowRight = function () {
      d("garageSlideMortonThreeStackCrossbuckQuadWindowRight");
    }),
    (this.addGarageBiFold = function () {
      d("garageBiFold");
    }),
    (this.addGarageHydraulic = function () {
      d("garageHydraulic");
    }),
    (this.addGarageRollUp = function () {
      d("garageRollUp");
    }),
    (this.addGarageFramedOpening = function () {
      d("garageFramedOpening");
    });
}

function d(e, t) {
  (t = t || false),
    (e = e || false).startsWith("mansard")
      ? lo(e, 8, t)
      : e.startsWith("window")
        ? lo(e, 5, t)
        : (e.startsWith("walkDoor") || e.startsWith("garage")) && lo(e, 0, t);
}

function yo(e, t) {
  for (var a = 0; a < t.length; a++) if (t[a] === e) return !0;
  return false;
}

function bo(t) {
  t.userData.hasOwnProperty("hasBoundingBox") &&
    t.userData.hasBoundingBox &&
    yo(t.userData.selectionBox, _a) &&
    (_a = _a.filter(function (e) {
      return e != t.userData.selectionBox;
    })),
    yo(t, _a) &&
    (_a = _a.filter(function (e) {
      return e != t;
    }));
}

function fo() {
  var t = [];
  for (let e = 0; e < _a.length; e++)
    null !== _a[e].parent &&
      _a[e].parent !== sceneRoot &&
      null !== _a[e].parent.parent &&
      t.push(_a[e]);
  _a = t;
}

function wo(a) {
  if (null !== a) {
    let t;
    if ((bo(a), void 0 !== a.children))
      if (0 < a.children.length) {
        t = a.parent;
        for (let e = 0; e < a.children.length; e++) wo(a.children[e]);
        if (
          (a.geometry &&
            (sceneRoot.remove(a.geometry),
              a.geometry.dispose(),
              (a.geometry = void 0)),
            void 0 !== a.material && 0 < a.material.length)
        )
          for (let e = 0; e < a.material.length; e++)
            a.material[e] &&
              (a.material[e].map &&
                (sceneRoot.remove(a.material[e].map),
                  a.material[e].map.dispose(),
                  (a.material[e].map = void 0)),
                t.remove(a.material[e]),
                a.material[e].dispose(),
                (a.material[e] = void 0));
        else
          a.material.map &&
            (sceneRoot.remove(a.material.map),
              a.material.map.dispose(),
              (a.material.map = void 0)),
            t.remove(a.material),
            a.material.dispose(),
            (a.material = void 0);
      } else {
        if (((t = a.parent), 0 < a.material.length))
          for (let e = 0; e < a.material.length; e++)
            a.material[e] &&
              (a.material[e].map &&
                (sceneRoot.remove(a.material[e].map),
                  a.material[e].map.dispose(),
                  (a.material[e].map = void 0)),
                t.remove(a.material[e]),
                a.material[e].dispose(),
                (a.material[e] = void 0));
        else
          a.material.map &&
            (sceneRoot.remove(a.material.map),
              a.material.map.dispose(),
              (a.material.map = void 0)),
            t.remove(a.material),
            a.material.dispose(),
            (a.material = void 0);
        a.geometry &&
          (t.remove(a.geometry), a.geometry.dispose(), (a.geometry = void 0));
      }
  }
  (parent = a.parent).remove(a);
}

function vo(t) {
  for (let e = t.children.length - 1; 0 <= e; e--) t.remove(t.children[e]);
}

function Eo(i = {}) {
  try {
    var n = mainCamera.aspect,
      r = orbitControls.getSize(new THREE.Vector2());
    let e = r.x,
      t = r.y,
      a = 0.92,
      o = false;
    return (
      i.hasOwnProperty("width") &&
      Number.isInteger(i.width) &&
      ((e = i.width), (o = !0)),
      i.hasOwnProperty("height") &&
      Number.isInteger(i.height) &&
      ((t = i.height), (o = !0)),
      i.hasOwnProperty("compression") &&
      !isNaN(parseFloat(i.compression)) &&
      (a = parseFloat(i.compression)),
      o &&
      ((mainCamera.aspect = e / t),
        orbitControls.setSize(e, t, false),
        mainCamera.updateProjectionMatrix(),
        (orbitControls.autoClear = false),
        orbitControls.render(sceneRoot, mainCamera)),
      (placeholderD = orbitControls.domElement.toDataURL("image/jpeg", a)),
      o &&
      ((mainCamera.aspect = n),
        orbitControls.setSize(r, false),
        mainCamera.updateProjectionMatrix(),
        (orbitControls.autoClear = !0),
        orbitControls.render(sceneRoot, mainCamera)),
      placeholderD
    );
  } catch (e) {
    console.log(e);
  }
}

function Mo() {
  setTimeout(function () {
    Eo({
      width: 1920,
      height: 800,
      compression: 0.55,
    }),
      $("#printImage").html('<img src="' + placeholderD + '" />'),
      (placeholderE = false),
      Do(),
      setTimeout(function () {
        window.print();
      }, 100);
  }, 50);
}

function Do() {
  let e = "";
  var t,
    s = {
      mansard: "Eyebrow Standard",
      mansardWood: "Mansard Cedar",
      mansardHip: "Mansard Hip End",
      mansardHip2: "Mansard Hip End",
      window3x4: "Window (3x4)",
      window3x4Grid: "Window (3x4) w/ Grid",
      window3x4Shutters: "Window (3x4) w/ Shuters",
      window4x3: "Window (4x3)",
      window4x3Grid: "Window (4x3) w/ Grid",
      window4x3Shutters: "Window (4x3) w/ Shuters",
      windowPicture: "Picture Window",
      windowSlider: "Slider Window",
      windowCasement: "Casement Window",
      windowDoubleHung: "Double Hung Window",
      windowSingleHung: "Single Hung Window",
      windowTwinset: "Twinset Window",
      windowAwning: "Awning Window",
      windowHopper: "Hopper Window",
      windowSlopeLeft: "Left Slope Window",
      windowSlopeRight: "Right Slope Window",
      windowLouver: "Louver",
      windowFramedOpening: "Window Frame Out",
      walkDoorSolid: "Walk Door Solid",
      walkDoorSolidDouble: "Walk Door Solid Double",
      walkDoorHalfGlass: "Walk Door Half Lite",
      walkDoorHalfGlassDouble: "Walk Door Half Lite Double",
      walkDoor6Panel: "Walk Door 6-Panel",
      walkDoor6PanelDouble: "Walk Door 6-Panel Double",
      walkDoor6Lite: "Walk Door 6-Lite",
      walkDoor9Lite: "Walk Door 9-Lite",
      walkDoor9LiteNoPanel: "Walk Door 9-Lite",
      walkDoor9LiteDouble: "Walk Door 9-Lite Double",
      walkDoorSlidingGlassDouble: "Sliding Glass Patio Door",
      walkDoorFrenchDouble: "French Double Door",
      walkDoorAllGlass: "Walk Door All Glass",
      walkDoorAllGlassDouble: "Walk Door All Glass Double",
      walkDoorCrossbuck: "Walk Door Crossbuck",
      walkDoorEquine: "Dutch Equine Door",
      walkDoorEquineSmooth: "Dutch Equine Door",
      walkDoorFramedOpening: "Walk Door Frame Out",
      garageOverheadPanel: "Overhead Panel Door",
      garageOverheadPanelWindow: "Overhead Panel Window Door",
      garageOverheadFlat: "Overhead Commercial Door",
      garageOverheadFlatWindow: "Overhead Flat Window Door",
      garageOverheadFlatModern: "Overhead Modern Door",
      garageOverheadRibbed: "Overhead Ribbed Door",
      garageSlide: "Split Sliding Doors",
      garageSlideLeft: "Sliding Door Left",
      garageSlideRight: "Sliding Door Right",
      garageSlideCrossbuck: "Sliding Crossbuck Doors",
      garageSlideCrossbuckSmooth: "Sliding Crossbuck Doors",
      garageSlideMortonStandardMullionWindow:
        "Diamond M Barn Doors Sliding Door w/ Window",
      garageSlideMortonStandardMullionWindowLeft:
        "Diamond M Barn Door Sliding Door w/ Window (Left)",
      garageSlideMortonStandardMullionWindowRight:
        "Diamond M Barn Door Sliding Door w/ Window (Right)",
      garageSlideMortonStandardQuadWindow: "Diamond M Barn Doors Standard Quad",
      garageSlideMortonStandardQuadWindowLeft:
        "Diamond M Barn Door Standard Quad (Left)",
      garageSlideMortonStandardQuadWindowRight:
        "Diamond M Barn Door Standard Quad (Right)",
      garageSlideMortonStandardCrossbuck:
        "Diamond M Barn Doors Sliding Door w/ Crossbucks",
      garageSlideMortonStandardCrossbuckLeft:
        "Diamond M Barn Door Sliding Door w/ Crossbucks (Left)",
      garageSlideMortonStandardCrossbuckRight:
        "Diamond M Barn Door Sliding Door w/ Crossbucks (Right)",
      garageSlideMortonThreeStackMullionWindow:
        "Diamond M Sliding Door w/ Window & top",
      garageSlideMortonThreeStackMullionWindowLeft:
        "Diamond M Sliding Door w/ Window & top (Left)",
      garageSlideMortonThreeStackMullionWindowRight:
        "Diamond M Sliding Door w/ Window & top (Right)",
      garageSlideMortonThreeStackQuadWindow:
        "Diamond M Barn Doors Three Stack Quad",
      garageSlideMortonThreeStackQuadWindowLeft:
        "Diamond M Barn Door Three Stack Quad (Left)",
      garageSlideMortonThreeStackQuadWindowRight:
        "Diamond M Barn Door Three Stack Quad (Right)",
      garageSlideMortonThreeStackCrossbuckMullionWindow:
        "Diamond M Barn Doors Sliding Door w/ Window & Crossbuck top",
      garageSlideMortonThreeStackCrossbuckMullionWindowLeft:
        "Diamond M Barn Door Sliding Door w/ Window & Crossbuck top (Left)",
      garageSlideMortonThreeStackCrossbuckMullionWindowRight:
        "Diamond M Barn Door Sliding Door w/ Window & Crossbuck top (Right)",
      garageSlideMortonThreeStackCrossbuckQuadWindow:
        "Diamond M Barn Doors Three Stack Crossbuck Top Quad",
      garageSlideMortonThreeStackCrossbuckQuadWindowLeft:
        "Diamond M Barn Door Three Stack Crossbuck Top Quad (Left)",
      garageSlideMortonThreeStackCrossbuckQuadWindowRight:
        "Diamond M Barn Door Three Stack Crossbuck Top Quad (Right)",
      garageBiFold: "Bi-Fold Door",
      garageHydraulic: "Hydraulic Door",
      garageRollUp: "Roll Up Door",
      garageFramedOpening: "Framed Opening",
      interiorWall: "Interior Wall",
      interiorDoor: "Interior Door",
    },
    l = "";
  for (t in ma)
    ma.hasOwnProperty(t) &&
      t.lastIndexOf("Qty", t.length - 3) === t.length - 3 &&
      0 < ma[t] &&
      (l += s[t.replace("Qty", "")] + " Qty: " + ma[t] + "<br>");
  l += "<br>Item Sizes:<br>";
  let a = "",
    o = "";
  sceneRoot.traverse(function (o) {
    if (o instanceof THREE.Mesh) {
      if (
        (o.name.startsWith("interior") ||
          o.name.startsWith("mansard") ||
          "wind" === o.name.substring(0, 4) ||
          "walk" === o.name.substring(0, 4) ||
          "gara" === o.name.substring(0, 4)) &&
        o.name.lastIndexOf("-clone", o.name.length - 6) === o.name.length - 6
      ) {
        var e = o.name.replace("-clone", ""),
          i = 1,
          n = 1,
          r = 1;
        let t = false,
          a = false;
        if (
          ("window3x4" === e
            ? ((i = 3), (n = 4))
            : "window4x3" === e
              ? ((i = 4), (n = 3))
              : "window3x4Grid" === e
                ? ((i = 3), (n = 4))
                : "window4x3Grid" === e
                  ? ((i = 4), (n = 3))
                  : "window3x4Shutters" === e
                    ? ((i = 3), (n = 4))
                    : "window4x3Shutters" === e
                      ? ((i = 4), (n = 3))
                      : e.startsWith("walk")
                        ? ((i = o.userData.scale.x), (n = o.userData.scale.y))
                        : "gara" === e.substring(0, 4)
                          ? (n = i = 10)
                          : e.startsWith("mansardHip")
                            ? ((i = 5), (r = n = 2))
                            : e.startsWith("mansard")
                              ? ((i = 1), (r = n = 2))
                              : e.startsWith("interiorWall")
                                ? ((i = o.userData.width), (n = o.userData.height))
                                : e.startsWith("interiorDoor") && ((i = 3), (n = 7)),
            e.startsWith("walk") &&
              o.hasOwnProperty("morphTargetDictionary") &&
              o.morphTargetDictionary.hasOwnProperty("width")
              ? (i = Math.round(
                i + o.morphTargetInfluences[o.morphTargetDictionary.width]
              ))
              : !e.startsWith("window") &&
              !e.startsWith("mansard") &&
              o.hasOwnProperty("morphTargetDictionary") &&
              o.morphTargetDictionary.hasOwnProperty("width") &&
              (i = parseFloat(
                (
                  i +
                  10 *
                  o.morphTargetInfluences[o.morphTargetDictionary.width] *
                  2
                ).toFixed(2)
              )),
            e.startsWith("mansard")
              ? ((i = parseFloat(
                (
                  i + o.morphTargetInfluences[o.morphTargetDictionary.width]
                ).toFixed(2)
              )),
                (n = parseFloat(
                  (
                    n + o.morphTargetInfluences[o.morphTargetDictionary.height]
                  ).toFixed(2)
                )),
                (r = parseFloat(
                  (
                    r + o.morphTargetInfluences[o.morphTargetDictionary.depth]
                  ).toFixed(2)
                )))
              : (e.startsWith("walk") &&
                o.hasOwnProperty("morphTargetDictionary") &&
                o.morphTargetDictionary.hasOwnProperty("height")) ||
              (e.startsWith("garage") &&
                (n = parseFloat(
                  (
                    n +
                    10 * o.morphTargetInfluences[o.morphTargetDictionary.height]
                  ).toFixed(2)
                ))),
            e.startsWith("window"))
        ) {
          (i = parseFloat(
            (
              i + o.morphTargetInfluences[o.morphTargetDictionary.width]
            ).toFixed(2)
          )),
            (n = parseFloat(
              (
                n + o.morphTargetInfluences[o.morphTargetDictionary.height]
              ).toFixed(2)
            ));
          for (let e = 0; e < o.material.length; e++)
            "WindowGrid" === o.material[e].name && (t = o.material[e].visible),
              "Shutters" === o.material[e].name && (a = o.material[e].visible);
        }
        (l = l + s[e] + ": w" + Co(i).friendly + " x h" + Co(n).friendly),
          e.startsWith("mansard") && (l += " x d" + Co(r).friendly),
          void 0 !== t && t && (l += " with grid"),
          void 0 !== a && a && (l += " with shutters"),
          (l += "<br>");
      }
      o.name.startsWith("porch") &&
        o.name.endsWith("-clone") &&
        o.visible &&
        ("porchWrapHip" == o.userData.masterObjectName
          ? (a +=
            "<strong>" +
            frontEndWallMesh[o.userData.porchSide].abbr +
            " Wrap Hip Porch</strong>")
          : "porchWrap" == o.userData.masterObjectName
            ? (a +=
              "<strong>" +
              frontEndWallMesh[o.userData.porchSide].abbr +
              " Wrap Porch</strong>")
            : "porch" == o.userData.masterObjectName &&
            (a +=
              "<strong>" +
              frontEndWallMesh[o.userData.porchSide].abbr +
              " Porch</strong>"),
          (a += " Width: " + o.userData.width + ","),
          "porch" !== o.userData.masterObjectName &&
          (a += " length: " + o.userData.depth + "',"),
          (a += " Height: " + Math.round(4 * o.userData.height) / 4 + "',"),
          ma.allowLeanToCeilingHeight &&
          (a += " Ceiling Height:" + o.userData.ceilingHeight + "',"),
          (a =
            (a =
              (a += " Porch Depth: " + o.userData.porchDepth + "',") +
              " Porch Roof Pitch: " +
              o.userData.porchPitch +
              "',") +
            " Porch Overhang: " +
            o.userData.porchOverhang +
            "',"),
          o.userData.postMiter && (a += " Post Miters,"),
          o.userData.postWrap && (a += " Wrapped Posts"),
          o.userData.posts || (a += " No Posts"),
          o.userData.hasOwnProperty("concrete") &&
          o.userData.concrete &&
          (a += " With Concrete"),
          (a += "<br /><br />"));
    }
  });
  var i = "",
    n =
      (ma.hasOwnProperty("trussStyle") &&
        (i += "Truss Style: " + ma.trussStyle + "<br />"),
        ma.hasOwnProperty("trussStyle") &&
        ("Scissor" == ma.trussStyle || "Raised Lower Chord" == ma.trussStyle) &&
        ma.hasOwnProperty("lowerChordScissorPitch") &&
        (i +=
          "Scissor Truss Lower Chord Pitch: " +
          ma.lowerChordScissorPitch +
          ":12<br />"),
        ma.hasOwnProperty("postFooting") &&
        (i += "Post Footing: " + ma.postFooting + "<br />"),
        ma.hasOwnProperty("postType") &&
        (i += "Post Type: " + ma.postType + "<br />"),
        ma.hasOwnProperty("frameConstruction") &&
        (i += "Frame Type: " + ma.frameConstruction + "<br />"),
        ma.hasOwnProperty("columnSize") &&
        (i += "Post Size: " + ma.columnSize + "<br />"),
        ma.hasOwnProperty("purlinType") &&
        (i += "Purlin Type: " + ma.purlinType + "<br />"),
        ma.hasOwnProperty("wallPanelType") &&
        (i += "Wall Panel Type: " + ma.wallPanelType + "<br />"),
        ma.hasOwnProperty("roofPanelType") &&
        (i += "Roof Panel Type: " + ma.roofPanelType + "<br />"),
        ma.hasOwnProperty("splashBoard") &&
        (i += "Splash Board: " + ma.splashBoard + "<br />"),
        ma.hasOwnProperty("snowLoad") &&
        "None" !== ma.snowLoad &&
        (i += "Snow Load: " + ma.snowLoad + "lbs/ft&sup2;<br />"),
        ma.hasOwnProperty("windLoad") &&
        "None" !== ma.windLoad &&
        (i += "Wind Load: " + ma.windLoad + "mph<br />"),
        ma.hasOwnProperty("baseTrim") &&
        ma.baseTrim &&
        (i += "Base Trim: Yes<br />"),
        ma.hasOwnProperty("permits") &&
        ma.permits &&
        (i += "Permitting: Yes<br />"),
        ma.hasOwnProperty("engineerPlans") &&
        ma.engineerPlans &&
        (i += "Engineer Plans: Yes<br />"),
        ma.hasOwnProperty("clearingLand") &&
        ma.clearingLand &&
        (i += "Clearing Land: Yes<br />"),
        ma.hasOwnProperty("sitePrep") &&
        ma.sitePrep &&
        (i += "Site Prep: Yes<br />"),
        ma.hasOwnProperty("insulation") &&
        ma.insulation &&
        (i += "Insulation: Yes<br />"),
        ma.hasOwnProperty("concreteWork") &&
        ma.concreteWork &&
        (i += "Concrete Floor: Yes<br />"),
        ma.hasOwnProperty("concreteFoundation") &&
        ma.concreteFoundation &&
        (i += "Concrete Foundation: Yes<br />"),
        ma.hasOwnProperty("concreteApproach") &&
        ma.concreteApproach &&
        (i += "Concrete Approach: Yes<br />"),
        ma.hasOwnProperty("gravel") && ma.gravel && (i += "Gravel: Yes<br />"),
        ma.hasOwnProperty("asphalt") && ma.asphalt && (i += "Asphalt: Yes<br />"),
        ma.hasOwnProperty("masonry") && ma.masonry && (i += "Masonry: Yes<br />"),
        ma.hasOwnProperty("framing") &&
        ma.framing &&
        (i += "Framing: " + ma.framing + "<br />"),
        "");
  (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) &&
    ((n = "<div><h3>Wainscot</h3>"),
      ma.hasOwnProperty("wainscotAll")
        ? ma.wainscotAll && (n += "Wainscot: Yes<br>")
        : (ma.wainscot1 && (n += frontEndWallMesh.N.short + ": Yes<br>"),
          ma.wainscot2 && (n += frontEndWallMesh.W.short + ": Yes<br>"),
          ma.wainscot3 && (n += frontEndWallMesh.S.short + ": Yes<br>"),
          ma.wainscot4 && (n += frontEndWallMesh.E.short + ": Yes<br>")),
      ma.hasOwnProperty("wainscotHeight") &&
      (n += "Wainscot Height: " + Co(ma.wainscotHeight, 1).friendly + "<br>"),
      (n += "</div>"));
  let r = "",
    h =
      (ma.hasOwnProperty("divisionWall") &&
        ma.divisionWall &&
        ((r = "Division Wall at: " + ma.divisionAmount + "ft"),
          ma.hasOwnProperty("divisionMaterial") &&
          (r += ", " + ma.divisionMaterial),
          (r += "<br />")),
        ""),
    c =
      (("None" !== ma.perimeterWalls ||
        (ma.hasOwnProperty("perimeterWalls2") &&
          "None" !== ma.perimeterWalls2)) &&
        ("None" !== ma.perimeterWalls &&
          (h = "Perimeter Walls: " + ma.perimeterWalls),
          ma.hasOwnProperty("perimeterWalls2") &&
          "None" !== ma.perimeterWalls2 &&
          (h += "<br>Perimeter Walls 2: " + ma.perimeterWalls2),
          ma.hasOwnProperty("perimeterWallHeight") &&
          (h += ", " + ma.perimeterWallHeight + "ft"),
          (h += "<br />")),
        ""),
    d =
      (ma.hasOwnProperty("flooring") &&
        "None" !== ma.flooring &&
        (c += "Flooring: " + ma.flooring + "<br />"),
        ma.hasOwnProperty("flooring2") &&
        "None" !== ma.flooring2 &&
        ma.divisionWall &&
        (c += "Flooring 2: " + ma.flooring2 + "<br />"),
        ""),
    p =
      (ma.hasOwnProperty("ceiling") &&
        "None" !== ma.ceiling &&
        (d += "Ceiling: " + ma.ceiling + "<br />"),
        ma.hasOwnProperty("ceiling2") &&
        "None" !== ma.ceiling2 &&
        ma.divisionWall &&
        (d += "Ceiling 2: " + ma.ceiling2 + "<br />"),
        ""),
    m =
      ("None" !== ma.insulationRoof &&
        (p += "Roof Insulation: " + ma.insulationRoof + "<br />"),
        "None" !== ma.insulationWalls &&
        (p += "Wall Insulation: " + ma.insulationWalls + "<br />"),
        ""),
    g =
      (ma.hasOwnProperty("mezzanineBays") &&
        0 < ma.mezzanineBays &&
        (!ma.useMezzanineDepth &&
          0 < ma.mezzanineBays &&
          ((m = "Mezzanine Bays: " + ma.mezzanineBays + "<br />"),
            (m += "Mezzanine Height: " + ma.mezzanineHeight + "'<br />")),
          ma.useMezzanineDepth &&
          0 < ma.mezzanineDepth &&
          ((m = "Mezzanine Depth: " + ma.mezzanineDepth + "'<br />"),
            (m += "Mezzanine Height: " + ma.mezzanineHeight + "'<br />")),
          ma.hasOwnProperty("mezzanineRailing") &&
          "None" !== ma.mezzanineRailing &&
          (m += "Mezzanine Railing: " + ma.mezzanineRailing + "<br />"),
          ma.hasOwnProperty("mezzanineStairs")) &&
        "None" !== ma.mezzanineStairs &&
        (m += "Mezzanine Stairs: " + ma.mezzanineStairs + "'<br />"),
        "");
  (g =
    (g += "Roof Color: " + ma.roofColor + "<br />") +
    "Wall Color: " +
    ma.wallColor +
    "<br />"),
    ma.hasOwnProperty("trimCornerColor") ||
    ma.hasOwnProperty("trimWallColor") ||
    (g += "Trim Color: " + ma.trimColor + "<br />"),
    ma.hasOwnProperty("trimBaseColor") &&
    (g += "Trim Base: " + ma.trimBaseColor + "<br />"),
    ma.hasOwnProperty("trimGableColor") &&
    (g += "Trim Gable: " + ma.trimGableColor + "<br />"),
    ma.hasOwnProperty("trimEaveColor") &&
    (g += "Trim Eave: " + ma.trimEaveColor + "<br />"),
    ma.hasOwnProperty("trimCornerColor") &&
    (g += "Trim Corner: " + ma.trimCornerColor + "<br />"),
    ma.hasOwnProperty("trimWallColor") &&
    (g += "Wall Trim: " + ma.trimWallColor + "<br />"),
    ma.hasOwnProperty("trimRoofColor") &&
    (g += "Roof Trim: " + ma.trimRoofColor + "<br />"),
    ma.hasOwnProperty("ridgeCapColor") &&
    (g += "Ridge Cap: " + ma.ridgeCapColor + "<br />"),
    ma.hasOwnProperty("soffitColor") &&
    (g += "Soffit: " + ma.soffitColor + "<br />"),
    ma.hasOwnProperty("doorTrimColor") &&
    (g += "Door Trim: " + ma.doorTrimColor + "<br />"),
    ma.hasOwnProperty("garageDoorTrimColor") &&
    (g += "Large Door Trim: " + ma.garageDoorTrimColor + "<br />"),
    ma.hasOwnProperty("walkDoorTrimColor") &&
    (g += "Walk Door Trim: " + ma.walkDoorTrimColor + "<br />"),
    ma.hasOwnProperty("doorWindowTrimColor") &&
    (g += "Door and Garage Trim: " + ma.doorWindowTrimColor + "<br />"),
    ma.hasOwnProperty("walkDoorColor") &&
    (g += "Walk Doors: " + ma.walkDoorColor + "<br />"),
    ma.hasOwnProperty("largeDoorColor") &&
    (g += "Large Doors: " + ma.largeDoorColor + "<br />"),
    ma.hasOwnProperty("commercialDoorColor") &&
    (g += "Commercial Doors: " + ma.commercialDoorColor + "<br />"),
    ma.hasOwnProperty("residentialDoorColor") &&
    (g += "Residential Doors: " + ma.residentialDoorColor + "<br />"),
    ma.hasOwnProperty("overheadDoorColor") &&
    (g += "Overhead Doors: " + ma.overheadDoorColor + "<br />"),
    ma.hasOwnProperty("slidingDoorColor") &&
    (g += "Sliding Doors: " + ma.slidingDoorColor + "<br />"),
    ma.hasOwnProperty("trackColor") &&
    (g += "Track: " + ma.trackColor + "<br />"),
    ma.hasOwnProperty("gutterColor") &&
    (g += "Gutters: " + ma.gutterColor + "<br />"),
    ma.hasOwnProperty("downspoutColor") &&
    (g += "Downspouts: " + ma.downspoutColor + "<br />"),
    ma.hasOwnProperty("wainscotColor") &&
    (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) &&
    (g += "Wainscot Color: " + ma.wainscotColor + "<br />"),
    (e +=
      "<div><h3>Building Specs</h3>Width: " +
      ma.width +
      "'<br />Length: " +
      ma.depth +
      "'<br />Height: " +
      ma.height +
      "'<br />Roof Type: " +
      ma.roofType +
      "<br />Roof Pitch: " +
      ma.roofPitch +
      '":12"<br />' +
      i +
      "</div><div><h3>Colors</h3>" +
      g +
      "</div>" +
      n +
      "<div><h3>Interior</h3>" +
      r +
      h +
      c +
      d +
      p +
      m +
      "</div>");
  var i = "",
    n =
      (ma.hasOwnProperty("showGableDressWithOpenGableWalls") &&
        ma.showGableDressWithOpenGableWalls
        ? (i +=
          "Gable Dress: " + ma.showGableDressWithOpenGableWalls + "<br />")
        : ma.hasOwnProperty("showGableTriangleWithOpenGableWall") &&
        "" !== i &&
        (i +=
          " Enclose Gable Triangles: " +
          ma.showGableTriangleWithOpenGableWall +
          "<br />"),
        ma.eaveLightsEast,
        ma.eaveLightsWest,
        ma.eaveLightPanelsEast,
        ma.eaveLightPanelsWest,
        ma.eaveLightsEast &&
        (i +=
          "Eave Lights " +
          frontEndWallMesh.E.short +
          ": " +
          ma.eaveLightsEast +
          "<br />"),
        ma.eaveLightsWest &&
        (i +=
          "Eave Lights " +
          frontEndWallMesh.W.short +
          ": " +
          ma.eaveLightsWest +
          "<br />"),
        ma.eaveLightPanelsEast &&
        (i +=
          "Eave Light Panels " +
          frontEndWallMesh.E.short +
          ": " +
          ma.eaveLightPanelsEast +
          "<br />"),
        ma.eaveLightPanelsWest &&
        (i +=
          "Eave Light Panels " +
          frontEndWallMesh.W.short +
          ": " +
          ma.eaveLightPanelsWest +
          "<br />"),
        ma.hasOwnProperty("eaveLightPanelTint") &&
        (i += "Eave Light Tint: " + ma.eaveLightPanelTint + "<br />"),
        ""),
    u =
      (0 < ma.gableFront &&
        (n +=
          frontEndWallMesh.N.name + " Overhang: " + ma.gableFront + "'<br />"),
        0 < ma.gableBack &&
        (n +=
          frontEndWallMesh.S.name + " Overhang: " + ma.gableBack + "'<br />"),
        0 < ma.eaveL &&
        (n += frontEndWallMesh.E.name + " Overhang: " + ma.eaveL + "<br />"),
        0 < ma.eaveR &&
        (n += frontEndWallMesh.W.name + " Overhang: " + ma.eaveR + "<br />"),
        ma.hasOwnProperty("boxedOverhangs") &&
        ma.boxedOverhangs &&
        (n += "Boxed Overhangs: Yes<br />"),
        0 < ma.cupola18in &&
        (n += '18"x18" Cupola Qty: ' + ma.cupola18in + "<br />"),
        0 < ma.cupola2 && (n += "2'x2' Cupola Qty: " + ma.cupola2 + "<br />"),
        0 < ma.cupola30in &&
        (n += "2'-6\" x 2'-6\" Cupola Qty: " + ma.cupola30in + "<br />"),
        0 < ma.cupola3 && (n += "3'x3' Cupola Qty: " + ma.cupola3 + "<br />"),
        0 < ma.cupola42in &&
        (n += "3'-6\" x 3'-6\" Cupola Qty: " + ma.cupola42in + "<br />"),
        0 < ma.cupola4 && (n += "4'x4' Cupola Qty: " + ma.cupola4 + "<br />"),
        0 < ma.cupolaWindow2 &&
        (n += "2'x2' Cupola Window Qty: " + ma.cupolaWindow2 + "<br />"),
        0 < ma.cupolaWindow30in &&
        (n +=
          "2'-6\" x 2'-6\" Cupola Window Qty: " +
          ma.cupolaWindow30in +
          "<br />"),
        0 < ma.cupolaWindow3 &&
        (n += "3'x3' Cupola Window Qty: " + ma.cupolaWindow3 + "<br />"),
        0 < ma.cupolaWindow42in &&
        (n +=
          "3'-6\" x 3'-6\" Cupola Window Qty: " +
          ma.cupolaWindow42in +
          "<br />"),
        0 < ma.cupolaWindow4 &&
        (n += "4'x4' Cupola Window Qty: " + ma.cupolaWindow4 + "<br />"),
        "None" !== ma.weatherVane &&
        (n += "Weathervane: " + ma.weatherVane + "<br />"),
        ma.hasOwnProperty("gutters") &&
        ma.gutters &&
        (n += "Gutters and Downspouts: Yes<br />"),
        0 < ma.ridgeVents && (n += "Ridge Vents: " + ma.ridgeVents + "<br />"),
        0 < ma.skylights &&
        ((n += "Skylights: " + ma.skylights + "<br />"),
          ma.hasOwnProperty("skylightLength") &&
          (n += " in " + ma.skylightLength + "ft length"),
          (n += "<br />")),
        "");
  let T;
  ma.leanTo1 &&
    ((T = "Walls: " + ma.leanTo1Walls),
      (u +=
        "<strong>" +
        sceneElementB +
        " " +
        frontEndWallMesh.N.abbr +
        "</strong> Connection Height: " +
        ma.leanTo1Height +
        "', Cut L: " +
        ma.leanTo1CutL +
        "', Cut R:" +
        ma.leanTo1CutR +
        "', Length: " +
        (ma.width - ma.leanTo1CutL - ma.leanTo1CutR) +
        "', Depth: " +
        ma.leanTo1Depth +
        "', Pitch: " +
        ma.leanTo1Pitch +
        ":12, " +
        T),
      ma.hasOwnProperty("leanTo1WrappedPosts") &&
      ma.leanTo1WrappedPosts &&
      (u += ", Post Wrap: Yes"),
      ma.hasOwnProperty("leanTo1MiteredPosts") &&
      ma.leanTo1MiteredPosts &&
      (u += ", Mitered Posts: Yes"),
      (u += "<br /><br />")),
    ma.leanTo2 &&
    ((T = "Walls: " + ma.leanTo2Walls),
      (u +=
        "<strong>" +
        sceneElementB +
        " " +
        frontEndWallMesh.E.abbr +
        "</strong> Connection Height: " +
        ma.leanTo2Height +
        "', Cut L: " +
        ma.leanTo2CutL +
        "', Cut R:" +
        ma.leanTo2CutR +
        "', Length: " +
        (ma.depth - ma.leanTo2CutL - ma.leanTo2CutR) +
        "', Depth: " +
        ma.leanTo2Depth +
        "' Pitch: " +
        ma.leanTo2Pitch +
        ":12, " +
        T),
      ma.hasOwnProperty("leanTo2WrappedPosts") &&
      ma.leanTo2WrappedPosts &&
      (u += ", Post Wrap: Yes"),
      ma.hasOwnProperty("leanTo2MiteredPosts") &&
      ma.leanTo2MiteredPosts &&
      (u += ", Mitered Posts: Yes"),
      (u += "<br /><br />")),
    ma.leanTo4 &&
    ((T = "Walls: " + ma.leanTo4Walls),
      (u +=
        "<strong>" +
        sceneElementB +
        " " +
        frontEndWallMesh.W.abbr +
        "</strong> Connection Height: " +
        ma.leanTo4Height +
        "', Cut L: " +
        ma.leanTo4CutL +
        "', Cut R:" +
        ma.leanTo4CutR +
        "', Length: " +
        (ma.depth - ma.leanTo4CutL - ma.leanTo4CutR) +
        "', Depth: " +
        ma.leanTo4Depth +
        "' Pitch: " +
        ma.leanTo4Pitch +
        ":12, " +
        T),
      ma.hasOwnProperty("leanTo3WrappedPosts") &&
      ma.leanTo3WrappedPosts &&
      (u += ", Post Wrap: Yes"),
      ma.hasOwnProperty("leanTo3MiteredPosts") &&
      ma.leanTo3MiteredPosts &&
      (u += ", Mitered Posts: Yes"),
      (u += "<br /><br />")),
    ma.leanTo3 &&
    ((T = "Walls: " + ma.leanTo3Walls),
      (u +=
        "<strong>" +
        sceneElementB +
        " " +
        frontEndWallMesh.S.abbr +
        "</strong> Connection Height: " +
        ma.leanTo3Height +
        "', Cut L: " +
        ma.leanTo3CutL +
        "', Cut R:" +
        ma.leanTo3CutR +
        "', Length: " +
        (ma.width - ma.leanTo3CutL - ma.leanTo3CutR) +
        "', Depth: " +
        ma.leanTo3Depth +
        "' Pitch: " +
        ma.leanTo3Pitch +
        ":12, " +
        T),
      ma.hasOwnProperty("leanTo4WrappedPosts") &&
      ma.leanTo4WrappedPosts &&
      (u += ", Post Wrap: Yes"),
      ma.hasOwnProperty("leanTo4MiteredPosts") &&
      ma.leanTo4MiteredPosts &&
      (u += ", Mitered Posts: Yes"),
      (u += "<br /><br />")),
    ("" === i && "" === n && "" === u) ||
    (e +=
      "<div><h3>Walls</h3>" +
      i +
      "</div><div><h3>Roof Options</h3>" +
      n +
      "</div><div><h3>" +
      sceneElementA +
      "</h3>" +
      u +
      "</div>"),
    ((ma.hasOwnProperty("coveredGableExtensionN") &&
      ma.coveredGableExtensionN) ||
      (ma.hasOwnProperty("coveredGableExtensionS") &&
        ma.coveredGableExtensionS) ||
      (ma.hasOwnProperty("coveredGableExtensionE") &&
        ma.coveredGableExtensionE) ||
      (ma.hasOwnProperty("coveredGableExtensionW") &&
        ma.coveredGableExtensionW)) &&
    (ma.coveredGableExtensionN &&
      ((o =
        (o =
          (o =
            (o =
              (o +=
                "<strong>" +
                frontEndWallMesh.N.short +
                " (" +
                (ma.width -
                  ma.coveredGableExtensionNCutL -
                  ma.coveredGableExtensionNCutR) +
                " x " +
                ma.coveredGableExtensionNDepth +
                "):</strong> ") +
              " Cut L: " +
              ma.coveredGableExtensionNCutL +
              ",") +
            " Cut R: " +
            ma.coveredGableExtensionNCutR +
            ",") +
          " Height: " +
          ma.coveredGableExtensionNHeight +
          ",") +
        " Pitch: " +
        ma.coveredGableExtensionNPitch +
        ":12,"),
        ma.coveredGableExtensionNEnclosed && (o += " Enclosed"),
        (o += "<br /><br />")),
      ma.coveredGableExtensionS &&
      ((o =
        (o =
          (o =
            (o =
              (o +=
                "<strong>" +
                frontEndWallMesh.S.short +
                " (" +
                (ma.width -
                  ma.coveredGableExtensionSCutL -
                  ma.coveredGableExtensionSCutR) +
                " x " +
                ma.coveredGableExtensionSDepth +
                "):</strong> ") +
              " Cut L: " +
              ma.coveredGableExtensionsCutL +
              ",") +
            " Cut R: " +
            ma.coveredGableExtensionSCutR +
            ",") +
          " Height: " +
          ma.coveredGableExtensionSHeight +
          ",") +
        " Pitch: " +
        ma.coveredGableExtensionSPitch +
        ":12,"),
        ma.coveredGableExtensionSEnclosed && (o += " Enclosed"),
        (o += "<br /><br />")),
      ma.coveredGableExtensionE &&
      ((o =
        (o =
          (o =
            (o =
              (o +=
                "<strong>" +
                frontEndWallMesh.E.short +
                " (" +
                (ma.depth -
                  ma.coveredGableExtensionECutL -
                  ma.coveredGableExtensionECutR) +
                " x " +
                ma.coveredGableExtensionEDepth +
                "):</strong> ") +
              " Cut L: " +
              ma.coveredGableExtensionECutL +
              ",") +
            " Cut R: " +
            ma.coveredGableExtensionECutR +
            ",") +
          " Height: " +
          ma.coveredGableExtensionEHeight +
          ",") +
        " Pitch: " +
        ma.coveredGableExtensionEPitch +
        ":12,"),
        ma.coveredGableExtensionEEnclosed && (o += " Enclosed"),
        (o += "<br /><br />")),
      ma.coveredGableExtensionW &&
      ((o =
        (o =
          (o =
            (o =
              (o +=
                "<strong>" +
                frontEndWallMesh.W.short +
                " (" +
                (ma.depth -
                  ma.coveredGableExtensionWCutL -
                  ma.coveredGableExtensionWCutR) +
                " x " +
                ma.coveredGableExtensionWDepth +
                "):</strong> ") +
              " Cut L: " +
              ma.coveredGableExtensionWCutL +
              ",") +
            " Cut R: " +
            ma.coveredGableExtensionWCutR +
            ",") +
          " Height: " +
          ma.coveredGableExtensionWHeight +
          ",") +
        " Pitch: " +
        ma.coveredGableExtensionWPitch +
        ":12,"),
        ma.coveredGableExtensionWEnclosed && (o += " Enclosed"),
        (o += "<br /><br />")),
      (o = "<div><h3>" + sceneElementC + "</h3>" + o + "</div>")),
    "" !== a && (a = "<div><h3>Porches</h3>" + a + "</div>"),
    (e = (e += a + o) + "<div><h3>Windows &amp; Doors</h3>" + l + "</div>"),
    B &&
    (e +=
      "<div><h3>Colors</h3><br />Roof Color: " +
      ma.roofColor +
      "<br />Wall Color: " +
      ma.wallColor +
      "<br />Trim Color: " +
      ma.trimColor +
      "<br /></div>"),
    $("#printTable").html(e);
}

function Po() {
  var e = {};
  return (
    (e.params = ma), (e.porches = {}), (e.doorsWindows = {}), JSON.stringify(e)
  );
}

function Wo(e, t, a, o) {
  if (
    ((e = e || false),
      (t = t || 1500),
      (a = a || false),
      (o = o || false),
      (environmentMap.autoRotate = false),
      qa(),
      mainCamera == lightGroup)
  ) {
    var i = new THREE.Box3().setFromObject(lastHoveredItem),
      n =
        ((i.min.x = ma.buildingWithPorchesDimensions().eastEdge),
          (i.min.y = 0),
          (i.min.z = ma.buildingWithPorchesDimensions().southEdge),
          (i.max.x = ma.buildingWithPorchesDimensions().westEdge),
          (i.max.y = ma.peakHeight()),
          (i.max.z = ma.buildingWithPorchesDimensions().northEdge),
          new THREE.Vector3()),
      r = new THREE.Vector3();
    i.getCenter(r), i.getSize(n);
    let e, t;
    switch (lightGroup.userData.view) {
      case "Front":
        (e = {
          view: "Front",
          dx: 0,
          dy: 0,
          dz: 1,
          width: n.x,
          height: n.y,
        }),
          (t = {
            x: THREE.Math.degToRad(90),
            y: 0,
            z: 0,
          });
        break;
      case "Back":
        (e = {
          view: "Back",
          dx: 0,
          dy: 0,
          dz: -1,
          width: n.x,
          height: n.y,
        }),
          (t = {
            x: THREE.Math.degToRad(-90),
            y: 0,
            z: 0,
          });
        break;
      case "Left":
        (e = {
          view: "Left",
          dx: -1,
          dy: 0,
          dz: 0,
          width: n.z,
          height: n.y,
        }),
          (t = {
            x: 0,
            y: 0,
            z: THREE.Math.degToRad(90),
          });
        break;
      case "Right":
        (e = {
          view: "Right",
          dx: 1,
          dy: 0,
          dz: 0,
          width: n.z,
          height: n.y,
        }),
          (t = {
            x: 0,
            y: 0,
            z: THREE.Math.degToRad(-90),
          });
        break;
      default:
        (e = {
          view: "Top",
          dx: 1e-5,
          dy: 1,
          dz: 0,
          width: n.z,
          height: n.x,
        }),
          (t = {
            x: 0,
            y: 0,
            z: 0,
          });
    }
    lightGroup.position.set(
      r.x + e.dx * n.x,
      r.y + e.dy * n.y,
      r.z + e.dz * n.z
    ),
      currentModel.target.set(r.x, r.y, r.z),
      "Top" !== e.view
        ? (lightGroup.far =
          lightGroup.position.distanceTo(previousAnimationAction.position) +
          0.1)
        : (lightGroup.far = 1e3),
      z.rotation.set(t.x, t.y, t.z),
      previousAnimationAction.rotation.set(t.x, t.y, t.z);
    (lightGroup.zoom = Math.min(
      sceneManager.clientHeight / (e.height + 100),
      sceneManager.clientWidth / (e.width + 100)
    )),
      lightGroup.updateProjectionMatrix();
  } else {
    var i = new THREE.Vector3(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth),
      r = new THREE.Vector3(0, ma.height / 2, 0),
      s = new THREE.Vector3(
        sceneRoot.getObjectByName("foundation").position.x,
        50,
        sceneRoot.getObjectByName("foundation").position.z
      ),
      l = new THREE.Vector3(
        sceneRoot.getObjectByName("foundation").position.x,
        0,
        sceneRoot.getObjectByName("foundation").position.z
      );
    false !== a &&
      (mainCamera == renderer
        ? i.set(a.x, a.y, a.z)
        : mainCamera == lightGroup &&
        (s.set(a.x, a.y, a.z), l.set(a.x, 0, a.z))),
      false !== o &&
      (mainCamera == renderer
        ? r.set(o.x, o.y, o.z)
        : mainCamera == lightGroup && l.set(o.x, 0, o.z)),
      !0 === e
        ? ((meshGeometry = new TWEEN.Tween(renderer.position)
          .to(i, t)
          .easing(TWEEN.Easing.Quartic.Out)
          .onUpdate((e) => {
            isMaterialUpdateEnabled = !0;
          })
          .start()),
          (meshGeometry = new TWEEN.Tween(environmentMap.target)
            .to(r, t)
            .easing(TWEEN.Easing.Quartic.Out)
            .onUpdate((e) => {
              isMaterialUpdateEnabled = !0;
            })
            .start()),
          (meshGeometry = new TWEEN.Tween(lightGroup.position)
            .to(s, t)
            .easing(TWEEN.Easing.Quartic.Out)
            .onUpdate((e) => {
              isMaterialUpdateEnabled = !0;
            })
            .start()),
          (meshGeometry = new TWEEN.Tween(currentModel.target)
            .to(l, t)
            .easing(TWEEN.Easing.Quartic.Out)
            .onUpdate((e) => {
              isMaterialUpdateEnabled = !0;
            })
            .start()),
          (meshGeometry = new TWEEN.Tween(lightGroup)
            .to(
              {
                zoom: 1,
              },
              t
            )
            .easing(TWEEN.Easing.Quartic.Out)
            .onUpdate((e) => {
              isMaterialUpdateEnabled = !0;
            })
            .start()))
        : "instant" === e &&
        (renderer.position.set(i.x, i.y, i.z),
          environmentMap.target.set(r.x, r.y, r.z),
          lightGroup.position.set(s.x, s.y, s.z),
          currentModel.target.set(l.x, l.y, l.z),
          (lightGroup.zoom = 1),
          Go(),
          lightGroup.updateProjectionMatrix(),
          orbitControls.render(sceneRoot, mainCamera));
  }
  $("#guiInOut span.property-name").text("Look Inside");
}

function So() {
  "Look Inside" === $("#guiInOut span.property-name").text()
    ? (mainCamera == renderer
      ? Wo(
        !0,
        1e3,
        {
          x: 0,
          y: 5,
          z: 5,
        },
        {
          x: 0,
          y: ma.height / 2,
          z: 0,
        }
      )
      : (Ro("3dView"),
        Wo(
          "instant",
          0,
          {
            x: 0,
            y: 5,
            z: 5,
          },
          {
            x: 0,
            y: ma.height / 2,
            z: 0,
          }
        )),
      $("#guiInOut span.property-name").text("Go Outside"))
    : (mainCamera == renderer &&
      Wo(
        !0,
        1e3,
        {
          x: 1.25 * ma.width,
          y: ma.height + 0,
          z: 1.25 * ma.depth,
        },
        {
          x: 0,
          y: ma.height / 2,
          z: 0,
        }
      ),
      $("#guiInOut span.property-name").text("Look Inside"));
}

function Oo() {
  1 ==
    confirm("Are you sure you want to erase your building and start over?") &&
    (window.location = window.location.pathname);
}

function Bo(e) {
  e = e || false;
  var t = $("#guiHideWalls span.property-name");
  (3 == ma.hideWalls && !e) || "showWalls" === e
    ? (sceneRoot.traverse(function (t) {
      if (
        (t instanceof THREE.Mesh &&
          (t.name.startsWith("roof") ||
            "building" === t.name ||
            "leanTo1" === t.name ||
            "leanTo2" === t.name ||
            "leanTo3" === t.name ||
            "leanTo4" === t.name)) ||
        t.name.startsWith("perimeterWall") ||
        t.name.startsWith("ceiling")
      )
        if (t.material.length)
          for (let e = 0; e < t.material.length; e++)
            (t.material[e].name.startsWith("BuildingCeiling") ||
              t.material[e].name.startsWith("BuildingRoof") ||
              "BuildingWalls" === t.material[e].name.substring(0, 13) ||
              "BuildingWainscot" === t.material[e].name.substring(0, 16) ||
              "LeantoWalls" === t.material[e].name.substring(0, 11) ||
              "LeantoWainscot" === t.material[e].name.substring(0, 14) ||
              t.material[e].name.startsWith("BuildingSoffit") ||
              t.material[e].name.startsWith("BuildingTrim") ||
              t.material[e].name.startsWith("BuildingRidgeCap") ||
              t.material[e].name.startsWith("interiorWall")) &&
              (t.material[e].visible = !0);
        else t.name.startsWith("ceiling") && (t.material.visible = !0);
    }),
      (ma.hideWalls = 0),
      t.text("Hide Walls"))
    : (sceneRoot.traverse(function (t) {
      if (
        t instanceof THREE.Mesh &&
        ("building" === t.name ||
          "leanTo1" === t.name ||
          "leanTo2" === t.name ||
          "leanTo3" === t.name ||
          "leanTo4" === t.name ||
          "downspout-clone" === t.name ||
          t.name.startsWith("perimeterWall"))
      )
        if (t.material.length)
          for (let e = 0; e < t.material.length; e++)
            (t.material[e].name.startsWith("BuildingWalls") ||
              "BuildingWainscot" === t.material[e].name.substring(0, 16) ||
              "LeantoWalls" === t.material[e].name.substring(0, 11) ||
              "LeantoWainscot" === t.material[e].name.substring(0, 14) ||
              t.material[e].name.startsWith("BuildingTrim") ||
              t.material[e].name.startsWith("BuildingTrim-Base") ||
              t.material[e].name.startsWith("interiorWall")) &&
              (t.material[e].visible = false);
        else "Downspouts" === t.material.name && (t.material.visible = false);
    }),
      0 == ma.hideWalls || "hideWalls" == e
        ? ((ma.hideWalls = 1), t.text("Hide Roof"))
        : 1 == ma.hideWalls || "hideRoof" == e
          ? ((ma.hideWalls = 2),
            t.text("Hide Girts"),
            sceneRoot.traverse(function (t) {
              if (
                t instanceof THREE.Mesh &&
                (t.name.startsWith("roof") ||
                  "building" === t.name ||
                  "leanTo1" === t.name ||
                  "leanTo2" === t.name ||
                  "leanTo3" === t.name ||
                  "leanTo4" === t.name ||
                  t.name.startsWith("ceiling"))
              )
                if (t.material.length)
                  for (let e = 0; e < t.material.length; e++)
                    (t.material[e].name.startsWith("BuildingCeiling") ||
                      t.material[e].name.startsWith("BuildingRoof") ||
                      t.material[e].name.startsWith("BuildingSoffit") ||
                      t.material[e].name.startsWith("BuildingTrim") ||
                      t.material[e].name.startsWith("BuildingRidgeCap") ||
                      t.material[e].name.startsWith("LeantoCeiling") ||
                      t.material[e].name.startsWith("Gutters")) &&
                      (t.material[e].visible = false);
                else t.name.startsWith("ceiling") && (t.material.visible = false);
            }))
          : ((ma.hideWalls = 3),
            t.text("Show Walls"),
            (colorOptionList.getObjectByName("GirtParent").visible = false),
            (colorOptionList.getObjectByName("PurlinParentR").visible = false),
            (colorOptionList.getObjectByName("PurlinParentL").visible = false))),
    S();
}

function xo() {
  sceneRoot.traverse(function (t) {
    if (
      (t instanceof THREE.Mesh &&
        ("ceiling" === t.name ||
          "postLogo" === t.name ||
          t.name.startsWith("Truss") ||
          t.name.startsWith("Webbing") ||
          "roofL" === t.name ||
          "roofR" === t.name ||
          "leanTo1Roof" === t.name ||
          "leanTo2Roof" === t.name ||
          "leanTo3Roof" === t.name ||
          "leanTo4Roof" === t.name ||
          "TrussMasterL" === t.name ||
          "TrussMasterR" === t.name ||
          "Framing" === t.name) &&
        (t.visible = false),
        t instanceof THREE.Mesh &&
        ("building" === t.name ||
          "leanTo1" === t.name ||
          "leanTo2" === t.name ||
          "leanTo3" === t.name ||
          "leanTo4" === t.name))
    )
      for (let e = 0; e < t.material.length; e++)
        ("LeantoCeiling" !== t.material[e].name &&
          "BuildingCeiling" !== t.material[e].name &&
          "BuildingCeilingRight-Interior" !== t.material[e].name &&
          "BuildingCeilingLeft-Interior" !== t.material[e].name) ||
          (t.material[e].visible = false);
  }),
    (colorOptionList.getObjectByName("GirtParent").visible = false),
    (colorOptionList.getObjectByName("PurlinParentR").visible = false),
    (colorOptionList.getObjectByName("PurlinParentL").visible = false),
    (colorOptionList.visible = false),
    (ma.hideWalls = 3);
}

function Ro(e, t) {
  (e = e || false),
    (t = t || !0),
    ("UserCamera" === mainCamera.name && false === e) ||
      "Top" == e ||
      "Front" == e ||
      "Back" == e ||
      "Left" == e ||
      "Right" == e
      ? ((mainCamera = lightGroup),
        $("#guiTopView span.property-name").text("3D View"),
        (lightGroup.userData.view = e),
        (ma.hideWalls = 1),
        Bo(),
        S(),
        (orbitControls.shadowMap.enabled = false),
        $("#guiHideWalls").addClass("disabled"))
      : ((mainCamera = renderer),
        $("#guiTopView span.property-name").text("Top View"),
        t &&
        (environmentMap.target.set(0, ma.height / 2, 0),
          mainCamera.position.set(
            1.25 * ma.width,
            ma.height + 0,
            1.25 * ma.depth
          )),
        $("#guiInOut span.property-name").text("Look Inside"),
        $("#guiHideWalls").removeClass("disabled"),
        z.rotation.set(0, 0, 0),
        previousAnimationAction.rotation.set(0, 0, 0),
        (orbitControls.shadowMap.enabled = !0),
        (e = document.getElementById("cameraSelector")) &&
        (e.querySelector("option[value=Perspective]").selected = "selected"),
        Bo("showWalls"),
        S()),
    $("#guiInOut span.property-name").text("Look Inside"),
    t && Wo("instant"),
    Ko(!0);
}

function Ho() {
  var e, t, a, o, i, n, r, s;
  null != y &&
    $("#popup").is(":visible") &&
    ((s = zo()),
      (t = (e = document.getElementById("line")).getContext("2d")),
      (r = s.x),
      (s = s.y),
      (a = e.offsetWidth),
      (o = e.offsetHeight),
      (i = (i = new THREE.Vector3()).setFromMatrixPosition(y.matrixWorld)).y <
      0.5 && (i.y = 3),
      "Driveway" === y.name && (i.y = 0),
      i.project(mainCamera),
      (r = r / 2),
      (s = s / 2),
      (n = sceneManager.getBoundingClientRect()),
      (i.x = i.x * r + r + n.left),
      (i.y = -i.y * s + s + n.top),
      (i.z = 0),
      (r = $("#popup").offset().left + $("#popup").outerWidth() / 2),
      (s = $("#popup").offset().top + $("#popup").outerHeight()),
      (e.width = a),
      (e.height = o),
      t.clearRect(0, 0, a, o),
      (t.lineWidth = 2),
      (t.strokeStyle = "#4AFF64"),
      t.beginPath(),
      t.moveTo(i.x, i.y),
      t.lineTo(r, s),
      t.stroke());
}

function Co(e, t) {
  t = t || 1;
  var a = Math.floor(Math.abs(e)),
    o = 12 * (Math.abs(e) - a);
  12 <= (o = 0 !== t ? Math.round(o * t) / t : o) && ((o -= 12), (a += 1)),
    e < 0 && ((a = -a), (o = -o));
  let i = "";
  return (
    0 !== a && (i += a + "'"),
    0 !== o && (i += " " + o + '"'),
    {
      feet: a,
      inches: o,
      friendly: i,
    }
  );
}

function Lo() {
  if (y) {
    let e = y.position.x;
    var t, a, o, i, n;
    if (
      (y.rotation.y,
        (y.rotation.y.toFixed(2) != Math.PI.toFixed(2) &&
          "porchS-clone" != y.name) ||
        (e = -e),
        (y.rotation.y.toFixed(2) != (Math.PI / 2).toFixed(2) &&
          "porchW-clone" != y.name) ||
        (e = -y.position.z),
        (y.rotation.y.toFixed(2) != (Math.PI / -2).toFixed(2) &&
          "porchE-clone" != y.name) ||
        (e = y.position.z),
        y.name.startsWith("interior")
          ? ((e = y.position.x),
            (l = Co(y.userData.toNorthWall(), 1)),
            $("#popup #zPosFt").val(l.feet),
            $("#popup #zPosIn").val(l.inches),
            $("#zpos").is(":hidden") && $("#zpos").show())
          : $("#zpos").is(":visible") && $("#zpos").hide(),
        y.name.startsWith("interiorWall")
          ? ($(
            "#popup #wallMaterial option[value='" + y.userData.material + "']"
          ).prop("selected", !0),
            $("#wallMaterialRow").is(":hidden") && $("#wallMaterialRow").show())
          : $("#wallMaterialRow").is(":visible") && $("#wallMaterialRow").hide(),
        "scal" !== y.name.substring(0, 4) &&
          "porchWrap" !== y.name.substring(0, 9)
          ? ((h = Co(e, 1)),
            $("#popup #xPosFt").val(h.feet),
            $("#popup #xPosIn").val(h.inches),
            $("#xpos").is(":hidden") && $("#xpos").show())
          : $("#xpos").is(":visible") && $("#xpos").hide(),
        y.name.startsWith("walk") ||
        y.name.startsWith("window") ||
        (y.name.startsWith("garage") &&
          ma.settings.hasOwnProperty("variableLargeDoorSizes") &&
          !ma.settings.variableLargeDoorSizes))
    ) {
      (r = y.morphTargetInfluences[y.morphTargetDictionary.width]),
        (s = y.morphTargetInfluences[y.morphTargetDictionary.height]);
      let e,
        a = [];
      y.name.startsWith("walk")
        ? ((r = y.name.endsWith("Double-clone")
          ? parseFloat(r) + 6
          : y.name.startsWith("walkDoorEquine")
            ? parseFloat(r) + 4
            : parseFloat(r) + 3),
          (s = parseFloat(s) + 7),
          (e = Math.round(12 * r) + "x" + Math.round(12 * s)),
          (a = ["36x80"]),
          y.name.startsWith("walkDoorAllGlass") && (a = ["36x84", "48x84"]),
          y.name.startsWith("walkDoorFramedOpening") &&
          (a = ["36x72", "36x84", "48x72", "48x84", "48x96"]),
          y.name.endsWith("Double-clone") && (a = ["72x84"]),
          y.name.startsWith("walkDoorEquine") &&
          ((e = "48x84"), (a = ["48x84"])),
          $("#popup #size").empty(),
          a.forEach(function (e) {
            $("#popup #size").append(
              '<option value="' + e + '">' + e + "</option>"
            );
          }),
          $("#popup #size option[value='" + e + "']").prop("selected", !0))
        : y.name.startsWith("window")
          ? ((r = Math.round(100 * parseFloat(r)) / 100 + 1),
            (s = Math.round(100 * parseFloat(s)) / 100 + 1),
            (e = r + "x" + s),
            (currentValueStringConvertedToInches =
              Math.round(12 * r) + "x" + Math.round(12 * s)),
            (currentValueStringConvertedToFeetAndInches = bi(r, !0).replace(
              " ",
              ""
            )).endsWith("'") &&
            (currentValueStringConvertedToFeetAndInches += "0"),
            (currentValueStringConvertedToFeetAndInches +=
              " x " + bi(s, !0).replace(" ", "")).endsWith("'") &&
            (currentValueStringConvertedToFeetAndInches += "0"),
            y.name.startsWith("windowPicture") && (a = ["5'0\" x 4'0\""]),
            y.name.startsWith("windowSlider") &&
            ((a = ["3x4", "4x3"]), isGlassMode) &&
            (a = [
              "3'4\" x 2'0\"",
              "3'4\" x 3'0\"",
              "4'4\" x 2'0\"",
              "4'4\" x 2'9\"",
              "4'4\" x 3'0\"",
              "4'4\" x 4'0\"",
              "5'4\" x 2'0\"",
              "5'4\" x 3'0\"",
              "5'4\" x 4'0\"",
              "5'4\" x 5'0\"",
              "6'4\" x 2'0\"",
              "6'4\" x 3'0\"",
              "6'4\" x 4'0\"",
              "6'4\" x 5'0\"",
            ]),
            y.name.startsWith("windowHopper") && (a = ["2x6", "3x4"]),
            y.name.startsWith("windowDoubleHung") && (a = ["3x4", "4x3"]),
            y.name.startsWith("windowSingleHung") && (a = ["3x3", "3x4", "3x5"]),
            y.name.startsWith("windowSlope") &&
            (a = [
              "3x3",
              "3x4",
              "4x3",
              "4x4",
              "5x3",
              "5x4",
              "6x3",
              "6x4",
              "8x3",
              "8x4",
              "10x3",
              "10x4",
            ]),
            y.name.startsWith("windowLouver") && (a = ["2x2", "4x2"]),
            y.name.startsWith("windowFramedOpening") &&
            (a = [
              "2x3",
              "2x4",
              "2x5",
              "3x3",
              "3x4",
              "3x5",
              "3x6",
              "4x3",
              "4x4",
              "4x5",
              "4x6",
              "5x3",
              "5x4",
              "5x5",
              "5x6",
              "5x7",
            ]),
            $("#popup #size").empty(),
            a.forEach(function (e, t) {
              $("#popup #size").append(
                '<option value="' + e.replace(/"/g, "") + '">' + e + "</option>"
              ),
                (a[t] = e.replaceAll('"', ""));
            }),
            a.includes(e)
              ? $('#popup #size option[value="' + e + '"]').prop("selected", !0)
              : a.includes(currentValueStringConvertedToInches)
                ? $(
                  '#popup #size option[value="' +
                  currentValueStringConvertedToInches +
                  '"]'
                ).prop("selected", !0)
                : a.includes(
                  currentValueStringConvertedToFeetAndInches.replace(/"/g, "")
                )
                  ? $(
                    '#popup #size option[value="' +
                    currentValueStringConvertedToFeetAndInches.replace(/"/g, "") +
                    '"]'
                  ).prop("selected", !0)
                  : console.log("Window size not valid"))
          : y.name.startsWith("garage") &&
          ((r = Math.round(10 * parseFloat(r)) / 10 + 1),
            (s = Math.round(10 * parseFloat(s)) / 10 + 1),
            (e = r + "x" + s),
            y.name.startsWith("garage") &&
            (a = [
              "8x8",
              "9x8",
              "10x8",
              "16x7",
              "16x8",
              "10x10",
              "10x12",
              "12x12",
              "12x14",
              "14x12",
              "14x14",
            ]),
            y.name.startsWith("garageOverhead") &&
            (a = [
              "8x8",
              "9x8",
              "10x8",
              "16x7",
              "16x8",
              "10x10",
              "10x12",
              "12x12",
              "12x14",
              "14x12",
              "14x14",
            ]),
            y.name.startsWith("garageRollUp") &&
            (a = [
              "8x8",
              "9x7",
              "9x8",
              "16x8",
              "10x10",
              "10x12",
              "12x12",
              "12x14",
              "14x12",
              "14x14",
            ]),
            y.name.startsWith("garageFramedOpen") &&
            (a = [
              "8x8",
              "9x8",
              "10x8",
              "16x7",
              "16x8",
              "10x10",
              "10x12",
              "12x12",
              "12x14",
              "14x12",
              "14x14",
              "16x16",
              "18x16",
            ]),
            $("#popup #size").empty(),
            a.forEach(function (e) {
              $("#popup #size").append(
                '<option value="' + e + '">' + e + "</option>"
              );
            }),
            $("#popup #size option[value='" + e + "']").prop("selected", !0)),
        $("#sizeRow").is(":hidden") && $("#sizeRow").show();
    } else $("#sizeRow").is(":visible") && $("#sizeRow").hide();
    if (
      (isGlassMode && !y.name.startsWith("mansard")
        ? (y.name.startsWith("interior") ||
          "porc" === y.name.substring(0, 4) ||
          "walk" === y.name.substring(0, 4) ||
          "gara" === y.name.substring(0, 4) ||
          "scal" === y.name.substring(0, 4)
          ? $("#yposTop").is(":visible") && $("#yposTop").hide()
          : ((h = Co(y.position.y + s / 2, 1)),
            $("#popup #yPosTopFt").val(h.feet),
            $("#popup #yPosTopIn").val(h.inches),
            $("#yposTop").is(":hidden") && $("#yposTop").show()),
          $("#ypos").is(":visible") && $("#ypos").hide())
        : (y.name.startsWith("interior") ||
          "porc" === y.name.substring(0, 4) ||
          "walk" === y.name.substring(0, 4) ||
          "gara" === y.name.substring(0, 4) ||
          "scal" === y.name.substring(0, 4)
          ? $("#ypos").is(":visible") && $("#ypos").hide()
          : ((h = Co(y.position.y, 1)),
            $("#popup #yPosFt").val(h.feet),
            $("#popup #yPosIn").val(h.inches),
            $("#ypos").is(":hidden") && $("#ypos").show()),
          $("#yposTop").is(":visible") && $("#yposTop").hide()),
        ("walk" !== y.name.substring(0, 4) &&
          !y.name.startsWith("interiorDoor")) ||
          y.name.startsWith("walkDoorFramedOpening")
          ? $("#doorSwingButton").is(":visible") && $("#doorSwingButton").hide()
          : $("#doorSwingButton").is(":hidden") && $("#doorSwingButton").show(),
        y.name.startsWith("porch")
          ? $("#copyButton").is(":visible") && $("#copyButton").hide()
          : $("#copyButton").is(":hidden") && $("#copyButton").show(),
        y.name.startsWith("interior") ||
          (y.name.startsWith("scale") && !y.name.startsWith("scale-driveway"))
          ? $("#rotateRow").is(":hidden") && $("#rotateRow").show()
          : $("#rotateRow").is(":visible") && $("#rotateRow").hide(),
        "porchWrap" === y.name.substring(0, 9)
          ? $("#zsca").is(":hidden") && $("#zsca").show()
          : $("#zsca").is(":visible") && $("#zsca").hide(),
        "porc" === y.name.substring(0, 4))
    ) {
      var r = y.morphTargetInfluences[y.morphTargetDictionary.width],
        s = y.morphTargetInfluences[y.morphTargetDictionary.height],
        l = y.morphTargetInfluences[y.morphTargetDictionary.slope],
        h = y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] + 10,
        c = y.morphTargetInfluences[y.morphTargetDictionary.porchDepth] + 10,
        d = (12 * l) / c + 3.5,
        p = 12 * y.morphTargetInfluences[y.morphTargetDictionary.Overhang],
        m = y.morphTargetInfluences[y.morphTargetDictionary.miters],
        g = false,
        u = false,
        T = false;
      y.name.startsWith("porchWrapHip")
        ? (r = Math.round(100 * parseFloat(r)) / 100 + c) < c &&
        ((r = c),
          (y.morphTargetInfluences[y.morphTargetDictionary.width] = r - c))
        : (r = Math.round(100 * parseFloat(r)) / 100 + 10),
        (s = Math.round(100 * parseFloat(s)) / 100 + 13.5 + l),
        (m = 0.5 < m);
      for (let e = 0; e < y.material.length; e++)
        "PorchPosts" === y.material[e].name &&
          (g =
            y.material[e].color.getHex() != baseColor.getHex() &&
            y.material[e].color.getHex() != trimColor.getHex()),
          "PorchPostsMetal" === y.material[e].name &&
          (u = y.material[e].visible);
      var l = y.getObjectByName("concrete");
      l && l.visible && (T = !0),
        r < -0.2 && (r = -0.2),
        s < -0.4 && (s = -0.4),
        (i = Math.floor(r)),
        (n = Math.round(12 * (r - i))),
        $("#popup #xScaFt").val(i),
        $("#popup #xScaIn").val(n),
        (a = Math.floor(s)),
        (l = Math.round(12 * (s - a))),
        $("#popup #yScaFt").val(a),
        $("#popup #yScaIn").val(l),
        $("#xsca").is(":hidden") && $("#xsca").show(),
        $("#ysca").is(":hidden") && $("#ysca").show(),
        $("#xsca .inches").is(":hidden") && $("#xsca .inches").show(),
        $("#ysca .inches").is(":hidden") && $("#ysca .inches").show(),
        $("#popup #ceilingHeight option[value='" + h + "']").prop(
          "selected",
          !0
        ),
        $("#popup #porchDepth option[value='" + c + "']").prop("selected", !0),
        $("#popup #porchPitch option[value='" + d + "']").prop("selected", !0),
        $("#popup #porchOverhang option[value='" + p + "']").prop(
          "selected",
          !0
        ),
        $("#popup #miter").prop("checked", m),
        $("#popup #wrap").prop("checked", g),
        $("#popup #posts").prop("checked", u),
        $("#popup #concrete").prop("checked", T),
        ma.allowLeanToCeilingHeight
          ? $("#ceilingHeightRow").show()
          : $("#ceilingHeightRow").hide(),
        $("#porchPitchRow").is(":hidden") && $("#porchPitchRow").show(),
        $("#porchDepthRow").is(":hidden") && $("#porchDepthRow").show(),
        $("#porchOverhangRow").is(":hidden") && $("#porchOverhangRow").show(),
        $("#popup #miterRow").is(":hidden") && $("#popup #miterRow").show(),
        $("#popup #wrapRow").is(":hidden") && $("#popup #wrapRow").show(),
        $("#popup #postsRow").is(":hidden") && $("#popup #postsRow").show(),
        $("#popup #concreteRow").is(":hidden") &&
        $("#popup #concreteRow").show(),
        $("#popup #postsRow").is(":visible") && $("#popup #postsRow").hide(),
        $("#popup #concreteRow").is(":visible") &&
        $("#popup #concreteRow").hide(),
        "porchWrap" === y.name.substring(0, 9)
          ? ((t = y.morphTargetInfluences[y.morphTargetDictionary.depth]),
            y.name.startsWith("porchWrapHip")
              ? (t = Math.round(100 * parseFloat(t)) / 100 + c) < c &&
              ((t = c),
                (y.morphTargetInfluences[y.morphTargetDictionary.depth] =
                  t - c))
              : (t = Math.round(100 * parseFloat(t)) / 100 + 10),
            (t = t < -0.2 ? -0.2 : t) < -0.2 && (t = -0.2),
            (o = Math.floor(t)),
            (l = Math.round(12 * (t - o))),
            $("#popup #zScaFt").val(o),
            $("#popup #zScaIn").val(l),
            $("#zsca").is(":hidden") && $("#zsca").show(),
            $("#zsca .inches").is(":hidden") && $("#zsca .inches").show())
          : $("#zsca").is(":visible") && $("#zsca").hide();
    } else
      "gara" === y.name.substring(0, 4)
        ? ((r = y.morphTargetInfluences[y.morphTargetDictionary.width]),
          (s = y.morphTargetInfluences[y.morphTargetDictionary.height]),
          (r = Math.round(2e3 * parseFloat(r)) / 100 + 10) < -0.2 && (r = -0.2),
          (s = Math.round(1e3 * parseFloat(s)) / 100 + 10) < -0.4 && (s = -0.4),
          (ma.settings.hasOwnProperty("variableLargeDoorSizes") &&
            !ma.settings.variableLargeDoorSizes) ||
          ((i = Math.floor(r)),
            $("#popup #xScaFt").val(i),
            (a = Math.floor(s)),
            $("#popup #yScaFt").val(a),
            $("#xsca").is(":hidden") && $("#xsca").show(),
            $("#ysca").is(":hidden") && $("#ysca").show()),
          $("#xsca .inches").is(":visible") && $("#xsca .inches").hide(),
          $("#ysca .inches").is(":visible") && $("#ysca .inches").hide())
        : y.name.startsWith("mansard")
          ? ((r = y.morphTargetInfluences[y.morphTargetDictionary.width]),
            (s = y.morphTargetInfluences[y.morphTargetDictionary.height]),
            (t = y.morphTargetInfluences[y.morphTargetDictionary.depth]),
            (r = y.name.startsWith("mansardHip")
              ? Math.round(100 * parseFloat(r)) / 100 + 5
              : Math.round(100 * parseFloat(r)) / 100 + 1) < 0 && (r = 0),
            (s = Math.round(100 * parseFloat(s)) / 100 + 2) < 0 && (s = 0),
            (t = Math.round(100 * parseFloat(t)) / 100 + 2) < 0 && (t = 0),
            (i = Math.floor(r)),
            (a = Math.floor(s)),
            (o = Math.floor(t)),
            $("#popup #xScaFt").val(i),
            $("#popup #yScaFt").val(a),
            $("#popup #zScaFt").val(o),
            $("#xsca").is(":hidden") && $("#xsca").show(),
            $("#zsca").is(":hidden") && $("#zsca").show(),
            $("#ysca").is(":hidden") && $("#ysca").show(),
            $("#xsca .inches").is(":visible") && $("#xsca .inches").hide(),
            $("#ysca .inches").is(":visible") && $("#ysca .inches").hide(),
            $("#zsca .inches").is(":visible") && $("#zsca .inches").hide())
          : ("interiorWall-clone" === y.name
            ? ((h = y.scale.x),
              (i = Math.floor(h)),
              (n = Math.round(12 * (h - i))),
              $("#popup #xScaFt").val(i),
              $("#popup #xScaIn").val(n),
              $("#xsca").is(":hidden") && $("#xsca").show(),
              $("#xsca .inches").is(":hidden") && $("#xsca .inches").show())
            : $("#xsca").is(":visible") && $("#xsca").hide(),
            $("#ysca").is(":visible") && $("#ysca").hide(),
            $("#zsca").is(":visible") && $("#zsca").hide()),
        $("#ceilingHeightRow").is(":visible") && $("#ceilingHeightRow").hide(),
        $("#porchPitchRow").is(":visible") && $("#porchPitchRow").hide(),
        $("#porchDepthRow").is(":visible") && $("#porchDepthRow").hide(),
        $("#porchOverhangRow").is(":visible") && $("#porchOverhangRow").hide(),
        $("#popup #miterRow").is(":visible") && $("#popup #miterRow").hide(),
        $("#popup #wrapRow").is(":visible") && $("#popup #wrapRow").hide(),
        $("#popup #postsRow").is(":visible") && $("#popup #postsRow").hide(),
        $("#popup #concreteRow").is(":visible") &&
        $("#popup #concreteRow").hide();
    if (
      ("scal" == y.name.substring(0, 4)
        ? $("#updateItemButton").is(":visible") && $("#updateItemButton").hide()
        : $("#updateItemButton").is(":hidden") && $("#updateItemButton").show(),
        "lean" == y.name.substring(0, 4)
          ? $("#popup #enclosedRow").is(":hidden") &&
          $("#popup #enclosedRow").show()
          : $("#popup #enclosedRow").is(":visible") &&
          $("#popup #enclosedRow").hide(),
        !y.name.startsWith("window") ||
        y.name.startsWith("windowFramedOpening") ||
        y.name.startsWith("windowLouver") ||
        y.name.startsWith("windowSlope"))
    )
      $("#popup #gridRow").is(":visible") && $("#popup #gridRow").hide(),
        $("#popup #shuttersRow").is(":visible") &&
        $("#popup #shuttersRow").hide();
    else {
      $("#popup #gridRow").is(":visible") && $("#popup #gridRow").hide(),
        $("#popup #shuttersRow").is(":visible") &&
        $("#popup #shuttersRow").hide();
      let t, a;
      for (let e = 0; e < y.material.length; e++)
        "WindowGrid" === y.material[e].name && (t = y.material[e].visible),
          "Shutters" === y.material[e].name && (a = y.material[e].visible);
      $("#popup #grid").prop("checked", t),
        $("#popup #shutters").prop("checked", a);
    }
  }
}

function No(e) {
  e = e || false;
  var t,
    a,
    o,
    i,
    n,
    r,
    s,
    l,
    h = 0,
    c = 0,
    d = 0,
    p = 0,
    m = 0,
    g = 0;
  if (
    ($("#popup #porchDepthRow").is(":visible") &&
      ((i = parseFloat($("#popup #porchDepth option:selected").val())),
        (y.userData.porchDepth = i),
        "porch" === y.name.substring(0, 5)) &&
      (y.morphTargetInfluences[y.morphTargetDictionary.porchDepth] = i - 10),
      $("#popup #porchPitchRow").is(":visible") &&
      ((n = parseFloat($("#popup #porchPitch option:selected").val())),
        y.name.startsWith("porch")) &&
      ((g = ((n - 3.5) / 12) * i),
        (y.userData.porchPitch = n),
        (y.morphTargetInfluences[y.morphTargetDictionary.slope] = g)),
      $("#popup #xpos").is(":visible") &&
      ((n =
        parseFloat($("#popup #xPosFt").val()) +
        parseFloat($("#popup #xPosIn").val() / 12)),
        y.name.startsWith("interior")
          ? ((y.userData.toBuildingCenter = n),
            (y.position.x = n),
            (y.userData.position.x = n))
          : (0 == y.rotation.y &&
            "porchS-clone" !== y.name &&
            "porchE-clone" !== y.name &&
            "porchW-clone" !== y.name &&
            ((y.position.x = n), (y.userData.position.x = n)),
            (y.rotation.y.toFixed(2) != Math.PI.toFixed(2) &&
              "porchS-clone" != y.name) ||
            ((y.position.x = -n), (y.userData.position.x = -n)),
            (y.rotation.y.toFixed(2) != (Math.PI / 2).toFixed(2) &&
              "porchW-clone" != y.name) ||
            ((y.position.z = -n), (y.userData.position.z = -n)),
            (y.rotation.y.toFixed(2) != (Math.PI / -2).toFixed(2) &&
              "porchE-clone" != y.name) ||
            ((y.position.z = n), (y.userData.position.z = n)))),
      $("#popup #zpos").is(":visible") &&
      ((n =
        parseFloat($("#popup #zPosFt").val()) +
        parseFloat($("#popup #zPosIn").val() / 12)),
        y.name.startsWith("interior")) &&
      y.userData.toNorthWall(n),
      $("#popup #ypos").is(":visible") &&
      ((h =
        parseFloat($("#popup #yPosFt").val()) +
        parseFloat($("#popup #yPosIn").val() / 12)),
        (y.position.y = h),
        (y.userData.position.y = h)),
      $("#popup #yposTop").is(":visible") &&
      ((h =
        parseFloat($("#popup #yPosTopFt").val()) +
        parseFloat($("#popup #yPosTopIn").val() / 12) -
        (y.morphTargetInfluences[y.morphTargetDictionary.height] + 1) / 2),
        (y.position.y = h),
        (y.userData.position.y = h)),
      $("#popup #sizeRow").is(":visible") &&
      ((n = $("#popup #size").val().split("x")),
        (c = parseFloat(n[0])),
        y.name.startsWith("window")
          ? (n[0].includes("'")
            ? ((h = n[0].split("'")),
              (c = parseInt(h[0])),
              /\d/.test(h[1]) &&
              (h[1].includes("/")
                ? ((l = h[1].split("-")),
                  (r = parseInt(l[0].replace(/\D/g, ""))),
                  (l = l[1].split("/")),
                  (s = parseInt(l[0].replace(/\D/g, ""))),
                  (l = parseInt(l[1].replace(/\D/g, ""))),
                  (c += (r + s / l) / 12))
                : (c += parseInt(h[1].replace(/\D/g, "")) / 12)))
            : 20 < c && (c /= 12),
            (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1),
            (y.userData.scale.x = c),
            y.name.startsWith("windowSlope") &&
            (y.morphTargetInfluences[y.morphTargetDictionary.slope] =
              (ma.roofPitch / 12) * c))
          : y.name.startsWith("walk") &&
          ((c = parseFloat((c / 12).toFixed(2))),
            (y.morphTargetInfluences[y.morphTargetDictionary.width] =
              4 < c ? c - 6 : c - 3),
            (y.userData.scale.x = c)),
        1 < n.length) &&
      ((d = parseFloat(n[1])),
        y.name.startsWith("window")
          ? (n[1].includes("'") &&
            ((r = n[1].split("'")), (d = parseInt(r[0])), /\d/.test(r[1])) &&
            (r[1].includes("/")
              ? ((s = r[1].split("-")),
                (l = parseInt(s[0].replace(/\D/g, ""))),
                (h = s[1].split("/")),
                (d +=
                  (l +
                    parseInt(h[0].replace(/\D/g, "")) /
                    parseInt(h[1].replace(/\D/g, ""))) /
                  12))
              : (d += parseInt(r[1].replace(/\D/g, "")) / 12)),
            20 < d && (d /= 12),
            (y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 1))
          : y.name.startsWith("walk") &&
          ((d = parseFloat((d / 12).toFixed(2))),
            (y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 7)),
        (y.userData.scale.y = d)),
      $("#popup #xsca").is(":visible") &&
      ((c = parseFloat($("#popup #xScaFt").val())),
        $("#popup #xScaIn").is(":visible") &&
        (c += parseFloat($("#popup #xScaIn").val() / 12)),
        y.name.startsWith("window") &&
        (4 < (c = c < 3 ? 3 : c) && (c = 4),
          (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1)),
        "gara" === y.name.substring(0, 4) &&
        ((c = Math.round(c)),
          y.name.startsWith("garageSlideMortonThreeStackCrossbuck") &&
            (y.name.endsWith("Right-clone") || y.name.endsWith("Left-clone"))
            ? 6 < (c = c < 6 ? 6 : c) && (c = 6)
            : y.name.startsWith("garageSlideMortonThreeStackCrossbuck")
              ? 12 < (c = c < 12 ? 12 : c) && (c = 12)
              : y.name.startsWith("garageSlideMorton") &&
                (y.name.endsWith("Right-clone") || y.name.endsWith("Left-clone"))
                ? 7 < (c = c < 5 ? 5 : c) && (c = 7)
                : y.name.startsWith("garageSlideMorton")
                  ? 14 < (c = c < 10 ? 10 : c) && (c = 14)
                  : y.name.startsWith("garageSlide")
                    ? (c = c < 8 ? 8 : c) > Math.min(ma.width / 2, 24) &&
                    (c = Math.min(ma.width / 2, 24))
                    : y.name.startsWith("garageBiFold") ||
                      y.name.startsWith("garageHydraulic")
                      ? (c = c < 8 ? 8 : c) > ma.width - 4 && (c = ma.width - 4)
                      : 16 < (c = c < 6 ? 6 : c) && (c = 16),
          (y.name.startsWith("garageBiFold") ||
            y.name.startsWith("garageHydraulic")) &&
          y.material.forEach(function (e) {
            null !== e.normalMap &&
              e.normalMap.hasOwnProperty("image") &&
              e.normalMap.image.src.endsWith(materialLibrary) &&
              "BuildingWalls" == e.name &&
              e.normalMap.repeat.set(c * activeMaterial, 1);
          }),
          y.name.startsWith("garageSlide") &&
          y.material.forEach(function (e) {
            null !== e.normalMap &&
              e.normalMap.hasOwnProperty("image") &&
              e.normalMap.image.src.endsWith(materialLibrary) &&
              "BuildingWalls" == e.name &&
              e.normalMap.repeat.set((c / 2) * activeMaterial, 1);
          }),
          (y.morphTargetInfluences[y.morphTargetDictionary.width] =
            (c - 10) / 20)),
        "porc" === y.name.substring(0, 4) &&
        (y.name.startsWith("porchWrapHip")
          ? (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - i)
          : (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 10)),
        y.name.startsWith("mansard")
          ? y.name.startsWith("mansardHip")
            ? (c < 5 && (c = 5),
              (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 5))
            : (c < 3 && (c = 3),
              (y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1))
          : y.name.startsWith("interiorWall") && (y.scale.x = c),
        (y.userData.width = c),
        (y.userData.scale.x = c)),
      $("#popup #ysca").is(":visible") &&
      ((d =
        parseFloat($("#popup #yScaFt").val()) +
        parseFloat($("#popup #yScaIn").val() / 12)),
        y.name.startsWith("window") &&
        (4 < (d = d < 3 ? 3 : d) && (d = 4),
          (y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 1)),
        "gara" === y.name.substring(0, 4) &&
        ((d = Math.round(d)),
          y.name.startsWith("garageSlideMortonThreeStackCrossbuck")
            ? 14 < (d = d < 14 ? 14 : d) && (d = 14)
            : y.name.startsWith("garageSlideMortonThreeStack")
              ? 12 < (d = d < 11 ? 11 : d) && (d = 12)
              : y.name.startsWith("garageSlideMorton")
                ? 10 < (d = d < 8 ? 8 : d) && (d = 10)
                : y.name.startsWith("garageSlide") ||
                  y.name.startsWith("garageBiFold") ||
                  y.name.startsWith("garageHydraulic")
                  ? (28 < (d = d < 7 ? 7 : d) && (d = 28),
                    isGlassMode
                      ? (y.name.startsWith("garageSlide") &&
                        d > ma.height &&
                        (d = ma.height),
                        (y.name.startsWith("garageBiFold") ||
                          y.name.startsWith("garageHydraulic")) &&
                        d > ma.height - 0.666 &&
                        (d = ma.height - 0.666))
                      : Math.abs(y.rotation.y) < 0.1 || 3 < Math.abs(y.rotation.y)
                        ? d > ma.height && (d = ma.height)
                        : d > ma.roofHeightAtX(y.position.x) - 1 &&
                        (d = ma.roofHeightAtX(y.position.x) - 1))
                  : (14 < (d = d < 6 ? 6 : d) && (d = 14),
                    isGlassMode
                      ? d > ma.height - 2 && (d = ma.height - 2)
                      : d > ma.height - 1 && (d = ma.height - 1)),
          (y.morphTargetInfluences[y.morphTargetDictionary.height] =
            (d - 10) / 10)),
        "porc" === y.name.substring(0, 4) &&
        (d > ma.height && (d = ma.height),
          (y.morphTargetInfluences[y.morphTargetDictionary.height] =
            d - 13.5 - g)),
        y.name.startsWith("mansard") &&
        (3 < (d = d < 2 ? 2 : d) && (d = 3),
          (y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 2)),
        (y.userData.height = d),
        (y.userData.scale.y = d)),
      $("#popup #zsca").is(":visible") &&
      ((p =
        parseFloat($("#popup #zScaFt").val()) +
        parseFloat($("#popup #zScaIn").val() / 12)),
        "porchWrap" === y.name.substring(0, 9) &&
        (y.name.startsWith("porchWrapHip")
          ? (y.morphTargetInfluences[y.morphTargetDictionary.depth] = p - i)
          : (y.morphTargetInfluences[y.morphTargetDictionary.depth] = p - 10)),
        y.name.startsWith("mansard") &&
        (3 < (p = p < 2 ? 2 : p) && (p = 3),
          (y.morphTargetInfluences[y.morphTargetDictionary.depth] = p - 2)),
        (y.userData.depth = p),
        (y.userData.scale.z = p)),
      y.name.startsWith("mansard") && updateNormalMapTextureRepeats(y),
      $("#popup #wallMaterialRow").is(":visible") &&
      ((y.userData.material = $("#popup #wallMaterial option:selected").val()),
        go()),
      $("#popup #gridRow").is(":visible"))
  ) {
    t = $("#popup #grid").is(":checked");
    for (let e = 0; e < y.material.length; e++)
      "WindowGrid" === y.material[e].name && (y.material[e].visible = t);
  }
  if ($("#popup #shuttersRow").is(":visible")) {
    a = $("#popup #shutters").is(":checked");
    for (let e = 0; e < y.material.length; e++)
      "Shutters" === y.material[e].name &&
        ((y.material[e].visible = a),
          (y.morphTargetInfluences[y.morphTargetDictionary.hideShutters] =
            0 == a ? 1 : 0));
  }
  if (
    ($("#popup #miterRow").is(":visible") &&
      ((n = $("#popup #miter").is(":checked")),
        (y.userData.postMiter = n),
        (y.morphTargetInfluences[y.morphTargetDictionary.miters] =
          !0 === n ? 1 : 0)),
      $("#popup #wrapRow").is(":visible"))
  )
    if (
      ((s = $("#popup #wrap").is(":checked")), !0 === (y.userData.postWrap = s))
    )
      for (let e = 0; e < y.material.length; e++)
        "PorchPosts" === y.material[e].name &&
          (y.material[e].color.setStyle(
            colorOptions
              .filter((e) => e.name === ma.trimColor)
              .map((e) => e.hex)
          ),
            y.material[e].specular.setHex(3947580),
            (y.material[e].shininess.value = 40));
    else
      for (let e = 0; e < y.material.length; e++)
        "PorchPosts" === y.material[e].name &&
          (y.material[e].color.copy(baseColor),
            y.material[e].specular.setHex(5394505),
            (y.material[e].shininess.value = 15));
  if ($("#popup #postsRow").is(":visible")) {
    (o = $("#popup #posts").is(":checked")), (y.userData.posts = o);
    for (let e = 0; e < y.material.length; e++)
      ("PorchPosts" !== y.material[e].name &&
        "PorchPostsMetal" !== y.material[e].name) ||
        (!ma.settings.woodenPorchPosts &&
          "PorchPostsMetal" !== y.material[e].name) ||
        (y.material[e].visible = o);
  }
  $("#popup #concreteRow").is(":visible") &&
    ((l = $("#popup #concrete").is(":checked")),
      (y.userData.concrete = l),
      ((h = y.getObjectByName("concrete")).visible = l),
      (h.scale.x = c),
      y.name.startsWith("porchWrap")
        ? ((h.scale.x = c + i),
          (h.scale.z = p + i),
          (h.position.x = (c + i) / 2 - c),
          (h.position.z = (p + i) / 2 - p))
        : (h.scale.z = i)),
    $("#popup #porchOverhangRow").is(":visible") &&
    ((r = parseFloat($("#popup #porchOverhang option:selected").val()) / 12),
      (y.userData.porchOverhang =
        parseFloat($("#popup #porchOverhang option:selected").val()) / 12),
      "porch" === y.name.substring(0, 5)) &&
    (y.morphTargetInfluences[y.morphTargetDictionary.Overhang] = r),
    ma.allowLeanToCeilingHeight && $("#popup #ceilingHeightRow").is(":visible")
      ? ((m =
        parseFloat($("#popup #ceilingHeight option:selected").val()) - 10),
        (y.userData.ceilingHeight = parseFloat(
          $("#popup #ceilingHeight option:selected").val()
        )),
        "porch" === y.name.substring(0, 5) &&
        (y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] = m))
      : !ma.allowLeanToCeilingHeight &&
      y.name.startsWith("porch") &&
      ((m = d - (y.userData.porchDepth * y.userData.porchPitch) / 12 - 0.25),
        (y.userData.ceilingHeight = m),
        (y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] =
          m - 10 - 4 / 12)),
    "porch" === y.name.substring(0, 5) && (Ja(y.name), Ka(y)),
    Yo(y),
    e && jo(),
    (isMaterialUpdateEnabled = !0);
}

function jo() {
  (lastSelectedMaterial = y), (y = null), $("#popup").hide(), $("#line").hide();
}

function zo() {
  let e = 1,
    t = 1;
  return (
    void 0 !== sceneManager &&
    ((e = sceneManager.clientWidth), (t = sceneManager.clientHeight)),
    {
      x: e,
      y: t,
      aspectRatio: e / t,
    }
  );
}

function ko() {
  var e = document.getElementById("help"),
    t = document.getElementById("overlay");
  0 < e.style.opacity
    ? ((t.style.pointerEvents = "none"),
      (e.style.pointerEvents = "none"),
      (t.style.opacity = 0),
      (e.style.opacity = 0),
      (t.style.display = "none"),
      (e.style.display = "none"))
    : ((t.style.display = "block"),
      (e.style.display = "block"),
      (t.style.pointerEvents = "auto"),
      (e.style.pointerEvents = "auto"),
      (t.style.opacity = 0.8),
      (e.style.opacity = 1));
}

function Io() {
  var e = document.getElementById("help"),
    t = document.getElementById("overlay");
  (t.style.pointerEvents = "none"),
    (e.style.pointerEvents = "none"),
    (t.style.opacity = 0),
    (e.style.opacity = 0),
    (t.style.display = "none"),
    (e.style.display = "none");
}

function Fo() {
  var t = "",
    a = "ACDEFHJKLMNPQRTUVWXYabcdefghijkmnpqrstuvwxy3479_-",
    o = 12 + Math.floor(4 * Math.random());
  for (let e = 0; e < o; e++)
    t += a.charAt(Math.floor(Math.random() * a.length));
  return t;
}

function Go() {
  var e, t, a;
  lightGroup.hasOwnProperty("left") &&
    mainCamera == lightGroup &&
    ((e = orbitControls.getSize(new THREE.Vector2())),
      (t = sceneManager.clientWidth),
      (a = sceneManager.clientHeight),
      e.x !== t || e.y !== a) &&
    1 <= t &&
    1 <= a &&
    (orbitControls.setSize(t, a, false),
      (lightGroup.left = -t / 2),
      (lightGroup.right = t / 2),
      (lightGroup.top = a / 2),
      (lightGroup.bottom = -a / 2),
      lightGroup.updateProjectionMatrix());
}

function _o() {
  for (; uiOverlay.children.length;) uiOverlay.remove(uiOverlay.children[0]);
  (isQuiet = false), (isMaterialUpdateEnabled = !0);
}

function $o(t) {
  if (((t = t || false), 2 !== isQuiet)) {
    var a = sceneRoot.getObjectByName("measureMarker").clone(),
      o = Vo(12);
    if (
      ((a.visible = !0),
        (a.name = "measurementStart-" + o),
        (a.userData.id = o),
        (a.userData.point = "start"),
        (a.userData.distance = 0),
        (a.userData.otherEndPoint = null),
        (a.userData.line = null),
        (a.userData.text = null),
        Xo(a),
        a.position.set(0, -2, 0),
        !(isQuiet = !0) !== t)
    ) {
      (isQuiet = 2),
        (o = t.userData.id),
        (a.name = "measurementEnd-" + o),
        (a.userData.point = "end"),
        (a.userData.otherEndPoint = t),
        (Ia = !0),
        (t.userData.otherEndPoint = a);
      var i = new THREE.LineBasicMaterial({
        color: 16776960,
        linewidth: 2,
      }),
        n = new THREE.Geometry(),
        r =
          (n.vertices.push(
            new THREE.Vector3(t.position.x, t.position.y, t.position.z)
          ),
            n.vertices.push(
              new THREE.Vector3(t.position.x, t.position.y, t.position.z)
            ),
            new THREE.Line(n, i));
      (r.frustumCulled = false),
        (a.userData.line = r),
        (t.userData.line = r),
        uiOverlay.add(r),
        (n = new THREE.PlaneGeometry(1, 1, 1)),
        (i = new THREE.MeshBasicMaterial({
          color: "#FFFFFF",
          name: "text",
        }));
      let e = new THREE.Mesh(n, i);
      (e.name = "measurementText-" + o),
        (e.userData.startingPoint = t),
        (e.userData.endingPoint = a),
        (e.userData.line = r),
        e.position.set(0, 1.1, 0),
        (e.onBeforeRender = function () {
          e.quaternion.copy(mainCamera.quaternion);
        }),
        uiOverlay.add(e),
        qo(0, e),
        (a.userData.text = e),
        (t.userData.text = e);
    }
    uiOverlay.add(a), (lastSelectedMaterial = y), (y = a);
  } else isQuiet = false;
  isMaterialUpdateEnabled = !0;
}

function Ao(e) {
  var t, a;
  null !== e.userData.otherEndPoint &&
    ((a = e.userData.line),
      (t = e.userData.otherEndPoint),
      a.geometry.vertices[0].set(e.position.x, e.position.y, e.position.z),
      a.geometry.vertices[1].set(t.position.x, t.position.y, t.position.z),
      (a.geometry.verticesNeedUpdate = !0),
      (a.geometry.lineDistancesNeedUpdate = !0),
      (a = Math.round(100 * t.position.distanceTo(e.position)) / 100),
      (e.userData.distance = a),
      qo((t.userData.distance = a), e.userData.text));
}

function qo(t, a) {
  "number" == typeof t
    ? (t = bi(t))
    : "boolean" == typeof t && (t = t ? "true" : "false"),
    new THREE.FontLoader().load(
      assetBaseUrl + "fonts/helvetiker_regular.typeface.json",
      function (e) {
        e = new THREE.TextGeometry(t + "'", {
          font: e,
          size: 1,
          height: 0,
          curveSegments: 2,
          bevelEnabled: false,
        });
        e.center(),
          a.hasOwnProperty("parent") &&
          a.parent === uiOverlay &&
          (a.geometry.dispose(), (a.geometry = e));
      }
    ),
    a.position.set(
      (a.userData.startingPoint.position.x +
        a.userData.endingPoint.position.x) /
      2,
      1.1,
      (a.userData.startingPoint.position.z +
        a.userData.endingPoint.position.z) /
      2
    );
}

function Vo(e, t) {
  (!e || e < 12) && (e = 12),
    (t = t || 4),
    (e += Math.floor(Math.random() * t));
  t = Date.now().toString().replace(/.(.)?/g, "$1").split("").join("");
  let a =
    Math.floor(1e3 + 9e3 * Math.random())
      .toString()
      .substring(0, 4) + t.substr(t.length - 4);
  for (
    var o = "ACDEFHJKLMNPQRTUVWXYabcdefghijkmnpqrstuvwxy3479",
    i = o.length,
    n = 8;
    n <= e;
    n++
  )
    a += o.charAt(Math.floor(Math.random() * i));
  return (a = a
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join(""));
}

function Qo() {
  sceneRoot.traverse(function (e) {
    e instanceof THREE.BoxHelper &&
      (e.name.startsWith("itemBoundingBox") &&
        e.parent !== y &&
        0 !== e.material.opacity
        ? (e.material.color.set(13421772),
          (e.material.opacity = 0),
          (isMaterialUpdateEnabled = !0))
        : e.name.startsWith("itemBoundingBox") &&
        e.parent === y &&
        (e.material.color.set(65280), (e.material.opacity = 1), Fa) &&
        (isMaterialUpdateEnabled = !0));
  });
}

function Xo(e) {
  var t = new THREE.Vector3(),
    a = (t.copy(e.scale), e.scale.set(1, 1, 1), new THREE.BoxHelper(e)),
    o =
      ((a.material.depthTest = false),
        (a.renderOrder = 1),
        a.material.color.set(13421772),
        (a.material.transparent = !0),
        (a.material.opacity = 1),
        (a.material.linewidth = 3),
        (a.name = "itemBoundingBox"),
        e.add(a),
        new THREE.Box3().setFromObject(e)),
    i = o.max.x - o.min.x,
    n = o.max.y - o.min.y,
    r = o.max.z - o.min.z,
    s = (o.max.x + o.min.x) / 2,
    l = (o.max.y + o.min.y) / 2,
    o = (o.max.z + o.min.z) / 2,
    i = new THREE.BoxGeometry(i, n, r),
    n = new THREE.MeshBasicMaterial({
      color: 16711680,
    }),
    r = new THREE.Mesh(i, n);
  r.position.set(s, l, o),
    (r.name = "itemSelectionBox"),
    (r.material.transparent = !0),
    (r.material.opacity = 0),
    (r.userData.object = e).add(r),
    _a.push(r),
    (e.userData.hasBoundingBox = !0),
    (e.userData.boundingBox = a),
    (e.userData.selectionBox = r),
    (lastSelectedMaterial = y),
    (y = e).scale.copy(t),
    Qo();
}

function Uo(e) {
  e.userData.hasBoundingBox &&
    ((e.userData.boundingBox.material.opacity = 1),
      e === y
        ? e.userData.boundingBox.material.color.set(65280)
        : e.userData.boundingBox.material.color.set(65535)),
    (isMaterialUpdateEnabled = !0);
}

function Yo(o) {
  if (
    o &&
    o.userData.hasBoundingBox &&
    !o.name.startsWith("measure") &&
    !o.name.startsWith("interiorWall-clone") &&
    !o.name.startsWith("interiorDoor-clone")
  ) {
    var i,
      n = o.userData.boundingBox,
      s = o.userData.selectionBox;
    let e = s.position.x,
      t = s.position.y,
      a = s.position.z;
    if (
      ((n.parent = lastHoveredItem),
        (s.parent = lastHoveredItem),
        o.hasOwnProperty("morphTargetInfluences") &&
        0 < o.morphTargetInfluences.length &&
        !o.name.startsWith("porch"))
    ) {
      var l = o.morphTargetInfluences,
        h = [],
        c = new THREE.Vector3();
      let r = new THREE.Vector3();
      if ("BufferGeometry" === o.geometry.type) {
        var d = o.geometry.morphAttributes.position,
          p = o.geometry.attributes.position.array,
          m = p.length / 3;
        for (let n = 0; n < m; n++) {
          var g = new THREE.Vector3();
          r.set(p[3 * n], p[3 * n + 1], p[3 * n + 2]);
          let a = 0,
            o = 0,
            i = 0;
          for (let e = 0, t = d.length; e < t; e++) {
            var u = l[e];
            0 !== u &&
              ((a += u * (d[e].array[3 * n] - r.x)),
                (o += u * (d[e].array[3 * n + 1] - r.y)),
                (i += u * (d[e].array[3 * n + 2] - r.z)));
          }
          g.set(p[3 * n] + a, p[3 * n + 1] + o, p[3 * n + 2] + i), h.push(g);
        }
      } else {
        var T = o.geometry.morphTargets;
        for (let a = 0; a < o.geometry.vertices.length; a++) {
          var y = new THREE.Vector3();
          (r = o.geometry.vertices[a]), (y = o.geometry.vertices[a]);
          for (let e = 0, t = T.length; e < t; e++) {
            var b,
              f = l[e];
            0 !== f &&
              ((b = T[e].vertices),
                y.addScaledVector(c.subVectors(b[a], r), f));
          }
          h.push(y);
        }
      }
      var w = new THREE.Box3().setFromPoints(h),
        v = w.max.x - w.min.x,
        E = w.max.y - w.min.y,
        M = w.max.z - w.min.z,
        w =
          ((e = (w.max.x + w.min.x) / 2),
            (t = (w.max.y + w.min.y) / 2),
            (a = (w.max.z + w.min.z) / 2),
            new THREE.BoxGeometry(v, E, M));
      (s.geometry = w),
        n.setFromObject(o.userData.selectionBox),
        (s.parent = o),
        (n.parent = o),
        s.position.set(e, t, a);
    } else
      o.name.startsWith("porchWrap")
        ? ((v = new THREE.Vector3(0, 0, 0)),
          (E =
            o.userData.width +
            o.userData.porchOverhang +
            o.userData.porchDepth),
          (M = o.userData.height - o.userData.ceilingHeight),
          (w =
            o.userData.depth +
            o.userData.porchOverhang +
            o.userData.porchDepth),
          (i = new THREE.Vector3(E, M, w)),
          new THREE.Box3().setFromCenterAndSize(v, i),
          (e = i.x / -2 + o.userData.porchDepth + o.userData.porchOverhang / 2),
          (t =
            (o.userData.height - o.userData.ceilingHeight) / 2 +
            o.userData.ceilingHeight),
          (a = i.z / -2 + o.userData.porchDepth + o.userData.porchOverhang / 2),
          (v = new THREE.BoxGeometry(E, M, w)),
          (s.geometry = v),
          s.position.set(e, t, a),
          n.setFromObject(o.userData.selectionBox),
          (s.parent = o),
          (n.parent = o),
          s.position.set(e, t, a))
        : o.name.startsWith("porch") &&
        ((i = new THREE.Vector3(0, 0, 0)),
          (E = new THREE.Vector3(
            o.userData.width + o.userData.porchOverhang,
            o.userData.height - o.userData.ceilingHeight,
            o.userData.porchDepth + o.userData.porchOverhang
          )),
          (w =
            (M = new THREE.Box3().setFromCenterAndSize(i, E)).max.x - M.min.x),
          (v = M.max.y - M.min.y),
          (i = M.max.z - M.min.z),
          (e = 0),
          (t =
            (o.userData.height - o.userData.ceilingHeight) / 2 +
            o.userData.ceilingHeight),
          (a = (o.userData.porchDepth + o.userData.porchOverhang) / 2),
          (E = new THREE.BoxGeometry(w, v, i)),
          (s.geometry = E),
          s.position.set(e, t, a),
          n.setFromObject(o.userData.selectionBox),
          (s.parent = o),
          (n.parent = o),
          s.position.set(e, t, a));
  }
}

function Zo(e) {
  Yo(e),
    e &&
    e.userData.hasBoundingBox &&
    (Qo(),
      (e.userData.boundingBox.material.opacity = 1),
      e === y
        ? e.userData.boundingBox.material.color.set(65280)
        : e.userData.boundingBox.material.color.set(65535)),
    (isMaterialUpdateEnabled = !0);
}

function Ko(e = false) {
  var t = sceneManager.clientWidth,
    a = sceneManager.clientHeight;
  (sceneManager.width === t && sceneManager.height === a && !e) ||
    (orbitControls.setSize(t, a, false),
      (mainCamera.aspect = t / a),
      mainCamera.updateProjectionMatrix(),
      Go(),
      lightGroup.updateProjectionMatrix(),
      (isMaterialUpdateEnabled = !0));
}

function Jo() {
  ma.maxTrussSpacing;
  var F,
    G,
    _,
    $,
    i,
    n,
    assetBaseUrl = ma.height,
    q = 0;
  ma.height;
  let r, V, Q, e, X, U, s;
  if (
    ("Single Slope" === ma.roofType
      ? (ma.height,
        (assetBaseUrl += (ma.width * Math.abs(ma.roofPitch)) / 12),
        (q = (ma.width * Math.abs(ma.roofPitch)) / 12),
        (n = -(i = F = Math.atan(ma.width / q))),
        ma.roofPitch < 0 && ((i = -F), (n = F)),
        (e = Math.sqrt(Math.pow(q, 2) + Math.pow(ma.width, 2))),
        (X = e / 2),
        (U = e / 2))
      : "Asymmetrical" === ma.roofType
        ? (ma.asymmetrical,
          ma.settings.roundAllButMinimumRoofPitch &&
          ma.roofPitch < ma.settings.roofPitchMin &&
          (ma.roofPitch = ma.settings.roofPitchMin),
          ma.settings.roundAllButMinimumRoofPitch &&
          (ma.roofPitch > ma.settings.roofPitchMin ||
            ma.roofPitch < -ma.settings.roofPitchMin) &&
          (ma.roofPitch = Math.round(ma.roofPitch)),
          (_ = ma.width / 2 + ma.asymmetrical),
          ($ = ma.width / 2 - ma.asymmetrical),
          (q = (Math.max(_, $) * ma.roofPitch) / 12),
          (i = Math.atan(_ / q)),
          (n = Math.atan($ / q)),
          (X = Math.sqrt(Math.pow(q, 2) + Math.pow(_, 2))),
          (U = Math.sqrt(Math.pow(q, 2) + Math.pow($, 2))))
        : (ma.settings.roundAllButMinimumRoofPitch &&
          ma.roofPitch < ma.settings.roofPitchMin &&
          (ma.roofPitch = ma.settings.roofPitchMin),
          ma.settings.roundAllButMinimumRoofPitch &&
          (ma.roofPitch > ma.settings.roofPitchMin ||
            ma.roofPitch < -ma.settings.roofPitchMin) &&
          (ma.roofPitch = Math.round(ma.roofPitch)),
          (q = ((ma.width / 2) * ma.roofPitch) / 12),
          (n = i = F = Math.atan(ma.width / 2 / q)),
          Math.atan(ma.eavePitchL / 12),
          Math.atan(ma.eavePitchR / 12),
          (e = Math.sqrt(Math.pow(q, 2) + Math.pow(ma.width / 2, 2))),
          (X = e),
          (U = e),
          ma.leanTo2 &&
          (ma.leanTo2Depth, Math.tan(Math.atan(ma.leanTo2Pitch / 12))),
          ma.leanTo4 &&
          (ma.leanTo4Depth, Math.tan(Math.atan(ma.leanTo4Pitch / 12)))),
      void 0 !== lightingSetup.getObjectByName("RigidFramingClones") &&
      oi(lightingSetup.getObjectByName("RigidFramingClones")),
      void 0 !== sceneRoot.getObjectByName("SteelTrussFramingClones") &&
      oi(toneMappingConfig.getObjectByName("SteelTrussFramingClones")),
      void 0 !== sceneRoot.getObjectByName("PostFrameClones") &&
      oi(materialCache.getObjectByName("PostFrameClones")),
      void 0 !== sceneRoot.getObjectByName("HybridFrameClones") &&
      oi(skyboxHDR.getObjectByName("HybridFrameClones")),
      void 0 !== sceneRoot.getObjectByName("OpenWebFrameClones") &&
      oi(reflectionProbe.getObjectByName("OpenWebFrameClones")),
      void 0 !== sceneRoot.getObjectByName("RigidFramingParent") &&
      (sceneRoot.getObjectByName("RigidFramingParent").visible = false),
      void 0 !== sceneRoot.getObjectByName("SteelTrussFramingParent") &&
      (sceneRoot.getObjectByName("SteelTrussFramingParent").visible = false),
      void 0 !== sceneRoot.getObjectByName("PostFrameParent") &&
      (sceneRoot.getObjectByName("PostFrameParent").visible = false),
      "Rigid" == ma.frameType)
  ) {
    (colorOptionList = lightingSetup).visible = !0;
    var h = shadowConfig,
      Y = 0,
      l = ("Asymmetrical" === ma.roofType && (Y = ma.asymmetrical), 0.175),
      Z = 0.66,
      K = ma.width / -2 + l - Y,
      J = ma.width / -2 + l + Y,
      ee = ma.wallHeightL() - 0.5,
      exportedSceneData = ma.wallHeightR() - 0.5,
      c = 2,
      wallMesh = ((c = ma.width < 25 ? 1.23 : c), (Math.PI - i) / 2),
      roofMesh = (Math.PI - n) / 2,
      trimMesh = c / Math.sin(wallMesh),
      glassMesh = c / Math.sin(roofMesh),
      doorMesh = Math.sqrt(Math.pow(trimMesh, 2) - Math.pow(c, 2)),
      sceneElementA = Math.sqrt(Math.pow(glassMesh, 2) - Math.pow(c, 2)),
      sceneElementB = Math.sqrt(
        Math.pow(ee - doorMesh, 2) + Math.pow(c - Z, 2)
      ),
      isHidden = Math.sqrt(
        Math.pow(exportedSceneData - sceneElementA, 2) + Math.pow(c - Z, 2)
      ),
      frontEndWallMesh =
        (Math.acos((ee - doorMesh) / sceneElementB),
          Math.acos((exportedSceneData - sceneElementA) / isHidden),
          Math.abs(K) / Math.sin(i)),
      de = Math.abs(J) / Math.sin(n),
      pe =
        (Math.abs(K),
          Math.sin(i),
          Math.abs(J),
          Math.sin(n),
          Math.abs(c) / Math.sin(i)),
      me = Math.abs(c) / Math.sin(n),
      d = h.getObjectByName("columnSideL"),
      p = 1.5,
      m =
        (ma.settings.ridgidFrameStraightColumns && (p = 0.6),
          (d.position.x = ma.width / -2 + l),
          p / Math.tan(i)),
      g = p / Math.tan(n),
      u =
        (ma.settings.ridgidFrameStraightColumns
          ? (d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1)
          : (d.morphTargetInfluences[d.morphTargetDictionary.height] =
            ee - 1.1),
          (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = m),
          ((d = h.getObjectByName("columnSideR")).position.x = ma.width / 2 - l),
          ma.settings.ridgidFrameStraightColumns
            ? (d.morphTargetInfluences[d.morphTargetDictionary.height] =
              exportedSceneData - 1)
            : (d.morphTargetInfluences[d.morphTargetDictionary.height] =
              exportedSceneData - 1.1),
          (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = g),
          d.material.color.copy(mainVar),
          void 0 !== sceneRoot.getObjectByName("downspout") &&
          void 0 !== h.getObjectByName("columnSideL") &&
          void 0 !== h.getObjectByName("columnSideR") &&
          void 0 ===
          h
            .getObjectByName("columnSideL")
            .getObjectByName("downspout-clone") &&
          void 0 ===
          h
            .getObjectByName("columnSideR")
            .getObjectByName("downspout-clone") &&
          ((u = sceneRoot.getObjectByName("downspout")),
            ((s = u.clone()).name = "downspout-clone"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            (s.rotation.y = THREE.Math.degToRad(180)),
            (s.position.x = -l),
            h.getObjectByName("columnSideL").add(s),
            h.getObjectByName("columnSideR").add(s.clone())),
          ma.gutters &&
          ((u = h
            .getObjectByName("columnSideL")
            .getObjectByName("downspout-clone")),
            (T = h
              .getObjectByName("columnSideR")
              .getObjectByName("downspout-clone")),
            (u.morphTargetInfluences[u.morphTargetDictionary.height] =
              ma.height -
              1.2 -
              (ma.eaveL / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
            (T.morphTargetInfluences[T.morphTargetDictionary.height] =
              ma.height -
              1.2 -
              (ma.eaveR / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
            (u.morphTargetInfluences[u.morphTargetDictionary.downspoutOverhang] =
              (ma.eaveL / Math.hypot(12, ma.roofPitch)) * 12),
            (T.morphTargetInfluences[T.morphTargetDictionary.downspoutOverhang] =
              (ma.eaveR / Math.hypot(12, ma.roofPitch)) * 12),
            0 < ma.hideWalls
              ? ((u.visible = false), (T.visible = false))
              : ("Single Slope" != ma.roofType ||
                ("Single Slope" == ma.roofType && 0 < ma.roofPitch)
                ? (u.visible = !0)
                : (u.visible = false),
                "Single Slope" != ma.roofType ||
                  ("Single Slope" == ma.roofType && ma.roofPitch < 0)
                  ? (T.visible = !0)
                  : (T.visible = false))),
          h.getObjectByName("beamRoofL")),
      T = Math.abs(K) - p,
      y = ma.width / -2 + l + p,
      m = ee + m,
      ge = T / Math.tan(i);
    (u.position.x = y),
      (u.position.y = m),
      (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
      (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge),
      "Single Slope" != ma.roofType
        ? ((u = h.getObjectByName("beamRoofR")),
          (T = Math.abs(J) - p),
          (y = ma.width / 2 - l - p),
          (m = exportedSceneData + g),
          (ge = T / Math.tan(n)),
          (u.visible = !0),
          (u.position.x = y),
          (u.position.y = m),
          (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
          (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge))
        : ((ge = (T *= 2) / Math.tan(i)),
          (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
          (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge),
          ((u = colorOptionList.getObjectByName("beamRoofR")).visible = false)),
      ((R = new THREE.Group()).name = "RigidFramingClones"),
      colorOptionList.add(R),
      (placeholderA = ti(ma.maxTrussSpacing, l, h, R)),
      void 0 !== sceneRoot.getObjectByName("LeanTo1PostClones") &&
      sceneRoot
        .getObjectByName("leanTo1")
        .remove(sceneRoot.getObjectByName("LeanTo1PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo2PostClones") &&
      sceneRoot
        .getObjectByName("leanTo2")
        .remove(sceneRoot.getObjectByName("LeanTo2PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo3PostClones") &&
      sceneRoot
        .getObjectByName("leanTo3")
        .remove(sceneRoot.getObjectByName("LeanTo3PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo4PostClones") &&
      sceneRoot
        .getObjectByName("leanTo4")
        .remove(sceneRoot.getObjectByName("LeanTo4PostClones"));
    let e, t;
    if (
      (void 0 !== h.getObjectByName("columnSide") &&
        (e = h.getObjectByName("columnSide")),
        void 0 !== h.getObjectByName("beamRoof") &&
        (t = h.getObjectByName("beamRoof")),
        void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 === e.getObjectByName("downspout-clone") &&
        ((g = sceneRoot.getObjectByName("downspout")),
          ((s = g.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          e.add(s)),
        0 < ma.settings.postsOnGableRoofOverhangsOver)
    ) {
      if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = h.clone()).name = "OverhangFrontFrame"),
            (clonedFrame.position.z = ma.depth / 2 + ma.gableFront - l - 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureFront")
            ? ((y = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = y.deepClone()).name = "overhangEnclosureFront"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureFront")),
            (e.position.z = ma.depth / 2),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableFront - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureFront") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureFront"
          ).visible = false);
      if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = h.clone()).name = "OverhangBackFrame"),
            (clonedFrame.position.z = ma.depth / -2 - ma.gableBack + l + 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureBack")
            ? ((m = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = m.deepClone()).name = "overhangEnclosureBack"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureBack")),
            (e.position.z = ma.depth / -2),
            (e.rotation.y = Math.PI),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableBack - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureBack") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureBack"
          ).visible = false);
    }
    var ue = sceneRoot.getObjectByName("masterSecondaryFramingPiece");
    if ((ue.material.color.copy(mainVar), ma.leanTo1)) {
      void 0 === sceneRoot.getObjectByName("LeanTo1PostClones") &&
        (((H = new THREE.Group()).name = "LeanTo1PostClones"),
          (sceneManager.rotation.y = 0),
          sceneRoot.getObjectByName("leanTo1").add(H),
          ((C = new THREE.Group()).name = "LeanTo1PostMaster"),
          sceneManager.add(C)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo1Height -
          (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        C.add(s);
      var g = s.getObjectByName("downspout-clone"),
        b =
          (g &&
            ((g.position.x = -l - 0.08),
              (g.rotation.y = Math.PI),
              (g.morphTargetInfluences[g.morphTargetDictionary.height] =
                ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - l,
              ma.leanTo1Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo1Pitch / 12)),
            C.add(s),
            ma.leanTo1Length / 2 - l - 0.08),
        f = ma.leanTo1Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      C.position.x = b;
      for (var v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo1PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          sceneManager.add(r);
      if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
        for (
          var v = 0,
          Te = ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12;
          v < ma.leanTo1Height / ma.girtSpacing;

        )
          v < Te / ma.girtSpacing
            ? ((s = ue.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo1Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo1Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo1Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo1Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo1Height) /
              (ma.leanTo1Pitch / 12) +
              1),
              (s = ue.clone()).position.set(
                ma.leanTo1Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo1Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            sceneManager.add(s),
            v++;
    }
    if (ma.leanTo3) {
      void 0 === sceneRoot.getObjectByName("LeanTo3PostClones") &&
        (((L = new THREE.Group()).name = "LeanTo3PostClones"),
          (L.rotation.y = Math.PI),
          sceneRoot.getObjectByName("leanTo3").add(L),
          ((N = new THREE.Group()).name = "LeanTo3PostMaster"),
          L.add(N)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo3Height -
          (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        N.add(s);
      var y = s.getObjectByName("downspout-clone"),
        b =
          (y &&
            ((y.position.x = -l - 0.08),
              (y.rotation.y = Math.PI),
              (y.morphTargetInfluences[y.morphTargetDictionary.height] =
                ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - l,
              ma.leanTo3Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo3Pitch / 12)),
            N.add(s),
            ma.leanTo3Length / 2 - l - 0.08),
        f = ma.leanTo3Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      N.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo3PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          L.add(r);
      if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
        for (
          var v = 0,
          ye = ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12;
          v < ma.leanTo3Height / ma.girtSpacing;

        )
          v < ye / ma.girtSpacing
            ? ((s = ue.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo3Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo3Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo3Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo3Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo3Height) /
              (ma.leanTo3Pitch / 12) +
              1),
              (s = ue.clone()).position.set(
                ma.leanTo3Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo3Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            L.add(s),
            v++;
    }
    if (ma.leanTo2) {
      void 0 === sceneRoot.getObjectByName("LeanTo2PostClones") &&
        (((j = new THREE.Group()).name = "LeanTo2PostClones"),
          (j.rotation.y = Math.PI / -2),
          sceneRoot.getObjectByName("leanTo2").add(j),
          ((isTemporary = new THREE.Group()).name = "LeanTo2PostMaster"),
          j.add(isTemporary)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo2Height -
          (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        isTemporary.add(s);
      var h = s.getObjectByName("downspout-clone"),
        b =
          (h &&
            ((h.position.x = -l - 0.08),
              (h.rotation.y = Math.PI),
              (h.morphTargetInfluences[h.morphTargetDictionary.height] =
                ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - l,
              ma.leanTo2Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo2Pitch / 12)),
            isTemporary.add(s),
            ma.leanTo2Length / 2 - l - 0.08),
        f = ma.leanTo2Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      isTemporary.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo2PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          j.add(r);
      if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
        for (
          var v = 0,
          be = ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12;
          v < ma.leanTo2Height / ma.girtSpacing;

        )
          v < be / ma.girtSpacing
            ? ((s = ue.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo2Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo2Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo2Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo2Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo2Height) /
              (ma.leanTo2Pitch / 12) +
              1),
              (s = ue.clone()).position.set(
                ma.leanTo2Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo2Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            j.add(s),
            v++;
    }
    if (ma.leanTo4) {
      void 0 === sceneRoot.getObjectByName("LeanTo4PostClones") &&
        (((z = new THREE.Group()).name = "LeanTo4PostClones"),
          (z.rotation.y = Math.PI / 2),
          sceneRoot.getObjectByName("leanTo4").add(z),
          ((userTop = new THREE.Group()).name = "LeanTo4PostMaster"),
          z.add(userTop)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo4Height -
          (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        userTop.add(s);
      var m = s.getObjectByName("downspout-clone"),
        b =
          (m &&
            ((m.position.x = -l - 0.08),
              (m.rotation.y = Math.PI),
              (m.morphTargetInfluences[m.morphTargetDictionary.height] =
                ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - l,
              ma.leanTo4Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo4Pitch / 12)),
            userTop.add(s),
            ma.leanTo4Length / 2 - l - 0.08),
        f = ma.leanTo4Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      userTop.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo4PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          z.add(r);
      if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
        for (
          var v = 0,
          fe = ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12;
          v < ma.leanTo4Height / ma.girtSpacing;

        )
          v < fe / ma.girtSpacing
            ? ((s = ue.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo4Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo4Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo4Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo4Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo4Height) /
              (ma.leanTo4Pitch / 12) +
              1),
              (s = ue.clone()).position.set(
                ma.leanTo4Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = ue.clone()).position.set(
                ma.leanTo4Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            z.add(s),
            v++;
    }
    var we = ma.girtSpacing,
      ve = ma.purlinSpacing;
    ((I = new THREE.Group()).name = "GirtParent"),
      R.add(I),
      2 < ma.hideWalls ? (I.visible = false) : (I.visible = !0),
      ((currentUrl = new THREE.Group()).name = "PurlinParentL"),
      currentUrl.position.set(ma.width / -2 + l + 0.1, ee, 0),
      (currentUrl.rotation.z = Math.PI / 2 - i),
      ma.roofPitch < 0 && (currentUrl.rotation.z = Math.PI / -2 - i),
      I.add(currentUrl);
    ((pathName = new THREE.Group()).name = "PurlinParentR"),
      pathName.position.set(ma.width / 2 - l - 0.1, exportedSceneData, 0),
      (pathName.rotation.z = n - Math.PI / -2),
      ma.roofPitch < 0 && (pathName.rotation.z = n - Math.PI / 2),
      I.add(pathName);
    var snapshotBuffer = ma.depth - l;
    let a = snapshotBuffer,
      o = 0;
    0 < ma.settings.postsOnGableRoofOverhangsOver &&
      (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver &&
        ((a += ma.gableFront - 0.5), (o += ma.gableFront / 2)),
        ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) &&
      ((a += ma.gableBack - 0.5), (o -= ma.gableBack / 2));
    for (
      var E = sceneRoot.getObjectByName("masterSecondaryFramingPiece").clone(),
      v = 0;
      v < X / ve;

    ) {
      s = E.clone();
      let e = 0;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 + 0.1
              : ma.purlinThickness / 2 + 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? 0.1 : 0.2)),
        s.position.set(v * ve, l / 2 - e, o),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = a),
        (s.rotation.y = 0),
        (s.visible = !0),
        currentUrl.add(s),
        v++;
    }
    for (v = 0; v < U / ve;) {
      s = E.clone();
      let e;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 - 0.05
              : ma.purlinThickness / 2 - 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? -0.15 : -0.25)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * -ve, -l / 2 - e, o)
          : s.position.set(v * ve, -l / 2 + e, o),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = a),
        (s.rotation.y = 0),
        (s.visible = !0),
        pathName.add(s),
        v++;
    }
    for (v = 0; v < assetBaseUrl / we;) {
      if (v < ma.wallHeightL() / we && ma.enclosedE) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(ma.width / -2 + l / 1.9 + e, v * we + 0.05, 0),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = snapshotBuffer),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.wallHeightR() / we && ma.enclosedW) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(ma.width / 2 - l / 1.9 - e, v * we + 0.05, 0),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = snapshotBuffer),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.height / we) {
        if (ma.enclosedS) {
          s = E.clone();
          let e = 0;
          ma.flushGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
            s.position.set(0, v * we + 0.05, ma.depth / -2 + l / 1.9 + e),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s);
        }
        if (ma.enclosedN) {
          s = E.clone();
          let e = 0;
          ma.flushGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
            s.position.set(0, v * we + 0.05, ma.depth / 2 - l / 1.9 - e),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s);
        }
      }
      v++;
    }
    if (!ma.flushGirts)
      for (; v < (q + ma.height - 0.1 - 1) / we;) {
        var exportButton = v * we - ma.height,
          exportPanel =
            ("Single Slope" !== ma.roofType &&
              (V =
                "Asymmetrical" === ma.roofType
                  ? (exportButton / q) * ma.asymmetrical
                  : ((_ = ma.width / 2), ($ = ma.width / 2), (n = i = F), 0)),
              _ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - i)),
          fallbackMesh = $ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - n);
        ma.enclosedS &&
          ((s = E.clone()).position.set(
            V,
            v * we + 0.05,
            ma.depth / -2 + l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN &&
          ((s = E.clone()).position.set(
            V,
            v * we + 0.05,
            ma.depth / 2 - l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          v++;
      }
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
      (40 < ma.width
        ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
        : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
    for (
      var isUIInitialized = Math.ceil(ma.width / ma.maxPostSpacing) - 1,
      materialDisplayMode = ma.depth / 2 - (l + 0.125),
      Oe =
        ma.width /
        ((isUIInitialized = isUIInitialized < 0 ? 0 : isUIInitialized) + 1),
      M = 0,
      lastSelectedMaterial = 0,
      v = 1;
      v <= isUIInitialized;
      v++
    )
      if (
        ((M = ma.width / -2 + Oe * v),
          (lastSelectedMaterial =
            "Single Slope" === ma.roofType
              ? ma.roofPitch < 0
                ? ma.height + ((M - ma.width / 2) * ma.roofPitch) / 12 - 1
                : ma.height + ((M - -ma.width / 2) * ma.roofPitch) / 12 - 1
              : "Asymmetrical" === ma.roofType
                ? ((axisHelper = 12 / Math.tan(i)),
                  (statsMonitor = 12 / Math.tan(n)),
                  M < ma.asymmetrical
                    ? ma.height +
                    ((ma.width / 2 - -M) * axisHelper) / 12 -
                    1 -
                    2.4 -
                    0.085 * axisHelper
                    : ma.height +
                    ((ma.width / 2 - M) * statsMonitor) / 12 -
                    1 -
                    2.4 -
                    0.085 * statsMonitor)
                : ma.height +
                ((ma.width / 2 - Math.abs(M)) * ma.roofPitch) / 12 -
                1 -
                p),
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedN
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial / 100),
          R.add(s),
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedS
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, -materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial / 100),
          R.add(s),
          0 < ma.mezzanineBays)
      ) {
        var textureAtlas = placeholderA;
        textureAtlas.sort(function (e, t) {
          return e - t;
        });
        for (
          var sharedMaterialLibrary = 1;
          sharedMaterialLibrary <= ma.mezzanineBays;
          sharedMaterialLibrary++
        )
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name +=
            "-clone"),
            (s.visible = !0),
            s.position.set(M, 0, textureAtlas[sharedMaterialLibrary]),
            (s.morphTargetInfluences[s.morphTargetDictionary.height] =
              (ma.mezzanineHeight - 1) / 100),
            R.add(s);
      }
  }
  if ("Steel Truss" == ma.frameType) {
    (colorOptionList = toneMappingConfig).visible = !0;
    var g = textureCache,
      Y = 0,
      l = ("Asymmetrical" === ma.roofType && (Y = ma.asymmetrical), 0.3),
      Z = 0.66,
      K = ma.width / -2 + l - Y,
      J = ma.width / -2 + l + Y,
      ee = ma.wallHeightL() - 0.5,
      exportedSceneData = ma.wallHeightR() - 0.5,
      c = 2,
      wallMesh = ((c = ma.width < 25 ? 1.23 : c), (Math.PI - i) / 2),
      roofMesh = (Math.PI - n) / 2,
      trimMesh = c / Math.sin(wallMesh),
      glassMesh = c / Math.sin(roofMesh),
      doorMesh = Math.sqrt(Math.pow(trimMesh, 2) - Math.pow(c, 2)),
      sceneElementA = Math.sqrt(Math.pow(glassMesh, 2) - Math.pow(c, 2)),
      sceneElementB = Math.sqrt(
        Math.pow(ee - doorMesh, 2) + Math.pow(c - Z, 2)
      ),
      isHidden = Math.sqrt(
        Math.pow(exportedSceneData - sceneElementA, 2) + Math.pow(c - Z, 2)
      ),
      frontEndWallMesh =
        (Math.atan(doorMesh / trimMesh),
          Math.atan(sceneElementA / glassMesh),
          Math.acos((ee - doorMesh) / sceneElementB),
          Math.acos((exportedSceneData - sceneElementA) / isHidden),
          Math.abs(K) / Math.sin(i)),
      de = Math.abs(J) / Math.sin(n),
      pe =
        (Math.abs(K),
          Math.sin(i),
          Math.abs(J),
          Math.sin(n),
          Math.abs(c) / Math.sin(i)),
      me = Math.abs(c) / Math.sin(n),
      gridHelper = ((ma.width / 2) * ma.roofPitch) / 12;
    ((d = g.getObjectByName("columnSideL")).position.x = ma.width / -2 + l),
      (d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1),
      (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
        -2 * Math.tan(i - Math.PI / 2)),
      ((d = g.getObjectByName("columnSideR")).position.x = ma.width / 2 - l),
      (d.morphTargetInfluences[d.morphTargetDictionary.height] =
        exportedSceneData - 1.1),
      (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
        -2 * Math.tan(n - Math.PI / 2));
    ((mainCamera = g.getObjectByName("truss")).position.y = ma.height - 0.5),
      (mainCamera.morphTargetInfluences[
        mainCamera.morphTargetDictionary.width
      ] = ma.width - 1 - 2 * l),
      (mainCamera.morphTargetInfluences[
        mainCamera.morphTargetDictionary.height
      ] = gridHelper - 1),
      mainCamera.material.color.copy(mainVar);
    (g.getObjectByName("webbingVertR1").visible = false),
      (g.getObjectByName("webbingVertR2").visible = false),
      (g.getObjectByName("webbingVertL1").visible = false),
      (g.getObjectByName("webbingVertL2").visible = false);
    ((helperObject = g.getObjectByName("webbingDiagR1")).position.y =
      ma.height - 0.5),
      (helperObject.position.x = ma.width / 2 / 3),
      (helperObject.rotation.z =
        Math.PI / 2 - Math.atan((gridHelper - 0.3) / (ma.width / 2 / 3))),
      (helperObject.morphTargetInfluences[
        helperObject.morphTargetDictionary.height
      ] =
        Math.sqrt(
          Math.pow(gridHelper - 0.3, 2) + Math.pow(ma.width / 2 / 3, 2)
        ) - 1),
      (helperObject.position.x = 0),
      (helperObject.rotation.z =
        Math.atan(((gridHelper / 4) * 3 - 0.25) / (ma.width / 2 / 4)) -
        Math.PI / 2),
      (helperObject.morphTargetInfluences[
        helperObject.morphTargetDictionary.height
      ] = Math.hypot((gridHelper / 4) * 3 - 0.25, ma.width / 2 / 4) - 1),
      ((helperObject = g.getObjectByName("webbingDiagL1")).position.y =
        ma.height - 0.5),
      (helperObject.position.x = ma.width / 2 / -3),
      (helperObject.rotation.z =
        Math.PI / -2 + Math.atan((gridHelper - 0.3) / (ma.width / 2 / 3))),
      (helperObject.morphTargetInfluences[
        helperObject.morphTargetDictionary.height
      ] =
        Math.sqrt(
          Math.pow(gridHelper - 0.3, 2) + Math.pow(ma.width / 2 / 3, 2)
        ) - 1),
      (helperObject.position.x = 0),
      (helperObject.rotation.z =
        -Math.atan(((gridHelper / 4) * 3 - 0.25) / (ma.width / 2 / 4)) +
        Math.PI / 2),
      (helperObject.morphTargetInfluences[
        helperObject.morphTargetDictionary.height
      ] = Math.hypot((gridHelper / 4) * 3 - 0.25, ma.width / 2 / 4) - 1),
      (g.getObjectByName("webbingDiagR2").visible = false),
      (g.getObjectByName("webbingDiagL2").visible = false),
      void 0 !== sceneRoot.getObjectByName("downspout") &&
      void 0 !== g.getObjectByName("columnSideL") &&
      void 0 !== g.getObjectByName("columnSideR") &&
      void 0 ===
      g.getObjectByName("columnSideL").getObjectByName("downspout-clone") &&
      void 0 ===
      g.getObjectByName("columnSideR").getObjectByName("downspout-clone") &&
      ((y = sceneRoot.getObjectByName("downspout")),
        ((s = y.clone()).name = "downspout-clone"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        (s.rotation.y = THREE.Math.degToRad(180)),
        (s.position.x = -l),
        g.getObjectByName("columnSideL").add(s),
        g.getObjectByName("columnSideR").add(s.clone())),
      ma.gutters &&
      ((h = g
        .getObjectByName("columnSideL")
        .getObjectByName("downspout-clone")),
        (m = g
          .getObjectByName("columnSideR")
          .getObjectByName("downspout-clone")),
        (h.morphTargetInfluences[h.morphTargetDictionary.height] =
          ma.height -
          1.2 -
          (ma.eaveL / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
        (m.morphTargetInfluences[m.morphTargetDictionary.height] =
          ma.height -
          1.2 -
          (ma.eaveR / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
        (h.morphTargetInfluences[h.morphTargetDictionary.downspoutOverhang] =
          (ma.eaveL / Math.hypot(12, ma.roofPitch)) * 12),
        (m.morphTargetInfluences[m.morphTargetDictionary.downspoutOverhang] =
          (ma.eaveR / Math.hypot(12, ma.roofPitch)) * 12),
        0 < ma.hideWalls
          ? ((h.visible = false), (m.visible = false))
          : ("Single Slope" != ma.roofType ||
            ("Single Slope" == ma.roofType && 0 < ma.roofPitch)
            ? (h.visible = !0)
            : (h.visible = false),
            "Single Slope" != ma.roofType ||
              ("Single Slope" == ma.roofType && ma.roofPitch < 0)
              ? (m.visible = !0)
              : (m.visible = false)));
    var u = g.getObjectByName("beamRoofL"),
      p = 0,
      ge = ((T = Math.abs(K) - p) * ma.roofPitch) / 12;
    (u.position.x = ma.width / -2 + l + p),
      (u.position.y = ma.height - 0.4),
      (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
      (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge),
      "Single Slope" != ma.roofType
        ? ((u = g.getObjectByName("beamRoofR")),
          (T = Math.abs(J) - p),
          (u.visible = !0),
          (u.position.x = ma.width / 2 - l - p),
          (u.position.y = ma.height - 0.4),
          (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
          (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge))
        : ((u.morphTargetInfluences[u.morphTargetDictionary.length] =
          2 * T - 1),
          (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = 2 * ge),
          ((u = colorOptionList.getObjectByName("beamRoofR")).visible = false)),
      ((R = new THREE.Group()).name = "SteelTrussFramingClones"),
      colorOptionList.add(R),
      (placeholderA = ti(ma.maxTrussSpacing, l, g, R)),
      void 0 !== sceneRoot.getObjectByName("LeanTo1PostClones") &&
      sceneRoot
        .getObjectByName("leanTo1")
        .remove(sceneRoot.getObjectByName("LeanTo1PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo2PostClones") &&
      sceneRoot
        .getObjectByName("leanTo2")
        .remove(sceneRoot.getObjectByName("LeanTo2PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo3PostClones") &&
      sceneRoot
        .getObjectByName("leanTo3")
        .remove(sceneRoot.getObjectByName("LeanTo3PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo4PostClones") &&
      sceneRoot
        .getObjectByName("leanTo4")
        .remove(sceneRoot.getObjectByName("LeanTo4PostClones"));
    let e, t;
    if (
      (void 0 !== g.getObjectByName("columnSide") &&
        (e = g.getObjectByName("columnSide")),
        void 0 !== g.getObjectByName("beamRoof") &&
        (t = g.getObjectByName("beamRoof")),
        void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 === e.getObjectByName("downspout-clone") &&
        ((y = sceneRoot.getObjectByName("downspout")),
          ((s = y.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          e.add(s)),
        0 < ma.settings.postsOnGableRoofOverhangsOver)
    ) {
      if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = g.clone()).name = "OverhangFrontFrame"),
            (clonedFrame.position.z = ma.depth / 2 + ma.gableFront - l - 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureFront")
            ? ((h = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = h.deepClone()).name = "overhangEnclosureFront"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureFront")),
            (e.position.z = ma.depth / 2),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableFront - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureFront") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureFront"
          ).visible = false);
      if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = g.clone()).name = "OverhangBackFrame"),
            (clonedFrame.position.z = ma.depth / -2 - ma.gableBack + l + 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureBack")
            ? ((m = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = m.deepClone()).name = "overhangEnclosureBack"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureBack")),
            (e.position.z = ma.depth / -2),
            (e.rotation.y = Math.PI),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableBack - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureBack") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureBack"
          ).visible = false);
    }
    if (
      (sceneRoot
        .getObjectByName("masterSecondaryFramingPiece")
        .material.color.copy(mainVar),
        ma.leanTo1)
    ) {
      void 0 === sceneRoot.getObjectByName("LeanTo1PostClones") &&
        (((H = new THREE.Group()).name = "LeanTo1PostClones"),
          (sceneManager.rotation.y = 0),
          sceneRoot.getObjectByName("leanTo1").add(H),
          ((C = new THREE.Group()).name = "LeanTo1PostMaster"),
          sceneManager.add(C)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo1Height -
          (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        C.add(s);
      var y = s.getObjectByName("downspout-clone"),
        b =
          (y &&
            ((y.position.x = -l - 0.08),
              (y.rotation.y = Math.PI),
              (y.morphTargetInfluences[y.morphTargetDictionary.height] =
                ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - l,
              ma.leanTo1Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo1Pitch / 12)),
            C.add(s),
            ma.leanTo1Length / 2 - l - 0.08),
        f = ma.leanTo1Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      C.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo1PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          sceneManager.add(r);
      if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
        for (
          v = 0,
          Te = ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12;
          v < ma.leanTo1Height / ma.girtSpacing;

        )
          v < Te / ma.girtSpacing
            ? ((s = sceneRoot
              .getObjectByName("masterSecondaryFramingPiece")
              .clone()).position.set(
                0,
                v * ma.girtSpacing,
                ma.leanTo1Depth - l / 4
              ),
              s.rotation.set(0, Math.PI / 2, 0),
              (s.scale.z = ma.leanTo1Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo1Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo1Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo1Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo1Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo1Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo1Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo1Height) /
              (ma.leanTo1Pitch / 12)),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo1Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo1Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            sceneManager.add(s),
            v++;
    }
    if (ma.leanTo3) {
      void 0 === sceneRoot.getObjectByName("LeanTo3PostClones") &&
        (((L = new THREE.Group()).name = "LeanTo3PostClones"),
          (L.rotation.y = Math.PI),
          sceneRoot.getObjectByName("leanTo3").add(L),
          ((N = new THREE.Group()).name = "LeanTo3PostMaster"),
          L.add(N)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo3Height -
          (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        N.add(s);
      (h = s.getObjectByName("downspout-clone")),
        (b =
          (h &&
            ((h.position.x = -l - 0.08),
              (h.rotation.y = Math.PI),
              (h.morphTargetInfluences[h.morphTargetDictionary.height] =
                ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - l,
              ma.leanTo3Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo3Pitch / 12)),
            N.add(s),
            ma.leanTo3Length / 2 - l - 0.08)),
        (f = ma.leanTo3Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      N.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo3PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          L.add(r);
      if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
        for (
          v = 0,
          ye = ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12;
          v < ma.leanTo3Height / ma.girtSpacing;

        )
          v < ye / ma.girtSpacing
            ? ((s = sceneRoot
              .getObjectByName("masterSecondaryFramingPiece")
              .clone()).position.set(
                0,
                v * ma.girtSpacing,
                ma.leanTo3Depth - l / 4
              ),
              s.rotation.set(0, Math.PI / 2, 0),
              (s.scale.z = ma.leanTo3Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo3Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo3Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo3Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo3Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo3Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo3Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo3Height) /
              (ma.leanTo3Pitch / 12)),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo3Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo3Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            L.add(s),
            v++;
    }
    if (ma.leanTo2) {
      void 0 === sceneRoot.getObjectByName("LeanTo2PostClones") &&
        (((j = new THREE.Group()).name = "LeanTo2PostClones"),
          (j.rotation.y = Math.PI / -2),
          sceneRoot.getObjectByName("leanTo2").add(j),
          ((isTemporary = new THREE.Group()).name = "LeanTo2PostMaster"),
          j.add(isTemporary)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo2Height -
          (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        isTemporary.add(s);
      (g = s.getObjectByName("downspout-clone")),
        (b =
          (g &&
            ((g.position.x = -l - 0.08),
              (g.rotation.y = Math.PI),
              (g.morphTargetInfluences[g.morphTargetDictionary.height] =
                ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - l,
              ma.leanTo2Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo2Pitch / 12)),
            isTemporary.add(s),
            ma.leanTo2Length / 2 - l - 0.08)),
        (f = ma.leanTo2Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      isTemporary.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo2PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          j.add(r);
      if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
        for (
          v = 0,
          be = ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12;
          v < ma.leanTo2Height / ma.girtSpacing;

        )
          v < be / ma.girtSpacing
            ? ((s = sceneRoot
              .getObjectByName("masterSecondaryFramingPiece")
              .clone()).position.set(
                0,
                v * ma.girtSpacing,
                ma.leanTo2Depth - l / 4
              ),
              s.rotation.set(0, Math.PI / 2, 0),
              (s.scale.z = ma.leanTo2Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo2Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo2Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo2Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo2Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo2Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo2Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo2Height) /
              (ma.leanTo2Pitch / 12)),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo2Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo2Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            j.add(s),
            v++;
    }
    if (ma.leanTo4) {
      void 0 === sceneRoot.getObjectByName("LeanTo4PostClones") &&
        (((z = new THREE.Group()).name = "LeanTo4PostClones"),
          (z.rotation.y = Math.PI / 2),
          sceneRoot.getObjectByName("leanTo4").add(z),
          ((userTop = new THREE.Group()).name = "LeanTo4PostMaster"),
          z.add(userTop)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo4Height -
          (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 -
          0.5 -
          1),
        (s.rotation.y = Math.PI / 2),
        userTop.add(s);
      (m = s.getObjectByName("downspout-clone")),
        (b =
          (m &&
            ((m.position.x = -l - 0.08),
              (m.rotation.y = Math.PI),
              (m.morphTargetInfluences[m.morphTargetDictionary.height] =
                ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - l,
              ma.leanTo4Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo4Pitch / 12)),
            userTop.add(s),
            ma.leanTo4Length / 2 - l - 0.08)),
        (f = ma.leanTo4Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      userTop.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo4PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          z.add(r);
      if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
        for (
          v = 0,
          fe = ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12;
          v < ma.leanTo4Height / ma.girtSpacing;

        )
          v < fe / ma.girtSpacing
            ? ((s = sceneRoot
              .getObjectByName("masterSecondaryFramingPiece")
              .clone()).position.set(
                0,
                v * ma.girtSpacing,
                ma.leanTo4Depth - l / 4
              ),
              s.rotation.set(0, Math.PI / 2, 0),
              (s.scale.z = ma.leanTo4Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo4Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo4Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo4Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo4Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  ma.leanTo4Depth / 2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = ma.leanTo4Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo4Height) /
              (ma.leanTo4Pitch / 12)),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo4Length / 2 - l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = sceneRoot
                .getObjectByName("masterSecondaryFramingPiece")
                .clone()).position.set(
                  ma.leanTo4Length / -2 + l / 4,
                  v * ma.girtSpacing,
                  k / -2 - 0.2
                ),
              s.rotation.set(0, 0, 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            z.add(s),
            v++;
    }
    var a = ma.girtSpacing,
      o = ma.purlinSpacing;
    ((I = new THREE.Group()).name = "GirtParent"),
      R.add(I),
      2 < ma.hideWalls ? (I.visible = false) : (I.visible = !0),
      ((currentUrl = new THREE.Group()).name = "PurlinParentL"),
      currentUrl.position.set(ma.width / -2 + l + 0.1, ee, 0),
      (currentUrl.rotation.z = Math.PI / 2 - i),
      ma.roofPitch < 0 && (currentUrl.rotation.z = Math.PI / -2 - i),
      I.add(currentUrl);
    ((pathName = new THREE.Group()).name = "PurlinParentR"),
      pathName.position.set(ma.width / 2 - l - 0.1, exportedSceneData, 0),
      (pathName.rotation.z = n - Math.PI / -2),
      ma.roofPitch < 0 && (pathName.rotation.z = n - Math.PI / 2),
      I.add(pathName),
      ma.depth;
    for (
      E = sceneRoot.getObjectByName("masterSecondaryFramingPiece").clone(),
      v = 0;
      v < X / o;

    ) {
      s = E.clone();
      let e = 0;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 + 0.1
              : ma.purlinThickness / 2 + 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? 0.1 : 0.2)),
        s.position.set(v * o, l / 2 - e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        currentUrl.add(s),
        v++;
    }
    for (v = 0; v < U / o;) {
      s = E.clone();
      let e;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 - 0.05
              : ma.purlinThickness / 2 - 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? -0.15 : -0.25)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * -o, -l / 2 - e, 0)
          : s.position.set(v * o, -l / 2 + e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        pathName.add(s),
        v++;
    }
    for (v = 0; v < assetBaseUrl / a;) {
      if (v < ma.wallHeightL() / a && ma.enclosedE) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(ma.width / -2 + l / 1.9 + e, v * a + 0.05, 0),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.wallHeightR() / a && ma.enclosedW) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(ma.width / 2 - l / 1.9 - e, v * a + 0.05, 0),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.height / a) {
        if (ma.enclosedS) {
          s = E.clone();
          let e = 0;
          ma.flushGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
            s.position.set(0, v * a + 0.05, ma.depth / -2 + l / 1.9 + e),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s);
        }
        if (ma.enclosedN) {
          s = E.clone();
          let e = 0;
          ma.flushGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
            s.position.set(0, v * a + 0.05, ma.depth / 2 - l / 1.9 - e),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s);
        }
      }
      v++;
    }
    if (!ma.flushGirts)
      for (; v < (q + ma.height - 0.1 - 1) / a;) {
        (exportButton = v * a - ma.height),
          (exportPanel =
            ("Single Slope" !== ma.roofType &&
              (V =
                "Asymmetrical" === ma.roofType
                  ? (exportButton / q) * ma.asymmetrical
                  : ((_ = ma.width / 2), ($ = ma.width / 2), (n = i = F), 0)),
              _ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - i))),
          (fallbackMesh = $ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - n));
        ma.enclosedS &&
          ((s = E.clone()).position.set(
            V,
            v * a + 0.05,
            ma.depth / -2 + l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN &&
          ((s = E.clone()).position.set(
            V,
            v * a + 0.05,
            ma.depth / 2 - l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          v++;
      }
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
      (40 < ma.width
        ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
        : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
    for (
      var axisHelper,
      statsMonitor,
      isUIInitialized = Math.ceil(ma.width / ma.maxPostSpacing) - 1,
      materialDisplayMode = ma.depth / 2 - (l + 0.125),
      Oe =
        ma.width /
        ((isUIInitialized = isUIInitialized < 0 ? 0 : isUIInitialized) + 1),
      M = 0,
      lastSelectedMaterial = 0,
      v = 1;
      v <= isUIInitialized;
      v++
    )
      if (
        ((M = ma.width / -2 + Oe * v),
          (lastSelectedMaterial =
            "Single Slope" === ma.roofType
              ? ma.roofPitch < 0
                ? ma.height + ((M - ma.width / 2) * ma.roofPitch) / 12 - 1
                : ma.height + ((M - -ma.width / 2) * ma.roofPitch) / 12 - 1
              : "Asymmetrical" === ma.roofType
                ? ((axisHelper = 12 / Math.tan(i)),
                  (statsMonitor = 12 / Math.tan(n)),
                  M < ma.asymmetrical
                    ? ma.height +
                    ((ma.width / 2 - -M) * axisHelper) / 12 -
                    1 -
                    2.4 -
                    0.085 * axisHelper
                    : ma.height +
                    ((ma.width / 2 - M) * statsMonitor) / 12 -
                    1 -
                    2.4 -
                    0.085 * statsMonitor)
                : ma.height +
                ((ma.width / 2 - Math.abs(M)) * ma.roofPitch) / 12 -
                1 -
                p),
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedN
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial / 100),
          R.add(s),
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedS
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, -materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial / 100),
          R.add(s),
          0 < ma.mezzanineBays)
      ) {
        var guiPanel = placeholderA;
        guiPanel.sort(function (e, t) {
          return e - t;
        });
        for (
          sharedMaterialLibrary = 1;
          sharedMaterialLibrary <= ma.mezzanineBays;
          sharedMaterialLibrary++
        )
          ((s = sceneRoot.getObjectByName("columnEnd").clone()).name +=
            "-clone"),
            (s.visible = !0),
            s.position.set(M, 0, guiPanel[sharedMaterialLibrary]),
            (s.morphTargetInfluences[s.morphTargetDictionary.height] =
              (ma.mezzanineHeight - 1) / 100),
            R.add(s);
      }
  }
  if ("Post Frame" == ma.frameType) {
    (colorOptionList = materialCache).visible = !0;
    var D = modelCache,
      Y = 0,
      l = ("Asymmetrical" === ma.roofType && (Y = ma.asymmetrical), 0.3),
      Z = 0.66,
      K = ma.width / -2 + l - Y,
      J = ma.width / -2 + l + Y,
      ee = ma.wallHeightL() - 0.5,
      exportedSceneData = ma.wallHeightR() - 0.5,
      c = 2,
      wallMesh = ((c = ma.width < 25 ? 1.23 : c), (Math.PI - i) / 2),
      roofMesh = (Math.PI - n) / 2,
      trimMesh = c / Math.sin(wallMesh),
      glassMesh = c / Math.sin(roofMesh),
      doorMesh = Math.sqrt(Math.pow(trimMesh, 2) - Math.pow(c, 2)),
      sceneElementA = Math.sqrt(Math.pow(glassMesh, 2) - Math.pow(c, 2)),
      sceneElementB = Math.sqrt(
        Math.pow(ee - doorMesh, 2) + Math.pow(c - Z, 2)
      ),
      isHidden = Math.sqrt(
        Math.pow(exportedSceneData - sceneElementA, 2) + Math.pow(c - Z, 2)
      ),
      frontEndWallMesh =
        (Math.atan(doorMesh / trimMesh),
          Math.atan(sceneElementA / glassMesh),
          Math.acos((ee - doorMesh) / sceneElementB),
          Math.acos((exportedSceneData - sceneElementA) / isHidden),
          Math.abs(K) / Math.sin(i)),
      de = Math.abs(J) / Math.sin(n),
      pe =
        (Math.abs(K),
          Math.sin(i),
          Math.abs(J),
          Math.sin(n),
          Math.abs(c) / Math.sin(i)),
      me = Math.abs(c) / Math.sin(n),
      gridHelper = ma.roofHeightAtX(0) - ma.height;
    Math.max(pe, me);
    if (
      (((d = D.getObjectByName("columnSideL")).position.x =
        ma.width / -2 + l + 2 / 12 / 2),
        (d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1),
        (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
          -2 * Math.tan(i - Math.PI / 2)),
        ((d = D.getObjectByName("columnSideR")).position.x =
          ma.width / 2 - l - 2 / 12 / 2),
        (d.morphTargetInfluences[d.morphTargetDictionary.height] =
          exportedSceneData - 1.1),
        (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
          -2 * Math.tan(n - Math.PI / 2)),
        void 0 !== D.getObjectByName("footingL") &&
        (S = D.getObjectByName("footingL")).userData.type !== ma.postFooting &&
        (S.parent.remove(S), S.geometry.dispose(), (S = void 0)),
        void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== D.getObjectByName("columnSideL") &&
        void 0 !== D.getObjectByName("columnSideR") &&
        void 0 ===
        D.getObjectByName("columnSideL").getObjectByName("downspout-clone") &&
        void 0 ===
        D.getObjectByName("columnSideR").getObjectByName("downspout-clone") &&
        ((y = sceneRoot.getObjectByName("downspout")),
          ((s = y.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(180)),
          (s.position.x = -l),
          D.getObjectByName("columnSideL").add(s),
          D.getObjectByName("columnSideR").add(s.clone())),
        ma.gutters &&
        ((h =
          D.getObjectByName("columnSideL").getObjectByName("downspout-clone")),
          (g =
            D.getObjectByName("columnSideR").getObjectByName("downspout-clone")),
          (h.morphTargetInfluences[h.morphTargetDictionary.height] =
            ma.height -
            1.2 -
            (ma.eaveL / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
          (g.morphTargetInfluences[g.morphTargetDictionary.height] =
            ma.height -
            1.2 -
            (ma.eaveR / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
          (h.morphTargetInfluences[h.morphTargetDictionary.downspoutOverhang] =
            (ma.eaveL / Math.hypot(12, ma.roofPitch)) * 12),
          (g.morphTargetInfluences[g.morphTargetDictionary.downspoutOverhang] =
            (ma.eaveR / Math.hypot(12, ma.roofPitch)) * 12),
          0 < ma.hideWalls
            ? ((h.visible = false), (g.visible = false))
            : ("Single Slope" != ma.roofType ||
              ("Single Slope" == ma.roofType && 0 < ma.roofPitch)
              ? (h.visible = !0)
              : (h.visible = false),
              "Single Slope" != ma.roofType ||
                ("Single Slope" == ma.roofType && ma.roofPitch < 0)
                ? (g.visible = !0)
                : (g.visible = false))),
        void 0 === D.getObjectByName("footingL"))
    ) {
      switch (ma.postFooting) {
        case "Post in Ground":
          S = D.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          S = D.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          S = D.getObjectByName("footing-PermaColumnConcretePost").clone();
          break;
        case "Morton Foundation System":
          S = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          S = false;
      }
      S &&
        ((S.rotation.y = THREE.Math.degToRad(90)),
          (S.visible = !0),
          (S.name = "footingL"),
          (S.userData.type = ma.postFooting),
          D.add(S));
    } else S = D.getObjectByName("footingL");
    S &&
      ((S.position.x = ma.width / -2 + l + 2 / 12 / 2),
        void 0 !== D.getObjectByName("footingR") &&
        (configRender = D.getObjectByName("footingR")).userData.type !==
        ma.postFooting &&
        (configRender.parent.remove(configRender),
          configRender.geometry.dispose(),
          (configRender = void 0)),
        void 0 === D.getObjectByName("footingR")
          ? (((configRender = S.clone()).rotation.y = THREE.Math.degToRad(90)),
            (configRender.name = "footingR"),
            (configRender.userData.type = ma.postFooting),
            D.add(configRender))
          : (configRender = D.getObjectByName("footingR")),
        (configRender.position.x = ma.width / 2 - l - 2 / 12 / 2));
    var P = D.getObjectByName("truss");
    if (
      (ma.hasOwnProperty("trussThickness") &&
        (mainCamera.scale.z = ma.trussThickness),
        (mainCamera.position.y = ma.height - 0.5),
        isGlassMode && (mainCamera.position.y = ma.height - 1),
        (mainCamera.morphTargetInfluences[
          mainCamera.morphTargetDictionary.width
        ] = ma.width - 1 - 1),
        (mainCamera.morphTargetInfluences[
          mainCamera.morphTargetDictionary.height
        ] = Math.abs(gridHelper) - 1),
        (mainCamera.morphTargetInfluences[
          mainCamera.morphTargetDictionary.asymmetrical
        ] = 0),
        "Asymmetrical" === ma.roofType &&
        ((mainCamera.morphTargetInfluences[
          mainCamera.morphTargetDictionary.asymmetrical
        ] = ma.asymmetrical),
          (mainCamera.morphTargetInfluences[
            mainCamera.morphTargetDictionary.height
          ] = ma.roofHeightAtX(ma.asymmetrical) - ma.height - 0.5 - 1)),
        isGlassMode &&
        ma.width < 81 &&
        (!ma.hasOwnProperty("trussStyle") ||
          ("Scissor" !== ma.trussStyle &&
            "Raised Lower Chord" !== ma.trussStyle)) &&
        (mainCamera.morphTargetInfluences[
          mainCamera.morphTargetDictionary.height
        ] = -1),
        !ma.hasOwnProperty("trussStyle") ||
          ("Scissor" != ma.trussStyle && "Raised Lower Chord" != ma.trussStyle)
          ? (mainCamera.morphTargetInfluences[
            mainCamera.morphTargetDictionary.scissorHeight
          ] = 0)
          : ((m = (Math.abs(K) * ma.lowerChordScissorPitch) / 12),
            (mainCamera.morphTargetInfluences[
              mainCamera.morphTargetDictionary.scissorHeight
            ] = m)),
        isGlassMode)
    ) {
      (D.getObjectByName("webbingVertR1").visible = false),
        (D.getObjectByName("webbingVertR2").visible = false),
        (D.getObjectByName("webbingVertL1").visible = false),
        (D.getObjectByName("webbingVertL2").visible = false),
        (D.getObjectByName("webbingDiagR1").visible = false),
        (D.getObjectByName("webbingDiagR2").visible = false),
        (D.getObjectByName("webbingDiagL1").visible = false),
        (D.getObjectByName("webbingDiagL2").visible = false);
      var dragControls = D.getObjectByName("webbingDiagR1");
      ma.hasOwnProperty("trussThickness") &&
        (dragControls.scale.z = ma.trussThickness);
      let e = 0;
      (y = Math.abs(K)), (h = Math.abs(J));
      e = ma.width < 30 ? 2 : ma.width < 48 ? 4 : ma.width < 66 ? 6 : 10;
      let t;
      void 0 === D.getObjectByName("webbingGroup")
        ? (((t = new THREE.Group()).name = "webbingGroup"), D.add(t))
        : (t = D.getObjectByName("webbingGroup")),
        (t.position.y = ma.height - 0.5),
        vo(t);
      let a, o, i, n, r, s, l;
      (a = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0),
        (o = a),
        (r = (y / (e + 1)) * 2),
        (s = y / (e / 2 + 1));
      for (v = 0; v < e; v++)
        (i =
          v % 2 == 0
            ? 0 == v
              ? ((a -= r / 2),
                (l =
                  ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a) - 0.35 + 0.6),
                (n = Math.hypot(r / 2, l)),
                THREE.Math.degToRad(-90) - Math.atan(l / (-r / 2)))
              : ((a -= r),
                (l = ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a)),
                (n = Math.hypot(o - a, l)),
                THREE.Math.degToRad(-90) - Math.atan(l / -(o - a)))
            : ((o -= s),
              (l =
                ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a) - 0.35 + 0.6),
              (n = Math.hypot(o - a, l)),
              THREE.Math.degToRad(90) + Math.atan(l / (o - a)))),
          ((WebbingClone = dragControls.clone()).name = "WebbingClone"),
          (WebbingClone.visible = !0),
          WebbingClone.scale.set(0.6, n, ma.trussThickness),
          (WebbingClone.rotation.z = i),
          (WebbingClone.position.x = a),
          (WebbingClone.position.y =
            ma.lowerChordHeightAtX(a) - ma.height - 0.6),
          t.add(WebbingClone);
      (a = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0),
        (o = a),
        (r = (h / (e + 1)) * 2),
        (s = h / (e / 2 + 1));
      for (v = 0; v < e; v++)
        (i =
          v % 2 == 0
            ? 0 == v
              ? ((a += r / 2),
                (l =
                  ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a) - 0.35 + 0.6),
                (n = Math.hypot(r / 2, l)),
                THREE.Math.degToRad(90) - Math.atan(l / (r / 2)))
              : ((a += r),
                (l = ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a)),
                (n = Math.hypot(o - a, l)),
                THREE.Math.degToRad(90) + Math.atan(l / (o - a)))
            : ((o += s),
              (l =
                ma.roofHeightAtX(o) - ma.lowerChordHeightAtX(a) - 0.35 + 0.6),
              (n = Math.hypot(o - a, l)),
              THREE.Math.degToRad(-90) + Math.atan(l / (o - a)))),
          ((WebbingClone = dragControls.clone()).name = "WebbingClone"),
          (WebbingClone.visible = !0),
          WebbingClone.scale.set(0.6, n, ma.trussThickness),
          (WebbingClone.rotation.z = i),
          (WebbingClone.position.x = a),
          (WebbingClone.position.y =
            ma.lowerChordHeightAtX(a) - ma.height - 0.6),
          t.add(WebbingClone);
    } else {
      var helperObject = D.getObjectByName("webbingVertR1"),
        helperObject =
          (ma.hasOwnProperty("trussThickness") &&
            (helperObject.scale.z = ma.trussThickness),
            (helperObject.position.y = ma.height - 0.5),
            "Asymmetrical" === ma.roofType
              ? (helperObject.position.x =
                (ma.width / 2 - ma.asymmetrical) / 3 + ma.asymmetrical)
              : (helperObject.position.x = ma.width / 2 / 3),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = ma.roofHeightAtX(helperObject.position.x) - ma.height - 1.25),
            (helperObject = D.getObjectByName("webbingVertR2")),
            ma.hasOwnProperty("trussThickness") &&
            (helperObject.scale.z = ma.trussThickness),
            (helperObject.position.y = ma.height - 0.5),
            "Asymmetrical" === ma.roofType
              ? (helperObject.position.x =
                ((ma.width / 2 - ma.asymmetrical) / 3) * 2 + ma.asymmetrical)
              : (helperObject.position.x = ma.width / 3),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = ma.roofHeightAtX(helperObject.position.x) - ma.height - 1.25),
            (helperObject = D.getObjectByName("webbingVertL1")),
            ma.hasOwnProperty("trussThickness") &&
            (helperObject.scale.z = ma.trussThickness),
            (helperObject.position.y = ma.height - 0.5),
            "Asymmetrical" === ma.roofType
              ? (helperObject.position.x =
                (ma.width / -2 - ma.asymmetrical) / 3 + ma.asymmetrical)
              : (helperObject.position.x = ma.width / 2 / -3),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = ma.roofHeightAtX(helperObject.position.x) - ma.height - 1.25),
            (helperObject = D.getObjectByName("webbingVertL2")),
            ma.hasOwnProperty("trussThickness") &&
            (helperObject.scale.z = ma.trussThickness),
            (helperObject.position.y = ma.height - 0.5),
            "Asymmetrical" === ma.roofType
              ? (helperObject.position.x =
                ((ma.width / -2 - ma.asymmetrical) / 3) * 2 + ma.asymmetrical)
              : (helperObject.position.x = ma.width / -3),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = ma.roofHeightAtX(helperObject.position.x) - ma.height - 1.25),
            D.getObjectByName("webbingDiagR1"));
      ma.hasOwnProperty("trussThickness") &&
        (helperObject.scale.z = ma.trussThickness),
        (helperObject.position.y = ma.height - 0.5),
        "Asymmetrical" === ma.roofType
          ? ((helperObject.position.x =
            (ma.width / 2 - ma.asymmetrical) / 3 + ma.asymmetrical),
            (helperObject.rotation.z =
              Math.PI / 2 -
              Math.atan(
                (ma.roofHeightAtX(ma.asymmetrical) - ma.height - 0.3) /
                (helperObject.position.x - ma.asymmetrical)
              )),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(
                  ma.roofHeightAtX(ma.asymmetrical) - ma.height - 0.3,
                  2
                ) + Math.pow(helperObject.position.x - ma.asymmetrical, 2)
              ) - 1))
          : ((helperObject.position.x = ma.width / 2 / 3),
            (helperObject.rotation.z =
              Math.PI / 2 - Math.atan((gridHelper - 0.3) / (ma.width / 2 / 3))),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(gridHelper - 0.3, 2) + Math.pow(ma.width / 2 / 3, 2)
              ) - 1)),
        (helperObject = D.getObjectByName("webbingDiagR2")),
        ma.hasOwnProperty("trussThickness") &&
        (helperObject.scale.z = ma.trussThickness),
        (helperObject.position.y = ma.height - 0.5),
        "Asymmetrical" === ma.roofType
          ? ((helperObject.position.x =
            ((ma.width / 2 - ma.asymmetrical) / 3) * 2 + ma.asymmetrical),
            (g =
              ma.asymmetrical +
              (ma.width - (ma.width / 2 + ma.asymmetrical)) / 3),
            (P = helperObject.position.x - g),
            (m = ma.roofHeightAtX(g) - ma.height - 0.3),
            (helperObject.rotation.z = Math.PI / 2 - Math.atan(m / P)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = Math.sqrt(Math.pow(m, 2) + Math.pow(P, 2)) - 1))
          : ((helperObject.position.x = ma.width / 3),
            (helperObject.rotation.z =
              Math.PI / 2 -
              Math.atan(
                (ma.roofHeightAtX(ma.width / 2 / 3) - ma.height - 0.3) /
                (ma.width / 2 / 3)
              )),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(
                  ma.roofHeightAtX(ma.width / 2 / 3) - ma.height - 0.3,
                  2
                ) + Math.pow(ma.width / 2 / 3, 2)
              ) - 1)),
        (helperObject = D.getObjectByName("webbingDiagL1")),
        ma.hasOwnProperty("trussThickness") &&
        (helperObject.scale.z = ma.trussThickness),
        (helperObject.position.y = ma.height - 0.5),
        "Asymmetrical" === ma.roofType
          ? ((helperObject.position.x =
            (ma.width / -2 - ma.asymmetrical) / 3 + ma.asymmetrical),
            (helperObject.rotation.z =
              Math.PI / -2 +
              Math.atan(
                (ma.roofHeightAtX(ma.asymmetrical) - ma.height - 0.3) /
                Math.abs(helperObject.position.x - ma.asymmetrical)
              )),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(
                  ma.roofHeightAtX(ma.asymmetrical) - ma.height - 0.3,
                  2
                ) + Math.pow(helperObject.position.x - ma.asymmetrical, 2)
              ) - 1))
          : ((helperObject.position.x = ma.width / 2 / -3),
            (helperObject.rotation.z =
              Math.PI / -2 +
              Math.atan((gridHelper - 0.3) / (ma.width / 2 / 3))),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(gridHelper - 0.3, 2) + Math.pow(ma.width / 2 / 3, 2)
              ) - 1)),
        (helperObject = D.getObjectByName("webbingDiagL2")),
        ma.hasOwnProperty("trussThickness") &&
        (helperObject.scale.z = ma.trussThickness),
        (helperObject.position.y = ma.height - 0.5),
        "Asymmetrical" === ma.roofType
          ? ((helperObject.position.x =
            ((ma.width / -2 - ma.asymmetrical) / 3) * 2 + ma.asymmetrical),
            (y =
              ma.asymmetrical -
              (ma.width - (ma.width / 2 - ma.asymmetrical)) / 3),
            (h = helperObject.position.x - y),
            (g = ma.roofHeightAtX(y) - ma.height - 0.3),
            (helperObject.rotation.z = Math.PI / -2 - Math.atan(g / h)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] = Math.sqrt(Math.pow(g, 2) + Math.pow(h, 2)) - 1))
          : ((helperObject.position.x = ma.width / -3),
            (helperObject.rotation.z =
              Math.PI / -2 +
              Math.atan(
                (ma.roofHeightAtX(ma.width / 2 / -3) - ma.height - 0.3) /
                (ma.width / 2 / 3)
              )),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.height
            ] =
              Math.sqrt(
                Math.pow(
                  ma.roofHeightAtX(ma.width / 2 / -3) - ma.height - 0.3,
                  2
                ) + Math.pow(ma.width / 2 / 3, 2)
              ) - 1));
    }
    (u = D.getObjectByName("beamRoofL")),
      (p =
        (ma.hasOwnProperty("trussThickness") && (u.scale.z = ma.trussThickness),
          0)),
      (ge = ((T = Math.abs(K) - p) * ma.roofPitch) / 12);
    (u.position.x = ma.width / -2 + l + p),
      (u.position.y = ma.height - 0.4),
      (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
      (u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge),
      "Single Slope" !== ma.roofType
        ? ((u = D.getObjectByName("beamRoofR")),
          ma.hasOwnProperty("trussThickness") &&
          (u.scale.z = ma.trussThickness),
          (T = de - p),
          (u.visible = !0),
          (u.position.x = ma.width / 2 - l - p),
          (u.position.y = ma.height - 0.4),
          (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
          (u.rotation.z = -roofGroup.rotation.z),
          (u = D.getObjectByName("beamRoofL")),
          ma.hasOwnProperty("trussThickness") &&
          (u.scale.z = ma.trussThickness),
          (T = frontEndWallMesh - p),
          (u.visible = !0),
          (u.position.x = ma.width / -2 + l + p),
          (u.position.y = ma.height - 0.4),
          (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
          (u.rotation.z = -wallGroup.rotation.z))
        : 0 <= ma.roofPitch
          ? ((u = D.getObjectByName("beamRoofL")),
            ma.hasOwnProperty("trussThickness") &&
            (u.scale.z = ma.trussThickness),
            (T = Math.abs(de) + Math.abs(frontEndWallMesh) - 2 * p),
            (u.visible = !0),
            (u.position.x = ma.width / -2 + l + p),
            (u.position.y = ma.height - 0.4),
            (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
            (u.rotation.z = -wallGroup.rotation.z),
            ((u = colorOptionList.getObjectByName("beamRoofR")).visible = false))
          : ((u = D.getObjectByName("beamRoofR")),
            ma.hasOwnProperty("trussThickness") &&
            (u.scale.z = ma.trussThickness),
            (T = Math.abs(de) + Math.abs(frontEndWallMesh) - 2 * p),
            (u.visible = !0),
            (u.position.x = ma.width / 2 - l - p),
            (u.position.y = ma.height - 0.4),
            (u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1),
            (u.rotation.z = -roofGroup.rotation.z),
            ((u = colorOptionList.getObjectByName("beamRoofL")).visible = false)),
      ((R = new THREE.Group()).name = "PostFrameClones"),
      colorOptionList.add(R),
      (placeholderA = ti(ma.maxTrussSpacing, l, D, R)),
      void 0 !== sceneRoot.getObjectByName("LeanTo1PostClones") &&
      sceneRoot
        .getObjectByName("leanTo1")
        .remove(sceneRoot.getObjectByName("LeanTo1PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo2PostClones") &&
      sceneRoot
        .getObjectByName("leanTo2")
        .remove(sceneRoot.getObjectByName("LeanTo2PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo3PostClones") &&
      sceneRoot
        .getObjectByName("leanTo3")
        .remove(sceneRoot.getObjectByName("LeanTo3PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo4PostClones") &&
      sceneRoot
        .getObjectByName("leanTo4")
        .remove(sceneRoot.getObjectByName("LeanTo4PostClones"));
    let e, t, a;
    switch (
    (void 0 !== D.getObjectByName("columnSide") &&
      (e = D.getObjectByName("columnSide")),
      void 0 !== D.getObjectByName("beamRoof") &&
      (t = D.getObjectByName("beamRoof")),
      ma.postFooting)
    ) {
      case "Post in Ground":
        a = D.getObjectByName("footing-Burried").clone();
        break;
      case "Bracket on Concrete":
      case "Bracket":
        a = D.getObjectByName("footing").clone();
        break;
      case "Perma-Column":
        a = D.getObjectByName("footing-PermaColumnConcretePost").clone();
        break;
      case "Morton Foundation System":
        a = raycastHelper
          .getObjectByName("footing-MortonFoundationSystem")
          .clone();
        break;
      default:
        a = false;
    }
    var selectionBox = raycastHelper.getObjectByName(
      "masterSecondaryFramingPiece"
    );
    if (ma.leanTo1) {
      void 0 === lastHoveredItem.getObjectByName("LeanTo1PostClones") &&
        (((H = new THREE.Group()).name = "LeanTo1PostClones"),
          (sceneManager.rotation.y = 0),
          lastHoveredItem.getObjectByName("leanTo1").add(H),
          ((C = new THREE.Group()).name = "LeanTo1PostMaster"),
          sceneManager.add(C)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
          C.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo1Height -
          (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 -
          0.5 -
          1),
        C.add(s);
      (m = s.getObjectByName("downspout-clone")),
        (b =
          (m &&
            ((m.position.x = -l - 0.08),
              (m.rotation.y = Math.PI),
              (m.morphTargetInfluences[m.morphTargetDictionary.height] =
                ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - l,
              ma.leanTo1Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo1Pitch / 12)),
            C.add(s),
            void 0 !== lastHoveredItem.getObjectByName("downspout") &&
            void 0 !== C.getObjectByName("LeanToPost") &&
            void 0 ===
            C.getObjectByName("LeanToPost").getObjectByName(
              "downspout-clone"
            ) &&
            ((P = lastHoveredItem.getObjectByName("downspout")),
              ((s = mainCamera.clone()).name = "downspout-clone"),
              (s.visible = !0),
              (s.castShadow = !0),
              (s.receiveShadow = !0),
              (s.rotation.y = THREE.Math.degToRad(-90)),
              (s.position.z = l),
              C.getObjectByName("LeanToPost").add(s)),
            ma.gutters &&
            0 == ma.hideWalls &&
            (((y =
              C.getObjectByName("LeanToPost").getObjectByName(
                "downspout-clone"
              )).scale.y = 1 / y.parent.scale.y),
              (y.morphTargetInfluences[y.morphTargetDictionary.height] =
                ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1)),
            ma.leanTo1Length / 2 - l - 0.08)),
        (f = ma.leanTo1Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      C.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = lastHoveredItem
          .getObjectByName("LeanTo1PostMaster")
          .clone()).name = "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          sceneManager.add(r);
      if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
        for (
          v = 0,
          Te = ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12;
          v < ma.leanTo1Height / ma.girtSpacing;

        )
          v < Te / ma.girtSpacing
            ? ((s = selectionBox.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo1Depth - l / 4
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo1Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo1Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo1Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo1Height) /
              (ma.leanTo1Pitch / 12) +
              1),
              (s = selectionBox.clone()).position.set(
                ma.leanTo1Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              sceneManager.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo1Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            sceneManager.add(s),
            v++;
    }
    if (ma.leanTo3) {
      void 0 === lastHoveredItem.getObjectByName("LeanTo3PostClones") &&
        (((L = new THREE.Group()).name = "LeanTo3PostClones"),
          (L.rotation.y = Math.PI),
          lastHoveredItem.getObjectByName("leanTo3").add(L),
          ((N = new THREE.Group()).name = "LeanTo3PostMaster"),
          L.add(N)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.rotation.set(0, 0, 0),
          s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
          N.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo3Height -
          (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 -
          0.5 -
          1),
        N.add(s);
      (g = s.getObjectByName("downspout-clone")),
        (b =
          (g &&
            ((g.position.x = -l - 0.08),
              (g.rotation.y = Math.PI),
              (g.morphTargetInfluences[g.morphTargetDictionary.height] =
                ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - l,
              ma.leanTo3Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo3Pitch / 12)),
            N.add(s),
            void 0 !== sceneRoot.getObjectByName("downspout") &&
            void 0 !== N.getObjectByName("LeanToPost") &&
            void 0 ===
            N.getObjectByName("LeanToPost").getObjectByName(
              "downspout-clone"
            ) &&
            ((h = sceneRoot.getObjectByName("downspout")),
              ((s = h.clone()).name = "downspout-clone"),
              (s.visible = !0),
              (s.castShadow = !0),
              (s.receiveShadow = !0),
              (s.rotation.y = THREE.Math.degToRad(-90)),
              (s.position.z = l),
              N.getObjectByName("LeanToPost").add(s)),
            ma.gutters &&
            0 == ma.hideWalls &&
            (((ge =
              N.getObjectByName("LeanToPost").getObjectByName(
                "downspout-clone"
              )).scale.y = 1 / ge.parent.scale.y),
              (ge.morphTargetInfluences[ge.morphTargetDictionary.height] =
                ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1)),
            ma.leanTo3Length / 2 - l - 0.08)),
        (f = ma.leanTo3Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      N.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo3PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          L.add(r);
      if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
        for (
          v = 0,
          ye = ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12;
          v < ma.leanTo3Height / ma.girtSpacing;

        )
          v < ye / ma.girtSpacing
            ? ((s = selectionBox.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo3Depth - l / 4
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo3Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo3Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo3Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo3Height) /
              (ma.leanTo3Pitch / 12) +
              1),
              (s = selectionBox.clone()).position.set(
                ma.leanTo3Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo3Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            L.add(s),
            v++;
    }
    if (ma.leanTo2) {
      void 0 === sceneRoot.getObjectByName("LeanTo2PostClones") &&
        (((j = new THREE.Group()).name = "LeanTo2PostClones"),
          (j.rotation.y = Math.PI / -2),
          sceneRoot.getObjectByName("leanTo2").add(j),
          ((isTemporary = new THREE.Group()).name = "LeanTo2PostMaster"),
          j.add(isTemporary)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
          isTemporary.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo2Height -
          (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 -
          0.5 -
          1),
        isTemporary.add(s);
      (T = s.getObjectByName("downspout-clone")),
        (b =
          (T &&
            ((T.position.x = -l - 0.08),
              (T.rotation.y = Math.PI),
              (T.morphTargetInfluences[T.morphTargetDictionary.height] =
                ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - l,
              ma.leanTo2Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo2Pitch / 12)),
            isTemporary.add(s),
            void 0 !== sceneRoot.getObjectByName("downspout") &&
            void 0 !== isTemporary.getObjectByName("LeanToPost") &&
            void 0 ===
            isTemporary
              .getObjectByName("LeanToPost")
              .getObjectByName("downspout-clone") &&
            ((u = sceneRoot.getObjectByName("downspout")),
              ((s = u.clone()).name = "downspout-clone"),
              (s.visible = !0),
              (s.castShadow = !0),
              (s.receiveShadow = !0),
              (s.rotation.y = THREE.Math.degToRad(-90)),
              (s.position.z = l),
              isTemporary.getObjectByName("LeanToPost").add(s)),
            ma.gutters &&
            0 == ma.hideWalls &&
            (((m = isTemporary
              .getObjectByName("LeanToPost")
              .getObjectByName("downspout-clone")).scale.y =
              1 / m.parent.scale.y),
              (m.morphTargetInfluences[m.morphTargetDictionary.height] =
                ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1)),
            ma.leanTo2Length / 2 - l - 0.08)),
        (f = ma.leanTo2Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      isTemporary.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo2PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          j.add(r);
      if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
        for (
          v = 0,
          be = ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12;
          v < ma.leanTo2Height / ma.girtSpacing;

        )
          v < be / ma.girtSpacing
            ? ((s = selectionBox.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo2Depth - l / 4
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo2Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo2Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo2Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo2Height) /
              (ma.leanTo2Pitch / 12) +
              1),
              (s = selectionBox.clone()).position.set(
                ma.leanTo2Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo2Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            j.add(s),
            v++;
    }
    if (ma.leanTo4) {
      void 0 === sceneRoot.getObjectByName("LeanTo4PostClones") &&
        (((z = new THREE.Group()).name = "LeanTo4PostClones"),
          (z.rotation.y = Math.PI / 2),
          sceneRoot.getObjectByName("leanTo4").add(z),
          ((userTop = new THREE.Group()).name = "LeanTo4PostMaster"),
          z.add(userTop)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
          userTop.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo4Height -
          (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 -
          0.5 -
          1),
        userTop.add(s);
      (P = s.getObjectByName("downspout-clone")),
        (b =
          (P &&
            ((mainCamera.position.x = -l - 0.08),
              (mainCamera.rotation.y = Math.PI),
              (mainCamera.morphTargetInfluences[
                mainCamera.morphTargetDictionary.height
              ] =
                ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1)),
            ((s = t.clone()).name = "LeanToRoofBeam"),
            (s.visible = !0),
            (s.castShadow = !0),
            (s.receiveShadow = !0),
            s.position.set(
              0,
              ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - l,
              ma.leanTo4Depth - l - 0.08
            ),
            (s.scale.x =
              ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - 0.5) / 12) - 0.5),
            (s.rotation.y = Math.PI / 2),
            (s.rotation.z = Math.atan(ma.leanTo4Pitch / 12)),
            userTop.add(s),
            void 0 !== sceneRoot.getObjectByName("downspout") &&
            void 0 !== userTop.getObjectByName("LeanToPost") &&
            void 0 ===
            userTop
              .getObjectByName("LeanToPost")
              .getObjectByName("downspout-clone") &&
            ((y = sceneRoot.getObjectByName("downspout")),
              ((s = y.clone()).name = "downspout-clone"),
              (s.visible = !0),
              (s.castShadow = !0),
              (s.receiveShadow = !0),
              (s.rotation.y = THREE.Math.degToRad(-90)),
              (s.position.z = l),
              userTop.getObjectByName("LeanToPost").add(s)),
            ma.gutters &&
            0 == ma.hideWalls &&
            (((g = userTop
              .getObjectByName("LeanToPost")
              .getObjectByName("downspout-clone")).scale.y =
              1 / g.parent.scale.y),
              (g.morphTargetInfluences[g.morphTargetDictionary.height] =
                ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1)),
            ma.leanTo4Length / 2 - l - 0.08)),
        (f = ma.leanTo4Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      userTop.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo4PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          z.add(r);
      if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
        for (
          v = 0,
          fe = ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12;
          v < ma.leanTo4Height / ma.girtSpacing;

        )
          v < fe / ma.girtSpacing
            ? ((s = selectionBox.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo4Depth - l / 4
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo4Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo4Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo4Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo4Height) /
              (ma.leanTo4Pitch / 12) +
              1),
              (s = selectionBox.clone()).position.set(
                ma.leanTo4Length / 2 - l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = selectionBox.clone()).position.set(
                ma.leanTo4Length / -2 + l / 4,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            z.add(s),
            v++;
    }
    var transformControls = ma.girtSpacing,
      boundingBoxHelper = ma.purlinSpacing;
    ((I = new THREE.Group()).name = "GirtParent"),
      R.add(I),
      2 < ma.hideWalls ? (I.visible = false) : (I.visible = !0),
      ((currentUrl = new THREE.Group()).name = "PurlinParentL"),
      currentUrl.position.set(ma.width / -2 + l + 0.1, ee, 0),
      (currentUrl.rotation.z = Math.PI / 2 - i),
      ma.roofPitch < 0 && (currentUrl.rotation.z = Math.PI / -2 - i),
      I.add(currentUrl);
    ((pathName = new THREE.Group()).name = "PurlinParentR"),
      pathName.position.set(ma.width / 2 - l - 0.1, exportedSceneData, 0),
      (pathName.rotation.z = n - Math.PI / -2),
      ma.roofPitch < 0 && (pathName.rotation.z = n - Math.PI / 2),
      I.add(pathName),
      ma.depth;
    for (
      E = sceneRoot.getObjectByName("masterSecondaryFramingPiece").clone(),
      v = 0;
      v < X / boundingBoxHelper;

    ) {
      s = E.clone();
      let e = 0;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 + 0.1
              : ma.purlinThickness / 2 + 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? 0.1 : 0.2)),
        s.position.set(v * boundingBoxHelper, l / 2 - e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        currentUrl.add(s),
        v++;
    }
    for (v = 0; v < U / boundingBoxHelper;) {
      s = E.clone();
      let e;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 - 0.05
              : ma.purlinThickness / 2 - 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? -0.15 : -0.25)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * -boundingBoxHelper, -l / 2 - e, 0)
          : s.position.set(v * boundingBoxHelper, -l / 2 + e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        pathName.add(s),
        v++;
    }
    if (isGlassMode) {
      s = E.clone();
      let e = 0;
      ma.flushGirts &&
        ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
        s.position.set(
          ma.width / -2 - 0.04 + l / 1.9 + e,
          ma.wallHeightL() - 1,
          0
        ),
        (s.scale.y = 0.5),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s),
        (s = E.clone()),
        ma.flushGirts && (s.rotation.z = Math.PI / 2),
        s.position.set(
          ma.width / 2 + 0.04 - l / 1.9 - e,
          ma.wallHeightR() - 1,
          0
        ),
        (s.scale.y = 0.5),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s);
    } else
      (s = t.clone()).position.set(
        ma.width / 2 - l - 2 / 12 / 2,
        ma.wallHeightR() - 0.5,
        (ma.depth - l) / 2
      ),
        (s.scale.x = ma.depth - l),
        (s.rotation.y = THREE.Math.degToRad(90)),
        (s.visible = !0),
        I.add(s),
        (s = t.clone()).position.set(
          ma.width / -2 + l + 2 / 12 / 2,
          ma.wallHeightL() - 0.5,
          (ma.depth - l) / 2
        ),
        (s.scale.x = ma.depth - l),
        (s.rotation.y = THREE.Math.degToRad(90)),
        (s.visible = !0),
        I.add(s),
        "Single Slope" === ma.roofType &&
        (0 <= ma.roofPitch
          ? (s = t.clone()).position.set(
            ma.width / 2 - l - 2 / 12 / 2,
            ma.wallHeightL() - 0.5,
            (ma.depth - l) / 2
          )
          : (s = t.clone()).position.set(
            ma.width / -2 + l + 2 / 12 / 2,
            ma.wallHeightR() - 0.5,
            (ma.depth - l) / 2
          ),
          (s.scale.x = ma.depth - l),
          (s.rotation.y = THREE.Math.degToRad(90)),
          (s.visible = !0),
          I.add(s));
    ma.settings.showPostFrameBottomPlate &&
      (((s = E.clone()).rotation.z = Math.PI / 2),
        (bottomPlateFlushOffset = ma.girtThickness / 2),
        s.position.set(
          ma.width / -2 - 0.04 + l / 1.9 + bottomPlateFlushOffset + 1 / 12,
          0.05,
          0
        ),
        (s.scale.y = ma.girtThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s),
        ((s = E.clone()).rotation.z = Math.PI / 2),
        s.position.set(
          ma.width / 2 + 0.04 - l / 1.9 - bottomPlateFlushOffset - 1 / 12,
          0.05,
          0
        ),
        (s.scale.y = ma.girtThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s));
    for (v = 0; v < assetBaseUrl / transformControls;) {
      if (v < ma.wallHeightL() / transformControls && ma.enclosedE) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(
            ma.width / -2 - 0.04 + l / 1.9 + e,
            v * transformControls + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.wallHeightR() / transformControls && ma.enclosedW) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(
            ma.width / 2 + 0.04 - l / 1.9 - e,
            v * transformControls + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      let e = 0;
      ma.flushGirts && (e = ma.girtThickness / 2),
        v < ma.height / transformControls &&
        (ma.enclosedS &&
          ((s = E.clone()),
            ma.flushGirts && (s.rotation.z = Math.PI / 2),
            s.position.set(
              0,
              v * transformControls + 0.05,
              ma.depth / -2 + l / 1.9 + e
            ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN) &&
        ((s = E.clone()),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          s.position.set(
            0,
            v * transformControls + 0.05,
            ma.depth / 2 - l / 1.9 - e
          ),
          (s.rotation.y = Math.PI / 2),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.width - 0.25),
          (s.visible = !0),
          I.add(s)),
        v++;
    }
    if (!ma.flushGirts)
      for (; v < (q + ma.height - 0.1) / transformControls;) {
        (exportButton = v * transformControls - ma.height),
          (exportPanel =
            ("Single Slope" !== ma.roofType &&
              (V =
                "Asymmetrical" === ma.roofType
                  ? (exportButton / q) * ma.asymmetrical
                  : ((_ = ma.width / 2), ($ = ma.width / 2), (n = i = F), 0)),
              _ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - i))),
          (fallbackMesh = $ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - n));
        ma.enclosedS &&
          ((s = E.clone()).position.set(
            V,
            v * transformControls + 0.05,
            ma.depth / -2 + l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN &&
          ((s = E.clone()).position.set(
            V,
            v * transformControls + 0.05,
            ma.depth / 2 - l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          v++;
      }
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
      (40 < ma.width
        ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
        : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
    for (
      isUIInitialized = Math.ceil(ma.width / ma.maxPostSpacing) - 1,
      materialDisplayMode = ma.depth / 2 - (l + 0.125),
      Oe =
      ma.width /
      ((isUIInitialized = isUIInitialized < 0 ? 0 : isUIInitialized) + 1),
      M = 0,
      lastSelectedMaterial = 0,
      v = 1;
      v <= isUIInitialized;
      v++
    ) {
      switch (
      ((M = ma.width / -2 + Oe * v),
        (lastSelectedMaterial = ma.height - 1 - 1),
        ((s = D.getObjectByName("columnEnd").clone()).name += "-clone"),
        !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
          ma.settings.showPostsWithOpenGableWall ||
          ma.enclosedN
          ? ((s.visible = !0),
            ma.settings.showPostFrameBottomPlate &&
            (((bottomPlateClonedObject = E.clone()).rotation.z = Math.PI / 2),
              (bottomPlateFlushOffset = ma.girtThickness / 2),
              bottomPlateClonedObject.position.set(
                0,
                0.05,
                ma.depth / 2 + 0.04 - l / 1.9 - bottomPlateFlushOffset - 0.125
              ),
              (bottomPlateClonedObject.scale.y = ma.girtThickness),
              (bottomPlateClonedObject.scale.z = ma.width - l),
              (bottomPlateClonedObject.rotation.y = THREE.Math.degToRad(90)),
              (bottomPlateClonedObject.visible = !0),
              I.add(bottomPlateClonedObject),
              ((bottomPlateClonedObject = E.clone()).rotation.z = Math.PI / 2),
              bottomPlateClonedObject.position.set(
                0,
                0.05,
                ma.depth / -2 - 0.04 + l / 1.9 + bottomPlateFlushOffset + 0.125
              ),
              (bottomPlateClonedObject.scale.y = ma.girtThickness),
              (bottomPlateClonedObject.scale.z = ma.width - l),
              (bottomPlateClonedObject.rotation.y = THREE.Math.degToRad(90)),
              (bottomPlateClonedObject.visible = !0),
              I.add(bottomPlateClonedObject)))
          : (s.visible = false),
        s.position.set(M, 0, materialDisplayMode),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          lastSelectedMaterial),
        R.add(s),
        ma.postFooting)
      ) {
        case "Post in Ground":
          var modelBoundingBox = D.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          modelBoundingBox = D.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          modelBoundingBox = D.getObjectByName(
            "footing-PermaColumnConcretePost"
          ).clone();
          break;
        case "Morton Foundation System":
          modelBoundingBox = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          modelBoundingBox = false;
      }
      if (
        (modelBoundingBox &&
          ((modelBoundingBox.visible = !0),
            modelBoundingBox.position.set(0, 0, 0),
            s.add(modelBoundingBox)),
          ((s = D.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedS
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, -materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial),
          R.add(s),
          modelBoundingBox &&
          (((cameraPosition = modelBoundingBox.clone()).visible = !0),
            Q.position.set(0, 0, 0),
            s.add(Q)),
          0 < ma.mezzanineBays)
      ) {
        var tempBoundingBox = placeholderA;
        tempBoundingBox.sort(function (e, t) {
          return e - t;
        });
        for (
          sharedMaterialLibrary = 1;
          sharedMaterialLibrary <= ma.mezzanineBays;
          sharedMaterialLibrary++
        )
          ((s = D.getObjectByName("columnEnd").clone()).name += "-clone"),
            (s.visible = !0),
            s.position.set(M, 0, tempBoundingBox[sharedMaterialLibrary]),
            (s.scale.y = ma.mezzanineHeight - 0.5),
            R.add(s);
      }
    }
  }
  if ("Hybrid" == ma.frameType) {
    (colorOptionList = skyboxHDR).visible = !0;
    var S,
      O = iblDiffuse,
      Y = 0,
      l = ("Asymmetrical" === ma.roofType && (Y = ma.asymmetrical), 0.3),
      Z = 0.66,
      K = ma.width / -2 + l - Y,
      J = ma.width / -2 + l + Y,
      ee = ma.wallHeightL() - 0.5,
      exportedSceneData = ma.wallHeightR() - 0.5,
      wallMesh = ((c = 2), (Math.PI - i) / 2),
      roofMesh = (Math.PI - n) / 2,
      trimMesh = c / Math.sin(wallMesh),
      glassMesh = c / Math.sin(roofMesh),
      doorMesh = Math.sqrt(Math.pow(trimMesh, 2) - Math.pow(c, 2)),
      sceneElementA = Math.sqrt(Math.pow(glassMesh, 2) - Math.pow(c, 2)),
      sceneElementB = Math.sqrt(
        Math.pow(ee - doorMesh, 2) + Math.pow(c - Z, 2)
      ),
      isHidden = Math.sqrt(
        Math.pow(exportedSceneData - sceneElementA, 2) + Math.pow(c - Z, 2)
      ),
      frontEndWallMesh =
        (Math.atan(doorMesh / trimMesh),
          Math.atan(sceneElementA / glassMesh),
          Math.acos((ee - doorMesh) / sceneElementB),
          Math.acos((exportedSceneData - sceneElementA) / isHidden),
          Math.abs(K) / Math.sin(i)),
      de = Math.abs(J) / Math.sin(n),
      pe =
        (Math.abs(K),
          Math.sin(i),
          Math.abs(J),
          Math.sin(n),
          Math.abs(c) / Math.sin(i)),
      me = Math.abs(c) / Math.sin(n),
      gridHelper = ma.roofHeightAtX(0) - ma.height;
    Math.max(pe, me);
    if (
      (((d = O.getObjectByName("columnSideL")).position.x =
        ma.width / -2 + l + 2 / 12 / 2),

        // console.log("size =>>>>>>>>>>> ", ma.columnSize)
        rate = ma.columnSize == "6x6" ? 1 : ma.columnSize == "8x8" ? 1.3 : ma.columnSize == "10x10" ? 1.6:0,
        ((d = O.getObjectByName("columnSideL")).scale.x = rate),
        ((d = O.getObjectByName("columnSideL")).scale.z = rate),
        (d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1),
        (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
          -2 * Math.tan(i - Math.PI / 2)),
        ((d = O.getObjectByName("columnSideR")).position.x =
          ma.width / 2 - l - 2 / 12 / 2),
        console.log("columnSideR Postion", ee - 1.1),
        ((d = O.getObjectByName("columnSideR")).scale.x = rate),
        ((d = O.getObjectByName("columnSideR")).scale.z = rate),

        (d.morphTargetInfluences[d.morphTargetDictionary.height] =
          exportedSceneData - 1.1),
        (d.morphTargetInfluences[d.morphTargetDictionary.slantTop] =
          -2 * Math.tan(n - Math.PI / 2)),
        void 0 !== O.getObjectByName("footingL") &&
        (S = O.getObjectByName("footingL")).userData.type !== ma.postFooting &&
        (S.parent.remove(S), S.geometry.dispose(), (S = void 0)),
        void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== O.getObjectByName("columnSideL") &&
        void 0 !== O.getObjectByName("columnSideR") &&
        void 0 ===
        O.getObjectByName("columnSideL").getObjectByName("downspout-clone") &&
        void 0 ===
        O.getObjectByName("columnSideR").getObjectByName("downspout-clone") &&
        ((h = sceneRoot.getObjectByName("downspout")),
          ((s = h.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(180)),
          (s.position.x = -l),
          O.getObjectByName("columnSideL").add(s),
          O.getObjectByName("columnSideR").add(s.clone())),
        ma.gutters &&
        ((ge =
          O.getObjectByName("columnSideL").getObjectByName("downspout-clone")),
          (T =
            O.getObjectByName("columnSideR").getObjectByName("downspout-clone")),
          (ge.morphTargetInfluences[ge.morphTargetDictionary.height] =
            ma.height -
            1.2 -
            (ma.eaveL / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
          (T.morphTargetInfluences[T.morphTargetDictionary.height] =
            ma.height -
            1.2 -
            (ma.eaveR / Math.hypot(12, ma.roofPitch)) * ma.roofPitch),
          (ge.morphTargetInfluences[ge.morphTargetDictionary.downspoutOverhang] =
            (ma.eaveL / Math.hypot(12, ma.roofPitch)) * 12),
          (T.morphTargetInfluences[T.morphTargetDictionary.downspoutOverhang] =
            (ma.eaveR / Math.hypot(12, ma.roofPitch)) * 12),
          0 < ma.hideWalls
            ? ((ge.visible = false), (T.visible = false))
            : ("Single Slope" != ma.roofType ||
              ("Single Slope" == ma.roofType && 0 < ma.roofPitch)
              ? (ge.visible = !0)
              : (ge.visible = false),
              "Single Slope" != ma.roofType ||
                ("Single Slope" == ma.roofType && ma.roofPitch < 0)
                ? (T.visible = !0)
                : (T.visible = false))),
        void 0 === O.getObjectByName("footingL"))
    ) {
      switch (ma.postFooting) {
        case "Post in Ground":
          S = O.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          S = O.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          S = O.getObjectByName("footing-PermaColumnConcretePost").clone();
          break;
        case "Morton Foundation System":
          S = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          S = false;
      }
      S &&
        ((S.rotation.y = THREE.Math.degToRad(90)),
          (S.visible = !0),
          (S.name = "footingL"),
          (S.userData.type = ma.postFooting),
          O.add(S));
    } else S = O.getObjectByName("footingL");
    S &&
      ((S.position.x = ma.width / -2 + l + 2 / 12 / 2),
        void 0 !== O.getObjectByName("footingR") &&
        (configRender = O.getObjectByName("footingR")).userData.type !==
        ma.postFooting &&
        (configRender.parent.remove(configRender),
          configRender.geometry.dispose(),
          (configRender = void 0)),
        void 0 === O.getObjectByName("footingR")
          ? (((configRender = S.clone()).rotation.y = THREE.Math.degToRad(90)),
            (configRender.name = "footingR"),
            (configRender.userData.type = ma.postFooting),
            O.add(configRender))
          : (configRender = O.getObjectByName("footingR")),
        (configRender.position.x = ma.width / 2 - l - 2 / 12 / 2));
    var minimapRenderer = O.getObjectByName("beamRoofL"),
      orthoCamera = 1.5,
      p = 0.375,
      gltfLoader = Math.abs(K) - p,
      textureLoader = Math.abs(J) - p,
      hdrLoader =
        "Single Slope" === ma.roofType
          ? ((G = 12 / ((ma.width - l - l) / q)),
            12 / (-(ma.width - l - l) / q))
          : "Asymmetrical" === ma.roofType
            ? ((G = 12 / (_ / q)), 12 / ($ / q))
            : ((G = 12 / ((ma.width / 2 - l + Y) / q)),
              12 / ((ma.width / 2 - l - Y) / q)),
      dracoLoader = (orthoCamera * G) / 12,
      objLoader = (orthoCamera * hdrLoader) / 12;
    if (
      ((minimapRenderer.position.x = ma.width / -2 + l + p),
        (minimapRenderer.position.y = ma.height - 0.4),
        (minimapRenderer.morphTargetInfluences[
          minimapRenderer.morphTargetDictionary.length
        ] = gltfLoader - 1),
        (minimapRenderer.morphTargetInfluences[
          minimapRenderer.morphTargetDictionary.shear
        ] = dracoLoader),
        "Single Slope" !== ma.roofType)
    ) {
      (textureLoader = de - p),
        ((beamR = O.getObjectByName("beamRoofR")).visible = !0),
        (beamR.position.x = ma.width / 2 - l - p),
        (beamR.position.y = ma.height - 0.4),
        (beamR.morphTargetInfluences[beamR.morphTargetDictionary.length] =
          textureLoader - 1),
        (beamR.morphTargetInfluences[beamR.morphTargetDictionary.shear] =
          objLoader),
        (beamR.rotation.z = roofGroup.rotation.z),
        (beamR.rotation.y = THREE.Math.degToRad(0)),
        (gltfLoader = frontEndWallMesh - p),
        ((minimapRenderer = O.getObjectByName("beamRoofL")).visible = !0),
        (minimapRenderer.position.x = ma.width / -2 + l + p),
        (minimapRenderer.position.y = ma.height - 0.4),
        (minimapRenderer.morphTargetInfluences[
          minimapRenderer.morphTargetDictionary.length
        ] = gltfLoader - 1),
        (minimapRenderer.morphTargetInfluences[
          minimapRenderer.morphTargetDictionary.shear
        ] = dracoLoader),
        (minimapRenderer.rotation.z = -wallGroup.rotation.z),
        (crossMemberL = O.getObjectByName("crossMemberL")),
        (crossMemberR = O.getObjectByName("crossMemberR"));
      let e = (ma.peakHeight() - Math.max(pe, me) + ma.height) / 2;
      e > ma.peakHeight() - Math.max(pe, me) - 1.5 &&
        (e =
          (2 * (ma.peakHeight() - Math.max(pe, me)) +
            ma.height -
            Math.max(pe, me)) /
          3),
        (crossMemberL.position.y = e),
        (crossMemberR.position.y = e),
        (crossMemberL.rotation.z = THREE.Math.degToRad(-90)),
        (crossMemberR.rotation.z = THREE.Math.degToRad(90));
      (u = (12 * (ma.peakHeight() - Math.max(pe, me) - e)) / ma.roofPitch),
        (m = (12 * (ma.peakHeight() - Math.max(pe, me) - e)) / ma.roofPitch);
      (crossMemberL.morphTargetInfluences[
        crossMemberL.morphTargetDictionary.length
      ] = u - 1 - ma.roofPitch / 20),
        (crossMemberR.morphTargetInfluences[
          crossMemberR.morphTargetDictionary.length
        ] = m - 1 - ma.roofPitch / 20);
    } else
      0 <= ma.roofPitch
        ? ((minimapRenderer = O.getObjectByName("beamRoofL")),
          (gltfLoader = Math.abs(de) + Math.abs(frontEndWallMesh) - 2 * p),
          (minimapRenderer.visible = !0),
          (minimapRenderer.position.x = ma.width / -2 + l + p),
          (minimapRenderer.position.y = ma.height - 0.4),
          (minimapRenderer.morphTargetInfluences[
            minimapRenderer.morphTargetDictionary.length
          ] = gltfLoader - 1),
          (minimapRenderer.morphTargetInfluences[
            minimapRenderer.morphTargetDictionary.shear
          ] = dracoLoader),
          (minimapRenderer.rotation.z = -wallGroup.rotation.z),
          ((beamR = O.getObjectByName("beamRoofR")).visible = false))
        : ((beamR = O.getObjectByName("beamRoofR")),
          (textureLoader = Math.abs(de) + Math.abs(frontEndWallMesh) - 2 * p),
          (beamR.visible = !0),
          (beamR.position.x = ma.width / 2 - l - p),
          (beamR.position.y = ma.height - 0.4),
          (beamR.morphTargetInfluences[beamR.morphTargetDictionary.length] =
            textureLoader - 1),
          (beamR.morphTargetInfluences[beamR.morphTargetDictionary.shear] =
            -objLoader),
          (beamR.rotation.z = roofGroup.rotation.z),
          (beamR.rotation.y = THREE.Math.degToRad(0)),
          ((minimapRenderer = O.getObjectByName("beamRoofL")).visible = false)),
        (crossMemberL = O.getObjectByName("crossMemberL")),
        (crossMemberR = O.getObjectByName("crossMemberR")),
        (crossMemberL.visible = false),
        (crossMemberR.visible = false);
    var mtlLoader = O.getObjectByName("webbing"),
      B = (2 * orthoCamera) / Math.sqrt(3);
    vo(minimapRenderer), vo(beamR);
    for (v = 0; v < gltfLoader / B; v++)
      ((helperObject = mtlLoader.clone()).position.x = v * B),
        (helperObject.rotation.z = THREE.Math.degToRad(30)),
        (helperObject.morphTargetInfluences[
          helperObject.morphTargetDictionary.length
        ] = B - 1),
        v * B + B / 2 < gltfLoader - dracoLoader && (helperObject.visible = !0),
        minimapRenderer.add(helperObject),
        0 < v &&
        (((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(-30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          (helperObject.visible = !0),
          minimapRenderer.add(helperObject));
    for (var v = 0; v < textureLoader / B; v++)
      ((helperObject = mtlLoader.clone()).position.x = v * B),
        (helperObject.rotation.z = THREE.Math.degToRad(30)),
        (helperObject.morphTargetInfluences[
          helperObject.morphTargetDictionary.length
        ] = B - 1),
        v * B + B / 2 < textureLoader - objLoader &&
        (helperObject.visible = !0),
        beamR.add(helperObject),
        0 < v &&
        (((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(-30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          (helperObject.visible = !0),
          beamR.add(helperObject));
    ((R = new THREE.Group()).name = "HybridFrameClones"),
      colorOptionList.add(R),
      (placeholderA = ti(ma.maxTrussSpacing, l, O, R)),
      void 0 !== sceneRoot.getObjectByName("LeanTo1PostClones") &&
      sceneRoot
        .getObjectByName("leanTo1")
        .remove(sceneRoot.getObjectByName("LeanTo1PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo2PostClones") &&
      sceneRoot
        .getObjectByName("leanTo2")
        .remove(sceneRoot.getObjectByName("LeanTo2PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo3PostClones") &&
      sceneRoot
        .getObjectByName("leanTo3")
        .remove(sceneRoot.getObjectByName("LeanTo3PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo4PostClones") &&
      sceneRoot
        .getObjectByName("leanTo4")
        .remove(sceneRoot.getObjectByName("LeanTo4PostClones"));
    let e, t, a;
    if (
      (void 0 !== O.getObjectByName("columnSide") &&
        (e = O.getObjectByName("columnSide")),
        void 0 !== O.getObjectByName("beamRoof") &&
        (t = O.getObjectByName("beamRoof")),
        (a = false),
        ma.hasOwnProperty("postFooting"))
    )
      switch (ma.postFooting) {
        case "Post in Ground":
          a = O.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          a = O.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          a = O.getObjectByName("footing-PermaColumnConcretePost").clone();
          break;
        case "Morton Foundation System":
          a = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          a = false;
      }
    if (0 < ma.settings.postsOnGableRoofOverhangsOver) {
      if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = O.clone()).name = "OverhangFrontFrame"),
            (clonedFrame.position.z = ma.depth / 2 + ma.gableFront - l - 0.5),
            R.add(clonedFrame),
            ma.gableFront > ma.maxPostSpacing)
        )
          for (
            var fbxLoader = Math.ceil(ma.gableFront / ma.maxPostSpacing),
            stlLoader = ma.gableFront / fbxLoader,
            v = 1;
            v < fbxLoader;
            v++
          )
            ((clonedFrame = O.clone()).name = "OverhangFrontFrame"),
              (clonedFrame.position.z = ma.depth / 2 + stlLoader * v),
              R.add(clonedFrame);
        if (ma.settings.enclosedGableRoofOverhangTriangles) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureFront")
            ? ((P = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = mainCamera.deepClone()).name = "overhangEnclosureFront"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureFront")),
            (e.position.z = ma.depth / 2),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableFront - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureFront") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureFront"
          ).visible = false);
      if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          (((clonedFrame = O.clone()).name = "OverhangBackFrame"),
            (clonedFrame.position.z = ma.depth / -2 - ma.gableBack + l + 0.5),
            R.add(clonedFrame),
            ma.gableBack > ma.maxPostSpacing)
        )
          for (
            var plyLoader = Math.ceil(ma.gableBack / ma.maxPostSpacing),
            glbLoader = ma.gableBack / plyLoader,
            v = 1;
            v < plyLoader;
            v++
          )
            ((clonedFrame = O.clone()).name = "OverhangFrontFrame"),
              (clonedFrame.position.z = ma.depth / -2 - glbLoader * v),
              R.add(clonedFrame);
        if (ma.settings.enclosedGableRoofOverhangTriangles) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureBack")
            ? ((y = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = y.deepClone()).name = "overhangEnclosureBack"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureBack")),
            (e.position.z = ma.depth / -2),
            (e.rotation.y = Math.PI),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableBack - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureBack") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureBack"
          ).visible = false);
    }
    var configMain = sceneRoot.getObjectByName("masterSecondaryFramingPiece");
    if (ma.leanTo1) {
      void 0 === sceneRoot.getObjectByName("LeanTo1PostClones") &&
        (((H = new THREE.Group()).name = "LeanTo1PostClones"),
          (H.rotation.y = 0),
          sceneRoot.getObjectByName("leanTo1").add(H),
          ((C = new THREE.Group()).name = "LeanTo1PostMaster"),
          H.add(C)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
          C.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo1Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo1Height -
          (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 -
          0.5 -
          1),
        C.add(s);
      g = s.getObjectByName("downspout-clone");
      g &&
        ((g.position.x = -l - 0.08),
          (g.rotation.y = Math.PI),
          (g.morphTargetInfluences[g.morphTargetDictionary.height] =
            ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1));
      ((x = t.clone()).name = "LeanToRoofBeam"),
        (x.visible = !0),
        (x.castShadow = !0),
        (x.receiveShadow = !0),
        x.position.set(
          0,
          ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - l,
          ma.leanTo1Depth - l - 0.36
        ),
        (x.morphTargetInfluences[x.morphTargetDictionary.length] =
          ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - 0.1) / 12) - 0.6 - 1),
        (x.morphTargetInfluences[x.morphTargetDictionary.shear] =
          (orthoCamera * ma.leanTo1Pitch) / 12),
        (x.rotation.y = Math.PI / 2),
        (x.rotation.z = Math.atan(ma.leanTo1Pitch / 12)),
        C.add(x);
      for (
        var configAlt =
          x.morphTargetInfluences[x.morphTargetDictionary.length] + 1,
        configShadows =
          x.morphTargetInfluences[x.morphTargetDictionary.shear],
        v = 0;
        v < configAlt / B;
        v++
      )
        ((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          v * B + B / 2 < configAlt - configShadows &&
          (helperObject.visible = !0),
          x.add(helperObject),
          0 < v &&
          (((helperObject = mtlLoader.clone()).position.x = v * B),
            (helperObject.rotation.z = THREE.Math.degToRad(-30)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.length
            ] = B - 1),
            (helperObject.visible = !0),
            x.add(helperObject));
      void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== C.getObjectByName("LeanToPost") &&
        void 0 ===
        C.getObjectByName("LeanToPost").getObjectByName("downspout-clone") &&
        ((d = sceneRoot.getObjectByName("downspout")),
          ((s = d.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(-90)),
          (s.position.z = l),
          C.getObjectByName("LeanToPost").add(s)),
        ma.gutters &&
        0 == ma.hideWalls &&
        (((h =
          C.getObjectByName("LeanToPost").getObjectByName(
            "downspout-clone"
          )).scale.y = 1 / h.parent.scale.y),
          (h.morphTargetInfluences[h.morphTargetDictionary.height] =
            ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12 - 1));
      (b = ma.leanTo1Length / 2 - l - 0.08),
        (f = ma.leanTo1Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      C.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo1PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          H.add(r);
      if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
        for (
          v = 0,
          Te = ma.leanTo1Height - (ma.leanTo1Depth * ma.leanTo1Pitch) / 12;
          v < ma.leanTo1Height / ma.girtSpacing;

        )
          v < Te / ma.girtSpacing
            ? ((s = configMain.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo1Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo1Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              H.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo1Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              H.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo1Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo1Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo1Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo1Height) /
              (ma.leanTo1Pitch / 12) +
              1),
              (s = configMain.clone()).position.set(
                ma.leanTo1Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              H.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo1Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            H.add(s),
            v++;
    }
    if (ma.leanTo3) {
      void 0 === sceneRoot.getObjectByName("LeanTo3PostClones") &&
        (((L = new THREE.Group()).name = "LeanTo3PostClones"),
          (L.rotation.y = Math.PI),
          sceneRoot.getObjectByName("leanTo3").add(L),
          ((N = new THREE.Group()).name = "LeanTo3PostMaster"),
          L.add(N)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.rotation.set(0, 0, 0),
          s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
          N.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo3Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo3Height -
          (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 -
          0.5 -
          1),
        N.add(s);
      ge = s.getObjectByName("downspout-clone");
      ge &&
        ((ge.position.x = -l - 0.08),
          (ge.rotation.y = Math.PI),
          (ge.morphTargetInfluences[ge.morphTargetDictionary.height] =
            ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1));
      ((x = t.clone()).name = "LeanToRoofBeam"),
        (x.visible = !0),
        (x.castShadow = !0),
        (x.receiveShadow = !0),
        x.position.set(
          0,
          ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - l,
          ma.leanTo3Depth - l - 0.36
        ),
        (x.morphTargetInfluences[x.morphTargetDictionary.length] =
          ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - 0.1) / 12) - 0.6 - 1),
        (x.morphTargetInfluences[x.morphTargetDictionary.shear] =
          (orthoCamera * ma.leanTo3Pitch) / 12),
        (x.rotation.y = Math.PI / 2),
        (x.rotation.z = Math.atan(ma.leanTo3Pitch / 12)),
        N.add(x);
      for (
        var configCamera =
          x.morphTargetInfluences[x.morphTargetDictionary.length] + 1,
        configEnvironment =
          x.morphTargetInfluences[x.morphTargetDictionary.shear],
        v = 0;
        v < configCamera / B;
        v++
      )
        ((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          v * B + B / 2 < configCamera - configEnvironment &&
          (helperObject.visible = !0),
          x.add(helperObject),
          0 < v &&
          (((helperObject = mtlLoader.clone()).position.x = v * B),
            (helperObject.rotation.z = THREE.Math.degToRad(-30)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.length
            ] = B - 1),
            (helperObject.visible = !0),
            x.add(helperObject));
      void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== N.getObjectByName("LeanToPost") &&
        void 0 ===
        N.getObjectByName("LeanToPost").getObjectByName("downspout-clone") &&
        ((T = sceneRoot.getObjectByName("downspout")),
          ((s = T.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(-90)),
          (s.position.z = l),
          N.getObjectByName("LeanToPost").add(s)),
        ma.gutters &&
        0 == ma.hideWalls &&
        (((configRender =
          N.getObjectByName("LeanToPost").getObjectByName(
            "downspout-clone"
          )).scale.y = 1 / configRender.parent.scale.y),
          (configRender.morphTargetInfluences[
            configRender.morphTargetDictionary.height
          ] = ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12 - 1));
      (b = ma.leanTo3Length / 2 - l - 0.08),
        (f = ma.leanTo3Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      N.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo3PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          L.add(r);
      if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
        for (
          v = 0,
          ye = ma.leanTo3Height - (ma.leanTo3Depth * ma.leanTo3Pitch) / 12;
          v < ma.leanTo3Height / ma.girtSpacing;

        )
          v < ye / ma.girtSpacing
            ? ((s = configMain.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo3Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo3Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo3Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo3Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo3Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo3Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo3Height) /
              (ma.leanTo3Pitch / 12) +
              1),
              (s = configMain.clone()).position.set(
                ma.leanTo3Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              L.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo3Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            L.add(s),
            v++;
    }
    if (ma.leanTo2) {
      void 0 === sceneRoot.getObjectByName("LeanTo2PostClones") &&
        (((j = new THREE.Group()).name = "LeanTo2PostClones"),
          (j.rotation.y = Math.PI / -2),
          sceneRoot.getObjectByName("leanTo2").add(j),
          ((isTemporary = new THREE.Group()).name = "LeanTo2PostMaster"),
          j.add(isTemporary)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
          isTemporary.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo2Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo2Height -
          (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 -
          0.5 -
          1),
        isTemporary.add(s);
      u = s.getObjectByName("downspout-clone");
      u &&
        ((u.position.x = -l - 0.08),
          (u.rotation.y = Math.PI),
          (u.morphTargetInfluences[u.morphTargetDictionary.height] =
            ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1));
      ((x = t.clone()).name = "LeanToRoofBeam"),
        (x.visible = !0),
        (x.castShadow = !0),
        (x.receiveShadow = !0),
        x.position.set(
          0,
          ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - l,
          ma.leanTo2Depth - l - 0.36
        ),
        (x.morphTargetInfluences[x.morphTargetDictionary.length] =
          ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - 0.1) / 12) - 0.6 - 1),
        (x.morphTargetInfluences[x.morphTargetDictionary.shear] =
          (orthoCamera * ma.leanTo2Pitch) / 12),
        (x.rotation.y = Math.PI / 2),
        (x.rotation.z = Math.atan(ma.leanTo2Pitch / 12)),
        isTemporary.add(x);
      for (
        var configTextures =
          x.morphTargetInfluences[x.morphTargetDictionary.length] + 1,
        configMesh = x.morphTargetInfluences[x.morphTargetDictionary.shear],
        v = 0;
        v < configTextures / B;
        v++
      )
        ((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          v * B + B / 2 < configTextures - configMesh &&
          (helperObject.visible = !0),
          x.add(helperObject),
          0 < v &&
          (((helperObject = mtlLoader.clone()).position.x = v * B),
            (helperObject.rotation.z = THREE.Math.degToRad(-30)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.length
            ] = B - 1),
            (helperObject.visible = !0),
            x.add(helperObject));
      void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== isTemporary.getObjectByName("LeanToPost") &&
        void 0 ===
        isTemporary
          .getObjectByName("LeanToPost")
          .getObjectByName("downspout-clone") &&
        ((m = sceneRoot.getObjectByName("downspout")),
          ((s = m.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(-90)),
          (s.position.z = l),
          isTemporary.getObjectByName("LeanToPost").add(s)),
        ma.gutters &&
        0 == ma.hideWalls &&
        (((P = isTemporary
          .getObjectByName("LeanToPost")
          .getObjectByName("downspout-clone")).scale.y =
          1 / mainCamera.parent.scale.y),
          (mainCamera.morphTargetInfluences[
            mainCamera.morphTargetDictionary.height
          ] = ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12 - 1));
      (b = ma.leanTo2Length / 2 - l - 0.08),
        (f = ma.leanTo2Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      isTemporary.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo2PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          j.add(r);
      if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
        for (
          v = 0,
          be = ma.leanTo2Height - (ma.leanTo2Depth * ma.leanTo2Pitch) / 12;
          v < ma.leanTo2Height / ma.girtSpacing;

        )
          v < be / ma.girtSpacing
            ? ((s = configMain.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo2Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo2Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo2Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo2Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo2Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo2Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo2Height) /
              (ma.leanTo2Pitch / 12) +
              1),
              (s = configMain.clone()).position.set(
                ma.leanTo2Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              j.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo2Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            j.add(s),
            v++;
    }
    if (ma.leanTo4) {
      void 0 === sceneRoot.getObjectByName("LeanTo4PostClones") &&
        (((z = new THREE.Group()).name = "LeanTo4PostClones"),
          (z.rotation.y = Math.PI / 2),
          sceneRoot.getObjectByName("leanTo4").add(z),
          ((userTop = new THREE.Group()).name = "LeanTo4PostMaster"),
          z.add(userTop)),
        a &&
        (((s = a.clone()).name = "LeanToPostFooting"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
          userTop.add(s)),
        ((s = e.clone()).name = "LeanToPost"),
        (s.visible = !0),
        (s.castShadow = !0),
        (s.receiveShadow = !0),
        s.position.set(0, 0, ma.leanTo4Depth - l - 0.08),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          ma.leanTo4Height -
          (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 -
          0.5 -
          1),
        userTop.add(s);
      y = s.getObjectByName("downspout-clone");
      y &&
        ((y.position.x = -l - 0.08),
          (y.rotation.y = Math.PI),
          (y.morphTargetInfluences[y.morphTargetDictionary.height] =
            ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1));
      ((x = t.clone()).name = "LeanToRoofBeam"),
        (x.visible = !0),
        (x.castShadow = !0),
        (x.receiveShadow = !0),
        x.position.set(
          0,
          ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - l,
          ma.leanTo4Depth - l - 0.36
        ),
        (x.morphTargetInfluences[x.morphTargetDictionary.length] =
          ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - 0.1) / 12) - 0.6 - 1),
        (x.morphTargetInfluences[x.morphTargetDictionary.shear] =
          (orthoCamera * ma.leanTo4Pitch) / 12),
        (x.rotation.y = Math.PI / 2),
        (x.rotation.z = Math.atan(ma.leanTo4Pitch / 12)),
        userTop.add(x);
      for (
        var x,
        configUI =
          x.morphTargetInfluences[x.morphTargetDictionary.length] + 1,
        configSnapping =
          x.morphTargetInfluences[x.morphTargetDictionary.shear],
        v = 0;
        v < configUI / B;
        v++
      )
        ((helperObject = mtlLoader.clone()).position.x = v * B),
          (helperObject.rotation.z = THREE.Math.degToRad(30)),
          (helperObject.morphTargetInfluences[
            helperObject.morphTargetDictionary.length
          ] = B - 1),
          v * B + B / 2 < configUI - configSnapping &&
          (helperObject.visible = !0),
          x.add(helperObject),
          0 < v &&
          (((helperObject = mtlLoader.clone()).position.x = v * B),
            (helperObject.rotation.z = THREE.Math.degToRad(-30)),
            (helperObject.morphTargetInfluences[
              helperObject.morphTargetDictionary.length
            ] = B - 1),
            (helperObject.visible = !0),
            x.add(helperObject));
      void 0 !== sceneRoot.getObjectByName("downspout") &&
        void 0 !== userTop.getObjectByName("LeanToPost") &&
        void 0 ===
        userTop
          .getObjectByName("LeanToPost")
          .getObjectByName("downspout-clone") &&
        ((g = sceneRoot.getObjectByName("downspout")),
          ((s = g.clone()).name = "downspout-clone"),
          (s.visible = !0),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.rotation.y = THREE.Math.degToRad(-90)),
          (s.position.z = l),
          userTop.getObjectByName("LeanToPost").add(s)),
        ma.gutters &&
        0 == ma.hideWalls &&
        (((d = userTop
          .getObjectByName("LeanToPost")
          .getObjectByName("downspout-clone")).scale.y =
          1 / d.parent.scale.y),
          (d.morphTargetInfluences[d.morphTargetDictionary.height] =
            ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12 - 1));
      (b = ma.leanTo4Length / 2 - l - 0.08),
        (f = ma.leanTo4Length / -2 + l + 0.08),
        (w = Math.ceil((b - f) / ma.maxLeantoPostSpacing));
      userTop.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo4PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r
            .getObjectByName("LeanToPost")
            .getObjectByName("downspout-clone").visible = false),
          z.add(r);
      if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
        for (
          v = 0,
          fe = ma.leanTo4Height - (ma.leanTo4Depth * ma.leanTo4Pitch) / 12;
          v < ma.leanTo4Height / ma.girtSpacing;

        )
          v < fe / ma.girtSpacing
            ? ((s = configMain.clone()).position.set(
              0,
              v * ma.girtSpacing + 0.05,
              ma.leanTo4Depth - l / 2
            ),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = ma.leanTo4Length),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo4Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo4Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                ma.leanTo4Depth / 2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = ma.leanTo4Depth))
            : ((k =
              (v * ma.girtSpacing - ma.leanTo4Height) /
              (ma.leanTo4Pitch / 12) +
              1),
              (s = configMain.clone()).position.set(
                ma.leanTo4Length / 2 - l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              z.add(s),
              (s = configMain.clone()).position.set(
                ma.leanTo4Length / -2 + l / 2,
                v * ma.girtSpacing + 0.05,
                k / -2 - 0.2
              ),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            z.add(s),
            v++;
    }
    var configPhysics = ma.girtSpacing,
      configAnimation = ma.purlinSpacing;
    ((I = new THREE.Group()).name = "GirtParent"),
      R.add(I),
      2 < ma.hideWalls ? (I.visible = false) : (I.visible = !0),
      ((currentUrl = new THREE.Group()).name = "PurlinParentL"),
      currentUrl.position.set(ma.width / -2, ma.wallHeightL(), 0),
      (currentUrl.rotation.z = Math.PI / 2 - i),
      ma.roofPitch < 0 && (currentUrl.rotation.z = Math.PI / -2 - i),
      I.add(currentUrl);
    ((pathName = new THREE.Group()).name = "PurlinParentR"),
      pathName.position.set(ma.width / 2, ma.wallHeightR(), 0),
      (pathName.rotation.z = n - Math.PI / -2),
      ma.roofPitch < 0 && (pathName.rotation.z = n - Math.PI / 2),
      I.add(pathName),
      ma.depth;
    for (
      E = sceneRoot.getObjectByName("masterSecondaryFramingPiece").clone(),
      v = 0;
      v < (X - l) / configAnimation;

    ) {
      s = E.clone();
      let e = 0;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e = (ma.roofPitch, ma.purlinThickness / 2 + 0.1)))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? 0.1 : 0.2)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * configAnimation, -l / 2 - e, 0)
          : s.position.set(v * configAnimation, -l / 2 - 0.25 - e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        currentUrl.add(s),
        v++;
    }
    for (v = 0; v < (U - l) / configAnimation;) {
      s = E.clone();
      let e;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType &&
          (e =
            0 <= ma.roofPitch
              ? ma.purlinThickness / 2 - 0.05
              : ma.purlinThickness / 2 - 0.2))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? -0.15 : -0.25)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * -configAnimation, l / 2 - 0.45 - e, 0)
          : s.position.set(v * configAnimation, l / 2 + 0.25 + e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        pathName.add(s),
        v++;
    }
    s = E.clone();
    let o = 0;
    ma.flushGirts && ((s.rotation.z = Math.PI / 2), (o = ma.girtThickness / 2)),
      s.position.set(
        ma.width / 2 + 0.04 - l / 1.9 - o,
        ma.wallHeightR() - 0.65,
        0
      ),
      (s.scale.y = ma.girtThickness),
      (s.scale.z = ma.depth - l),
      (s.rotation.y = 0),
      (s.visible = !0),
      I.add(s),
      (s = E.clone()),
      ma.flushGirts &&
      ((s.rotation.z = Math.PI / 2), (o = ma.girtThickness / 2)),
      s.position.set(
        ma.width / -2 - 0.04 + l / 1.9 + o,
        ma.wallHeightL() - 0.65,
        0
      ),
      (s.scale.y = ma.girtThickness),
      (s.scale.z = ma.depth - l),
      (s.rotation.y = 0),
      (s.visible = !0),
      I.add(s),
      ma.settings.showPostFrameBottomPlate &&
      (((s = E.clone()).rotation.z = Math.PI / 2),
        (bottomPlateFlushOffset = ma.girtThickness / 2),
        s.position.set(
          ma.width / -2 - 0.04 + l / 1.9 + bottomPlateFlushOffset + 1 / 12,
          0.05,
          0
        ),
        (s.scale.y = ma.girtThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s),
        ((s = E.clone()).rotation.z = Math.PI / 2),
        s.position.set(
          ma.width / 2 + 0.04 - l / 1.9 - bottomPlateFlushOffset - 1 / 12,
          0.05,
          0
        ),
        (s.scale.y = ma.girtThickness),
        (s.scale.z = ma.depth - l),
        (s.rotation.y = 0),
        (s.visible = !0),
        I.add(s));
    for (v = 0; v < assetBaseUrl / configPhysics;) {
      if (v < ma.wallHeightL() / configPhysics && ma.enclosedE) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(
            ma.width / -2 - 0.04 + l / 1.9 + e,
            v * configPhysics + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.wallHeightR() / configPhysics && ma.enclosedW) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2)),
          s.position.set(
            ma.width / 2 + 0.04 - l / 1.9 - e,
            v * configPhysics + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - l),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          (s.rotation.y = 0),
          (s.visible = !0),
          I.add(s);
      }
      let e = 0;
      ma.flushGirts && (e = ma.girtThickness / 2),
        v < ma.height / configPhysics &&
        (ma.enclosedS &&
          ((s = E.clone()),
            ma.flushGirts && (s.rotation.z = Math.PI / 2),
            s.position.set(
              0,
              v * configPhysics + 0.05,
              ma.depth / -2 + l / 1.9 + e
            ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN) &&
        ((s = E.clone()),
          ma.flushGirts && (s.rotation.z = Math.PI / 2),
          s.position.set(
            0,
            v * configPhysics + 0.05,
            ma.depth / 2 - l / 1.9 - e
          ),
          (s.rotation.y = Math.PI / 2),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.width - 0.25),
          (s.visible = !0),
          I.add(s)),
        v++;
    }
    if (!ma.flushGirts)
      for (; v < (q + ma.height - 0.1) / configPhysics;) {
        (exportButton = v * configPhysics - ma.height),
          (exportPanel =
            ("Single Slope" !== ma.roofType &&
              (V =
                "Asymmetrical" === ma.roofType
                  ? (exportButton / q) * ma.asymmetrical
                  : ((_ = ma.width / 2), ($ = ma.width / 2), (n = i = F), 0)),
              _ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - i))),
          (fallbackMesh = $ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - n));
        ma.enclosedS &&
          ((s = E.clone()).position.set(
            V,
            v * configPhysics + 0.05,
            ma.depth / -2 + l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN &&
          ((s = E.clone()).position.set(
            V,
            v * configPhysics + 0.05,
            ma.depth / 2 - l / 1.9
          ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          v++;
      }
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
      (40 < ma.width
        ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
        : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
    for (
      isUIInitialized = Math.ceil(ma.width / ma.maxPostSpacing) - 1,
      materialDisplayMode = ma.depth / 2 - (l + 0.125),
      Oe =
      ma.width /
      ((isUIInitialized = isUIInitialized < 0 ? 0 : isUIInitialized) + 1),
      M = 0,
      lastSelectedMaterial = 0,
      v = 1;
      v <= isUIInitialized;
      v++
    ) {
      switch (
      ((M = ma.width / -2 + Oe * v),
        (lastSelectedMaterial = ma.height - 1 - 1),
        (lastSelectedMaterial =
          M >= ma.asymmetrical
            ? ma.roofHeightAtX(M) - 1 - objLoader - orthoCamera - 0.25
            : ma.roofHeightAtX(M) - 1 - dracoLoader - orthoCamera - 0.25),
        ((s = O.getObjectByName("columnEnd").clone()).name += "-clone"),
        !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
          ma.settings.showPostsWithOpenGableWall ||
          ma.enclosedN
          ? (s.visible = !0)
          : (s.visible = false),
        s.position.set(M, 0, materialDisplayMode),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          lastSelectedMaterial),
        R.add(s),
        ma.postFooting)
      ) {
        case "Post in Ground":
          modelBoundingBox = O.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          modelBoundingBox = O.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          modelBoundingBox = O.getObjectByName(
            "footing-PermaColumnConcretePost"
          ).clone();
          break;
        case "Morton Foundation System":
          modelBoundingBox = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          modelBoundingBox = false;
      }
      if (
        (modelBoundingBox &&
          ((modelBoundingBox.visible = ma.enclosedN),
            modelBoundingBox.position.set(0, 0, 0),
            s.add(modelBoundingBox)),
          ((s = O.getObjectByName("columnEnd").clone()).name += "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedS
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, -materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial),
          R.add(s),
          modelBoundingBox &&
          (((cameraPosition = modelBoundingBox.clone()).visible = ma.enclosedS),
            Q.position.set(0, 0, 0),
            s.add(Q)),
          0 < ma.mezzanineBays)
      ) {
        var configLighting = placeholderA;
        configLighting.sort(function (e, t) {
          return e - t;
        });
        for (
          sharedMaterialLibrary = 1;
          sharedMaterialLibrary <= ma.mezzanineBays;
          sharedMaterialLibrary++
        )
          ((s = O.getObjectByName("columnEnd").clone()).name += "-clone"),
            (s.visible = !0),
            s.position.set(M, 0, configLighting[sharedMaterialLibrary]),
            (s.scale.y = ma.mezzanineHeight - 0.5),
            R.add(s);
      }
    }
  }
  if ("Open Web Truss" == ma.frameType) {
    (colorOptionList = reflectionProbe).visible = !0;
    var configExport = irradianceMap;
    configExport.visible = false;
    ((R = new THREE.Group()).name = "OpenWebFrameClones"),
      colorOptionList.add(R);
    var R,
      h = new THREE.Group(),
      Y =
        ((h.name = "primaryFrame"),
          R.add(h),
          void 0 === configExport.getObjectByName("WebbingMasterL") &&
          (((WebbingMasterL = new THREE.Group()).name = "WebbingMasterL"),
            (WebbingMasterL.position.x = configPreview),
            configExport.add(WebbingMasterL)),
          0),
      ge = ma.roofPitch,
      T = ma.roofPitch,
      K =
        ("Asymmetrical" === ma.roofType &&
          ((Y = ma.asymmetrical),
            0 < ma.asymmetrical
              ? (T = yi(ma.roofPitch, ma.width, Y))
              : (ge = yi(ma.roofPitch, ma.width, Y))),
          "Single Slope" == ma.roofType &&
          (T = (0 <= ma.roofPitch || (ge = ma.roofPitch), -ma.roofPitch)),
          ma.width / 2 + Y),
      J = ma.width / 2 - Y;
    let e = !0;
    "Single Slope" == ma.roofType && (e = false);
    var configRender = gi(K, ma.wallHeightL(), ge, ma.eaveL, e),
      u =
        ((configRender.name = "primaryFrameL"),
          (configRender.rotation.y = THREE.Math.degToRad(0)),
          (configRender.position.x = Y),
          h.add(configRender),
          gi(J, ma.wallHeightR(), T, ma.eaveR, e));
    (u.name = "primaryFrameR"),
      (u.rotation.y = THREE.Math.degToRad(180)),
      (u.position.x = Y),
      h.add(u);
    let t = (l = 0.2) + 0.15;
    var Z = 0.66,
      configPreview = ma.width / -2 + l + 2 / 12 / 2,
      configImport = ma.width / 2 - l - 2 / 12 / 2,
      K =
        (ma.hasOwnProperty("frameConstruction") &&
          "Residential Flush" == ma.frameConstruction &&
          ((t = 0.175),
            (configPreview = ma.width / -2 + 0.01),
            (configImport = ma.width / 2 - 0.01)),
          -configPreview + Y),
      J = configImport - Y,
      ee = ma.wallHeightL() - 0.5,
      exportedSceneData = ma.wallHeightR() - 0.5,
      c = 2,
      wallMesh = ((c = ma.width < 25 ? 1.23 : c), (Math.PI - i) / 2),
      roofMesh = (Math.PI - n) / 2,
      trimMesh =
        ("Single Slope" == ma.roofType &&
          (0 <= ma.roofPitch
            ? (roofMesh += THREE.Math.degToRad(90))
            : (wallMesh += THREE.Math.degToRad(90))),
          c / Math.sin(wallMesh)),
      glassMesh = c / Math.sin(roofMesh),
      doorMesh = Math.sqrt(Math.pow(trimMesh, 2) - Math.pow(c, 2)),
      sceneElementA = Math.sqrt(Math.pow(glassMesh, 2) - Math.pow(c, 2)),
      sceneElementB = Math.sqrt(
        Math.pow(ee - doorMesh, 2) + Math.pow(c - Z, 2)
      ),
      isHidden = Math.sqrt(
        Math.pow(exportedSceneData - sceneElementA, 2) + Math.pow(c - Z, 2)
      ),
      frontEndWallMesh =
        (Math.acos((ee - doorMesh) / sceneElementB),
          Math.acos((exportedSceneData - sceneElementA) / isHidden),
          K / Math.sin(i)),
      de = J / Math.sin(n),
      pe = (Math.sin(i), Math.sin(n), Math.abs(c) / Math.sin(i)),
      me = Math.abs(c) / Math.sin(n),
      gridHelper = Math.min(
        ee +
        Math.sqrt(
          Math.pow(frontEndWallMesh, 2) -
          Math.pow(Math.abs(configPreview - Y), 2)
        ),
        exportedSceneData +
        Math.sqrt(Math.pow(de, 2) - Math.pow(Math.abs(configImport - Y), 2))
      );
    Math.max(pe, me);

    function tempToolA(e, t, a, o) {
      return (result = t), (result += (e / o) * (a - t));
    }
    (minimapRenderer = configExport.getObjectByName("beamRoofL")),
      (orthoCamera = 1.5),
      (p = 0.375),
      (gltfLoader = K),
      (textureLoader = J),
      (dracoLoader =
        ((hdrLoader =
          "Single Slope" === ma.roofType
            ? ((G = 12 / ((ma.width - l - l) / q)),
              12 / (-(ma.width - l - l) / q))
            : "Asymmetrical" === ma.roofType
              ? ((G = 12 / (_ / q)), 12 / ($ / q))
              : ((G = 12 / ((ma.width / 2 - l + Y) / q)),
                12 / ((ma.width / 2 - l - Y) / q))),
          (orthoCamera * G) / 12)),
      (objLoader = (orthoCamera * hdrLoader) / 12);
    if (
      ((placeholderA = ti(ma.maxTrussSpacing, t, h, R)),
        !ma.hasOwnProperty("frameConstruction") ||
        "Open Web Tapered" == ma.frameConstruction)
    ) {
      let e = 2;
      for (
        var tempToolB = (e = placeholderA.length < 3 ? 1 : e);
        tempToolB < placeholderA.length;
        tempToolB += 4
      ) {
        let e = configExport.getObjectByName("webbing").clone();
        var tempToolC = ee - 0.5,
          tempToolD = Math.abs(
            placeholderA[tempToolB] - placeholderA[tempToolB - 1]
          );
        (e.name = "WindRodClone"),
          (e.visible = !0),
          (e.position.x = configPreview + 0.06),
          (e.position.y = 0.5),
          (e.position.z = placeholderA[tempToolB]),
          (e.rotation.x =
            THREE.Math.degToRad(180) + Math.atan(tempToolD / tempToolC)),
          e.scale.set(2, Math.hypot(tempToolC, tempToolD), 2),
          R.add(e),
          ((e = e.clone()).position.z = placeholderA[tempToolB - 1]),
          (e.rotation.x =
            THREE.Math.degToRad(180) + -Math.atan(tempToolD / tempToolC)),
          R.add(e),
          (tempToolC = exportedSceneData - 0.5),
          ((e = e.clone()).position.x = configImport - 0.06),
          (e.position.z = placeholderA[tempToolB]),
          (e.rotation.x =
            THREE.Math.degToRad(180) + Math.atan(tempToolD / tempToolC)),
          e.scale.set(2, Math.hypot(tempToolC, tempToolD), 2),
          R.add(e),
          ((e = e.clone()).position.z = placeholderA[tempToolB - 1]),
          (e.rotation.x =
            THREE.Math.degToRad(180) + -Math.atan(tempToolD / tempToolC)),
          R.add(e);
      }
    }
    if (
      !ma.hasOwnProperty("frameConstruction") ||
      "Open Web Tapered" == ma.frameConstruction
    )
      for (v = 0; v < placeholderA.length; v++) {
        if (v + 1 < placeholderA.length) {
          for (
            var tempToolE = 6;
            tempToolE < ma.wallHeightL();
            tempToolE += 6
          ) {
            var tempToolF = configExport.getObjectByName("webbing").clone(),
              tempToolG = tempToolA(tempToolE, Z, c, ee);
            (tempToolF.name = "ChordBracingClone"),
              (tempToolF.visible = !0),
              (tempToolF.position.x = configPreview + tempToolG),
              (tempToolF.position.y = tempToolE),
              (tempToolF.position.z = placeholderA[v]),
              (tempToolF.rotation.y =
                THREE.Math.degToRad(90) + Math.asin(tempToolG / 3)),
              (tempToolF.rotation.z = THREE.Math.degToRad(90)),
              tempToolF.scale.set(1.5, 3, 1.5),
              R.add(tempToolF);
          }
          for (tempToolE = 6; tempToolE < ma.wallHeightR(); tempToolE += 6) {
            var tempToolH = configExport.getObjectByName("webbing").clone(),
              tempToolI = tempToolA(tempToolE, Z, c, exportedSceneData);
            (tempToolH.name = "ChordBracingClone"),
              (tempToolH.visible = !0),
              (tempToolH.position.x = configImport - tempToolI),
              (tempToolH.position.y = tempToolE),
              (tempToolH.position.z = placeholderA[v]),
              (tempToolH.rotation.y =
                THREE.Math.degToRad(90) - Math.asin(tempToolI / 3)),
              (tempToolH.rotation.z = THREE.Math.degToRad(90)),
              tempToolH.scale.set(1.5, 3, 1.5),
              R.add(tempToolH);
          }
        }
        if (0 < v) {
          for (tempToolE = 6; tempToolE < ma.wallHeightL(); tempToolE += 6) {
            var tempToolJ = configExport.getObjectByName("webbing").clone(),
              Wt = tempToolA(tempToolE, Z, c, ee);
            (tempToolJ.name = "ChordBracingClone"),
              (tempToolJ.visible = !0),
              (tempToolJ.position.x = configPreview + Wt),
              (tempToolJ.position.y = tempToolE),
              (tempToolJ.position.z = placeholderA[v]),
              (tempToolJ.rotation.y =
                THREE.Math.degToRad(-90) - Math.asin(Wt / 3)),
              (tempToolJ.rotation.z = THREE.Math.degToRad(90)),
              tempToolJ.scale.set(1.5, 3, 1.5),
              R.add(tempToolJ);
          }
          for (tempToolE = 6; tempToolE < ma.wallHeightR(); tempToolE += 6) {
            var St = configExport.getObjectByName("webbing").clone(),
              Ot = tempToolA(tempToolE, Z, c, exportedSceneData);
            (St.name = "ChordBracingClone"),
              (St.visible = !0),
              (St.position.x = configImport - Ot),
              (St.position.y = tempToolE),
              (St.position.z = placeholderA[v]),
              (St.rotation.y = THREE.Math.degToRad(-90) + Math.asin(Ot / 3)),
              (St.rotation.z = THREE.Math.degToRad(90)),
              St.scale.set(1.5, 3, 1.5),
              R.add(St);
          }
        }
      }
    if (0 < ma.settings.postsOnGableRoofOverhangsOver) {
      if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          ((clonedFrame = new THREE.Group()),
            ((s = configExport
              .getObjectByName("columnTubeSideL")
              .clone()).visible = !0),
            (s.scale.y = ma.roofHeightAtX(ma.width / -2)),
            (s.position.x = ma.width / -2),
            clonedFrame.add(s),
            ((s = configExport
              .getObjectByName("columnTubeSideR")
              .clone()).visible = !0),
            (s.scale.y = ma.roofHeightAtX(ma.width / 2)),
            (s.position.x = ma.width / 2),
            clonedFrame.add(s),
            (clonedFrame.name = "OverhangFrontFrame"),
            (clonedFrame.position.z = ma.depth / 2 + ma.gableFront - l - 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureFront")
            ? ((m = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = m.deepClone()).name = "overhangEnclosureFront"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureFront")),
            (e.position.z = ma.depth / 2),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableFront - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureFront") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureFront"
          ).visible = false);
      if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
        if (
          ((clonedFrame = new THREE.Group()),
            ((s = configExport
              .getObjectByName("columnTubeSideL")
              .clone()).visible = !0),
            (s.scale.y = ma.roofHeightAtX(ma.width / -2)),
            (s.position.x = ma.width / -2),
            clonedFrame.add(s),
            ((s = configExport
              .getObjectByName("columnTubeSideR")
              .clone()).visible = !0),
            (s.scale.y = ma.roofHeightAtX(ma.width / 2)),
            (s.position.x = ma.width / 2),
            clonedFrame.add(s),
            (clonedFrame.name = "OverhangFrontFrame"),
            (clonedFrame.name = "OverhangBackFrame"),
            (clonedFrame.position.z = ma.depth / -2 - ma.gableBack + l + 0.5),
            R.add(clonedFrame),
            ma.settings.enclosedGableRoofOverhangTriangles)
        ) {
          let e;
          void 0 === lastHoveredItem.getObjectByName("overhangEnclosureBack")
            ? ((P = lastHoveredItem.getObjectByName("coveredGableExtension")),
              ((e = mainCamera.deepClone()).name = "overhangEnclosureBack"),
              (e.frustumCulled = false),
              lastHoveredItem.add(e))
            : (e = lastHoveredItem.getObjectByName("overhangEnclosureBack")),
            (e.position.z = ma.depth / -2),
            (e.rotation.y = Math.PI),
            (e.visible = !0),
            (e.morphTargetInfluences[e.morphTargetDictionary.width] =
              ma.width - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.depth] =
              ma.gableBack - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.height] =
              ma.height - 1),
            (e.morphTargetInfluences[e.morphTargetDictionary.unEnclosedHeight] =
              ma.height - 0.85),
            (e.morphTargetInfluences[e.morphTargetDictionary.roofPeak] =
              ((ma.width / 2) * ma.roofPitch) / 12),
            e.material.forEach(function (e) {
              e.name.startsWith("BuildingWainscot") && (e.visible = false),
                e.name.startsWith("BuildingTrim-Base") && (e.visible = false);
            });
        }
      } else
        void 0 !== lastHoveredItem.getObjectByName("overhangEnclosureBack") &&
          (lastHoveredItem.getObjectByName(
            "overhangEnclosureBack"
          ).visible = false);
    }
    void 0 !== sceneRoot.getObjectByName("LeanTo1PostClones") &&
      sceneRoot
        .getObjectByName("leanTo1")
        .remove(sceneRoot.getObjectByName("LeanTo1PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo2PostClones") &&
      sceneRoot
        .getObjectByName("leanTo2")
        .remove(sceneRoot.getObjectByName("LeanTo2PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo3PostClones") &&
      sceneRoot
        .getObjectByName("leanTo3")
        .remove(sceneRoot.getObjectByName("LeanTo3PostClones")),
      void 0 !== sceneRoot.getObjectByName("LeanTo4PostClones") &&
      sceneRoot
        .getObjectByName("leanTo4")
        .remove(sceneRoot.getObjectByName("LeanTo4PostClones"));
    let a;
    if (
      (void 0 !== configExport.getObjectByName("columnSide") &&
        configExport.getObjectByName("columnSide"),
        void 0 !== configExport.getObjectByName("beamRoof") &&
        configExport.getObjectByName("beamRoof"),
        (a = false),
        ma.hasOwnProperty("postFooting"))
    )
      switch (ma.postFooting) {
        case "Post in Ground":
          a = configExport.getObjectByName("footing-Burried").clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          a = configExport.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          a = configExport
            .getObjectByName("footing-PermaColumnConcretePost")
            .clone();
          break;
        case "Morton Foundation System":
          a = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          a = false;
      }
    var Bt = sceneRoot.getObjectByName("masterSecondaryFramingPiece");
    if (ma.leanTo1) {
      void 0 === sceneRoot.getObjectByName("LeanTo1PostClones") &&
        (((H = new THREE.Group()).name = "LeanTo1PostClones"),
          (H.rotation.y = 0),
          sceneRoot.getObjectByName("leanTo1").add(H),
          ((C = new THREE.Group()).name = "LeanTo1PostMaster"),
          H.add(C));
      var H,
        C,
        y = gi(
          ma.leanTo1Depth,
          ma.leanTo1Height - Ti(ma.leanTo1Depth, ma.leanTo1Pitch),
          ma.leanTo1Pitch,
          ma.gableFront
        ),
        b =
          ((y.rotation.y = THREE.Math.degToRad(90)),
            C.add(y),
            ma.leanTo1Length / 2 - l - 0.08),
        f = ma.leanTo1Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      C.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo1PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r.getObjectByName("downspout-clone").visible = false),
          H.add(r);
      if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo4Walls) {
        var renderWidth = ma.leanTo1Depth,
          renderHeight = ma.leanTo1Length,
          placeholderB = ma.leanTo1Height,
          placeholderC = ma.leanTo1Pitch,
          placeholderD = placeholderB - (renderWidth * placeholderC) / 12,
          placeholderE = H;
        let e = 0,
          t = 0;
        ma.flushGirts && (t = Math.PI / 2),
          ma.standingGirts && (t = Math.PI / 2);
        for (v = 0; v < placeholderB / ma.girtSpacing;)
          v < placeholderD / ma.girtSpacing
            ? (ma.flushGirts && (e = ma.girtThickness / 2 - 0.1),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                0,
                v * ma.girtSpacing + 0.05,
                renderWidth + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = renderHeight - 0.1),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              placeholderE.add(s),
              ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                renderHeight / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                renderWidth / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = renderWidth),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              placeholderE.add(s),
              (s = Bt.clone()).position.set(
                renderHeight / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                renderWidth / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = renderWidth))
            : (ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (k =
                (v * ma.girtSpacing - placeholderB) / (placeholderC / 12) + 1),
              (s = Bt.clone()).position.set(
                renderHeight / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              placeholderE.add(s),
              (s = Bt.clone()).position.set(
                renderHeight / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            placeholderE.add(s),
            v++;
      }
    }
    if (ma.leanTo3) {
      void 0 === sceneRoot.getObjectByName("LeanTo3PostClones") &&
        (((L = new THREE.Group()).name = "LeanTo3PostClones"),
          (L.rotation.y = Math.PI),
          sceneRoot.getObjectByName("leanTo3").add(L),
          ((N = new THREE.Group()).name = "LeanTo3PostMaster"),
          L.add(N));
      var L,
        N,
        g = gi(
          ma.leanTo3Depth,
          ma.leanTo3Height - Ti(ma.leanTo3Depth, ma.leanTo3Pitch),
          ma.leanTo3Pitch,
          ma.gableBack
        ),
        b =
          ((g.rotation.y = THREE.Math.degToRad(90)),
            N.add(g),
            ma.leanTo3Length / 2 - l - 0.08),
        f = ma.leanTo3Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      N.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo3PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r.getObjectByName("downspout-clone").visible = false),
          L.add(r);
      if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls) {
        var sceneElementC = ma.leanTo3Depth,
          sceneElementD = ma.leanTo3Length,
          isKeyboardTriggered = ma.leanTo3Height,
          isInitialized = ma.leanTo3Pitch,
          isFocused =
            isKeyboardTriggered - (sceneElementC * isInitialized) / 12,
          isGestureActive = L;
        let e = 0,
          t = 0;
        ma.flushGirts && (t = Math.PI / 2),
          ma.standingGirts && (t = Math.PI / 2);
        for (v = 0; v < isKeyboardTriggered / ma.girtSpacing;)
          v < isFocused / ma.girtSpacing
            ? (ma.flushGirts && (e = ma.girtThickness / 2 - 0.1),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                0,
                v * ma.girtSpacing + 0.05,
                sceneElementC + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = sceneElementD - 0.1),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              isGestureActive.add(s),
              ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                sceneElementD / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                sceneElementC / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = sceneElementC),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              isGestureActive.add(s),
              (s = Bt.clone()).position.set(
                sceneElementD / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                sceneElementC / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = sceneElementC))
            : (ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (k =
                (v * ma.girtSpacing - isKeyboardTriggered) /
                (isInitialized / 12) +
                1),
              (s = Bt.clone()).position.set(
                sceneElementD / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              isGestureActive.add(s),
              (s = Bt.clone()).position.set(
                sceneElementD / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            isGestureActive.add(s),
            v++;
      }
    }
    if (ma.leanTo2) {
      void 0 === sceneRoot.getObjectByName("LeanTo2PostClones") &&
        (((j = new THREE.Group()).name = "LeanTo2PostClones"),
          (j.rotation.y = Math.PI / -2),
          sceneRoot.getObjectByName("leanTo2").add(j),
          ((isTemporary = new THREE.Group()).name = "LeanTo2PostMaster"),
          j.add(isTemporary));
      var j,
        isTemporary,
        d = gi(
          ma.leanTo2Depth,
          ma.leanTo2Height - Ti(ma.leanTo2Depth, ma.leanTo2Pitch),
          ma.leanTo2Pitch,
          ma.eaveL
        ),
        b =
          ((d.rotation.y = THREE.Math.degToRad(90)),
            isTemporary.add(d),
            ma.leanTo2Length / 2 - l - 0.08),
        f = ma.leanTo2Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      isTemporary.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo2PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r.getObjectByName("downspout-clone").visible = false),
          j.add(r);
      if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls) {
        var isDollarTriggered = ma.leanTo2Depth,
          isActive = ma.leanTo2Length,
          isQuiet = ma.leanTo2Height,
          viewTop = ma.leanTo2Pitch,
          queryTop = isQuiet - (isDollarTriggered * viewTop) / 12,
          xPosition = j;
        let e = 0,
          t = 0;
        ma.flushGirts && (t = Math.PI / 2),
          ma.standingGirts && (t = Math.PI / 2);
        for (v = 0; v < isQuiet / ma.girtSpacing;)
          v < queryTop / ma.girtSpacing
            ? (ma.flushGirts && (e = ma.girtThickness / 2 - 0.1),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                0,
                v * ma.girtSpacing + 0.05,
                isDollarTriggered + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = isActive - 0.1),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              xPosition.add(s),
              ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                isActive / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                isDollarTriggered / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = isDollarTriggered),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              xPosition.add(s),
              (s = Bt.clone()).position.set(
                isActive / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                isDollarTriggered / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = isDollarTriggered))
            : (ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (k = (v * ma.girtSpacing - isQuiet) / (viewTop / 12) + 1),
              (s = Bt.clone()).position.set(
                isActive / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              xPosition.add(s),
              (s = Bt.clone()).position.set(
                isActive / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            xPosition.add(s),
            v++;
      }
    }
    if (ma.leanTo4) {
      void 0 === sceneRoot.getObjectByName("LeanTo4PostClones") &&
        (((z = new THREE.Group()).name = "LeanTo4PostClones"),
          (z.rotation.y = Math.PI / 2),
          sceneRoot.getObjectByName("leanTo4").add(z),
          ((userTop = new THREE.Group()).name = "LeanTo4PostMaster"),
          z.add(userTop));
      var z,
        userTop,
        ge = gi(
          ma.leanTo4Depth,
          ma.leanTo4Height - Ti(ma.leanTo4Depth, ma.leanTo4Pitch),
          ma.leanTo4Pitch,
          ma.eaveR
        ),
        b =
          ((ge.rotation.y = THREE.Math.degToRad(90)),
            userTop.add(ge),
            ma.leanTo4Length / 2 - l - 0.08),
        f = ma.leanTo4Length / -2 + l + 0.08,
        w = Math.ceil((b - f) / ma.maxLeantoPostSpacing);
      userTop.position.x = b;
      for (v = 1; v <= w; v++)
        ((r = sceneRoot.getObjectByName("LeanTo4PostMaster").clone()).name =
          "LeanToTrussClone"),
          (r.position.x = b - (v * (b - f)) / w),
          ma.gutters &&
          ma.settings.downspountsOnEndsOnly &&
          v < w &&
          (r.getObjectByName("downspout-clone").visible = false),
          z.add(r);
      if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls) {
        var yPosition = ma.leanTo4Depth,
          zIndex = ma.leanTo4Length,
          baseColor = ma.leanTo4Height,
          trimColor = ma.leanTo4Pitch,
          accentColor = baseColor - (yPosition * trimColor) / 12,
          ta = z;
        let e = 0,
          t = 0;
        ma.flushGirts && (t = Math.PI / 2),
          ma.standingGirts && (t = Math.PI / 2);
        for (var k, v = 0; v < baseColor / ma.girtSpacing;)
          v < accentColor / ma.girtSpacing
            ? (ma.flushGirts && (e = ma.girtThickness / 2 - 0.1),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                0,
                v * ma.girtSpacing + 0.05,
                yPosition + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = Math.PI / 2),
              (s.scale.z = zIndex - 0.1),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              ta.add(s),
              ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (s = Bt.clone()).position.set(
                zIndex / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                yPosition / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = yPosition),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              ta.add(s),
              (s = Bt.clone()).position.set(
                zIndex / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                yPosition / 2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = yPosition))
            : (ma.flushGirts && (e = ma.girtThickness / 2 + 0.03),
              ma.standingGirts && (e = ma.girtThickness / 2 - 0.05),
              (k = (v * ma.girtSpacing - baseColor) / (trimColor / 12) + 1),
              (s = Bt.clone()).position.set(
                zIndex / 2 + 0.04 - l / 1.9 - e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k),
              (s.scale.y = ma.girtThickness),
              ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
              ta.add(s),
              (s = Bt.clone()).position.set(
                zIndex / -2 - 0.04 + l / 1.9 + e,
                v * ma.girtSpacing + 0.05,
                k / -2 + 0.04 - l / 1.9 - e
              ),
              (s.rotation.z = t),
              (s.rotation.y = 0),
              (s.scale.z = k)),
            (s.scale.y = ma.girtThickness),
            ma.hideWalls < 3 ? (s.visible = !0) : (s.visible = false),
            ta.add(s),
            v++;
      }
    }
    var I,
      currentUrl,
      parsedUrl = ma.girtSpacing,
      scriptVersion = ma.purlinSpacing;
    ((I = new THREE.Group()).name = "GirtParent"),
      R.add(I),
      2 < ma.hideWalls ? (I.visible = false) : (I.visible = !0),
      ((currentUrl = new THREE.Group()).name = "PurlinParentL"),
      currentUrl.position.set(ma.width / -2, ma.wallHeightL(), 0),
      (currentUrl.rotation.z = Math.PI / 2 - i),
      ma.roofPitch < 0 && (currentUrl.rotation.z = Math.PI / -2 - i),
      I.add(currentUrl);
    ((pathName = new THREE.Group()).name = "PurlinParentR"),
      pathName.position.set(ma.width / 2, ma.wallHeightR(), 0),
      (pathName.rotation.z = n - Math.PI / -2),
      ma.roofPitch < 0 && (pathName.rotation.z = n - Math.PI / 2),
      I.add(pathName),
      ma.depth;
    (E = sceneRoot
      .getObjectByName("masterSecondaryFramingPiece")
      .clone()).rotation.set(0, 0, 0);
    for (var pathName, v = 0; v < (X - l) / scriptVersion;) {
      s = E.clone();
      let e = 0;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType && (e = (ma.roofPitch, 0)))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? 0.1 : 0.2)),
        s.position.set(v * scriptVersion + l, -ma.purlinThickness - e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - t - l),
        (s.visible = !0),
        currentUrl.add(s),
        v++;
    }
    for (v = 0; v < (U - l) / scriptVersion;) {
      s = E.clone();
      let e;
      ma.flushPurlins || ma.standingPurlins
        ? (ma.flushPurlins && (e = ma.purlinThickness / 2 + 0.0625),
          ma.standingPurlins && (e = 0),
          "Single Slope" === ma.roofType && (e = (ma.roofPitch, 0)))
        : ((s.rotation.z = Math.PI / 2),
          (e = 0),
          "Single Slope" === ma.roofType &&
          (e = 0 <= ma.roofPitch ? -0.15 : -0.25)),
        "Single Slope" === ma.roofType
          ? s.position.set(v * -scriptVersion - l, -ma.purlinThickness - e, 0)
          : s.position.set(v * scriptVersion + l, ma.purlinThickness + e, 0),
        (s.scale.y = ma.purlinThickness),
        (s.scale.z = ma.depth - l),
        (s.visible = !0),
        pathName.add(s),
        v++;
    }
    for (v = 0; v < assetBaseUrl / parsedUrl;) {
      if (v < ma.wallHeightL() / parsedUrl && ma.enclosedE) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e += ma.girtThickness / 2 - 0.1)),
          ma.standingGirts &&
          ((s.rotation.z = Math.PI / 2), (e += ma.girtThickness / 2 - 0.05)),
          s.position.set(
            ma.width / -2 - 0.04 + l / 1.9 + e,
            v * parsedUrl + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - t),
          (s.visible = !0),
          I.add(s);
      }
      if (v < ma.wallHeightR() / parsedUrl && ma.enclosedW) {
        s = E.clone();
        let e = 0;
        ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e += ma.girtThickness / 2 - 0.1)),
          ma.standingGirts &&
          ((s.rotation.z = Math.PI / 2), (e += ma.girtThickness / 2 - 0.05)),
          s.position.set(
            ma.width / 2 + 0.04 - l / 1.9 - e,
            v * parsedUrl + 0.05,
            0
          ),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.depth - t),
          (s.visible = !0),
          I.add(s);
      }
      let e = 0;
      v < ma.height / parsedUrl &&
        (ma.enclosedS &&
          ((s = E.clone()),
            ma.flushGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2 + 0.03)),
            ma.standingGirts &&
            ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2 - 0.05)),
            s.position.set(
              0,
              v * parsedUrl + 0.05,
              ma.depth / -2 - 0.04 + l / 1.9 + e
            ),
            (s.rotation.y = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = ma.width - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN) &&
        ((s = E.clone()),
          ma.flushGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2 + 0.03)),
          ma.standingGirts &&
          ((s.rotation.z = Math.PI / 2), (e = ma.girtThickness / 2 - 0.05)),
          s.position.set(
            0,
            v * parsedUrl + 0.05,
            ma.depth / 2 + 0.04 - l / 1.9 - e
          ),
          (s.rotation.y = Math.PI / 2),
          (s.scale.y = ma.girtThickness),
          (s.scale.z = ma.width - 0.25),
          (s.visible = !0),
          I.add(s)),
        v++;
    }
    if (!ma.flushGirts) {
      let e = 0;
      for (
        ma.flushGirts && (e += ma.girtThickness / 2 + 0.03),
        ma.standingGirts && (e += ma.girtThickness / 2 - 0.05);
        v < (q + ma.height - 0.1) / parsedUrl;

      ) {
        (exportButton = v * parsedUrl - ma.height),
          (exportPanel =
            ("Single Slope" !== ma.roofType &&
              (V =
                "Asymmetrical" === ma.roofType
                  ? (exportButton / q) * ma.asymmetrical
                  : ((_ = ma.width / 2), ($ = ma.width / 2), (n = i = F), 0)),
              _ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - i))),
          (fallbackMesh = $ - (exportButton + 0.5) / Math.tan(Math.PI / 2 - n));
        ma.enclosedS &&
          ((s = E.clone()).position.set(
            V,
            v * parsedUrl + 0.05,
            ma.depth / -2 - 0.04 + l / 1.9 + e
          ),
            (s.rotation.y = Math.PI / 2),
            ma.standingGirts && (s.rotation.z = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          ma.enclosedN &&
          ((s = E.clone()).position.set(
            V,
            v * parsedUrl + 0.05,
            ma.depth / 2 + 0.04 - l / 1.9 - e
          ),
            (s.rotation.y = Math.PI / 2),
            ma.standingGirts && (s.rotation.z = Math.PI / 2),
            (s.scale.y = ma.girtThickness),
            (s.scale.z = exportPanel + fallbackMesh - 0.25),
            (s.visible = !0),
            I.add(s)),
          v++;
      }
    }
    ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") &&
      (40 < ma.width
        ? (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over)
        : (ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under));
    for (
      materialDisplayMode =
      ((isUIInitialized = Math.ceil(ma.width / ma.maxPostSpacing) - 1) < 0 &&
        (isUIInitialized = 0),
        ma.depth / 2 - (t + 0.04)),
      Oe = ma.width / (isUIInitialized + 1),
      M = 0,
      lastSelectedMaterial = 0,
      v = 1;
      v <= isUIInitialized;
      v++
    ) {
      switch (
      ((M = ma.width / -2 + Oe * v),
        (lastSelectedMaterial = ma.height - 1 - 1),
        (lastSelectedMaterial =
          M >= ma.asymmetrical
            ? ma.roofHeightAtX(M) - 1 - objLoader - orthoCamera - 0.25
            : ma.roofHeightAtX(M) - 1 - dracoLoader - orthoCamera - 0.25),
        ((s = configExport.getObjectByName("columnEnd").clone()).name +=
          "-clone"),
        !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
          ma.settings.showPostsWithOpenGableWall ||
          ma.enclosedN
          ? (s.visible = !0)
          : (s.visible = false),
        s.position.set(M, 0, materialDisplayMode),
        (s.morphTargetInfluences[s.morphTargetDictionary.height] =
          lastSelectedMaterial),
        R.add(s),
        ma.postFooting)
      ) {
        case "Post in Ground":
          modelBoundingBox = configExport
            .getObjectByName("footing-Burried")
            .clone();
          break;
        case "Bracket on Concrete":
        case "Bracket":
          modelBoundingBox = configExport.getObjectByName("footing").clone();
          break;
        case "Perma-Column":
          modelBoundingBox = configExport
            .getObjectByName("footing-PermaColumnConcretePost")
            .clone();
          break;
        case "Morton Foundation System":
          modelBoundingBox = raycastHelper
            .getObjectByName("footing-MortonFoundationSystem")
            .clone();
          break;
        default:
          modelBoundingBox = false;
      }
      if (
        (modelBoundingBox &&
          ((modelBoundingBox.visible = ma.enclosedN),
            modelBoundingBox.position.set(0, 0, 0),
            s.add(modelBoundingBox)),
          ((s = configExport.getObjectByName("columnEnd").clone()).name +=
            "-clone"),
          !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") ||
            ma.settings.showPostsWithOpenGableWall ||
            ma.enclosedS
            ? (s.visible = !0)
            : (s.visible = false),
          s.position.set(M, 0, -materialDisplayMode),
          (s.morphTargetInfluences[s.morphTargetDictionary.height] =
            lastSelectedMaterial),
          R.add(s),
          modelBoundingBox &&
          (((Q = modelBoundingBox.clone()).visible = ma.enclosedS),
            Q.position.set(0, 0, 0),
            s.add(Q)),
          0 < ma.mezzanineBays)
      ) {
        var projectId = placeholderA;
        projectId.sort(function (e, t) {
          return e - t;
        });
        for (
          sharedMaterialLibrary = ma.mezzanineStartingBay - 1;
          sharedMaterialLibrary <=
          ma.mezzanineBays + ma.mezzanineStartingBay - 1;
          sharedMaterialLibrary++
        )
          ((sharedMaterialLibrary == ma.mezzanineStartingBay - 1 &&
            1 < ma.mezzanineStartingBay) ||
            sharedMaterialLibrary > ma.mezzanineStartingBay - 1) &&
            (ma.hasOwnProperty("mezzanineSupport") &&
              "Floor Support" != ma.mezzanineSupport
              ? (((s = configExport
                .getObjectByName("mezzanineHanger")
                .clone()).name += "-clone"),
                (s.visible = !0),
                s.position.set(
                  M,
                  ma.mezzanineHeight,
                  projectId[sharedMaterialLibrary]
                ),
                (s.morphTargetInfluences[s.morphTargetDictionary.height] =
                  ma.roofHeightAtX(M) -
                  ma.mezzanineHeight -
                  2.3 / Math.cos(ui(ma.roofPitch)) -
                  1))
              : (((s = configExport
                .getObjectByName("columnEnd")
                .clone()).name += "-clone"),
                (s.visible = !0),
                s.position.set(M, 0, projectId[sharedMaterialLibrary]),
                s.morphTargetDictionary.hasOwnProperty("height")
                  ? (s.morphTargetInfluences[s.morphTargetDictionary.height] =
                    ma.mezzanineHeight - 1 - 0.5)
                  : (s.scale.y = ma.mezzanineHeight - 0.5)),
              R.add(s));
      }
    }
  }
}

function ei(e, t) {
  var a = new THREE.Group(),
    o = ((a.name = "TrussClones"), lastHoveredItem.add(a), []);
  let i, n;
  for (var r = 1; r < ma.depth / 2 / e; r++)
    o.push(r * e),
      o.push(r * -e),
      ((i = sceneRoot.getObjectByName("RidgidPostMasterL").clone()).name =
        "TrussClone"),
      (i.position.z = r * e),
      a.add(i),
      ((n = sceneRoot.getObjectByName("RidgidPostMasterL").clone()).name =
        "TrussClone"),
      (n.position.z = r * -e),
      a.add(n),
      ((i = sceneRoot.getObjectByName("RidgidPostMasterR").clone()).name =
        "TrussClone"),
      (i.position.z = r * e),
      a.add(i),
      ((n = sceneRoot.getObjectByName("RidgidPostMasterR").clone()).name =
        "TrussClone"),
      (n.position.z = r * -e),
      a.add(n);
  return (
    o.push(ma.depth / 2 - t - 0.25),
    o.push(ma.depth / -2 + t + 0.25),
    ((i = sceneRoot.getObjectByName("RidgidPostMasterL").clone()).name =
      "TrussClone"),
    (i.position.z = ma.depth / 2 - t - 0.25),
    a.add(i),
    ((n = sceneRoot.getObjectByName("RidgidPostMasterL").clone()).name =
      "TrussClone"),
    (n.position.z = ma.depth / -2 + t + 0.25),
    a.add(n),
    ((i = sceneRoot.getObjectByName("RidgidPostMasterR").clone()).name =
      "TrussClone"),
    (i.position.z = ma.depth / 2 - t - 0.25),
    a.add(i),
    ((n = sceneRoot.getObjectByName("RidgidPostMasterR").clone()).name =
      "TrussClone"),
    (n.position.z = ma.depth / -2 + t + 0.25),
    a.add(n),
    o
  );
}

function ti(e, t, a, o) {
  var i,
    n,
    r = [],
    s = ma.depth / 2 - t - 0.08,
    l = ma.depth / -2 + t + 0.08,
    h = Math.ceil((s - l) / e);
  (a.position.z = s), r.push(s);
  for (var c = 1; c <= h; c++) {
    if (
      (r.push((i = s - (c * (s - l)) / h)),
        ((n = a.clone()).name = "TrussClone"),
        (n.position.z = i),
        ma.gutters)
    ) {
      let e, t;
      (t =
        "Open Web Truss" == ma.frameType
          ? ((e = n.getObjectByName("primaryFrameL")),
            n.getObjectByName("primaryFrameR"))
          : ((e = n.getObjectByName("columnSideL")),
            n.getObjectByName("columnSideR"))),
        ma.settings.downspountsOnEndsOnly &&
        c < h &&
        ((e.getObjectByName("downspout-clone").visible = false),
          (t.getObjectByName("downspout-clone").visible = false)),
        ma.leanTo2 &&
        ma.depth / 2 - ma.leanTo2CutR > i &&
        ma.depth / -2 + ma.leanTo2CutL < i &&
        (e.getObjectByName("downspout-clone").visible = false),
        ma.leanTo4 &&
        ma.depth / 2 - ma.leanTo4CutL > i &&
        ma.depth / -2 + ma.leanTo4CutR < i &&
        (t.getObjectByName("downspout-clone").visible = false);
    }
    if (1 < Math.round(ma.maxPostSpacing / ma.maxTrussSpacing))
      c % Math.round(ma.maxPostSpacing / ma.maxTrussSpacing) != 0 &&
        c < h &&
        n.traverse(function (e) {
          e instanceof THREE.Mesh &&
            (e.name.startsWith("footing") || e.name.startsWith("columnSide")) &&
            (e.visible = false);
        });
    else if (1 < Math.round(ma.maxTrussSpacing / ma.maxPostSpacing)) {
      let o = Math.round(ma.maxTrussSpacing / ma.maxPostSpacing) - 1,
        i = (s - r[1]) / (1 + o);
      n.traverse(function (e) {
        if (
          e instanceof THREE.Mesh &&
          (e.name.startsWith("footing") || e.name.startsWith("columnSide"))
        )
          for (var t = 1; t <= o; t++) {
            var a = e.clone();
            (a.position.z += i * t), (a.name = "extra-" + a.name), n.add(a);
          }
      });
    }
    o.add(n);
  }
  return (
    Object.defineProperty(r, "spacingBetweenTrusses", {
      enumerable: false,
      get: function () {
        return (s - l) / h;
      },
    }),
    r
  );
}

function ai(e, t) {
  let a = new THREE.Group(),
    o = ((a.name = "TrussClones"), lastHoveredItem.add(a), []),
    i;
  var n = 0,
    r =
      (ma.depth % 25 == 0
        ? (e = 25)
        : ma.depth % 20 == 0
          ? (e = 20)
          : (ma.depth - 25) % 20 == 0
            ? ((e = 20), (n = 1))
            : (ma.depth - 20) % 25 == 0 && (e = 25),
        ma.depth / 2 - t - 0.25),
    s = ma.depth / -2 + t + 0.25,
    l = Math.ceil((r - s) / e) - n;
  (sceneRoot.getObjectByName("RidgidPostMasterR").position.z = r),
    (sceneRoot.getObjectByName("RidgidPostMasterL").position.z = r);
  for (var h = 1; h <= l; h++)
    o.push(r - h * (e = h == l ? (r - s) / l : e)),
      ((i = sceneRoot.getObjectByName("RidgidPostMasterR").clone()).name =
        "TrussClone"),
      (i.position.z = r - h * e),
      a.add(i),
      ((i = sceneRoot.getObjectByName("RidgidPostMasterL").clone()).name =
        "TrussClone"),
      (i.position.z = r - h * e),
      a.add(i);
  return o;
}

function oi(e) {
  var t = e.parent;
  0 < e.children.length &&
    e.children.forEach(function (e) {
      oi(e);
    }),
    e instanceof THREE.Mesh &&
    (e.geometry.dispose(),
      1 < e.material.length
        ? e.material.forEach(function (e) {
          e.dispose();
        })
        : (e.material.dispose(), (e.material = void 0))),
    t.remove(e);
}

function ii(e, t) {
  void 0 === t && (t = "warning"),
    (document.querySelector("#alert_top span.content").innerHTML = e),
    (document.querySelector("#alert_top").className = "alert alert-" + t),
    $("#alert_top").slideDown("slow");
}

function ni() {
  setTimeout(function () {
    "dev" == l
      ? ii(
        "<strong>NOTICE:</strong> You are currently using the development version of the " +
        companyName +
        " " +
        toolName +
        ". Saving, sharing, and requesting a quote are for testing purposes only.  Submitting a building for a quote will not result in a quote being generated for your building.",
        "danger"
      )
      : "demo" == l
        ? ii(
          "<strong>DEMO MODE:</strong> Saving, sharing, and requesting a quote are for demo purposes only.  Submitting a building for a quote will not result in a quote being generated for your building.",
          "danger"
        )
        : "live" !== l &&
        ii(
          "<strong>NOTICE:</strong> This application is currently disabled. Please contact support to resolve the issue.  Submitting a building for a quote will not result in a quote being generated for your building.",
          "danger"
        );
  }, 1500);
}

function ri(e, t, a, o, i) {
  return ((e - t) / (a - t)) * (i - o) + o;
}

function si() {
  var t, a, o, i, n;
  for (let e = 1; e <= 4; e++) {
    (a = "leanTo" + e),
      ((o = (t = sceneRoot.getObjectByName(a)).deepClone()).name = a);
    for (let e = 0; e < o.material.length; e++)
      o.material[e].normalMap &&
        void 0 !== o.material[e].normalMap.image &&
        ((i = o.material[e].clone()),
          ((n = defaultNormalMap.clone()).needsUpdate = !0),
          (i.normalMap = n),
          (o.material[e] = i),
          lastHoveredItem.add(o),
          lastHoveredItem.remove(t));
  }
}

function li() {
  ma.hasOwnProperty("boardAndBattenWoodenBarnSiding") &&
    ma.boardAndBattenWoodenBarnSiding &&
    sceneRoot.traverse(function (e) {
      e instanceof THREE.Mesh &&
        Array.isArray(e.material) &&
        e.material.forEach(function (e) {
          (e.name.startsWith("BuildingWalls") ||
            e.name.startsWith("BuildingWainscot") ||
            e.name.startsWith("LeantoWalls") ||
            e.name.startsWith("LeantoWainscot") ||
            e.name.startsWith("interiorWall") ||
            (e.name.startsWith("BuildingTrim") &&
              !e.name.endsWith("RoofEdge") &&
              !e.name.endsWith("RoofPivot") &&
              !e.name.endsWith("Gable"))) &&
            ((e.shininess = 5),
              (e.map = woodGrainTexture.clone()),
              (e.normalMap = woodGrainNormal.clone()),
              (e.map.needsUpdate = !0),
              (e.normalMap.needsUpdate = !0),
              (e.needsUpdate = !0));
        });
    });
}

function hi(u, T, t, a, o, y, b, f, w, v, E, M) {
  var i = T.settings.restrictPeakOfCoverdGablesToEaveHeight,
    n = T.settings.restrictEaveOfCoverdGablesToEaveHeight,
    D = 2 / 12;
  if (t.__folders.hasOwnProperty(sceneElementC)) {
    if (
      t.__folders[sceneElementC].__folders.hasOwnProperty(
        o.N.name + " " + sceneElementD
      )
    )
      for (
        var r = 0;
        r <
        t.__folders[sceneElementC].__folders[o.N.name + " " + sceneElementD]
          .__controllers.length;
        r++
      ) {
        var s =
          t.__folders[sceneElementC].__folders[o.N.name + " " + sceneElementD]
            .__controllers[r],
          e =
            T.coveredGableExtensionNHeight +
            (((T.width -
              T.coveredGableExtensionNCutR -
              T.coveredGableExtensionNCutL) /
              2) *
              T.coveredGableExtensionNPitch) /
            12,
          l = T.roofHeightAtX(
            (T.coveredGableExtensionNCutR - T.coveredGableExtensionNCutL) / 2
          );
        "coveredGableExtensionNHeight" === s.property &&
          (s.max(Math.floor(T.coveredGableExtensionNHeight + l - e)),
            !a &&
            T.coveredGableExtensionNHeight > s.__max &&
            (T.coveredGableExtensionNHeight = s.__max),
            T.coveredGableExtensionNHeight < 6 &&
            (T.coveredGableExtensionNHeight = 6),
            s.updateDisplay()),
          "coveredGableExtensionNCutL" === s.property &&
          (s.max(T.width - T.coveredGableExtensionNCutR - 6),
            !a &&
            T.coveredGableExtensionNCutL > s.__max &&
            (T.coveredGableExtensionNCutL = s.__max),
            T.coveredGableExtensionNCutL < 0 &&
            (T.coveredGableExtensionNCutL = 0),
            s.updateDisplay()),
          "coveredGableExtensionNCutR" === s.property &&
          (s.max(T.width - T.coveredGableExtensionNCutL - 6),
            !a &&
            T.coveredGableExtensionNCutR > s.__max &&
            (T.coveredGableExtensionNCutR = s.__max),
            T.coveredGableExtensionNCutR < 0 &&
            (T.coveredGableExtensionNCutR = 0),
            s.updateDisplay());
      }
    if (
      t.__folders[sceneElementC].__folders.hasOwnProperty(
        o.S.name + " " + sceneElementD
      )
    )
      for (
        r = 0;
        r <
        t.__folders[sceneElementC].__folders[o.S.name + " " + sceneElementD]
          .__controllers.length;
        r++
      ) {
        var s =
          t.__folders[sceneElementC].__folders[o.S.name + " " + sceneElementD]
            .__controllers[r],
          h =
            T.coveredGableExtensionSHeight +
            (((T.width -
              T.coveredGableExtensionSCutR -
              T.coveredGableExtensionSCutL) /
              2) *
              T.coveredGableExtensionSPitch) /
            12,
          c = T.roofHeightAtX(
            (T.coveredGableExtensionSCutL - T.coveredGableExtensionSCutR) / 2
          );
        "coveredGableExtensionSHeight" === s.property &&
          (s.max(Math.floor(T.coveredGableExtensionSHeight + c - h)),
            !a &&
            T.coveredGableExtensionSHeight > s.__max &&
            (T.coveredGableExtensionSHeight = s.__max),
            T.coveredGableExtensionSHeight < 6 &&
            (T.coveredGableExtensionSHeight = 6),
            s.updateDisplay()),
          "coveredGableExtensionSCutL" === s.property &&
          (s.max(T.width - T.coveredGableExtensionSCutR - 6),
            !a &&
            T.coveredGableExtensionSCutL > s.__max &&
            (T.coveredGableExtensionSCutL = s.__max),
            T.coveredGableExtensionSCutL < 0 &&
            (T.coveredGableExtensionSCutL = 0),
            s.updateDisplay()),
          "coveredGableExtensionSCutR" === s.property &&
          (s.max(T.width - T.coveredGableExtensionSCutL - 6),
            !a &&
            T.coveredGableExtensionSCutR > s.__max &&
            (T.coveredGableExtensionSCutR = s.__max),
            T.coveredGableExtensionSCutR < 0 &&
            (T.coveredGableExtensionSCutR = 0),
            s.updateDisplay());
      }
    if (
      t.__folders[sceneElementC].__folders.hasOwnProperty(
        o.E.name + " " + sceneElementD
      )
    )
      for (
        r = 0;
        r <
        t.__folders[sceneElementC].__folders[o.E.name + " " + sceneElementD]
          .__controllers.length;
        r++
      ) {
        var s =
          t.__folders[sceneElementC].__folders[o.E.name + " " + sceneElementD]
            .__controllers[r],
          d =
            T.coveredGableExtensionEHeight +
            (((T.depth -
              T.coveredGableExtensionECutR -
              T.coveredGableExtensionECutL) /
              2) *
              T.coveredGableExtensionEPitch) /
            12;
        let e = T.peakHeight();
        i && (e = T.height),
          "coveredGableExtensionEHeight" === s.property &&
          (s.max(Math.floor(T.coveredGableExtensionEHeight + e - d)),
            n && s.max(T.height),
            !a &&
            T.coveredGableExtensionEHeight > s.__max &&
            (T.coveredGableExtensionEHeight = s.__max),
            T.coveredGableExtensionEHeight < 0 &&
            (T.coveredGableExtensionEHeight = 0),
            s.updateDisplay()),
          "coveredGableExtensionECutL" === s.property &&
          (s.max(T.depth - T.coveredGableExtensionECutR - 6),
            !a &&
            T.coveredGableExtensionECutL > s.__max &&
            (T.coveredGableExtensionECutL = s.__max),
            T.coveredGableExtensionECutL < 0 &&
            (T.coveredGableExtensionECutL = 0),
            s.updateDisplay()),
          "coveredGableExtensionECutR" === s.property &&
          (s.max(T.depth - T.coveredGableExtensionECutL - 6),
            !a &&
            T.coveredGableExtensionECutR > s.__max &&
            (T.coveredGableExtensionECutR = s.__max),
            T.coveredGableExtensionECutR < 0 &&
            (T.coveredGableExtensionECutR = 0),
            s.updateDisplay());
      }
    if (
      t.__folders[sceneElementC].__folders.hasOwnProperty(
        o.W.name + " " + sceneElementD
      )
    )
      for (
        r = 0;
        r <
        t.__folders[sceneElementC].__folders[o.W.name + " " + sceneElementD]
          .__controllers.length;
        r++
      ) {
        var s =
          t.__folders[sceneElementC].__folders[o.W.name + " " + sceneElementD]
            .__controllers[r],
          p =
            T.coveredGableExtensionWHeight +
            (((T.depth -
              T.coveredGableExtensionWCutR -
              T.coveredGableExtensionWCutL) /
              2) *
              T.coveredGableExtensionWPitch) /
            12;
        let e = T.peakHeight();
        i && (e = T.height),
          "coveredGableExtensionWHeight" === s.property &&
          (s.max(Math.floor(T.coveredGableExtensionWHeight + e - p)),
            n && s.max(T.height),
            !a &&
            T.coveredGableExtensionWHeight > s.__max &&
            (T.coveredGableExtensionWHeight = s.__max),
            T.coveredGableExtensionWHeight < 0 &&
            (T.coveredGableExtensionWHeight = 0),
            s.updateDisplay()),
          "coveredGableExtensionWCutL" === s.property &&
          (s.max(T.depth - T.coveredGableExtensionWCutR - 6),
            !a &&
            T.coveredGableExtensionWCutL > s.__max &&
            (T.coveredGableExtensionWCutL = s.__max),
            T.coveredGableExtensionWCutL < 0 &&
            (T.coveredGableExtensionWCutL = 0),
            s.updateDisplay()),
          "coveredGableExtensionWCutR" === s.property &&
          (s.max(T.depth - T.coveredGableExtensionWCutL - 6),
            !a &&
            T.coveredGableExtensionWCutR > s.__max &&
            (T.coveredGableExtensionWCutR = s.__max),
            T.coveredGableExtensionWCutR < 0 &&
            (T.coveredGableExtensionWCutR = 0),
            s.updateDisplay());
      }
  }
  if (
    (T.hasOwnProperty("coveredGableExtensionN") && T.coveredGableExtensionN) ||
    (T.hasOwnProperty("coveredGableExtensionS") && T.coveredGableExtensionS) ||
    (T.hasOwnProperty("coveredGableExtensionE") && T.coveredGableExtensionE) ||
    (T.hasOwnProperty("coveredGableExtensionW") && T.coveredGableExtensionW)
  ) {
    let c = "coveredGableExtension";
    if (void 0 === lastHoveredItem.getObjectByName(c)) return;
    var G = lastHoveredItem.getObjectByName(c);
    let d, p, m, g;
    for (let h = 0; h < 4; h++) {
      c = "coveredGableExtension";
      let e = "",
        t = "";
      switch (h) {
        case 0:
          (c += "N"), (e = "N"), (t = 1);
          break;
        case 1:
          (c += "S"), (e = "S"), (t = 3);
          break;
        case 2:
          (c += "E"), (e = "E"), (t = 2);
          break;
        case 3:
          (c += "W"), (e = "W"), (t = 4);
          break;
        default:
          (c += "N"), (e = "N"), (t = 1);
      }
      let a;
      if (void 0 === lastHoveredItem.getObjectByName(c)) {
        ((d = new THREE.Group()).name = c + "Null"),
          lastHoveredItem.add(d),
          ((p = hoveredObject.deepClone()).name = c),
          (p.frustumCulled = false),
          d.add(p),
          (m = lastHoveredItem.getObjectByName("roofL").deepClone()),
          (g = lastHoveredItem.getObjectByName("roofR").deepClone()),
          (m.name = c + "RoofL"),
          (g.name = c + "RoofR"),
          d.add(m),
          d.add(g);
        for (let e = 0; e < p.material.length; e++)
          p.material[e].name.startsWith("BuildingWainscotTrim")
            ? (p.material[e].name = "BuildingWainscotTrim" + t)
            : p.material[e].name.startsWith("BuildingWainscot1")
              ? (p.material[e].name = "BuildingWainscot" + t + "-front")
              : (p.material[e].name.startsWith("BuildingWainscot2") ||
                p.material[e].name.startsWith("BuildingWainscot4")) &&
              (p.material[e].name = "BuildingWainscot" + t + "-sides");
        if ("E" == e || "W" == e) {
          for (let e = 0; e < p.material.length; e++)
            (p.material[e].clippingPlanes = v),
              (p.material[e].clipIntersection = !0),
              (p.material[e].clipShadows = !0);
          for (let e = 0; e < m.material.length; e++)
            (m.material[e].clippingPlanes = v),
              (m.material[e].clipIntersection = !0),
              (m.material[e].clipShadows = !0);
          for (let e = 0; e < g.material.length; e++)
            (g.material[e].clippingPlanes = v),
              (g.material[e].clipIntersection = !0),
              (g.material[e].clipShadows = !0);
        } else {
          for (let e = 0; e < g.material.length; e++)
            (m.material[e].clippingPlanes = E),
              (m.material[e].clipIntersection = !0),
              (m.material[e].clipShadows = !0);
          for (let e = 0; e < g.material.length; e++)
            (g.material[e].clippingPlanes = E),
              (g.material[e].clipIntersection = !0),
              (g.material[e].clipShadows = !0);
        }
        var P = new THREE.BoxGeometry(1, 0.04, 1),
          helperObject =
            (mainCamera.applyMatrix(
              new THREE.Matrix4().makeTranslation(0, 0, 0.5)
            ),
              assetBaseUrl + "images/building/concrete.jpg"),
          helperObject = (loader = new THREE.TextureLoader()).load(
            helperObject
          ),
          helperObject =
            ((helperObject.anisotropy =
              orbitControls.capabilities.getMaxAnisotropy()),
              (helperObject.wrapS = THREE.RepeatWrapping),
              (helperObject.wrapT = THREE.RepeatWrapping),
              new THREE.MeshPhongMaterial({
                color: "white",
                name: "foundation-Material",
                map: helperObject,
                bumpMap: helperObject,
                bumpScale: 0.04,
                specularMap: helperObject,
              }));
        ((a = new THREE.Mesh(P, helperObject)).name = "concrete"),
          (a.receiveShadow = !0),
          d.add(a);
      } else
        (d = lastHoveredItem.getObjectByName(c + "Null")),
          (p = d.getObjectByName(c)),
          (m = d.getObjectByName(c + "RoofL")),
          (g = d.getObjectByName(c + "RoofR")),
          (a = d.getObjectByName("concrete"));
      T.hideWalls < 2
        ? ((m.visible = !0), (g.visible = !0))
        : ((m.visible = false), (g.visible = false));
      let o;
      switch (c) {
        case "coveredGableExtensionN":
          (o = T.width - T[c + "CutR"] - T[c + "CutL"]),
            (p.morphTargetInfluences[p.morphTargetDictionary.width] = o - 1),
            (d.position.x = T[c + "CutL"] / 2 - T[c + "CutR"] / 2),
            (d.position.z = T.depth / 2);
          break;
        case "coveredGableExtensionS":
          (d.rotation.y = THREE.Math.degToRad(180)),
            (o = T.width - T[c + "CutR"] - T[c + "CutL"]),
            (p.morphTargetInfluences[p.morphTargetDictionary.width] = o - 1),
            (d.position.x = T[c + "CutR"] / 2 - T[c + "CutL"] / 2),
            (d.position.z = T.depth / -2);
          break;
        case "coveredGableExtensionE":
          (d.rotation.y = THREE.Math.degToRad(-90)),
            (o = T.depth - T[c + "CutR"] - T[c + "CutL"]),
            (p.morphTargetInfluences[p.morphTargetDictionary.width] = o - 1),
            (d.position.z = T[c + "CutL"] / 2 - T[c + "CutR"] / 2),
            (p.position.z = T.width / 2);
          break;
        case "coveredGableExtensionW":
          (d.rotation.y = THREE.Math.degToRad(90)),
            (o = T.depth - T[c + "CutR"] - T[c + "CutL"]),
            (p.morphTargetInfluences[p.morphTargetDictionary.width] = o - 1),
            (d.position.z = T[c + "CutR"] / 2 - T[c + "CutL"] / 2),
            (p.position.z = T.width / 2);
      }
      (P = T[c + "Height"]),
        (helperObject = P + ((o / 2) * T[c + "Pitch"]) / 12);
      let i = T[c + "Depth"],
        n = 0;
      ("E" != e && "W" != e) || ((i += T.width / 2), (n = T.width / 2)),
        (p.morphTargetInfluences[p.morphTargetDictionary.height] = P - 1),
        (m.position.y = helperObject + 0.1),
        (g.position.y = helperObject + 0.1),
        (p.morphTargetInfluences[p.morphTargetDictionary.depth] = i - 1),
        ("E" != e && "W" != e) ||
        (p.morphTargetInfluences[p.morphTargetDictionary.depth] =
          i - T.width / 2 - 1),
        (m.morphTargetInfluences[m.morphTargetDictionary.depth] =
          (i - 1) / 1e3),
        (g.morphTargetInfluences[g.morphTargetDictionary.depth] =
          (i - 1) / 1e3),
        (m.position.z = i / 2),
        (g.position.z = i / 2),
        (p.morphTargetInfluences[p.morphTargetDictionary.roofPeak] =
          ((o / 2) * T[c + "Pitch"]) / 12),
        (m.rotation.z =
          Math.atan(12 / T[c + "Pitch"]) - THREE.Math.degToRad(-90)),
        (g.rotation.z =
          THREE.Math.degToRad(-90) + Math.atan(12 / T[c + "Pitch"])),
        (m.morphTargetInfluences[m.morphTargetDictionary.width] =
          (Math.hypot(o / 2, ((o / 2) * T[c + "Pitch"]) / 12) - 0.5) / 50),
        (g.morphTargetInfluences[g.morphTargetDictionary.width] =
          (Math.hypot(o / 2, ((o / 2) * T[c + "Pitch"]) / 12) - 0.5) / 50),
        (a.visible = T[c + "Concrete"]),
        (a.scale.x = o),
        (a.scale.z = T[c + "Depth"]),
        ("E" != e && "W" != e) || (a.position.z = T.width / 2),
        m.material.forEach(function (e) {
          null !== e.normalMap &&
            e.normalMap.hasOwnProperty("image") &&
            e.normalMap.image.src.endsWith(q) &&
            e.normalMap.repeat.set(i * J, 1);
        }),
        g.material.forEach(function (e) {
          null !== e.normalMap &&
            e.normalMap.hasOwnProperty("image") &&
            e.normalMap.image.src.endsWith(q) &&
            e.normalMap.repeat.set(i * J, 1);
        }),
        p.material.forEach(function (e) {
          null !== e.normalMap &&
            e.normalMap.hasOwnProperty("image") &&
            e.normalMap.image.src.endsWith(q) &&
            ((e.name.startsWith("BuildingWallsDepth") ||
              (e.name.startsWith("BuildingWainscot") &&
                e.name.endsWith("-sides"))) &&
              e.normalMap.repeat.set(2 * T[c + "Depth"] * J, 1),
              e.name.startsWith("BuildingWallsWidth") ||
              (e.name.startsWith("BuildingWainscot") &&
                e.name.endsWith("-front"))) &&
            e.normalMap.repeat.set(o * J, 1);
        });
      let r,
        s = 0.7;
      void 0 === d.getObjectByName(c + "Framing")
        ? (((r = new THREE.Group()).name = c + "Framing"), d.add(r))
        : (r = d.getObjectByName(c + "Framing")),
        M(r);
      var S,
        O = new THREE.Group();
      if (
        ((O.name = c + "framingPrimary"),
          r.add(O),
          (O.position.z = i - s),
          T.hasOwnProperty(c + "Structure") && "Wood" != T[c + "Structure"])
      ) {
        if ("Open Web Truss" == T.frameType) {
          s = 0.15;
          var B = u.getObjectByName("masterSecondaryFramingPiece").clone(),
            x = (B.rotation.set(0, 0, 0), B.clone()),
            B = B.clone(),
            x =
              ((x.position.y = P - 2 * s),
                (B.position.y = P - 2 * s),
                (x.position.x = o / -2 + s),
                (B.position.x = o / 2 - s),
                (x.position.z = (i + n) / 2 - 2 * s),
                (B.position.z = (i + n) / 2 - 2 * s),
                (B.rotation.z = THREE.Math.degToRad(90)),
                (x.rotation.z = 0),
                (x.scale.z = T[c + "Depth"] - 4 * s),
                (B.scale.z = T[c + "Depth"] - 4 * s),
                r.add(x),
                r.add(B),
                gi(o / 2, P + 0.25, T[c + "Pitch"], 0)),
            B =
              ((x.rotation.y = THREE.Math.degToRad(0)),
                O.add(x),
                gi(o / 2, P + 0.25, T[c + "Pitch"], 0));
          (B.rotation.y = THREE.Math.degToRad(180)), O.add(B);
        } else if ("Rigid" == T.frameType) {
          (x = u.getObjectByName("masterSecondaryFramingPiece").clone()),
            (B = u.getObjectByName("masterSecondaryFramingPiece").clone());
          (x.position.y = P),
            (B.position.y = P),
            (x.position.x = o / -2 + s),
            (B.position.x = o / 2 - s),
            (x.position.z = (T[c + "Depth"] - s) / 2),
            (B.position.z = (T[c + "Depth"] - s) / 2),
            (x.scale.z = T[c + "Depth"] - s),
            (B.scale.z = T[c + "Depth"] - s),
            r.add(x),
            r.add(B);
          let e = 1.5;
          T.settings.ridgidFrameStraightColumns && (e = 0.6);
          var R = shadowConfig.getObjectByName("columnSideL").clone(),
            H = shadowConfig.getObjectByName("columnSideR").clone(),
            C =
              ((R.visible = !0),
                (H.visible = !0),
                (R.position.x = -o / 2 + s),
                (H.position.x = o / 2 - s),
                (e / 12) * T[c + "Pitch"]),
            L = (e / 12) * T[c + "Pitch"],
            R =
              (T.settings.ridgidFrameStraightColumns
                ? ((R.morphTargetInfluences[R.morphTargetDictionary.height] =
                  P - 1),
                  (H.morphTargetInfluences[H.morphTargetDictionary.height] =
                    P - 1))
                : ((R.morphTargetInfluences[R.morphTargetDictionary.height] =
                  P - 1.1),
                  (H.morphTargetInfluences[H.morphTargetDictionary.height] =
                    P - 1.1)),
                (R.morphTargetInfluences[R.morphTargetDictionary.slantTop] = C),
                (H.morphTargetInfluences[H.morphTargetDictionary.slantTop] = L),
                O.add(R),
                O.add(H),
                shadowConfig.getObjectByName("beamRoofL").clone()),
            H = shadowConfig.getObjectByName("beamRoofR").clone(),
            N = o / 2 - e - s,
            j = o / -2 + s + e,
            z = o / 2 - s - e,
            C = P + C - 0.1,
            L = P + L - 0.1,
            k = (N / 12) * T[c + "Pitch"];
          (R.position.x = j),
            (R.position.y = C),
            (R.morphTargetInfluences[R.morphTargetDictionary.length] = N - 1),
            (R.morphTargetInfluences[R.morphTargetDictionary.slantTop] = k),
            (H.position.x = z),
            (H.position.y = L),
            (H.morphTargetInfluences[H.morphTargetDictionary.length] = N - 1),
            (H.morphTargetInfluences[H.morphTargetDictionary.slantTop] = k),
            O.add(R),
            O.add(H);
        }
      } else {
        (j = y.getObjectByName("beamRoofL").clone()),
          (C = y.getObjectByName("beamRoofR").clone()),
          (z =
            ((j.position.y = P),
              (C.position.y = P),
              (j.position.x = o / -2 + s),
              (C.position.x = o / 2 - s),
              (j.position.z = i - s),
              (C.position.z = i - s),
              (C.rotation.z = THREE.Math.degToRad(180)),
              (j.rotation.z = 0),
              (j.rotation.y = THREE.Math.degToRad(90)),
              (C.rotation.y = THREE.Math.degToRad(90)),
              (j.scale.z = D),
              (C.scale.z = D),
              (j.morphTargetInfluences[j.morphTargetDictionary.length] =
                T[c + "Depth"] - s - 1),
              (C.morphTargetInfluences[C.morphTargetDictionary.length] =
                T[c + "Depth"] - s - 1),
              r.add(j),
              r.add(C),
              b.getObjectByName("columnSide").clone())),
          (L = b.getObjectByName("columnSide").clone()),
          (N =
            ((z.visible = !0),
              (L.visible = !0),
              (z.position.x = -o / 2 + s),
              (L.position.x = o / 2 - s),
              (z.morphTargetInfluences[z.morphTargetDictionary.height] = P - 1),
              (L.morphTargetInfluences[L.morphTargetDictionary.height] = P - 1),
              O.add(z),
              O.add(L),
              y.getObjectByName("truss").clone())),
          (k = helperObject - P);
        (N.position.y = P),
          (N.morphTargetInfluences[N.morphTargetDictionary.width] =
            o - 2 * s - 1),
          (N.morphTargetInfluences[N.morphTargetDictionary.height] = k - 1.25),
          (N.morphTargetInfluences[N.morphTargetDictionary.asymmetrical] = 0),
          (N.scale.z = D),
          O.add(N);
        let e = y.getObjectByName("beamRoofL").clone();
        (e = y.getObjectByName("beamRoofL").clone()),
          (R = Math.hypot(k, o / 2) - 1),
          (e.visible = !0),
          (e.position.x = o / -2 + s + 0),
          (e.position.y = P + (s * T[c + "Pitch"]) / 12),
          (e.morphTargetInfluences[e.morphTargetDictionary.length] = R - 1),
          (e.rotation.z = THREE.Math.degToRad(180) - m.rotation.z),
          (N.scale.z = D),
          O.add(e),
          (e = y.getObjectByName("beamRoofR").clone()),
          (R = Math.hypot(k, o / 2) - 1),
          (e.visible = !0),
          (e.position.x = o / 2 - s),
          (e.position.y = P + (s * T[c + "Pitch"]) / 12),
          (e.morphTargetInfluences[e.morphTargetDictionary.length] = R - 1),
          (e.rotation.z = THREE.Math.degToRad(180) - g.rotation.z),
          (e.scale.z = D),
          O.add(e);
        {
          let e = 2;
          30 < o && (e = 3);
          let t = y.getObjectByName("webbingVertR1").clone();
          (t.position.y = P - 0.3),
            (t.position.x = o / 2 / e),
            (t.morphTargetInfluences[t.morphTargetDictionary.height] =
              k - ((T[c + "Pitch"] / 12) * o) / 2 / e - 1),
            O.add(t),
            ((t = y.getObjectByName("webbingVertL1").clone()).position.y =
              P - 0.3),
            (t.position.x = o / 2 / -e),
            (t.morphTargetInfluences[t.morphTargetDictionary.height] =
              k - ((T[c + "Pitch"] / 12) * o) / 2 / e - 1),
            O.add(t),
            30 < o &&
            (((t = y.getObjectByName("webbingVertR2").clone()).position.y =
              P - 0.3),
              (t.position.x = o / e),
              (t.morphTargetInfluences[t.morphTargetDictionary.height] =
                k - ((T[c + "Pitch"] / 12) * o) / e - 1),
              O.add(t),
              ((t = y.getObjectByName("webbingVertL2").clone()).position.y =
                P - 0.3),
              (t.position.x = o / -e),
              (t.morphTargetInfluences[t.morphTargetDictionary.height] =
                k - ((T[c + "Pitch"] / 12) * o) / e - 1),
              O.add(t)),
            ((t = y.getObjectByName("webbingDiagR1").clone()).position.y =
              P - 0.3),
            (t.position.x = o / 2 / e),
            (t.rotation.z = Math.PI / 2 - Math.atan((k - 0.3) / (o / 2 / e))),
            (t.morphTargetInfluences[t.morphTargetDictionary.height] =
              Math.sqrt(Math.pow(k - 0.3, 2) + Math.pow(o / 2 / e, 2)) - 1),
            O.add(t),
            ((t = y.getObjectByName("webbingDiagL1").clone()).position.y =
              P - 0.3),
            (t.position.x = o / 2 / -e),
            (t.rotation.z = Math.PI / -2 + Math.atan((k - 0.3) / (o / 2 / e))),
            (t.morphTargetInfluences[t.morphTargetDictionary.height] =
              Math.sqrt(Math.pow(k - 0.3, 2) + Math.pow(o / 2 / e, 2)) - 1),
            O.add(t),
            30 < o &&
            (((t = y.getObjectByName("webbingDiagR2").clone()).position.y =
              P - 0.3),
              (t.position.x = o / e),
              (t.rotation.z =
                THREE.Math.degToRad(90) -
                Math.atan(
                  (k - ((T[c + "Pitch"] / 12) * o) / 2 / e) / (o / 2 / e)
                )),
              (t.morphTargetInfluences[t.morphTargetDictionary.height] =
                Math.hypot(k - ((T[c + "Pitch"] / 12) * o) / 2 / e, o / 2 / e) -
                1),
              O.add(t),
              ((t = y.getObjectByName("webbingDiagL2").clone()).position.y =
                P - 0.3),
              (t.position.x = o / -e),
              (t.rotation.z =
                Math.PI / -2 +
                Math.atan(
                  (T.roofHeightAtX(o / 2 / -e) - P - 0.3) / (o / 2 / e)
                )),
              (t.rotation.z =
                Math.atan(
                  (k - ((T[c + "Pitch"] / 12) * o) / 2 / e) / (o / 2 / e)
                ) - THREE.Math.degToRad(90)),
              (t.morphTargetInfluences[t.morphTargetDictionary.height] =
                Math.hypot(k - ((T[c + "Pitch"] / 12) * o) / 2 / e, o / 2 / e) -
                1),
              O.add(t));
        }
      }
      if (T[c + "Depth"] > T.maxTrussSpacing) {
        var I,
          F = Math.ceil(T[c + "Depth"] / T.maxTrussSpacing);
        for (let e = 1; e < F; e++)
          ((I = O.clone()).position.z = i - s - (T[c + "Depth"] / F) * e),
            r.add(I);
      }
      let l;
      if (
        (void 0 !== f.getObjectByName(c + "BoundingBox")
          ? (l = f.getObjectByName(c + "BoundingBox"))
          : ((H = new THREE.BoxGeometry(1, 1, 1)).applyMatrix(
            new THREE.Matrix4().makeTranslation(0, 0.5, 0.5)
          ),
            (S = new THREE.MeshPhongMaterial({
              color: 16770491,
              wireframe: !0,
              side: THREE.DoubleSide,
              visible: false,
            })),
            ((l = new THREE.Mesh(H, S)).name = c + "BoundingBox"),
            (l.rotation.y = 0),
            w.push(l),
            f.add(l)),
          l.position.copy(d.position),
          l.rotation.copy(d.rotation),
          "W" == e
            ? (l.position.x = T.width / 2)
            : "E" == e && (l.position.x = T.width / -2),
          l.scale.set(o, P + 10, T[c + "Depth"]),
          (0 != T[c] && T[c + "Enclosed"]) ||
          (l.position.set(0, 0, 0), l.scale.set(0.1, 0.1, 0.1)),
          0 < T.hideWalls)
      )
        p.visible = false;
      else if (T[c + "Enclosed"]) {
        p.visible = !0;
        for (
          let e = (p.morphTargetInfluences[
            p.morphTargetDictionary.unEnclosedHeight
          ] = 0);
          e < p.material.length;
          e++
        )
          p.material[e].name.startsWith("BuildingWainscot") &&
            (T["wainscot" + t] &&
              (p.material[e].name.startsWith("BuildingWainscot" + t) ||
                p.material[e].name.startsWith("BuildingWainscotTrim" + t))
              ? (p.material[e].visible = !0)
              : T["wainscot" + t] ||
              (!p.material[e].name.startsWith("BuildingWainscot" + t) &&
                !p.material[e].name.startsWith("BuildingWainscotTrim" + t)) ||
              (p.material[e].visible = false));
      } else if (T.settings.showExtensionTriangleWhenOpen) {
        (p.visible = !0),
          (p.morphTargetInfluences[p.morphTargetDictionary.unEnclosedHeight] =
            P - 0.3);
        for (let e = 0; e < p.material.length; e++)
          (p.material[e].name.startsWith("BuildingWainscot" + t) ||
            p.material[e].name.startsWith("BuildingWainscotTrim" + t)) &&
            (p.material[e].visible = false);
      } else p.visible = false;
    }
  }
  if (lastHoveredItem.getObjectByName("coveredGableExtension"))
    for (let t = 0; t < 4; t++) {
      let e = "coveredGableExtension";
      switch (t) {
        case 0:
          e += "N";
          break;
        case 1:
          e += "S";
          break;
        case 2:
          e += "E";
          break;
        case 3:
          e += "W";
          break;
        default:
          e += "N";
      }
      void 0 !== lastHoveredItem.getObjectByName(e + "Null") &&
        (lastHoveredItem.getObjectByName(e + "Null").visible = T[e]);
    }
}

function ci() {
  try {
    googleMaps(sceneRoot, ma, activeUIElement);
  } catch (e) {
    import("./modules/google-maps.php?v=" + scriptVersion)
      .then(({ googleMaps: e }) => {
        e(sceneRoot, ma, activeUIElement, _);
      })
      .catch((e) => {
        console.log("module loading ERROR: " + e);
      });
  }
}

function di() {
  var e,
    t = enabledEnvironments.find((e) => e.friendlyName === ma.environment);
  let a = false,
    o = false;
  (a = !!t.groundImage && assetBaseUrl + t.groundImage),
    (o = !!t.skyImage && assetBaseUrl + t.skyImage),
    (animationMixer.visible = !0),
    (animationClip.visible = !0),
    (previousAnimationAction.visible = t.gridVisible),
    (z.visible = t.gridVisible),
    sceneRoot.fog.color.setHex(t.fogColor),
    a
      ? (((e = (loader = new THREE.TextureLoader()).load(a)).wrapS =
        THREE.RepeatWrapping),
        (e.wrapT = THREE.RepeatWrapping),
        (e.repeat.x = t.repeatGroundX),
        (e.repeat.y = t.repeatGroundY),
        (e.anisotropy = orbitControls.getMaxAnisotropy()),
        (e.anisotropy = 5),
        animationMixer.material.color.setHex(15921906),
        animationMixer.material.emissive.setHex(0),
        (animationMixer.material.map = e),
        (animationMixer.material.bumpMap = e),
        (animationMixer.material.needsUpdate = !0),
        (animationMixer.morphTargetInfluences[
          animationMixer.morphTargetDictionary.Hills
        ] = 1.25),
        (animationMixer.position.y = 0),
        (animationMixer.receiveShadow = !0),
        (animationMixer.visible = !0))
      : (animationMixer.material.color.setHex(16777215),
        animationMixer.material.emissive.setHex(16777215),
        (animationMixer.material.map = null),
        (animationMixer.material.bumpMap = null),
        (animationMixer.material.needsUpdate = !0),
        (animationMixer.visible = !0),
        (animationMixer.morphTargetInfluences[
          animationMixer.morphTargetDictionary.Hills
        ] = 0),
        (animationMixer.position.y = -0.03),
        (animationMixer.receiveShadow = false)),
    o
      ? ((loader = new THREE.TextureLoader()),
        (texture = loader.load(o)),
        (animationClip.material.map = texture),
        (animationClip.material.needsUpdate = !0),
        (animationClip.visible = !0))
      : (animationClip.visible = false),
    (isMaterialUpdateEnabled = !0);
}

function pi(e, t, a) {
  t = t.clone().sub(e).normalize().multiplyScalar(a);
  return e.clone().add(t);
}

function mi(e, t, a) {
  var o = (t = t.clone().sub(e)).length(),
    t = t.normalize().multiplyScalar(o * a);
  return e.clone().add(t);
}

function gi(e, t, a, o, i = !0) {
  var n = new THREE.Group(),
    r = ((n.name = "halfTrussMaster"), vo(n), irradianceMap),
    s = ((totalRoofRise = (e * a) / 12), ui(a) + THREE.Math.degToRad(90));
  let l = 0.2 - e + 2 / 12 / 2;
  var h = -(l =
    ma.hasOwnProperty("frameConstruction") &&
      "Residential Flush" == ma.frameConstruction
      ? 0.01 - e
      : l),
    c = t - 0.5 + Ti(e + l, a);
  let d = 2;
  var p = (d =
    e < 12.5 && "Residential Flush" !== ma.frameConstruction ? 1.23 : d),
    e = s / 2,
    m = d / Math.sin(e);
  let g = Math.sqrt(Math.pow(m, 2) - Math.pow(d, 2));
  var u = Math.sqrt(Math.pow(c - g, 2) + Math.pow(d - 0.66, 2)),
    T = Math.acos((c - g) / u),
    y = h / Math.sin(s);
  let b = (h - d) / Math.sin(s);
  var f = Math.abs(d) / Math.sin(s),
    w = c + Math.sqrt(Math.pow(y, 2) - Math.pow(Math.abs(l), 2));
  ma.hasOwnProperty("frameConstruction") &&
    "Residential Flush" == ma.frameConstruction
    ? ((ma.flushGirts = !0),
      (ma.standingGirts = !0),
      (d = 0.5),
      (g = 2 / Math.cos(Math.PI / 2 - s) + Math.tan(Math.PI / 2 - s) * d),
      (b = (h - d) / Math.sin(s)),
      ((v = r.getObjectByName("columnTubeSideL").clone()).name = "columnSide"),
      (v.position.x = l),
      (v.morphTargetInfluences[v.morphTargetDictionary.height] = c - 1.1),
      (v.morphTargetInfluences[v.morphTargetDictionary.slantTop] =
        -2 * Math.tan(s - Math.PI / 2)))
    : ((ma.flushGirts = false),
      ((v = r.getObjectByName("columnSideL").clone()).name = "columnSide"),
      (v.position.x = l),
      (v.morphTargetInfluences[v.morphTargetDictionary.height] = c - 1.1),
      (v.morphTargetInfluences[v.morphTargetDictionary.slantTop] =
        -2 * Math.tan(s - Math.PI / 2)),
      (v.visible = !0),
      n.add(v),
      ((v = r.getObjectByName("columnSideInnerL").clone()).name =
        "columnSideInner"),
      (v.position.x = l + 0.66),
      (v.rotation.z = -T),
      (v.morphTargetInfluences[v.morphTargetDictionary.height] = u - 1.1),
      (v.morphTargetInfluences[v.morphTargetDictionary.slantTop] =
        -2 * Math.tan(s - Math.PI / 2)),
      (v.visible = !0),
      n.add(v),
      ((v = r.getObjectByName("columnSideTangentL").clone()).name =
        "columnSideTangent"),
      (v.position.x = l),
      (v.position.y = c),
      (v.rotation.z = e),
      (v.morphTargetInfluences[v.morphTargetDictionary.length] = m - 1)),
    (v.visible = !0),
    n.add(v),
    void 0 !== sceneRoot.getObjectByName("downspout") &&
    void 0 !== n.getObjectByName("columnSide") &&
    void 0 ===
    n.getObjectByName("columnSide").getObjectByName("downspout-clone") &&
    (((h = sceneRoot.getObjectByName("downspout").clone()).name =
      "downspout-clone"),
      (h.visible = !0),
      (h.castShadow = !0),
      (h.receiveShadow = !0),
      (h.rotation.y = THREE.Math.degToRad(180)),
      (h.position.x = -0.2),
      n.getObjectByName("columnSide").add(h)),
    ma.gutters &&
    (((u = n
      .getObjectByName("columnSide")
      .getObjectByName("downspout-clone")).morphTargetInfluences[
      u.morphTargetDictionary.height
    ] = t - 1.2 - (o / Math.hypot(12, a)) * a),
      (u.morphTargetInfluences[u.morphTargetDictionary.downspoutOverhang] =
        (o / Math.hypot(12, a)) * 12),
      0 < ma.hideWalls ? (u.visible = false) : (u.visible = 0 < a));
  var e = r.getObjectByName("beamRoofL").clone(),
    v = (1.5 * a) / 12,
    h = y,
    t =
      ((e.visible = !0),
        (e.position.x = l),
        (e.position.y = c),
        (e.morphTargetInfluences[e.morphTargetDictionary.length] = h - 1),
        (e.morphTargetInfluences[e.morphTargetDictionary.shear] = v),
        (e.rotation.z = THREE.Math.degToRad(-90) + s),
        n.add(e),
        r.getObjectByName("beamRoofInnerL").clone()),
    o =
      ((t.visible = !0),
        (t.morphTargetInfluences[t.morphTargetDictionary.length] = b - 1),
        (t.position.x = l + d),
        (t.position.y = c - g),
        (t.rotation.z = THREE.Math.degToRad(90) + s),
        n.add(t),
        r.getObjectByName("trussVert").clone()),
    E =
      ((o.position.x = 0),
        (o.position.y = w),
        (o.morphTargetInfluences[o.morphTargetDictionary.length] =
          Math.abs(f) - 1),
        (o.visible = i),
        n.add(o),
        new THREE.Group()),
    M =
      ((E.name = "WebbingMaster"),
        (E.position.x = l),
        n.add(E),
        new THREE.Group());
  if (
    ((M.name = "WebbingRoofMaster"),
      M.position.set(l + d, c - g, 0),
      (M.rotation.z = THREE.Math.degToRad(180) + s),
      n.add(M),
      !ma.hasOwnProperty("frameConstruction") ||
      "Open Web Tapered" == ma.frameConstruction)
  )
    for (
      var D = 0,
      P = 0.66,
      helperObject = Math.abs(T) + Math.PI / 2,
      S = (Math.PI / 180) * 33.3,
      O = Math.PI - S,
      B = (P / Math.sin(Math.PI - S - helperObject)) * Math.sin(helperObject);
      D < c - g;

    )
      ((WebbingClone = r.getObjectByName("webbing").clone()).name =
        "WebbingClone"),
        (WebbingClone.position.y = D),
        (WebbingClone.scale.y = B),
        c - g < D + Math.sqrt(Math.pow(B, 2) - Math.pow(d, 2))
          ? ((WebbingClone.rotation.z =
            Math.atan((c - g - D) / d) + Math.PI / 2),
            (WebbingClone.scale.y = Math.sqrt(
              Math.pow(d, 2) + Math.pow(c - g - D, 2)
            )))
          : (WebbingClone.rotation.z = S + Math.PI / 2),
        (WebbingClone.visible = !0),
        E.add(WebbingClone),
        (D += (B / Math.sin(Math.PI / 2)) * Math.sin(S) * 2) < c &&
        (((WebbingClone = r.getObjectByName("webbing").clone()).name =
          "WebbingClone"),
          (WebbingClone.position.y = D),
          (WebbingClone.scale.y = B),
          (WebbingClone.rotation.z = O - Math.PI / 2),
          (WebbingClone.visible = !0),
          E.add(WebbingClone)),
        (B =
          ((P =
            (B / Math.sin(Math.PI - helperObject)) *
            Math.sin(helperObject - S)) /
            Math.sin(Math.PI - S - helperObject)) *
          Math.sin(helperObject));
  var x,
    D = 0,
    P = 0.66,
    helperObject = Math.abs(T) + Math.PI / 2,
    S = Math.PI / 2 + (Math.PI / 180) * 33.3,
    B = p / Math.sin(S),
    R = y,
    H = b,
    C = Math.sqrt(Math.pow(m, 2) - Math.pow(p, 2));
  for (b; D < H;)
    ((WebbingClone = r.getObjectByName("webbing").clone()).name =
      "WebbingClone"),
      (WebbingClone.position.y = D),
      (WebbingClone.scale.y = B),
      D + C + Math.sqrt(Math.pow(B, 2) - Math.pow(p, 2)) < R
        ? (WebbingClone.rotation.z = -S)
        : ((x = R - C - D),
          (WebbingClone.rotation.z =
            THREE.Math.degToRad(-90) - Math.atan(x / p)),
          (WebbingClone.scale.y = Math.sqrt(Math.pow(p, 2) + Math.pow(x, 2))),
          (D += 100)),
      (WebbingClone.visible = !0),
      M.add(WebbingClone),
      (D += 2 * Math.sqrt(Math.pow(B, 2) - Math.pow(p, 2))),
      ((WebbingClone = r.getObjectByName("webbing").clone()).name =
        "WebbingClone"),
      (WebbingClone.position.y = D) < H
        ? ((WebbingClone.scale.y = B),
          (WebbingClone.rotation.z = THREE.Math.degToRad(180) + S))
        : D < H + 5 &&
        ((x =
          (WebbingClone.position.y = H) -
          D +
          Math.sqrt(Math.pow(B, 2) - Math.pow(p, 2))),
          (WebbingClone.rotation.z =
            0 < x
              ? -Math.atan(p / x)
              : -THREE.Math.degToRad(180) - Math.atan(p / x)),
          (WebbingClone.scale.y = Math.sqrt(Math.pow(p, 2) + Math.pow(x, 2)))),
      (WebbingClone.visible = !0),
      M.add(WebbingClone);
  return n;
}

function ui(e) {
  return Math.atan(e / 12);
}

function Ti(e, t) {
  return (e * t) / 12;
}

function yi(e, t, a) {
  a = t / 2 + Math.abs(a);
  return ((a * e) / 12 / (t - a)) * 12;
}

function bi(e, t = 0) {
  var a = Math.floor(e),
    e = 12 * (Math.abs(e) - Math.abs(a));
  let o = Math.floor(e);
  var i = e - o;
  let n;
  if (0 < i)
    switch (Math.round(4 * i)) {
      case 0:
        n = 0;
        break;
      case 1:
        n = "1/4";
        break;
      case 2:
        n = "1/2";
        break;
      case 3:
        n = "3/4";
        break;
      case 4:
        n = 1;
        break;
      default:
        console.error("error rounding to fraction: " + i);
    }
  1 == n && ((o += n), (n = 0));
  let r = "";
  return (
    a && (r += a.toString() + "' "),
    o && (r += o.toString()),
    n && (r += "-" + n),
    (o || n) && (r += '"'),
    (r = "" == r ? "0'" : r)
  );
}

function fi(e, t) {
  var a;
  return "boolean" == typeof (t = void 0 === t ? !0 : t) && t
    ? Math.round(0.3048 * e)
    : 0 < t
      ? Math.round(0.3048 * e * 10 ** t) / 10 ** t
      : t < 0
        ? (decimalLocation = (a = 0.3048 * e).toString().indexOf(".")) >=
          Math.abs(t) - 1
          ? Math.round(a)
          : parseFloat(a.toString().substring(0, Math.abs(t)))
        : 0.3048 * e;
}

function wi(t) {
  if (t) {
    var a = ma.coreBuildingDimensions(),
      o =
        (ma.buildingWithLeantoDimensions(), ma.buildingWithPorchesDimensions());
    o.northEdge, a.northEdge, a.westEdge;
    let e = o.northEdge - a.northEdge;
    return (
      vi({
        name: "widthMainBuilding",
        arrowType: "groundArrow",
        arrowLength: ma.width,
        stemLength: e + 3,
        posZ: o.northEdge + 3,
        autoOrient: false,
      }),
      (e = o.northEdge - a.northEdge),
      o.width > a.width
        ? vi({
          name: "widthOverallBuilding",
          arrowType: "groundArrow",
          arrowLength: o.width,
          stemLength: e + 6,
          posX: o.center.x,
          posZ: o.northEdge + 6,
          ...(ma.leanTo2
            ? {
              extendLeft: ma.leanTo2CutR,
            }
            : {}),
          ...(ma.leanTo4
            ? {
              extendRight: ma.leanTo4CutL,
            }
            : {}),
          ...(o.width <= a.width
            ? {
              visible: false,
            }
            : {}),
          autoOrient: false,
        })
        : inputController.getObjectByName("widthOverallBuilding") &&
        (inputController.getObjectByName(
          "widthOverallBuilding"
        ).visible = false),
      (e = o.westEdge - a.westEdge),
      vi({
        name: "depthMainBuilding",
        arrowType: "groundArrow",
        arrowLength: ma.depth,
        stemLength: e + 3,
        posX: o.westEdge + 3,
        rotY: 90,
        autoOrient: false,
      }),
      (e = o.westEdge - a.westEdge),
      o.depth > a.depth
        ? vi({
          name: "depthOverallBuilding",
          arrowType: "groundArrow",
          arrowLength: o.depth,
          stemLength: e + 6,
          posX: o.westEdge + 6,
          posZ: o.center.z,
          rotY: 90,
          autoOrient: false,
        })
        : inputController.getObjectByName("depthOverallBuilding") &&
        (inputController.getObjectByName(
          "depthOverallBuilding"
        ).visible = false),
      "Single Slope" === ma.roofType
        ? ((e = o.westEdge - a.westEdge),
          vi({
            name: "peakHeight",
            arrowType: "heightArrow",
            arrowLength: ma.peakHeight(),
            stemLength: e + 3,
            ...(0 <= ma.roofPitch
              ? {
                stemLength: e + 3,
              }
              : {
                stemLength: e + ma.width + 3,
              }),
            posX: o.westEdge + 3,
            posY: ma.peakHeight() / 2,
            posZ: a.northEdge,
          }))
        : ((e = o.westEdge - a.westEdge + ma.width / 2),
          "Asymmetrical" == ma.roofType && (e -= ma.asymmetrical),
          vi({
            name: "peakHeight",
            arrowType: "heightArrow",
            arrowLength: ma.peakHeight(),
            stemLength: e + 3,
            posX: o.westEdge + 3,
            posY: ma.peakHeight() / 2,
            posZ: a.northEdge,
          })),
      (e = Math.abs(o.eastEdge) - Math.abs(a.eastEdge)),
      vi({
        name: "wallHeight",
        arrowType: "heightArrow",
        arrowLength: ma.height,
        stemLength: e + 3,
        posX: o.eastEdge - 3,
        posY: ma.height / 2,
        posZ: a.northEdge,
        rotY: 180,
      }),
      (e = 3),
      vi({
        name: "baySpacingDepth",
        arrowType: "groundArrow",
        arrowLength: ma.depth / (placeholderA.length - 1),
        stemLength: e + 3,
        posX: a.eastEdge + e + 0.5 + 3,
        posY: 0.5,
        posZ: (placeholderA[0] + placeholderA[1]) / 2,
        rotY: 90,
        autoOrient: false,
      }),
      void (inputController.visible = t)
    );
  }
  (inputController.visible = t), (isMaterialUpdateEnabled = !0);
}

function duplicateObject(i) {
  let n = i.name.replace("-clone", ""),
    r,
    s,
    l;
  if (n.startsWith("scale-"))
    (n = n.replace("scale-", "")),
      (s = 3),
      (l = 2),
      (r = {
        name: i.name,
        position:
          i.position.x + s + "," + i.position.y + "," + (i.position.z + l),
        rotation: i.rotation.x + "," + i.rotation.y + "," + i.rotation.z,
      }),
      c(n, r);
  else {
    (s = 3), (l = 2);
    var h = new THREE.Vector3();
    i.getWorldDirection(h);
    let e = "N";
    h.x < 0.1 && -0.1 < h.x && h.z < 0.9 && ((e = "S"), (s = -s), (l = -l)),
      h.x < 0.9 && h.z < 0.1 && -0.1 < h.z && ((e = "E"), (s = -2), (l = 3)),
      0.9 < h.x && h.z < 0.1 && -0.1 < h.z && ((e = "W"), (s = 2), (l = -3));
    let t, a, o;
    if (
      ((o =
        i.name.startsWith("walk") ||
          (i.name.startsWith("interiorDoor") && -1 == i.scale.x)
          ? "-1"
          : 1),
        i.name.startsWith("window"))
    ) {
      i.morphTargetDictionary.hasOwnProperty("hideShutters") &&
        (a =
          1 != i.morphTargetInfluences[i.morphTargetDictionary.hideShutters]);
      for (let e = 0; e < i.material.length; e++)
        "WindowGrid" === i.material[e].name &&
          (t = !0 === i.material[e].visible);
    }
    (r = {
      name: i.name,
      position:
        i.position.x + s + "," + i.position.y + "," + (i.position.z + l),
      rotation: i.rotation.x + "," + i.rotation.y + "," + i.rotation.z,
      scale:
        i.userData.scale.x +
        "," +
        i.userData.scale.y +
        "," +
        i.userData.scale.z,
      doorSwing: o,
      grid: t,
      shutters: a,
      select: !0,
    }),
      d(n, r);
  }
}

function vi(e) {
  let t,
    a =
      (void 0 ===
        (t = (
          e.hasOwnProperty("parent") ? e.parent : inputController
        ).getObjectByName(e.name)) &&
        (((t = raycastHelper.getObjectByName(e.arrowType).clone()).name =
          e.name),
          (e.hasOwnProperty("parent") ? e.parent : inputController).add(t)),
        (t.morphTargetInfluences[t.morphTargetDictionary.length] =
          e.arrowLength - 1),
        e.hasOwnProperty("stemLength") &&
        (t.morphTargetInfluences[t.morphTargetDictionary.offset] =
          e.stemLength - 1),
        e.hasOwnProperty("extendLeft") &&
        (t.morphTargetInfluences[t.morphTargetDictionary.extendLeft] =
          e.extendLeft),
        e.hasOwnProperty("extendLeftUp") &&
        (t.morphTargetInfluences[t.morphTargetDictionary.extendLeftUp] =
          e.extendLeftUp),
        e.hasOwnProperty("extendRight") &&
        (t.morphTargetInfluences[t.morphTargetDictionary.extendRight] =
          e.extendRight),
        e.hasOwnProperty("posX") && (t.position.x = e.posX),
        e.hasOwnProperty("posY") && (t.position.y = e.posY),
        e.hasOwnProperty("posZ") && (t.position.z = e.posZ),
        e.hasOwnProperty("rotY") && (t.rotation.y = THREE.Math.degToRad(e.rotY)),
        5),
    o =
      (e.hasOwnProperty("textSize") && (a = e.textSize),
        e.hasOwnProperty("textGap") &&
        (t.morphTargetInfluences[t.morphTargetDictionary.textGap] =
          textAreaWidth),
        !0),
    i = false;
  (o = e.hasOwnProperty("autoOrient") ? e.autoOrient : o) ||
    "groundArrow" != e.arrowType ||
    (i = !0),
    Ei(e.arrowLength, t, o, i, a),
    e.hasOwnProperty("visible") ? (t.visible = e.visible) : (t.visible = !0);
}

function Ei(i, n, r, s, l) {
  "number" == typeof i
    ? (i = bi(i))
    : "boolean" == typeof i && (i = i ? "true" : "false"),
    new THREE.FontLoader().load(
      assetBaseUrl + "fonts/helvetiker_regular.typeface.json",
      function (e) {
        e = new THREE.TextGeometry(i, {
          font: e,
          size: 0.35 * l,
          height: 0,
          curveSegments: 2,
          bevelEnabled: false,
        });
        e.center(),
          e.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0.05));
        let t = n.getObjectByName("text");
        void 0 === t
          ? (((o = new THREE.MeshBasicMaterial({
            color: 10748284,
          })).side = THREE.FrontSide),
            (o.polygonOffset = !0),
            (o.polygonOffsetFactor = -4),
            ((t = new THREE.Mesh(e, o)).name = "text"),
            s && (t.rotation.x = THREE.Math.degToRad(-90)),
            n.add(t),
            (o = new THREE.PlaneGeometry(1, 1)),
            (a = new THREE.MeshBasicMaterial({
              color: 15658734,
            })),
            o.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0.04)),
            (a.side = THREE.FrontSide),
            (a.polygonOffset = !0),
            (a.polygonOffsetFactor = -2),
            ((o = new THREE.Mesh(o, a)).name = "background"),
            t.add(o),
            r &&
            (t.onBeforeRender = function () {
              t.lookAt(
                new THREE.Vector3(
                  mainCamera.position.x,
                  mainCamera.position.y,
                  mainCamera.position.z
                )
              );
            }))
          : (t.geometry.dispose(), (t.geometry = e));
        var a = t.geometry.boundingBox.max.x - e.boundingBox.min.x,
          o = t.geometry.boundingBox.max.y - e.boundingBox.min.y;
        t.getObjectByName("background").scale.set(a + 0.2 * l, o + 0.2 * l, 1);
      }
    );
}

function initializeViewControls() {
  let viewControls = document.getElementById("viewControls");

  if (!viewControls) {
    viewControls = document.createElement("div");
    viewControls.id = "viewControls";
    viewControls.style.cssText =
      "display: block; position: absolute; pointer-events: auto; top: var(--bannerHeight); left: 0; box-sizing: border-box; width: 100%; z-index: 1; padding: 3px; text-align: left;";
    document.getElementById("info").appendChild(viewControls);
  }

  if (!viewControls.querySelector("#cameraSelector")) {
    const cameraSelector = document.createElement("select");
    cameraSelector.id = "cameraSelector";
    cameraSelector.style.cssText = "pointer-events: auto; width: auto;";
    cameraSelector.onchange = function () {
      switch (this.value) {
        case "Top":
          Ro();
          break;
        case "Front":
          Ro("Front");
          break;
        case "Back":
          Ro("Back");
          break;
        case "Left":
          Ro("Left");
          break;
        case "Right":
          Ro("Right");
          break;
        default:
          Ro("3dView");
      }
    };

    viewControls.appendChild(cameraSelector);

    const cameraOptions = [
      "Perspective",
      "Top",
      "Front",
      "Back",
      "Left",
      "Right",
    ];

    cameraOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.text = option;
      cameraSelector.appendChild(optionElement);
    });
  }

  if (!viewControls.querySelector("#downloadBtn")) {
    const downloadBtn = document.createElement("button");
    downloadBtn.type = "button";
    downloadBtn.textContent = " Download ";
    downloadBtn.id = "downloadBtn";
    downloadBtn.style.cssText = "float: right;";
    downloadBtn.onclick = function (event) {
      const imageUrl = Eo({
        width: 5760,
        height: 3240,
        compression: 0.75,
      });

      const now = new Date();

      const timestamp =
        now.getFullYear() +
        "-" +
        padWithZero(now.getMonth() + 1) +
        "-" +
        padWithZero(now.getDate()) +
        " " +
        padWithZero(now.getHours()) +
        "." +
        padWithZero(now.getMinutes()) +
        "." +
        padWithZero(now.getSeconds());

      setTimeout(() => {
        const anchor = document.createElement("a");
        anchor.setAttribute("href", imageUrl);
        anchor.setAttribute(
          "download",
          `3D Building Rendering - ${timestamp}.jpg`
        );
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }, 50);

      event.stopPropagation();
    };

    viewControls.appendChild(downloadBtn);
  }
}

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (error) {
    return true;
  }
}

function updateBuildingMaterials() {
  if (!shouldUpdateMaterials) return;

  const specularHex = isGlassMode ? 0x5f13f : 0x5f13f; // Check if logic should differ
  const shininess = isGlassMode ? 35 : 90;

  sceneRoot.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;

    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];

    materials.forEach((material) => {
      const normalMapSrc = material?.normalMap?.image?.src;

      if (
        normalMapSrc &&
        normalMapSrc.endsWith("images/building/building-normal.jpg")
      ) {
        material.normalMap = defaultNormalMap.clone();
        material.normalMap.needsUpdate = true;
        material.specular?.setHex(specularHex);
        material.shininess = shininess;
      }
    });
  });

  shouldUpdateMaterials = false;
}

function handleRetryAttempt() {
  6 == (retryCount += 1)
    ? ((retryCount = 0), initializeViewControls())
    : setTimeout(function () {
      0 < retryCount && --retryCount;
    }, 2500);
}

isHidden || Va(),
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let t = document.createElement("style");
      document.body.appendChild(t);
      let a;
      colorOptions.forEach(function (e) {
        (a = 360 < e.r + e.g + e.b ? "black" : "white"),
          (t.innerHTML +=
            'li.folder select option[value="' +
            e.name +
            '"] { background-color: ' +
            e.hex +
            "; background-image: url(" +
            assetBaseUrl +
            "images/color.gif.php?c=" +
            e.hex.substr(1) +
            "); color: " +
            a +
            "; }"),
          (t.innerHTML +=
            "li.folder select." +
            e.id +
            " { background-color: " +
            e.hex +
            "; background-image: url(" +
            assetBaseUrl +
            "images/color.gif.php?c=" +
            e.hex.substr(1) +
            "); color: " +
            a +
            "; }");
      });
    },
    false
  ),
  (THREE.DefaultLoadingManager.onStart = function (e, t, a) {
    var o = false;
    (o = "models/scale-" === e.substring(0, 13) ? !0 : o) &&
      $("#modal-loading").modal("show");
  }),
  (THREE.DefaultLoadingManager.onLoad = function () {
    isHidden && Xa(),
      $("#modal-loading").modal("hide"),
      isKeyboardTriggered ||
      ((isKeyboardTriggered = !0),
        si(),
        updateBuildingMaterials(),
        O(),
        io(),
        S(),
        ao(),
        oo(),
        to(),
        O(),
        ni()),
      (isMaterialUpdateEnabled = !0);
  }),
  (THREE.DefaultLoadingManager.onProgress = function (e, t, a) { }),
  (THREE.DefaultLoadingManager.onError = function (e) {
    console.log("There was an error loading " + e);
  }),
  $(document).ready(function () {
    window.addEventListener("beforeprint", function (e) {
      placeholderE
        ? (Eo({
          width: 1920,
          height: 800,
          compression: 0.55,
        }),
          $("#printImage").html('<img src="' + placeholderD + '" />'))
        : (null ==
          document
            .getElementById("printImage")
            .getElementsByTagName("img")[0] &&
          (Eo({
            width: 1920,
            height: 800,
            compression: 0.55,
          }),
            $("#printImage").html('<img src="' + placeholderD + '" />')),
          (placeholderE = !0)),
        Do();
    });
  }),
  $(document).ready(function () {
    $(".modal").on("shown", function () {
      $(function () {
        $(this).find("form :input:visible:enabled:first").focus();
      });
    }),
      $("form").each(function () {
        $(this).validate();
      }),
      jQuery.validator.addMethod(
        "multiemail",
        function (e, t) {
          if (this.optional(t)) return !0;
          var a = e.split(/[;,]+/);
          valid = !0;
          for (var o = 0; o < a.length; o++)
            (e = a[o]),
              (valid =
                valid &&
                jQuery.validator.methods.email.call(this, $.trim(e), t));
          return valid;
        },
        jQuery.validator.messages.email
      );
  }),
  $(document).ready(function () {
    $("form").submit(function (n) {
      if ($(this).valid()) {
        n.preventDefault();
        let o = $(this).find("button.btn.btn-primary");
        isWireframeMode || o.prop("disabled", !0);
        var r = $(this).find("button.btn-primary i:first"),
          s = $(this).find("i.status-icon"),
          l =
            (s.attr("class", "status fas fa-cog fa-spin"),
              r.hide(),
              s.show(),
              {}),
          h = {},
          y = {},
          b = {},
          f = {},
          w = {},
          v = 0,
          E = 0,
          M = 0,
          D = 0,
          c =
            (sceneRoot.traverse(function (t) {
              var e,
                a,
                o,
                i = false,
                n = false,
                r = false,
                s = false,
                l = false,
                h = false,
                c = false,
                d = false,
                p = false,
                m = {},
                g = {},
                u = {},
                T = {};
              if (t instanceof THREE.Mesh || "Group" === t.type) {
                if (
                  (t.name.startsWith("mansard") ||
                    t.name.startsWith("walk") ||
                    t.name.startsWith("window") ||
                    t.name.startsWith("garage")) &&
                  t.name.endsWith("-clone")
                ) {
                  if (
                    ((i =
                      parseFloat(t.position.x.toFixed(2)) +
                      "," +
                      parseFloat(t.position.y.toFixed(2)) +
                      "," +
                      parseFloat(t.position.z.toFixed(2))),
                      (n =
                        parseFloat(t.rotation.x.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.y.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.z.toFixed(2))),
                      (e = parseFloat(t.userData.scale.x)),
                      (a = parseFloat(t.userData.scale.y)),
                      (o = parseFloat(t.userData.scale.z)),
                      (r =
                        parseFloat(e.toFixed(2)) +
                        "," +
                        parseFloat(a.toFixed(2)) +
                        "," +
                        parseFloat(o.toFixed(2))),
                      t.scale.x < 0 && (c = -1),
                      t.name.startsWith("window"))
                  )
                    for (let e = 0; e < t.material.length; e++)
                      "WindowGrid" === t.material[e].name &&
                        (d = t.material[e].visible),
                        "Shutters" === t.material[e].name &&
                        (p = t.material[e].visible);
                  (m.name = t.name),
                    (m.position = i),
                    (m.rotation = n),
                    (m.scale = r),
                    (m.doorSwing = c),
                    (m.grid = d),
                    (m.shutters = p),
                    (b[E] = m),
                    E++,
                    (c = r = n = i = false);
                }
                if (
                  (t.name.startsWith("scale") &&
                    t.name.endsWith("-clone") &&
                    ((i =
                      parseFloat(t.position.x.toFixed(2)) +
                      "," +
                      parseFloat(t.position.y.toFixed(2)) +
                      "," +
                      parseFloat(t.position.z.toFixed(2))),
                      (n =
                        parseFloat(t.rotation.x.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.y.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.z.toFixed(2))),
                      (u.name = t.name),
                      (u.position = i),
                      (u.rotation = n),
                      (f[M] = u),
                      M++,
                      (n = i = false)),
                    t.name.startsWith("interior") &&
                    t.name.endsWith("-clone") &&
                    ((i =
                      parseFloat(t.position.x.toFixed(2)) +
                      "," +
                      parseFloat(t.position.y.toFixed(2)) +
                      "," +
                      parseFloat(t.position.z.toFixed(2))),
                      (n =
                        parseFloat(t.rotation.x.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.y.toFixed(2)) +
                        "," +
                        parseFloat(t.rotation.z.toFixed(2))),
                      (r =
                        t.userData.hasOwnProperty("width") &&
                          t.userData.hasOwnProperty("height")
                          ? parseFloat(t.userData.width.toFixed(2)) +
                          "," +
                          parseFloat(t.userData.height.toFixed(2)) +
                          ",1"
                          : t.userData.hasOwnProperty("doorSwing") &&
                            -1 == t.userData.doorSwing
                            ? "-1,1,1"
                            : "1,1,1"),
                      (T.name = t.name),
                      (T.position = i),
                      (T.rotation = n),
                      (T.scale = r),
                      t.userData.hasOwnProperty("doorSwing") && (T.doorSwing = c),
                      t.userData.hasOwnProperty("material") &&
                      (T.material = t.userData.material),
                      (w[D] = T),
                      D++,
                      (c = r = n = i = false)),
                    t.name.startsWith("porch") &&
                    t.name.endsWith("-clone") &&
                    t.visible)
                ) {
                  (i =
                    parseFloat(t.position.x.toFixed(2)) +
                    "," +
                    parseFloat(t.position.y.toFixed(2)) +
                    "," +
                    parseFloat(t.position.z.toFixed(2))),
                    (n =
                      parseFloat(t.rotation.x.toFixed(2)) +
                      "," +
                      parseFloat(t.rotation.y.toFixed(2)) +
                      "," +
                      parseFloat(t.rotation.z.toFixed(2))),
                    (m =
                      t.morphTargetInfluences[
                      t.morphTargetDictionary.porchDepth
                      ] + 10),
                    (T =
                      (12 *
                        (u =
                          t.morphTargetInfluences[
                          t.morphTargetDictionary.slope
                          ])) /
                      m +
                      3.5),
                    (c =
                      t.morphTargetInfluences[
                      t.morphTargetDictionary.ceilingHeight
                      ] +
                      10 +
                      4 / 12),
                    (o = a = e = 0),
                    t.name.startsWith("porchWrap")
                      ? ((e =
                        Math.round(
                          100 *
                          parseFloat(
                            t.morphTargetInfluences[
                            t.morphTargetDictionary.width
                            ]
                          )
                        ) /
                        100 +
                        10),
                        (a =
                          Math.round(
                            100 *
                            parseFloat(
                              t.morphTargetInfluences[
                              t.morphTargetDictionary.height
                              ]
                            )
                          ) /
                          100 +
                          13.5 +
                          u),
                        (o =
                          Math.round(
                            100 *
                            parseFloat(
                              t.morphTargetInfluences[
                              t.morphTargetDictionary.depth
                              ]
                            )
                          ) /
                          100 +
                          10))
                      : t.name.startsWith("porch") &&
                      ((e =
                        Math.round(
                          100 *
                          parseFloat(
                            t.morphTargetInfluences[
                            t.morphTargetDictionary.width
                            ]
                          )
                        ) /
                        100 +
                        10),
                        (a =
                          Math.round(
                            100 *
                            parseFloat(
                              t.morphTargetInfluences[
                              t.morphTargetDictionary.height
                              ]
                            )
                          ) /
                          100 +
                          13.5 +
                          u)),
                    (r =
                      parseFloat(e.toFixed(2)) +
                      "," +
                      parseFloat(a.toFixed(2)) +
                      "," +
                      parseFloat(o.toFixed(2))),
                    (u =
                      12 *
                      t.morphTargetInfluences[
                      t.morphTargetDictionary.Overhang
                      ]),
                    (s =
                      0.5 <
                      t.morphTargetInfluences[t.morphTargetDictionary.miters]);
                  for (let e = 0; e < t.material.length; e++)
                    "PorchPosts" === t.material[e].name &&
                      (l =
                        t.material[e].color.getHex() != baseColor.getHex() &&
                        t.material[e].color.getHex != trimColor.getHex()),
                      "PorchPostsMetal" === t.material[e].name &&
                      (h = t.material[e].visible);
                  (g.name = t.name),
                    (g.position = i),
                    (g.rotation = n),
                    (g.scale = r),
                    (g.porchDepth = m),
                    (g.porchPitch = T),
                    (g.ceilingHeight = c),
                    (g.porchOverhang = u),
                    (g.postMiter = s),
                    (g.postWrap = l),
                    (g.posts = h),
                    (g.concrete = t.userData.concrete),
                    (y[v] = g),
                    v++;
                }
              }
            }),
              mainCamera.aspect),
          d = orbitControls.getSize(new THREE.Vector2()),
          p =
            ((mainCamera.aspect = 800 / 450),
              orbitControls.setSize(800, 450, false),
              mainCamera.updateProjectionMatrix(),
              orbitControls.render(sceneRoot, mainCamera, null, false),
              (placeholderD = orbitControls.domElement.toDataURL(
                "image/jpeg",
                0.4
              )),
              (mainCamera.aspect = c),
              orbitControls.setSize(d, false),
              mainCamera.updateProjectionMatrix(),
              orbitControls.render(sceneRoot, mainCamera),
              ""),
          c = Fo();
        let t, i;
        if ("form-quote" === $(this).attr("name")) {
          if (
            ((i = $("#request-quote input[name=action]").val()),
              (t = {
                firstname: $("#request-quote input[name=firstname]").val(),
                lastname: $("#request-quote input[name=lastname]").val(),
                email: $("#request-quote input[name=email]").val(),
                phone: $("#request-quote input[name=phone]").val(),
                address: $("#request-quote input[name=address]").val(),
                city: $("#request-quote input[name=city]").val(),
                notes: $("#request-quote textarea[name=quoteNotes]").val(),
                action: $("#request-quote input[name=action]").val(),
              }),
              $("#request-quote input[name=state]").length &&
              (t.state = $("#request-quote input[name=state]").val()),
              $("#request-quote select[name=state]").length &&
              (t.state = $("#request-quote select[name=state]").val()),
              $("#request-quote input[name=zip]").length &&
              (t.zip = $("#request-quote input[name=zip]").val()),
              $("#request-quote input[name=province]").length &&
              (t.province = $("#request-quote input[name=province]").val()),
              $("#request-quote input[name=postalCode]").length &&
              (t.postalCode = $("#request-quote input[name=postalCode]").val()),
              $("#request-quote input[name=buildAddress]").length &&
              (t.buildAddress = $(
                "#request-quote input[name=buildAddress]"
              ).val()),
              $("#request-quote input[name=buildCity]").length &&
              (t.buildCity = $("#request-quote input[name=buildCity]").val()),
              $("#request-quote input[name=buildState]").length &&
              (t.buildState = $("#request-quote input[name=buildState]").val()),
              $("#request-quote input[name=buildZip]").length &&
              (t.buildZip = $("#request-quote input[name=buildZip]").val()),
              $("#request-quote input[name=buildProvince]").length &&
              (t.buildProvince = $(
                "#request-quote input[name=buildProvince]"
              ).val()),
              $("#request-quote input[name=buildPostalCode]").length &&
              (t.buildPostalCode = $(
                "#request-quote input[name=buildPostalCode]"
              ).val()),
              $("#request-quote input[name=builder]").length &&
              (t.builder = $("#request-quote input[name=builder]").val()),
              $("#request-quote input[name=use]").length &&
              (t.use = $("#request-quote input[name=use]").val()),
              $("#request-quote input[name=type]").length &&
              (t.type = $("#request-quote input[name=type]").val()),
              $("#request-quote input[name=county]").length &&
              (t.county = $("#request-quote input[name=county]").val()),
              $("#request-quote input[name=squarefootage]").length &&
              (t.squarefootage = $(
                "#request-quote input[name=squarefootage]"
              ).val()),
              $("#request-quote input[name=schedule]").length &&
              (t.schedule = $("#request-quote input[name=schedule]").val()),
              $("#request-quote input[name=site]").length &&
              (t.site = $("#request-quote input[name=site]").val()),
              $("#request-quote input[name=market]").length &&
              (t.market = $("#request-quote input[name=market]").val()),
              $("#request-quote select[name=pastcustomer]").length &&
              (t.pastcustomer = $(
                "#request-quote input[name=pastcustomer]"
              ).val()),
              $("#request-quote input[name=contact]").length)
          ) {
            let e = false;
            1 == $("#request-estimate input[name=contact]").prop("checked") &&
              (e = "true"),
              (t.contact = e);
          }
          $("#request-quote input[name=customFormField1]").length &&
            (t.customFormField1 = $(
              "#request-quote input[name=customFormField1]"
            ).val()),
            $("#request-quote select[name=customFormField1]").length &&
            (t.customFormField1 = $(
              "#request-quote select[name=customFormField1]"
            ).val()),
            $("#request-quote input[name=customFormField2]").length &&
            (t.customFormField2 = $(
              "#request-quote input[name=customFormField2]"
            ).val()),
            $("#request-quote select[name=customFormField2]").length &&
            (t.customFormField2 = $(
              "#request-quote select[name=customFormField2]"
            ).val()),
            $("#request-quote input[name=customFormField3]").length &&
            (t.customFormField3 = $(
              "#request-quote input[name=customFormField3]"
            ).val()),
            $("#request-quote select[name=customFormField3]").length &&
            (t.customFormField3 = $(
              "#request-quote select[name=customFormField3]"
            ).val()),
            $("#request-quote input[name=customFormField4]").length &&
            (t.customFormField4 = $(
              "#request-quote input[name=customFormField4]"
            ).val()),
            $("#request-quote select[name=customFormField4]").length &&
            (t.customFormField4 = $(
              "#request-quote select[name=customFormField4]"
            ).val()),
            $("#request-quote input[name=customFormField5]").length &&
            (t.customFormField5 = $(
              "#request-quote input[name=customFormField5]"
            ).val()),
            $("#request-quote select[name=customFormField5]").length &&
            (t.customFormField5 = $(
              "#request-quote select[name=customFormField5]"
            ).val()),
            $("#request-quote input[name=customFormField6]").length &&
            (t.customFormField6 = $(
              "#request-quote input[name=customFormField6]"
            ).val()),
            $("#request-quote select[name=customFormField6]").length &&
            (t.customFormField6 = $(
              "#request-quote select[name=customFormField6]"
            ).val()),
            $("#request-quote input[name=customFormField7]").length &&
            (t.customFormField7 = $(
              "#request-quote input[name=customFormField7]"
            ).val()),
            $("#request-quote select[name=customFormField7]").length &&
            (t.customFormField7 = $(
              "#request-quote select[name=customFormField7]"
            ).val()),
            $("#request-quote input[name=customFormField8]").length &&
            (t.customFormField8 = $(
              "#request-quote input[name=customFormField8]"
            ).val()),
            $("#request-quote select[name=customFormField8]").length &&
            (t.customFormField8 = $(
              "#request-quote select[name=customFormField8]"
            ).val()),
            $("#request-quote input[name=customFormField9]").length &&
            (t.customFormField9 = $(
              "#request-quote input[name=customFormField9]"
            ).val()),
            $("#request-quote select[name=customFormField9]").length &&
            (t.customFormField9 = $(
              "#request-quote select[name=customFormField9]"
            ).val()),
            $("#request-quote input[name=customFormField10]").length &&
            (t.customFormField10 = $(
              "#request-quote input[name=customFormField10]"
            ).val()),
            $("#request-quote select[name=customFormField10]").length &&
            (t.customFormField10 = $(
              "#request-quote select[name=customFormField10]"
            ).val()),
            (p =
              "Nice looking building you have there!  We have received your request. One of our building representatives will be in touch soon.");
        } else
          "form-share" === $(this).attr("name")
            ? ((i = $("#request-share input[name=action]").val()),
              (t = {
                shareEmail: $("#request-share input[name=shareEmail]").val(),
                firstname: $("#request-share input[name=firstname]").val(),
                lastname: $("#request-share input[name=lastname]").val(),
                email: $("#request-share input[name=email]").val(),
                notes: $("#request-share textarea[name=shareNotes]").val(),
                action: $("#request-share input[name=action]").val(),
              }),
              (p =
                "Check out that building!<br> A link to view your creation has been shared."))
            : "form-save" === $(this).attr("name") &&
            ((i = $("#request-save input[name=action]").val()),
              (t = {
                email: $("#request-save input[name=saveEmail]").val(),
                notes: $("#request-save textarea[name=saveNotes]").val(),
                action: $("#request-save input[name=action]").val(),
              }),
              (p =
                "Nice creation!<br> A link to this building design has been emailed to you."));
        (l.params = ma),
          (l.porches = y),
          (l.doorsWindows = b),
          (l.scaleItems = f),
          (l.interiorItems = w),
          (h.id = c),
          (h.userData = t),
          (h.buildingData = l),
          (h.image = placeholderD);
        let e = JSON.stringify(h),
          a = currentMaterial ? "?ref=" + currentMaterial : "";
        $.ajax({
          type: "POST",
          url: "api/v1/build/save" + a,
          data: e,
          dataType: "json",
          encode: !0,
        })
          .done(function (e) {
            if ((console.log(e), !0 === e.success))
              $(".modal").modal("hide"),
                e.hasOwnProperty("redirectURL")
                  ? (window.location.href = e.redirectURL)
                  : e.hasOwnProperty("iframeURL")
                    ? ($("#modal-success .modal-body").html(
                      "<iframe width='98%' height='300' src='" +
                      e.iframeURL +
                      "' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write'></iframe>"
                    ),
                      $("#modal-success").modal("show"))
                    : ($("#modal-success .modal-body").html(p),
                      $("#modal-success").modal("show"),
                      o.prop("disabled", false),
                      (window.dataLayer = window.dataLayer || []),
                      window.dataLayer.push({
                        event: i,
                      }),
                      s.attr("class", "status-icon fas fa-check"),
                      setTimeout(function () {
                        s.delay(5e3).hide(), r.delay(5e3).show();
                      }, 5e3));
            else {
              var t,
                a = "";
              for (t of Object.keys(e.errors)) a += e.errors[t];
              $("p.fail").html(a),
                $("p.fail").slideDown(500),
                $("p.fail").delay(5e3).slideUp(1750),
                o.prop("disabled", false),
                s.attr("class", "status fas fa-exclamation"),
                s.attr("class", "status-icon fas fa-times"),
                setTimeout(function () {
                  s.delay(5e3).hide(), r.delay(5e3).show();
                }, 5e3);
            }
          })
          .fail(function (e, t, a) {
            console.log(e);
            e = "There was a processing error, please try again. " + e.status;
            $("p.fail").html(e),
              $("p.fail").slideDown(500),
              $("p.fail").delay(5e3).slideUp(1750),
              o.prop("disabled", false),
              s.attr("class", "status fas fa-exclamation"),
              s.attr("class", "status-icon fas fa-times"),
              setTimeout(function () {
                s.delay(5e3).hide(), r.delay(5e3).show();
              }, 5e3);
          }),
          n.preventDefault();
      }
    });
  }),
  $("#popup #updateItemButton").click(function () {
    No(!0);
  }),
  $("#popup #wrap").change(function () {
    No();
  }),
  $("#popup input").change(function () {
    No(), Lo();
  }),
  $("#popup select").change(function () {
    No(), Lo();
  }),
  $("#doorSwingButton").click(function () {
    (y.scale.x = -y.scale.x),
      0 < y.scale.x ? (y.userData.doorSwing = 1) : (y.userData.doorSwing = -1),
      (isMaterialUpdateEnabled = !0);
  }),
  $("#copyButton").click(function () {
    duplicateObject(y);
  }),
  $("#rotateLeftButton").click(function () {
    y.userData.rotationMultiplyer += parseFloat(
      THREE.Math.degToRad(45).toFixed(3)
    );
    var e = parseFloat(y.userData.rotationMultiplyer);
    meshGeometry = new TWEEN.Tween(y.rotation)
      .to(new THREE.Vector3(0, e, 0), 500)
      .easing(TWEEN.Easing.Quartic.Out)
      .onUpdate((e) => {
        isMaterialUpdateEnabled = !0;
      })
      .start();
  }),
  $("#rotateRightButton").click(function () {
    y.userData.rotationMultiplyer -= parseFloat(
      THREE.Math.degToRad(45).toFixed(3)
    );
    var e = parseFloat(y.userData.rotationMultiplyer);
    meshGeometry = new TWEEN.Tween(y.rotation)
      .to(new THREE.Vector3(0, e, 0), 500)
      .easing(TWEEN.Easing.Quartic.Out)
      .onUpdate((e) => {
        isMaterialUpdateEnabled = !0;
      })
      .start();
  }),
  $("#deleteItemButton").click(function () {
    if ("porc" === y.name.substring(0, 4))
      (y.visible = false), (ma[y.name.replace("-clone", "")] = false);
    else if ("scal" === y.name.substring(0, 4)) {
      if (y instanceof THREE.Group) {
        for (let e = 0; e < y.children.length; e++) wo(y.children[e]);
        y.parent.remove(y);
      } else wo(y);
      ma[y.name.replace("-clone", "")]--;
    } else
      (y.name.startsWith("interior")
        ? (ma[y.name.replace("-clone", "") + "Qty"]--, bo(y), y.parent)
        : (ma[y.name.replace("-clone", "") + "Qty"]--, lastHoveredItem)
      ).remove(y);
    (lastSelectedMaterial = y),
      (y = null),
      $("#popup").hide(),
      $("#line").hide(),
      (isMaterialUpdateEnabled = !0);
  }),
  $("#closePopupWindowButton").click(function () {
    jo();
  }),
  $("#helpButton").click(function () {
    ko();
  }),
  $("#overlay, #help #closeButton").click(function () {
    Io();
  }),
  (THREE.Object3D.prototype.GdeepCloneMaterials = function () {
    for (
      var e = this.clone(new THREE.Object3D(), false), t = 0;
      t < this.children.length;
      t++
    ) {
      var a = this.children[t];
      a.GdeepCloneMaterials ? e.add(a.GdeepCloneMaterials()) : e.add(a.clone());
    }
    return e;
  }),
  (THREE.Mesh.prototype.GdeepCloneMaterials = function (e, t) {
    if (void 0 === e) {
      var a;
      if (Array.isArray(this.material)) {
        var o = [];
        for (let e = 0; e < this.material.length; e++)
          o.push(this.material[e].clone());
        a = o;
      } else a = this.material.clone();
      e = new THREE.Mesh(this.geometry, a);
    }
    return THREE.Object3D.prototype.GdeepCloneMaterials.call(this, e, t), e;
  }),
  (THREE.Object3D.prototype.deepClone = function (e) {
    e = this.clone((e = void 0 === e ? !0 : e));
    return (
      e.traverse(function (a) {
        if (a.isMesh) {
          let t;
          if (0 < a.material.length) {
            t = [];
            for (let e = 0; e < a.material.length; e++)
              (t[e] = a.material[e].clone()),
                a.material[e].map &&
                void 0 !== a.material[e].map.image &&
                ((t[e].map = a.material[e].map.clone()),
                  (t[e].map.needsUpdate = !0)),
                a.material[e].normalMap &&
                void 0 !== a.material[e].normalMap.image &&
                ((t[e].normalMap = a.material[e].normalMap.clone()),
                  (t[e].normalMap.needsUpdate = !0));
          } else
            (t = a.material.clone()).map &&
              void 0 !== a.material.map.image &&
              ((t.map = a.material.map.clone()), (t.map.needsUpdate = !0)),
              a.material.normalMap &&
              void 0 !== a.material.normalMap.image &&
              ((t.normalMap = a.material.normalMap.clone()),
                (t.normalMap.needsUpdate = !0));
          for (var e in ((a.material = t), this.userData))
            this.userData.hasOwnProperty(e) &&
              (a.userData[e] = this.userData[e]);
        }
      }),
      e
    );
  }),
  $(document).ready(function () {
    $("#alert_top .close").click(function () {
      $("#alert_top").slideUp("slow");
    });
  }),
  $(document).ready(function () {
    $("#resetButton").click(function () {
      bootbox.confirm({
        title: "Reset Building?",
        message:
          "Do you want to reset your building back to default settings? This cannot be undone.",
        buttons: {
          cancel: {
            label: '<i class="fa fa-times"></i> Cancel',
          },
          confirm: {
            label: '<i class="fa fa-check"></i> Reset',
            className: "btn-danger",
          },
        },
        callback: function (e) {
          e && location.reload();
        },
      });
    });
  }),
  $(document).ready(function () {
    var e;
    "" !== ma.settings.disclaimerButtonText &&
      ((e = document.createElement("div")).setAttribute("id", "disclaimer"),
        (e.textContent = ma.settings.disclaimerButtonText),
        "" !== ma.settings.disclaimerText && e.setAttribute("class", "clickable"),
        document.body.appendChild(e)),
      $("#disclaimer").click(function () {
        bootbox.alert({
          message: ma.settings.disclaimerText,
          centerVertical: !0,
          size: "small",
        });
      });
  }),
  $("#request-quote input[name=contact]").click(function () {
    $("#ready-for-quote-questions").toggle($(this).prop("checked")),
      $("#modal-quote .modal-body").animate(
        {
          scrollTop: $("#modal-quote .modal-body")[0].scrollHeight,
        },
        1e3
      );
  }),
  ma.hasOwnProperty("mapEnabled") &&
  $("#mapButton").click(function () {
    ci();
  }),
  $(document).ready(function () {
    $("#printButton").click(function () {
      Mo();
    }),
      $("#shareButton").click(function () {
        $("#modal-share").modal("show");
      }),
      $("#saveButton").click(function () {
        $("#modal-save").modal("show");
      }),
      $("#quoteButton").click(function () {
        $("#modal-quote").modal("show");
      }),
      $("#zoomIn").click(function () {
        var e = environmentMap.minDistance,
          t = environmentMap.target,
          a = mi(mainCamera.position, t, 0.13);
        t.distanceTo(a) > e && mainCamera.position.set(a.x, a.y, a.z),
          event.preventDefault(),
          (isMaterialUpdateEnabled = !0);
      }),
      $("#zoomOut").click(function () {
        var e = environmentMap.maxDistance,
          t = environmentMap.target,
          a = mi(mainCamera.position, t, -0.15);
        t.distanceTo(a) < e && mainCamera.position.set(a.x, a.y, a.z),
          event.preventDefault(),
          (isMaterialUpdateEnabled = !0);
      }),
      $("#addPerson").click(function () {
        c("person"), event.preventDefault();
      }),
      $("#addTruck").click(function () {
        c("truck"), event.preventDefault();
      }),
      $("#addAirplane").click(function () {
        c("airplane"), event.preventDefault();
      }),
      $("#addDriveway").click(function () {
        c("driveway"), event.preventDefault();
      }),
      $("#navReset").click(function () {
        Wo(
          !0,
          1e3,
          {
            x: 1.25 * ma.width,
            y: ma.height + 0,
            z: 1.25 * ma.depth,
          },
          {
            x: 0,
            y: ma.height / 2,
            z: 0,
          }
        ),
          $("#navInOut").text("Look Inside");
      }),
      $("#navInOut").click(function () {
        "Look Inside" === $("#navInOut").text()
          ? (environmentMap.target.set(0, ma.height / 2, 0),
            mainCamera.position.set(0, 5, 5),
            $("#navInOut").text("Go Outside"))
          : (environmentMap.target.set(0, ma.height / 2, 0),
            mainCamera.position.set(
              1.25 * ma.width,
              ma.height + 0,
              1.25 * ma.depth
            ),
            $("#navInOut").text("Look Inside"));
      }),
      $("#navStartOver").click(function () {
        1 ==
          confirm(
            "Are you sure you want to erase your building and start over?"
          ) && (window.location = window.location.pathname);
      }),
      $("#navHideWalls").click(function () {
        Bo();
      });
  }),
  $(document).ready(function () {
    $("#toggleDimensions").click(function (e) {
      e.preventDefault(), wi((isUIInitialized = !isUIInitialized));
    });
  }),
  $(document).ready(function () {
    var e;
    isInIframe() &&
      document.fullscreenEnabled &&
      ((e = document.createElement("i")).setAttribute(
        "class",
        "iconButton fas fa-expand"
      ),
        e.setAttribute("id", "fullscreenButton"),
        document.querySelector("#info .iconButtons.right").appendChild(e),
        (e.onclick = function () {
          document.fullscreenElement
            ? (document.exitFullscreen(),
              this.setAttribute("class", "iconButton fas fa-expand"))
            : document.body
              .requestFullscreen({
                navigationUI: "hide",
              })
              .then(() => {
                this.setAttribute("class", "iconButton fas fa-compress");
              })
              .catch((e) => {
                showAlertDialog(
                  "",
                  "An error occurred while trying to switch into fullscreen mode: " +
                  e.message +
                  " " +
                  e.name
                );
              });
        }));
  });
