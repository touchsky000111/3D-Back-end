var applyToControllers = function(applyToControllers) {
        for (var setElementId in dat.controllers) dat.controllers.hasOwnProperty(setElementId) && applyToControllers(dat.controllers[setElementId])
    },
    setElementId = function(applyToControllers) {
        return applyToControllers ? this.__li.setAttribute("id", applyToControllers) : this.__li.removeAttribute("id"), this
    },
    setElementClass = function(applyToControllers) {
        return applyToControllers ? this.__li.setAttribute("class", applyToControllers) : this.__li.removeAttribute("class"), this
    },
    setElementHidden = function(applyToControllers) {
        return applyToControllers ? this.__li.setAttribute("hidden", applyToControllers) : this.__li.removeAttribute("hidden"), this
    };

function ColorOption(applyToControllers, setElementId, setElementClass) {
    this.categories = setElementClass || !1, this.name = applyToControllers, this.hex = setElementId, this.id = this.name.replace(/[^setElementClass-zA-Z]/gi, "");
    setElementClass = new THREE.Color(this.hex);
    this.r = Math.round(255 * setElementClass.r), this.tempG2 = Math.round(255 * setElementClass.tempG2), this.tempB = Math.round(255 * setElementClass.tempB)
}
applyToControllers(function(applyToControllers) {
    applyToControllers.prototype.hasOwnProperty("id") || (applyToControllers.prototype.id = setElementId)
}), applyToControllers(function(applyToControllers) {
    applyToControllers.prototype.hasOwnProperty("class") || (applyToControllers.prototype.class = setElementClass)
}), applyToControllers(function(applyToControllers) {
    applyToControllers.prototype.hasOwnProperty("hidden") || (applyToControllers.prototype.hidden = setElementHidden)
}), Detector.webgl || Detector.addGetWebGLMessage();
var renderer, camera, scene, controls, currentColorHex = "",
    colorOptions = [new ColorOption("STD W/O TRIM", "#B09976", ["trim"]), new ColorOption("Bone White", "#E4E4E4", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Light Gray", "#979B9A", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Shadow Gray", "#5c6262", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Black", "#15191c", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Clay", "#a39a8b", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Sierra Tan", "#b2977a", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Cocoa Brown", "#573f35", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Sand White", "#f4ebcd", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Ivory", "#f4f0d3", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Red", "#7f3832", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Dark Green", "#4b644f", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Marina Blue", "#2a5568", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Light Stone", "#c7c4a3", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Light Brown", "#6f5d4f", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Berry", "#583c3b", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Bronze", "#4b4330", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Patina Green", "#8da188", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Copper Metallic", "#9d5c26", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Hawaiian Blue", "#4b7281", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"]), new ColorOption("Galvalume", "#bebebe", ["roof", "wall", "trim", "soffit", "interior", "wainscot", "other"])];
let isGeometryActive = !1,
    isSceneLoaded = !1,
    isRendererReady = !1,
    viewportElement, mainScene, currentCamera, perspectiveCamera, orthographicCamera, rendererInstance, orbitControls, topControls, gui, tempP, shouldAutoRotate = !0,
    tempQ, tempPE, tempJ, tempN = !1,
    tempD, tempj, tempz, tempk, tempLA, tempI, tempHA, tempF, tempG, tempV, tempQ2, tempX, tempEE, tempME, tempGE, tempU, tempUE, tempTE, tempYE, tempG2, tempU2, tempT, tempB, tempF2, tempW, tempV2, tempBE, tempCA, tempDA, tempFE, tempWE, tempVE, tempEE2, tempME2, tempDE, tempTE2, tempPE2, tempAE, tempOE, tempIE, tempNE, tempRE, dimensionsArray = [null, null, null, null, null, null],
    We = !1,
    Se = "standard",
    Oe = 0,
    y = null,
    Be = null,
    xe, Re, ua, Ta, ya, ba, fa, wa, va, Ea, Ma, Da, Pa, He, Ce, Le, Ne, je, ze, ke, Ie, Fe, Ge, _e, $applyToControllers, Ae, qe, Ve, Qe, Xe, Ue, Ye, Ze, Ke, Je, et, tt, at, ot, it, nt, rt, st, lt, ht, ct, dt, pt, mt, gt, ut, Tt, yt, bt, ft, wt, vt, Et, Mt, Dt, Pt, Wt, St, Ot, Bt, xt = 6,
    Rt = 3 * xt,
    pa, Ht, Ct, Lt, Nt, se, le, jt, zt;
var Wa, he = !1,
    kt = !1,
    It = !1,
    Ft = !1,
    Gt = !1,
    _t = !1,
    $setElementId = !1,
    At = !1,
    qt = !1,
    Vt = 0,
    Qt = 0,
    Xt = 0,
    Ut = 0,
    Yt = 0,
    Zt = 0,
    Kt = new THREE.Color(11573622),
    Jt = new THREE.Color(11508086),
    ea = new THREE.Color(7895160),
    ta = new THREE.Color(4861486);
let aa = window.location.href,
    oa = new URL(aa),
    ia = document.currentScript.getAttribute("data-version"),
    na = oa.pathname.replace(/\/+$/, ""),
    A = "https://static.custom3dbuilder.com/metalbuildings/" + ia + "/",
    ra = oa.searchParams.get("id"),
    Sa = oa.searchParams.get("dt"),
    Oa = (he = null !== ra && null !== Sa, renderer = document.currentScript.hasAttribute("data-status") ? document.currentScript.getAttribute("data-status") : "live", document.currentScript.hasAttribute("data-ref") && (camera = document.currentScript.getAttribute("data-ref")), scene = !!document.currentScript.hasAttribute("data-color-visualizer") && document.currentScript.getAttribute("data-color-visualizer"), document.currentScript.getAttribute("data-company-name")),
    Ba = document.currentScript.getAttribute("data-tool-name"),
    xa = (!he && scene && (he = !0), "US"),
    Ra = (document.currentScript.hasAttribute("data-localization") && (xa = document.currentScript.getAttribute("data-localization")), {
        US: {
            Color: "Color",
            color: "color",
            Colors: "Colors",
            colors: "colors"
        },
        CA: {
            Color: "Colour",
            color: "colour",
            Colors: "Colours",
            colors: "colours"
        }
    }),
    Ha = {
        1234: {
            object: "directions-1234.lwo"
        },
        ABCD: {
            object: "directions-abcd.lwo",
            tempN: {
                name: "Endwall scene",
                short: "EWB",
                abbr: "scene"
            },
            S: {
                name: "Endwall tempD",
                short: "EWD",
                abbr: "tempD"
            },
            orthographicCamera: {
                name: "Sidewall perspectiveCamera",
                short: "SWC",
                abbr: "perspectiveCamera"
            },
            W: {
                name: "Sidewall A",
                short: "SWA",
                abbr: "A"
            },
            NE: {
                name: "Corner BC",
                short: "BC",
                abbr: "BC"
            },
            NW: {
                name: "Corner AB",
                short: "AB",
                abbr: "AB"
            },
            SE: {
                name: "Corner CD",
                short: "CD",
                abbr: "CD"
            },
            SW: {
                name: "Corner AD",
                short: "AD",
                abbr: "AD"
            }
        },
        "Front Back Left Right": {
            object: "directions-frontBackLeftRight.lwo"
        },
        "Front End Wall": {
            object: "directions-frontEndWall.lwo",
            tempN: {
                name: "Front Endwall",
                short: "Front",
                abbr: "tempF"
            },
            S: {
                name: "Back Endwall",
                short: "Back",
                abbr: "scene"
            },
            orthographicCamera: {
                name: "Left Sidewall",
                short: "Left",
                abbr: "topControls"
            },
            W: {
                name: "Right Sidewall",
                short: "Right",
                abbr: "isRendererReady"
            },
            NE: {
                name: "Front Left Corner",
                short: "Front Left",
                abbr: "FL"
            },
            NW: {
                name: "Front Right Corner",
                short: "Front Right",
                abbr: "FR"
            },
            SE: {
                name: "Back Left Corner",
                short: "Back Left",
                abbr: "BL"
            },
            SW: {
                name: "Back Right Corner",
                short: "Back Right",
                abbr: "BR"
            }
        },
        "Front Side Wall": {
            object: "directions-frontSideWall.lwo",
            tempN: {
                name: "Right Endwall",
                short: "Right",
                abbr: "isRendererReady"
            },
            S: {
                name: "Left Endwall",
                short: "Left",
                abbr: "topControls"
            },
            orthographicCamera: {
                name: "Front Sidewall",
                short: "Front",
                abbr: "tempF"
            },
            W: {
                name: "Back Sidewall",
                short: "Back",
                abbr: "scene"
            },
            NE: {
                name: "Front Right Corner",
                short: "Front Right",
                abbr: "FR"
            },
            NW: {
                name: "Back Right Corner",
                short: "Back Right",
                abbr: "BR"
            },
            SE: {
                name: "Front Left Corner",
                short: "Front Left",
                abbr: "FL"
            },
            SW: {
                name: "Back Left Corner",
                short: "Back Left",
                abbr: "BL"
            }
        },
        "Front Side Wall Reversed": {
            object: "directions-frontSideWallReversed.lwo",
            tempN: {
                name: "Left Endwall",
                short: "Left",
                abbr: "topControls"
            },
            S: {
                name: "Right Endwall",
                short: "Right",
                abbr: "isRendererReady"
            },
            orthographicCamera: {
                name: "Back Sidewall",
                short: "Back",
                abbr: "scene"
            },
            W: {
                name: "Front Sidewall",
                short: "Front",
                abbr: "tempF"
            },
            NE: {
                name: "Back Left Corner",
                short: "Back Left",
                abbr: "BL"
            },
            NW: {
                name: "Front Left Corner",
                short: "Front Left",
                abbr: "FL"
            },
            SE: {
                name: "Back Right Corner",
                short: "Back Right",
                abbr: "BR"
            },
            SW: {
                name: "Front Right Corner",
                short: "Front Right",
                abbr: "FR"
            }
        },
        "North Front": {
            object: "directions-northFront.lwo",
            tempN: {
                name: "North End Wall",
                short: "North",
                abbr: "tempN"
            },
            S: {
                name: "South End Wall",
                short: "South",
                abbr: "S"
            },
            orthographicCamera: {
                name: "East Sidewall",
                short: "East",
                abbr: "orthographicCamera"
            },
            W: {
                name: "West Sidewall",
                short: "West",
                abbr: "W"
            },
            NE: {
                name: "Northeast Corner",
                short: "Northeast",
                abbr: "NE"
            },
            NW: {
                name: "Northwest Corner",
                short: "Northwest",
                abbr: "NW"
            },
            SE: {
                name: "Southeast Corner",
                short: "Southeast",
                abbr: "SE"
            },
            SW: {
                name: "Southwest Corner",
                short: "Southwest",
                abbr: "SW"
            }
        },
        "South Front": {
            object: "directions-southFront.lwo",
            tempN: {
                name: "South End Wall",
                short: "South",
                abbr: "S"
            },
            S: {
                name: "North End Wall",
                short: "North",
                abbr: "tempN"
            },
            orthographicCamera: {
                name: "West Sidewall",
                short: "West",
                abbr: "W"
            },
            W: {
                name: "East Sidewall",
                short: "East",
                abbr: "orthographicCamera"
            },
            NE: {
                name: "Southwest Corner",
                short: "Southwest",
                abbr: "SW"
            },
            NW: {
                name: "Southeast Corner",
                short: "Southeast",
                abbr: "SE"
            },
            SE: {
                name: "Northwest Corner",
                short: "Northwest",
                abbr: "NW"
            },
            SW: {
                name: "Northeast Corner",
                short: "Northeast",
                abbr: "NE"
            }
        },
        "Front Side Wall A": {
            object: "directions-frontSideWallA.lwo",
            tempN: {
                name: "Left End Wall scene",
                short: "Left scene",
                abbr: "topControls"
            },
            S: {
                name: "Right End Wall tempD",
                short: "Right tempD",
                abbr: "isRendererReady"
            },
            orthographicCamera: {
                name: "Back Sidewall perspectiveCamera",
                short: "Back perspectiveCamera",
                abbr: "scene"
            },
            W: {
                name: "Front Sidewall A",
                short: "Front A",
                abbr: "tempF"
            },
            NE: {
                name: "Back Left Corner",
                short: "Back Left",
                abbr: "BL"
            },
            NW: {
                name: "Front Left Corner",
                short: "Front Left",
                abbr: "FL"
            },
            SE: {
                name: "Back Right Corner",
                short: "Back Right",
                abbr: "BR"
            },
            SW: {
                name: "Front Right Corner",
                short: "Front Right",
                abbr: "FR"
            }
        }
    },
    ce = Ha["Front End Wall"];
gui = new dat.GUI({
    autoplace: !1,
    width: 300,
    hideable: !1
});
var Ca = new To,
    W = new ho,
    La = new po;
let Na = [{
    enabled: !0,
    fogColor: 12637405,
    skyImage: "images/sky/sky-grass.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Grass Plains"
}, {
    enabled: !0,
    fogColor: 7109683,
    skyImage: "images/sky/sky-grass-2.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Treed Vally"
}, {
    enabled: !0,
    fogColor: 9671499,
    skyImage: "images/sky/sky-grass-3.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Clearing"
}, {
    enabled: !0,
    fogColor: 6185017,
    skyImage: "images/sky/sky-grass-mountains.jpg",
    groundImage: "images/ground/grass/grass_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Green Mountains"
}, {
    enabled: !0,
    fogColor: 8618883,
    skyImage: "images/sky/sky-mountains.jpg",
    groundImage: "images/ground/rocky/rocky_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Rocky Mountains"
}, {
    enabled: !0,
    fogColor: 10452824,
    skyImage: "images/sky/sky-desert.jpg",
    groundImage: "images/ground/southwest/southwest_color.jpg",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !1,
    friendlyName: "Desert Terrain"
}, {
    enabled: !0,
    fogColor: 16777215,
    skyImage: "",
    groundImage: "",
    repeatGroundX: 80,
    repeatGroundY: 120,
    gridVisible: !0,
    friendlyName: "None"
}];

function ja() {
    this.width = 30, this.depth = 40, this.height = 10, this.roofType = "Gabled", this.asymmetrical = 0, this.roofPitch = 1, this.frameType = "Hybrid", this.environment = enabledEnvironments[0].friendlyName, this.trussThickness = 2 / 12, this.maxTrussSpacing = 10, this.maxPostSpacing = this.maxTrussSpacing, this.maxLeantoPostSpacing = this.maxPostSpacing, this.secondaryMembers = "Wood", this.postFooting = "None", this.columnSize = "6x6", this.girtSpacing = 2, this.flushGirts = !1, this.standingGirts = !0, this.girtThickness = 3.5 / 12, this.purlinSpacing = 2, this.flushPurlins = !1, this.standingPurlins = !0, this.purlinThickness = 5.5 / 12, this.logoPlacement = "Peak", this.logoShape = "Standard", this.hideWalls = 0, this.allowLeanToCeilingHeight = !1, this.roofColor = "Black", this.wallColor = "Dark Green", this.trimColor = "STD W/O TRIM", this.ridgeCapColor = "Match Roof", this.soffitColor = "Bone White", this.walkDoorColor = "Bone White", this.largeDoorColor = "Bone White", this.wainscotColor = "Black", this.boardAndBattenWoodenBarnSiding = !1, this.enclosedN = !1, this.enclosedS = !1, this.enclosedE = !1, this.enclosedW = !1, this.showGableDressWithOpenGableWalls = !1, this.wainscotAll = !1, this.wainscot1 = !1, this.wainscot2 = !1, this.wainscot3 = !1, this.wainscot4 = !1, this.wainscotHeight = 2.5, this.baseTrim = !1, this.gableRoofOverhangs = 18, this.eaveRoofOverhangs = 18, this.gableFront = 1.5, this.gableBack = 1.5, this.eaveL = 1, this.eavePitchL = 4, this.eaveSoffitL = !1, this.eaveR = 1, this.eavePitchR = 4, this.eaveSoffitR = !1, this.gutters = !1, this.boxedOverhangs = !1, this.additionalFrontBays = 0, this.additionalBackBays = 0, this.cupola18in = 0, this.cupola2 = 0, this.cupola30in = 0, this.cupola3 = 0, this.cupola42in = 0, this.cupola4 = 0, this.cupolaWindow18in = 0, this.cupolaWindow2 = 0, this.cupolaWindow30in = 0, this.cupolaWindow3 = 0, this.cupolaWindow42in = 0, this.cupolaWindow4 = 0, this.eaveLightsEast = !1, this.eaveLightsWest = !1, this.eaveLightWidth = 48, this.eaveLightHeight = 24, this.eaveLightPanelsEast = !1, this.eaveLightPanelsWest = !1, this.weatherVane = "None", this.leanTo1 = !1, this.leanTo1CutL = 0, this.leanTo1CutR = 0, this.leanTo1Drop = 0, this.leanTo1Length = 8, this.leanTo1Depth = 8, this.leanTo1Height = 8, this.leanTo1Pitch = 1, this.leanTo1Enclosed = !0, this.leanTo1Walls = "Open", this.leanTo1WrappedPosts = !1, this.leanTo1MiteredPosts = !1, this.leanTo2 = !1, this.leanTo2CutL = 0, this.leanTo2CutR = 0, this.leanTo2Drop = 0, this.leanTo2Length = 8, this.leanTo2Depth = 8, this.leanTo2Height = 8, this.leanTo2Pitch = 1, this.leanTo2Enclosed = !0, this.leanTo2Walls = "Open", this.leanTo2WrappedPosts = !1, this.leanTo2MiteredPosts = !1, this.leanTo3 = !1, this.leanTo3CutL = 0, this.leanTo3CutR = 0, this.leanTo3Drop = 0, this.leanTo3Length = 8, this.leanTo3Depth = 8, this.leanTo3Height = 8, this.leanTo3Pitch = 1, this.leanTo3Enclosed = !0, this.leanTo3Walls = "Open", this.leanTo3WrappedPosts = !1, this.leanTo3MiteredPosts = !1, this.leanTo4 = !1, this.leanTo4CutL = 0, this.leanTo4CutR = 0, this.leanTo4Drop = 0, this.leanTo4Length = 8, this.leanTo4Depth = 8, this.leanTo4Height = 8, this.leanTo4Pitch = 1, this.leanTo4Enclosed = !0, this.leanTo4Walls = "Open", this.leanTo4WrappedPosts = !1, this.leanTo4MiteredPosts = !1, this.maxPorchPostSpacing = this.maxPostSpacing, this.porchN = !1, this.porchS = !1, this.porchE = !1, this.porchW = !1, this.porchWrapNW = !1, this.porchWrapNE = !1, this.porchWrapSE = !1, this.porchWrapSW = !1, this.porchWrapHipNW = !1, this.porchWrapHipNE = !1, this.porchWrapHipSE = !1, this.porchWrapHipSW = !1, this.windowPictureQty = 0, this.windowSliderQty = 0, this.windowDoubleHungQty = 0, this.windowSingleHungQty = 0, this.windowTwinsetQty = 0, this.windowCasementQty = 0, this.windowSlopeLeftQty = 0, this.windowSlopeRightQty = 0, this.windowAwningQty = 0, this.windowHopperQty = 0, this.windowFramedOpeningQty = 0, this.louverQty = 0, this.mansardQty = 0, this.mansardWoodQty = 0, this.mansardHipQty = 0, this.mansardHip2Qty = 0, this.walkDoorSolidQty = 0, this.walkDoorSolidDoubleQty = 0, this.walkDoorHalfGlassDoubleQty = 0, this.walkDoorHalfGlassQty = 0, this.walkDoor6PanelQty = 0, this.walkDoor6PanelDoubleQty = 0, this.walkDoor6LiteQty = 0, this.walkDoor9LiteQty = 0, this.walkDoor9LiteDoubleQty = 0, this.walkDoor9LiteNoPanelQty = 0, this.walkDoorSlidingGlassDoubleQty = 0, this.walkDoorFrenchDoubleDoubleQty = 0, this.walkDoorAllGlassQty = 0, this.walkDoorAllGlassDoubleQty = 0, this.walkDoorCrossbuckQty = 0, this.walkDoorEquineQty = 0, this.walkDoorEquineSmoothQty = 0, this.walkDoorFramedOpeningQty = 0, this.garageOverheadPanelQty = 0, this.garageOverheadPanelWindowQty = 0, this.garageOverheadFlatQty = 0, this.garageOverheadFlatWindowQty = 0, this.garageOverheadFlatModernQty = 0, this.garageOverheadRibbedQty = 0, this.garageSlideQty = 0, this.garageSlideLeftQty = 0, this.garageSlideRightQty = 0, this.garageSlideCrossbuckQty = 0, this.garageSlideCrossbuckSmoothQty = 0, this.garageBiFoldQty = 0, this.garageHydraulicQty = 0, this.garageRollUpQty = 0, this.garageFramedOpeningQty = 0, this.divisionWall = !1, this.divisionAmount = 20, this.divisionMaterial = "Steel", this.perimeterWalls = "None", this.perimeterWalls2 = "None", this.flooring2 = "None", this.ceiling = "None", this.ceiling2 = "None", this.insulationRoof = "None", this.insulationWalls = "None", this.interiorWallQty = 0, this.interiorDoorQty = 0, this.mezzanineBays = 0, this.mezzanineStartingBay = 1, this.mezzanineDepth = 0, this.useMezzanineDepth = !1, this.mezzanineHeight = 8, this.framing = "Post Frame", this.person = 0, this.man = 0, this.woman = 0, this.truck = 0, this.car = 0, this.airplane = 0, this.atv = 0, this.jetski = 0, this.combine = 0, this.tractor = 0, this.boat = 0, this.skiBoat = 0, this.driveway = 0, this.grainCart = 0, this.semiTruck = 0, this.semiTrailer = 0, this.semiTrailer53 = 0, this.shippingContainer20 = 0, this.shippingContainer40 = 0, this.backhoe = 0, this.cornHead6 = 0, this.cornHead = 0, this.cornHead12 = 0, this.beanHead = 0, this.beanHead35 = 0, this.beanHead40 = 0, this.desk = 0, this.chair = 0, this.conferenceTable = 0, this.lawnMower = 0, this.rv = 0, this.camper = 0, this.horseStall = 0, this.hayBales = 0, this.workbench = 0, this.airCompressor = 0, this.cultivator = 0, this.utv = 0, this.kitchenChair = 0, this.nightStand = 0, this.coffeeTable = 0, this.endTable = 0, this.version = ia
}
enabledEnvironments = Na.filter(applyToControllers => !0 === applyToControllers.enabled), ja.prototype.settings = {
    roofPitchMin: 1,
    roofPitchMax: 4,
    showPostsWithOpenGableWall: !1,
    showLeantoWallTriangleWhenOpen: !1,
    showExtensionTriangleWhenOpen: !0,
    firstGirtSpacingOffGround: 3,
    shadows: "medium",
    ground: "grass",
    showWatermark: !0,
    watermarkOpacity: .15,
    watermarkOnConcrete: !0,
    showLogoOnTruss: !1,
    downspountsOnEndsOnly: !0,
    ridgidFrameStraightColumns: !1,
    disclaimerButtonText: "Disclaimer",
    disclaimerText: "The 3D Designer is not intended to create setElementClass physically accurate or structurally sound representation of setElementClass building. It is for visualization only and should not tempBE considered setElementClass substitute for proper engineering, drawings, or building plans. Due to variations in displays, colors may not tempBE accurately portrayed on all devices. We highly recommend requesting physical color samples.",
    boxedEaves: !1,
    boxedEavesMatchTrim: !0,
    postsOnGableRoofOverhangsOver: 2,
    enclosedGableRoofOverhangTriangles: !1,
    woodenPorchPosts: !0,
    variableLargeDoorSizes: !0,
    leantoRoofOverhangsFollowMainRoof: !0,
    roundAllButMinimumRoofPitch: !1,
    showPostFrameBottomPlate: !1,
    restrictPeakOfCoverdGablesToEaveHeight: !0,
    restrictEaveOfCoverdGablesToEaveHeight: !0,
    wrappedPorchPostColorMatches: "trimColor",
    vaultedCeiling: !1,
    showPorchMidPostsOnEndwallsOnly: !1,
    showPorchPostsOnEndwallsOnly: !1,
    orientCeilingPanelsToWidth: !0,
    matchPeakSignBackgroundToTrimColor: !1,
    customWallLogo: !1,
    offerMeasurements: !0
}, ja.prototype.coreBuildingDimensions = function() {
    return {
        width: this.width,
        depth: this.depth,
        height: this.height,
        center: {
            isSceneLoaded: 0,
            y: 0,
            tempz: 0
        },
        northEdge: this.depth / 2,
        southEdge: this.depth / -2,
        eastEdge: this.width / -2,
        westEdge: this.width / 2
    }
}, ja.prototype.buildingWithLeantoDimensions = function() {
    this.coreBuildingDimensions().width, this.coreBuildingDimensions().depth;
    var applyToControllers = this.coreBuildingDimensions().height;
    let setElementId = this.coreBuildingDimensions().northEdge,
        setElementClass = this.coreBuildingDimensions().southEdge,
        setElementHidden = this.coreBuildingDimensions().eastEdge,
        i = this.coreBuildingDimensions().westEdge;
    ma.leanTo1 && (setElementId += ma.leanTo1Depth), ma.leanTo3 && (setElementClass -= ma.leanTo3Depth), ma.leanTo2 && (setElementHidden -= ma.leanTo2Depth), ma.leanTo4 && (i += ma.leanTo4Depth);
    var dimensionsArray = Math.abs(setElementId) + Math.abs(setElementClass),
        r = Math.abs(setElementHidden) + Math.abs(i),
        ColorOption = {};
    return ColorOption.isSceneLoaded = (setElementHidden + i) / 2, ColorOption.y = this.peakHeight() / 2, ColorOption.tempz = (setElementId + setElementClass) / 2, {
        width: r,
        depth: dimensionsArray,
        height: applyToControllers,
        center: ColorOption,
        northEdge: setElementId,
        southEdge: setElementClass,
        eastEdge: setElementHidden,
        westEdge: i
    }
}, ja.prototype.buildingWithGableExtensionsDimensions = function() {
    let applyToControllers, setElementId, setElementClass, setElementHidden, i, dimensionsArray, r;
    applyToControllers = ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN ? Math.max(this.buildingWithLeantoDimensions().northEdge, this.coreBuildingDimensions().northEdge + ma.coveredGableExtensionNDepth) : this.buildingWithLeantoDimensions().northEdge, setElementId = ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS ? Math.min(this.buildingWithLeantoDimensions().southEdge, this.coreBuildingDimensions().southEdge - ma.coveredGableExtensionSDepth) : this.buildingWithLeantoDimensions().southEdge, setElementClass = ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE ? Math.min(this.buildingWithLeantoDimensions().eastEdge, this.coreBuildingDimensions().eastEdge - ma.coveredGableExtensionEDepth) : this.buildingWithLeantoDimensions().eastEdge, setElementHidden = ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW ? Math.max(this.buildingWithLeantoDimensions().westEdge, this.coreBuildingDimensions().westEdge + ma.coveredGableExtensionWDepth) : this.buildingWithLeantoDimensions().westEdge, dimensionsArray = Math.abs(applyToControllers) + Math.abs(setElementId), i = Math.abs(setElementClass) + Math.abs(setElementHidden), r = this.buildingWithLeantoDimensions().height;
    var ColorOption = {};
    return ColorOption.isSceneLoaded = (setElementClass + setElementHidden) / 2, ColorOption.y = this.peakHeight() / 2, ColorOption.tempz = (applyToControllers + setElementId) / 2, {
        width: i,
        depth: dimensionsArray,
        height: r,
        center: ColorOption,
        northEdge: applyToControllers,
        southEdge: setElementId,
        eastEdge: setElementClass,
        westEdge: setElementHidden
    }
}, ja.prototype.buildingWithPorchesDimensions = function() {
    let applyToControllers = this.buildingWithGableExtensionsDimensions().width,
        setElementId = this.buildingWithGableExtensionsDimensions().depth;
    var setElementClass = this.buildingWithGableExtensionsDimensions().height,
        setElementHidden = this.buildingWithGableExtensionsDimensions().northEdge,
        i = this.buildingWithGableExtensionsDimensions().southEdge,
        dimensionsArray = this.buildingWithGableExtensionsDimensions().eastEdge,
        r = this.buildingWithGableExtensionsDimensions().westEdge;
    let ColorOption = 0,
        renderer = 0,
        controls = 0,
        c = 0;
    ma.porchN && (d = mainScene.getObjectByName("porchN-clone"), ColorOption = d.userData.porchDepth, setElementId += d.userData.porchDepth), ma.porchS && (d = mainScene.getObjectByName("porchS-clone"), renderer = d.userData.porchDepth, setElementId += d.userData.porchDepth), ma.porchE && (d = mainScene.getObjectByName("porchE-clone"), controls = d.userData.porchDepth, applyToControllers += d.userData.porchDepth), ma.porchW && (d = mainScene.getObjectByName("porchW-clone"), c = d.userData.porchDepth, applyToControllers += d.userData.porchDepth), ma.porchWrapNW && (d = mainScene.getObjectByName("porchWrapNW-clone"), ColorOption = Math.max(ColorOption, d.userData.porchDepth), c = Math.max(c, d.userData.porchDepth)), ma.porchWrapNE && (d = mainScene.getObjectByName("porchWrapNE-clone"), ColorOption = Math.max(ColorOption, d.userData.porchDepth), controls = Math.max(controls, d.userData.porchDepth)), ma.porchWrapSE && (d = mainScene.getObjectByName("porchWrapSE-clone"), renderer = Math.max(renderer, d.userData.porchDepth), controls = Math.max(controls, d.userData.porchDepth)), ma.porchWrapSW && (d = mainScene.getObjectByName("porchWrapSW-clone"), renderer = Math.max(renderer, d.userData.porchDepth), c = Math.max(c, d.userData.porchDepth)), ma.porchWrapHipNW && (d = mainScene.getObjectByName("porchWrapHipNW-clone"), ColorOption = Math.max(ColorOption, d.userData.porchDepth), c = Math.max(c, d.userData.porchDepth)), ma.porchWrapHipNE && (d = mainScene.getObjectByName("porchWrapHipNE-clone"), ColorOption = Math.max(ColorOption, d.userData.porchDepth), controls = Math.max(controls, d.userData.porchDepth)), ma.porchWrapHipSE && (d = mainScene.getObjectByName("porchWrapHipSE-clone"), renderer = Math.max(renderer, d.userData.porchDepth), controls = Math.max(controls, d.userData.porchDepth)), ma.porchWrapHipSW && (d = mainScene.getObjectByName("porchWrapHipSW-clone"), renderer = Math.max(renderer, d.userData.porchDepth), c = Math.max(c, d.userData.porchDepth)), setElementHidden += ColorOption, i -= renderer, dimensionsArray -= controls, r += c, applyToControllers += dimensionsArray + r, setElementId += setElementHidden + i;
    var d = {};
    return d.isSceneLoaded = (dimensionsArray + r) / 2, d.y = this.peakHeight() / 2, d.tempz = (setElementHidden + i) / 2, {
        width: applyToControllers,
        depth: setElementId,
        height: setElementClass,
        center: d,
        northEdge: setElementHidden,
        southEdge: i,
        eastEdge: dimensionsArray,
        westEdge: r
    }
}, ja.prototype.roofHeightAtX = function(applyToControllers) {
    applyToControllers = applyToControllers || 0;
    let setElementId = this.height,
        setElementClass = 0,
        setElementHidden = this.width / 2 * (this.roofPitch / 12),
        i = ("Asymmetrical" == this.roofType && (setElementClass = this.asymmetrical, setElementHidden = (this.width + Math.abs(this.asymmetrical)) / 2 * (this.roofPitch / 12)), 0),
        dimensionsArray = 0;
    return "Single Slope" == this.roofType ? (i = 0 <= this.roofPitch ? this.width / -2 - applyToControllers : this.width / 2 - applyToControllers, setElementId += Math.abs(i * this.roofPitch / 12)) : 0 <= setElementClass && applyToControllers <= setElementClass ? (i = Math.abs(this.width / -2 - applyToControllers), setElementId += i * this.roofPitch / 12) : setElementClass < 0 && applyToControllers >= setElementClass ? (i = Math.abs(this.width / 2 - applyToControllers), setElementId += i * this.roofPitch / 12) : 0 <= setElementClass && applyToControllers >= setElementClass ? (i = Math.abs(this.width / 2 - applyToControllers), dimensionsArray = Math.abs(this.width / 2 - setElementClass), setElementId += ri(i, 0, n, 0, setElementHidden)) : setElementClass < 0 && applyToControllers <= setElementClass && (i = Math.abs(this.width / -2 - applyToControllers), dimensionsArray = Math.abs(this.width / -2 - setElementClass), setElementId += ri(i, 0, dimensionsArray, 0, setElementHidden)), setElementId
}, ja.prototype.lowerChordHeightAtX = function(applyToControllers) {
    let setElementId, setElementClass;
    return setElementId = !ma.hasOwnProperty("trussStyle") || "Scissor" != ma.trussStyle && "Raised Lower Chord" != ma.trussStyle ? ma.height : applyToControllers < 0 ? (setElementClass = Math.abs(ma.width / -2 - applyToControllers), ma.wallHeightL() + ma.lowerChordScissorPitch * setElementClass / 12) : (setElementClass = ma.width / 2 - applyToControllers, ma.wallHeightR() + ma.lowerChordScissorPitch * setElementClass / 12)
}, ja.prototype.peakHeight = function() {
    return "Asymmetrical" == this.roofType ? this.roofHeightAtX(this.asymmetrical) : "Single Slope" == this.roofType ? 0 <= this.roofPitch ? this.roofHeightAtX(this.width / 2) : this.roofHeightAtX(this.width / -2) : this.roofHeightAtX(0)
}, ja.prototype.wallHeightL = function() {
    return "Single Slope" === ma.roofType && ma.width * ma.roofPitch / 12 < 0 ? ma.height + ma.width * Math.abs(ma.roofPitch) / 12 : ma.height
}, ja.prototype.wallHeightR = function() {
    return "Single Slope" === ma.roofType && 0 < ma.width * ma.roofPitch / 12 ? ma.height + ma.width * Math.abs(ma.roofPitch) / 12 : ma.height
};
var ma = new ja;
if (isSceneLoaded && console.log(ma), he) {
    he = !0;
    let applyToControllers = "load.php?id=" + ra + "&dt=" + Sa;
    scene && null == ra && null == Sa && (applyToControllers = "color-visualizer-default.json"), $.getJSON(applyToControllers, function(applyToControllers) {
        if (applyToControllers.hasOwnProperty("success") && !1 === applyToControllers.success && applyToControllers.hasOwnProperty("errors")) console.log(applyToControllers.errors);
        else if (applyToControllers.hasOwnProperty("params") && null !== applyToControllers.params) {
            console.log("Loading saved building"), isSceneLoaded && console.log(applyToControllers), applyToControllers.hasOwnProperty("version") ? applyToControllers.version !== ia && window.location.replace("./tempV2" + applyToControllers.version) : (applyToControllers.params.hasOwnProperty("weatherVane") && ("true" === applyToControllers.params.weatherVane || !0 === applyToControllers.params.weatherVane ? applyToControllers.params.weatherVane = "Rooster" : applyToControllers.params.weatherVane = "None"), applyToControllers.hasOwnProperty("doorsWindows") && null !== applyToControllers.doorsWindows && 0 !== Object.keys(applyToControllers.doorsWindows).length && (applyToControllers.doorsWindows.filter(applyToControllers => "window3x4-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "windowDoubleHung-clone", applyToControllers.grid = "1", applyToControllers.scale = "3,4,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "window3x4Shutters-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "windowDoubleHung-clone", applyToControllers.grid = "1", applyToControllers.scale = "3,4,0", applyToControllers.shutters = "1"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "window4x3-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "windowSlider-clone", applyToControllers.grid = "1", applyToControllers.scale = "4,3,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "window4x3Shutters-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "windowSlider-clone", applyToControllers.grid = "1", applyToControllers.scale = "4,3,0", applyToControllers.shutters = "1"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "walkDoorEquine-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.scale = "4,7,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "walkDoorEquineSmooth-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.scale = "4,7,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "walkDoorSolid-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.scale = "3,6.67,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "walkDoor9Lite-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.scale = "3,6.67,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "walkDoorCrossbuck-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.scale = "3,6.67,0"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "garageOverhead-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "garageOverheadPanel-clone"
            }), applyToControllers.doorsWindows.filter(applyToControllers => "garageOverheadWindow-clone" == applyToControllers.name).forEach(applyToControllers => {
                applyToControllers.name = "garageOverheadPanelWindow-clone"
            })), applyToControllers.hasOwnProperty("porches") && null !== applyToControllers.porches && 0 !== Object.keys(applyToControllers.porches).length && applyToControllers.porches.forEach(applyToControllers => {
                var setElementId = applyToControllers.rotation.split(",");
                applyToControllers.rotation = "0," + setElementId[1] + "," + setElementId[2]
            })), applyToControllers.params.hasOwnProperty("hideWalls") && (applyToControllers.params.hideWalls = 0), applyToControllers.hasOwnProperty("porches") && null !== applyToControllers.porches && (It = applyToControllers.porches), applyToControllers.hasOwnProperty("doorsWindows") && null !== applyToControllers.doorsWindows && (Ft = applyToControllers.doorsWindows), applyToControllers.hasOwnProperty("scaleItems") && null !== applyToControllers.scaleItems && (Gt = applyToControllers.scaleItems), applyToControllers.hasOwnProperty("interiorItems") && null !== applyToControllers.interiorItems && (_t = applyToControllers.interiorItems);
            var setElementClass = applyToControllers.params;
            for (let setElementId in setElementClass) setElementClass.hasOwnProperty(setElementId) && ma.hasOwnProperty(setElementId) && ("object" != typeof setElementClass[setElementId] || null === setElementClass[setElementId] || Array.isArray(setElementClass[setElementId]) ? isNaN(setElementClass[setElementId]) ? "true" !== setElementClass[setElementId] && "false" !== setElementClass[setElementId] || (setElementClass[setElementId] = "true" === setElementClass[setElementId]) : setElementClass[setElementId] = parseFloat(setElementClass[setElementId]) : Object.keys(setElementClass[setElementId]).forEach(applyToControllers => {
                isNaN(setElementClass[setElementId][applyToControllers]) ? "true" !== setElementClass[setElementId][applyToControllers] && "false" !== setElementClass[setElementId][applyToControllers] || (setElementClass[setElementId][applyToControllers] = "true" === setElementClass[setElementId][applyToControllers]) : setElementClass[setElementId][applyToControllers] = parseFloat(setElementClass[setElementId][applyToControllers])
            }), ma[setElementId] = setElementClass[setElementId]);
            Va()
        }
    })
}
var za = {},
    ka = {},
    Ia = !1,
    Fa = !1,
    Ga = new THREE.Vector3,
    _a = [],
    $setElementClass = [],
    Aa = new THREE.Raycaster,
    r = new THREE.Vector2;

function qa() {
    for (var applyToControllers = TWEEN.getAll(), setElementId = applyToControllers.length - 1; 0 <= setElementId; setElementId--) applyToControllers[setElementId].stop()
}

function Va() {
    Qa(), Ua(), orbitControls.addEventListener("start", function() {
        orbitControls.autoRotate = !1, qa()
    }), rendererInstance.domElement.addEventListener("mousedown", no, !1), rendererInstance.domElement.addEventListener("mousemove", ro, !1), rendererInstance.domElement.addEventListener("mouseup", so, !1), rendererInstance.domElement.addEventListener("touchstart", no, !1), rendererInstance.domElement.addEventListener("touchmove", ro, !1), rendererInstance.domElement.addEventListener("touchend", so, !1), $(".guiColor select").each(function() {
        $(this).val() ? $(this).addClass($(this).children(":selected").val().replace(/\W/g, "")) : console.error("Invalid color selected for: " + $(this)[0].parentElement.parentElement.innerText)
    }).on("change", function(applyToControllers) {
        $(this).attr("class", "").addClass($(this).children(":selected").val().replace(/\W/g, ""))
    }), y = null, Be = null
}

function Qa() {
    (mainScene = new THREE.Scene).background = new THREE.Color(16777215), Detector.webgl ? rendererInstance = new THREE.WebGLRenderer({
        antialias: !0,
        preserveDrawingBuffer: !0
    }) : $("#modal-loading").modal("hide");
    var applyToControllers = zo(),
        applyToControllers = (rendererInstance.shadowMap.enabled = !0, rendererInstance.shadowMap.type = THREE.PCFSoftShadowMap, rendererInstance.localClippingEnabled = !0, (viewportElement = rendererInstance.domElement).setAttribute("id", "viewport3D"), document.body.appendChild(viewportElement), (perspectiveCamera = new THREE.PerspectiveCamera(60, applyToControllers.aspectRatio, .5, 1e3)).name = "UserCamera", perspectiveCamera.position.set(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth), perspectiveCamera.layers.enable(1), mainScene.add(perspectiveCamera), (orthographicCamera = new THREE.OrthographicCamera(-viewportElement.clientWidth / 2, viewportElement.clientWidth / 2, viewportElement.clientHeight / 2, - viewportElement.clientHeight / 2, 1, 1e3)).name = "TopView", orthographicCamera.position.set(0, 0, 400), orthographicCamera.layers.enable(1), mainScene.add(orthographicCamera), currentCamera = perspectiveCamera, (orbitControls = new THREE.OrbitControls(perspectiveCamera, rendererInstance.domElement)).enableKeys = !1, orbitControls.autoRotate = !0, orbitControls.autoRotateSpeed = .03, orbitControls.enableDamping = !0, orbitControls.dampingFactor = .1, orbitControls.rotateSpeed = .1, orbitControls.minDistance = 1, orbitControls.maxDistance = 250, orbitControls.panSpeed = .1, orbitControls.maxPolarAngle = Math.PI / 2 + .05, M.target.set(0, ma.height / 2, 0), orbitControls.addEventListener("change", () => {
            perspectiveCamera.position.y <= .5 && (perspectiveCamera.position.y = .5), shouldAutoRotate = !0
        }), scene && (orbitControls.minDistance = 40, orbitControls.enablePan = !1), (topControls = new THREE.OrbitControls(orthographicCamera, rendererInstance.domElement)).enableKeys = !1, topControls.enableRotate = !1, topControls.screenSpacePanning = !0, topControls.minZoom = 1.25, topControls.maxZoom = 100, topControls.target.set(0, 0, 0), topControls.addEventListener("change", () => {
            shouldAutoRotate = !0
        }), {
            quoteRequest: function() {
                $("#modal-quote").modal("show")
            }
        }),
        applyToControllers = (gui.add(applyToControllers, "quoteRequest").id("guiQuote").name('Request A Free Quote &nbsp;<i class="fas align-middle fa-clipboard-check"></i>').class("oneAcross actionButton"), {
            print: function() {
                Mo()
            }
        }),
        applyToControllers = (gui.add(applyToControllers, "print").id("guiPrint").name('Print &nbsp;<i class="fas align-middle fa-print"></i>').class("threeAcross actionButton"), {
            share: function() {
                $("#modal-share").modal("show"), Po()
            }
        }),
        applyToControllers = (gui.add(applyToControllers, "share").id("guiShare").name('Share &nbsp;<i class="fas align-middle fa-share-alt-square"></i>').class("threeAcross actionButton"), {
            save: function() {
                $("#modal-save").modal("show")
            }
        });
    if (gui.add(applyToControllers, "save").id("guiSave").name('Save &nbsp;<i class="fas align-middle fa-save"></i>').class("threeAcross actionButton"), scene || (applyToControllers = {
            resetCameraFunction: function() {
                currentCamera !== perspectiveCamera ? (Bi(), Ro("3dView"), Bo("showWalls")) : (Bi(), Wo(!0, 1500))
            }
        }, gui.add(applyToControllers, "resetCameraFunction").id("guiResetCamera").name("Reset View").class("threeAcross actionButton"), applyToControllers = {
            camInOut: function() {
                So()
            }
        }, gui.add(applyToControllers, "camInOut").id("guiInOut").name("Look Inside").class("threeAcross actionButton"), applyToControllers = {
            hideWalls: function() {
                Bo()
            }
        }, gui.add(applyToControllers, "hideWalls").id("guiHideWalls").name("Hide Walls").class("threeAcross actionButton")), se = "Lean-tos", le = "Lean-to", jt = "Gable Extensions", zt = "Gable Extension", scene || (tempW = gui.addFolder("Building Dimensions")), applyToControllers = gui.addFolder(Ra[xa].Colors), setElementClass = gui.addFolder("Walls"), scene || (tempV2 = gui.addFolder("Roof")), scene || (r = gui.addFolder(se)), !scene && (ma.hasOwnProperty("coveredGableExtensionN") || ma.hasOwnProperty("coveredGableExtensionS") || ma.hasOwnProperty("coveredGableExtensionE") || ma.hasOwnProperty("coveredGableExtensionW")) && (setElementId = gui.addFolder(jt)), scene || (setElementHidden = gui.addFolder("Windows & Doors")), ma.settings.offerMeasurements && (c = gui.addFolder("Measure")), y = gui.addFolder("Add for Scale"), scene || (folderEnvironment = gui.addFolder("Environment")), !scene) {
        ma.hasOwnProperty("location") && tempW.add(ma, "location", ["Manitoba", "Saskatchewan"]).name("Building Location").onChange(function() {
            S()
        }), (ma.hasOwnProperty("size") ? tempW.add(ma, "size", ["30'x40'", "30'x60'", "40'x40'", "40'x60'", "40'x80'"]).name("Building Size").listen() : (tempW.add(ma, "width", 10, 50).step(2).name("Width (ft)").onChange(function() {
            "Gabled" == ma.roofType && (ma.width < 12 ? ma.width = 12 : 18 == ma.width ? ma.width = 20 : 22 == ma.width ? ma.width = 24 : 26 == ma.width ? ma.width = 28 : 34 == ma.width ? ma.width = 36 : 38 == ma.width ? ma.width = 40 : 40 < ma.width && (ma.width = 50)), "Single Slope" == ma.roofType && 28 < ma.width && (ma.width = 28), S()
        }), tempW.add(ma, "depth", 10, 300).step(10).name("Length (ft)"))).onChange(function() {
            S()
        }), tempW.add(ma, "height", 10, 18).step(2).name("Height (ft)").onChange(function() {
            S()
        }), tempW.add(ma, "roofType", ["Gabled", "Single Slope"]).name("Roof Type").listen().onChange(function() {
            "Single Slope" === ma.roofType ? ma.roofPitch = 1 : ma.width <= 30 ? ma.roofPitch = 4 : ma.roofPitch = 3, oo()
        }), tempW.add(ma, "asymmetrical", -20, 20).step(1).name("Asymmetrical").onChange(function() {
            S()
        }), tempW.add(ma, "roofPitch", ma.settings.roofPitchMin, ma.settings.roofPitchMax).step(1).name('Roof Pitch / 12"').listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("trussStyle") && tempW.add(ma, "trussStyle", ["Standard", "Raised Lower Chord"]).name("Truss Type").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("lowerChordScissorPitch") && tempW.add(ma, "lowerChordScissorPitch", 1, 3).step(1).name('Lower Chord Pitch / 12"').onChange(function() {
            S()
        }), ma.hasOwnProperty("frameConstruction") && tempW.add(ma, "frameConstruction", ["Open Web Tapered", "Residential Flush"]).name("Column Type").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("splashBoard") && tempW.add(ma, "splashBoard", ["Standard", "Morton DuraPlank"]).name("Splash Board").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("postType") && tempW.add(ma, "postType", ["6x6 Solid", "8x8 Solid", "Glue Laminated", "Steel Tube"]).name("Post Type").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("columnSize") && tempW.add(ma, "columnSize", ["6x6", "8x8", "10x10"]).name("Post Size").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("purlinType") && tempW.add(ma, "purlinType", ["2x6 Wood", "2x6 Metal perspectiveCamera-channel"]).name("Purlin Type").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("snowLoad") && tempW.add(ma, "snowLoad", ["None", "20", "30", "40", "50", "60"]).name("Snow Load lbs/ft&sup2;").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("wallPanelType") && tempW.add(ma, "wallPanelType", ["Royal-Rib", "Tex-Rib", "isRendererReady-Panel"]).name("Wall Panel Type").listen().onChange(function() {
            S()
        }), ma.hasOwnProperty("roofPanelType") && tempW.add(ma, "roofPanelType", ["Screw Down", "Standing Seam"]).name("Roof Panel Type").listen().onChange(function() {
            S()
        }), tempW.add(ma, "maxTrussSpacing", 10, 12).step(2).name("Post Spacing (ft)").listen().onChange(function() {
            ma.maxPostSpacing = ma.maxTrussSpacing, ma.maxLeantoPostSpacing = ma.maxTrussSpacing, S()
        }), ma.hasOwnProperty("framing") && tempW.add(ma, "framing", ["Post Frame", "Engineered Wall/Vertical Stud"]).name("Framing").listen().onChange(function() {
            if (gui.__folders.hasOwnProperty("Building Dimensions"))
                for (i = 0; i < gui.__folders["Building Dimensions"].__controllers.length; i++) {
                    var applyToControllers = gui.__folders["Building Dimensions"].__controllers[i];
                    "version" === applyToControllers.property && ("Engineered Wall/Vertical Stud" == ma.framing ? applyToControllers.domElement.parentElement.parentElement.hidden = !1 : applyToControllers.domElement.parentElement.parentElement.hidden = !0)
                }
        });
        let applyToControllers = !0;
        "Engineered Wall/Vertical Stud" == ma.framing && (applyToControllers = !1), tempW.add(ma, "version").class("message").hidden(applyToControllers).name("Note: Studs are not rendered in 3D, but will tempBE quoted according to your selection above."), folderEnvironment.add(ma, "environment", enabledEnvironments.map(applyToControllers => applyToControllers.friendlyName)).name("Background").listen().onChange(function() {
            di()
        })
    }
    He = applyToControllers.add(ma, "roofColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("roof")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Roof Color").onChange(function() {
        O()
    }), Ce = applyToControllers.add(ma, "wallColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("wall")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Wall Color").onChange(function() {
        O(), S()
    }), ma.hasOwnProperty("trimCornerColor") || ma.hasOwnProperty("trimWallColor") || (Le = applyToControllers.add(ma, "trimColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Trim Color").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimWallColor") && (Ne = applyToControllers.add(ma, "trimWallColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Wall Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimRoofColor") && (je = applyToControllers.add(ma, "trimRoofColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Roof Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimBaseColor") && (ze = applyToControllers.add(ma, "trimBaseColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Trim Color - Base").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimGableColor") && (ke = applyToControllers.add(ma, "trimGableColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Trim Color - Gable").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimCornerColor") && (Ie = applyToControllers.add(ma, "trimCornerColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Trim Color - Corner").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimEaveColor") && (Fe = applyToControllers.add(ma, "trimEaveColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Trim Color - Eave").onChange(function() {
        O()
    })), ma.hasOwnProperty("doorWindowTrimColor") && (Ke = applyToControllers.add(ma, "doorWindowTrimColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Door & Window Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("windowTrimColor") && (Je = applyToControllers.add(ma, "windowTrimColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("windowTrim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Window Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("doorTrimColor") && (et = applyToControllers.add(ma, "doorTrimColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Door Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("garageDoorTrimColor") && (tt = applyToControllers.add(ma, "garageDoorTrimColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Large Door Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("trimEaveLightsColor") && (Ze = applyToControllers.add(ma, "trimEaveLightsColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("eaveLightTrim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Eave Lights Trim").onChange(function() {
        O()
    })), ma.hasOwnProperty("ridgeCapColor") && applyToControllers.add(ma, "ridgeCapColor", ["Match Trim", "Match Roof"]).name("Ridge Cap Color").onChange(function() {
        O()
    }), ma.hasOwnProperty("gutterColor") && (Ue = applyToControllers.add(ma, "gutterColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("gutter")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Gutter Color").onChange(function() {
        O()
    })), ma.hasOwnProperty("downspoutColor") && (Ye = applyToControllers.add(ma, "downspoutColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trim")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Downspout Color").onChange(function() {
        O()
    })), ma.hasOwnProperty("overheadDoorColor") && (ot = applyToControllers.add(ma, "overheadDoorColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("overheadDoor")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Overhead Door").onChange(function() {
        O()
    })), ma.hasOwnProperty("slidingDoorColor") && (it = applyToControllers.add(ma, "slidingDoorColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("slidingDoor")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Sliding Door").onChange(function() {
        O()
    })), ma.hasOwnProperty("trackColor") && (Xe = applyToControllers.add(ma, "trackColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("trackColor")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Door Track").onChange(function() {
        O()
    })), scene || (_e = applyToControllers.add(ma, "wainscotColor", colorOptions.filter(applyToControllers => applyToControllers.categories.includes("wainscot")).map(applyToControllers => applyToControllers.name)).class("guiColor").name("Wainscot Color").onChange(function() {
        O()
    })), scene || (setElementClass.add(ma, "enclosedN").name("Enclosed " + ce.tempN.short).listen().onChange(function() {
        S()
    }), setElementClass.add(ma, "enclosedS").name("Enclosed " + ce.S.short).listen().onChange(function() {
        S()
    }), setElementClass.add(ma, "enclosedE").name("Enclosed " + ce.orthographicCamera.short).listen().onChange(function() {
        S()
    }), setElementClass.add(ma, "enclosedW").name("Enclosed " + ce.W.short).listen().onChange(function() {
        S()
    }), setElementClass.add(ma, "showGableDressWithOpenGableWalls").name("Gable Dress").onChange(function() {
        S()
    })), ma.hasOwnProperty("wainscotAll") ? setElementClass.add(ma, "wainscotAll").name("Wainscot").onChange(function() {
        ma.wainscot1 = ma.wainscotAll, ma.wainscot2 = ma.wainscotAll, ma.wainscot3 = ma.wainscotAll, ma.wainscot4 = ma.wainscotAll, S(), O()
    }) : (setElementClass.add(ma, "wainscot1").name("Wainscot " + ce.tempN.short).onChange(function() {
        S(), O()
    }), setElementClass.add(ma, "wainscot3").name("Wainscot " + ce.S.short).onChange(function() {
        S(), O()
    }), setElementClass.add(ma, "wainscot2").name("Wainscot " + ce.orthographicCamera.short).onChange(function() {
        S(), O()
    }), setElementClass.add(ma, "wainscot4").name("Wainscot " + ce.W.short).onChange(function() {
        S(), O()
    })), ma.hasOwnProperty("eaveLightPanelTint") && setElementClass.add(ma, "eaveLightPanelTint", ["Clear", "White", "Tint", "Gray Tint"]).name("Eave Light Tint").listen().onChange(function() {
        S()
    }), scene || (ma.hasOwnProperty("roofMaterial") && tempV2.add(ma, "roofMaterial", ["Screw Down Roof (SDR)", "Standing Seam Roof (SSR)"]).name("Roof Material").listen().onChange(function() {
        S()
    }), ma.hasOwnProperty("allRoofOverhangs") ? tempV2.add(ma, "allRoofOverhangs", 0, 2).step(1).name("Roof Overhangs").listen().onChange(function() {
        ma.gableFront = ma.allRoofOverhangs, ma.hasOwnProperty("additionalFrontBays") && (ma.gableFront += ma.additionalFrontBays * ma.maxPostSpacing), ma.gableBack = ma.allRoofOverhangs, ma.hasOwnProperty("additionalBackBays") && (ma.gableBack += ma.additionalBackBays * ma.maxPostSpacing), ma.eaveL = ma.allRoofOverhangs, ma.eaveR = ma.allRoofOverhangs, S()
    }) : (ma.hasOwnProperty("gableRoofOverhangs") ? tempV2.add(ma, "gableRoofOverhangs", 0, 24).step(6).name("Front & Back Overhangs (in.)").listen().onChange(function() {
        ma.gableRoofOverhangs < 12 ? ma.gableRoofOverhangs = 0 : ma.gableRoofOverhangs < 18 && (ma.gableRoofOverhangs = 18), ma.gableFront = ma.gableRoofOverhangs / 12, ma.hasOwnProperty("additionalFrontBays") && (ma.gableFront += ma.additionalFrontBays * ma.maxPostSpacing), ma.gableBack = ma.gableRoofOverhangs / 12, ma.hasOwnProperty("additionalBackBays") && (ma.gableBack += ma.additionalBackBays * ma.maxPostSpacing), S()
    }) : (tempV2.add(ma, "gableFront", 0, 60).step(.5).name(ce.tempN.name + " Roof Overhang").listen().onChange(function() {
        ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver && (ma.gableFront = Math.round(ma.gableFront / ma.maxTrussSpacing) * ma.maxTrussSpacing), S()
    }), tempV2.add(ma, "gableBack", 0, 60).step(.5).name(ce.S.name + " Roof Overhang").listen().onChange(function() {
        ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver && (ma.gableBack = Math.round(ma.gableBack / ma.maxTrussSpacing) * ma.maxTrussSpacing), S()
    })), ma.hasOwnProperty("eaveRoofOverhangs") ? tempV2.add(ma, "eaveRoofOverhangs", 0, 24).step(6).name("Left & Right Overhangs (in.)").listen().onChange(function() {
        ma.eaveRoofOverhangs < 12 ? ma.eaveRoofOverhangs = 0 : ma.eaveRoofOverhangs < 18 && (ma.eaveRoofOverhangs = 18), ma.eaveL = ma.eaveRoofOverhangs / 12, ma.eaveR = ma.eaveRoofOverhangs / 12, S()
    }) : (tempV2.add(ma, "eaveL", 0, 2).step(1).name(ce.orthographicCamera.name + " Roof Overhang").onChange(function() {
        S()
    }), tempV2.add(ma, "eaveR", 0, 2).step(1).name(ce.W.name + " Roof Overhang").onChange(function() {
        S()
    }))), ma.hasOwnProperty("additionalFrontBays") && tempV2.add(ma, "additionalFrontBays", 0, 5).name(ce.tempN.abbr + " Bay Add-On").step(1).listen().onChange(function() {
        ma.gableFront = ma.gableRoofOverhangs / 12 + ma.additionalFrontBays * ma.maxPostSpacing, S()
    }), ma.hasOwnProperty("additionalBackBays") && tempV2.add(ma, "additionalBackBays", 0, 5).name(ce.S.abbr + " Bay Add-On").step(1).listen().onChange(function() {
        ma.gableBack = ma.gableRoofOverhangs / 12 + ma.additionalBackBays * ma.maxPostSpacing, S()
    }), ma.hasOwnProperty("ridgeVents") && tempV2.add(ma, "ridgeVents", 0, 6).name("Ridge Vents").step(1).onChange(function() {
        S()
    }), ma.hasOwnProperty("skylights") && tempV2.add(ma, "skylights", 0, 24).name("Skylights").step(2).onChange(function() {
        S()
    }), ma.hasOwnProperty("skylightLength") && tempV2.add(ma, "skylightLength", 4, 8).name("Skylight Length").step(2).onChange(function() {
        S()
    }), tempV2.add(ma, "cupola2", 0, xt).step(1).name("2' Cupola").onChange(function() {
        to()
    }), tempV2.add(ma, "cupola3", 0, xt).step(1).name("3' Cupola").onChange(function() {
        to()
    }), gui.__folders.hasOwnProperty(se) && ((setElementClass = r.addFolder(ce.tempN.name + " " + le)).add(ma, "leanTo1").name("Enabled").onChange(function() {
        S(), ao()
    }), setElementClass.add(ma, "leanTo1Drop", 0, 4).step(1).name("Drop").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo1CutL", 0, 20).step(8).name("Cut topControls").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo1CutR", 0, 20).step(8).name("Cut isRendererReady").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo1Depth", 8, 28).step(1).name("Depth").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo1Pitch", 1, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo1Walls", ["Fully Enclosed", "Open", "Gable Dress", "Gable Walls Only", "2ft Apron Wall", "4ft Apron Wall", "6ft Apron Wall"]).name("Walls").listen().onChange(function() {
        S(), ao()
    }), (tempV2 = r.addFolder(ce.orthographicCamera.name + " " + le)).add(ma, "leanTo2").name("Enabled").onChange(function() {
        S(), ao()
    }), tempV2.add(ma, "leanTo2Drop", 0, 4).step(1).name("Drop").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo2CutL", 0, 20).step(8).name("Cut topControls").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo2CutR", 0, 20).step(8).name("Cut isRendererReady").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo2Depth", 8, 28).step(1).name("Width").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo2Pitch", 1, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo2Walls", ["Fully Enclosed", "Open", "Gable Dress", "Gable Walls Only", "2ft Apron Wall", "4ft Apron Wall", "6ft Apron Wall"]).name("Walls").listen().onChange(function() {
        S(), ao()
    }), (setElementClass = r.addFolder(ce.S.name + " " + le)).add(ma, "leanTo3").name("Enabled").onChange(function() {
        S(), ao()
    }), setElementClass.add(ma, "leanTo3Drop", 0, 4).step(1).name("Drop").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo3CutL", 0, 20).step(8).name("Cut topControls").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo3CutR", 0, 20).step(8).name("Cut isRendererReady").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo3Depth", 8, 28).step(1).name("Depth").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo3Pitch", 1, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), setElementClass.add(ma, "leanTo3Walls", ["Fully Enclosed", "Open", "Gable Dress", "Gable Walls Only", "2ft Apron Wall", "4ft Apron Wall", "6ft Apron Wall"]).name("Walls").listen().onChange(function() {
        S(), ao()
    }), (tempV2 = r.addFolder(ce.W.name + " " + le)).add(ma, "leanTo4").name("Enabled").onChange(function() {
        S(), ao()
    }), tempV2.add(ma, "leanTo4Drop", 0, 4).step(1).name("Drop").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo4CutL", 0, 20).step(8).name("Cut topControls").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo4CutR", 0, 20).step(8).name("Cut isRendererReady").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo4Depth", 8, 28).step(1).name("Width").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo4Pitch", 1, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), tempV2.add(ma, "leanTo4Walls", ["Fully Enclosed", "Open", "Gable Dress", "Gable Walls Only", "2ft Apron Wall", "4ft Apron Wall", "6ft Apron Wall"]).name("Walls").listen().onChange(function() {
        S(), ao()
    })), ma.hasOwnProperty("coveredGableExtensionN") && gui.__folders.hasOwnProperty(jt) && ((setElementClass = setElementId.addFolder(ce.tempN.name + " " + zt)).add(ma, "coveredGableExtensionN").name("Enabled").onChange(function() {
        S(), ao()
    }), setElementClass.add(ma, "coveredGableExtensionNHeight", 8, 20).step(1).name("Height").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionNCutL", 0, 20).step(1).name("Cut topControls").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionNCutR", 0, 20).step(1).name("Cut isRendererReady").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionNDepth", 6, 24).step(1).name("Depth").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionNPitch", ma.settings.roofPitchMin, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionNEnclosed").name("Enclosed").onChange(function() {
        S(), ao()
    })), ma.hasOwnProperty("coveredGableExtensionS") && gui.__folders.hasOwnProperty(jt) && ((r = setElementId.addFolder(ce.S.name + " " + zt)).add(ma, "coveredGableExtensionS").name("Enabled").onChange(function() {
        S(), ao()
    }), r.add(ma, "coveredGableExtensionSHeight", 8, 20).step(1).name("Height").onChange(function() {
        S()
    }), r.add(ma, "coveredGableExtensionSCutL", 0, 20).step(1).name("Cut topControls").onChange(function() {
        S()
    }), r.add(ma, "coveredGableExtensionSCutR", 0, 20).step(1).name("Cut isRendererReady").onChange(function() {
        S()
    }), r.add(ma, "coveredGableExtensionSDepth", 6, 24).step(1).name("Depth").onChange(function() {
        S()
    }), r.add(ma, "coveredGableExtensionSPitch", ma.settings.roofPitchMin, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), r.add(ma, "coveredGableExtensionSEnclosed").name("Enclosed").onChange(function() {
        S(), ao()
    })), ma.hasOwnProperty("coveredGableExtensionE") && gui.__folders.hasOwnProperty(jt) && ((tempV2 = setElementId.addFolder(ce.orthographicCamera.name + " " + zt)).add(ma, "coveredGableExtensionE").name("Enabled").onChange(function() {
        S(), ao()
    }), tempV2.add(ma, "coveredGableExtensionEHeight", 8, 20).step(1).name("Height").onChange(function() {
        S()
    }), tempV2.add(ma, "coveredGableExtensionECutL", 0, 20).step(1).name("Cut topControls").onChange(function() {
        S()
    }), tempV2.add(ma, "coveredGableExtensionECutR", 0, 20).step(1).name("Cut isRendererReady").onChange(function() {
        S()
    }), tempV2.add(ma, "coveredGableExtensionEDepth", 6, 24).step(1).name("Depth").onChange(function() {
        S()
    }), tempV2.add(ma, "coveredGableExtensionEPitch", ma.settings.roofPitchMin, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), tempV2.add(ma, "coveredGableExtensionEEnclosed").name("Enclosed").onChange(function() {
        S(), ao()
    })), ma.hasOwnProperty("coveredGableExtensionW") && gui.__folders.hasOwnProperty(jt) && ((setElementClass = setElementId.addFolder(ce.W.name + " " + zt)).add(ma, "coveredGableExtensionW").name("Enabled").onChange(function() {
        S(), ao()
    }), setElementClass.add(ma, "coveredGableExtensionWHeight", 8, 20).step(1).name("Height").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionWCutL", 0, 20).step(1).name("Cut topControls").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionWCutR", 0, 20).step(1).name("Cut isRendererReady").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionWDepth", 6, 24).step(1).name("Depth").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionWPitch", ma.settings.roofPitchMin, ma.settings.roofPitchMax).step(1).name("Roof Pitch").onChange(function() {
        S()
    }), setElementClass.add(ma, "coveredGableExtensionWEnclosed").name("Enclosed").onChange(function() {
        S(), ao()
    })), setElementHidden.add(Ca, "addWindowSingleHung").name("Add Single Hung Window"), setElementHidden.add(Ca, "addWalkDoor6Panel").name("Add Walk Door 6-Panel"), setElementHidden.add(Ca, "addWalkDoor9Lite").name("Add Walk Door 9-Lite"), isGeometryActive && (setElementHidden.add(Ca, "addGarageSlideMortonStandardCrossbuck").name("Add Diamond orbitControls Sliding Door w/ Crossbucks"), setElementHidden.add(Ca, "addGarageSlideMortonStandardCrossbuckLeft").name("Add Diamond M Sliding Door w/ Crossbucks (Left)"), setElementHidden.add(Ca, "addGarageSlideMortonStandardCrossbuckRight").name("Add Diamond orbitControls Sliding Door w/ Crossbucks (Right)"), setElementHidden.add(Ca, "addGarageSlideMortonStandardMullionWindow").name("Add Diamond M Sliding Door w/ Window"), setElementHidden.add(Ca, "addGarageSlideMortonStandardMullionWindowLeft").name("Add Diamond orbitControls Sliding Door w/ Window (Left)"), setElementHidden.add(Ca, "addGarageSlideMortonStandardMullionWindowRight").name("Add Diamond M Sliding Door w/ Window (Right)"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackMullionWindow").name("Add Diamond orbitControls Sliding Door w/ Window & top"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackMullionWindowLeft").name("Add Diamond M Sliding Door w/ Window & top (Left)"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackMullionWindowRight").name("Add Diamond orbitControls Sliding Door w/ Window & top (Right)"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackCrossbuckMullionWindow").name("Add Diamond M Sliding Door w/ Window & Crossbuck top"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackCrossbuckMullionWindowLeft").name("Add Diamond orbitControls Sliding Door w/ Window & Crossbuck top (Left)"), setElementHidden.add(Ca, "addGarageSlideMortonThreeStackCrossbuckMullionWindowRight").name("Add Diamond M Sliding Door w/ Window & Crossbuck top (Right)")), setElementHidden.add(Ca, "addGarageRollUp").name("Add Roll Up Door"), ma.useMezzanineDepth, ma.hasOwnProperty("mezzanineSupport") && dimensionsArray.add(ma, "mezzanineSupport", ["Floor Support", "Roof Support"]).name("Mezzanine Support").listen().onChange(function() {
        S()
    }), ma.hasOwnProperty("mezzanineRailing") && dimensionsArray.add(ma, "mezzanineRailing", ["None", "Framed", "Steel Covered"]).name("Mezzanine Railing").listen().onChange(function() {
        S()
    }), ma.hasOwnProperty("mezzanineStairs") && dimensionsArray.add(ma, "mezzanineStairs", ["None", "Left Straight", "Right Straight", "Left Landing", "Right Landing"]).name("Mezzanine Stairs").listen().onChange(function() {
        S()
    }), ma.hasOwnProperty("permits") && folderServices.add(ma, "permits").name("Permits").listen(), ma.hasOwnProperty("engineerPlans") && folderServices.add(ma, "engineerPlans").name("Engineer Plans").listen(), ma.hasOwnProperty("clearingLand") && folderServices.add(ma, "clearingLand").name("Clearing Land").listen(), ma.hasOwnProperty("sitePrep") && folderServices.add(ma, "sitePrep").name("Site Prep").listen(), ma.hasOwnProperty("insulation") && folderServices.add(ma, "insulation").name("Insulation").listen(), ma.hasOwnProperty("concreteWork") && folderServices.add(ma, "concreteWork").name("Concrete Work").listen(), ma.hasOwnProperty("concreteFoundation") && folderServices.add(ma, "concreteFoundation").name("Concrete Foundation").listen(), ma.hasOwnProperty("concreteApproach") && folderServices.add(ma, "concreteApproach").name("Concrete Approach").listen(), ma.hasOwnProperty("gravel") && folderServices.add(ma, "gravel").name("Gravel").listen(), ma.hasOwnProperty("asphalt") && folderServices.add(ma, "asphalt").name("Asphalt").listen(), ma.hasOwnProperty("masonry") && folderServices.add(ma, "masonry").name("Masonry").listen(), ma.settings.offerMeasurements && (r = {
        measure: function() {
            $setElementHidden()
        }
    }, tempV2 = {
        measureClear: function() {
            _o()
        }
    }, c.add({
        toggleDimensions: function() {
            wi(We = !We), We && (ma.environment = "None", di())
        }
    }, "toggleDimensions").name('Toggle Dimensions &nbsp;<i class="fas align-middle fa-ruler-combined"></i>'), c.add(r, "measure").name('Make Measurements &nbsp;<i class="fas align-middle fa-tape"></i>'), c.add(tempV2, "measureClear").name('Clear Measurements &nbsp;<i class="fas align-middle fa-trash-alt"></i>')));
    var setElementId = y.addFolder("Vehicles"),
        setElementClass = (setElementId.add(W, "addTruck").name("Add Truck"), setElementId.add(W, "addCar").name("Add Car"), setElementId.add(W, "addAirplane").name("Add Airplane"), setElementId.add(W, "addRV").name("Add RV"), setElementId.add(W, "addATV").name("Add ATV"), setElementId.add(W, "addUTV").name("Add UTV"), setElementId.add(W, "addJetski").name("Add Jet Ski"), setElementId.add(W, "addBoat").name("Add Fishing Boat"), setElementId.add(W, "addSkiBoat").name("Add Ski Boat"), setElementId.add(W, "addCamper").name("Add Camper"), setElementId.add(W, "addSemiTruck").name("Add Semi Truck"), setElementId.add(W, "addSemiTrailer").name("Add Semi Trailer"), setElementId.add(W, "addSemiTrailer53").name("Add Semi Trailer 53'"), y.addFolder("Residential")),
        setElementHidden = (setElementClass.add(W, "addDesk").name("Add Desk"), setElementClass.add(W, "addChair").name("Add Chair"), setElementClass.add(W, "addKitchenTable").name("Add Kitchen Table"), setElementClass.add(W, "addKitchenChair").name("Add Kitchen Chair"), setElementClass.add(W, "addBed").name("Add Bed"), setElementClass.add(W, "addCouch").name("Add Couch"), setElementClass.add(W, "addNightStand").name("Add Night Stand"), setElementClass.add(W, "addCoffeeTable").name("Add Coffee Table"), setElementClass.add(W, "addEndTable").name("Add End Table"), setElementClass.add(W, "addRecliner").name("Add Recliner"), setElementClass.add(W, "addConferenceTable").name("Add Conference Table"), setElementClass.add(W, "addToilet").name("Add Toilet"), setElementClass.add(W, "addUtilitySink").name("Add Utility Sink"), setElementClass.add(W, "addPedestalSink").name("Add Pedestal Sink"), setElementClass.add(W, "addLawnMower").name("Add Lawn Mower"), setElementClass.add(W, "addRidingMower").name("Add Riding Mower"), setElementClass.add(W, "addWorkbench").name("Add Workbench"), setElementClass.add(W, "addAirCompressor").name("Add Air Compressor"), y.addFolder("Farm & Equestrian")),
        dimensionsArray = (setElementHidden.add(W, "addTractor").name("Add Tractor"), setElementHidden.add(W, "addCombine").name("Add Combine"), setElementHidden.add(W, "addGrainCart").name("Add Grain Cart"), setElementHidden.add(W, "addBackhoe").name("Add Backhoe"), setElementHidden.add(W, "addCornHead6").name("Add Corn Head 6 Row"), setElementHidden.add(W, "addCornHead").name("Add Corn Head 8 Row"), setElementHidden.add(W, "addCornHead12").name("Add Corn Head 12 Row"), setElementHidden.add(W, "addBeanHead").name("Add Bean Head 30'"), setElementHidden.add(W, "addBeanHead35").name("Add Bean Head 35'"), setElementHidden.add(W, "addBeanHead40").name("Add Bean Head 40'"), setElementHidden.add(W, "addCultivator").name("Add Cultivator"), setElementHidden.add(W, "addHayBales").name("Add Hay Bales"), setElementHidden.add(W, "addHorseStall").name("Add Horse Stall"), setElementHidden.add(W, "addHorse").name("Add Horse"), y.addFolder("General")),
        r = (dimensionsArray.add(W, "addMan").name("Add Man"), dimensionsArray.add(W, "addWoman").name("Add Woman"), dimensionsArray.add(W, "addDriveway").name("Add Driveway"), (scene ? applyToControllers : tempW).open(), gui.open(), (tempLA = new THREE.Group).name = "buildingNull", mainScene.add(tempLA), (tempHA = new THREE.Group).name = "hiddenItemsNull", mainScene.add(tempHA), (tempI = new THREE.Group).name = "dimensionsNull", tempLA.add(tempI), new THREE.Group),
        ColorOption = (r.name = "lightsNull", mainScene.add(r), new THREE.HemisphereLight(16770491, 16760576, 1)),
        renderer = (ColorOption.color.setHex(16777215), ColorOption.groundColor.setHex(16777215), ColorOption.name = "HemisphereLight", r.add(ColorOption), new THREE.AmbientLight(4210752, 1)),
        controls = (renderer.name = "AmbientLight", r.add(renderer), new THREE.DirectionalLight("white", 1));
    switch (controls.name = "FrontDirectionalLight", controls.position.set(60, 75, 120), controls.target.position.set(0, 0, 0), controls.castShadow = !0, controls.shadow.mapSize.width = 4096, controls.shadow.mapSize.height = 4096, controls.shadow.camera.right = 110, controls.shadow.camera.left = -110, controls.shadow.camera.top = 110, controls.shadow.camera.bottom = -110, controls.shadow.camera.near = 25, controls.shadow.camera.far = 300, controls.shadow.camera.visible = !0, controls.shadow.bias = -5e-4, r.add(controls), ma.settings.shadows) {
        case "none":
            ColorOption.intensity = .5, renderer.intensity = .5, controls.intensity = .5, controls.castShadow = !1;
            break;
        case "dark":
            ColorOption.intensity = .25, renderer.intensity = .25, controls.intensity = .75;
            break;
        case "medium":
            ColorOption.intensity = .3, renderer.intensity = .8, controls.intensity = .5;
            break;
        default:
            ColorOption.intensity = .5, renderer.intensity = 1, controls.intensity = .1
    }
    var c = new THREE.DirectionalLight("white", .2);
    c.name = "BackDirectionalLight", c.position.set(-30, 75, -150), c.target.position.set(0, 0, 0), r.add(c), (c = new THREE.DirectionalLight("white", .2)).name = "BackLeftDirectionalLight", c.position.set(-100, -75, 50), c.target.position.set(0, 0, 0), r.add(c), (c = new THREE.DirectionalLight("white", .2)).name = "BackRightDirectionalLight", c.position.set(75, 25, -100), c.target.position.set(0, 0, 0), r.add(c), mainScene.fog = new THREE.Fog(12637405, 250, 1e3);
    let d, tempP, camera, tempG2, tempU2, tempT;
    d = new THREE.SphereGeometry(750, 25, 25), camera = A + "images/sky/sky-sq.jpg", tempU2 = new THREE.TextureLoader, tempG2 = tempU2.load(camera), tempP = new THREE.MeshBasicMaterial({
        name: "skySphere-Material",
        map: tempG2,
        fog: !1
    }), (tempj = new THREE.Mesh(d, tempP)).material.side = THREE.BackSide, tempj.name = "skySphere-Mesh", mainScene.add(tempj), ma.settings.showWatermark && (camera = "images/logo-watermark.png", tempU2 = new THREE.TextureLoader(tempF2), tempG2 = tempU2.load(camera), d = new THREE.PlaneGeometry(1, 1), (tempP = new THREE.MeshBasicMaterial({
        name: "watermark",
        map: tempG2,
        opacity: ma.settings.watermarkOpacity,
        transparent: !0
    })).depthTest = !1, tempP.polygonOffset = !0, tempP.polygonOffsetFactor = -1, (tempDE = new THREE.Mesh(d, tempP)).name = "watermark", tempDE.castShadow = !1, tempDE.receiveShadow = !1, tempDE.position.set(0, 0, -1.25), currentCamera.add(tempDE)), ma.settings.showLogoOnTruss && (camera = "images/logo-watermark.png", tempU2 = new THREE.TextureLoader, (tempG2 = tempU2.load(camera)).anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), d = new THREE.PlaneGeometry(1, 1), (tempP = new THREE.MeshBasicMaterial({
        name: "logo",
        map: tempG2,
        transparent: !0
    })).polygonOffset = !0, tempP.polygonOffsetFactor = -1, (tempV2 = new THREE.Mesh(d, tempP)).name = "postLogo", tempV2.castShadow = !1, tempV2.receiveShadow = !1, tempV2.position.y = -1, tempV2.visible = !1, tempV2.frustumCulled = !1, tempHA.add(tempV2)), tempk = new THREE.GridHelper(1e3, 100, 13421772, 13421772), tempz = new THREE.GridHelper(1e3, 1200, 13421772, 13421772), tempk.material.transparent = !0, tempz.material.transparent = !0, tempk.material.opacity = .5, tempz.material.opacity = .35, tempk.visible = !1, tempz.visible = !1, mainScene.add(tempk), mainScene.add(tempz), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/ground.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            setElementId.visible = !0, setElementId.castShadow = !1, setElementId.receiveShadow = !0, setElementId.frustumCulled = !1, setElementId.name = "ground", 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
            }) : (setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1)), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/ground.lwo", function(applyToControllers) {
                applyToControllers.meshes.forEach(function(setElementId) {
                    setElementId.visible = !0, setElementId.castShadow = !1, setElementId.receiveShadow = !0, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                        setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
                    }) : (setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1)), tempD = setElementId, mainScene.add(setElementId), di()
                })
            })
        })
    }), camera = A + "images/ground/map/mapBlend.jpg", tempU2 = new THREE.TextureLoader, (tempG2 = tempU2.load(camera)).anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), tempG2.anisotropy = 5, ma.hasOwnProperty("mapEnabled") && ((tempF = new THREE.Group).name = "mapRotationNull", tempF.visible = ma.mapEnabled, tempF.userData.previouslyShown = !1, mainScene.add(tempF), d = new THREE.PlaneGeometry(1, 1), tempP = new THREE.MeshPhongMaterial({
        name: "map1",
        alphaMap: tempG2,
        transparent: !0,
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        fog: !1
    }), (object3d = new THREE.Mesh(d, tempP)).rotateX(-Math.PI / 2), object3d.name = "map1", object3d.renderOrder = -1, object3d.castShadow = !1, object3d.receiveShadow = !0, tempG = object3d, tempF.add(object3d), (d = new THREE.PlaneGeometry(4, 4)).applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, -.01)), tempP = new THREE.MeshPhongMaterial({
        name: "map2",
        alphaMap: tempG2,
        transparent: !0,
        polygonOffset: !0,
        polygonOffsetFactor: 2,
        fog: !1
    }), (object3d = new THREE.Mesh(d, tempP)).name = "map2", object3d.receiveShadow = !(object3d.castShadow = !(object3d.renderOrder = -2)), tempV = object3d, tempG.add(object3d), (d = new THREE.PlaneGeometry(8, 8)).applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, -.02)), tempP = new THREE.MeshPhongMaterial({
        name: "map3",
        polygonOffset: !0,
        polygonOffsetFactor: 3,
        fog: !1
    }), (object3d = new THREE.Mesh(d, tempP)).name = "map3", object3d.receiveShadow = !(object3d.castShadow = !(object3d.renderOrder = -3)), tempQ2 = object3d, tempG.add(object3d), (setElementId = gui.addFolder("Place Building On Map")).add({
        clicked: function() {
            ci()
        }
    }, "clicked").id("mapNavButton").name("Open Map Details Menu"), setElementId.add(ma, "mapRotation", -180, 180).step(1).name("Rotate Building").onChange(function() {
        mainScene.rotation.y = THREE.Math.degToRad(ma.mapRotation), tempLA.rotation.y = -THREE.Math.degToRad(ma.mapRotation), tempYE.rotation.y = -THREE.Math.degToRad(ma.mapRotation)
    }), setElementId.add(ma.mapPosition, "isSceneLoaded", -400, 400).step(.1).name("Move East/West").onChange(function() {
        tempG.position.isSceneLoaded = ma.mapPosition.isSceneLoaded
    }), setElementId.add(ma.mapPosition, "tempz", -400, 400).step(.1).name("Move North/South").onChange(function() {
        tempG.position.tempz = ma.mapPosition.tempz
    })), d = new THREE.BoxGeometry(1, .05, 1), camera = A + "images/building/concrete.jpg", tempU2 = new THREE.TextureLoader, (tempG2 = tempU2.load(camera)).anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, tempP = new THREE.MeshPhongMaterial({
        color: "white",
        name: "foundation-Material",
        map: tempG2,
        bumpMap: tempG2,
        bumpScale: .04,
        specularMap: tempG2
    }), (tempX = new THREE.Mesh(d, tempP)).name = "foundation", tempX.castShadow = !0, tempX.receiveShadow = !0, tempLA.add(tempX), Ya(), ma.settings.watermarkOnConcrete && (mainScene.add(tempDE), tempDE.position.y = 1.1, tempDE.rotation.isSceneLoaded = THREE.Math.degToRad(-90), tempDE.scale.set(10, 10, 10), tempDE.frustumCulled = !1, tempDE.material.opacity = 1, tempDE.material.depthTest = !0, tempDE.material.polygonOffset = !1), tempQ = A + "images/building/building-normal.jpg", tempJ = 12 / 9, ga && (q = "images/morton-building-normal.jpg", tempJ = 1, tempN = !0), (tempPE = (new THREE.TextureLoader).load(tempQ)).anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), tempPE.wrapS = THREE.RepeatWrapping, tempPE.wrapT = THREE.RepeatWrapping, (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, 0)), tempP = new THREE.MeshPhongMaterial({
        color: 16770491,
        wireframe: !0,
        side: THREE.DoubleSide,
        visible: !1
    }), (tempME = new THREE.Mesh(d, tempP)).name = "boundingBoxes", tempLA.add(tempME), (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, 0)), tempP = new THREE.MeshPhongMaterial({
        color: 16770491,
        wireframe: !0,
        side: THREE.DoubleSide,
        visible: !1
    }), isRendererReady && (tempP = new THREE.MeshPhongMaterial({
        color: 11199999,
        wireframe: !0,
        wireframeLinewidth: 3,
        side: THREE.DoubleSide
    })), (tempGE = new THREE.Mesh(d, tempP)).name = "buildingBoundingBox", $setElementClass.push(tempGE), tempME.add(tempGE), (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, .5)), tempP = new THREE.MeshPhongMaterial({
        color: 16770491,
        wireframe: !0,
        side: THREE.DoubleSide,
        visible: !1
    }), isRendererReady && (tempP = new THREE.MeshPhongMaterial({
        color: 16770491,
        wireframe: !0,
        side: THREE.DoubleSide
    }));
    var setElementClass = new THREE.Mesh(d, tempP),
        setElementHidden = (setElementClass.name = "leanTo1BoundingBox", setElementClass.rotation.y = 0, $setElementClass.push(setElementClass), tempME.add(setElementClass), (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, .5)), tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide,
            visible: !1
        }), isRendererReady && (tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide
        })), new THREE.Mesh(d, tempP)),
        y = (setElementHidden.name = "leanTo2BoundingBox", setElementHidden.rotation.y = Math.PI / -2, $setElementClass.push(setElementHidden), tempME.add(setElementHidden), (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, .5)), tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide,
            visible: !1
        }), isRendererReady && (tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide
        })), new THREE.Mesh(d, tempP)),
        dimensionsArray = (y.name = "leanTo3BoundingBox", y.rotation.y = Math.PI, $setElementClass.push(y), tempME.add(y), (d = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, .5)), tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide,
            visible: !1
        }), isRendererReady && (tempP = new THREE.MeshPhongMaterial({
            color: 16770491,
            wireframe: !0,
            side: THREE.DoubleSide
        })), new THREE.Mesh(d, tempP));
    switch (dimensionsArray.name = "leanTo4BoundingBox", dimensionsArray.rotation.y = Math.PI / 2, $setElementClass.push(dimensionsArray), tempME.add(dimensionsArray), ma.secondaryMembers) {
        case "Insulated Panels":
            Wa = Kt;
            break;
        case "Red Iron":
            Wa = ta;
            break;
        case "Metal":
        case "Steel":
            Wa = ea;
            break;
        default:
            Wa = Kt
    }(d = new THREE.PlaneBufferGeometry).translate(0, -.5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempTE2 = new THREE.Mesh(d, tempP)).name = "floor", tempTE2.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempTE2.position.y = .03, tempTE2.visible = !1, tempLA.add(tempTE2), (d = new THREE.PlaneBufferGeometry).translate(0, .5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempPE2 = new THREE.Mesh(d, tempP)).name = "floor2", tempPE2.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempPE2.position.y = .03, tempPE2.visible = !1, tempLA.add(tempPE2), d = new THREE.PlaneBufferGeometry, ma.settings.orientCeilingPanelsToWidth && d.rotateZ(THREE.Math.degToRad(90)), d.translate(.5, -.5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempAE = new THREE.Mesh(d, tempP)).name = "ceilingL", tempAE.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempAE.visible = !1, tempLA.add(tempAE), d = new THREE.PlaneBufferGeometry, ma.settings.orientCeilingPanelsToWidth && d.rotateZ(THREE.Math.degToRad(90)), d.translate(-.5, -.5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempOE = new THREE.Mesh(d, tempP)).name = "ceilingR", tempOE.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempOE.visible = !1, tempLA.add(tempOE), d = new THREE.PlaneBufferGeometry, ma.settings.orientCeilingPanelsToWidth && d.rotateZ(THREE.Math.degToRad(90)), d.translate(.5, .5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempIE = new THREE.Mesh(d, tempP)).name = "ceiling2L", tempIE.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempIE.visible = !1, tempLA.add(tempIE), d = new THREE.PlaneBufferGeometry, ma.settings.orientCeilingPanelsToWidth && d.rotateZ(THREE.Math.degToRad(90)), d.translate(-.5, .5, 0), tempP = new THREE.MeshStandardMaterial({
        color: 13369395,
        side: THREE.DoubleSide
    }), (tempNE = new THREE.Mesh(d, tempP)).name = "ceiling2R", tempNE.rotation.isSceneLoaded = THREE.Math.degToRad(90), tempNE.visible = !1, tempLA.add(tempNE), tempU2 = new THREE.TextureLoader, camera = A + "images/building/floor-carpet.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping;
    let tempB = tempU2.load(camera);
    tempB.anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, vt = new THREE.MeshPhongMaterial({
        map: tempG2,
        color: 16777215,
        specular: 3947580,
        shininess: 5,
        side: THREE.DoubleSide
    }), Ot = new THREE.MeshPhongMaterial({
        map: tempB,
        color: 16777215,
        specular: 3947580,
        shininess: 5,
        side: THREE.DoubleSide
    }), camera = A + "images/building/floor-tile.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, ft = new THREE.MeshPhongMaterial({
        map: tempG2,
        color: 16777215,
        specular: 3947580,
        shininess: 30,
        side: THREE.DoubleSide
    }), Wt = new THREE.MeshPhongMaterial({
        map: tempB,
        color: 16777215,
        specular: 3947580,
        shininess: 30,
        side: THREE.DoubleSide
    }), camera = A + "images/building/floor-wood.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, wt = new THREE.MeshPhongMaterial({
        map: tempG2,
        color: 16777215,
        specular: 3947580,
        shininess: 20,
        side: THREE.DoubleSide
    }), St = new THREE.MeshPhongMaterial({
        map: tempB,
        color: 16777215,
        specular: 3947580,
        shininess: 20,
        side: THREE.DoubleSide
    }), camera = A + "images/building/gravel-color.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, Et = new THREE.MeshPhongMaterial({
        map: tempG2,
        color: 16777215,
        shininess: 30,
        side: THREE.DoubleSide
    }), Bt = new THREE.MeshPhongMaterial({
        map: tempB,
        color: 16777215,
        shininess: 30,
        side: THREE.DoubleSide
    }), camera = A + "images/building/gravel-normal.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, Et.normalMap = tempG2, Bt.normalMap = tempB, camera = A + "images/building/gravel-rough.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, Et.specularMap = tempG2, Bt.specularMap = tempB, camera = A + "images/building/ceiling-tile2x2.jpg", (tempG2 = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(camera)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, Tt = new THREE.MeshPhongMaterial({
        map: tempG2,
        color: 16777215,
        specular: 3947580,
        shininess: 10,
        side: THREE.DoubleSide
    }), Mt = new THREE.MeshPhongMaterial({
        map: tempB,
        color: 16777215,
        specular: 3947580,
        shininess: 10,
        side: THREE.DoubleSide
    }), (tempG2 = tempU2.load(tempQ)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempG2.wrapS = THREE.RepeatWrapping, tempG2.wrapT = THREE.RepeatWrapping, (tempB = tempU2.load(tempQ)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), tempB.wrapS = THREE.RepeatWrapping, tempB.wrapT = THREE.RepeatWrapping, yt = new THREE.MeshPhongMaterial({
        normalMap: tempG2,
        color: 16777215,
        specular: 3947580,
        shininess: 40,
        side: THREE.DoubleSide
    }), Dt = new THREE.MeshPhongMaterial({
        normalMap: tempB,
        color: 16777215,
        specular: 3947580,
        shininess: 40,
        side: THREE.DoubleSide
    }), yt.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)), Dt.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)), ma.settings.customWallLogo && (tempU2 = new THREE.LWOLoader).load("objects/Logo-Wall.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(applyToControllers) {
            applyToControllers.visible = !1, tempHA.add(applyToControllers)
        })
    }), isGeometryActive && ((tempU2 = new THREE.LWOLoader).setResourcePath("images/"), u.load("objects/Morton.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            if (setElementId.visible = !1, tempHA.add(setElementId), 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
                }) : (setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1)), setElementId.name.startsWith("weatherVane"))
                for (let applyToControllers = 1; applyToControllers <= Rt; applyToControllers++) {
                    var setElementClass = setElementId.clone();
                    setElementClass.visible = !1, setElementClass.name = setElementId.name + "-" + applyToControllers, tempLA.add(setElementClass)
                }
        })
    })), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Mansards.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            setElementId.visible = !1, setElementId.castShadow = !0, setElementId.receiveShadow = !0, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
            }) : (setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1)), tempHA.add(setElementId)
        })
    });
    var tempF2 = new THREE.LoadingManager,
        applyToControllers = ((tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Cupola.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.castShadow = !0, setElementId.receiveShadow = !0, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), tempHA.add(setElementId);
                for (let applyToControllers = 1; applyToControllers <= xt; applyToControllers++) {
                    var setElementClass = setElementId.clone();
                    setElementClass.visible = !1, setElementClass.name = setElementId.name + "-" + applyToControllers, ma[setElementId.name] >= applyToControllers && (setElementClass.visible = !0), tempLA.add(setElementClass)
                }
            })
        }), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/WeatherVane.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, tempHA.add(setElementId);
                for (let applyToControllers = 1; applyToControllers <= Rt; applyToControllers++) {
                    var setElementClass = setElementId.clone();
                    setElementClass.visible = !1, setElementClass.name = setElementId.name + "-" + applyToControllers, tempLA.add(setElementClass)
                }
            })
        }), ma.hasOwnProperty("ridgeVents") && ((tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/RidgeVents.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(applyToControllers) {
                applyToControllers.visible = !1, tempHA.add(applyToControllers)
            })
        })), d = new THREE.PlaneGeometry(350, 350, 1), tempP = new THREE.MeshBasicMaterial({
            color: 16776960
        }), isSceneLoaded ? tempP.wireframe = !0 : (tempP.transparent = !0, tempP.opacity = 0), (tempTE = new THREE.Mesh(d, tempP)).position.y = 1, tempTE.rotation.isSceneLoaded = THREE.Math.degToRad(-90), mainScene.add(tempTE), (tempYE = new THREE.Group).name = "measurementsNull", mainScene.add(tempYE), tempU2.load(A + "objects/measure.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(applyToControllers) {
                applyToControllers.visible = !1, applyToControllers.frustumCulled = !1, applyToControllers.userData.fileType = "lwo", tempHA.add(applyToControllers)
            })
        }), tempU2.load(A + "objects/WindowsDoors.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, applyToControllers.emissive.setHex(0), setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.material.emissive.setHex(0), setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), tempHA.add(setElementId)
            })
        }), (Ta = new THREE.Group).name = "RigidFramingParent", tempLA.add(Ta), (ya = new THREE.Group).name = "RigidFramingMaster", Ta.add(ya), (tempU2 = new THREE.LWOLoader).load(A + "objects/Frame-Rigid.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), ya.add(setElementId)
            }), (tempT = Ta.getObjectByName("columnSide").clone()).name = "columnSideR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, ma.settings.ridgidFrameStraightColumns && (tempT.morphTargetInfluences[tempT.morphTargetDictionary.unTaper] = 1), ya.add(tempT), (tempT = Ta.getObjectByName("columnSide").clone()).name = "columnSideL", tempT.visible = !0, tempT.position.y = .05, ma.settings.ridgidFrameStraightColumns && (tempT.morphTargetInfluences[tempT.morphTargetDictionary.unTaper] = 1), ya.add(tempT), (tempT = Ta.getObjectByName("beamRoof").clone()).name = "beamRoofR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, ya.add(tempT), (tempT = Ta.getObjectByName("beamRoof").clone()).name = "beamRoofL", tempT.visible = !0, tempT.position.y = .05, ya.add(tempT), ya.traverse(function(applyToControllers) {
                applyToControllers instanceof THREE.Mesh && "Truss" == applyToControllers.material.name && applyToControllers.material.color.copy(Wa)
            })
        }), (wa = new THREE.Group).name = "PostFrameParent", tempLA.add(wa), (va = new THREE.Group).name = "PostFrameMaster", wa.add(va), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Frame-PostFrame.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.frustumCulled = !1, setElementId.castShadow = !0, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), va.add(setElementId)
            }), (tempT = wa.getObjectByName("columnSide").clone()).name = "columnSideR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, va.add(tempT), (tempT = wa.getObjectByName("columnSide").clone()).name = "columnSideL", tempT.visible = !0, tempT.position.y = .05, va.add(tempT);
            applyToControllers = wa.getObjectByName("webbing").clone();
            if (applyToControllers.name = "webbingVertR1", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingVertR2", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingVertL1", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingVertL2", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingDiagR1", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingDiagR2", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingDiagL1", applyToControllers.visible = !0, va.add(applyToControllers), (applyToControllers = wa.getObjectByName("webbing").clone()).name = "webbingDiagL2", applyToControllers.visible = !0, va.add(applyToControllers), (tempT = wa.getObjectByName("beamRoof").clone()).name = "beamRoofR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, va.add(tempT), (tempT = wa.getObjectByName("beamRoof").clone()).name = "beamRoofL", tempT.visible = !0, tempT.position.y = .05, va.add(tempT), (tempT = wa.getObjectByName("truss")).visible = !0, ma.settings.showLogoOnTruss) {
                let applyToControllers = mainScene.getObjectByName("postLogo").clone();
                applyToControllers.visible = !0, applyToControllers.frustumCulled = !1, applyToControllers.position.tempz = .3, applyToControllers.position.y = -.35, applyToControllers.scale.set(1.1, 1.1, 1.1), tempT.add(applyToControllers), (applyToControllers = applyToControllers.clone()).visible = !0, applyToControllers.frustumCulled = !1, applyToControllers.rotation.y = THREE.Math.degToRad(180), applyToControllers.position.tempz = -.3, tempT.add(applyToControllers)
            }
        }), (Da = new THREE.Group).name = "OpenWebFrameParent", Da.visible = !1, tempLA.add(Da), (Pa = new THREE.Group).name = "OpenWebFrameMaster", Da.add(Pa), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Frame-OpenWebFrame.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.frustumCulled = !1, setElementId.castShadow = !0, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), Pa.add(setElementId)
            }), (tempT = Da.getObjectByName("columnSide").clone()).name = "columnSideR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("columnSide").clone()).name = "columnSideL", tempT.visible = !0, tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("columnTubeSide").clone()).name = "columnTubeSideR", tempT.visible = !1, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("columnTubeSide").clone()).name = "columnTubeSideL", tempT.visible = !1, tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("columnSideInner").clone()).name = "columnSideInnerR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("columnSideInner").clone()).name = "columnSideInnerL", tempT.visible = !0, tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("beamRoof").clone()).name = "beamRoofR", tempT.applyMatrix((new THREE.Matrix4).makeScale(-1, 1, 1)), tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("beamRoof").clone()).name = "beamRoofL", tempT.visible = !0, tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("beamRoofInner").clone()).name = "beamRoofInnerR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("beamRoofInner").clone()).applyMatrix((new THREE.Matrix4).makeScale(-1, 1, 1)), tempT.name = "beamRoofInnerL", tempT.visible = !0, tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("trussVert").clone()).name = "columnSideTangentR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Pa.add(tempT), (tempT = Da.getObjectByName("trussVert").clone()).name = "columnSideTangentL", tempT.visible = !0, tempT.position.y = .05, Pa.add(tempT)
        }), (Ea = new THREE.Group).name = "HybridFrameParent", Ea.visible = !1, tempLA.add(Ea), (Ma = new THREE.Group).name = "HybridFrameMaster", Ea.add(Ma), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Frame-HybridFrame.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.frustumCulled = !1, setElementId.castShadow = !0, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), Ma.add(setElementId)
            }), (tempT = Ea.getObjectByName("columnSide").clone()).name = "columnSideR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Ma.add(tempT), (tempT = Ea.getObjectByName("columnSide").clone()).name = "columnSideL", tempT.visible = !0, tempT.position.y = .05, Ma.add(tempT);
            applyToControllers = Ea.getObjectByName("trussVert").clone();
            applyToControllers.name = "trussVertR1", applyToControllers.applyMatrix((new THREE.Matrix4).makeScale(-1, 1, 1)), applyToControllers.visible = !0, Ma.add(applyToControllers), (applyToControllers = Ea.getObjectByName("trussVert").clone()).name = "trussVertR2", applyToControllers.visible = !0, Ma.add(applyToControllers), (applyToControllers = Ea.getObjectByName("trussVert").clone()).name = "trussVertL1", applyToControllers.visible = !0, Ma.add(applyToControllers), (applyToControllers = Ea.getObjectByName("trussVert").clone()).name = "trussVertL2", applyToControllers.applyMatrix((new THREE.Matrix4).makeScale(-1, 1, 1)), applyToControllers.visible = !0, Ma.add(applyToControllers), (tempT = Ea.getObjectByName("beamRoof").clone()).name = "beamRoofR", tempT.applyMatrix((new THREE.Matrix4).makeScale(-1, 1, 1)), tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, Ma.add(tempT), (tempT = Ea.getObjectByName("beamRoof").clone()).name = "beamRoofL", tempT.visible = !0, tempT.position.y = .05, Ma.add(tempT), (tempT = Ea.getObjectByName("trussVertL1").clone()).name = "crossMemberL", tempT.visible = !0, Ma.add(tempT), (tempT = Ea.getObjectByName("trussVertR1").clone()).name = "crossMemberR", tempT.visible = !0, Ma.add(tempT), Ma.traverse(function(applyToControllers) {
                applyToControllers instanceof THREE.Mesh && applyToControllers.material.name
            })
        }), (ba = new THREE.Group).name = "SteelTrussFramingParent", ba.visible = !1, tempLA.add(ba), (fa = new THREE.Group).name = "SteelTrussFramingMaster", ba.add(fa), (tempU2 = new THREE.LWOLoader).load(A + "objects/Frame-SteelTruss.lwo", function(applyToControllers) {
            applyToControllers.meshes.forEach(function(setElementId) {
                setElementId.visible = !1, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                    applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
                }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), fa.add(setElementId)
            }), (tempT = ba.getObjectByName("columnSide").clone()).name = "columnSideR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, fa.add(tempT), (tempT = ba.getObjectByName("columnSide").clone()).name = "columnSideL", tempT.visible = !0, tempT.position.y = .05, fa.add(tempT);
            applyToControllers = ba.getObjectByName("webbing").clone();
            applyToControllers.name = "webbingVertR1", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingVertR2", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingVertL1", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingVertL2", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingDiagR1", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingDiagR2", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingDiagL1", applyToControllers.visible = !0, fa.add(applyToControllers), (applyToControllers = ba.getObjectByName("webbing").clone()).name = "webbingDiagL2", applyToControllers.visible = !0, fa.add(applyToControllers), (tempT = ba.getObjectByName("beamRoof").clone()).name = "beamRoofR", tempT.visible = !0, tempT.rotation.y = THREE.Math.degToRad(180), tempT.position.y = .05, fa.add(tempT), (tempT = ba.getObjectByName("beamRoof").clone()).name = "beamRoofL", tempT.visible = !0, tempT.position.y = .05, fa.add(tempT), (tempT = ba.getObjectByName("truss")).visible = !0, fa.traverse(function(applyToControllers) {
                applyToControllers instanceof THREE.Mesh && "Truss" == applyToControllers.material.name && applyToControllers.material.color.copy(Wa)
            })
        }), d = new THREE.BoxGeometry(.125, 1, 1), tempP = new THREE.MeshPhongMaterial({
            color: Wa,
            name: "framing",
            specular: 3947580,
            shininess: 40
        }), new THREE.Mesh(d, tempP)),
        tempW = (applyToControllers.visible = !1, applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !1, applyToControllers.name = "masterSecondaryFramingPiece", tempHA.add(applyToControllers), (d = new THREE.BoxGeometry(.2, .085, 1)).translate(-.1, 0, 0), tempP = new THREE.MeshPhongMaterial({
            color: 12026452,
            name: "mezzanineWood",
            specular: 5394505,
            shininess: 15
        }), new THREE.Mesh(d, tempP)),
        tempV2 = (tempW.visible = !1, tempW.name = "MezzanineWood", tempHA.add(tempW), (d = new THREE.BoxGeometry(.2, .085, 1)).translate(-.1, 0, 0), tempP = new THREE.MeshPhongMaterial({
            color: 7895160,
            name: "mezzanineFrame",
            specular: 5394505,
            shininess: 15
        }), new THREE.Mesh(d, tempP));
    tempV2.visible = !1, tempV2.name = "Mezzanine", tempHA.add(tempV2), d = new THREE.PlaneGeometry(1, 1, 1), tempP = new THREE.MeshBasicMaterial({
        color: 65535
    }), isSceneLoaded ? tempP.wireframe = !0 : (tempP.transparent = !0, tempP.opacity = 0), (tempU = new THREE.Mesh(d, tempP)).position.y = .05, tempU.rotation.isSceneLoaded = THREE.Math.degToRad(-90), mainScene.add(tempU), (tempUE = new THREE.Group).name = "interiorNull", mainScene.add(tempUE), tempU2.load(A + "objects/interiorObjects.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(applyToControllers) {
            applyToControllers.visible = !1, applyToControllers.frustumCulled = !1, applyToControllers.userData.fileType = "lwo", tempHA.add(applyToControllers)
        }), (tempRE = mainScene.getObjectByName("interiorWall").clone()).visible = ma.divisionWall, tempRE.name = "dividingWall";
        var setElementId = (new THREE.TextureLoader).load(tempQ),
            applyToControllers = (setElementId.anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), setElementId.wrapS = THREE.RepeatWrapping, setElementId.wrapT = THREE.RepeatWrapping, A + "images/building/OSB.jpg"),
            setElementClass = (new THREE.TextureLoader).load(applyToControllers);
        setElementClass.anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), setElementClass.wrapS = THREE.RepeatWrapping, setElementClass.wrapT = THREE.RepeatWrapping;
        for (let applyToControllers = 0; applyToControllers < tempRE.material.length; applyToControllers++) "interiorWallUpper" === tempRE.material[applyToControllers].name && (tempRE.material[applyToControllers].normalMap = setElementId, tempRE.userData.metalTexture = setElementId, tempRE.userData.topMaterial = tempRE.material[applyToControllers]), "interiorWallLower" === tempRE.material[applyToControllers].name && (tempRE.material[applyToControllers].map = setElementClass, tempRE.userData.woodTexture = setElementClass, tempRE.userData.bottomMaterial = tempRE.material[applyToControllers]), tempRE.hasOwnProperty("morphTargetInfluences") && (tempRE.material[applyToControllers].morphTargets = !0);
        tempLA.add(tempRE)
    }), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/Building.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            setElementId.visible = !1, setElementId.frustumCulled = !1, setElementId.castShadow = !0, setElementId.receiveShadow = !0, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (applyToControllers.morphTargets = !0)
            }) : (setElementId.material.castShadow = !0, setElementId.material.receiveShadow = !0, setElementId.hasOwnProperty("morphTargetInfluences") && (setElementId.material.morphTargets = !0)), "roofR" == setElementId.name && ((tempCA = setElementId).visible = !0, (tempDA = setElementId.GdeepCloneMaterials()).name = "roofL", tempDA.visible = !0, tempDA.rotation.y = Math.PI, tempDA.material.side = THREE.DoubleSide, tempDA.castShadow = !0, tempDA.receiveShadow = !0, tempDA.frustumCulled = !1, tempLA.add(tempDA)), "building" == setElementId.name && ((tempEE = setElementId).castShadow = !0, tempEE.receiveShadow = !0, tempEE.visible = !0), setElementId.name.startsWith("Logo") && setElementId.material.forEach(function(setElementId) {
                if ("Logo" == setElementId.name) {
                    tempU2 = new THREE.TextureLoader;
                    let applyToControllers = "images/logo-square.jpg";
                    isGeometryActive && (applyToControllers = "images/logo-square.png");
                    var setElementClass = tempU2.load(applyToControllers);
                    setElementId.map = setElementClass, setElementId.needsUpdate = !0
                }
            }), tempLA.add(setElementId)
        })
    }), (tempU2 = new THREE.LWOLoader).setResourcePath(A + "images/"), u.load(A + "objects/" + ce.object, function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            setElementId.visible = !0, setElementId.castShadow = !1, setElementId.receiveShadow = !0, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                void 0 !== setElementId.morphTargetDictionary && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
            }) : (void 0 !== setElementId.morphTargetDictionary && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1)), tempLA.add(setElementId)
        })
    }), (tempU2 = new THREE.LWOLoader).load(A + "objects/dimensions.lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(setElementId) {
            setElementId.visible = !1, setElementId.castShadow = !1, setElementId.receiveShadow = !1, setElementId.frustumCulled = !1, 0 < setElementId.material.length ? setElementId.material.forEach(function(applyToControllers) {
                void 0 !== setElementId.morphTargetDictionary && (applyToControllers.morphTargets = !0), "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
            }) : (void 0 !== setElementId.morphTargetDictionary && (setElementId.material.morphTargets = !0), "MeshStandardMaterial" == setElementId.material.type && null !== setElementId.material.roughnessMap && (setElementId.material.roughness = 1), setElementId.material.color.setHex(0), setElementId.material.emissive.setHex(0)), tempHA.add(setElementId)
        })
    }), st = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), lt = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0), ht = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), ct = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0), dt = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0), pt = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), mt = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), gt = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0), ut = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0), nt = [st, lt, ht, ct], rt = [mt, gt], isSceneLoaded && (setElementId = new THREE.PlaneHelper(st, 35, 16776960), tempLA.add(setElementId)), isSceneLoaded && (setElementClass = new THREE.PlaneHelper(lt, 35, 65535), tempLA.add(setElementClass)), isSceneLoaded && (setElementHidden = new THREE.PlaneHelper(ht, 35, 15921664), tempLA.add(setElementHidden)), isSceneLoaded && (y = new THREE.PlaneHelper(ct, 35, 62194), tempLA.add(y)), isSceneLoaded && (dimensionsArray = new THREE.PlaneHelper(dt, 35, 15921664), mainScene.add(dimensionsArray)), isSceneLoaded && (tempF2 = new THREE.PlaneHelper(pt, 35, 62194), mainScene.add(tempF2)), isSceneLoaded && (applyToControllers = new THREE.PlaneHelper(mt, 35, 15921664), tempLA.add(applyToControllers)), isSceneLoaded && (tempW = new THREE.PlaneHelper(gt, 35, 62194), tempLA.add(tempW)), isSceneLoaded && (tempV2 = new THREE.PlaneHelper(ut, 35, 62194), tempLA.add(tempV2)), isSceneLoaded && ((Ct = new Stats).domElement.style.position = "absolute", Ct.domElement.style.bottom = "0px", Ct.domElement.style.zIndex = 100, document.getElementById("builder").appendChild(Ct.domElement), console.log(mainScene), console.log(ma))
}

function Xa() {
    if (he && !1 !== Ft)
        for (var applyToControllers in Ft) Ft.hasOwnProperty(applyToControllers) && d(Ft[applyToControllers].name.replace("-clone", ""), Ft[applyToControllers]);
    if (he && !1 !== Gt)
        for (var setElementId in Gt) Gt.hasOwnProperty(setElementId) && c(Gt[setElementId].name.replace("scale-", "").replace("-clone", ""), Gt[setElementId]);
    if (he && !1 !== It && 0 < It.length && It.forEach(function(applyToControllers) {
            var setElementId = applyToControllers.name.replace("-clone", ""),
                setElementClass = setElementId.replace("porch", "").replace("Wrap", "").replace("Hip", "").replace("GableExtension", ""),
                setElementHidden = setElementId.replace(setElementClass, "");
            Za(ma[setElementId], setElementClass, setElementHidden, applyToControllers)
        }), he && !1 !== _t)
        for (var setElementClass in _t) _t.hasOwnProperty(setElementClass) && mo(_t[setElementClass].name.replace("-clone", ""), _t[setElementClass]);
    var setElementHidden, i, dimensionsArray = !1;
    for (setElementHidden in Ht) dimensionsArray = !!Ht.hasOwnProperty(setElementHidden);
    if (dimensionsArray)
        for (var r in Ht) Ht.hasOwnProperty(r) && (i = (r = Ht[r].split(","))[0], r.shift(), d(i, r));
    he = !1, Be = y, y = null, Qo(), mainScene.traverse(function(applyToControllers) {
        applyToControllers.userData.hasOwnProperty("hasBoundingBox") && applyToControllers.userData.hasBoundingBox && Yo(applyToControllers)
    })
}

function Ua() {
    Ko(), requestAnimationFrame(Ua), shouldAutoRotate && (rendererInstance.render(mainScene, currentCamera), shouldAutoRotate = !1), isSceneLoaded && Ct.update(), TWEEN.update(), orbitControls.update(), topControls.update(), Ho()
}

function Ya() {
    var applyToControllers = mainScene.getObjectByName("foundation"),
        setElementId = 0,
        setElementClass = 0,
        setElementHidden = 0,
        i = 0;
    ma.leanTo2 && (setElementId = ma.leanTo2Depth), ma.leanTo4 && (setElementClass = ma.leanTo4Depth), ma.leanTo1 && (setElementHidden = ma.leanTo1Depth), ma.leanTo3 && (i = ma.leanTo3Depth), ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE && ma.coveredGableExtensionEEnclosed && (setElementId = Math.max(setElementId, ma.coveredGableExtensionEDepth)), ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW && ma.coveredGableExtensionWEnclosed && (setElementClass = Math.max(setElementClass, ma.coveredGableExtensionWDepth)), ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN && ma.coveredGableExtensionNEnclosed && (setElementHidden = Math.max(setElementHidden, ma.coveredGableExtensionNDepth)), ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS && ma.coveredGableExtensionSEnclosed && (i = Math.max(i, ma.coveredGableExtensionSDepth)), applyToControllers.scale.isSceneLoaded = ma.width + setElementId + setElementClass + 8 / 12, applyToControllers.scale.z = ma.depth + setElementHidden + i + 8 / 12, applyToControllers.position.isSceneLoaded = (setElementClass - setElementId) / 2, applyToControllers.position.z = (setElementHidden - i) / 2, applyToControllers.material.map.repeat.set((ma.width + 8 / 12) / 10, (ma.depth + 8 / 12) / 10), applyToControllers.material.map.offset.isSceneLoaded = (ma.width + 8 / 12) / -20 + .5, applyToControllers.material.map.offset.y = (ma.depth + 8 / 12) / -20 + .5, void 0 !== tempU && (tempU.scale.isSceneLoaded = applyToControllers.scale.isSceneLoaded - 1, tempU.scale.y = applyToControllers.scale.tempz - 1, tempU.position.isSceneLoaded = applyToControllers.position.isSceneLoaded, tempU.position.tempz = applyToControllers.position.tempz), kt && (setElementClass = ma.buildingWithPorchesDimensions(), void 0 !== mainScene.getObjectByName("North") && setElementClass.northEdge && (mainScene.getObjectByName("North").position.tempz = setElementClass.northEdge + 10), void 0 !== mainScene.getObjectByName("East") && setElementClass.eastEdge && (mainScene.getObjectByName("East").position.isSceneLoaded = setElementClass.eastEdge - 10), void 0 !== mainScene.getObjectByName("South") && setElementClass.southEdge && (mainScene.getObjectByName("South").position.tempz = setElementClass.southEdge - 10), void 0 !== mainScene.getObjectByName("West")) && setElementClass.westEdge && (mainScene.getObjectByName("West").position.isSceneLoaded = setElementClass.westEdge + 10)
}

function S() {
    let setElementHidden;
    if (ma.hasOwnProperty("size") && (applyToControllers = ma.size.split("isSceneLoaded"), ma.width = parseInt(applyToControllers[0].replace("'", "")), ma.depth = parseInt(applyToControllers[1].replace("'", ""))), isGeometryActive && (ma.width <= 72 ? (applyToControllers = ma.width % 6, ma.width = applyToControllers <= 3 ? ma.width - applyToControllers : ma.width + 6 - applyToControllers) : ma.width = 81), isGeometryActive) {
        let applyToControllers = ma.settings.roofPitchMin,
            setElementId = ma.settings.roofPitchMax;
        if (ma.width <= 66 ? applyToControllers = 4 : ma.width <= 72 ? applyToControllers = 3.5 : ma.width <= 81 && (applyToControllers = 3), 42 <= ma.width && (setElementId = 4), 70 <= ma.width && (setElementId = 4), 72 <= ma.width && (setElementId = 3.5), 81 <= ma.width && (setElementId = 3), ma.roofPitch < applyToControllers && (ma.roofPitch = applyToControllers), ma.roofPitch > setElementId && (ma.roofPitch = setElementId), 72 !== ma.width && (ma.roofPitch = Math.round(ma.roofPitch)), gui.__folders.hasOwnProperty("Building Dimensions"))
            for (i = 0; i < gui.__folders["Building Dimensions"].__controllers.length; i++) {
                var setElementClass = gui.__folders["Building Dimensions"].__controllers[i];
                "roofPitch" === setElementClass.property && (setElementClass.min(applyToControllers), setElementClass.max(setElementId), setElementClass.updateDisplay())
            }
    } else {
        let applyToControllers = ma.settings.roofPitchMin,
            setElementId = ma.settings.roofPitchMax;
        if ("Single Slope" === ma.roofType ? (applyToControllers = -4, setElementId = 4, 0 == ma.roofPitch && (ma.roofPitch = 1)) : (applyToControllers = 3, setElementId = 8), ma.roofPitch < applyToControllers && (ma.roofPitch = applyToControllers), ma.roofPitch > setElementId && (ma.roofPitch = setElementId), gui.__folders.hasOwnProperty("Building Dimensions"))
            for (i = 0; i < gui.__folders["Building Dimensions"].__controllers.length; i++) {
                var dimensionsArray = gui.__folders["Building Dimensions"].__controllers[i];
                "roofPitch" === dimensionsArray.property && (dimensionsArray.min(applyToControllers), dimensionsArray.max(setElementId), dimensionsArray.updateDisplay())
            }
    }
    if (ma.hasOwnProperty("frameConstruction") && ("Weld Up" == ma.frameConstruction && (ma.settings.ridgidFrameStraightColumns = !0), "Bolt Up" == ma.frameConstruction && (ma.settings.ridgidFrameStraightColumns = !1), applyToControllers = ya.getObjectByName("columnSideR"), isSceneLoaded = ya.getObjectByName("columnSideL"), ma.settings.ridgidFrameStraightColumns ? (applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unTaper] = 1, isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.unTaper] = 1) : (applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unTaper] = 0, isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.unTaper] = 0)), ma.hasOwnProperty("location")) {
        switch (ma.location) {
            case "Saskatchewan":
                ma.flushGirts = !1, ma.flushPurlins = !1, ma.girtSpacing = 2, ma.purlinSpacing = 2;
                break;
            case "Manitoba":
                ma.flushGirts = !0, ma.flushPurlins = !0, ma.girtSpacing = 4, ma.purlinSpacing = 2
        }
        currentColorHex !== ma.location && (currentColorHex = ma.location, colorOptions.forEach(function(applyToControllers) {}))
    }
    ma.secondaryMembers;
    switch (ma.secondaryMembers) {
        case "Insulated Panels":
            Wa = Kt;
            break;
        case "Red Iron":
            Wa = ta;
            break;
        case "Metal":
        case "Steel":
            Wa = ea;
            break;
        default:
            Wa = Kt
    }
    if (ya.traverse(function(applyToControllers) {
            applyToControllers instanceof THREE.Mesh && "Truss" == applyToControllers.material.name && applyToControllers.material.color.copy(Wa)
        }), tempHA.getObjectByName("masterSecondaryFramingPiece").material.color.copy(Wa), ma.settings.watermarkOnConcrete && (22 <= ma.width ? tempDE.scale.set(20, 20, 20) : tempDE.scale.set(10, 10, 10)), "Gabled" === ma.roofType && ma.settings.roundAllButMinimumRoofPitch && ma.roofPitch > ma.settings.roofPitchMin && (ma.roofPitch = Math.ceil(ma.roofPitch)), gui.__folders.hasOwnProperty("Interior"))
        for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
            var tempz = gui.__folders.Interior.__controllers[applyToControllers];
            "divisionAmount" === tempz.property && (tempz.max(ma.depth), ma.divisionAmount > ma.depth - 5 && (ma.divisionAmount = ma.depth - 5), tempz.updateDisplay())
        }
    if ("Asymmetrical" === ma.roofType && gui.__folders.hasOwnProperty("Building Dimensions"))
        for (let applyToControllers = 0; applyToControllers < gui.__folders["Building Dimensions"].__controllers.length; applyToControllers++) {
            var setElementId = gui.__folders["Building Dimensions"].__controllers[applyToControllers];
            "asymmetrical" === setElementId.property && (setElementId.domElement.parentElement.parentElement.hidden = !1, setElementId.min(ma.width / -2 + 3), setElementId.max(ma.width / 2 - 3), ma.asymmetrical < ma.width / -2 + 3 && (ma.asymmetrical = ma.width / -2 + 3), ma.asymmetrical > ma.width / 2 - 3 && (ma.asymmetrical = ma.width / 2 - 3), setElementId.updateDisplay())
        }
    ma.settings.hasOwnProperty("alternateTrussSpacingOver40FT") && (40 < ma.width ? ma.maxTrussSpacing = ma.settings.alternateTrussSpacingOver40FT.over : ma.maxTrussSpacing = ma.settings.alternateTrussSpacingOver40FT.under), ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
    for (let applyToControllers = 0; applyToControllers < gui.__folders["Building Dimensions"].__controllers.length; applyToControllers++) {
        var r = gui.__folders["Building Dimensions"].__controllers[applyToControllers];
        "depth" === r.property && (r.min(ma.maxTrussSpacing), r.step(ma.maxTrussSpacing), ma.depth = Math.round(ma.depth / ma.maxTrussSpacing) * ma.maxTrussSpacing, r.updateDisplay())
    }
    if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver && (ma.gableFront = Math.round(ma.gableFront / ma.maxTrussSpacing) * ma.maxTrussSpacing), ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver && (ma.gableBack = Math.round(ma.gableBack / ma.maxTrussSpacing) * ma.maxTrussSpacing), gui.__folders.hasOwnProperty(se)) {
        if (gui.__folders[se].__folders.hasOwnProperty(ce.tempN.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.tempN.name + " " + le].__controllers.length; applyToControllers++) {
                var ColorOption = gui.__folders[se].__folders[ce.tempN.name + " " + le].__controllers[applyToControllers];
                "leanTo1CutL" === ColorOption.property && (ColorOption.step(ma.maxTrussSpacing), ma.leanTo1CutL = Math.round(ma.leanTo1CutL / ma.maxTrussSpacing) * ma.maxTrussSpacing, ColorOption.updateDisplay()), "leanTo1CutR" === ColorOption.property && (ColorOption.step(ma.maxTrussSpacing), ma.leanTo1CutR = Math.round(ma.leanTo1CutR / ma.maxTrussSpacing) * ma.maxTrussSpacing, ColorOption.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.orthographicCamera.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.orthographicCamera.name + " " + le].__controllers.length; applyToControllers++) {
                var renderer = gui.__folders[se].__folders[ce.orthographicCamera.name + " " + le].__controllers[applyToControllers];
                "leanTo2CutL" === renderer.property && (renderer.step(ma.maxTrussSpacing), ma.leanTo2CutL = Math.round(ma.leanTo2CutL / ma.maxTrussSpacing) * ma.maxTrussSpacing, renderer.updateDisplay()), "leanTo2CutR" === renderer.property && (renderer.step(ma.maxTrussSpacing), ma.leanTo2CutR = Math.round(ma.leanTo2CutR / ma.maxTrussSpacing) * ma.maxTrussSpacing, renderer.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.S.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.S.name + " " + le].__controllers.length; applyToControllers++) {
                var controls = gui.__folders[se].__folders[ce.S.name + " " + le].__controllers[applyToControllers];
                "leanTo3CutL" === controls.property && (controls.step(ma.maxTrussSpacing), ma.leanTo3CutL = Math.round(ma.leanTo3CutL / ma.maxTrussSpacing) * ma.maxTrussSpacing, controls.updateDisplay()), "leanTo3CutR" === controls.property && (controls.step(ma.maxTrussSpacing), ma.leanTo3CutR = Math.round(ma.leanTo3CutR / ma.maxTrussSpacing) * ma.maxTrussSpacing, controls.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.W.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.W.name + " " + le].__controllers.length; applyToControllers++) {
                var c = gui.__folders[se].__folders[ce.W.name + " " + le].__controllers[applyToControllers];
                "leanTo4CutL" === c.property && (c.step(ma.maxTrussSpacing), ma.leanTo4CutL = Math.round(ma.leanTo4CutL / ma.maxTrussSpacing) * ma.maxTrussSpacing, c.updateDisplay()), "leanTo4CutR" === c.property && (c.step(ma.maxTrussSpacing), ma.leanTo4CutR = Math.round(ma.leanTo4CutR / ma.maxTrussSpacing) * ma.maxTrussSpacing, c.updateDisplay())
            }
    }
    st.constant = ma.width / -2, lt.constant = ma.width / -2, mt.constant = ma.depth / -2, gt.constant = ma.depth / -2;
    let d, tempP = 0;
    var tempk = ma.eaveLightHeight / 12;
    if (void 0 === tempLA.getObjectByName("eaveLightsClones") && void 0 === tempLA.getObjectByName("eaveLightsClones") && ((d = new THREE.Group).name = "eaveLightsClones", tempLA.add(d)), void 0 !== tempLA.getObjectByName("eaveLightsClones")) {
        tempLA.remove(tempLA.getObjectByName("eaveLightsClones")), void 0 === tempLA.getObjectByName("eaveLightsClones") && ((d = new THREE.Group).name = "eaveLightsClones", tempLA.add(d));
        var camera = tempHA.getObjectByName("eaveLight");
        if (isGeometryActive && camera)
            for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "Glass" === camera.material[applyToControllers].name && camera.material[applyToControllers].color.setHex(12500670);
        let setElementId = -.15,
            setElementClass = -.15;
        var tempI, tempF, tempG = .25,
            tempG2 = ma.eaveLightWidth / 12;
        if ("Single Slope" === ma.roofType && (tempP = ma.width * ma.roofPitch / 12, setElementId += ma.roofHeightAtX(ma.width / -2) - ma.height, setElementClass += ma.roofHeightAtX(ma.width / 2) - ma.height), ma.eaveLightsEast)
            for (let applyToControllers = 0; applyToControllers <= (ma.depth - .5) / g; applyToControllers++)(setElementHidden = camera.clone()).position.set(ma.width / -2, ma.height + setElementId, ma.depth / -2 + g / 2 + applyToControllers * tempG2 + tempG), setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height] = tempk - 1, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = tempG2 - 1, applyToControllers + 1 > (ma.depth - .5) / g && (I = ma.depth / 2 - setElementHidden.position.tempz - tempG + tempG2 / 2, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = I - 1, setElementHidden.position.z += (g - I) / -2), setElementHidden.name = "eaveLight-clone", setElementHidden.visible = !0, d.add(setElementHidden);
        if (ma.eaveLightsWest)
            for (let applyToControllers = 0; applyToControllers <= (ma.depth - .5) / g; applyToControllers++)(setElementHidden = camera.clone()).position.set(ma.width / 2, ma.height + setElementClass, ma.depth / -2 + g / 2 + applyToControllers * tempG2 + tempG), setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height] = tempk - 1, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = tempG2 - 1, applyToControllers + 1 > (ma.depth - .5) / g && (F = ma.depth / 2 - setElementHidden.position.tempz - tempG + tempG2 / 2, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = F - 1, setElementHidden.position.z += (g - F) / -2), setElementHidden.name = "eaveLight-clone", setElementHidden.visible = !0, d.add(setElementHidden)
    }
    let tempU2;
    if (void 0 === tempLA.getObjectByName("eaveLightPanelClones") && void 0 === tempLA.getObjectByName("eaveLightPanelClones") && ((tempU2 = new THREE.Group).name = "eaveLightPanelClones", tempLA.add(tempU2)), void 0 !== tempLA.getObjectByName("eaveLightPanelClones")) {
        if (tempLA.remove(tempLA.getObjectByName("eaveLightPanelClones")), void 0 === tempLA.getObjectByName("eaveLightPanelClones") && ((tempU2 = new THREE.Group).name = "eaveLightPanelClones", tempLA.add(tempU2)), tempP = .1, "Single Slope" === ma.roofType && (tempP = ma.width * ma.roofPitch / 12), ma.eaveLightPanelsEast)
            for (let applyToControllers = 0; applyToControllers <= ma.depth - 2; applyToControllers++)(setElementHidden = tempHA.getObjectByName("eaveLightPanel").clone()).position.set(ma.width / -2, ma.height - .25 + Math.max(p, 0), applyToControllers - (ma.depth - 2) / 2), setElementHidden.rotation.y = THREE.Math.degToRad(90), setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height] = tempk - 1, setElementHidden.name = "eaveLightPanel-clone", setElementHidden.visible = !0, tempU2.add(setElementHidden);
        if (ma.eaveLightPanelsWest)
            for (let applyToControllers = 0; applyToControllers <= ma.depth - 2; applyToControllers++)(setElementHidden = tempHA.getObjectByName("eaveLightPanel").clone()).position.set(ma.width / 2, ma.height - .25 + Math.max(p, 0), applyToControllers - (ma.depth - 2) / 2), setElementHidden.rotation.y = THREE.Math.degToRad(-90), setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height] = tempk - 1, setElementHidden.name = "eaveLightPanel-clone", setElementHidden.visible = !0, tempU2.add(setElementHidden)
    }
    if (gui.__folders.hasOwnProperty(se)) {
        if (gui.__folders[se].__folders.hasOwnProperty(ce.tempN.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.tempN.name + " " + le].__controllers.length; applyToControllers++) {
                var tempT = gui.__folders[se].__folders[ce.tempN.name + " " + le].__controllers[applyToControllers];
                "leanTo1Drop" === tempT.property && (ma.leanTo1Drop < 0 && (ma.leanTo1Drop = 0), ma.leanTo1Height = ma.height - ma.leanTo1Drop, tempT.updateDisplay()), "leanTo1CutL" === tempT.property && (tempT.max(ma.width - ma.leanTo1CutR - 6), !he && ma.leanTo1CutL > tempT.__max && (ma.leanTo1CutL = tempT.__max), ma.leanTo1CutL < 0 && (ma.leanTo1CutL = 0), tempT.updateDisplay()), "leanTo1CutR" === tempT.property && (tempT.max(ma.width - ma.leanTo1CutL - 6), !he && ma.leanTo1CutR > tempT.__max && (ma.leanTo1CutR = tempT.__max), ma.leanTo1CutR < 0 && (ma.leanTo1CutR = 0), tempT.updateDisplay(), ma.leanTo1Length = ma.width - ma.leanTo1CutL - ma.leanTo1CutR), "leanTo1Height" === tempT.property && (tempT.max(ma.height), !he && ma.leanTo1Height > ma.height && (ma.leanTo1Height = ma.height), tempT.updateDisplay()), "leanTo1Length" === tempT.property && (tempT.max(ma.width), !he && ma.leanTo1Length > ma.width && (ma.leanTo1Length = ma.width), tempT.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.S.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.S.name + " " + le].__controllers.length; applyToControllers++) {
                var y = gui.__folders[se].__folders[ce.S.name + " " + le].__controllers[applyToControllers];
                "leanTo3Drop" === y.property && (ma.leanTo3Drop < 0 && (ma.leanTo3Drop = 0), ma.leanTo3Height = ma.height - ma.leanTo3Drop, y.updateDisplay()), "leanTo3CutL" === y.property && (y.max(ma.width - ma.leanTo3CutR - 6), !he && ma.leanTo3CutL > y.__max && (ma.leanTo3CutL = y.__max), ma.leanTo3CutL < 0 && (ma.leanTo3CutL = 0), y.updateDisplay()), "leanTo3CutR" === y.property && (y.max(ma.width - ma.leanTo3CutL - 6), !he && ma.leanTo3CutR > y.__max && (ma.leanTo3CutR = y.__max), ma.leanTo3CutR < 0 && (ma.leanTo3CutR = 0), y.updateDisplay(), ma.leanTo3Length = ma.width - ma.leanTo3CutL - ma.leanTo3CutR), "leanTo3Height" === y.property && (y.max(ma.height), !he && ma.leanTo3Height > ma.height && (ma.leanTo3Height = ma.height), y.updateDisplay()), "leanTo3Length" === y.property && (y.max(ma.width), !he && ma.leanTo3Length > ma.width && (ma.leanTo3Length = ma.width), y.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.orthographicCamera.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.orthographicCamera.name + " " + le].__controllers.length; applyToControllers++) {
                var tempB = gui.__folders[se].__folders[ce.orthographicCamera.name + " " + le].__controllers[applyToControllers];
                "leanTo2Drop" === tempB.property && (ma.leanTo2Drop < 0 && (ma.leanTo2Drop = 0), ma.leanTo2Height = ma.wallHeightL() - ma.leanTo2Drop, tempB.updateDisplay()), "leanTo2CutL" === tempB.property && (tempB.max(ma.depth - ma.leanTo2CutR - 6), !he && ma.leanTo2CutL > tempB.__max && (ma.leanTo2CutL = tempB.__max), ma.leanTo2CutL < 0 && (ma.leanTo2CutL = 0), tempB.updateDisplay()), "leanTo2CutR" === tempB.property && (tempB.max(ma.depth - ma.leanTo2CutL - 6), !he && ma.leanTo2CutR > tempB.__max && (ma.leanTo2CutR = tempB.__max), ma.leanTo2CutR < 0 && (ma.leanTo2CutR = 0), tempB.updateDisplay(), ma.leanTo2Length = ma.depth - ma.leanTo2CutL - ma.leanTo2CutR), "leanTo2Height" === tempB.property && (tempB.max(ma.wallHeightL()), !he && ma.leanTo2Height > ma.wallHeightL() && (ma.leanTo2Height = ma.wallHeightL()), tempB.updateDisplay()), "leanTo2Length" === tempB.property && (tempB.max(ma.depth), !he && ma.leanTo2Length > ma.depth && (ma.leanTo2Length = ma.depth), tempB.updateDisplay())
            }
        if (gui.__folders[se].__folders.hasOwnProperty(ce.W.name + " " + le))
            for (let applyToControllers = 0; applyToControllers < gui.__folders[se].__folders[ce.W.name + " " + le].__controllers.length; applyToControllers++) {
                var tempF2 = gui.__folders[se].__folders[ce.W.name + " " + le].__controllers[applyToControllers];
                "leanTo4Drop" === tempF2.property && (ma.leanTo4Drop < 0 && (ma.leanTo4Drop = 0), ma.leanTo4Height = ma.wallHeightR() - ma.leanTo4Drop, tempF2.updateDisplay()), "leanTo4CutL" === tempF2.property && (tempF2.max(ma.depth - ma.leanTo4CutR - 6), !he && ma.leanTo4CutL > tempF2.__max && (ma.leanTo4CutL = tempF2.__max), ma.leanTo4CutL < 0 && (ma.leanTo4CutL = 0), tempF2.updateDisplay()), "leanTo4CutR" === tempF2.property && (tempF2.max(ma.depth - ma.leanTo4CutL - 6), !he && ma.leanTo4CutR > tempF2.__max && (ma.leanTo4CutR = tempF2.__max), ma.leanTo4CutR < 0 && (ma.leanTo4CutR = 0), tempF2.updateDisplay(), ma.leanTo4Length = ma.depth - ma.leanTo4CutL - ma.leanTo4CutR), "leanTo4Height" === tempF2.property && (tempF2.max(ma.wallHeightR()), !he && ma.leanTo4Height > ma.wallHeightR() && (ma.leanTo4Height = ma.wallHeightR()), tempF2.updateDisplay()), "leanTo4Length" === tempF2.property && (tempF2.max(ma.depth), !he && ma.leanTo4Length > ma.depth && (ma.leanTo4Length = ma.depth), tempF2.updateDisplay())
            }
    }
    let tempW;
    if (ma.leanTo1 || ma.leanTo3 || ma.leanTo2 || ma.leanTo4) {
        if (mainScene.getObjectByName("leanTo1"))
            for (let applyToControllers = 1; applyToControllers <= 4; applyToControllers++)
                if (tempW = "leanTo" + applyToControllers, mainScene.getObjectByName(tempW).visible == ma[tempW] || he || (1 === applyToControllers || 3 === applyToControllers ? ma[tempW + "Length"] = ma.width - ma[tempW + "CutL"] - ma[tempW + "CutR"] : ma[tempW + "Length"] = ma.depth - ma[tempW + "CutL"] - ma[tempW + "CutR"]), void 0 !== mainScene.getObjectByName(tempW)) {
                    mainScene.getObjectByName(tempW).visible = ma[tempW], mainScene.getObjectByName(tempW + "Roof").visible = ma[tempW], 0 != ma[tempW] && ma[tempW + "Enclosed"] && "Fully Enclosed" === ma[tempW + "Walls"] || (mainScene.getObjectByName(tempW + "BoundingBox").position.set(0, 0, 0), mainScene.getObjectByName(tempW + "BoundingBox").scale.set(.1, .1, .1)), 2 !== applyToControllers && applyToControllers;
                    var tempV2 = mainScene.getObjectByName(tempW);
                    if (ma[tempW + "Enclosed"] && 0 === ma.hideWalls && "Fully Enclosed" == ma[tempW + "Walls"]) tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.unEnclosedHeight] = 0, mainScene.getObjectByName(tempW).traverse(function(setElementId) {
                        if (setElementId instanceof THREE.Mesh)
                            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingWalls" !== setElementId.material[applyToControllers].name.substring(0, 13) && "BuildingWainscot" !== setElementId.material[applyToControllers].name.substring(0, 16) && "LeantoWalls" !== setElementId.material[applyToControllers].name.substring(0, 11) && "LeantoWainscot" !== setElementId.material[applyToControllers].name.substring(0, 14) && "BuildingTrim" !== setElementId.material[applyToControllers].name.substring(0, 12) || (setElementId.material[applyToControllers].visible = !0)
                    });
                    else if (0 === ma.hideWalls && (!ma[tempW + "Enclosed"] || "Fully Enclosed" !== ma[tempW + "Walls"]))
                        if (ma.settings.showLeantoWallTriangleWhenOpen || "Upper Triangles Only" == ma[tempW + "Walls"] || "Gable Dress" == ma[tempW + "Walls"]) tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.unEnclosedHeight] = (ma[tempW + "Height"] - ma[tempW + "Pitch"] / 12 * ma[w + "Depth"] - 1.75) / 100, mainScene.getObjectByName(tempW).traverse(function(setElementId) {
                            if (setElementId instanceof THREE.Mesh)
                                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingWalls" !== setElementId.material[applyToControllers].name.substring(0, 13) && "BuildingWainscot" !== setElementId.material[applyToControllers].name.substring(0, 16) && "LeantoWalls" !== setElementId.material[applyToControllers].name.substring(0, 11) && "LeantoWainscot" !== setElementId.material[applyToControllers].name.substring(0, 14) && "BuildingTrim" !== setElementId.material[applyToControllers].name.substring(0, 12) || (setElementId.material[applyToControllers].visible = !0)
                        });
                        else if (ma[tempW + "Walls"].startsWith("Ends Enclosed") || ma[tempW + "Walls"].startsWith("Gable Walls Only")) tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.unEnclosedHeight] = 0, mainScene.getObjectByName(tempW).traverse(function(setElementId) {
                        if (setElementId instanceof THREE.Mesh)
                            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++)(setElementId.material[applyToControllers].name.startsWith("LeantoWallsWidth") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot1") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot3") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim1") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim3") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim1") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim3") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base1") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base3")) && (setElementId.material[applyToControllers].visible = !0), (setElementId.material[applyToControllers].name.startsWith("LeantoWallsDepth") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot2") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim2") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim2") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base2")) && (setElementId.material[applyToControllers].visible = !1)
                    });
                    else if (ma[tempW + "Walls"].startsWith("Length") || ma[tempW + "Walls"].startsWith("Full Length") || ma[tempW + "Walls"].endsWith("Apron Wall")) {
                        let applyToControllers = 0;
                        "Enclosed" == (applyToControllers = (applyToControllers = (applyToControllers = (applyToControllers = (applyToControllers = ma[tempW + "Walls"].replace(/^(Length)/, "")).replace(/Apron Wall/, "")).replace(/\ColorOption+/g, "")).replace(/ft$/, "")).replace(/"$/, "")) || "Full" == applyToControllers ? tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.unEnclosedHeight] = 0 : tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.unEnclosedHeight] = (ma[tempW + "Height"] - ma[tempW + "Pitch"] / 12 * ma[w + "Depth"] - applyToControllers) / 100, mainScene.getObjectByName(tempW).traverse(function(setElementId) {
                            if (setElementId instanceof THREE.Mesh)
                                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++)(setElementId.material[applyToControllers].name.startsWith("LeantoWallsWidth") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot1") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot3") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim1") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim3") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim1") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim3") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base1") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base3")) && (setElementId.material[applyToControllers].visible = !1), (setElementId.material[applyToControllers].name.startsWith("LeantoWallsDepth") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot2") || setElementId.material[applyToControllers].name.startsWith("LeantoWainscotTrim2") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim2") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base2")) && (setElementId.material[applyToControllers].visible = !0)
                        })
                    } else mainScene.getObjectByName(tempW).traverse(function(setElementId) {
                        if (setElementId instanceof THREE.Mesh)
                            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingWalls" !== setElementId.material[applyToControllers].name.substring(0, 13) && "BuildingWainscot" !== setElementId.material[applyToControllers].name.substring(0, 16) && "LeantoWalls" !== setElementId.material[applyToControllers].name.substring(0, 11) && "LeantoWainscot" !== setElementId.material[applyToControllers].name.substring(0, 14) && "BuildingTrim" !== setElementId.material[applyToControllers].name.substring(0, 12) || (setElementId.material[applyToControllers].visible = !1)
                    })
                }
    } else
        for (let applyToControllers = 0; applyToControllers < 4; applyToControllers++) {
            var rendererInstance = (tempW = "leanTo" + (applyToControllers + 1)) + "BoundingBox";
            void 0 !== mainScene.getObjectByName(tempW) && (mainScene.getObjectByName(tempW).visible = ma[tempW], mainScene.getObjectByName(tempW + "Roof").visible = ma[tempW], mainScene.getObjectByName(rendererInstance).position.set(0, 0, 0), mainScene.getObjectByName(rendererInstance).scale.set(.1, .1, .1))
        }(ma.hasOwnProperty("coveredGableExtensionN") || ma.hasOwnProperty("coveredGableExtensionS") || ma.hasOwnProperty("coveredGableExtensionE") || ma.hasOwnProperty("coveredGableExtensionW")) && hi(mainScene, ma, gui, he, ce, va, wa, tempME, $setElementClass, nt, rt, vo);
    var orthographicCamera = mainScene.getObjectByName("building").material;
    for (let applyToControllers = 0; applyToControllers < orthographicCamera.length; applyToControllers++) 0 !== ma.hideWalls || "BuildingTrim-Corner" !== orthographicCamera[applyToControllers].name && "BuildingTrim1" !== orthographicCamera[applyToControllers].name && "BuildingTrim2" !== orthographicCamera[applyToControllers].name && "BuildingTrim3" !== orthographicCamera[applyToControllers].name && "BuildingTrim4" !== orthographicCamera[applyToControllers].name || (orthographicCamera[applyToControllers].visible = !0), 0 !== ma.hideWalls || "BuildingWallsDepthL" !== orthographicCamera[applyToControllers].name && "BuildingWallsDepthL-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsDepthR" !== orthographicCamera[applyToControllers].name && "BuildingWallsDepthR-Interior" !== orthographicCamera[applyToControllers].name || (orthographicCamera[applyToControllers].visible = !0), 0 !== ma.hideWalls || "BuildingWallsDepthL-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsDepthR-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsWidthLeftBack-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsWidthLeftFront-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsWidthRightBack-Interior" !== orthographicCamera[applyToControllers].name && "BuildingWallsWidthRightFront-Interior" !== orthographicCamera[applyToControllers].name || (orthographicCamera[applyToControllers].visible = !0);
    var orbitControls, tempD, currentCamera = [0, 0, 0, 0, 0];
    for (let applyToControllers = 1; applyToControllers <= 4; applyToControllers++) {
        var $ = mainScene.getObjectByName("building").morphTargetDictionary["TrimStartHeight" + applyToControllers];
        mainScene.getObjectByName("building").morphTargetInfluences[$] = (ma.height - Math.abs(currentCamera[applyToControllers] - ma.height)) / 100
    }
    ma.gutters && ma.hideWalls <= 1 ? mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && setElementId.material)
            if (setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers].name.startsWith("Gutters") && (setElementId.material[applyToControllers].visible = !0);
            else setElementId.material.name.startsWith("Downspouts") && (setElementId.material.visible = !0)
    }) : mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && setElementId.material)
            if (setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers].name.startsWith("Gutters") && (setElementId.material[applyToControllers].visible = !1);
            else setElementId.material.name.startsWith("Downspouts") && (setElementId.material.visible = !1)
    }), ma.boxedOverhangs ? (applyToControllers = 2 * Math.cos(ma.roofPitch / 12), x = 2 * Math.atan(ma.roofPitch / 12), tempDA.morphTargetInfluences[tempDA.morphTargetDictionary.boxedOverhangX] = isSceneLoaded, tempDA.morphTargetInfluences[tempDA.morphTargetDictionary.boxedOverhangY] = applyToControllers, "Single Slope" === ma.roofType ? tempCA.morphTargetInfluences[tempCA.morphTargetDictionary.boxedOverhangX] = -isSceneLoaded : tempCA.morphTargetInfluences[tempCA.morphTargetDictionary.boxedOverhangX] = isSceneLoaded, tempCA.morphTargetInfluences[tempCA.morphTargetDictionary.boxedOverhangY] = applyToControllers) : (tempDA.morphTargetInfluences[tempDA.morphTargetDictionary.boxedOverhangX] = 0, tempDA.morphTargetInfluences[tempDA.morphTargetDictionary.boxedOverhangY] = 0, tempCA.morphTargetInfluences[tempCA.morphTargetDictionary.boxedOverhangX] = 0, tempCA.morphTargetInfluences[tempCA.morphTargetDictionary.boxedOverhangY] = 0), io(), void 0 !== tempLA.getObjectByName("skylightNullR") && tempLA.remove(mainScene.getObjectByName("skylightNullR")), void 0 !== tempLA.getObjectByName("skylightNullL") && tempLA.remove(mainScene.getObjectByName("skylightNullL")), (orbitControls = new THREE.Group).name = "skylightNullR", orbitControls.position.copy(tempCA.position), orbitControls.rotation.tempz = tempCA.rotation.tempz, orbitControls.position.tempz = 0, tempLA.add(orbitControls), (tempD = new THREE.Group).name = "skylightNullL", tempD.position.copy(tempDA.position), tempD.rotation.tempz = tempDA.rotation.tempz, tempD.rotation.y = THREE.Math.degToRad(180), tempD.position.tempz = 0, tempLA.add(tempD);
    let A = 11;
    ma.hasOwnProperty("skylightLength") && (A = ma.skylightLength);
    var W, S = mainScene.getObjectByName("skylight");
    if (ma.skylights) {
        var tempQ = ma.depth / (ma.skylights / 2),
            tempV = (A - 1) / 100 * 2;
        let setElementId;
        for (let applyToControllers = 1; applyToControllers <= ma.skylights / 2; applyToControllers++) setElementHidden = S.clone(), setElementId = ma.depth / -2 + tempQ * (applyToControllers - .5), setElementHidden.position.set(.25, 0, setElementId), setElementHidden.name = "skylight-clone", setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = tempV, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.depth] = .002, setElementHidden.frustumCulled = !1, setElementHidden.visible = !0, tempD.add(setElementHidden);
        for (let applyToControllers = 1; applyToControllers <= ma.skylights / 2; applyToControllers++) setElementHidden = S.clone(), setElementId = ma.depth / -2 + tempQ * (applyToControllers - .5), setElementHidden.position.set(.25, 0, -setElementId), setElementHidden.name = "skylight-clone", setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] = tempV, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.depth] = .002, setElementHidden.frustumCulled = !1, setElementHidden.visible = !0, orbitControls.add(setElementHidden);
        for (let applyToControllers = 0; applyToControllers < S.material.length; applyToControllers++) "Skylight" !== S.material[applyToControllers].name && "Skylight-Inside" !== S.material[applyToControllers].name || (S.material[applyToControllers].normalMap.repeat.set(3 * tempJ, 1), S.material[applyToControllers].normalMap.offset.isSceneLoaded = 3 * tempJ + .5, isGeometryActive && "Skylight" === S.material[applyToControllers].name && S.material[applyToControllers].color.setHex(12500670))
    }
    if (0 === ma.hideWalls) {
        ma.showGableTriangleWithOpenGableWall ? (ma.enclosedN ? tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight1] = 0 : tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight1] = ma.height - .5, ma.enclosedS ? tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight3] = 0 : tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight3] = ma.height - .5) : ma.hasOwnProperty("showGableDressWithOpenGableWalls") && ma.showGableDressWithOpenGableWalls ? (tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight] = ma.height - 2, ma.enclosedN = !1, ma.enclosedS = !1, ma.enclosedE = !1, ma.enclosedW = !1) : (tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight1] = 0, tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight3] = 0, tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.unEnclosedHeight] = 0);
        for (let applyToControllers = 0; applyToControllers < tempEE.material.length; applyToControllers++)((W = tempEE.material[applyToControllers]).name.startsWith("BuildingWallsWidthLeftFront") || W.name.startsWith("BuildingWallsWidthRightFront") || "BuildingWainscot1" === W.name || "BuildingWainscotTrim1" === W.name || "BuildingTrimN" === W.name || "BuildingTrim-Base1" === W.name) && (ma.enclosedN || ma.showGableTriangleWithOpenGableWall || ma.showGableDressWithOpenGableWalls ? W.visible = !0 : W.visible = !1), (W.name.startsWith("BuildingWallsWidthLeftBack") || W.name.startsWith("BuildingWallsWidthRightBack") || "BuildingWainscot3" === W.name || "BuildingWainscotTrim3" === W.name || "BuildingTrimS" === W.name || "BuildingTrim-Base3" === W.name) && (ma.enclosedS || ma.showGableTriangleWithOpenGableWall || ma.showGableDressWithOpenGableWalls ? W.visible = !0 : W.visible = !1), !W.name.startsWith("BuildingWallsDepthL") && "BuildingWainscot2" !== W.name && "BuildingWainscotTrim2" !== W.name && "BuildingTrimE" !== W.name && "BuildingTrim-Base2" !== W.name || (ma.enclosedE || ma.showGableDressWithOpenGableWalls ? W.visible = !0 : W.visible = !1), !W.name.startsWith("BuildingWallsDepthR") && "BuildingWainscot4" !== W.name && "BuildingWainscotTrim4" !== W.name && "BuildingTrimW" !== W.name && "BuildingTrim-Base4" !== W.name || (ma.enclosedW || ma.showGableDressWithOpenGableWalls ? W.visible = !0 : W.visible = !1), !W.name.startsWith("BuildingTrim1") || ma.enclosedN || ma.enclosedE || (W.visible = !1), !W.name.startsWith("BuildingTrim2") || ma.enclosedS || ma.enclosedE || (W.visible = !1), !W.name.startsWith("BuildingTrim3") || ma.enclosedS || ma.enclosedW || (W.visible = !1), !W.name.startsWith("BuildingTrim4") || ma.enclosedN || ma.enclosedW || (W.visible = !1), !ma.hasOwnProperty("baseTrim") || W.name.startsWith("BuildingTrim-Base") && !ma.baseTrim && (W.visible = !1)
    }
    if (gui.__folders.hasOwnProperty("Interior")) {
        if (ma.hasOwnProperty("perimeterWallHeight"))
            for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
                var tempQ2 = gui.__folders.Interior.__controllers[applyToControllers];
                "perimeterWallHeight" === tempQ2.property && (tempQ2.max(ma.height), tempQ2.updateDisplay(), ma.perimeterWallHeight > ma.height) && (ma.perimeterWallHeight = ma.height, uo())
            }
        if (ma.divisionWall)
            for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
                var O = gui.__folders.Interior.__controllers[applyToControllers];
                "divisionAmount" !== O.property && "divisionMaterial" !== O.property && "perimeterWalls2" !== O.property && "flooring2" !== O.property && "ceiling2" !== O.property || (O.domElement.parentElement.parentElement.hidden = !1, O.updateDisplay())
            } else if (gui.__folders.hasOwnProperty("Interior"))
                for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
                    var scene = gui.__folders.Interior.__controllers[applyToControllers];
                    "divisionAmount" !== scene.property && "divisionMaterial" !== scene.property && "perimeterWalls2" !== scene.property && "flooring2" !== scene.property && "ceiling2" !== scene.property || (scene.domElement.parentElement.parentElement.hidden = !0, scene.updateDisplay())
                }
    }
    if (ma.divisionWall && 0 < ma.divisionAmount ? tempRE.visible = !0 : tempRE.visible = !1, tempRE.position.tempz = ma.depth / 2 - ma.divisionAmount, tempRE.scale.isSceneLoaded = ma.width - 1.4, tempRE.scale.y = ma.height - .8, "Steel" == ma.divisionMaterial) tempRE.userData.topMaterial.map = null, tempRE.userData.topMaterial.normalMap = tempRE.userData.metalTexture, tempRE.userData.topMaterial.specular.setHex(6250335), tempRE.userData.topMaterial.shininess = 90, tempRE.userData.topMaterial.reflectivity = .05, tempRE.userData.topMaterial.normalMap.repeat.set((ma.width - 1.4) * tempJ, 1), tempRE.userData.bottomMaterial.map = null, tempRE.userData.bottomMaterial.normalMap = tempRE.userData.metalTexture, tempRE.userData.bottomMaterial.specular.setHex(6250335), tempRE.userData.bottomMaterial.shininess = 90, tempRE.userData.bottomMaterial.reflectivity = .05, tempRE.userData.bottomMaterial.normalMap.repeat.set((ma.width - 1.4) * tempJ, 1);
    else if ("Half Wood" == ma.divisionMaterial) tempRE.userData.topMaterial.map = null, tempRE.userData.topMaterial.normalMap = tempRE.userData.metalTexture, tempRE.userData.topMaterial.specular.setHex(6250335), tempRE.userData.topMaterial.shininess = 90, tempRE.userData.topMaterial.reflectivity = .05, tempRE.userData.topMaterial.normalMap.repeat.set((ma.width - 1.4) * tempJ, 1), tempRE.userData.bottomMaterial.map = tempRE.userData.woodTexture, tempRE.userData.bottomMaterial.normalMap = null, tempRE.userData.bottomMaterial.specular.setHex(2500134), tempRE.userData.bottomMaterial.shininess = 5.117649, tempRE.userData.bottomMaterial.reflectivity = 0, tempRE.userData.bottomMaterial.map.repeat.set((ma.width - 1.4) / 2.5, (ma.height - .8) / 2.5);
    else if ("Wood" == ma.divisionMaterial || "OSB" == ma.divisionMaterial || "Plywood" == ma.divisionMaterial) tempRE.userData.topMaterial.map = tempRE.userData.woodTexture, tempRE.userData.topMaterial.normalMap = null, tempRE.userData.topMaterial.specular.setHex(2500134), tempRE.userData.topMaterial.shininess = 5.117649, tempRE.userData.topMaterial.reflectivity = 0, tempRE.userData.topMaterial.map.repeat.set((ma.width - 1.4) / 2.5, (ma.height - .8) / 2.5), tempRE.userData.bottomMaterial.map = tempRE.userData.woodTexture, tempRE.userData.bottomMaterial.normalMap = null, tempRE.userData.bottomMaterial.specular.setHex(2500134), tempRE.userData.bottomMaterial.shininess = 5.117649, tempRE.userData.bottomMaterial.reflectivity = 0, tempRE.userData.bottomMaterial.map.repeat.set((ma.width - 1.4) / 2.5, (ma.height - .8) / 2.5);
    else if ("8' OSB with Steel above" == ma.divisionMaterial) {
        var isSceneLoaded = ma.height - 1;
        let setElementClass = isSceneLoaded / 2;
        if (isGeometryActive) {
            let applyToControllers = 8,
                setElementId = applyToControllers - setElementClass;
            setElementId + setElementClass > isSceneLoaded && (setElementId = isSceneLoaded - setElementClass, applyToControllers = isSceneLoaded), setElementClass = applyToControllers, tempRE.morphTargetInfluences[tempRE.morphTargetDictionary.halfWallAdjustment] = setElementId / tempRE.scale.y
        }
        tempRE.userData.topMaterial.map = null, tempRE.userData.topMaterial.normalMap = tempRE.userData.metalTexture, tempRE.userData.topMaterial.specular.setHex(6250335), tempRE.userData.topMaterial.shininess = 90, tempRE.userData.topMaterial.reflectivity = .05, tempRE.userData.topMaterial.normalMap.repeat.set((ma.width - 1.4) * tempJ, 1), tempRE.userData.bottomMaterial.map = tempRE.userData.woodTexture, tempRE.userData.bottomMaterial.normalMap = null, tempRE.userData.bottomMaterial.specular.setHex(2500134), tempRE.userData.bottomMaterial.shininess = 5.117649, tempRE.userData.bottomMaterial.reflectivity = 0, tempRE.userData.bottomMaterial.map.repeat.set((ma.width - 1.4) / 2.5, 2 * setElementClass / 2.5)
    } else "Drywall" == ma.divisionMaterial && (tempRE.userData.topMaterial.map = null, tempRE.userData.topMaterial.normalMap = null, tempRE.userData.topMaterial.specular.setHex(14540253), tempRE.userData.topMaterial.shininess = 6, tempRE.userData.topMaterial.reflectivity = 0, tempRE.userData.bottomMaterial.map = null, tempRE.userData.bottomMaterial.normalMap = null, tempRE.userData.bottomMaterial.specular.setHex(14540253), tempRE.userData.bottomMaterial.shininess = 6, tempRE.userData.bottomMaterial.reflectivity = 0);
    if (tempRE.userData.bottomMaterial.needsUpdate = !0, tempRE.userData.topMaterial.needsUpdate = !0, ma.hasOwnProperty("flooring") && "None" != ma.flooring && "Concrete" != ma.flooring ? (tempTE2.visible = !0, tempTE2.scale.isSceneLoaded = ma.width, ma.divisionWall ? tempTE2.scale.y = ma.divisionAmount : tempTE2.scale.y = ma.depth, tempTE2.position.tempz = ma.depth / 2, "Ceramic Tile" == ma.flooring ? (te.material = ft, te.material.map.repeat.set(te.scale.x / 4, tempTE2.scale.y / 4)) : "Wood" == ma.flooring ? (te.material = wt, te.material.map.repeat.set(te.scale.x / 4, tempTE2.scale.y / 10)) : "Carpet" == ma.flooring ? (te.material = vt, te.material.map.repeat.set(te.scale.x / 3, tempTE2.scale.y / 3)) : "Gravel" == ma.flooring && (te.material = Et, te.material.map.repeat.set(te.scale.x / 8, tempTE2.scale.y / 4), te.material.normalMap.repeat.set(te.scale.x / 8, tempTE2.scale.y / 4), te.material.specularMap.repeat.set(te.scale.x / 8, tempTE2.scale.y / 4))) : te.visible = !1, "None" != ma.flooring2 && ma.divisionWall ? (Pe.visible = !0, Pe.scale.x = ma.width, ma.divisionWall ? Pe.scale.y = ma.depth - ma.divisionAmount : Pe.scale.y = ma.depth, Pe.position.z = ma.depth / -2, "Ceramic Tile" == ma.flooring2 ? (tempPE2.material = Wt, tempPE2.material.map.repeat.set(tempPE2.scale.isSceneLoaded / 4, Pe.scale.y / 4)) : "Wood" == ma.flooring2 ? (tempPE2.material = St, tempPE2.material.map.repeat.set(tempPE2.scale.isSceneLoaded / 4, Pe.scale.y / 10)) : "Carpet" == ma.flooring2 && (tempPE2.material = Ot, tempPE2.material.map.repeat.set(tempPE2.scale.isSceneLoaded / 3, Pe.scale.y / 3))) : tempPE2.visible = !1, "None" == ma.ceiling || 1 < ma.hideWalls ? (tempAE.visible = !1, tempOE.visible = !1) : (tempAE.visible = !0, tempOE.visible = !0, ma.divisionWall ? (tempAE.scale.y = ma.divisionAmount - .7, tempOE.scale.y = ma.divisionAmount - .7) : (tempAE.scale.y = ma.depth - 1.4, tempOE.scale.y = ma.depth - 1.4), tempAE.position.tempz = ma.depth / 2 - .7, oe.position.z = ma.depth / 2 - .7, "Post Frame" == ma.frameType ? (tempAE.position.y = ma.height - 1.1, tempOE.position.y = ma.height - 1.1, tempAE.scale.isSceneLoaded = ma.width / 2 - .7, oe.scale.x = ma.width / 2 - .7, tempAE.scale.tempz = tempAE.scale.y, tempOE.scale.tempz = tempOE.scale.y, tempAE.position.isSceneLoaded = ma.width / -2 + .7, oe.position.x = ma.width / 2 - .7, tempAE.rotation.y = 0, tempOE.rotation.y = 0) : (tempAE.position.y = ma.height - 1.58, tempOE.position.y = ma.height - 1.58, tempAE.position.isSceneLoaded = ma.width / -2 + .7, oe.position.x = ma.width / 2 - .7, tempAE.rotation.y = Math.atan2(ma.roofPitch, 12), tempOE.rotation.y = Math.atan2(-ma.roofPitch, 12), tempAE.scale.isSceneLoaded = -tempAE.position.isSceneLoaded / Math.cos(ae.rotation.y), oe.scale.x = oe.position.x / Math.cos(tempOE.rotation.y), tempAE.scale.tempz = tempAE.scale.y, tempOE.scale.tempz = tempOE.scale.y), "Steel" == ma.ceiling ? (tempAE.material = yt, ma.settings.orientCeilingPanelsToWidth ? tempAE.material.normalMap.repeat.set(tempAE.scale.tempz * tempJ, 1) : tempAE.material.normalMap.repeat.set(tempAE.scale.isSceneLoaded * tempJ, 1), tempOE.material = yt, ma.settings.orientCeilingPanelsToWidth ? tempOE.material.normalMap.repeat.set(tempOE.scale.tempz * tempJ, 1) : tempOE.material.normalMap.repeat.set(tempOE.scale.isSceneLoaded * tempJ, 1)) : "Wood" == ma.ceiling ? (tempAE.material = bt, tempAE.material.map.repeat.set(tempAE.scale.isSceneLoaded / 4, ae.scale.y / 4), tempOE.material = Pt, tempOE.material.map.repeat.set(tempOE.scale.isSceneLoaded / 4, oe.scale.y / 4)) : "2x2 Tile" == ma.ceiling && (tempAE.material = Tt, tempAE.material.map.repeat.set(tempAE.scale.isSceneLoaded / 2, ae.scale.y / 2), tempOE.material = Tt, tempOE.material.map.repeat.set(tempOE.scale.isSceneLoaded / 2, oe.scale.y / 2))), "None" == ma.ceiling2 || !ma.divisionWall || 1 < ma.hideWalls ? (tempIE.visible = !1, tempNE.visible = !1) : (tempIE.visible = !0, tempNE.visible = !0, ma.divisionWall ? (tempIE.scale.y = ma.depth - ma.divisionAmount - .7, tempNE.scale.y = ma.depth - ma.divisionAmount - .7) : (tempIE.scale.y = ma.depth - 1.4, tempNE.scale.y = ma.depth - 1.4), tempIE.position.tempz = ma.depth / -2 + .7, ne.position.z = ma.depth / -2 + .7, "Post Frame" == ma.frameType ? (tempIE.position.y = ma.height - 1.1, tempNE.position.y = ma.height - 1.1, tempIE.scale.isSceneLoaded = ma.width / 2 - .7, ne.scale.x = ma.width / 2 - .7, tempIE.scale.tempz = tempIE.scale.y, tempNE.scale.tempz = tempNE.scale.y, tempIE.position.isSceneLoaded = ma.width / -2 + .7, ne.position.x = ma.width / 2 - .7, tempIE.rotation.y = 0, tempNE.rotation.y = 0) : (tempIE.position.y = ma.height - 1.58, tempNE.position.y = ma.height - 1.58, tempIE.position.isSceneLoaded = ma.width / -2 + .7, ne.position.x = ma.width / 2 - .7, tempIE.rotation.y = Math.atan2(ma.roofPitch, 12), tempNE.rotation.y = Math.atan2(-ma.roofPitch, 12), tempIE.scale.isSceneLoaded = -tempIE.position.isSceneLoaded / Math.cos(ie.rotation.y), ne.scale.x = ne.position.x / Math.cos(tempNE.rotation.y), tempIE.scale.tempz = tempIE.scale.y, tempNE.scale.tempz = tempNE.scale.y), "Steel" == ma.ceiling2 ? (tempIE.material = Dt, ma.settings.orientCeilingPanelsToWidth ? tempIE.material.normalMap.repeat.set(tempIE.scale.tempz * tempJ, 1) : tempIE.material.normalMap.repeat.set(tempIE.scale.isSceneLoaded * tempJ, 1), tempNE.material = Dt, ma.settings.orientCeilingPanelsToWidth ? tempNE.material.normalMap.repeat.set(tempNE.scale.tempz * tempJ, 1) : tempNE.material.normalMap.repeat.set(tempNE.scale.isSceneLoaded * tempJ, 1)) : "2x2 Tile" == ma.ceiling2 && (tempIE.material = Mt, tempIE.material.map.repeat.set(tempIE.scale.isSceneLoaded / 2, ie.scale.y / 2), tempNE.material = Mt, tempNE.material.map.repeat.set(tempNE.scale.isSceneLoaded / 2, ne.scale.y / 2))), Za(ma.porchN, "tempN", "porch"), Za(ma.porchS, "S", "porch"), Za(ma.porchE, "orthographicCamera", "porch"), Za(ma.porchW, "W", "porch"), Za(ma.porchWrapNW, "NW", "porchWrap"), Za(ma.porchWrapNE, "NE", "porchWrap"), Za(ma.porchWrapSW, "SW", "porchWrap"), Za(ma.porchWrapSE, "SE", "porchWrap"), Za(ma.porchWrapHipNW, "NW", "porchWrapHip"), Za(ma.porchWrapHipNE, "NE", "porchWrapHip"), Za(ma.porchWrapHipSW, "SW", "porchWrapHip"), Za(ma.porchWrapHipSE, "SE", "porchWrapHip"), io(), Jo(), pa.sort(function(applyToControllers, setElementId) {
            return applyToControllers - setElementId
        }), pa.reverse(), gui.__folders.hasOwnProperty("Interior")) {
        for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
            var isRendererReady = gui.__folders.Interior.__controllers[applyToControllers];
            "mezzanineStartingBay" === isRendererReady.property && (isRendererReady.max(pa.length - 1), ma.mezzanineStartingBay > pa.length - 1 && (ma.mezzanineStartingBay = pa.length - 1), isRendererReady.updateDisplay()), "mezzanineBays" === isRendererReady.property && (isRendererReady.max(pa.length - ma.mezzanineStartingBay), ma.mezzanineBays > pa.length - ma.mezzanineStartingBay && (ma.mezzanineBays = pa.length - ma.mezzanineStartingBay), isRendererReady.updateDisplay()), "mezzanineDepth" === isRendererReady.property && (isRendererReady.max(ma.depth), ma.mezzanineDepth > ma.depth && (ma.mezzanineDepth = ma.depth), isRendererReady.updateDisplay())
        }
        for (let applyToControllers = 0; applyToControllers < gui.__folders.Interior.__controllers.length; applyToControllers++) {
            var tempX = gui.__folders.Interior.__controllers[applyToControllers];
            "mezzanineHeight" === tempX.property && (tempX.max(ma.height), ma.mezzanineHeight > ma.height && (ma.mezzanineHeight = ma.height - 1), tempX.updateDisplay())
        }
    }
    if (void 0 !== tempLA.getObjectByName("mezzanineParent") && tempLA.remove(tempLA.getObjectByName("mezzanineParent")), 0 < ma.mezzanineBays || 0 < ma.mezzanineDepth) {
        var viewportElement, perspectiveCamera = new THREE.Group,
            topControls = (perspectiveCamera.name = "mezzanineParent", tempLA.add(perspectiveCamera), "Post Frame" == ma.frameType || "Hybrid" == ma.frameType ? mainScene.getObjectByName("Mezzanine").material.color.setHex(12026452) : mainScene.getObjectByName("Mezzanine").material.color.setHex(7895160), (viewportElement = ma.useMezzanineDepth ? (ma.mezzanineBays = Math.floor(ma.mezzanineDepth / pa.spacingBetweenTrusses), -pa[0]) : (ma.mezzanineDepth = ma.mezzanineBays * pa.spacingBetweenTrusses, -pa[ma.mezzanineStartingBay - 1])) + ma.mezzanineDepth),
            tempU = (ma.mezzanineDepth == ma.depth && (topControls = pa[0]), ma.mezzanineDepth),
            tempN = (ma.mezzanineDepth == ma.depth && (tempU = -pa[pa.length - 1] + pa[0]), (setElementHidden = mainScene.getObjectByName("MezzanineWood").clone()).position.set(0, ma.mezzanineHeight, viewportElement), setElementHidden.rotation.y = Math.PI / 2, setElementHidden.scale.tempz = ma.width - .6, 1 == ma.mezzanineStartingBay && (setElementHidden.scale.tempz -= .3), ma.mezzanineStartingBay + ma.mezzanineBays == pa.length && (setElementHidden.scale.tempz -= .3), setElementHidden.scale.isSceneLoaded = 5 * tempU, setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), mainScene.getObjectByName("Mezzanine").clone());
        if (tempN.position.set(0, ma.mezzanineHeight - .04, viewportElement), tempN.rotation.y = Math.PI / 2, N.rotation.x = Math.PI / 2, tempN.scale.set(.25, 2, ma.width - .6), tempN.visible = !0, perspectiveCamera.add(tempN), (setElementHidden = tempN.clone()).position.set(0, ma.mezzanineHeight - .6, viewportElement), setElementHidden.rotation.y = Math.PI / 2, setElementHidden.rotation.x = Math.PI / 2, setElementHidden.scale.set(.25, 2, ma.width - .6), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), (setElementHidden = tempN.clone()).name = "Mezzanine-Truss-Top", setElementHidden.position.set(0, ma.mezzanineHeight - .04, topControls), setElementHidden.rotation.y = Math.PI / 2, setElementHidden.rotation.x = Math.PI / 2, setElementHidden.scale.set(.25, 2, ma.width - .6), "Post Frame" == ma.frameType && (setElementHidden.scale.isSceneLoaded = 3), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), "Post Frame" !== ma.frameType && ((setElementHidden = tempN.clone()).name = "Mezzanine-Truss-Bottom", setElementHidden.position.set(0, ma.mezzanineHeight - .6, topControls), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = Math.PI / 2, setElementHidden.scale.set(.25, 2, ma.width - .6), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden)), ma.useMezzanineDepth)
            for (let applyToControllers = 0; applyToControllers < ma.width / 3; applyToControllers++)(setElementHidden = sa.getObjectByName("MezzanineWood").clone()).position.set(1.5 * applyToControllers, ma.mezzanineHeight, (H + L) / 2), setElementHidden.rotation.tempz = Math.PI / 2, setElementHidden.scale.z = U, setElementHidden.scale.x = 3, setElementHidden.visible = !0, C.add(setElementHidden), (setElementHidden = sa.getObjectByName("MezzanineWood").clone()).position.set(-1.5 * applyToControllers, ma.mezzanineHeight, (H + L) / 2), setElementHidden.rotation.tempz = Math.PI / 2, setElementHidden.scale.tempz = tempU, setElementHidden.scale.isSceneLoaded = 3, setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden);
        for (let setElementId = ma.mezzanineStartingBay - 1; setElementId < ma.mezzanineBays + ma.mezzanineStartingBay - 1; setElementId++) {
            (setElementHidden = tempN.clone()).name = "Mezzanine-Truss-Top", setElementHidden.position.set(0, ma.mezzanineHeight - .04, -pa[setElementId + 1]), setElementHidden.rotation.y = Math.PI / 2, setElementHidden.rotation.x = Math.PI / 2, setElementHidden.scale.set(.25, 2, ma.width - .6), "Post Frame" == ma.frameType && (setElementHidden.scale.isSceneLoaded = 3), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), "Post Frame" !== ma.frameType && ((setElementHidden = tempN.clone()).name = "Mezzanine-Truss-Bottom", setElementHidden.position.set(0, ma.mezzanineHeight - .6, -pa[setElementId + 1]), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = Math.PI / 2, setElementHidden.scale.set(.25, 2, ma.width - .6), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden));
            for (var tempj = 0; tempj < ma.width / 3; tempj++)
                if (ma.useMezzanineDepth || ((setElementHidden = mainScene.getObjectByName("MezzanineWood").clone()).position.set(1.5 * tempj, ma.mezzanineHeight, -pa[setElementId + 1] + (pa[setElementId] - pa[setElementId + 1]) / -2), setElementHidden.rotation.z = Math.PI / 2, setElementHidden.rotation.y = 0, setElementHidden.scale.tempz = pa[setElementId] - pa[setElementId + 1] - .06, setElementHidden.scale.isSceneLoaded = 3, setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), (setElementHidden = mainScene.getObjectByName("MezzanineWood").clone()).position.set(-1.5 * tempj, ma.mezzanineHeight, -pa[setElementId + 1] + (pa[setElementId] - pa[setElementId + 1]) / -2), setElementHidden.rotation.z = Math.PI / 2, setElementHidden.rotation.y = 0, setElementHidden.scale.tempz = pa[setElementId] - pa[setElementId + 1] - .06, setElementHidden.scale.isSceneLoaded = 3, setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden)), "Post Frame" !== ma.frameType) {
                    let applyToControllers;
                    setElementId == ma.mezzanineStartingBay - 1 && ((setElementHidden = tempN.clone()).material.color.copy(Wa), setElementHidden.name = "Mezzanine-Webbing-Vertical", setElementHidden.position.set(1.5 * tempj + .1, ma.mezzanineHeight - .35, -pa[setElementId]), setElementHidden.scale.set(1, .5, .55), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = 0, C.add(setElementHidden), (setElementHidden = N.clone()).name = "Mezzanine-Webbing-Vertical", setElementHidden.position.set(-1.5 * j + .1, ma.mezzanineHeight - .35, -pa[setElementId]), setElementHidden.scale.set(1, .5, .55), setElementHidden.rotation.x = Math.PI / 2, setElementHidden.rotation.y = 0, perspectiveCamera.add(setElementHidden), 3 * (tempj + 1) < ma.width) && (applyToControllers = tempj % 2 == 0 ? 1 : -1, (setElementHidden = tempN.clone()).name = "Mezzanine-Webbing-Diagonal", setElementHidden.position.set(1.5 * tempj + .85, ma.mezzanineHeight - .35, -pa[setElementId]), setElementHidden.scale.set(.25, .5, 1.6), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = 1.23 * applyToControllers, C.add(setElementHidden), applyToControllers = j % 2 == 0 ? 1 : -1, (setElementHidden = N.clone()).name = "Mezzanine-Webbing-Diagonal", setElementHidden.position.set(-1.5 * j + .85, ma.mezzanineHeight - .35, -pa[setElementId]), setElementHidden.scale.set(.25, .5, 1.6), setElementHidden.rotation.x = Math.PI / 2, setElementHidden.rotation.y = 1.23 * applyToControllers, perspectiveCamera.add(setElementHidden)), (setElementHidden = tempN.clone()).name = "Mezzanine-Webbing-Vertical", setElementHidden.position.set(1.5 * tempj + .1, ma.mezzanineHeight - .35, -pa[setElementId + 1]), setElementHidden.scale.set(1, .5, .55), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = 0, C.add(setElementHidden), (setElementHidden = N.clone()).name = "Mezzanine-Webbing-Vertical", setElementHidden.position.set(-1.5 * j + .1, ma.mezzanineHeight - .35, -pa[setElementId + 1]), setElementHidden.scale.set(1, .5, .55), setElementHidden.rotation.x = Math.PI / 2, setElementHidden.rotation.y = 0, perspectiveCamera.add(setElementHidden), 3 * (tempj + 1) < ma.width && (applyToControllers = tempj % 2 == 0 ? 1 : -1, (setElementHidden = tempN.clone()).name = "Mezzanine-Webbing-Diagonal", setElementHidden.position.set(1.5 * tempj + .85, ma.mezzanineHeight - .35, -pa[setElementId + 1]), setElementHidden.scale.set(.25, .5, 1.6), setElementHidden.rotation.isSceneLoaded = Math.PI / 2, setElementHidden.rotation.y = 1.23 * applyToControllers, C.add(setElementHidden), applyToControllers = j % 2 == 0 ? 1 : -1, (setElementHidden = N.clone()).name = "Mezzanine-Webbing-Diagonal", setElementHidden.position.set(-1.5 * j + .85, ma.mezzanineHeight - .35, -pa[setElementId + 1]), setElementHidden.scale.set(.25, .5, 1.6), setElementHidden.rotation.x = Math.PI / 2, setElementHidden.rotation.y = 1.23 * applyToControllers, perspectiveCamera.add(setElementHidden))
                }
        }
        var applyToControllers;
        let setElementId = ma.width - .6,
            setElementClass = 0;
        if (ma.hasOwnProperty("mezzanineStairs") && "None" !== ma.mezzanineStairs && (setElementId -= 4, ma.mezzanineStairs.startsWith("Left") ? setElementClass = 2 : ma.mezzanineStairs.startsWith("Right") && (setElementClass = -2)), "Framed" == ma.mezzanineRailing) {
            (setElementHidden = tempN.clone()).position.set(setElementClass, ma.mezzanineHeight + 4, topControls - .15), setElementHidden.rotation.isSceneLoaded = THREE.Math.degToRad(0), setElementHidden.scale.set(1.5, 1.5, setElementId), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), (setElementHidden = tempN.clone()).position.set(setElementClass, ma.mezzanineHeight + 3, topControls - .15), setElementHidden.rotation.isSceneLoaded = THREE.Math.degToRad(-90), setElementHidden.scale.set(1.5, 1.5, setElementId), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), (setElementHidden = tempN.clone()).position.set(setElementClass, ma.mezzanineHeight + 2, topControls - .15), setElementHidden.rotation.isSceneLoaded = THREE.Math.degToRad(-90), setElementHidden.scale.set(1.5, 1.5, setElementId), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden), (setElementHidden = tempN.clone()).position.set(setElementClass, ma.mezzanineHeight + 1, topControls - .15), setElementHidden.rotation.isSceneLoaded = THREE.Math.degToRad(-90), setElementHidden.scale.set(1.5, 1.5, setElementId), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden);
            for (let applyToControllers = 0; applyToControllers < setElementId / 4; applyToControllers++) setElementHidden = N.clone(), ma.mezzanineStairs.startsWith("Right") ? setElementHidden.position.set(setElementId / 2 - setElementClass - 4 * applyToControllers, ma.mezzanineHeight + 2, topControls - .15) : setElementHidden.position.set(setElementClass - setElementId / 2 + 4 * applyToControllers, ma.mezzanineHeight + 2, topControls - .15), setElementHidden.rotation.y = THREE.Math.degToRad(0), setElementHidden.rotation.tempz = THREE.Math.degToRad(-90), setElementHidden.scale.set(1.5, 1.5, 4), setElementHidden.visible = !0, perspectiveCamera.add(setElementHidden)
        } else "Steel Covered" == ma.mezzanineRailing && (applyToControllers = new THREE.BoxGeometry(1, 1, 1), (newTexture = tempPE.clone()).needsUpdate = !0, (isSceneLoaded = new THREE.MeshPhongMaterial({
            normalMap: newTexture,
            color: 16777215,
            specular: 3947580,
            shininess: 40,
            side: THREE.DoubleSide
        })).normalMap = newTexture, (setElementHidden = new THREE.Mesh(applyToControllers, isSceneLoaded)).position.set(setElementClass, ma.mezzanineHeight + 2, topControls - .15), setElementHidden.scale.set(setElementId, 4, 4 / 12), perspectiveCamera.add(setElementHidden), isSceneLoaded.normalMap.repeat.set(setElementId * tempJ, 1));
        if (ma.hasOwnProperty("mezzanineStairs") && "Left Straight" == ma.mezzanineStairs) {
            (setElementHidden = mainScene.getObjectByName("Stairs").clone()).position.set(setElementClass - ma.width / 2 + .6, ma.mezzanineHeight, topControls), setElementHidden.visible = !0, setElementHidden.castShadow = !0, setElementHidden.receiveShadow = !1;
            for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers].clippingPlanes = [ut], setElementHidden.material[applyToControllers].clipIntersection = !0, setElementHidden.material[applyToControllers].clipShadows = !0, setElementHidden.material[applyToControllers].name.startsWith("StairsMetal") && ("Steel Covered" == ma.mezzanineRailing ? setElementHidden.material[applyToControllers].visible = !0 : setElementHidden.material[applyToControllers].visible = !1);
            perspectiveCamera.add(setElementHidden), ut.constant = topControls + ma.mezzanineHeight / 7 * 11 + .01, ut.normal.set(0, 0, -1)
        }
        if (ma.hasOwnProperty("mezzanineStairs") && "Right Straight" == ma.mezzanineStairs) {
            (setElementHidden = mainScene.getObjectByName("Stairs").clone()).position.set(ma.width / 2 + setElementClass - .6, ma.mezzanineHeight, topControls), setElementHidden.visible = !0, setElementHidden.castShadow = !0, setElementHidden.receiveShadow = !1;
            for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers].clippingPlanes = [ut], setElementHidden.material[applyToControllers].clipIntersection = !0, setElementHidden.material[applyToControllers].clipShadows = !0, setElementHidden.material[applyToControllers].name.startsWith("StairsMetal") && ("Steel Covered" == ma.mezzanineRailing ? setElementHidden.material[applyToControllers].visible = !0 : setElementHidden.material[applyToControllers].visible = !1);
            perspectiveCamera.add(setElementHidden), ut.constant = topControls + ma.mezzanineHeight / 7 * 11 + .01, ut.normal.set(0, 0, -1)
        }
        if (ma.hasOwnProperty("mezzanineStairs") && "Left Landing" == ma.mezzanineStairs) {
            (setElementHidden = mainScene.getObjectByName("Stairs-topControls").clone()).position.set(ma.width / -2 + .6, ma.mezzanineHeight, topControls), setElementHidden.visible = !0, setElementHidden.castShadow = !0, setElementHidden.receiveShadow = !1;
            for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers].clippingPlanes = [ut], setElementHidden.material[applyToControllers].clipIntersection = !0, setElementHidden.material[applyToControllers].clipShadows = !0, setElementHidden.material[applyToControllers].name.startsWith("StairsMetal") && ("Steel Covered" == ma.mezzanineRailing ? setElementHidden.material[applyToControllers].visible = !0 : setElementHidden.material[applyToControllers].visible = !1);
            perspectiveCamera.add(setElementHidden), ut.constant = ma.width / -2 + .6 + 4 + ma.mezzanineHeight / 7 * 11 + .01, ut.normal.set(-1, 0, 0)
        }
        if (ma.hasOwnProperty("mezzanineStairs") && "Right Landing" == ma.mezzanineStairs) {
            (setElementHidden = mainScene.getObjectByName("Stairs-isRendererReady").clone()).position.set(ma.width / 2 - .6, ma.mezzanineHeight, topControls), setElementHidden.visible = !0, setElementHidden.castShadow = !0, setElementHidden.receiveShadow = !1;
            for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers].clippingPlanes = [ut], setElementHidden.material[applyToControllers].clipIntersection = !0, setElementHidden.material[applyToControllers].clipShadows = !0, setElementHidden.material[applyToControllers].name.startsWith("StairsMetal") && ("Steel Covered" == ma.mezzanineRailing ? setElementHidden.material[applyToControllers].visible = !0 : setElementHidden.material[applyToControllers].visible = !1);
            perspectiveCamera.add(setElementHidden), ut.constant = ma.width / -2 + .6 + 4 + ma.mezzanineHeight / 7 * 11 + .01, ut.normal.set(1, 0, 0)
        }
    }
    mainScene.traverse(function(i) {
        if ("scale-driveway-clone" === i.name) {
            let applyToControllers = 0,
                setElementId = 0,
                setElementClass = 0,
                setElementHidden = 0;
            ma.leanTo2 && (applyToControllers = ma.leanTo2Depth), ma.leanTo4 && (setElementId = ma.leanTo4Depth), ma.leanTo1 && (setElementClass = ma.leanTo1Depth), ma.leanTo3 && (setElementHidden = ma.leanTo3Depth), 0 === i.rotation.y ? i.position.tempz = ma.depth / 2 + setElementClass : i.rotation.y === Math.PI / -2 ? i.position.isSceneLoaded = ma.width / -2 - applyToControllers : i.rotation.y === Math.PI ? i.position.z = ma.depth / -2 - setElementHidden : i.rotation.y === Math.PI / 2 && (i.position.x = ma.width / 2 + setElementId)
        }
        if (i instanceof THREE.Mesh) {
            var applyToControllers = 0;
            if ("building" === i.name) {
                "Asymmetrical" === ma.roofType ? i.morphTargetInfluences[i.morphTargetDictionary.right] = ma.asymmetrical / 100 : i.morphTargetInfluences[i.morphTargetDictionary.right] = 0;
                var setElementId, setElementClass;
                for (ma.leanTo2 && ma.leanTo2Depth, ma.leanTo4 && ma.leanTo4Depth, ma.leanTo1 && ma.leanTo1Depth, ma.leanTo3 && ma.leanTo3Depth, tempGE.scale.set(ma.width, ma.peakHeight(), ma.depth), i.morphTargetInfluences[i.morphTargetDictionary.width] = (ma.width - 1) / 100, i.morphTargetInfluences[i.morphTargetDictionary.depth] = (ma.depth - 1) / 1e3, i.morphTargetInfluences[i.morphTargetDictionary.height] != (ma.height - 1) / 100 && (i.morphTargetInfluences[i.morphTargetDictionary.height] = (ma.height - 1) / 100), applyToControllers = 0; applyToControllers < i.material.length; applyToControllers++) "BuildingWallsWidthLeftFront" !== i.material[applyToControllers].name && "BuildingWallsWidthLeftBack" !== i.material[applyToControllers].name && "BuildingWallsWidthLeftFront-Interior" !== i.material[applyToControllers].name && "BuildingWallsWidthLeftBack-Interior" !== i.material[applyToControllers].name || (setElementClass = "Asymmetrical" === ma.roofType ? (setElementId = ma.width + 2 * ma.asymmetrical, ma.asymmetrical) : (setElementId = ma.width, 0), ma.hasOwnProperty("boardAndBattenWoodenBarnSiding") && ma.boardAndBattenWoodenBarnSiding && (i.material[applyToControllers].map.repeat.set(setElementId / 3, 2), i.material[applyToControllers].map.offset.isSceneLoaded = (setElementId + setElementClass) * tempJ + .5), i.material[applyToControllers].normalMap.repeat.set(setElementId * tempJ, 1), i.material[applyToControllers].normalMap.offset.isSceneLoaded = (setElementId + setElementClass) * tempJ + .5), "BuildingWallsWidthRightFront" !== i.material[applyToControllers].name && "BuildingWallsWidthRightBack" !== i.material[applyToControllers].name && "BuildingWallsWidthRightFront-Interior" !== i.material[applyToControllers].name && "BuildingWallsWidthRightBack-Interior" !== i.material[applyToControllers].name || (setElementClass = "Asymmetrical" === ma.roofType ? (setElementId = ma.width - 2 * ma.asymmetrical, ma.asymmetrical) : (setElementId = ma.width, 0), i.material[applyToControllers].normalMap.repeat.set(setElementId * tempJ, 1), i.material[applyToControllers].normalMap.offset.isSceneLoaded = (setElementId + setElementClass) * tempJ + .5), "BuildingWallsWidth" !== i.material[applyToControllers].name && "BuildingWainscot1" !== i.material[applyToControllers].name && "BuildingWainscot3" !== i.material[applyToControllers].name || (i.material[applyToControllers].normalMap.repeat.set(ma.width * tempJ, 1), i.material[applyToControllers].normalMap.offset.isSceneLoaded = ma.width * tempJ + .5), "BuildingWallsDepthL" !== i.material[applyToControllers].name && "BuildingWallsDepthR" !== i.material[applyToControllers].name && "BuildingWallsDepthL-Interior" !== i.material[applyToControllers].name && "BuildingWallsDepthR-Interior" !== i.material[applyToControllers].name && "BuildingWainscot2" !== i.material[applyToControllers].name && "BuildingWainscot4" !== i.material[applyToControllers].name || (i.material[applyToControllers].normalMap.repeat.set(ma.depth * tempJ, 1), i.material[applyToControllers].normalMap.offset.isSceneLoaded = ma.depth * tempJ + .5), "BuildingCeilingLeft-Interior" !== i.material[applyToControllers].name && "BuildingCeilingRight-Interior" !== i.material[applyToControllers].name || (i.material[applyToControllers].normalMap.repeat.set(ma.depth * tempJ, 1), i.material[applyToControllers].normalMap.offset.isSceneLoaded = ma.depth * tempJ + .5)
            }
            if ("roofL" === i.name || "roofR" === i.name || "roofEaveL" === i.name || "roofEaveR" === i.name)
                for (i.morphTargetInfluences[i.morphTargetDictionary.depth] = (ma.depth + ma.gableFront + ma.gableBack - 1) / 1e3, i.position.z = ma.gableFront / 2 - ma.gableBack / 2, applyToControllers = 0; applyToControllers < i.material.length; applyToControllers++) "BuildingRoof" !== i.material[applyToControllers].name && "BuildingSoffit" !== i.material[applyToControllers].name || (i.material[applyToControllers].normalMap.repeat.set((ma.depth + ma.gableFront + ma.gableBack) * J, 1), i.material[applyToControllers].normalMap.offset.x = (ma.depth + ma.gableFront / 2 - 6 * ma.gableBack) * tempJ + .5);
            if ("leanTo1" === i.name || "leanTo2" === i.name || "leanTo3" === i.name || "leanTo4" === i.name) {
                let setElementHidden = i.name.replace(/\D/g, ""),
                    applyToControllers = 0,
                    setElementId = 0;
                "leanTo1" === i.name || "leanTo3" === i.name ? applyToControllers = ma[i.name + "CutL"] / 2 - ma[i.name + "CutR"] / 2 : setElementId = ma[i.name + "CutL"] / 2 - ma[i.name + "CutR"] / 2, "leanTo1" === i.name && (i.position.set(applyToControllers, 0, ma.depth / 2), sa.getObjectByName(i.name + "Roof").position.set(applyToControllers, 0, ma.depth / 2)), "leanTo2" === i.name && (i.position.set(ma.width / -2, 0, setElementId), sa.getObjectByName(i.name + "Roof").position.set(ma.width / -2, 0, setElementId)), "leanTo3" === i.name && (i.position.set(-applyToControllers, 0, ma.depth / -2), sa.getObjectByName(i.name + "Roof").position.set(-applyToControllers, 0, ma.depth / -2)), "leanTo4" === i.name && (i.position.set(ma.width / 2, 0, -setElementId), sa.getObjectByName(i.name + "Roof").position.set(ma.width / 2, 0, -setElementId)), "leanTo1" === i.name && ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && mainScene.getObjectByName("leanTo1BoundingBox").position.set(applyToControllers, 0, ma.depth / 2), "leanTo2" === i.name && ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && sa.getObjectByName("leanTo2BoundingBox").position.set(ma.width / -2, 0, setElementId), "leanTo3" === i.name && ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && mainScene.getObjectByName("leanTo3BoundingBox").position.set(-applyToControllers, 0, ma.depth / -2), "leanTo4" === i.name && ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && sa.getObjectByName("leanTo4BoundingBox").position.set(ma.width / 2, 0, -setElementId), ma.settings.roundAllButMinimumRoofPitch && ma["leanTo" + setElementHidden + "Pitch"] < ma.settings.roofPitchMin && (ma["leanTo" + setElementHidden + "Pitch"] = ma.settings.roofPitchMin), ma.settings.roundAllButMinimumRoofPitch && (ma["leanTo" + setElementHidden + "Pitch"] > ma.settings.roofPitchMin || ma["leanTo" + setElementHidden + "Pitch"] < -ma.settings.roofPitchMin) && (ma["leanTo" + setElementHidden + "Pitch"] = Math.round(ma["leanTo" + setElementHidden + "Pitch"])), (1 == setElementHidden || 3 == setElementHidden) && ma["leanTo" + setElementHidden + "Height"] > ma.height && (ma["leanTo" + setElementHidden + "Height"] = ma.height), ma.leanTo2Height > ma.wallHeightL() && (ma["leanTo" + setElementHidden + "Height"] = ma.wallHeightL()), ma.leanTo4Height > ma.wallHeightR() && (ma["leanTo" + setElementHidden + "Height"] = ma.wallHeightR()), 1 == setElementHidden || 3 == setElementHidden ? ma["leanTo" + setElementHidden + "Length"] > ma.width && (ma["leanTo" + setElementHidden + "Length"] = ma.width) : 2 != setElementHidden && 4 != setElementHidden || ma["leanTo" + setElementHidden + "Length"] > ma.depth && (ma["leanTo" + setElementHidden + "Length"] = ma.depth);
                var dimensionsArray = ma["leanTo" + setElementHidden + "Depth"] * ma["leanTo" + setElementHidden + "Pitch"] / 12,
                    r = Math.atan(ma["leanTo" + setElementHidden + "Depth"] / dimensionsArray),
                    ColorOption = Math.sqrt(Math.pow(dimensionsArray, 2) + Math.pow(ma["leanTo" + setElementHidden + "Depth"], 2)),
                    renderer = (i.morphTargetInfluences[i.morphTargetDictionary.roofPeak] = dimensionsArray / 100, sa.getObjectByName("leanTo" + setElementHidden + "Roof").position.y = ma["leanTo" + setElementHidden + "Height"] + .1, 1 == setElementHidden && sa.getObjectByName("leanTo" + setElementHidden + "Roof").rotation.set(-r, Math.PI / -2, Math.PI / -2), 2 == setElementHidden && sa.getObjectByName("leanTo" + setElementHidden + "Roof").rotation.set(0, Math.PI, r - Math.PI / 2), 3 == setElementHidden && mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").rotation.set(r - Math.PI, Math.PI / 2, Math.PI / 2), 4 == setElementHidden && mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").rotation.set(0, 0, Math.PI / -2 + r), 2 == setElementHidden && (sa.getObjectByName("leanTo" + setElementHidden + "Roof").position.z = setElementId + (ma.gableFront - ma.gableBack) / 2), 4 == setElementHidden && (mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").position.tempz = -setElementId + (ma.gableFront - ma.gableBack) / 2), 2 == setElementHidden && (sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.width] = (ColorOption - .5) / 50, ma.settings.leantoRoofOverhangsFollowMainRoof) && (mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.width] += ma.eaveL / 50), 4 == setElementHidden && (sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.width] = (ColorOption - .5) / 50, ma.settings.leantoRoofOverhangsFollowMainRoof) && (mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.width] += ma.eaveR / 50), 2 == setElementHidden || 4 == setElementHidden ? (sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.depth] = (ma["leanTo" + setElementHidden + "Length"] - 1) / 1e3, ma.settings.leantoRoofOverhangsFollowMainRoof && (mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.depth] += (ma.gableFront + ma.gableBack) / 1e3)) : (sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[sa.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.width] = (ColorOption - .5) / 50, mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetInfluences[mainScene.getObjectByName("leanTo" + setElementHidden + "Roof").morphTargetDictionary.depth] = (ma["leanTo" + setElementHidden + "Length"] - 1) / 1e3), i.morphTargetInfluences[i.morphTargetDictionary.depth] = (ma["leanTo" + setElementHidden + "Length"] - 1) / 1e3, i.morphTargetInfluences[i.morphTargetDictionary.width] = (ma["leanTo" + setElementHidden + "Depth"] - .5) / 50, i.morphTargetInfluences[i.morphTargetDictionary.height] = (ma["leanTo" + setElementHidden + "Height"] - 1 - n) / 100, "leanTo1" === i.name && ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && mainScene.getObjectByName("leanTo1BoundingBox").scale.set(ma["leanTo" + setElementHidden + "Length"], ma["leanTo" + setElementHidden + "Height"], ma["leanTo" + setElementHidden + "Depth"]), "leanTo2" === i.name && ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && mainScene.getObjectByName("leanTo2BoundingBox").scale.set(ma["leanTo" + setElementHidden + "Length"], ma["leanTo" + setElementHidden + "Height"], ma["leanTo" + setElementHidden + "Depth"]), "leanTo3" === i.name && ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && mainScene.getObjectByName("leanTo3BoundingBox").scale.set(ma["leanTo" + setElementHidden + "Length"], ma["leanTo" + setElementHidden + "Height"], ma["leanTo" + setElementHidden + "Depth"]), "leanTo4" === i.name && ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && mainScene.getObjectByName("leanTo4BoundingBox").scale.set(ma["leanTo" + setElementHidden + "Length"], ma["leanTo" + setElementHidden + "Height"], ma["leanTo" + setElementHidden + "Depth"]), mainScene.getObjectByName("leanTo" + setElementHidden).material);
                let setElementClass = 0;
                for (let applyToControllers = 0; applyToControllers < renderer.length; applyToControllers++) "LeantoWallsDepth" !== renderer[applyToControllers].name && "LeantoWainscot2" !== renderer[applyToControllers].name || (setElementClass = ma["leanTo" + setElementHidden + "Length"], renderer[applyToControllers].normalMap.repeat.set(setElementClass * tempJ, 1), renderer[applyToControllers].normalMap.offset.isSceneLoaded = setElementClass + .5), "LeantoWallsWidth" !== renderer[applyToControllers].name && "LeantoWainscot1" !== renderer[applyToControllers].name && "LeantoWainscot3" !== renderer[applyToControllers].name || (setElementClass = ma["leanTo" + setElementHidden + "Depth"], renderer[applyToControllers].normalMap.repeat.set(24 * setElementClass / 9, 1), renderer[applyToControllers].normalMap.offset.x = 24 * setElementClass / 9 + .5);
                if (ma.leanTo2 && ma.leanTo2Height == ma.wallHeightL() && ma.leanTo2Length == ma.depth) mainScene.traverse(function(setElementId) {
                    if (setElementId instanceof THREE.Mesh && "leanTo2Roof" === setElementId.name)
                        for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingTrim-RoofPivot" !== setElementId.material[applyToControllers].name && "BuildingRidgeCap" !== setElementId.material[applyToControllers].name || (setElementId.material[applyToControllers].visible = !1);
                    for (let applyToControllers = 0; applyToControllers < tempDA.material.length; applyToControllers++) "BuildingTrim-RoofEdge" === tempDA.material[applyToControllers].name && (tempDA.material[applyToControllers].visible = !1)
                });
                else
                    for (let applyToControllers = 0; applyToControllers < tempDA.material.length; applyToControllers++) ma.hideWalls <= 1 && "BuildingTrim-RoofEdge" === tempDA.material[applyToControllers].name && (tempDA.material[applyToControllers].visible = !0);
                if (ma.leanTo4 && ma.leanTo4Height == ma.wallHeightR() && ma.leanTo4Length == ma.depth) mainScene.traverse(function(setElementId) {
                    if (setElementId instanceof THREE.Mesh && "leanTo4Roof" === setElementId.name)
                        for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingTrim-RoofPivot" !== setElementId.material[applyToControllers].name && "BuildingRidgeCap" !== setElementId.material[applyToControllers].name || (setElementId.material[applyToControllers].visible = !1);
                    for (let applyToControllers = 0; applyToControllers < tempCA.material.length; applyToControllers++) "BuildingTrim-RoofEdge" === tempCA.material[applyToControllers].name && (tempCA.material[applyToControllers].visible = !1)
                });
                else
                    for (let applyToControllers = 0; applyToControllers < tempCA.material.length; applyToControllers++) ma.hideWalls <= 1 && "BuildingTrim-RoofEdge" === tempCA.material[applyToControllers].name && (tempCA.material[applyToControllers].visible = !0);
                if (renderer = mainScene.getObjectByName("building").material, ma["leanTo" + setElementHidden] && ma["leanTo" + setElementHidden + "Enclosed"] && "Fully Enclosed" == ma["leanTo" + setElementHidden + "Walls"] && ((1 == setElementHidden || 3 == setElementHidden) && ma["leanTo" + setElementHidden + "Length"] == ma.width || (2 == setElementHidden || 4 == setElementHidden) && ma["leanTo" + setElementHidden + "Length"] == ma.depth))
                    if (ma["leanTo" + setElementHidden + "Height"] == ma.wallHeightL() && 2 == setElementHidden || ma["leanTo" + setElementHidden + "Height"] == ma.wallHeightR() && 4 == setElementHidden)
                        for (let applyToControllers = 0; applyToControllers < renderer.length; applyToControllers++) 2 != setElementHidden || "BuildingWallsDepthL" !== renderer[applyToControllers].name && "BuildingWallsDepthL-Interior" !== renderer[applyToControllers].name || (renderer[applyToControllers].visible = !1), 4 != setElementHidden || "BuildingWallsDepthR" !== renderer[applyToControllers].name && "BuildingWallsDepthR-Interior" !== renderer[applyToControllers].name || (renderer[applyToControllers].visible = !1), renderer[applyToControllers].name === "BuildingTrim" + setElementHidden && (renderer[applyToControllers].visible = !1), setElementHidden - 1 == 0 ? "BuildingTrim4" === renderer[applyToControllers].name && (renderer[applyToControllers].visible = !1) : renderer[applyToControllers].name === "BuildingTrim" + (setElementHidden - 1) && (renderer[applyToControllers].visible = !1);
                    else {
                        let applyToControllers, setElementId, setElementClass;
                        setElementClass = 1 == setElementHidden ? (applyToControllers = +setElementHidden + 1, setElementId = +setElementHidden + 3, ma.depth) : 4 == setElementHidden ? (applyToControllers = +setElementHidden - 3, setElementId = +setElementHidden - 1, ma.depth) : (applyToControllers = +setElementHidden + 1, setElementId = +setElementHidden - 1, ma.width), currentCamera[setElementId] = Math.max(currentCamera[setElementId], ma["leanTo" + setElementHidden + "Height"]), ma["leanTo" + setElementId] && ma["leanTo" + setElementId + "Length"] == setElementClass && (currentCamera[setElementId] = Math.max(currentCamera[setElementId], ma["leanTo" + setElementId + "Height"])), currentCamera[setElementHidden] = Math.max(currentCamera[setElementHidden], ma["leanTo" + setElementHidden + "Height"]), ma["leanTo" + applyToControllers] && ma["leanTo" + applyToControllers + "Length"] == setElementClass && (currentCamera[setElementHidden] = Math.max(currentCamera[setElementHidden], ma["leanTo" + applyToControllers + "Height"]))
                    }
            }
            if ((i.name.startsWith("window") || i.name.startsWith("walkDoor") || i.name.startsWith("garage") || i.name.startsWith("mansard")) && _a.includes(i.getObjectByName("itemSelectionBox"))) {
                let setElementId = new THREE.Raycaster;
                r = new THREE.Vector3, ColorOption = new THREE.Vector3, dimensionsArray = (i.getWorldDirection(ColorOption), r.copy(i.position).add(ColorOption.multiplyScalar(200)), new THREE.Vector3), ColorOption = i.getWorldDirection(dimensionsArray).multiply(new THREE.Vector3(-1, 1, -1));
                setElementId.set(r, ColorOption), ma.hasOwnProperty("perimeterWalls") && i.morphTargetDictionary.hasOwnProperty("thickness") && ("None" !== ma.perimeterWalls || ma.hasOwnProperty("perimeterWalls2") && "None" !== ma.perimeterWalls2 ? i.morphTargetInfluences[i.morphTargetDictionary.thickness] = .5 : i.morphTargetInfluences[i.morphTargetDictionary.thickness] = 0), setTimeout(function() {
                    var applyToControllers = setElementId.intersectObjects($setElementClass, !0);
                    0 < applyToControllers.length && applyToControllers[0].object.name.endsWith("BoundingBox") ? i.position.copy(applyToControllers[0].point) : (ma[i.name.replace("-clone", "") + "Qty"]--, mainScene.remove(i)), shouldAutoRotate = !0
                }, 25)
            }
        }
    }), Ya(), ao(), go(), uo(), eo(), to(), wi(We), shouldAutoRotate = !0
}

function Za(controls, c, d, tempP) {
    controls = controls || !1, c = c || !1, d = d || !1, tempP = tempP || !1;
    let camera, tempG2 = 0,
        tempU2 = 0,
        tempT = 0,
        y = 0,
        tempB = (ma.leanTo2 && ma.leanTo2Length == ma.depth && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && (tempG2 = ma.leanTo2Depth), ma.leanTo4 && ma.leanTo4Length == ma.depth && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && (tempU2 = ma.leanTo4Depth), ma.leanTo1 && ma.leanTo1Length == ma.width && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && (tempT = ma.leanTo1Depth), ma.leanTo3 && ma.leanTo3Length == ma.width && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && (y = ma.leanTo3Depth), 0),
        tempF2 = 0,
        tempW = 0;
    if (controls) {
        "NW" == c && (tempB = ma.width / 2 + u, f = ma.depth / 2 + tempT), "NE" == c && (tempB = ma.width / -2 - g, f = ma.depth / 2 + tempT, tempW = Math.PI / -2), "SW" == c && (tempB = ma.width / 2 + u, f = ma.depth / -2 - y, tempW = Math.PI / 2), "SE" == c && (tempB = ma.width / -2 - g, f = ma.depth / -2 - y, tempW = Math.PI), "tempN" == c && (tempB = !1, tempF2 = ma.depth / 2 + T), "S" == c && (b = !1, f = ma.depth / -2 - y, tempW = Math.PI), "orthographicCamera" == c && (tempB = ma.width / -2 - g, f = !1, w = Math.PI / -2), "W" == c && (tempB = ma.width / 2 + u, f = !1, w = Math.PI / 2);
        let applyToControllers = 4,
            setElementId = 10;
        "S" == c || "tempN" == c ? setElementId = ma.width : "orthographicCamera" != c && "W" != c || (setElementId = ma.depth);
        controls = ma.height;
        let setElementClass = !1;
        let setElementHidden = 0;
        let i = 0;
        if (tempLA.getObjectByName(d + c + "-clone")) camera = tempLA.getObjectByName(d + c + "-clone"), tempB && (camera.position.isSceneLoaded = tempB), tempF2 && (camera.position.tempz = tempF2), camera.visible = !0, Ja(d + c + "-clone");
        else if (tempLA.getObjectByName(d)) {
            if ((camera = tempLA.getObjectByName(d).deepClone()).name = d + c + "-clone", camera.visible = !0, camera.castShadow = !0, Xo(camera), tempB && (camera.position.isSceneLoaded = tempB), tempF2 && (camera.position.tempz = tempF2), camera.rotation.y = tempW, tempLA.add(camera), camera.morphTargetInfluences[camera.morphTargetDictionary.porchDepth] = -4, setElementHidden = (applyToControllers - 3.5) / 12 * 6, camera.morphTargetInfluences[camera.morphTargetDictionary.slope] = setElementHidden, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = controls - 13.5 - setElementHidden, ma.allowLeanToCeilingHeight ? (camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = ma.height - 10 - 1.5, ma.allowLeanToCeilingHeight && ma.height < 10.5 && (camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = ma.height - 10 - 6 * applyToControllers / 12)) : (i = controls - 6 * applyToControllers / 12 - .25, camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = i - 10 - 4 / 12), camera.morphTargetInfluences[camera.morphTargetDictionary.Overhang] = 0, "S" != c && "tempN" != c && "orthographicCamera" != c && "W" != c || (camera.morphTargetInfluences[camera.morphTargetDictionary.width] = setElementId - 10), !ma.settings.woodenPorchPosts)
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !1), "PorchPostsMetal" === camera.material[applyToControllers].name && camera.material[applyToControllers].color.copy(Wa);
            if (ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") && ma.settings.showPorchPostsOnEndwallsOnly) {
                if ("orthographicCamera" == c || "W" == c)
                    for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" !== camera.material[applyToControllers].name && "PorchPostsMetal" !== camera.material[applyToControllers].name || (camera.material[applyToControllers].visible = !1);
                "NW" != c && "SE" != c || console.log(camera), "NE" != c && "SW" != c || console.log(camera)
            }
            Ja(d + c + "-clone");
            for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" === camera.material[applyToControllers].name && (camera.material[applyToControllers].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma[ma.settings.wrappedPorchPostColorMatches]).map(applyToControllers => applyToControllers.hex)), camera.material[applyToControllers].specular.setHex(3947580), camera.material[applyToControllers].shininess.value = 40)
        }
        if ("object" == typeof tempP) {
            var controls = tempP.position.split(","),
                controls = (camera.position.isSceneLoaded = parseFloat(controls[0]), camera.position.tempz = parseFloat(controls[2]), tempP.rotation.split(",")),
                controls = (camera.rotation.isSceneLoaded = parseFloat(controls[0]), camera.rotation.y = parseFloat(controls[1]), camera.rotation.tempz = parseFloat(controls[2]), tempP.scale.split(",")),
                tempV2 = parseFloat(controls[0]),
                orthographicCamera = (setElementId = tempV2, parseFloat(controls[1])),
                controls = parseFloat(controls[2]),
                orbitControls = parseFloat(tempP.porchDepth);
            if (camera.userData.porchDepth = orbitControls, i = parseFloat(tempP.ceilingHeight), camera.userData.ceilingHeight = i, tempP.hasOwnProperty("porchPitch") && (applyToControllers = parseFloat(tempP.porchPitch), camera.userData.porchPitch = applyToControllers), tempP.hasOwnProperty("concrete") && (setElementClass = "1" == tempP.concrete, camera.userData.concrete = setElementClass), setElementHidden = (applyToControllers - 3.5) / 12 * M, camera.morphTargetInfluences[camera.morphTargetDictionary.slope] = setElementHidden, camera.morphTargetInfluences[camera.morphTargetDictionary.width] = v - 10, "NW" != c && "NE" != c && "SW" != c && "SE" != c || (camera.morphTargetInfluences[camera.morphTargetDictionary.depth] = controls - 10), camera.morphTargetInfluences[camera.morphTargetDictionary.height] = E - 13.5 - setElementHidden, camera.morphTargetInfluences[camera.morphTargetDictionary.porchDepth] = M - 10, ma.allowLeanToCeilingHeight ? (camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = ma.height - 10 - 1.5, ma.allowLeanToCeilingHeight && ma.height < 10.5 && (camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = ma.height - 10 - M * applyToControllers / 12)) : camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] = i - 10 - 4 / 12, camera.morphTargetInfluences[camera.morphTargetDictionary.Overhang] = p.porchOverhang / 12, "1" == tempP.postMiter && (camera.morphTargetInfluences[camera.morphTargetDictionary.miters] = 1), "1" == tempP.postWrap)
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" === camera.material[applyToControllers].name && (camera.material[applyToControllers].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma[ma.settings.wrappedPorchPostColorMatches]).map(applyToControllers => applyToControllers.hex)), camera.material[applyToControllers].specular.setHex(3947580), camera.material[applyToControllers].shininess.value = 40);
            if (tempP.hasOwnProperty("posts")) {
                let setElementId = !1;
                "1" == tempP.posts && (setElementId = !0);
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" !== camera.material[applyToControllers].name && "PorchPostsMetal" !== camera.material[applyToControllers].name || !ma.settings.woodenPorchPosts && "PorchPostsMetal" !== camera.material[applyToControllers].name || (camera.material[applyToControllers].visible = setElementId)
            }
            Ja(d + c + "-clone")
        }
        camera.userData.porchSide = c, camera.userData.masterObjectName = d, camera.userData.name = camera.name, camera.userData.position = {
            isSceneLoaded: camera.position.isSceneLoaded,
            y: camera.position.y,
            tempz: camera.position.tempz
        }, "tempN" == c && (camera.userData.toBuildingCenter = camera.position.isSceneLoaded), "S" == c && (camera.userData.toBuildingCenter = -camera.position.isSceneLoaded), "orthographicCamera" == c && (camera.userData.toBuildingCenter = -camera.position.tempz), "W" == c && (camera.userData.toBuildingCenter = camera.position.tempz), camera.userData.rotation = tempW, camera.name.startsWith("porchWrapHip") ? camera.userData.width = camera.morphTargetInfluences[camera.morphTargetDictionary.width] + (camera.morphTargetInfluences[camera.morphTargetDictionary.porchDepth] + 10) : camera.userData.width = camera.morphTargetInfluences[camera.morphTargetDictionary.width] + 10, camera.userData.height = camera.morphTargetInfluences[camera.morphTargetDictionary.height] + 13.5, camera.userData.porchPitch = applyToControllers, "NW" != c && "NE" != c && "SW" != c && "SE" != c || (camera.name.startsWith("porchWrapHip") ? camera.userData.depth = camera.morphTargetInfluences[camera.morphTargetDictionary.depth] + (camera.morphTargetInfluences[camera.morphTargetDictionary.porchDepth] + 10) : camera.userData.depth = camera.morphTargetInfluences[camera.morphTargetDictionary.depth] + 10), camera.userData.porchDepth = camera.morphTargetInfluences[camera.morphTargetDictionary.porchDepth] + 10, camera.userData.postMiter = !!parseInt(camera.morphTargetInfluences[camera.morphTargetDictionary.miters]);
        let dimensionsArray = !1,
            r = !0,
            ColorOption = setElementClass,
            renderer = (camera.userData.hasOwnProperty("concrete") && (ColorOption = camera.userData.concrete), camera.getObjectByName("concrete"));
        if (renderer) renderer.visible = ColorOption, renderer.scale.isSceneLoaded = camera.userData.width, renderer.scale.tempz = camera.userData.porchDepth, "NW" != c && "NE" != c && "SW" != c && "SE" != c || (renderer.scale.isSceneLoaded = camera.userData.width + camera.userData.porchDepth, renderer.scale.tempz = camera.userData.depth + camera.userData.porchDepth, renderer.position.isSceneLoaded = (camera.userData.width + camera.userData.porchDepth) / 2 - camera.userData.width, renderer.position.z = (camera.userData.depth + camera.userData.porchDepth) / 2 - camera.userData.depth);
        else {
            let applyToControllers = .5;
            "NW" != c && "NE" != c && "SW" != c && "SE" != c || (applyToControllers = 0);
            tempV2 = new THREE.BoxGeometry(1, .04, 1), controls = (tempV2.applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, applyToControllers)), A + "images/building/concrete.jpg"), orthographicCamera = (loader = new THREE.TextureLoader).load(controls), orbitControls = (orthographicCamera.anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), orthographicCamera.wrapS = THREE.RepeatWrapping, orthographicCamera.wrapT = THREE.RepeatWrapping, new THREE.MeshPhongMaterial({
                color: "white",
                name: "foundation-Material",
                map: orthographicCamera,
                bumpMap: orthographicCamera,
                bumpScale: .04,
                specularMap: orthographicCamera
            }));
            (renderer = new THREE.Mesh(tempV2, orbitControls)).name = "concrete", renderer.visible = ColorOption, renderer.receiveShadow = !0, renderer.scale.isSceneLoaded = camera.userData.width, renderer.scale.tempz = camera.userData.porchDepth, "NW" != c && "NE" != c && "SW" != c && "SE" != c || (renderer.scale.isSceneLoaded = camera.userData.width + camera.userData.porchDepth, renderer.scale.tempz = camera.userData.depth + camera.userData.porchDepth, renderer.position.isSceneLoaded = (camera.userData.width + camera.userData.porchDepth) / 2 - camera.userData.width, renderer.position.z = (camera.userData.depth + camera.userData.porchDepth) / 2 - camera.userData.depth), camera.add(renderer)
        }
        for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "PorchPosts" === camera.material[applyToControllers].name && 40 == camera.material[applyToControllers].shininess.value && (dimensionsArray = !0), "PorchPostsMetal" === camera.material[applyToControllers].name && (r = camera.material[applyToControllers].visible);
        camera.userData.postWrap = dimensionsArray, camera.userData.posts = r, camera.userData.concrete = ColorOption, camera.userData.porchPitch = applyToControllers, camera.userData.porchOverhang = camera.morphTargetInfluences[camera.morphTargetDictionary.Overhang], camera.userData.ceilingHeight = camera.morphTargetInfluences[camera.morphTargetDictionary.ceilingHeight] + 10, camera.userData.scale = {
            isSceneLoaded: camera.userData.width,
            y: camera.userData.height,
            tempz: camera.userData.porchDepth
        }, Ka(camera), Yo(camera)
    } else tempLA.getObjectByName(d + c + "-clone") && (tempLA.getObjectByName(d + c + "-clone").visible = !1), Ja(d + c + "-clone", !0)
}

function Ka(setElementHidden) {
    setElementHidden = setElementHidden || !1;
    for (let setElementClass = 0; setElementClass < setElementHidden.material.length; setElementClass++) {
        let applyToControllers = (setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] + 10) * tempJ;
        var i = (setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.porchDepth] + 10) * tempJ;
        let setElementId = 0;
        "porchWrapHip" === setElementHidden.name.substring(0, 12) ? (applyToControllers = setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] * tempJ, setElementId = setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.depth] * tempJ, "BuildingRoofWidth" !== setElementHidden.material[setElementClass].name && "BuildingWallsWidth" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(applyToControllers, 1), "BuildingRoofDepth" !== setElementHidden.material[setElementClass].name && "BuildingWallsDepth" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(setElementId, 1), "BuildingRoof" !== setElementHidden.material[setElementClass].name && "BuildingWalls" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(i, 1)) : "porchWrap" === setElementHidden.name.substring(0, 9) ? (setElementId = (setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.depth] + 10) * tempJ, "BuildingRoofWidth" !== setElementHidden.material[setElementClass].name && "BuildingWallsWidth" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(applyToControllers, 1), "BuildingRoofDepth" !== setElementHidden.material[setElementClass].name && "BuildingWallsDepth" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(setElementId, 1), "BuildingRoof" !== setElementHidden.material[setElementClass].name && "BuildingWalls" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(i, 1)) : (setElementId = 0, "BuildingRoof" !== setElementHidden.material[setElementClass].name && "BuildingWalls" !== setElementHidden.material[setElementClass].name || setElementHidden.material[setElementClass].normalMap.repeat.set(applyToControllers, 1))
    }
}

function Ja(setElementClass, applyToControllers) {
    if (setElementClass = setElementClass || !1, applyToControllers = applyToControllers || !1, void 0 !== tempLA.getObjectByName(setElementClass)) {
        var setElementHidden, i = tempLA.getObjectByName(setElementClass);
        if (!0 === i.visible)
            if (void 0 === i.getObjectByName("porchPosts") ? ((setElementHidden = new THREE.Group).name = "porchPosts", i.add(setElementHidden)) : setElementHidden = i.getObjectByName("porchPosts"), vo(setElementHidden), !1 === applyToControllers && i.userData.hasOwnProperty("posts") && !0 === i.userData.posts) {
                var dimensionsArray = 0,
                    applyToControllers = 0,
                    setElementId = 0,
                    r = 0,
                    dimensionsArray = i.morphTargetInfluences[i.morphTargetDictionary.width],
                    applyToControllers = i.morphTargetInfluences[i.morphTargetDictionary.depth],
                    setElementId = i.morphTargetInfluences[i.morphTargetDictionary.porchDepth],
                    r = i.morphTargetInfluences[i.morphTargetDictionary.ceilingHeight],
                    ColorOption = (applyToControllers = "porchWrapHip" === setElementClass.substring(0, 12) ? (dimensionsArray = dimensionsArray + 10 + 10 + 2 * setElementId, applyToControllers + 10 + 10 + 2 * setElementId) : "porchWrap" === setElementClass.substring(0, 9) ? (dimensionsArray = dimensionsArray + 10 + 10 + +setElementId, applyToControllers + 10 + 10 + +setElementId) : (dimensionsArray += 10, 0), setElementId += 10, ma.maxPorchPostSpacing),
                    renderer = Math.floor(dimensionsArray / ColorOption) - 1,
                    controls = Math.floor(applyToControllers / ColorOption) - 1,
                    c = ((ma.settings.hasOwnProperty("showPorchMidPostsOnEndwallsOnly") && ma.settings.showPorchMidPostsOnEndwallsOnly || ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") && ma.settings.showPorchPostsOnEndwallsOnly) && ((setElementClass.startsWith("porchWrapNW") || setElementClass.startsWith("porchWrapHipNW") || setElementClass.startsWith("porchWrapSE") || setElementClass.startsWith("porchWrapHipSE")) && (console.log("wrap A: " + setElementClass), controls = 0), (setElementClass.startsWith("porchWrapNE") || setElementClass.startsWith("porchWrapHipNE") || setElementClass.startsWith("porchWrapSW") || setElementClass.startsWith("porchWrapHipSW")) && (console.log("wrap: " + setElementClass), renderer = 0), setElementClass.startsWith("porchE") || setElementClass.startsWith("porchW")) && (renderer = 0), dimensionsArray / ((renderer = Math.max(0, renderer)) + 1)),
                    d = applyToControllers / ((controls = Math.max(0, controls)) + 1);
                if ("porchWrap" === setElementClass.substring(0, 9) && (setElementHidden.position.isSceneLoaded = setElementId), setElementHidden.position.tempz = setElementId - .4, void 0 !== tempLA.getObjectByName("porchPost") && void 0 !== tempLA.getObjectByName("porchPostMetal")) {
                    let setElementId;
                    if (ma.settings.woodenPorchPosts) setElementId = tempLA.getObjectByName("porchPost");
                    else {
                        setElementId = tempLA.getObjectByName("porchPostMetal");
                        for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "PorchPostsMetal" === setElementId.material[applyToControllers].name && setElementId.material[applyToControllers].color.copy(Wa)
                    }
                    for (let applyToControllers = 1; applyToControllers <= renderer + controls; applyToControllers++) {
                        var tempP = setElementId.GdeepCloneMaterials();
                        tempP.name = "porchPost-Clone", tempP.castShadow = !0, tempP.visible = !0, tempP.rotation.isSceneLoaded = 0, applyToControllers <= renderer ? "porchWrap" === setElementClass.substring(0, 9) ? tempP.position.isSceneLoaded = applyToControllers * -c : tempP.position.isSceneLoaded = dimensionsArray / 2 + applyToControllers * -c : (p.rotation.y = Math.PI / 2, tempP.position.tempz = (applyToControllers - renderer) * -d), tempP.morphTargetInfluences[tempP.morphTargetDictionary.ceilingHeight] = r, tempP.morphTargetInfluences[tempP.morphTargetDictionary.miters] = i.morphTargetInfluences[i.morphTargetDictionary.miters];
                        for (let applyToControllers = 0; applyToControllers < i.material.length; applyToControllers++)
                            if ("PorchPosts" === i.material[applyToControllers].name && i.material[applyToControllers].color.getHex() !== Kt.getHex() && i.material[applyToControllers].color.getHex() !== Jt.getHex())
                                for (let applyToControllers = 0; applyToControllers < tempP.material.length; applyToControllers++) "PorchPosts" === tempP.material[applyToControllers].name && (tempP.material[applyToControllers].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma[ma.settings.wrappedPorchPostColorMatches]).map(applyToControllers => applyToControllers.hex)), tempP.material[applyToControllers].specular.setHex(3947580), tempP.material[applyToControllers].shininess.value = 40);
                        setElementHidden.add(tempP)
                    }
                }
                ma.settings.hasOwnProperty("showPorchPostsOnEndwallsOnly") && ma.settings.showPorchPostsOnEndwallsOnly && ((setElementClass.startsWith("porchWrapNW") || setElementClass.startsWith("porchWrapHipNW") || setElementClass.startsWith("porchWrapSE") || setElementClass.startsWith("porchWrapHipSE")) && (controls = 0), (setElementClass.startsWith("porchWrapNE") || setElementClass.startsWith("porchWrapHipNE") || setElementClass.startsWith("porchWrapSW") || setElementClass.startsWith("porchWrapHipSW")) && (renderer = 0), setElementClass.startsWith("porchE") || setElementClass.startsWith("porchW"))
            }
    }
}

function eo() {
    var applyToControllers = ma.cupola18in + ma.cupola2 + ma.cupola30in + ma.cupola3 + ma.cupola42in + ma.cupola4 + ma.cupolaWindow18in + ma.cupolaWindow2 + ma.cupolaWindow30in + ma.cupolaWindow3 + ma.cupolaWindow42in + ma.cupolaWindow4;
    let setElementClass = ma.width / 2 * ma.roofPitch / 12 + ma.height;
    mainScene.traverse(function(applyToControllers) {
        applyToControllers instanceof THREE.Mesh && applyToControllers.name.startsWith("weatherVane") && (applyToControllers.visible = !1, applyToControllers.parent = mainScene)
    }), "None" !== ma.weatherVane && 0 == applyToControllers && (mainScene.getObjectByName("weatherVane" + ma.weatherVane + "-1").visible = !0, mainScene.getObjectByName("weatherVane" + ma.weatherVane + "-1").position.set(0, setElementClass, ma.depth / 2 - .25));
    let setElementHidden = 1;
    0 < applyToControllers && "None" !== ma.weatherVane && mainScene.traverse(function(applyToControllers) {
        var setElementId;
        applyToControllers instanceof THREE.Mesh && applyToControllers.name.startsWith("cupola") && applyToControllers.visible && (setElementClass = applyToControllers.name.startsWith("cupola18in") || applyToControllers.name.startsWith("cupolaWindow18in") ? 2.25 : applyToControllers.name.startsWith("cupola2") || applyToControllers.name.startsWith("cupolaWindow2") ? 2.75 : applyToControllers.name.startsWith("cupola30in") || applyToControllers.name.startsWith("cupolaWindow30in") ? 3.5 : applyToControllers.name.startsWith("cupola3") || applyToControllers.name.startsWith("cupolaWindow3") ? 4.25 : applyToControllers.name.startsWith("cupola42in") || applyToControllers.name.startsWith("cupolaWindow42in") ? 4.75 : applyToControllers.name.startsWith("cupola4") || applyToControllers.name.startsWith("cupolaWindow4") ? 5.25 : 2.75, (setElementId = mainScene.getObjectByName("weatherVane" + ma.weatherVane + "-" + setElementHidden)).position.set(0, setElementClass, 0), setElementId.visible = !0, setElementId.parent = applyToControllers, setElementHidden++)
    }), shouldAutoRotate = !0
}

function to() {
    var applyToControllers = ma.cupola18in + ma.cupola2 + ma.cupola30in + ma.cupola3 + ma.cupola42in + ma.cupola4 + ma.cupolaWindow18in + ma.cupolaWindow2 + ma.cupolaWindow30in + ma.cupolaWindow3 + ma.cupolaWindow42in + ma.cupolaWindow4,
        setElementId = ma.roofPitch / 12 * 2 / 100,
        setElementClass = mainScene.getObjectByName("roofR").position.isSceneLoaded,
        setElementHidden = mainScene.getObjectByName("roofR").position.y,
        i = (ma.depth - 3 - 3) / (applyToControllers - 1),
        dimensionsArray = ma.depth / 2 - 3,
        r = (1 === applyToControllers && (dimensionsArray = 0), 2 === applyToControllers && (i = 2 * (dimensionsArray = ma.depth / 2 / 2)), 2 <= applyToControllers && isGeometryActive && (dimensionsArray = ma.depth / 2 - ma.depth / applyToControllers / 2, i = ma.depth / applyToControllers), ma.cupola18in),
        ColorOption = 0,
        renderer = ma.cupolaWindow18in,
        controls = 0,
        c = ma.cupola2,
        d = 0,
        tempP = ma.cupolaWindow2,
        camera = 0,
        tempG2 = ma.cupola30in,
        tempU2 = 0,
        tempT = ma.cupolaWindow30in,
        y = 0,
        tempB = ma.cupola3,
        tempF2 = 0,
        tempW = ma.cupolaWindow3,
        tempV2 = 0,
        orthographicCamera = ma.cupola42in,
        orbitControls = 0,
        tempD = ma.cupolaWindow42in,
        currentCamera = 0,
        W = ma.cupola4,
        S = ma.cupolaWindow4;
    1 < ma.cupola18in && (r = Math.round(ma.cupola18in / 2), ColorOption = ma.cupola18in - r), 1 < ma.cupolaWindow18in && (renderer = Math.round(ma.cupolaWindow18in / 2), controls = ma.cupolaWindow18in - renderer), 1 < ma.cupola2 && (c = Math.round(ma.cupola2 / 2), d = ma.cupola2 - c), 1 < ma.cupolaWindow2 && (p = Math.round(ma.cupolaWindow2 / 2), camera = ma.cupolaWindow2 - tempP), 1 < ma.cupola30in && (tempG2 = Math.round(ma.cupola30in / 2), u = ma.cupola30in - g), 1 < ma.cupolaWindow30in && (T = Math.round(ma.cupolaWindow30in / 2), y = ma.cupolaWindow30in - tempT), 1 < ma.cupola3 && (tempB = Math.round(ma.cupola3 / 2), f = ma.cupola3 - b), 1 < ma.cupolaWindow3 && (w = Math.round(ma.cupolaWindow3 / 2), tempV2 = ma.cupolaWindow3 - tempW), 1 < ma.cupola42in && (orthographicCamera = Math.round(ma.cupola42in / 2), M = ma.cupola42in - E), 1 < ma.cupolaWindow42in && (D = Math.round(ma.cupolaWindow42in / 2), currentCamera = ma.cupolaWindow42in - tempD);
    for (let applyToControllers = 1; applyToControllers <= xt; applyToControllers++) mainScene.getObjectByName("cupola18in-" + applyToControllers) && (mainScene.getObjectByName("cupola18in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola2-" + applyToControllers) && (mainScene.getObjectByName("cupola2-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola30in-" + applyToControllers) && (mainScene.getObjectByName("cupola30in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola3-" + applyToControllers) && (mainScene.getObjectByName("cupola3-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola42in-" + applyToControllers) && (mainScene.getObjectByName("cupola42in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola4-" + applyToControllers) && (mainScene.getObjectByName("cupola4-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow2-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow2-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow3-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow3-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupolaWindow4-" + applyToControllers) && (mainScene.getObjectByName("cupolaWindow4-" + applyToControllers).visible = !1), mainScene.getObjectByName("cupola18in-" + applyToControllers) && ma.cupola18in >= applyToControllers && (mainScene.getObjectByName("cupola18in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupola2-" + applyToControllers) && ma.cupola2 >= applyToControllers && (mainScene.getObjectByName("cupola2-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupola30in-" + applyToControllers) && ma.cupola30in >= applyToControllers && (mainScene.getObjectByName("cupola30in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupola3-" + applyToControllers) && ma.cupola3 >= applyToControllers && (mainScene.getObjectByName("cupola3-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupola42in-" + applyToControllers) && ma.cupola42in >= applyToControllers && (mainScene.getObjectByName("cupola42in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupola4-" + applyToControllers) && ma.cupola4 >= applyToControllers && (mainScene.getObjectByName("cupola4-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers) && ma.cupolaWindow18in >= applyToControllers && (mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow2-" + applyToControllers) && ma.cupolaWindow2 >= applyToControllers && (mainScene.getObjectByName("cupolaWindow2-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers) && ma.cupolaWindow30in >= applyToControllers && (mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow3-" + applyToControllers) && ma.cupolaWindow3 >= applyToControllers && (mainScene.getObjectByName("cupolaWindow3-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers) && ma.cupolaWindow42in >= applyToControllers && (mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers).visible = !0), mainScene.getObjectByName("cupolaWindow4-" + applyToControllers) && ma.cupolaWindow4 >= applyToControllers && (mainScene.getObjectByName("cupolaWindow4-" + applyToControllers).visible = !0);
    let O = 1,
        scene;
    for (let applyToControllers = 1; applyToControllers <= r; applyToControllers++) scene = mainScene.getObjectByName("cupola18in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= renderer; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= c; applyToControllers++) scene = mainScene.getObjectByName("cupola2-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempP; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow2-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempG2; applyToControllers++) scene = mainScene.getObjectByName("cupola30in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempT; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempB; applyToControllers++) scene = mainScene.getObjectByName("cupola3-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempW; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow3-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= orthographicCamera; applyToControllers++) scene = mainScene.getObjectByName("cupola42in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= tempD; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= W; applyToControllers++) scene = mainScene.getObjectByName("cupola4-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = 1; applyToControllers <= S; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow4-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempW + 1; applyToControllers <= tempV2 + tempW; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow3-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempD + 1; applyToControllers <= currentCamera + tempD; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow42in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = orthographicCamera + 1; applyToControllers <= orbitControls + orthographicCamera; applyToControllers++) scene = mainScene.getObjectByName("cupola42in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempB + 1; applyToControllers <= tempF2 + tempB; applyToControllers++) scene = mainScene.getObjectByName("cupola3-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempT + 1; applyToControllers <= y + tempT; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow30in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempG2 + 1; applyToControllers <= tempU2 + tempG2; applyToControllers++) scene = mainScene.getObjectByName("cupola30in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = tempP + 1; applyToControllers <= camera + tempP; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow2-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = c + 1; applyToControllers <= d + c; applyToControllers++) scene = mainScene.getObjectByName("cupola2-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = renderer + 1; applyToControllers <= controls + renderer; applyToControllers++) scene = mainScene.getObjectByName("cupolaWindow18in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    for (let applyToControllers = r + 1; applyToControllers <= ColorOption + r; applyToControllers++) scene = mainScene.getObjectByName("cupola18in-" + applyToControllers), 1 < O && (dimensionsArray += -i), scene.position.set(setElementClass, setElementHidden, dimensionsArray), scene.morphTargetInfluences[scene.morphTargetDictionary.cupolaSlope] = setElementId, O++;
    eo()
}

function ao() {
    mainScene.traverse(function(setElementId) {
        if (0 === ma.hideWalls && setElementId instanceof THREE.Mesh && ("building" === setElementId.name || "leanTo1" === setElementId.name || "leanTo2" === setElementId.name || "leanTo3" === setElementId.name || "leanTo4" === setElementId.name || setElementId.name.startsWith("coveredGableExtension"))) {
            setElementId.hasOwnProperty("morphTargetDictionary") && setElementId.morphTargetDictionary.hasOwnProperty("wainscotHeight") && (ma.hasOwnProperty("wainscotHeight") ? setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.wainscotHeight] = ma.wainscotHeight - 1 : setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.wainscotHeight] = 2.5);
            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingWainscot1" !== setElementId.material[applyToControllers].name && !setElementId.material[applyToControllers].name.startsWith("BuildingWainscotTrim1") && ("leanTo1" !== setElementId.name || "LeantoWainscot1" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim1" !== setElementId.material[applyToControllers].name && "LeantoWainscot2" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim2" !== setElementId.material[applyToControllers].name && "LeantoWainscot3" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim3" !== setElementId.material[applyToControllers].name) || (!ma.wainscot1 || !(ma.enclosedN && setElementId.material[applyToControllers].name.startsWith("BuildingWainscot") && (!ma.leanTo1 || ma.leanTo1 && !ma.leanTo1Enclosed) || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot") && ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls) || (!setElementId.name.startsWith("coveredGableExtensionN") || !ma.coveredGableExtensionNEnclosed) && setElementId.name.startsWith("coveredGableExtensionN") && !ma.coveredGableExtensionNEnclosed ? setElementId.material[applyToControllers].visible = !1 : setElementId.material[applyToControllers].visible = !0), "BuildingWainscot2" !== setElementId.material[applyToControllers].name && !setElementId.material[applyToControllers].name.startsWith("BuildingWainscotTrim2") && ("leanTo2" !== setElementId.name || "LeantoWainscot1" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim1" !== setElementId.material[applyToControllers].name && "LeantoWainscot2" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim2" !== setElementId.material[applyToControllers].name && "LeantoWainscot3" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim3" !== setElementId.material[applyToControllers].name) || (!ma.wainscot2 || !(ma.enclosedE && setElementId.material[applyToControllers].name.startsWith("BuildingWainscot") && (!ma.leanTo2 || ma.leanTo2 && (!ma.leanTo2Enclosed || "Fully Enclosed" !== ma.leanTo2Walls)) || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot") && ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls) || (!setElementId.name.startsWith("coveredGableExtensionE") || !ma.coveredGableExtensionEEnclosed) && setElementId.name.startsWith("coveredGableExtensionE") && !ma.coveredGableExtensionEEnclosed ? setElementId.material[applyToControllers].visible = !1 : setElementId.material[applyToControllers].visible = !0), "BuildingWainscot3" !== setElementId.material[applyToControllers].name && !setElementId.material[applyToControllers].name.startsWith("BuildingWainscotTrim3") && ("leanTo3" !== setElementId.name || "LeantoWainscot1" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim1" !== setElementId.material[applyToControllers].name && "LeantoWainscot2" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim2" !== setElementId.material[applyToControllers].name && "LeantoWainscot3" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim3" !== setElementId.material[applyToControllers].name) || (!ma.wainscot3 || !(ma.enclosedS && setElementId.material[applyToControllers].name.startsWith("BuildingWainscot") && (!ma.leanTo3 || ma.leanTo3 && !ma.leanTo3Enclosed) || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot") && ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls) || (!setElementId.name.startsWith("coveredGableExtensionS") || !ma.coveredGableExtensionSEnclosed) && setElementId.name.startsWith("coveredGableExtensionS") && !ma.coveredGableExtensionSEnclosed ? setElementId.material[applyToControllers].visible = !1 : setElementId.material[applyToControllers].visible = !0), "BuildingWainscot4" !== setElementId.material[applyToControllers].name && !setElementId.material[applyToControllers].name.startsWith("BuildingWainscotTrim4") && ("leanTo4" !== setElementId.name || "LeantoWainscot1" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim1" !== setElementId.material[applyToControllers].name && "LeantoWainscot2" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim2" !== setElementId.material[applyToControllers].name && "LeantoWainscot3" !== setElementId.material[applyToControllers].name && "LeantoWainscotTrim3" !== setElementId.material[applyToControllers].name) || (!ma.wainscot4 || !(ma.enclosedW && setElementId.material[applyToControllers].name.startsWith("BuildingWainscot") && (!ma.leanTo4 || ma.leanTo4 && (!ma.leanTo4Enclosed || "Fully Enclosed" !== ma.leanTo4Walls)) || setElementId.material[applyToControllers].name.startsWith("LeantoWainscot") && ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls) || (!setElementId.name.startsWith("coveredGableExtensionW") || !ma.coveredGableExtensionWEnclosed) && setElementId.name.startsWith("coveredGableExtensionW") && !ma.coveredGableExtensionWEnclosed ? setElementId.material[applyToControllers].visible = !1 : setElementId.material[applyToControllers].visible = !0), "BuildingWainscot1" !== setElementId.material[applyToControllers].name && "BuildingWainscot2" !== setElementId.material[applyToControllers].name && "BuildingWainscot3" !== setElementId.material[applyToControllers].name && "BuildingWainscot4" !== setElementId.material[applyToControllers].name && "LeantoWainscot1" !== setElementId.material[applyToControllers].name && "LeantoWainscot2" !== setElementId.material[applyToControllers].name && "LeantoWainscot3" !== setElementId.material[applyToControllers].name || (("Stone" === ma.wainscotColor || "Brick" === ma.wainscotColor) && (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) || (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.trimWainscot1] = 0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.trimWainscot2] = 0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.trimWainscot3] = 0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.trimWainscot4] = 0), setElementId.geometry.dynamic = !0, setElementId.geometry.hasOwnProperty("normalsNeedUpdate") && (setElementId.geometry.normalsNeedUpdate = !0), setElementId.geometry.hasOwnProperty("tangentsNeedUpdate") && (setElementId.geometry.tangentsNeedUpdate = !0)), ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && ma.leanTo1Length === ma.depth && !1 === ma.wainscot1 && ma.wainscot2 && "leanTo1" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && ma.leanTo1Length === ma.depth && !1 === ma.wainscot1 && ma.wainscot4 && "leanTo1" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && ma.leanTo1Length === ma.width && ma.wainscot1 && !1 === ma.wainscot2 && "leanTo1" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && ma.leanTo1Length === ma.width && ma.wainscot1 && !1 === ma.wainscot4 && "leanTo1" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && ma.leanTo2Length === ma.depth && !1 === ma.wainscot2 && ma.wainscot1 && "leanTo2" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && ma.leanTo2Length === ma.depth && !1 === ma.wainscot2 && ma.wainscot3 && "leanTo2" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && ma.leanTo2Length === ma.depth && ma.wainscot2 && !1 === ma.wainscot1 && "leanTo2" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && ma.leanTo2Length === ma.depth && ma.wainscot2 && !1 === ma.wainscot3 && "leanTo2" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && ma.leanTo3Length === ma.depth && !1 === ma.wainscot3 && ma.wainscot2 && "leanTo3" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && ma.leanTo3Length === ma.depth && !1 === ma.wainscot3 && ma.wainscot4 && "leanTo3" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && ma.leanTo3Length === ma.width && ma.wainscot3 && !1 === ma.wainscot2 && "leanTo3" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && ma.leanTo3Length === ma.width && ma.wainscot3 && !1 === ma.wainscot4 && "leanTo3" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && ma.leanTo4Length === ma.depth && !1 === ma.wainscot4 && ma.wainscot1 && "leanTo4" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && ma.leanTo4Length === ma.depth && !1 === ma.wainscot4 && ma.wainscot3 && "leanTo4" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && ma.leanTo4Length === ma.depth && ma.wainscot4 && !1 === ma.wainscot1 && "leanTo4" === setElementId.name && ("LeantoWainscot1" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && ma.leanTo4Length === ma.depth && ma.wainscot4 && !1 === ma.wainscot3 && "leanTo4" === setElementId.name && ("LeantoWainscot3" === setElementId.material[applyToControllers].name || "LeantoWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !1), ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && ma.wainscot1 && ma.leanTo1Length !== ma.width && ("BuildingWainscot1" === setElementId.material[applyToControllers].name || "BuildingWainscotTrim1" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && ma.wainscot2 && ma.leanTo2Length !== ma.depth && ("BuildingWainscot2" === setElementId.material[applyToControllers].name || "BuildingWainscotTrim2" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && ma.wainscot3 && ma.leanTo3Length !== ma.width && ("BuildingWainscot3" === setElementId.material[applyToControllers].name || "BuildingWainscotTrim3" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && ma.wainscot4 && ma.leanTo4Length !== ma.depth && ("BuildingWainscot4" === setElementId.material[applyToControllers].name || "BuildingWainscotTrim4" === setElementId.material[applyToControllers].name) && (setElementId.material[applyToControllers].visible = !0)
        }
    }), shouldAutoRotate = !0
}

function oo() {
    var applyToControllers = 0;
    if ("Gabled" === ma.roofType) {
        if (gui.__folders.hasOwnProperty("Building Dimensions"))
            for (applyToControllers = 0; applyToControllers < gui.__folders["Building Dimensions"].__controllers.length; applyToControllers++) {
                var setElementId = gui.__folders["Building Dimensions"].__controllers[applyToControllers];
                "asymmetrical" === setElementId.property && (setElementId.domElement.parentElement.parentElement.hidden = !0, setElementId.updateDisplay()), "roofPitch" === setElementId.property && (setElementId.min(ma.settings.roofPitchMin), ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), setElementId.updateDisplay())
            }
        mainScene.traverse(function(setElementId) {
            if (setElementId instanceof THREE.Mesh) {
                if ("roofL" === setElementId.name || "roofR" === setElementId.name)
                    for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingRidgeCap" === setElementId.material[applyToControllers].name && (setElementId.material[applyToControllers].visible = !0);
                "building" === setElementId.name && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.heightRight] = 0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.heightLeft] = 0)
            }
        })
    }
    if ("Single Slope" === ma.roofType) {
        if (gui.__folders.hasOwnProperty("Building Dimensions"))
            for (applyToControllers = 0; applyToControllers < gui.__folders["Building Dimensions"].__controllers.length; applyToControllers++) {
                var setElementClass = gui.__folders["Building Dimensions"].__controllers[applyToControllers];
                "asymmetrical" === setElementClass.property && (setElementClass.domElement.parentElement.parentElement.hidden = !0, setElementClass.updateDisplay()), "roofPitch" === setElementClass.property && (setElementClass.min(-ma.settings.roofPitchMax), setElementClass.updateDisplay())
            }
        mainScene.traverse(function(setElementId) {
            if (setElementId instanceof THREE.Mesh && ("roofL" === setElementId.name || "roofR" === setElementId.name))
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingRidgeCap" === setElementId.material[applyToControllers].name && (setElementId.material[applyToControllers].visible = !1)
        })
    }
    if ("Asymmetrical" === ma.roofType) {
        if (gui.__folders.hasOwnProperty("Building Dimensions"))
            for (applyToControllers = 0; applyToControllers < gui.__folders["Building Dimensions"].__controllers.length; applyToControllers++) {
                var setElementHidden = gui.__folders["Building Dimensions"].__controllers[applyToControllers];
                "asymmetrical" === setElementHidden.property && (setElementHidden.domElement.parentElement.parentElement.hidden = !1, setElementHidden.min(ma.width / -2 + 3), setElementHidden.max(ma.width / 2 - 3), ma.asymmetrical < ma.width / -2 + 3 && (ma.asymmetrical = ma.width / -2 + 3), ma.asymmetrical > ma.width / 2 - 3 && (ma.asymmetrical = ma.width / 2 - 3), setElementHidden.updateDisplay()), "roofPitch" === setElementHidden.property && (setElementHidden.min(ma.settings.roofPitchMin), ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), setElementHidden.updateDisplay())
            }
        mainScene.traverse(function(setElementId) {
            if (setElementId instanceof THREE.Mesh) {
                if ("roofL" === setElementId.name || "roofR" === setElementId.name)
                    for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "BuildingRidgeCap" === setElementId.material[applyToControllers].name && (setElementId.material[applyToControllers].visible = !0);
                "building" === setElementId.name && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.heightRight] = 0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.heightLeft] = 0)
            }
        })
    }
    S()
}

function io() {
    .5 < ma.eavePitchL ? ma.eavePitchL = Math.round(ma.eavePitchL) : ma.eavePitchL = .5, .5 < ma.eavePitchR ? ma.eavePitchR = Math.round(ma.eavePitchR) : ma.eavePitchR = .5;
    ma.height;
    let setElementId = 0,
        setElementClass, setElementHidden, i, dimensionsArray, r, ColorOption, applyToControllers, renderer, controls;
    if ("Single Slope" === ma.roofType ? (ma.width, Math.abs(ma.roofPitch), setElementId = ma.width * Math.abs(ma.roofPitch) / 12, setElementClass = Math.atan(ma.width / setElementId), setElementHidden = setElementClass, i = -setElementClass, ma.roofPitch < 0 && (setElementHidden = -setElementClass, i = setElementClass), dimensionsArray = Math.sqrt(Math.pow(setElementId, 2) + Math.pow(ma.width, 2)), r = dimensionsArray / 2, ColorOption = n / 2, ma.roofPitch < 0 ? tempDA.rotation.tempz = Math.PI / -180 * -90 - setElementClass : da.rotation.z = Math.PI / 180 * -90 + setElementClass, tempDA.position.isSceneLoaded = 0, tempDA.position.y = setElementId / 2 + ma.height + .1, da.morphTargetInfluences[da.morphTargetDictionary.width] = (n / 2 - .5) / 50 + ma.eaveL / 50, ma.roofPitch < 0 ? tempCA.rotation.tempz = -Math.PI / -180 * -90 + setElementClass : ca.rotation.z = -Math.PI / 180 * -90 - setElementClass, tempCA.position.isSceneLoaded = 0, tempCA.position.y = setElementId / 2 + ma.height + .1, ca.morphTargetInfluences[ca.morphTargetDictionary.width] = (n / 2 - .5) / 50 + ma.eaveR / 50, ma.roofPitch < 0 ? (tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.heightLeft] = setElementId / 100, ee.morphTargetInfluences[ee.morphTargetDictionary.heightRight] = 0) : (ee.morphTargetInfluences[ee.morphTargetDictionary.heightRight] = setElementId / 100, tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.heightLeft] = 0), tempEE.morphTargetInfluences[tempEE.morphTargetDictionary.roofPeak] = setElementId / 100 / 2) : "Asymmetrical" === ma.roofType ? (ma.settings.roundAllButMinimumRoofPitch && ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), ma.settings.roundAllButMinimumRoofPitch && (ma.roofPitch > ma.settings.roofPitchMin || ma.roofPitch < -ma.settings.roofPitchMin) && (ma.roofPitch = Math.round(ma.roofPitch)), applyToControllers = ma.width / 2 + ma.asymmetrical, renderer = ma.width / 2 - ma.asymmetrical, controls = Math.max(applyToControllers, renderer), setElementId = controls * ma.roofPitch / 12, setElementHidden = Math.atan(applyToControllers / setElementId), i = Math.atan(renderer / setElementId), r = Math.sqrt(Math.pow(setElementId, 2) + Math.pow(applyToControllers, 2)), ColorOption = Math.sqrt(Math.pow(setElementId, 2) + Math.pow(renderer, 2)), mainScene.traverse(function(applyToControllers) {
            applyToControllers instanceof THREE.Mesh && ("roofL" === applyToControllers.name && (applyToControllers.rotation.tempz = Math.PI / 180 * -90 + setElementHidden, applyToControllers.position.isSceneLoaded = ma.asymmetrical, applyToControllers.position.y = setElementId + ma.height + .1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (r - .5) / 50 + ma.eaveL / 50), "roofR" === applyToControllers.name && (applyToControllers.rotation.tempz = -Math.PI / 180 * 90 + i, applyToControllers.position.isSceneLoaded = ma.asymmetrical, applyToControllers.position.y = setElementId + ma.height + .1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (ColorOption - .5) / 50 + ma.eaveR / 50), "building" === applyToControllers.name) && (applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = setElementId / 100)
        })) : (ma.settings.roundAllButMinimumRoofPitch && ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), ma.settings.roundAllButMinimumRoofPitch && (ma.roofPitch > ma.settings.roofPitchMin || ma.roofPitch < -ma.settings.roofPitchMin) && (ma.roofPitch = Math.round(ma.roofPitch)), setElementId = ma.width / 2 * ma.roofPitch / 12, setElementClass = Math.atan(ma.width / 2 / setElementId), setElementHidden = setElementClass, i = setElementClass, dimensionsArray = Math.sqrt(Math.pow(setElementId, 2) + Math.pow(ma.width / 2, 2)), r = n, ColorOption = n, ma.leanTo2 && (ma.leanTo2Depth, Math.tan(Math.atan(ma.leanTo2Pitch / 12))), ma.leanTo4 && (ma.leanTo4Depth, Math.tan(Math.atan(ma.leanTo4Pitch / 12))), mainScene.traverse(function(applyToControllers) {
            applyToControllers instanceof THREE.Mesh && ("roofL" === applyToControllers.name && (applyToControllers.rotation.tempz = Math.PI / 180 * -90 + setElementClass, applyToControllers.position.isSceneLoaded = 0, applyToControllers.position.y = setElementId + ma.height + .1, 0 < ma.eaveL && (!ma.leanTo2 || ma.leanTo2 && ma.leanTo2Height < ma.height) ? applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (dimensionsArray - .5) / 50 + ma.eaveL / 50 : applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (dimensionsArray - .5) / 50), "roofR" === applyToControllers.name && (applyToControllers.rotation.z = -Math.PI / 180 * 90 + setElementClass, applyToControllers.position.isSceneLoaded = 0, applyToControllers.position.y = setElementId + ma.height + .1, 0 < ma.eaveR && (!ma.leanTo4 || ma.leanTo4 && ma.leanTo4Height < ma.height) ? applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (dimensionsArray - .5) / 50 + ma.eaveR / 50 : applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = (dimensionsArray - .5) / 50), "roofEaveL" !== applyToControllers.name && "roofEaveR" !== applyToControllers.name || (applyToControllers.visible = !1), "building" === applyToControllers.name) && (applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = setElementId / 100)
        })), ma.settings.boxedEaves) {
        var c = mainScene.getObjectByName("boxedEaveL"),
            d = mainScene.getObjectByName("boxedEaveR");
        if (0 < ma.eaveL && (c.visible = !0), 0 < ma.eaveR && (d.visible = !0), c.position.y = ma.wallHeightL(), d.position.y = ma.wallHeightR(), c.position.isSceneLoaded = ma.width / -2, d.position.x = ma.width / 2, c.position.tempz = -ma.gableBack / 2 + ma.gableFront / 2, d.position.tempz = -ma.gableBack / 2 + ma.gableFront / 2, c.morphTargetInfluences[c.morphTargetDictionary.depth] = ma.depth + ma.gableBack + ma.gableFront - 1, d.morphTargetInfluences[d.morphTargetDictionary.depth] = ma.depth + ma.gableBack + ma.gableFront - 1, c.morphTargetInfluences[c.morphTargetDictionary.width] = ma.eaveL / Math.hypot(12, ma.roofPitch) * 12 - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.width] = ma.eaveR / Math.hypot(12, ma.roofPitch) * 12 - 1.1, c.morphTargetInfluences[c.morphTargetDictionary.height] = ma.eaveL / Math.hypot(12, ma.roofPitch) * ma.roofPitch - .5, d.morphTargetInfluences[d.morphTargetDictionary.height] = ma.eaveR / Math.hypot(12, ma.roofPitch) * ma.roofPitch - .5, c.morphTargetInfluences[c.morphTargetDictionary.slope] = c.morphTargetInfluences[c.morphTargetDictionary.height] + 1 - .5, d.morphTargetInfluences[d.morphTargetDictionary.slope] = d.morphTargetInfluences[d.morphTargetDictionary.height] + 1 - .5, ma.settings.boxedEavesMatchTrim) {
            for (let applyToControllers = 0; applyToControllers < d.material.length; applyToControllers++) null !== d.material[applyToControllers].normalMap && "BuildingSoffit" !== d.material[applyToControllers].name && (d.material[applyToControllers] = d.material[applyToControllers].clone(), d.material[applyToControllers].name = "BuildingTrim", d.material[applyToControllers].normalMap = null, d.material[applyToControllers].needsUpdate = !0);
            for (let applyToControllers = 0; applyToControllers < c.material.length; applyToControllers++) null !== c.material[applyToControllers].normalMap && "BuildingSoffit" !== c.material[applyToControllers].name && (c.material[applyToControllers] = c.material[applyToControllers].clone(), c.material[applyToControllers].name = "BuildingTrim", c.material[applyToControllers].normalMap = null, c.material[applyToControllers].needsUpdate = !0)
        }
    }
    if (ma.hasOwnProperty("ridgeVents")) {
        var tempP = mainScene.getObjectByName("RidgeVent");
        if (0 == ma.ridgeVents)
            for (let applyToControllers = 1; applyToControllers <= 6; applyToControllers++) void 0 !== mainScene.getObjectByName("RidgeVent" + applyToControllers + "-clone") && (tempLA.getObjectByName("RidgeVent" + applyToControllers + "-clone").visible = !1);
        else {
            let setElementId;
            for (let applyToControllers = 1; applyToControllers <= 6; applyToControllers++) void 0 === mainScene.getObjectByName("RidgeVent" + applyToControllers + "-clone") && ((setElementId = tempP.clone()).name = "RidgeVent" + applyToControllers + "-clone", tempLA.add(setElementId)), setElementId = mainScene.getObjectByName("RidgeVent" + applyToControllers + "-clone"), applyToControllers <= ma.ridgeVents ? setElementId.visible = !0 : setElementId.visible = !1, setElementId.position.y = mainScene.getObjectByName("roofR").position.y, setElementId.position.tempz = ma.depth / -2 - ma.depth / (2 * ma.ridgeVents) + ma.depth / (2 * ma.ridgeVents) * 2 * applyToControllers
        }
    }
    let camera = "Logo-" + ma.logoShape;
    if ("Wall" == ma.logoPlacement && (camera = "Logo-Round"), ma.settings.matchPeakSignBackgroundToTrimColor && (camera += "-ColorMatch"), isGeometryActive && "Wall" == ma.logoPlacement && (camera = "Logo-MortonHex"), mainScene.getObjectByName(camera) && (tempVE || ((tempVE = mainScene.getObjectByName(camera)).castShadow = !0, tempVE.receiveShadow = !0, tempVE.visible = !0), tempEE2 || ((tempEE2 = tempVE.clone()).name += "2", tempEE2.rotation.y = THREE.Math.degToRad(180), tempLA.add(tempEE2)), "Peak" != ma.logoPlacement && "Morton" != ma.logoPlacement || (tempU2 = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0, tempT = "Single Slope" === ma.roofType ? ma.height + setElementId / 2 - .25 : ma.height + setElementId - .25, g = ma.depth / 2 + ma.gableFront + .1, y = ma.depth / 2 + ma.gableBack + .1), "Wall" == ma.logoPlacement && (u = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0, T = "Single Slope" === ma.roofType ? ma.height + setElementId / 2 - 1.5 : (tempT = ma.height + setElementId - 1.5, (ma.peakHeight() + ma.height) / 2 - .5), g = ma.depth / 2 + .1, y = ma.depth / 2 + .1), "None" == ma.logoPlacement ? (tempVE.visible = !1, tempEE2.visible = !1) : (tempVE.position.set(tempU2, tempT, tempG2), tempEE2.position.set(tempU2, tempT, -y))), isGeometryActive && (camera = "Logo-MortonHex", tempHA.getObjectByName(camera))) {
        let applyToControllers, setElementId;
        tempLA.getObjectByName(camera + "-Front") ? applyToControllers = tempLA.getObjectByName(camera + "-Front") : ((applyToControllers = tempHA.getObjectByName(camera).clone()).name += "-Front", applyToControllers.visible = !0, tempLA.add(applyToControllers)), tempLA.getObjectByName(camera + "-Back") ? setElementId = tempLA.getObjectByName(camera + "-Back") : ((setElementId = tempHA.getObjectByName(camera).clone()).name += "-Back", setElementId.rotation.y = THREE.Math.degToRad(180), setElementId.visible = !0, tempLA.add(setElementId)), applyToControllers.position.y = (ma.peakHeight() + ma.height) / 2 - .5, setElementId.position.y = (ma.peakHeight() + ma.height) / 2 - .5, applyToControllers.position.tempz = ma.depth / 2 + .1, setElementId.position.z = ma.depth / -2 - .1
    }
    if (ma.settings.customWallLogo && (camera = "Logo-Wall", tempHA.getObjectByName(camera))) {
        let applyToControllers;
        tempLA.getObjectByName(camera + "-Front") ? applyToControllers = tempLA.getObjectByName(camera + "-Front") : ((applyToControllers = tempHA.getObjectByName(camera).clone()).name += "-Front", applyToControllers.visible = !0, tempLA.add(applyToControllers)), applyToControllers.position.y = (ma.peakHeight() + ma.height) / 2 - .5, applyToControllers.position.z = ma.depth / 2 + .1;
        var tempG2 = new THREE.Color;
        tempG2.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.wallColor).map(applyToControllers => applyToControllers.hex));
        let setElementId = "#ffffff";
        1.5 < tempG2.r + tempG2.tempG2 + tempG2.tempB && (setElementId = "#000000"), applyToControllers.material.color.setStyle(setElementId)
    }
    var tempU2 = new THREE.Vector3,
        tempT = new THREE.Vector3,
        y = new THREE.Vector3;
    tempU2.set(0, 1, 0).applyQuaternion(tempDA.quaternion), tempT.set(0, -1, 0).applyQuaternion(tempDA.quaternion), y.copy(tempDA.position), ht.setFromNormalAndCoplanarPoint(tempU2, y), dt.setFromNormalAndCoplanarPoint(tempT, y), tempU2 = new THREE.Vector3, tempT = new THREE.Vector3, y = new THREE.Vector3, tempU2.set(0, 1, 0).applyQuaternion(tempCA.quaternion), tempT.set(0, -1, 0).applyQuaternion(tempCA.quaternion), y.copy(tempCA.position), ct.setFromNormalAndCoplanarPoint(tempU2, y), pt.setFromNormalAndCoplanarPoint(tempT, y)
}

function O() {
    if (ma.hasOwnProperty("downspoutColor")) {
        let applyToControllers = !1;
        if (ma.hasOwnProperty("gutters") && !0 === ma.gutters && (applyToControllers = !0), gui.__folders.hasOwnProperty(Ra[xa].Colors))
            for (i = 0; i < gui.__folders[Ra[xa].Colors].__controllers.length; i++) {
                var setElementId = gui.__folders[Ra[xa].Colors].__controllers[i];
                "downspoutColor" === setElementId.property && (setElementId.domElement.parentElement.parentElement.hidden = !applyToControllers, setElementId.updateDisplay())
            }
    }
    if (ma.hasOwnProperty("gutterColor")) {
        let applyToControllers = !1;
        if (ma.hasOwnProperty("gutters") && !0 === ma.gutters && (applyToControllers = !0), gui.__folders.hasOwnProperty(Ra[xa].Colors))
            for (i = 0; i < gui.__folders[Ra[xa].Colors].__controllers.length; i++) {
                var setElementClass = gui.__folders[Ra[xa].Colors].__controllers[i];
                "gutterColor" === setElementClass.property && (setElementClass.domElement.parentElement.parentElement.hidden = !applyToControllers, setElementClass.updateDisplay())
            }
    }
    if (ma.hasOwnProperty("wainscotColor")) {
        let applyToControllers = !1;
        if ((ma.hasOwnProperty("wainscot1") && !0 === ma.wainscot1 || ma.hasOwnProperty("wainscot2") && !0 === ma.wainscot2 || ma.hasOwnProperty("wainscot3") && !0 === ma.wainscot3 || ma.hasOwnProperty("wainscot4") && !0 === ma.wainscot4) && (applyToControllers = !0), gui.__folders.hasOwnProperty(Ra[xa].Colors))
            for (i = 0; i < gui.__folders[Ra[xa].Colors].__controllers.length; i++) {
                var setElementHidden = gui.__folders[Ra[xa].Colors].__controllers[i];
                "wainscotColor" === setElementHidden.property && (setElementHidden.domElement.parentElement.parentElement.hidden = !applyToControllers, setElementHidden.updateDisplay())
            }
    }
    mainScene.traverse(function(setElementClass) {
        if (setElementClass instanceof THREE.Mesh && setElementClass.material) {
            setElementClass.name.startsWith("ceiling") && "Steel" == ma.ceiling && setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)), "Downspouts" === setElementClass.material.name && (ma.hasOwnProperty("downspoutColor") ? setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.downspoutColor).map(applyToControllers => applyToControllers.hex)) : ma.hasOwnProperty("gutterColor") ? setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.gutterColor).map(applyToControllers => applyToControllers.hex)) : ma.hasOwnProperty("trimCornerColor") ? setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimCornerColor).map(applyToControllers => applyToControllers.hex)) : ma.hasOwnProperty("trimWallColor") ? setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimWallColor).map(applyToControllers => applyToControllers.hex)) : setElementClass.material.color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)));
            for (let setElementId = 0; setElementId < setElementClass.material.length; setElementId++) {
                var applyToControllers, setElementHidden;
                if (("BuildingRoof" === setElementClass.material[setElementId].name || "BuildingRoofWidth" === setElementClass.material[setElementId].name || "BuildingRoofDepth" === setElementClass.material[setElementId].name || "CupolaRoof" === setElementClass.material[setElementId].name || "BuildingRidgeCap" === setElementClass.material[setElementId].name || setElementClass.material[setElementId].name.startsWith("Shutters")) && (setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.roofColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("shutterColor")) && setElementClass.material[setElementId].name.startsWith("Shutters") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.shutterColor).map(applyToControllers => applyToControllers.hex)), setElementClass.name.startsWith("garageSlide") || "BuildingWallsWidth" !== setElementClass.material[setElementId].name && "BuildingWallsWidthLeftFront" !== setElementClass.material[setElementId].name && "BuildingWallsWidthLeftBack" !== setElementClass.material[setElementId].name && "BuildingWallsWidthRightFront" !== setElementClass.material[setElementId].name && "BuildingWallsWidthRightBack" !== setElementClass.material[setElementId].name && "BuildingWallsDepth" !== setElementClass.material[setElementId].name && "BuildingWallsDepthL" !== setElementClass.material[setElementId].name && "BuildingWallsDepthR" !== setElementClass.material[setElementId].name && "BuildingWalls" !== setElementClass.material[setElementId].name && "LeantoWallsWidth" !== setElementClass.material[setElementId].name && "LeantoWallsDepth" !== setElementClass.material[setElementId].name || setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.wallColor).map(applyToControllers => applyToControllers.hex)), "PorchPosts" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color && setElementClass.material[setElementId].color.getHex() !== Kt.getHex() && setElementClass.material[setElementId].color.getHex() !== Jt.getHex() && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma[ma.settings.wrappedPorchPostColorMatches]).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("baseTrim") && setElementClass.material[setElementId].name.startsWith("BuildingTrim-Base") && (ma.baseTrim ? setElementClass.material[setElementId].visible = !0 : setElementClass.material[setElementId].visible = !1), (setElementClass.material[setElementId].name.startsWith("BuildingTrim") || "BuildingRidgeCap" === setElementClass.material[setElementId].name || "Track" === setElementClass.material[setElementId].name) && (setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimWallColor") && (setElementClass.material[setElementId].name.startsWith("BuildingTrim-Base") || setElementClass.material[setElementId].name.startsWith("BuildingTrim-Corner") || "BuildingTrim1" == setElementClass.material[setElementId].name || "BuildingTrim2" == setElementClass.material[setElementId].name || "BuildingTrim3" == setElementClass.material[setElementId].name || "BuildingTrim4" == setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimWallColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("doorWindowTrimColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim") && (setElementClass.name.startsWith("window") || setElementClass.name.startsWith("walkDoor") || setElementClass.name.startsWith("garage")) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.doorWindowTrimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("doorTrimColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim") && (setElementClass.name.startsWith("walkDoor") || setElementClass.name.startsWith("garage")) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.doorTrimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("walkDoorTrimColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim") && setElementClass.name.startsWith("walkDoor") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.walkDoorTrimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("garageDoorTrimColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim") && setElementClass.name.startsWith("garage") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.garageDoorTrimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("windowTrimColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim") && setElementClass.name.startsWith("window") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.windowTrimColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimRoofColor") && (setElementClass.material[setElementId].name.startsWith("BuildingTrim-RoofPivot") || setElementClass.material[setElementId].name.startsWith("BuildingTrim-Gable") || "BuildingRidgeCap" === setElementClass.material[setElementId].name || setElementClass.material[setElementId].name.startsWith("BuildingTrim-RoofEdge") || setElementClass.name.startsWith("cupola") && setElementClass.material[setElementId].name.startsWith("BuildingTrim")) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimRoofColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimBaseColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim-Base") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimBaseColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimGableColor") && (setElementClass.material[setElementId].name.startsWith("BuildingTrim-RoofPivot") || setElementClass.material[setElementId].name.startsWith("BuildingTrim-Gable") || "BuildingRidgeCap" === setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimGableColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimCornerColor") && (setElementClass.material[setElementId].name.startsWith("BuildingTrim-Corner") || "BuildingTrim1" == setElementClass.material[setElementId].name || "BuildingTrim2" == setElementClass.material[setElementId].name || "BuildingTrim3" == setElementClass.material[setElementId].name || "BuildingTrim4" == setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimCornerColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trimEaveColor") && setElementClass.material[setElementId].name.startsWith("BuildingTrim-RoofEdge") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimEaveColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("trackColor")) && setElementClass.material[setElementId].name.startsWith("Track") && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trackColor).map(applyToControllers => applyToControllers.hex)), isGeometryActive && (setElementClass.material[setElementId].name.startsWith("LogoBG") && ("White" == ma.trimColor || "Ivory" == ma.trimColor ? setElementClass.material[setElementId].color.setStyle("#D6112F") : setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex))), setElementClass.material[setElementId].name.startsWith("LogoColor")) && ("White" == ma.trimColor || "Ivory" == ma.trimColor ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)) : setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => "White" === applyToControllers.name).map(applyToControllers => applyToControllers.hex))), ma.settings.matchPeakSignBackgroundToTrimColor && tempVE && tempEE2 && (setElementClass != tempVE && setElementClass != tempEE2 || (applyToControllers = new THREE.Color, (setElementHidden = new THREE.Color).setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)), 1.75 < setElementHidden.r + setElementHidden.tempG2 + setElementHidden.tempB ? applyToControllers.setStyle("#000000") : applyToControllers.setStyle("#ffffff"), "LogoTransparent" == setElementClass.material[setElementId].name ? setElementClass.material[setElementId].color.copy(applyToControllers) : setElementClass.material[setElementId].name.startsWith("Logo") && (setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)), setElementClass.material[setElementId].emissive.setStyle("#000000")))), ma.hasOwnProperty("ridgeCapColor") && ("Match Trim" == ma.ridgeCapColor && "BuildingRidgeCap" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)), "Match Roof" == ma.ridgeCapColor) && "BuildingRidgeCap" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.roofColor).map(applyToControllers => applyToControllers.hex)), "Gutters" === setElementClass.material[setElementId].name && (ma.hasOwnProperty("gutterColor") ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.gutterColor).map(applyToControllers => applyToControllers.hex)) : ma.hasOwnProperty("downspoutColor") ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.downspoutColor).map(applyToControllers => applyToControllers.hex)) : ma.hasOwnProperty("trimRoofColor") ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimRoofColor).map(applyToControllers => applyToControllers.hex)) : setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex))), ma.hasOwnProperty("walkDoorColor") && setElementClass.name.startsWith("walkDoor") && "Door" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.walkDoorColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("largeDoorColor") && setElementClass.name.startsWith("garage") && ("Door" === setElementClass.material[setElementId].name || "RollUpDoor" === setElementClass.material[setElementId].name || "BuildingWalls" === setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.largeDoorColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("commercialDoorColor") && setElementClass.name.startsWith("garageOverheadFlat") && "Door" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.commercialDoorColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("residentialDoorColor") && setElementClass.name.startsWith("garageOverheadPanel") && "Door" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.residentialDoorColor).map(applyToControllers => applyToControllers.hex)), ma.hasOwnProperty("overheadDoorColor") && setElementClass.name.startsWith("garageOverhead") && "Door" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.overheadDoorColor).map(applyToControllers => applyToControllers.hex)), (setElementClass.name.startsWith("garageSlide") || setElementClass.name.startsWith("walkDoorEquine") || setElementClass.name.startsWith("garageBiFold") || setElementClass.name.startsWith("garageHydraulic")) && ("BuildingWalls" === setElementClass.material[setElementId].name || "BuildingWallsSmooth" === setElementClass.material[setElementId].name) && setElementClass.name.endsWith("-clone") && (setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.wallColor).map(applyToControllers => applyToControllers.hex)), setElementClass.material[setElementId].normalMap)) {
                    let applyToControllers = setElementClass.userData.scale.isSceneLoaded;
                    setElementClass.name.startsWith("garageSlide") && (applyToControllers /= 2), setElementClass.material[setElementId].normalMap.repeat.set(applyToControllers * tempJ, 1), setElementClass.material[setElementId].needsUpdate = !0
                }
                ma.hasOwnProperty("slidingDoorColor") && setElementClass.name.startsWith("garageSlide") && ("BuildingWalls" === setElementClass.material[setElementId].name || "Door" === setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.slidingDoorColor).map(applyToControllers => applyToControllers.hex)), setElementClass.name.startsWith("perimeterWall") && ("Steel" === ma.perimeterWalls ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)) : "Half Wood" === ma.perimeterWalls ? ("interiorWallUpper" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)), "interiorWallLower" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle("#ffffff")) : "8' OSB with Steel above" === ma.perimeterWalls ? ("interiorWallUpper" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.interiorPanelColor).map(applyToControllers => applyToControllers.hex)), "interiorWallLower" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle("#ffffff")) : "Drywall" === ma.perimeterWalls ? setElementClass.material[setElementId].color.setStyle("#eeeeee") : setElementClass.material[setElementId].color.setStyle("#ffffff")), (setElementClass.material[setElementId].name.startsWith("BuildingWainscot1") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot2") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot3") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot4") || "BuildingWainscotTrim1" === setElementClass.material[setElementId].name || "BuildingWainscotTrim2" === setElementClass.material[setElementId].name || "BuildingWainscotTrim3" === setElementClass.material[setElementId].name || "BuildingWainscotTrim4" === setElementClass.material[setElementId].name || "LeantoWainscot1" === setElementClass.material[setElementId].name || "LeantoWainscot2" === setElementClass.material[setElementId].name || "LeantoWainscot3" === setElementClass.material[setElementId].name || "LeantoWainscotTrim1" === setElementClass.material[setElementId].name || "LeantoWainscotTrim2" === setElementClass.material[setElementId].name || "LeantoWainscotTrim3" === setElementClass.material[setElementId].name) && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.wainscotColor).map(applyToControllers => applyToControllers.hex)), (setElementClass.material[setElementId].name.startsWith("BuildingWainscot1") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot2") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot3") || setElementClass.material[setElementId].name.startsWith("BuildingWainscot4") || "LeantoWainscot1" === setElementClass.material[setElementId].name || "LeantoWainscot2" === setElementClass.material[setElementId].name || "LeantoWainscot3" === setElementClass.material[setElementId].name) && (("Stone" === ma.wainscotColor || "Brick" === ma.wainscotColor) && (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) || (setElementClass.morphTargetInfluences[setElementClass.morphTargetDictionary.trimWainscot1] = 0, setElementClass.morphTargetInfluences[setElementClass.morphTargetDictionary.trimWainscot2] = 0, setElementClass.morphTargetInfluences[setElementClass.morphTargetDictionary.trimWainscot3] = 0, setElementClass.morphTargetInfluences[setElementClass.morphTargetDictionary.trimWainscot4] = 0), setElementClass.geometry.dynamic = !0, setElementClass.geometry.hasOwnProperty("normalsNeedUpdate") && (setElementClass.geometry.normalsNeedUpdate = !0), setElementClass.geometry.hasOwnProperty("tangentsNeedUpdate") && (setElementClass.geometry.tangentsNeedUpdate = !0), "Stone" === ma.wainscotColor ? (setElementClass.material[setElementId].color.setHex(16777215), setElementClass.material[setElementId].specular.setHex(0), setElementClass.material[setElementId].shininess = .1, setElementClass.material[setElementId].map = (new THREE.TextureLoader).load(A + "images/building/Stone.jpg"), setElementClass.material[setElementId].normalScale.set(.01, .01), setElementClass.material[setElementId].map.wrapS = THREE.RepeatWrapping, setElementClass.material[setElementId].map.wrapT = THREE.RepeatWrapping, setElementClass.material[setElementId].map.anisotropy = 1, setElementClass.material[setElementId].map.repeat.isSceneLoaded = setElementClass.material[setElementId].normalMap.repeat.isSceneLoaded / 8, setElementClass.material[setElementId].map.offset.x = setElementClass.material[setElementId].normalMap.offset.x / 8) : "Brick" === ma.wainscotColor ? (setElementClass.material[setElementId].color.setHex(16777215), setElementClass.material[setElementId].specular.setHex(0), setElementClass.material[setElementId].shininess = .1, setElementClass.material[setElementId].map = (new THREE.TextureLoader).load(A + "images/building/Brick.jpg"), setElementClass.material[setElementId].normalScale.set(.01, .01), setElementClass.material[setElementId].map.wrapS = THREE.RepeatWrapping, setElementClass.material[setElementId].map.wrapT = THREE.RepeatWrapping, setElementClass.material[setElementId].map.anisotropy = 1, setElementClass.material[setElementId].map.repeat.isSceneLoaded = setElementClass.material[setElementId].normalMap.repeat.isSceneLoaded / 8, setElementClass.material[setElementId].map.offset.x = setElementClass.material[setElementId].normalMap.offset.x / 8) : (setElementClass.material[setElementId].map = null, setElementClass.material[setElementId].normalScale.set(1, 1), setElementClass.material[setElementId].specular.setHex(4144959), setElementClass.material[setElementId].shininess = 40), setElementClass.material[setElementId].needsUpdate = !0), "BuildingSoffit" === setElementClass.material[setElementId].name && setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.soffitColor).map(applyToControllers => applyToControllers.hex)), "EaveLightsTrim" === setElementClass.material[setElementId].name && (ma.hasOwnProperty("trimEaveLightsColor") ? setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimEaveLightsColor).map(applyToControllers => applyToControllers.hex)) : setElementClass.material[setElementId].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)))
            }
        }
    }), shouldAutoRotate = !0
}

function no(applyToControllers) {
    var setElementId = !1,
        setElementClass = ("touchstart" !== applyToControllers.type && "touchmove" !== applyToControllers.type && "touchend" !== applyToControllers.type || (setElementId = !0), r.isSceneLoaded = (applyToControllers.clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1, setElementId && (r.isSceneLoaded = (applyToControllers.touches[0].clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.touches[0].clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1), Aa.setFromCamera(r, currentCamera), ka = setElementId ? (za = {
            isSceneLoaded: applyToControllers.touches[0].clientX,
            y: applyToControllers.touches[0].clientY
        }, {
            isSceneLoaded: applyToControllers.touches[0].clientX,
            y: applyToControllers.touches[0].clientY
        }) : (za = {
            isSceneLoaded: applyToControllers.clientX,
            y: applyToControllers.clientY
        }, {
            isSceneLoaded: applyToControllers.clientX,
            y: applyToControllers.clientY
        }), Fa = !0, fo(), Aa.intersectObjects(_a)),
        setElementHidden = -1;
    for (let applyToControllers = 0; applyToControllers < setElementClass.length; applyToControllers++)
        if (setElementClass[applyToControllers].object.name.startsWith("selectionBox") && (setElementClass[applyToControllers].object = setElementClass[applyToControllers].object.parent), setElementClass[applyToControllers].object.userData.hasOwnProperty("fileType") && "lwo" == setElementClass[applyToControllers].object.userData.fileType) {
            if ((currentCamera !== orthographicCamera || !setElementClass[applyToControllers].object.name.startsWith("buildingBoundingBox")) && !0 === setElementClass[applyToControllers].object.visible) {
                setElementHidden = applyToControllers;
                break
            }
        } else if (!0 === setElementClass[applyToControllers].object.parent.visible) {
        setElementHidden = applyToControllers;
        break
    }
    scene && 0 < setElementClass.length && -1 < setElementHidden && !setElementClass[setElementHidden].object.parent.name.startsWith("scale") && (setElementHidden = -1), !0 === qt || 2 === qt ? ($("#popup").hide(), $("#line").hide()) : 0 < setElementClass.length && -1 < setElementHidden && (0 === applyToControllers.button || setElementId && 1 === applyToControllers.touches.length) && ("buildingBoundingBox" != setElementClass[setElementHidden].object.name && "leanTo1BoundingBox" != setElementClass[setElementHidden].object.name && "leanTo2BoundingBox" != setElementClass[setElementHidden].object.name && "leanTo3BoundingBox" != setElementClass[setElementHidden].object.name && "leanTo4BoundingBox" != setElementClass[setElementHidden].object.name || currentCamera == orthographicCamera) && (currentCamera == orthographicCamera && 1 < setElementClass.length && ("buildingBoundingBox" == setElementClass[setElementHidden].object.name || "leanTo1BoundingBox" == setElementClass[setElementHidden].object.name || "leanTo2BoundingBox" == setElementClass[setElementHidden].object.name || "leanTo3BoundingBox" == setElementClass[setElementHidden].object.name || "leanTo4BoundingBox" == setElementClass[setElementHidden].object.name) && (setElementClass[0] = setElementClass[1]), applyToControllers.stopPropagation(), orbitControls.enableRotate = !1, topControls.enablePan = !1, At = !0, "porc" === setElementClass[setElementHidden].object.name.substring(0, 4) || "scal" === setElementClass[setElementHidden].object.parent.name.substring(0, 4) || setElementClass[setElementHidden].object.name.startsWith("scale") && setElementClass[setElementHidden].object.userData.hasOwnProperty("fileType") && "lwo" == setElementClass[setElementHidden].object.userData.fileType || setElementClass[setElementHidden].object.name.startsWith("mansard") || "wind" === setElementClass[setElementHidden].object.name.substring(0, 4) || "walk" === setElementClass[setElementHidden].object.name.substring(0, 4) || "gara" === setElementClass[setElementHidden].object.name.substring(0, 4) ? (Be = y, Zo(y = setElementClass[setElementHidden].object), setElementClass = setElementClass[setElementHidden].object.name.startsWith("scale") && "lwo" == setElementClass[setElementHidden].object.userData.fileType ? Aa.intersectObject(tempD) : setElementClass[setElementHidden].object.parent.name.startsWith("scale") ? (y = setElementClass[setElementHidden].object.parent, Aa.intersectObject(tempD)) : Aa.intersectObjects($setElementClass, !0), Lo()) : setElementClass[setElementHidden].object.name.startsWith("measure") ? (null != y && mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && !y.name.startsWith("measure"))
            if (setElementId.renderOrder = 1, setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers].opacity = 1, setElementId.material[applyToControllers].depthTest = !0, setElementId.material[applyToControllers].emissive.setHex(0);
            else setElementId.material.opacity = 1, setElementId.material.depthTest = !0, setElementId.material.emissive.setHex(0)
    }), Be = y, y = null, y = setElementClass[setElementHidden].object, setElementClass = Aa.intersectObject(tempTE), $("#popup").hide(), $("#line").hide()) : (Be = y, y = null, y = setElementClass[setElementHidden].object.userData.hasOwnProperty("fileType") && "lwo" == setElementClass[setElementHidden].object.userData.fileType ? setElementClass[setElementHidden].object : setElementClass[setElementHidden].object.parent, setElementClass = Aa.intersectObject(tempD), Zo(y), $("#popup").is(":visible") ? ($("#line").show(), Ho(), Lo()) : ($("#popup").hide(), $("#line").hide())))
}

function ro(applyToControllers) {
    Qo();
    let setElementId = !1,
        ColorOption = null,
        renderer;
    if (Fa) {
        if ("touchstart" !== applyToControllers.type && "touchmove" !== applyToControllers.type && "touchend" !== applyToControllers.type || (setElementId = !0), r.isSceneLoaded = (applyToControllers.clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1, setElementId && (applyToControllers.preventDefault(), r.isSceneLoaded = (applyToControllers.touches[0].clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.touches[0].clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1), Aa.setFromCamera(r, currentCamera), ka = {
                isSceneLoaded: r.isSceneLoaded,
                y: r.y
            }, "popup" !== applyToControllers.target.id && "popup" !== applyToControllers.target.parentNode.id && "popup" !== applyToControllers.target.parentNode.parentNode.id && "popup" !== applyToControllers.target.parentNode.parentNode.parentNode.id && (!1 === Ia && (viewportElement.getBoundingClientRect(), setElementId ? (1 < Math.abs(za.isSceneLoaded - (applyToControllers.touches[0].pageX - viewportElement.offsetLeft)) || 1 < Math.abs(za.y - (applyToControllers.touches[0].pageY - viewportElement.offsetTop))) && (Ia = !0) : (1 < Math.abs(za.isSceneLoaded - (applyToControllers.pageX - viewportElement.offsetLeft)) || 1 < Math.abs(za.y - (applyToControllers.pageY - viewportElement.offsetTop))) && (Ia = !0)), y) && Ia) {
            Lo();
            let setElementClass = 0,
                setElementHidden = 0,
                i = 0,
                dimensionsArray = 0,
                r = "front";
            if (!At || 0 !== applyToControllers.button && 1 !== applyToControllers.touches.length || !y.name.startsWith("mansard") && "porc" !== y.name.substring(0, 4) && "wind" !== y.name.substring(0, 4) && "walk" !== y.name.substring(0, 4) && "gara" !== y.name.substring(0, 4) || 0 != $setElementId) {
                if (At && (0 === applyToControllers.button || 1 === applyToControllers.touches.length) && (void 0 !== (renderer = y.name.startsWith("measure") ? Aa.intersectObject(tempTE) : y.name.startsWith("interior") ? Aa.intersectObject(tempU) : Aa.intersectObject(tempD))[0] && (ColorOption = renderer[0].point.sub(Ga), y.position.copy(ColorOption), y.name.startsWith("measure")) && (y.userData.position = {
                        isSceneLoaded: ColorOption.isSceneLoaded,
                        y: ColorOption.y,
                        tempz: ColorOption.tempz
                    }, Ao(y)), "scale-driveway-clone" === y.name)) {
                    var controls = -1 * ColorOption.tempz - ma.width / 2,
                        c = ColorOption.isSceneLoaded - ma.depth / 2,
                        d = ColorOption.tempz - ma.width / 2,
                        tempP = -1 * ColorOption.isSceneLoaded - ma.depth / 2,
                        camera = Math.min(controls, c, d, tempP);
                    controls === camera ? (y.rotation.y = 0, r = 1) : c === camera ? (y.rotation.y = Math.PI / -2, r = 2) : d === camera ? (y.rotation.y = +Math.PI, r = 3) : p === camera && (y.rotation.y = Math.PI / 2, r = 4), setElementClass = 0, setElementHidden = 0, i = 0, dimensionsArray = 0, ma.leanTo2 && (setElementClass = ma.leanTo2Depth), ma.leanTo4 && (setElementHidden = ma.leanTo4Depth), ma.leanTo1 && (i = ma.leanTo1Depth), ma.leanTo3 && (dimensionsArray = ma.leanTo3Depth);
                    let applyToControllers, setElementId;
                    applyToControllers = 19 <= ma.width && (1 === r || 3 === r) ? Math.min(Math.max(ColorOption.isSceneLoaded, ma.width / -2 + 9.5), ma.width / 2 - 9.5) : Math.min(Math.max(ColorOption.isSceneLoaded, ma.width / -2), ma.width / 2), setElementId = 19 <= ma.depth && (2 === r || 4 === r) ? Math.min(Math.max(ColorOption.tempz, ma.depth / -2 + 9.5), ma.depth / 2 - 9.5) : Math.min(Math.max(ColorOption.tempz, ma.depth / -2), ma.depth / 2), 1 === r && (setElementId += i), 2 === r && (applyToControllers -= setElementClass), 3 === r && (setElementId -= dimensionsArray), 4 === r && (applyToControllers += setElementHidden), y.position.set(applyToControllers, 0, setElementId)
                }
            } else {
                controls = 0, c = 0, d = 0, tempP = 0;
                if (renderer = Aa.intersectObjects($setElementClass, !0), "porc" === y.name.substring(0, 4) && (renderer = renderer.concat(Aa.intersectObject(tempD))), 0 < (renderer = "porchWrap" === y.name.substring(0, 9) ? [] : renderer).length && Ia) {
                    "porc" !== y.name.substring(0, 4) ? 0 === renderer[0].faceIndex || 1 === renderer[0].faceIndex ? y.rotation.y = Math.PI / 2 + renderer[0].object.rotation.y : 2 === renderer[0].faceIndex || 3 === renderer[0].faceIndex ? y.rotation.y = Math.PI / -2 + renderer[0].object.rotation.y : 8 === renderer[0].faceIndex || 9 === renderer[0].faceIndex ? y.rotation.y = 0 + renderer[0].object.rotation.y : 10 === renderer[0].faceIndex || 11 === renderer[0].faceIndex ? y.rotation.y = +Math.PI + renderer[0].object.rotation.y : r = !1 : r = !1, !1 !== r && (0 === y.rotation.y && (r = "front"), y.rotation.y === Math.PI / 2 && (r = "right"), y.rotation.y === Math.PI / -2 && (r = "left"), y.rotation.y === +Math.PI) && (r = "back");
                    var camera = y.morphTargetInfluences[y.morphTargetDictionary.width],
                        tempG2 = y.morphTargetInfluences[y.morphTargetDictionary.height];
                    let applyToControllers = 0;
                    null !== y.morphTargetDictionary.depth && (applyToControllers = y.morphTargetInfluences[y.morphTargetDictionary.depth]), "window3x4-clone" === y.name || "window3x4Grid-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2, c = 4.7, d = 2.5), "left" !== r && "right" !== r || (tempP = 2, c = 4.7, d = 2.5)) : "window3x4Shutters-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3, c = 4.7, d = 2.5), "left" !== r && "right" !== r || (tempP = 3, c = 4.7, d = 2.5)) : "window4x3-clone" === y.name || "window4x3Grid-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2.5, c = 5.2, d = 2), "left" !== r && "right" !== r || (tempP = 2.5, c = 5.2, d = 2)) : "window4x3Shutters-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 4, c = 5.2, d = 2), "left" !== r && "right" !== r || (tempP = 4, c = 5.2, d = 2)) : "windowPicture-clone" === y.name || "windowCasement-clone" === y.name || "windowSlider-clone" === y.name || "windowDoubleHung-clone" === y.name || "windowSingleHung-clone" === y.name || "windowTwinset-clone" === y.name || "windowAwning-clone" === y.name || "windowHopper-clone" === y.name || "windowSlopeLeft-clone" === y.name || "windowSlopeRight-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 1 + camera / 2, c = 1 + g / 2 + 2, d = 1 + tempG2 / 2), "left" !== r && "right" !== r || (tempP = 1 + camera / 2, c = 1 + g / 2 + 2, d = 1 + tempG2 / 2)) : "windowLouver-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 1 + camera / 2, c = .5 + g / 2, d = 1 + tempG2 / 2), "left" !== r && "right" !== r || (p = 1 + camera / 2, c = .5 + tempG2 / 2, d = 1 + g / 2)) : "windowFramedOpening-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 1 + camera / 2, c = 1 + g / 2 + 2, d = 1 + tempG2 / 2), "left" !== r && "right" !== r || (tempP = 1 + camera / 2, c = 1 + g / 2 + 2, d = 1 + tempG2 / 2)) : "walkDoorSolid-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2 + camera / 2, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoorSolidDouble-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3.5 + camera / 2, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "walkDoorHalfGlass-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2 + camera / 2, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoorHalfGlassDouble-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3.5 + camera / 2, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "walkDoor6Panel-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2.5, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "walkDoor6PanelDouble-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3.5 + camera / 2, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoor6Lite-clone" === y.name || "walkDoor9Lite-clone" === y.name || "walkDoor9LiteNoPanel-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2.5, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoor9LiteDouble-clone" === y.name || "walkDoorSlidingGlassDouble-clone" === y.name || "walkDoorFrenchDouble-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3.5 + camera / 2, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "walkDoorAllGlass-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2.5, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "walkDoorAllGlassDouble-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3.5 + camera / 2, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoorCrossbuck-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2.5, c = 0), "left" !== r && "right" !== r || (p = 2.5, c = 0)) : "walkDoorEquine-clone" === y.name || "walkDoorEquineSmooth-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 3, c = 0), "left" !== r && "right" !== r || (p = 3, c = 0)) : "walkDoorFramedOpening-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 2 + camera / 2, c = 0), "left" !== r && "right" !== r || (tempP = 2.5, c = 0)) : "garageOverheadPanel-clone" === y.name || "garageOverheadPanelWindow-clone" === y.name || "garageOverheadFlat-clone" === y.name || "garageOverheadFlatWindow-clone" === y.name || "garageOverheadFlatModern-clone" === y.name || "garageOverheadRibbed-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 6 + 10 * camera, c = 0), "left" !== r && "right" !== r || (tempP = 6 + 10 * camera, c = 0)) : y.name.startsWith("garageSlide") && y.name.endsWith("-clone") ? ("front" !== r && "back" !== r || (controls = 10.25 + 10 * camera * 2, c = 0), "left" !== r && "right" !== r || (tempP = 10.25 + 10 * camera * 2, c = 0)) : "garageBiFold-clone" === y.name || "garageHydraulic-clone" === y.name || "garageRollUp-clone" === y.name || "garageFramedOpening-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 6 + 10 * camera, c = 0), "left" !== r && "right" !== r || (tempP = 6 + 10 * camera, c = 0)) : "mansard-clone" === y.name || "mansardWood-clone" === y.name ? ("front" !== r && "back" !== r || (controls = 1 + camera / 2, c = 4.7, d = 2.5 + applyToControllers), "left" !== r && "right" !== r || (p = 1 + camera / 2, c = 4.7, d = 2.5 + applyToControllers)) : "mansardHip-clone" !== y.name && "mansardHip2-clone" !== y.name || ("front" !== r && "back" !== r || (controls = 2.5 + camera / 2, c = 4.7, d = 2 + applyToControllers), "left" !== r && "right" !== r) || (p = 2.5 + camera / 2, c = 4.7, d = 2 + applyToControllers), "porc" === y.name.substring(0, 4) ? (null === (ColorOption = renderer[0].point.sub(Ga)) && (renderer = Aa.intersectObject(tempD), ColorOption = renderer[0].point.sub(Ga)), setElementClass = 0, setElementHidden = 0, i = 0, dimensionsArray = 0, ma.leanTo2 && (setElementClass = ma.leanTo2Depth), ma.leanTo4 && (setElementHidden = ma.leanTo4Depth), ma.leanTo1 && (i = ma.leanTo1Depth), ma.leanTo3 && (dimensionsArray = ma.leanTo3Depth), ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE && ma.coveredGableExtensionEEnclosed && (setElementClass = Math.max(setElementClass, ma.coveredGableExtensionEDepth)), ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW && ma.coveredGableExtensionWEnclosed && (setElementHidden = Math.max(setElementHidden, ma.coveredGableExtensionWDepth)), ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN && ma.coveredGableExtensionNEnclosed && (i = Math.max(i, ma.coveredGableExtensionNDepth)), ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS && ma.coveredGableExtensionSEnclosed && (dimensionsArray = Math.max(dimensionsArray, ma.coveredGableExtensionSDepth)), "porchN-clone" === y.name && (ColorOption.tempz = ma.depth / 2 + i, controls = 6), "porchS-clone" === y.name && (ColorOption.z = ma.depth / -2 - dimensionsArray), "porchE-clone" === y.name && (ColorOption.isSceneLoaded = ma.width / -2 - setElementClass), "porchW-clone" === y.name && (ColorOption.x = ma.width / 2 + setElementHidden), ColorOption.y = 0) : r ? (null === (ColorOption = renderer[0].point.sub(Ga)) && "porc" === y.name.substring(0, 4) && (renderer = Aa.intersectObject(tempD), ColorOption = renderer[0].point.sub(Ga)), setElementClass = 0, setElementHidden = 0, i = 0, dimensionsArray = 0, ma.leanTo2 && (setElementClass = ma.leanTo2Depth), ma.leanTo4 && (setElementHidden = ma.leanTo4Depth), ma.leanTo1 && (i = ma.leanTo1Depth), ma.leanTo3 && (dimensionsArray = ma.leanTo3Depth), ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE && ma.coveredGableExtensionEEnclosed && (setElementClass = Math.max(setElementClass, ma.coveredGableExtensionEDepth)), ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW && ma.coveredGableExtensionWEnclosed && (setElementHidden = Math.max(setElementHidden, ma.coveredGableExtensionWDepth)), ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN && ma.coveredGableExtensionNEnclosed && (i = Math.max(i, ma.coveredGableExtensionNDepth)), ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS && ma.coveredGableExtensionSEnclosed && (dimensionsArray = Math.max(dimensionsArray, ma.coveredGableExtensionSDepth)), ColorOption.isSceneLoaded = Math.min(Math.max(ColorOption.isSceneLoaded, ma.width / -2 - setElementClass + controls), ma.width / 2 + setElementHidden - controls), ColorOption.y = 0 === c ? 0 : Math.min(Math.max(ColorOption.y, c), ma.roofHeightAtX(ColorOption.isSceneLoaded) - d), ColorOption.tempz = Math.min(Math.max(ColorOption.tempz, ma.depth / -2 - n + p), ma.depth / 2 + i - tempP)) : ColorOption.tempz = Math.min(Math.max(ColorOption.tempz, ma.depth / -2 + p), ma.depth / 2 - tempP), null != ColorOption && y.position.copy(ColorOption)
                }
            }
        }
    } else if (y && (!0 === qt || 2 === qt) && y.name.startsWith("measure")) setElementId = !1, "touchstart" !== applyToControllers.type && "touchmove" !== applyToControllers.type && "touchend" !== applyToControllers.type || (setElementId = !0), r.isSceneLoaded = (applyToControllers.clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1, setElementId && (applyToControllers.preventDefault(), r.isSceneLoaded = (applyToControllers.touches[0].clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.touches[0].clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1), Aa.setFromCamera(r, currentCamera), ka = {
        isSceneLoaded: r.isSceneLoaded,
        y: r.y
    }, void 0 !== (renderer = Aa.intersectObject(tempTE))[0] && (ColorOption = renderer[0].point.sub(Ga), y.position.copy(ColorOption), y.userData.position = {
        isSceneLoaded: ColorOption.isSceneLoaded,
        y: ColorOption.y,
        tempz: ColorOption.tempz
    }), 2 === qt && (Ao(y), shouldAutoRotate = !0);
    else {
        setElementId = !1, "touchstart" !== applyToControllers.type && "touchmove" !== applyToControllers.type && "touchend" !== applyToControllers.type || (setElementId = !0), r.isSceneLoaded = (applyToControllers.clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1, setElementId && (applyToControllers.preventDefault(), r.isSceneLoaded = (applyToControllers.touches[0].clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.touches[0].clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1), Aa.setFromCamera(r, currentCamera), renderer = Aa.intersectObjects(_a, !0);
        for (let applyToControllers = 0; applyToControllers < renderer.length; applyToControllers++)
            if (renderer[applyToControllers].object.name.startsWith("itemSelectionBox")) {
                if (scene && !renderer[applyToControllers].object.parent.name.startsWith("scale")) break;
                renderer[applyToControllers].object = renderer[applyToControllers].object.parent, Uo(renderer[applyToControllers].object);
                break
            }
    }
}

function so(applyToControllers) {
    var setElementId = !1;
    "touchstart" !== applyToControllers.type && "touchmove" !== applyToControllers.type && "touchend" !== applyToControllers.type || (setElementId = !0), r.isSceneLoaded = (applyToControllers.clientX - rendererInstance.domElement.getBoundingClientRect().left) / _.domElement.clientWidth * 2 - 1, r.y = 2 * -((applyToControllers.clientY - _.domElement.getBoundingClientRect().top) / rendererInstance.domElement.clientHeight) + 1, setElementId && (r = {
        isSceneLoaded: ka.isSceneLoaded,
        y: ka.y
    }), y && !1 === Ia ? y.name.startsWith("interior") || y.name.startsWith("mansard") || y.name.startsWith("porch") || y.name.startsWith("scale") || y.name.startsWith("window") || y.name.startsWith("walk") || y.name.startsWith("garage") ? $("#popup").is(":hidden") ? ($("#popup").css("display", "flex"), setElementId = Math.min(applyToControllers.clientX + 50, $("#viewport3D").innerWidth() - $("#popup").outerWidth()), applyToControllers = Math.max(applyToControllers.clientY - 275, 0), $("#popup").css({
        top: applyToControllers,
        left: setElementId
    }), $("#line").show(), Ho(), Lo()) : Be && y.uuid === Be.uuid && !y.name.startsWith("measure") && ($("#popup").hide(), $("#line").hide(), Be = y, y = null, Qo()) : y && y.name.startsWith("measure") && !0 === qt ? ($setElementHidden(y), shouldAutoRotate = !0) : y && y.name.startsWith("measure") && 2 === qt && (qt = !1, Be = y, y = null, shouldAutoRotate = !0) : y && Ia && $("#popup").is(":hidden") && !y.name.startsWith("measure") && (Zo(!1), Be = y, y = null, shouldAutoRotate = !0), Zt = Yt = Ut = Xt = Qt = Vt = 0, Ia = Fa = At = !1, $("#touchGUI").hide(), orbitControls.enableRotate = !0, orbitControls.enablePan = !scene, orbitControls.enableZoom = !0, topControls.enablePan = !scene, topControls.enableZoom = !0
}

function lo(applyToControllers, setElementId, setElementClass) {
    applyToControllers = applyToControllers || "", setElementId = setElementId || 0, setElementClass = setElementClass || !1;
    var setElementHidden = new THREE.Vector3,
        setElementHidden = mainScene.getObjectByName("UserCamera").getWorldDirection(setElementHidden),
        setElementHidden = Math.atan2(setElementHidden.isSceneLoaded, setElementHidden.tempz),
        i = mainScene.getObjectByName("UserCamera").position;
    let dimensionsArray = 1,
        r = 0,
        ColorOption = 0,
        renderer = 0,
        controls = (i.isSceneLoaded < ma.width / 2 && i.x > ma.width / -2 && i.y < ma.height / 2 && 0 < i.y && i.z < ma.depth / 2 && i.tempz > ma.depth / -2 && (dimensionsArray = -1), 0),
        c = 0,
        d = 0,
        tempP = 0;
    ma.leanTo1 && ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls && (d = ma.leanTo1Depth), ma.leanTo2 && ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls && (controls = ma.leanTo2Depth), ma.leanTo3 && ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls && (tempP = ma.leanTo3Depth), ma.leanTo4 && ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls && (c = ma.leanTo4Depth), ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE && ma.coveredGableExtensionEEnclosed && (controls = Math.max(controls, ma.coveredGableExtensionEDepth)), ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW && ma.coveredGableExtensionWEnclosed && (c = Math.max(c, ma.coveredGableExtensionWDepth)), ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN && ma.coveredGableExtensionNEnclosed && (d = Math.max(d, ma.coveredGableExtensionNDepth)), ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS && ma.coveredGableExtensionSEnclosed && (tempP = Math.max(tempP, ma.coveredGableExtensionSDepth)), renderer = Math.abs(setElementHidden * dimensionsArray) < Math.PI / 4 || Math.abs(setElementHidden * n) > 3 * Math.PI / 4 ? Math.abs(setElementHidden) > Math.PI / 2 ? (ColorOption = (ma.depth / 2 + d) * dimensionsArray + dimensionsArray * dimensionsArray, .5 * Math.PI * Math.abs(dimensionsArray - 1)) : (ColorOption = (ma.depth / -2 - p) * n - n * n, .5 * Math.PI * (n + 1)) : 0 < i.x ? (r = (ma.width / 2 + c) * dimensionsArray + dimensionsArray * dimensionsArray, Math.PI / 2 * n) : (r = (ma.width / -2 - controls) * dimensionsArray - dimensionsArray * dimensionsArray, Math.PI / -2 * dimensionsArray);
    var camera = mainScene.getObjectByName(applyToControllers).GdeepCloneMaterials();
    if (camera.name = applyToControllers + "-clone", camera.visible = !0, camera.castShadow = !0, camera.receiveShadow = !1, camera.userData.scale = {
            isSceneLoaded: 1,
            y: 1,
            tempz: 1
        }, camera.name.startsWith("walkDoor") && (camera.userData.doorSwing = 1, camera.userData.scale = {
            isSceneLoaded: 3,
            y: 7,
            tempz: 0
        }), camera.name.startsWith("walkDoor") && camera.name.endsWith("Double-clone") && (camera.userData.doorSwing = 1, camera.userData.scale = {
            isSceneLoaded: 6,
            y: 7,
            tempz: 0
        }), camera.name.startsWith("garage") && (camera.userData.scale = {
            isSceneLoaded: 10,
            y: Math.min(ma.height - 2, 10),
            tempz: 0
        }), camera.name.startsWith("mansardHip") && (camera.userData.scale = {
            isSceneLoaded: 6,
            y: 2,
            tempz: 2
        }), camera.userData.position = {
            isSceneLoaded: r,
            y: setElementId,
            tempz: ColorOption
        }, camera.userData.rotation = {
            isSceneLoaded: 0,
            y: renderer,
            tempz: 0
        }, Xo(camera), setElementClass) {
        if ("object" == typeof setElementClass) {
            setElementHidden = setElementClass.position.split(",");
            if (camera.position.set(parseFloat(setElementHidden[0]), parseFloat(setElementHidden[1]), parseFloat(setElementHidden[2])), camera.userData.position = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }, setElementHidden = setElementClass.rotation.split(","), camera.rotation.set(parseFloat(setElementHidden[0]), parseFloat(setElementHidden[1]), parseFloat(setElementHidden[2])), camera.userData.rotation = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }, camera.name.startsWith("walk") && (setElementHidden = setElementClass.scale.split(","), camera.name.endsWith("Double-clone") ? camera.morphTargetInfluences[camera.morphTargetDictionary.width] = parseFloat(setElementHidden[0]) - 6 : camera.morphTargetInfluences[camera.morphTargetDictionary.width] = parseFloat(setElementHidden[0]) - 3, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = parseFloat(setElementHidden[1]) - 7, camera.userData.scale = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }), camera.name.startsWith("window") && (setElementHidden = setElementClass.scale.split(","), camera.morphTargetInfluences[camera.morphTargetDictionary.width] = parseFloat(setElementHidden[0]) - 1, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = parseFloat(setElementHidden[1]) - 1, camera.userData.scale = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }, camera.name.startsWith("windowSlope")) && (camera.morphTargetInfluences[camera.morphTargetDictionary.slope] = ma.roofPitch / 12 * parseFloat(setElementHidden[0])), camera.name.startsWith("gara") && (setElementHidden = setElementClass.scale.split(","), camera.morphTargetInfluences[camera.morphTargetDictionary.width] = (parseFloat(setElementHidden[0]) - 10) / 10 / 2, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = (parseFloat(setElementHidden[1]) - 10) / 10, camera.userData.scale = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }), camera.name.startsWith("mansard") && (setElementHidden = setElementClass.scale.split(","), camera.name.startsWith("mansardHip") ? camera.morphTargetInfluences[camera.morphTargetDictionary.width] = parseFloat(setElementHidden[0]) - 5 : camera.morphTargetInfluences[camera.morphTargetDictionary.width] = parseFloat(setElementHidden[0]) - 1, camera.morphTargetInfluences[camera.morphTargetDictionary.depth] = parseFloat(setElementHidden[2]) - 2, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = parseFloat(setElementHidden[1]) - 2, camera.userData.scale = {
                    isSceneLoaded: parseFloat(setElementHidden[0]),
                    y: parseFloat(setElementHidden[1]),
                    tempz: parseFloat(setElementHidden[2])
                }, xi(camera)), "-1" === setElementClass.doorSwing && (camera.scale.isSceneLoaded = -1, y.userData.doorSwing = -1), setElementClass.shutters) camera.morphTargetInfluences[camera.morphTargetDictionary.hideShutters] = 0;
            else {
                camera.morphTargetInfluences[camera.morphTargetDictionary.hideShutters] = 1;
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "Shutters" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !1)
            }
            if (setElementClass.grid)
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "WindowGrid" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !0);
            else
                for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "WindowGrid" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !1);
            Be = y, setElementClass.hasOwnProperty("select") && !0 === setElementClass.select ? Zo(camera) : y = null, Qo()
        }
    } else {
        if (camera.position.set(r, setElementId, ColorOption), camera.rotation.set(0, renderer, 0), camera.name.startsWith("mansard") && (camera.userData.scale = {
                isSceneLoaded: 6,
                y: 2,
                tempz: 3
            }, camera.name.startsWith("mansardHip") ? camera.morphTargetInfluences[camera.morphTargetDictionary.width] = 1 : camera.morphTargetInfluences[camera.morphTargetDictionary.width] = 5, camera.morphTargetInfluences[camera.morphTargetDictionary.depth] = 1, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = 0, xi(camera)), camera.name.startsWith("window")) {
            let applyToControllers = 3,
                setElementId = 4;
            camera.name.startsWith("windowSlider") && (applyToControllers = 4, setElementId = 3), camera.name.startsWith("windowDoubleHung") && (applyToControllers = 3, setElementId = 4), camera.name.startsWith("windowTwinset") && (applyToControllers = 3, setElementId = 4), camera.name.startsWith("windowPicture") && (applyToControllers = 5, setElementId = 4), camera.name.startsWith("windowSingleHung") && (applyToControllers = 3, setElementId = 4), camera.name.startsWith("windowLouver") && (applyToControllers = 4, setElementId = 2), camera.userData.scale = {
                isSceneLoaded: applyToControllers,
                y: setElementId,
                tempz: 0
            }, camera.morphTargetInfluences[camera.morphTargetDictionary.width] = applyToControllers - 1, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = setElementId - 1, camera.name.startsWith("windowSlope") && (camera.morphTargetInfluences[camera.morphTargetDictionary.slope] = ma.roofPitch / 12 * applyToControllers), ga && (camera.position.y = 7 - setElementId / 2, camera.userData.position.y = 7 - setElementId / 2)
        }
        if (camera.name.startsWith("window"))
            for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) "Shutters" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !1, camera.morphTargetInfluences[camera.morphTargetDictionary.hideShutters] = 1), "WindowGrid" === camera.material[applyToControllers].name && (camera.material[applyToControllers].visible = !1);
        if (camera.name.startsWith("walkDoor")) {
            let applyToControllers = 3,
                setElementId = 80 / 12;
            camera.name.startsWith("walkDoorEquine") && (applyToControllers = 4, setElementId = 82 / 12), camera.name.endsWith("Double") && (applyToControllers = 6, setElementId = 80 / 12), camera.userData.scale = {
                isSceneLoaded: applyToControllers,
                y: setElementId,
                tempz: 0
            }, camera.name.endsWith("Double") ? camera.morphTargetInfluences[camera.morphTargetDictionary.width] = applyToControllers - 6 : camera.morphTargetInfluences[camera.morphTargetDictionary.width] = applyToControllers - 3, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = setElementId - 7
        }
        camera.name.startsWith("gara") && (isGeometryActive && (camera.name.startsWith("garageSlideMorton") && (camera.name.endsWith("Left-clone") || camera.name.endsWith("Right-clone")) ? camera.name.startsWith("garageSlideMortonThreeStack") || camera.name.startsWith("garageSlideMortonThreeStackCrossbuck") ? (camera.userData.scale.isSceneLoaded = 6, camera.name.startsWith("garageSlideMortonThreeStackCrossbuck") ? camera.userData.scale.y = 14 : camera.userData.scale.y = 11) : camera.userData.scale.isSceneLoaded = 5 : camera.name.startsWith("garageSlideMortonThreeStack") ? camera.userData.scale.y = 11 : camera.name.startsWith("garageSlideMortonThreeStackCrossbuck") && (camera.userData.scale.isSceneLoaded = 12, camera.userData.scale.y = 14)), camera.morphTargetInfluences[camera.morphTargetDictionary.width] = (camera.userData.scale.isSceneLoaded - 10) / 10 / 2, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = (camera.userData.scale.y - 10) / 10), ma.hasOwnProperty(applyToControllers + "Qty") && ma[applyToControllers + "Qty"]++, Zo(camera)
    }
    tempLA.add(camera), O(), shouldAutoRotate = !0
}

function ho() {
    this.addPerson = function() {
        c("person")
    }, this.addMan = function() {
        c("man")
    }, this.addWoman = function() {
        c("woman")
    }, this.addTruck = function() {
        c("truck")
    }, this.addCar = function() {
        c("car")
    }, this.addAirplane = function() {
        c("airplane")
    }, this.addATV = function() {
        c("atv")
    }, this.addJetski = function() {
        c("jetski")
    }, this.addCombine = function() {
        c("combine")
    }, this.addTractor = function() {
        c("tractor")
    }, this.addBoat = function() {
        c("boat")
    }, this.addSkiBoat = function() {
        c("skiBoat")
    }, this.addDriveway = function() {
        c("driveway")
    }, this.addGrainCart = function() {
        c("grainCart")
    }, this.addSemiTruck = function() {
        c("semiTruck")
    }, this.addSemiTrailer = function() {
        c("semiTrailer")
    }, this.addSemiTrailer53 = function() {
        c("semiTrailer53")
    }, this.addShippingContainer20 = function() {
        c("shippingContainer20")
    }, this.addShippingContainer40 = function() {
        c("shippingContainer40")
    }, this.addBackhoe = function() {
        c("backhoe")
    }, this.addCornHead6 = function() {
        c("cornHead6")
    }, this.addCornHead = function() {
        c("cornHead")
    }, this.addCornHead12 = function() {
        c("cornHead12")
    }, this.addBeanHead = function() {
        c("beanHead")
    }, this.addBeanHead35 = function() {
        c("beanHead35")
    }, this.addBeanHead40 = function() {
        c("beanHead40")
    }, this.addDesk = function() {
        c("desk")
    }, this.addChair = function() {
        c("chair")
    }, this.addConferenceTable = function() {
        c("conferenceTable")
    }, this.addLawnMower = function() {
        c("lawnMower")
    }, this.addRV = function() {
        c("rv")
    }, this.addCamper = function() {
        c("camper")
    }, this.addHorseStall = function() {
        c("horseStall")
    }, this.addHayBales = function() {
        c("hayBales")
    }, this.addWorkbench = function() {
        c("workbench")
    }, this.addAirCompressor = function() {
        c("airCompressor")
    }, this.addBed = function() {
        c("bed")
    }, this.addCouch = function() {
        c("couch")
    }, this.addRidingMower = function() {
        c("ridingMower")
    }, this.addKitchenTable = function() {
        c("kitchenTable")
    }, this.addRecliner = function() {
        c("recliner")
    }, this.addToilet = function() {
        c("toilet")
    }, this.addUtilitySink = function() {
        c("utilitySink")
    }, this.addPedestalSink = function() {
        c("pedestalSink")
    }, this.addHorse = function() {
        c("horse")
    }, this.addUTV = function() {
        c("utv")
    }, this.addCultivator = function() {
        c("cultivator")
    }, this.addKitchenChair = function() {
        c("kitchenChair")
    }, this.addNightStand = function() {
        c("nightStand")
    }, this.addCoffeeTable = function() {
        c("coffeeTable")
    }, this.addEndTable = function() {
        c("endTable")
    }
}

function c(setElementId, setElementClass) {
    var applyToControllers, setElementHidden;
    setElementId = setElementId || !1, setElementClass = setElementClass || !1, void 0 === mainScene.getObjectByName(setElementId) ? (applyToControllers = A + "objects/scale-" + setElementId, (setElementHidden = new THREE.LWOLoader).setResourcePath(A + "images/"), setElementHidden.load(applyToControllers + ".lwo", function(applyToControllers) {
        applyToControllers.meshes.forEach(function(applyToControllers) {
            applyToControllers.name = setElementId, applyToControllers.visible = !1, applyToControllers.castShadow = !0, applyToControllers.receiveShadow = !0, applyToControllers.frustumCulled = !1, applyToControllers.userData.fileType = "lwo", applyToControllers.hasOwnProperty("morphTargetInfluences") && (applyToControllers.material.morphTargets = !0), 0 < applyToControllers.material.length ? applyToControllers.material.forEach(function(applyToControllers) {
                "MeshStandardMaterial" == applyToControllers.type && null !== applyToControllers.roughnessMap && (applyToControllers.roughness = 1)
            }) : "MeshStandardMaterial" == applyToControllers.material.type && null !== applyToControllers.material.roughnessMap && (applyToControllers.material.roughness = 1), tempHA.add(applyToControllers), co(setElementId, setElementClass)
        })
    })) : co(setElementId, setElementClass)
}

function co(applyToControllers, setElementId) {
    applyToControllers = applyToControllers || "", setElementId = setElementId || !1;
    var setElementClass = 0,
        setElementHidden = 0,
        i = 0,
        dimensionsArray = 0,
        dimensionsArray = (ma.leanTo1 && (i = ma.leanTo1Depth), ma.leanTo2 && (setElementClass = ma.leanTo2Depth), ma.leanTo3 && (dimensionsArray = ma.leanTo3Depth), ma.leanTo4 && (setElementHidden = ma.leanTo4Depth), ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE && ma.coveredGableExtensionEEnclosed && (setElementClass = Math.max(setElementClass, ma.coveredGableExtensionEDepth)), ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW && ma.coveredGableExtensionWEnclosed && (setElementHidden = Math.max(setElementHidden, ma.coveredGableExtensionWDepth)), ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN && ma.coveredGableExtensionNEnclosed && (i = Math.max(i, ma.coveredGableExtensionNDepth)), ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS && ma.coveredGableExtensionSEnclosed && (dimensionsArray = Math.max(dimensionsArray, ma.coveredGableExtensionSDepth)), []),
        setElementHidden = ("person" == applyToControllers && (dimensionsArray = [ma.width / 2 + setElementHidden + .75, 0, ma.depth / 2 + i + 3.5]), "man" == applyToControllers && (dimensionsArray = [ma.width / 2 + setElementHidden + .25, 0, ma.depth / 2 + i + 3.5]), "woman" == applyToControllers && (dimensionsArray = [ma.width / 2 + setElementHidden + 2.5, 0, ma.depth / 2 + i + 3.5]), "truck" == applyToControllers && (dimensionsArray = [ma.width / 2 + setElementHidden + 7.75, 0, ma.depth / 2 + i - 3.25]), "car" == applyToControllers && (dimensionsArray = [ma.width / 2 + setElementHidden + 16, 0, ma.depth / 2 + i - 3.25]), "airplane" == applyToControllers && (dimensionsArray = [ma.width / -2 - setElementClass - 12, 0, ma.depth / 2 + i + 8.5]), "atv" == applyToControllers && (dimensionsArray = [ma.width / 2 - 4.5, 0, ma.depth / 2 + i + 5.5]), "utv" == applyToControllers && (dimensionsArray = [ma.width / 2 - 4.5, 0, ma.depth / 2 + i + 5.5]), "jetski" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "combine" == applyToControllers && (dimensionsArray = [ma.width / -2 + 8.4, 0, ma.depth / 2 + i + 23.5]), "tractor" == applyToControllers && (dimensionsArray = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]), "boat" == applyToControllers && (dimensionsArray = [ma.width / 2 + 3, 0, ma.depth / 2 + i + 14]), "skiBoat" == applyToControllers && (dimensionsArray = [ma.width / 2 + 3, 0, ma.depth / 2 + i + 14]), "driveway" == applyToControllers && (dimensionsArray = [0, 0, +(ma.depth / 2 + i)]), "grainCart" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "semiTruck" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "semiTrailer" == applyToControllers && (dimensionsArray = [ma.width / 2 + 6.25, 0, ma.depth / 2 + i + 22.75]), "semiTrailer53" == applyToControllers && (n = [ma.width / 2 + 6.25, 0, ma.depth / 2 + i + 26.75]), "shippingContainer20" == applyToControllers && (n = [ma.width / 2 + 6, 0, 0]), "shippingContainer40" == applyToControllers && (dimensionsArray = [ma.width / 2 + 8, 0, 0]), "backhoe" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "cornHead6" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "cornHead" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "cornHead12" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "beanHead" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "beanHead35" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "beanHead40" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "cultivator" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "desk" == applyToControllers && (dimensionsArray = [0, 0, 0]), "chair" == applyToControllers && (dimensionsArray = [0, 0, 0]), "conferenceTable" == applyToControllers && (dimensionsArray = [0, 0, 0]), "lawnMower" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "rv" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "camper" == applyToControllers && (dimensionsArray = [ma.width / 2 - 3.25, 0, ma.depth / 2 + i + 16.75]), "horseStall" == applyToControllers && (dimensionsArray = [0, 0, 0]), "hayBales" == applyToControllers && (dimensionsArray = [0, 0, 0]), "workbench" == applyToControllers && (dimensionsArray = [0, 0, 0]), "airCompressor" == applyToControllers && (dimensionsArray = [0, 0, 0]), "bed" == applyToControllers && (dimensionsArray = [0, 0, 0]), "couch" == applyToControllers && (dimensionsArray = [0, 0, 0]), "kitchenTable" == applyToControllers && (dimensionsArray = [0, 0, 0]), "recliner" == applyToControllers && (dimensionsArray = [0, 0, 0]), "toilet" == applyToControllers && (dimensionsArray = [0, 0, 0]), "utilitySink" == applyToControllers && (dimensionsArray = [0, 0, 0]), "pedestalSink" == applyToControllers && (dimensionsArray = [0, 0, 0]), "ridingMower" == applyToControllers && (dimensionsArray = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]), "horse" == applyToControllers && (dimensionsArray = [ma.width / 2 - 10, 0, ma.depth / 2 + i + 11.5]), "kitchenChair" == applyToControllers && (dimensionsArray = [0, 0, 0]), "nightStand" == applyToControllers && (dimensionsArray = [0, 0, 0]), "coffeeTable" == applyToControllers && (dimensionsArray = [0, 0, 0]), "endTable" == applyToControllers && (dimensionsArray = [0, 0, 0]), mainScene.getObjectByName(applyToControllers).GdeepCloneMaterials());
    setElementHidden.name = "scale-" + applyToControllers + "-clone", setElementHidden.visible = !0, setElementHidden.castShadow = !0, setElementHidden.receiveShadow = !0, setElementHidden.userData.fileType = mainScene.getObjectByName(applyToControllers).userData.fileType, setElementHidden.userData.rotationMultiplyer = 0, Xo(setElementHidden), setElementId ? "object" == typeof setElementId && (setElementClass = setElementId.position.split(","), setElementHidden.position.set(parseFloat(setElementClass[0]), parseFloat(setElementClass[1]), parseFloat(setElementClass[2])), setElementClass = setElementId.rotation.split(","), setElementHidden.rotation.set(parseFloat(setElementClass[0]), parseFloat(setElementClass[1]), parseFloat(setElementClass[2])), setElementHidden.userData.rotationMultiplyer = parseFloat(setElementClass[1])) : setElementHidden.position.set(dimensionsArray[0], dimensionsArray[1], dimensionsArray[2]), tempLA.add(setElementHidden), ma.hasOwnProperty(applyToControllers) && ma[applyToControllers]++, shouldAutoRotate = !0
}

function po() {
    this.addInteriorWall = function() {
        mo("interiorWall")
    }, this.addInteriorDoor = function() {
        mo("interiorDoor")
    }
}

function mo(applyToControllers, setElementId) {
    applyToControllers = applyToControllers || !1, setElementId = setElementId || !1;
    var setElementClass = mainScene.getObjectByName(applyToControllers);
    let setElementHidden;
    if ((setElementHidden = "interiorWall" == applyToControllers ? setElementClass.deepClone() : setElementClass.clone()).name += "-clone", setElementHidden.visible = !0, setElementHidden.userData.rotationMultiplyer = 0, setElementHidden.userData.position = new THREE.Vector3, setElementHidden.userData.scale = new THREE.Vector3(1, 1, 1), setElementHidden.userData.toNorthWall = function(applyToControllers) {
            if (void 0 === applyToControllers) return ma.coreBuildingDimensions().northEdge - setElementHidden.position.tempz;
            setElementHidden.userData.position.tempz = setElementHidden.position.tempz = ma.coreBuildingDimensions().northEdge - applyToControllers
        }, "interiorDoor" == applyToControllers && (setElementHidden.userData.doorSwing = 1), tempUE.add(setElementHidden), "interiorWall" === applyToControllers) {
        var i = (new THREE.TextureLoader).load(tempQ),
            setElementClass = (i.anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), i.wrapS = THREE.RepeatWrapping, i.wrapT = THREE.RepeatWrapping, A + "images/building/OSB.jpg"),
            dimensionsArray = (new THREE.TextureLoader).load(setElementClass);
        dimensionsArray.anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), dimensionsArray.wrapS = THREE.RepeatWrapping, dimensionsArray.wrapT = THREE.RepeatWrapping;
        for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers] = setElementHidden.material[applyToControllers].clone(), "interiorWallUpper" === setElementHidden.material[applyToControllers].name && (setElementHidden.material[applyToControllers].normalMap = i, setElementHidden.userData.metalTexture = i, setElementHidden.userData.topMaterial = setElementHidden.material[applyToControllers]), "interiorWallLower" === setElementHidden.material[applyToControllers].name && (setElementHidden.userData.woodTexture = dimensionsArray, setElementHidden.userData.bottomMaterial = setElementHidden.material[applyToControllers]);
        setElementHidden.scale.isSceneLoaded = 5, setElementHidden.userData.scale.isSceneLoaded = 5, setElementHidden.userData.material = "Steel"
    }
    Xo(setElementHidden), setElementId ? (setElementClass = setElementId.position.split(","), setElementHidden.position.set(parseFloat(setElementClass[0]), parseFloat(setElementClass[1]), parseFloat(setElementClass[2])), setElementClass = setElementId.rotation.split(","), setElementHidden.rotation.set(parseFloat(setElementClass[0]), parseFloat(setElementClass[1]), parseFloat(setElementClass[2])), setElementHidden.userData.rotationMultiplyer = parseFloat(setElementClass[1]), setElementClass = setElementId.scale.split(","), setElementHidden.scale.set(parseFloat(setElementClass[0]), parseFloat(setElementClass[1]), parseFloat(setElementClass[2])), setElementHidden.userData.width = parseFloat(setElementClass[0]), setElementHidden.userData.height = parseFloat(setElementClass[1]), setElementId.hasOwnProperty("doorSwing") && (-1 == setElementId.doorSwing ? (setElementHidden.userData.doorSwing = -1, setElementHidden.scale.isSceneLoaded = -1) : setElementHidden.userData.doorSwing = 1), setElementId.hasOwnProperty("material") && (setElementHidden.userData.material = setElementId.material)) : ma.hasOwnProperty(applyToControllers + "Qty") && ma[applyToControllers + "Qty"]++, go(), setElementId || ($("#popup").show(), $("#line").show(), Ho(), Lo())
}

function go() {
    mainScene.traverse(function(setElementHidden) {
        if (setElementHidden instanceof THREE.Mesh && ("interiorWall-clone" == setElementHidden.name || "dividingWall" == setElementHidden.name)) {
            var i = setElementHidden.scale.y = ma.height - 1,
                applyToControllers = setElementHidden.scale.isSceneLoaded;
            if (setElementHidden.userData.height = i, setElementHidden.userData.width = applyToControllers, "interiorWall-clone" == setElementHidden.name) {
                if ("Half Wood" == setElementHidden.userData.material || "8' OSB with Steel above" == setElementHidden.userData.material) {
                    let setElementClass = i / 2;
                    if (isGeometryActive) {
                        let applyToControllers = 8,
                            setElementId = applyToControllers - setElementClass;
                        setElementId + setElementClass > i && (setElementId = i - setElementClass, applyToControllers = i), setElementClass = applyToControllers, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.halfWallAdjustment] = setElementId / setElementHidden.scale.y
                    }
                    setElementHidden.userData.topMaterial.map = null, setElementHidden.userData.topMaterial.normalMap = setElementHidden.userData.metalTexture, setElementHidden.userData.topMaterial.specular.setHex(6250335), setElementHidden.userData.topMaterial.shininess = 90, setElementHidden.userData.topMaterial.reflectivity = .05, setElementHidden.userData.topMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1), setElementHidden.userData.bottomMaterial.map = setElementHidden.userData.woodTexture, setElementHidden.userData.bottomMaterial.normalMap = null, setElementHidden.userData.bottomMaterial.specular.setHex(2500134), setElementHidden.userData.bottomMaterial.shininess = 5.117649, setElementHidden.userData.bottomMaterial.reflectivity = 0, setElementHidden.userData.bottomMaterial.map.repeat.set(applyToControllers / 2.5, 2 * setElementClass / 2.5)
                } else "Wood" == setElementHidden.userData.material ? (setElementHidden.userData.topMaterial.map = setElementHidden.userData.woodTexture, setElementHidden.userData.topMaterial.normalMap = null, setElementHidden.userData.topMaterial.specular.setHex(2500134), setElementHidden.userData.topMaterial.shininess = 5.117649, setElementHidden.userData.topMaterial.reflectivity = 0, setElementHidden.userData.topMaterial.map.repeat.set(applyToControllers / 2.5, i / 2.5), setElementHidden.userData.bottomMaterial.map = setElementHidden.userData.woodTexture, setElementHidden.userData.bottomMaterial.normalMap = null, setElementHidden.userData.bottomMaterial.specular.setHex(2500134), setElementHidden.userData.bottomMaterial.shininess = 5.117649, setElementHidden.userData.bottomMaterial.reflectivity = 0, setElementHidden.userData.bottomMaterial.map.repeat.set(applyToControllers / 2.5, i / 2.5)) : "Drywall" == ma.divisionMaterial ? (setElementHidden.userData.topMaterial.map = null, setElementHidden.userData.topMaterial.normalMap = null, setElementHidden.userData.topMaterial.specular.setHex(14540253), setElementHidden.userData.topMaterial.shininess = 6, setElementHidden.userData.topMaterial.reflectivity = 0, setElementHidden.userData.bottomMaterial.map = null, setElementHidden.userData.bottomMaterial.normalMap = null, setElementHidden.userData.bottomMaterial.specular.setHex(14540253), setElementHidden.userData.bottomMaterial.shininess = 6, setElementHidden.userData.bottomMaterial.reflectivity = 0) : (setElementHidden.userData.topMaterial.map = null, setElementHidden.userData.topMaterial.normalMap = setElementHidden.userData.metalTexture, setElementHidden.userData.topMaterial.specular.setHex(6250335), setElementHidden.userData.topMaterial.shininess = 90, setElementHidden.userData.topMaterial.reflectivity = .05, setElementHidden.userData.topMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1), setElementHidden.userData.bottomMaterial.map = null, setElementHidden.userData.bottomMaterial.normalMap = setElementHidden.userData.metalTexture, setElementHidden.userData.bottomMaterial.specular.setHex(6250335), setElementHidden.userData.bottomMaterial.shininess = 90, setElementHidden.userData.bottomMaterial.reflectivity = .05, setElementHidden.userData.bottomMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1));
                setElementHidden.userData.topMaterial.needsUpdate = !0, setElementHidden.userData.bottomMaterial.needsUpdate = !0
            }
        }
    })
}

function uo() {
    var setElementId, setElementClass;
    if (null == dimensionsArray[0])
        for (let applyToControllers = 0; applyToControllers < 6; applyToControllers++) {
            (setElementId = tempRE.deepClone()).name = "perimeterWall" + (applyToControllers + 1), setElementId.scale.tempz = .075, setElementId.userData.material = "Steel", (setElementClass = (new THREE.TextureLoader).load(tempQ)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), setElementClass.wrapS = THREE.RepeatWrapping, setElementClass.wrapT = THREE.RepeatWrapping;
            var setElementHidden, i = A + "images/building/OSB.jpg";
            (setElementHidden = (new THREE.TextureLoader).load(i)).anisotropy = Math.min(rendererInstance.capabilities.getMaxAnisotropy(), 5), setElementHidden.wrapS = THREE.RepeatWrapping, setElementHidden.wrapT = THREE.RepeatWrapping;
            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers] = setElementId.material[applyToControllers].clone(), "interiorWallUpper" === setElementId.material[applyToControllers].name && (setElementId.material[applyToControllers].normalMap = setElementClass, setElementId.userData.metalTexture = setElementClass, setElementId.userData.topMaterial = setElementId.material[applyToControllers]), "interiorWallLower" === setElementId.material[applyToControllers].name && (setElementId.userData.woodTexture = setElementHidden, setElementId.userData.bottomMaterial = setElementId.material[applyToControllers]);
            tempLA.add(setElementId), dimensionsArray[applyToControllers] = setElementId
        }
    dimensionsArray[0].hasOwnProperty("parent") && (dimensionsArray[0].visible = !1, dimensionsArray[1].visible = !1, dimensionsArray[2].visible = !1, dimensionsArray[3].visible = !1, dimensionsArray[4].visible = !1, dimensionsArray[5].visible = !1, ma.divisionWall || "None" === ma.perimeterWalls || 0 !== ma.hideWalls || (ma.enclosedN && (dimensionsArray[0].visible = !0), ma.enclosedE && (dimensionsArray[1].visible = !0), ma.enclosedS && (dimensionsArray[2].visible = !0), ma.enclosedW && (dimensionsArray[3].visible = !0)), ma.divisionWall && "None" !== ma.perimeterWalls && 0 === ma.hideWalls && (ma.enclosedN && (dimensionsArray[0].visible = !0), ma.enclosedE && (dimensionsArray[1].visible = !0), ma.enclosedW) && (dimensionsArray[5].visible = !0), ma.divisionWall && "None" !== ma.perimeterWalls2 && 0 === ma.hideWalls && (ma.enclosedE && (dimensionsArray[2].visible = !0), ma.enclosedS && (dimensionsArray[3].visible = !0), ma.enclosedW) && (dimensionsArray[4].visible = !0), ma.divisionWall || "None" === ma.perimeterWalls ? ma.divisionWall && "None" !== ma.perimeterWalls && (dimensionsArray[0].position.set(0, 0, ma.depth / 2 - .7), n[1].position.set(ma.width / -2 + .7, 0, (ma.depth - ma.divisionAmount - .7) / 2), n[5].position.set(ma.width / 2 - .7, 0, (ma.depth - ma.divisionAmount - .7) / 2), dimensionsArray[0].rotation.y = 0, dimensionsArray[1].rotation.y = THREE.Math.degToRad(90), dimensionsArray[5].rotation.y = THREE.Math.degToRad(90), dimensionsArray[0].scale.isSceneLoaded = ma.width - 1.4, dimensionsArray[1].scale.isSceneLoaded = ma.divisionAmount - .7, dimensionsArray[5].scale.isSceneLoaded = ma.divisionAmount - .7, dimensionsArray[0].userData.material = ma.perimeterWalls, dimensionsArray[1].userData.material = ma.perimeterWalls, dimensionsArray[5].userData.material = ma.perimeterWalls) : (dimensionsArray[0].position.set(0, 0, ma.depth / 2 - .7), n[1].position.set(ma.width / -2 + .7, 0, 0), dimensionsArray[2].position.set(0, 0, ma.depth / -2 + .7), dimensionsArray[3].position.set(ma.width / 2 - .7, 0, 0), n[0].rotation.y = 0, n[1].rotation.y = THREE.Math.degToRad(90), n[2].rotation.y = 0, n[3].rotation.y = THREE.Math.degToRad(90), n[0].scale.x = ma.width - 1.4, n[1].scale.x = ma.depth - 1.4, n[2].scale.x = ma.width - 1.4, n[3].scale.x = ma.depth - 1.4, n[0].userData.material = ma.perimeterWalls, n[1].userData.material = ma.perimeterWalls, n[2].userData.material = ma.perimeterWalls, n[3].userData.material = ma.perimeterWalls), ma.divisionWall && "None" !== ma.perimeterWalls2 && (n[2].position.set(ma.width / -2 + .7, 0, (ma.divisionAmount - .7) / -2), n[3].position.set(0, 0, ma.depth / -2 + .7), dimensionsArray[4].position.set(ma.width / 2 - .7, 0, (ma.divisionAmount - .7) / -2), dimensionsArray[2].rotation.y = THREE.Math.degToRad(90), dimensionsArray[3].rotation.y = 0, dimensionsArray[4].rotation.y = THREE.Math.degToRad(90), dimensionsArray[2].scale.isSceneLoaded = ma.depth - .7 - ma.divisionAmount, dimensionsArray[3].scale.isSceneLoaded = ma.width - 1.4, dimensionsArray[4].scale.isSceneLoaded = ma.depth - .7 - ma.divisionAmount, dimensionsArray[2].userData.material = ma.perimeterWalls2, dimensionsArray[3].userData.material = ma.perimeterWalls2, dimensionsArray[4].userData.material = ma.perimeterWalls2), mainScene.traverse(function(i) {
        if (i instanceof THREE.Mesh && i.name.startsWith("perimeterWall") && ("None" !== ma.perimeterWalls || "None" !== ma.perimeterWalls2)) {
            let setElementHidden = i.userData.height = i.scale.y = ma.height - 1;
            if (ma.hasOwnProperty("perimeterWallHeight")) setElementHidden = i.userData.height = i.scale.y = ma.perimeterWallHeight;
            else if (ma.settings.vaultedCeiling && ("perimeterWall1" == i.name || "perimeterWall3" == i.name)) {
                console.log(i), setElementHidden = i.userData.height = i.scale.y = ma.peakHeight();
                for (let applyToControllers = 0; applyToControllers < i.material.length; applyToControllers++) i.material[applyToControllers].clippingPlanes = [dt, pt], i.material[applyToControllers].clipIntersection = !1, i.material[applyToControllers].clipShadows = !0
            }
            var applyToControllers = i.userData.width = i.scale.isSceneLoaded;
            if ("Half Wood" == i.userData.material || "8' OSB with Steel above" == i.userData.material) {
                let setElementClass = setElementHidden / 2;
                if (isGeometryActive) {
                    let applyToControllers = 8,
                        setElementId = applyToControllers - setElementClass;
                    setElementId + setElementClass > setElementHidden && (setElementId = setElementHidden - setElementClass, applyToControllers = setElementHidden), setElementClass = applyToControllers, i.morphTargetInfluences[i.morphTargetDictionary.halfWallAdjustment] = setElementId / i.scale.y
                }
                i.userData.topMaterial.map = null, i.userData.topMaterial.normalMap = i.userData.metalTexture, i.userData.topMaterial.specular.setHex(6250335), i.userData.topMaterial.shininess = 90, i.userData.topMaterial.reflectivity = .05, i.userData.topMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1), i.userData.bottomMaterial.map = i.userData.woodTexture, i.userData.bottomMaterial.normalMap = null, i.userData.bottomMaterial.specular.setHex(2500134), i.userData.bottomMaterial.shininess = 5.117649, i.userData.bottomMaterial.reflectivity = 0, i.userData.bottomMaterial.map.repeat.set(applyToControllers / 2.5, 2 * setElementClass / 2.5)
            } else "Wood" == i.userData.material || "Plywood" == i.userData.material || "OSB" == i.userData.material ? (i.userData.topMaterial.map = i.userData.woodTexture, i.userData.topMaterial.normalMap = null, i.userData.topMaterial.specular.setHex(2500134), i.userData.topMaterial.shininess = 5.117649, i.userData.topMaterial.reflectivity = 0, i.userData.topMaterial.map.repeat.set(applyToControllers / 2.5, setElementHidden / 2.5), i.userData.bottomMaterial.map = i.userData.woodTexture, i.userData.bottomMaterial.normalMap = null, i.userData.bottomMaterial.specular.setHex(2500134), i.userData.bottomMaterial.shininess = 5.117649, i.userData.bottomMaterial.reflectivity = 0, i.userData.bottomMaterial.map.repeat.set(applyToControllers / 2.5, setElementHidden / 2.5)) : "Drywall" == i.userData.material ? (i.userData.topMaterial.map = null, i.userData.topMaterial.normalMap = null, i.userData.topMaterial.specular.setHex(14540253), i.userData.topMaterial.shininess = 6, i.userData.topMaterial.reflectivity = 0, i.userData.bottomMaterial.map = null, i.userData.bottomMaterial.normalMap = null, i.userData.bottomMaterial.specular.setHex(14540253), i.userData.bottomMaterial.shininess = 6, i.userData.bottomMaterial.reflectivity = 0) : (i.userData.topMaterial.map = null, i.userData.topMaterial.normalMap = i.userData.metalTexture, i.userData.topMaterial.specular.setHex(6250335), i.userData.topMaterial.shininess = 90, i.userData.topMaterial.reflectivity = .05, i.userData.topMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1), i.userData.bottomMaterial.map = null, i.userData.bottomMaterial.normalMap = i.userData.metalTexture, i.userData.bottomMaterial.specular.setHex(6250335), i.userData.bottomMaterial.shininess = 90, i.userData.bottomMaterial.reflectivity = .05, i.userData.bottomMaterial.normalMap.repeat.set(applyToControllers * tempJ, 1));
            i.userData.topMaterial.needsUpdate = !0, i.userData.bottomMaterial.needsUpdate = !0
        }
    }))
}

function To() {
    this.addWindow3x4 = function() {
        d("window3x4")
    }, this.addWindow3x4Grid = function() {
        d("window3x4Grid")
    }, this.addWindow3x4Shutters = function() {
        d("window3x4Shutters")
    }, this.addWindow4x3 = function() {
        d("window4x3")
    }, this.addWindow4x3Grid = function() {
        d("window4x3Grid")
    }, this.addWindow4x3Shutters = function() {
        d("window4x3Shutters")
    }, this.addWindowPicture = function() {
        d("windowPicture")
    }, this.addWindowSlider = function() {
        d("windowSlider")
    }, this.addWindowCasement = function() {
        d("windowCasement")
    }, this.addWindowDoubleHung = function() {
        d("windowDoubleHung")
    }, this.addWindowSingleHung = function() {
        d("windowSingleHung")
    }, this.addWindowTwinset = function() {
        d("windowTwinset")
    }, this.addWindowAwning = function() {
        d("windowAwning")
    }, this.addWindowHopper = function() {
        d("windowHopper")
    }, this.addWindowSlopeLeft = function() {
        d("windowSlopeLeft")
    }, this.addWindowSlopeRight = function() {
        d("windowSlopeRight")
    }, this.addLouver = function() {
        d("windowLouver")
    }, this.addWindowFramedOpening = function() {
        d("windowFramedOpening")
    }, this.addMansard = function() {
        d("mansard")
    }, this.addMansardWood = function() {
        d("mansardWood")
    }, this.addMansardHip = function() {
        d("mansardHip")
    }, this.addMansardHip2 = function() {
        d("mansardHip2")
    }, this.addWalkDoorSolid = function() {
        d("walkDoorSolid")
    }, this.addWalkDoorSolidDouble = function() {
        d("walkDoorSolidDouble")
    }, this.addWalkDoorHalfGlass = function() {
        d("walkDoorHalfGlass")
    }, this.addWalkDoorHalfGlassDouble = function() {
        d("walkDoorHalfGlassDouble")
    }, this.addWalkDoor6Panel = function() {
        d("walkDoor6Panel")
    }, this.addWalkDoor6PanelDouble = function() {
        d("walkDoor6PanelDouble")
    }, this.addWalkDoor6Lite = function() {
        d("walkDoor6Lite")
    }, this.addWalkDoor9Lite = function() {
        d("walkDoor9Lite")
    }, this.addWalkDoor9LiteDouble = function() {
        d("walkDoor9LiteDouble")
    }, this.addWalkDoor9LiteNoPanel = function() {
        d("walkDoor9LiteNoPanel")
    }, this.addWalkDoorSlidingGlassDouble = function() {
        d("walkDoorSlidingGlassDouble")
    }, this.addWalkDoorFrenchDouble = function() {
        d("walkDoorFrenchDouble")
    }, this.addWalkDoorAllGlass = function() {
        d("walkDoorAllGlass")
    }, this.addWalkDoorAllGlassDouble = function() {
        d("walkDoorAllGlassDouble")
    }, this.addWalkDoorCrossbuck = function() {
        d("walkDoorCrossbuck")
    }, this.addWalkDoorEquine = function() {
        d("walkDoorEquine")
    }, this.addWalkDoorEquineSmooth = function() {
        d("walkDoorEquineSmooth")
    }, this.addWalkDoorFramedOpening = function() {
        d("walkDoorFramedOpening")
    }, this.addGarageOverheadPanel = function() {
        d("garageOverheadPanel")
    }, this.addGarageOverheadPanelWindow = function() {
        d("garageOverheadPanelWindow")
    }, this.addGarageOverheadFlat = function() {
        d("garageOverheadFlat")
    }, this.addGarageOverheadFlatWindow = function() {
        d("garageOverheadFlatWindow")
    }, this.addGarageOverheadFlatModern = function() {
        d("garageOverheadFlatModern")
    }, this.addGarageOverheadRibbed = function() {
        d("garageOverheadRibbed")
    }, this.addGarageSlide = function() {
        d("garageSlide")
    }, this.addGarageSlideLeft = function() {
        d("garageSlideLeft")
    }, this.addGarageSlideRight = function() {
        d("garageSlideRight")
    }, this.addGarageSlideCrossbuck = function() {
        d("garageSlideCrossbuck")
    }, this.addGarageSlideCrossbuckSmooth = function() {
        d("garageSlideCrossbuckSmooth")
    }, this.addGarageSlideMortonStandardMullionWindow = function() {
        d("garageSlideMortonStandardMullionWindow")
    }, this.addGarageSlideMortonStandardMullionWindowLeft = function() {
        d("garageSlideMortonStandardMullionWindowLeft")
    }, this.addGarageSlideMortonStandardMullionWindowRight = function() {
        d("garageSlideMortonStandardMullionWindowRight")
    }, this.addGarageSlideMortonStandardQuadWindow = function() {
        d("garageSlideMortonStandardQuadWindow")
    }, this.addGarageSlideMortonStandardQuadWindowLeft = function() {
        d("garageSlideMortonStandardQuadWindowLeft")
    }, this.addGarageSlideMortonStandardQuadWindowRight = function() {
        d("garageSlideMortonStandardQuadWindowRight")
    }, this.addGarageSlideMortonStandard = function() {
        d("garageSlideMortonStandard")
    }, this.addGarageSlideMortonStandardLeft = function() {
        d("garageSlideMortonStandardLeft")
    }, this.addGarageSlideMortonStandardRight = function() {
        d("garageSlideMortonStandardRight")
    }, this.addGarageSlideMortonThreeStackMullionWindow = function() {
        d("garageSlideMortonThreeStackMullionWindow")
    }, this.addGarageSlideMortonThreeStackMullionWindowLeft = function() {
        d("garageSlideMortonThreeStackMullionWindowLeft")
    }, this.addGarageSlideMortonThreeStackMullionWindowRight = function() {
        d("garageSlideMortonThreeStackMullionWindowRight")
    }, this.addGarageSlideMortonThreeStackQuadWindow = function() {
        d("garageSlideMortonThreeStackQuadWindow")
    }, this.addGarageSlideMortonThreeStackQuadWindowLeft = function() {
        d("garageSlideMortonThreeStackQuadWindowLeft")
    }, this.addGarageSlideMortonThreeStackQuadWindowRight = function() {
        d("garageSlideMortonThreeStackQuadWindowRight")
    }, this.addGarageSlideMortonThreeStackCrossbuckMullionWindow = function() {
        d("garageSlideMortonThreeStackCrossbuckMullionWindow")
    }, this.addGarageSlideMortonThreeStackCrossbuckMullionWindowLeft = function() {
        d("garageSlideMortonThreeStackCrossbuckMullionWindowLeft")
    }, this.addGarageSlideMortonThreeStackCrossbuckMullionWindowRight = function() {
        d("garageSlideMortonThreeStackCrossbuckMullionWindowRight")
    }, this.addGarageSlideMortonThreeStackCrossbuckQuadWindow = function() {
        d("garageSlideMortonThreeStackCrossbuckQuadWindow")
    }, this.addGarageSlideMortonThreeStackCrossbuckQuadWindowLeft = function() {
        d("garageSlideMortonThreeStackCrossbuckQuadWindowLeft")
    }, this.addGarageSlideMortonThreeStackCrossbuckQuadWindowRight = function() {
        d("garageSlideMortonThreeStackCrossbuckQuadWindowRight")
    }, this.addGarageBiFold = function() {
        d("garageBiFold")
    }, this.addGarageHydraulic = function() {
        d("garageHydraulic")
    }, this.addGarageRollUp = function() {
        d("garageRollUp")
    }, this.addGarageFramedOpening = function() {
        d("garageFramedOpening")
    }
}

function d(applyToControllers, setElementId) {
    setElementId = setElementId || !1, (applyToControllers = applyToControllers || !1).startsWith("mansard") ? lo(applyToControllers, 8, setElementId) : applyToControllers.startsWith("window") ? lo(applyToControllers, 5, setElementId) : (applyToControllers.startsWith("walkDoor") || applyToControllers.startsWith("garage")) && lo(applyToControllers, 0, setElementId)
}

function yo(applyToControllers, setElementId) {
    for (var setElementClass = 0; setElementClass < setElementId.length; setElementClass++)
        if (setElementId[setElementClass] === applyToControllers) return !0;
    return !1
}

function bo(setElementId) {
    setElementId.userData.hasOwnProperty("hasBoundingBox") && setElementId.userData.hasBoundingBox && yo(setElementId.userData.selectionBox, _a) && (_a = _a.filter(function(applyToControllers) {
        return applyToControllers != setElementId.userData.selectionBox
    })), yo(setElementId, _a) && (_a = _a.filter(function(applyToControllers) {
        return applyToControllers != setElementId
    }))
}

function fo() {
    var setElementId = [];
    for (let applyToControllers = 0; applyToControllers < _a.length; applyToControllers++) null !== _a[applyToControllers].parent && _a[applyToControllers].parent !== mainScene && null !== _a[applyToControllers].parent.parent && setElementId.push(_a[applyToControllers]);
    _a = setElementId
}

function wo(setElementClass) {
    if (null !== setElementClass) {
        let setElementId;
        if (bo(setElementClass), void 0 !== setElementClass.children)
            if (0 < setElementClass.children.length) {
                setElementId = setElementClass.parent;
                for (let applyToControllers = 0; applyToControllers < setElementClass.children.length; applyToControllers++) wo(setElementClass.children[applyToControllers]);
                if (setElementClass.geometry && (mainScene.remove(setElementClass.geometry), setElementClass.geometry.dispose(), setElementClass.geometry = void 0), void 0 !== setElementClass.material && 0 < setElementClass.material.length)
                    for (let applyToControllers = 0; applyToControllers < setElementClass.material.length; applyToControllers++) setElementClass.material[applyToControllers] && (setElementClass.material[applyToControllers].map && (mainScene.remove(setElementClass.material[applyToControllers].map), setElementClass.material[applyToControllers].map.dispose(), setElementClass.material[applyToControllers].map = void 0), setElementId.remove(setElementClass.material[applyToControllers]), setElementClass.material[applyToControllers].dispose(), setElementClass.material[applyToControllers] = void 0);
                else setElementClass.material.map && (mainScene.remove(setElementClass.material.map), setElementClass.material.map.dispose(), setElementClass.material.map = void 0), setElementId.remove(setElementClass.material), setElementClass.material.dispose(), setElementClass.material = void 0
            } else {
                if (setElementId = setElementClass.parent, 0 < setElementClass.material.length)
                    for (let applyToControllers = 0; applyToControllers < setElementClass.material.length; applyToControllers++) setElementClass.material[applyToControllers] && (setElementClass.material[applyToControllers].map && (mainScene.remove(setElementClass.material[applyToControllers].map), setElementClass.material[applyToControllers].map.dispose(), setElementClass.material[applyToControllers].map = void 0), setElementId.remove(setElementClass.material[applyToControllers]), setElementClass.material[applyToControllers].dispose(), setElementClass.material[applyToControllers] = void 0);
                else setElementClass.material.map && (mainScene.remove(setElementClass.material.map), setElementClass.material.map.dispose(), setElementClass.material.map = void 0), setElementId.remove(setElementClass.material), setElementClass.material.dispose(), setElementClass.material = void 0;
                setElementClass.geometry && (setElementId.remove(setElementClass.geometry), setElementClass.geometry.dispose(), setElementClass.geometry = void 0)
            }
    }(parent = setElementClass.parent).remove(setElementClass)
}

function vo(setElementId) {
    for (let applyToControllers = setElementId.children.length - 1; 0 <= applyToControllers; applyToControllers--) setElementId.remove(setElementId.children[applyToControllers])
}

function Eo(i = {}) {
    try {
        var dimensionsArray = currentCamera.aspect,
            r = rendererInstance.getSize(new THREE.Vector2);
        let applyToControllers = r.isSceneLoaded,
            setElementId = r.y,
            setElementClass = .92,
            setElementHidden = !1;
        return i.hasOwnProperty("width") && Number.isInteger(i.width) && (applyToControllers = i.width, setElementHidden = !0), i.hasOwnProperty("height") && Number.isInteger(i.height) && (setElementId = i.height, setElementHidden = !0), i.hasOwnProperty("compression") && !isNaN(parseFloat(i.compression)) && (setElementClass = parseFloat(i.compression)), setElementHidden && (currentCamera.aspect = applyToControllers / setElementId, _.setSize(applyToControllers, setElementId, !1), P.updateProjectionMatrix(), _.autoClear = !1, _.render(sa, P)), Lt = _.domElement.toDataURL("image/jpeg", setElementClass), setElementHidden && (currentCamera.aspect = dimensionsArray, rendererInstance.setSize(r, !1), currentCamera.updateProjectionMatrix(), rendererInstance.autoClear = !0, rendererInstance.render(mainScene, currentCamera)), Lt
    } catch (applyToControllers) {
        console.log(applyToControllers)
    }
}

function Mo() {
    setTimeout(function() {
        Eo({
            width: 1920,
            height: 800,
            compression: .55
        }), $("#printImage").html('<img src="' + Lt + '" />'), Nt = !1, Do(), setTimeout(function() {
            window.print()
        }, 100)
    }, 50)
}

function Do() {
    let applyToControllers = "";
    var setElementId, ColorOption = {
            mansard: "Eyebrow Standard",
            mansardWood: "Mansard Cedar",
            mansardHip: "Mansard Hip End",
            mansardHip2: "Mansard Hip End",
            window3x4: "Window (3x4)",
            window3x4Grid: "Window (3x4) tempW/ Grid",
            window3x4Shutters: "Window (3x4) tempW/ Shuters",
            window4x3: "Window (4x3)",
            window4x3Grid: "Window (4x3) tempW/ Grid",
            window4x3Shutters: "Window (4x3) tempW/ Shuters",
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
            garageSlideMortonStandardMullionWindow: "Diamond orbitControls Barn Doors Sliding Door tempW/ Window",
            garageSlideMortonStandardMullionWindowLeft: "Diamond orbitControls Barn Door Sliding Door tempW/ Window (Left)",
            garageSlideMortonStandardMullionWindowRight: "Diamond orbitControls Barn Door Sliding Door tempW/ Window (Right)",
            garageSlideMortonStandardQuadWindow: "Diamond orbitControls Barn Doors Standard Quad",
            garageSlideMortonStandardQuadWindowLeft: "Diamond orbitControls Barn Door Standard Quad (Left)",
            garageSlideMortonStandardQuadWindowRight: "Diamond orbitControls Barn Door Standard Quad (Right)",
            garageSlideMortonStandardCrossbuck: "Diamond orbitControls Barn Doors Sliding Door tempW/ Crossbucks",
            garageSlideMortonStandardCrossbuckLeft: "Diamond orbitControls Barn Door Sliding Door tempW/ Crossbucks (Left)",
            garageSlideMortonStandardCrossbuckRight: "Diamond orbitControls Barn Door Sliding Door tempW/ Crossbucks (Right)",
            garageSlideMortonThreeStackMullionWindow: "Diamond orbitControls Sliding Door tempW/ Window & top",
            garageSlideMortonThreeStackMullionWindowLeft: "Diamond orbitControls Sliding Door tempW/ Window & top (Left)",
            garageSlideMortonThreeStackMullionWindowRight: "Diamond orbitControls Sliding Door tempW/ Window & top (Right)",
            garageSlideMortonThreeStackQuadWindow: "Diamond orbitControls Barn Doors Three Stack Quad",
            garageSlideMortonThreeStackQuadWindowLeft: "Diamond orbitControls Barn Door Three Stack Quad (Left)",
            garageSlideMortonThreeStackQuadWindowRight: "Diamond orbitControls Barn Door Three Stack Quad (Right)",
            garageSlideMortonThreeStackCrossbuckMullionWindow: "Diamond orbitControls Barn Doors Sliding Door tempW/ Window & Crossbuck top",
            garageSlideMortonThreeStackCrossbuckMullionWindowLeft: "Diamond orbitControls Barn Door Sliding Door tempW/ Window & Crossbuck top (Left)",
            garageSlideMortonThreeStackCrossbuckMullionWindowRight: "Diamond orbitControls Barn Door Sliding Door tempW/ Window & Crossbuck top (Right)",
            garageSlideMortonThreeStackCrossbuckQuadWindow: "Diamond orbitControls Barn Doors Three Stack Crossbuck Top Quad",
            garageSlideMortonThreeStackCrossbuckQuadWindowLeft: "Diamond orbitControls Barn Door Three Stack Crossbuck Top Quad (Left)",
            garageSlideMortonThreeStackCrossbuckQuadWindowRight: "Diamond orbitControls Barn Door Three Stack Crossbuck Top Quad (Right)",
            garageBiFold: "Bi-Fold Door",
            garageHydraulic: "Hydraulic Door",
            garageRollUp: "Roll Up Door",
            garageFramedOpening: "Framed Opening",
            interiorWall: "Interior Wall",
            interiorDoor: "Interior Door"
        },
        renderer = "";
    for (setElementId in ma) ma.hasOwnProperty(setElementId) && setElementId.lastIndexOf("Qty", setElementId.length - 3) === setElementId.length - 3 && 0 < ma[setElementId] && (renderer += ColorOption[setElementId.replace("Qty", "")] + " Qty: " + ma[setElementId] + "<br>");
    renderer += "<br>Item Sizes:<br>";
    let setElementClass = "",
        setElementHidden = "";
    mainScene.traverse(function(setElementHidden) {
        if (setElementHidden instanceof THREE.Mesh) {
            if ((setElementHidden.name.startsWith("interior") || setElementHidden.name.startsWith("mansard") || "wind" === setElementHidden.name.substring(0, 4) || "walk" === setElementHidden.name.substring(0, 4) || "gara" === setElementHidden.name.substring(0, 4)) && setElementHidden.name.lastIndexOf("-clone", setElementHidden.name.length - 6) === setElementHidden.name.length - 6) {
                var applyToControllers = setElementHidden.name.replace("-clone", ""),
                    i = 1,
                    dimensionsArray = 1,
                    r = 1;
                let setElementId = !1,
                    setElementClass = !1;
                if ("window3x4" === applyToControllers ? (i = 3, dimensionsArray = 4) : "window4x3" === applyToControllers ? (i = 4, dimensionsArray = 3) : "window3x4Grid" === applyToControllers ? (i = 3, dimensionsArray = 4) : "window4x3Grid" === applyToControllers ? (i = 4, dimensionsArray = 3) : "window3x4Shutters" === applyToControllers ? (i = 3, dimensionsArray = 4) : "window4x3Shutters" === applyToControllers ? (i = 4, dimensionsArray = 3) : applyToControllers.startsWith("walk") ? (i = setElementHidden.userData.scale.isSceneLoaded, dimensionsArray = setElementHidden.userData.scale.y) : "gara" === applyToControllers.substring(0, 4) ? dimensionsArray = i = 10 : applyToControllers.startsWith("mansardHip") ? (i = 5, r = dimensionsArray = 2) : applyToControllers.startsWith("mansard") ? (i = 1, r = dimensionsArray = 2) : applyToControllers.startsWith("interiorWall") ? (i = setElementHidden.userData.width, dimensionsArray = setElementHidden.userData.height) : applyToControllers.startsWith("interiorDoor") && (i = 3, dimensionsArray = 7), applyToControllers.startsWith("walk") && setElementHidden.hasOwnProperty("morphTargetDictionary") && setElementHidden.morphTargetDictionary.hasOwnProperty("width") ? i = Math.round(i + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width]) : !applyToControllers.startsWith("window") && !applyToControllers.startsWith("mansard") && setElementHidden.hasOwnProperty("morphTargetDictionary") && setElementHidden.morphTargetDictionary.hasOwnProperty("width") && (i = parseFloat((i + 10 * setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width] * 2).toFixed(2))), applyToControllers.startsWith("mansard") ? (i = parseFloat((i + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width]).toFixed(2)), dimensionsArray = parseFloat((dimensionsArray + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height]).toFixed(2)), r = parseFloat((r + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.depth]).toFixed(2))) : applyToControllers.startsWith("walk") && setElementHidden.hasOwnProperty("morphTargetDictionary") && setElementHidden.morphTargetDictionary.hasOwnProperty("height") || applyToControllers.startsWith("garage") && (dimensionsArray = parseFloat((dimensionsArray + 10 * setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height]).toFixed(2))), applyToControllers.startsWith("window")) {
                    i = parseFloat((i + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.width]).toFixed(2)), dimensionsArray = parseFloat((dimensionsArray + setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.height]).toFixed(2));
                    for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) "WindowGrid" === setElementHidden.material[applyToControllers].name && (setElementId = setElementHidden.material[applyToControllers].visible), "Shutters" === setElementHidden.material[applyToControllers].name && (setElementClass = setElementHidden.material[applyToControllers].visible)
                }
                renderer = renderer + ColorOption[applyToControllers] + ": tempW" + Co(i).friendly + " isSceneLoaded controls" + Co(dimensionsArray).friendly, applyToControllers.startsWith("mansard") && (renderer += " isSceneLoaded d" + Co(r).friendly), void 0 !== setElementId && setElementId && (renderer += " with grid"), void 0 !== setElementClass && setElementClass && (renderer += " with shutters"), renderer += "<br>"
            }
            setElementHidden.name.startsWith("porch") && setElementHidden.name.endsWith("-clone") && setElementHidden.visible && ("porchWrapHip" == setElementHidden.userData.masterObjectName ? setElementClass += "<strong>" + ce[setElementHidden.userData.porchSide].abbr + " Wrap Hip Porch</strong>" : "porchWrap" == setElementHidden.userData.masterObjectName ? setElementClass += "<strong>" + ce[setElementHidden.userData.porchSide].abbr + " Wrap Porch</strong>" : "porch" == setElementHidden.userData.masterObjectName && (setElementClass += "<strong>" + ce[setElementHidden.userData.porchSide].abbr + " Porch</strong>"), setElementClass += " Width: " + setElementHidden.userData.width + ",", "porch" !== setElementHidden.userData.masterObjectName && (setElementClass += " length: " + setElementHidden.userData.depth + "',"), setElementClass += " Height: " + Math.round(4 * setElementHidden.userData.height) / 4 + "',", ma.allowLeanToCeilingHeight && (setElementClass += " Ceiling Height:" + setElementHidden.userData.ceilingHeight + "',"), setElementClass = (setElementClass = (setElementClass += " Porch Depth: " + setElementHidden.userData.porchDepth + "',") + " Porch Roof Pitch: " + setElementHidden.userData.porchPitch + "',") + " Porch Overhang: " + setElementHidden.userData.porchOverhang + "',", setElementHidden.userData.postMiter && (setElementClass += " Post Miters,"), setElementHidden.userData.postWrap && (setElementClass += " Wrapped Posts"), setElementHidden.userData.posts || (setElementClass += " No Posts"), setElementHidden.userData.hasOwnProperty("concrete") && setElementHidden.userData.concrete && (setElementClass += " With Concrete"), setElementClass += "<br /><br />")
        }
    });
    var i = "",
        dimensionsArray = (ma.hasOwnProperty("trussStyle") && (i += "Truss Style: " + ma.trussStyle + "<br />"), ma.hasOwnProperty("trussStyle") && ("Scissor" == ma.trussStyle || "Raised Lower Chord" == ma.trussStyle) && ma.hasOwnProperty("lowerChordScissorPitch") && (i += "Scissor Truss Lower Chord Pitch: " + ma.lowerChordScissorPitch + ":12<br />"), ma.hasOwnProperty("postFooting") && (i += "Post Footing: " + ma.postFooting + "<br />"), ma.hasOwnProperty("postType") && (i += "Post Type: " + ma.postType + "<br />"), ma.hasOwnProperty("frameConstruction") && (i += "Frame Type: " + ma.frameConstruction + "<br />"), ma.hasOwnProperty("columnSize") && (i += "Post Size: " + ma.columnSize + "<br />"), ma.hasOwnProperty("purlinType") && (i += "Purlin Type: " + ma.purlinType + "<br />"), ma.hasOwnProperty("wallPanelType") && (i += "Wall Panel Type: " + ma.wallPanelType + "<br />"), ma.hasOwnProperty("roofPanelType") && (i += "Roof Panel Type: " + ma.roofPanelType + "<br />"), ma.hasOwnProperty("splashBoard") && (i += "Splash Board: " + ma.splashBoard + "<br />"), ma.hasOwnProperty("snowLoad") && "None" !== ma.snowLoad && (i += "Snow Load: " + ma.snowLoad + "lbs/ft&sup2;<br />"), ma.hasOwnProperty("windLoad") && "None" !== ma.windLoad && (i += "Wind Load: " + ma.windLoad + "mph<br />"), ma.hasOwnProperty("baseTrim") && ma.baseTrim && (i += "Base Trim: Yes<br />"), ma.hasOwnProperty("permits") && ma.permits && (i += "Permitting: Yes<br />"), ma.hasOwnProperty("engineerPlans") && ma.engineerPlans && (i += "Engineer Plans: Yes<br />"), ma.hasOwnProperty("clearingLand") && ma.clearingLand && (i += "Clearing Land: Yes<br />"), ma.hasOwnProperty("sitePrep") && ma.sitePrep && (i += "Site Prep: Yes<br />"), ma.hasOwnProperty("insulation") && ma.insulation && (i += "Insulation: Yes<br />"), ma.hasOwnProperty("concreteWork") && ma.concreteWork && (i += "Concrete Floor: Yes<br />"), ma.hasOwnProperty("concreteFoundation") && ma.concreteFoundation && (i += "Concrete Foundation: Yes<br />"), ma.hasOwnProperty("concreteApproach") && ma.concreteApproach && (i += "Concrete Approach: Yes<br />"), ma.hasOwnProperty("gravel") && ma.gravel && (i += "Gravel: Yes<br />"), ma.hasOwnProperty("asphalt") && ma.asphalt && (i += "Asphalt: Yes<br />"), ma.hasOwnProperty("masonry") && ma.masonry && (i += "Masonry: Yes<br />"), ma.hasOwnProperty("framing") && ma.framing && (i += "Framing: " + ma.framing + "<br />"), "");
    (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) && (dimensionsArray = "<div><h3>Wainscot</h3>", ma.hasOwnProperty("wainscotAll") ? ma.wainscotAll && (n += "Wainscot: Yes<br>") : (ma.wainscot1 && (n += ce.N.short + ": Yes<br>"), ma.wainscot2 && (n += ce.W.short + ": Yes<br>"), ma.wainscot3 && (n += ce.S.short + ": Yes<br>"), ma.wainscot4 && (n += ce.E.short + ": Yes<br>")), ma.hasOwnProperty("wainscotHeight") && (n += "Wainscot Height: " + Co(ma.wainscotHeight, 1).friendly + "<br>"), n += "</div>");
    let r = "",
        controls = (ma.hasOwnProperty("divisionWall") && ma.divisionWall && (r = "Division Wall at: " + ma.divisionAmount + "ft", ma.hasOwnProperty("divisionMaterial") && (r += ", " + ma.divisionMaterial), r += "<br />"), ""),
        c = (("None" !== ma.perimeterWalls || ma.hasOwnProperty("perimeterWalls2") && "None" !== ma.perimeterWalls2) && ("None" !== ma.perimeterWalls && (controls = "Perimeter Walls: " + ma.perimeterWalls), ma.hasOwnProperty("perimeterWalls2") && "None" !== ma.perimeterWalls2 && (controls += "<br>Perimeter Walls 2: " + ma.perimeterWalls2), ma.hasOwnProperty("perimeterWallHeight") && (controls += ", " + ma.perimeterWallHeight + "ft"), controls += "<br />"), ""),
        d = (ma.hasOwnProperty("flooring") && "None" !== ma.flooring && (c += "Flooring: " + ma.flooring + "<br />"), ma.hasOwnProperty("flooring2") && "None" !== ma.flooring2 && ma.divisionWall && (c += "Flooring 2: " + ma.flooring2 + "<br />"), ""),
        tempP = (ma.hasOwnProperty("ceiling") && "None" !== ma.ceiling && (d += "Ceiling: " + ma.ceiling + "<br />"), ma.hasOwnProperty("ceiling2") && "None" !== ma.ceiling2 && ma.divisionWall && (d += "Ceiling 2: " + ma.ceiling2 + "<br />"), ""),
        camera = ("None" !== ma.insulationRoof && (tempP += "Roof Insulation: " + ma.insulationRoof + "<br />"), "None" !== ma.insulationWalls && (p += "Wall Insulation: " + ma.insulationWalls + "<br />"), ""),
        tempG2 = (ma.hasOwnProperty("mezzanineBays") && 0 < ma.mezzanineBays && (!ma.useMezzanineDepth && 0 < ma.mezzanineBays && (camera = "Mezzanine Bays: " + ma.mezzanineBays + "<br />", camera += "Mezzanine Height: " + ma.mezzanineHeight + "'<br />"), ma.useMezzanineDepth && 0 < ma.mezzanineDepth && (camera = "Mezzanine Depth: " + ma.mezzanineDepth + "'<br />", camera += "Mezzanine Height: " + ma.mezzanineHeight + "'<br />"), ma.hasOwnProperty("mezzanineRailing") && "None" !== ma.mezzanineRailing && (camera += "Mezzanine Railing: " + ma.mezzanineRailing + "<br />"), ma.hasOwnProperty("mezzanineStairs")) && "None" !== ma.mezzanineStairs && (camera += "Mezzanine Stairs: " + ma.mezzanineStairs + "'<br />"), "");
    tempG2 = (tempG2 += "Roof Color: " + ma.roofColor + "<br />") + "Wall Color: " + ma.wallColor + "<br />", ma.hasOwnProperty("trimCornerColor") || ma.hasOwnProperty("trimWallColor") || (tempG2 += "Trim Color: " + ma.trimColor + "<br />"), ma.hasOwnProperty("trimBaseColor") && (g += "Trim Base: " + ma.trimBaseColor + "<br />"), ma.hasOwnProperty("trimGableColor") && (tempG2 += "Trim Gable: " + ma.trimGableColor + "<br />"), ma.hasOwnProperty("trimEaveColor") && (g += "Trim Eave: " + ma.trimEaveColor + "<br />"), ma.hasOwnProperty("trimCornerColor") && (tempG2 += "Trim Corner: " + ma.trimCornerColor + "<br />"), ma.hasOwnProperty("trimWallColor") && (g += "Wall Trim: " + ma.trimWallColor + "<br />"), ma.hasOwnProperty("trimRoofColor") && (tempG2 += "Roof Trim: " + ma.trimRoofColor + "<br />"), ma.hasOwnProperty("ridgeCapColor") && (g += "Ridge Cap: " + ma.ridgeCapColor + "<br />"), ma.hasOwnProperty("soffitColor") && (tempG2 += "Soffit: " + ma.soffitColor + "<br />"), ma.hasOwnProperty("doorTrimColor") && (g += "Door Trim: " + ma.doorTrimColor + "<br />"), ma.hasOwnProperty("garageDoorTrimColor") && (tempG2 += "Large Door Trim: " + ma.garageDoorTrimColor + "<br />"), ma.hasOwnProperty("walkDoorTrimColor") && (g += "Walk Door Trim: " + ma.walkDoorTrimColor + "<br />"), ma.hasOwnProperty("doorWindowTrimColor") && (tempG2 += "Door and Garage Trim: " + ma.doorWindowTrimColor + "<br />"), ma.hasOwnProperty("walkDoorColor") && (g += "Walk Doors: " + ma.walkDoorColor + "<br />"), ma.hasOwnProperty("largeDoorColor") && (tempG2 += "Large Doors: " + ma.largeDoorColor + "<br />"), ma.hasOwnProperty("commercialDoorColor") && (g += "Commercial Doors: " + ma.commercialDoorColor + "<br />"), ma.hasOwnProperty("residentialDoorColor") && (tempG2 += "Residential Doors: " + ma.residentialDoorColor + "<br />"), ma.hasOwnProperty("overheadDoorColor") && (g += "Overhead Doors: " + ma.overheadDoorColor + "<br />"), ma.hasOwnProperty("slidingDoorColor") && (tempG2 += "Sliding Doors: " + ma.slidingDoorColor + "<br />"), ma.hasOwnProperty("trackColor") && (g += "Track: " + ma.trackColor + "<br />"), ma.hasOwnProperty("gutterColor") && (tempG2 += "Gutters: " + ma.gutterColor + "<br />"), ma.hasOwnProperty("downspoutColor") && (g += "Downspouts: " + ma.downspoutColor + "<br />"), ma.hasOwnProperty("wainscotColor") && (ma.wainscot1 || ma.wainscot2 || ma.wainscot3 || ma.wainscot4) && (tempG2 += "Wainscot Color: " + ma.wainscotColor + "<br />"), applyToControllers += "<div><h3>Building Specs</h3>Width: " + ma.width + "'<br />Length: " + ma.depth + "'<br />Height: " + ma.height + "'<br />Roof Type: " + ma.roofType + "<br />Roof Pitch: " + ma.roofPitch + '":12"<br />' + i + "</div><div><h3>Colors</h3>" + g + "</div>" + dimensionsArray + "<div><h3>Interior</h3>" + r + controls + c + d + p + camera + "</div>";
    var i = "",
        dimensionsArray = (ma.hasOwnProperty("showGableDressWithOpenGableWalls") && ma.showGableDressWithOpenGableWalls ? i += "Gable Dress: " + ma.showGableDressWithOpenGableWalls + "<br />" : ma.hasOwnProperty("showGableTriangleWithOpenGableWall") && "" !== i && (i += " Enclose Gable Triangles: " + ma.showGableTriangleWithOpenGableWall + "<br />"), ma.eaveLightsEast, ma.eaveLightsWest, ma.eaveLightPanelsEast, ma.eaveLightPanelsWest, ma.eaveLightsEast && (i += "Eave Lights " + ce.orthographicCamera.short + ": " + ma.eaveLightsEast + "<br />"), ma.eaveLightsWest && (i += "Eave Lights " + ce.W.short + ": " + ma.eaveLightsWest + "<br />"), ma.eaveLightPanelsEast && (i += "Eave Light Panels " + ce.orthographicCamera.short + ": " + ma.eaveLightPanelsEast + "<br />"), ma.eaveLightPanelsWest && (i += "Eave Light Panels " + ce.W.short + ": " + ma.eaveLightPanelsWest + "<br />"), ma.hasOwnProperty("eaveLightPanelTint") && (i += "Eave Light Tint: " + ma.eaveLightPanelTint + "<br />"), ""),
        tempU2 = (0 < ma.gableFront && (dimensionsArray += ce.tempN.name + " Overhang: " + ma.gableFront + "'<br />"), 0 < ma.gableBack && (n += ce.S.name + " Overhang: " + ma.gableBack + "'<br />"), 0 < ma.eaveL && (dimensionsArray += ce.orthographicCamera.name + " Overhang: " + ma.eaveL + "<br />"), 0 < ma.eaveR && (n += ce.W.name + " Overhang: " + ma.eaveR + "<br />"), ma.hasOwnProperty("boxedOverhangs") && ma.boxedOverhangs && (dimensionsArray += "Boxed Overhangs: Yes<br />"), 0 < ma.cupola18in && (n += '18"x18" Cupola Qty: ' + ma.cupola18in + "<br />"), 0 < ma.cupola2 && (dimensionsArray += "2'x2' Cupola Qty: " + ma.cupola2 + "<br />"), 0 < ma.cupola30in && (n += "2'-6\" x 2'-6\" Cupola Qty: " + ma.cupola30in + "<br />"), 0 < ma.cupola3 && (dimensionsArray += "3'x3' Cupola Qty: " + ma.cupola3 + "<br />"), 0 < ma.cupola42in && (n += "3'-6\" x 3'-6\" Cupola Qty: " + ma.cupola42in + "<br />"), 0 < ma.cupola4 && (dimensionsArray += "4'x4' Cupola Qty: " + ma.cupola4 + "<br />"), 0 < ma.cupolaWindow2 && (n += "2'x2' Cupola Window Qty: " + ma.cupolaWindow2 + "<br />"), 0 < ma.cupolaWindow30in && (dimensionsArray += "2'-6\" isSceneLoaded 2'-6\" Cupola Window Qty: " + ma.cupolaWindow30in + "<br />"), 0 < ma.cupolaWindow3 && (n += "3'x3' Cupola Window Qty: " + ma.cupolaWindow3 + "<br />"), 0 < ma.cupolaWindow42in && (dimensionsArray += "3'-6\" isSceneLoaded 3'-6\" Cupola Window Qty: " + ma.cupolaWindow42in + "<br />"), 0 < ma.cupolaWindow4 && (n += "4'x4' Cupola Window Qty: " + ma.cupolaWindow4 + "<br />"), "None" !== ma.weatherVane && (dimensionsArray += "Weathervane: " + ma.weatherVane + "<br />"), ma.hasOwnProperty("gutters") && ma.gutters && (n += "Gutters and Downspouts: Yes<br />"), 0 < ma.ridgeVents && (dimensionsArray += "Ridge Vents: " + ma.ridgeVents + "<br />"), 0 < ma.skylights && (n += "Skylights: " + ma.skylights + "<br />", ma.hasOwnProperty("skylightLength") && (dimensionsArray += " in " + ma.skylightLength + "ft length"), dimensionsArray += "<br />"), "");
    let tempT;
    ma.leanTo1 && (tempT = "Walls: " + ma.leanTo1Walls, tempU2 += "<strong>" + le + " " + ce.tempN.abbr + "</strong> Connection Height: " + ma.leanTo1Height + "', Cut topControls: " + ma.leanTo1CutL + "', Cut isRendererReady:" + ma.leanTo1CutR + "', Length: " + (ma.width - ma.leanTo1CutL - ma.leanTo1CutR) + "', Depth: " + ma.leanTo1Depth + "', Pitch: " + ma.leanTo1Pitch + ":12, " + tempT, ma.hasOwnProperty("leanTo1WrappedPosts") && ma.leanTo1WrappedPosts && (tempU2 += ", Post Wrap: Yes"), ma.hasOwnProperty("leanTo1MiteredPosts") && ma.leanTo1MiteredPosts && (tempU2 += ", Mitered Posts: Yes"), tempU2 += "<br /><br />"), ma.leanTo2 && (tempT = "Walls: " + ma.leanTo2Walls, tempU2 += "<strong>" + le + " " + ce.orthographicCamera.abbr + "</strong> Connection Height: " + ma.leanTo2Height + "', Cut topControls: " + ma.leanTo2CutL + "', Cut isRendererReady:" + ma.leanTo2CutR + "', Length: " + (ma.depth - ma.leanTo2CutL - ma.leanTo2CutR) + "', Depth: " + ma.leanTo2Depth + "' Pitch: " + ma.leanTo2Pitch + ":12, " + tempT, ma.hasOwnProperty("leanTo2WrappedPosts") && ma.leanTo2WrappedPosts && (tempU2 += ", Post Wrap: Yes"), ma.hasOwnProperty("leanTo2MiteredPosts") && ma.leanTo2MiteredPosts && (tempU2 += ", Mitered Posts: Yes"), tempU2 += "<br /><br />"), ma.leanTo4 && (tempT = "Walls: " + ma.leanTo4Walls, tempU2 += "<strong>" + le + " " + ce.W.abbr + "</strong> Connection Height: " + ma.leanTo4Height + "', Cut topControls: " + ma.leanTo4CutL + "', Cut isRendererReady:" + ma.leanTo4CutR + "', Length: " + (ma.depth - ma.leanTo4CutL - ma.leanTo4CutR) + "', Depth: " + ma.leanTo4Depth + "' Pitch: " + ma.leanTo4Pitch + ":12, " + tempT, ma.hasOwnProperty("leanTo3WrappedPosts") && ma.leanTo3WrappedPosts && (tempU2 += ", Post Wrap: Yes"), ma.hasOwnProperty("leanTo3MiteredPosts") && ma.leanTo3MiteredPosts && (tempU2 += ", Mitered Posts: Yes"), tempU2 += "<br /><br />"), ma.leanTo3 && (tempT = "Walls: " + ma.leanTo3Walls, tempU2 += "<strong>" + le + " " + ce.S.abbr + "</strong> Connection Height: " + ma.leanTo3Height + "', Cut topControls: " + ma.leanTo3CutL + "', Cut isRendererReady:" + ma.leanTo3CutR + "', Length: " + (ma.width - ma.leanTo3CutL - ma.leanTo3CutR) + "', Depth: " + ma.leanTo3Depth + "' Pitch: " + ma.leanTo3Pitch + ":12, " + tempT, ma.hasOwnProperty("leanTo4WrappedPosts") && ma.leanTo4WrappedPosts && (tempU2 += ", Post Wrap: Yes"), ma.hasOwnProperty("leanTo4MiteredPosts") && ma.leanTo4MiteredPosts && (tempU2 += ", Mitered Posts: Yes"), tempU2 += "<br /><br />"), "" === i && "" === dimensionsArray && "" === tempU2 || (applyToControllers += "<div><h3>Walls</h3>" + i + "</div><div><h3>Roof Options</h3>" + n + "</div><div><h3>" + se + "</h3>" + u + "</div>"), (ma.hasOwnProperty("coveredGableExtensionN") && ma.coveredGableExtensionN || ma.hasOwnProperty("coveredGableExtensionS") && ma.coveredGableExtensionS || ma.hasOwnProperty("coveredGableExtensionE") && ma.coveredGableExtensionE || ma.hasOwnProperty("coveredGableExtensionW") && ma.coveredGableExtensionW) && (ma.coveredGableExtensionN && (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden += "<strong>" + ce.tempN.short + " (" + (ma.width - ma.coveredGableExtensionNCutL - ma.coveredGableExtensionNCutR) + " isSceneLoaded " + ma.coveredGableExtensionNDepth + "):</strong> ") + " Cut topControls: " + ma.coveredGableExtensionNCutL + ",") + " Cut isRendererReady: " + ma.coveredGableExtensionNCutR + ",") + " Height: " + ma.coveredGableExtensionNHeight + ",") + " Pitch: " + ma.coveredGableExtensionNPitch + ":12,", ma.coveredGableExtensionNEnclosed && (setElementHidden += " Enclosed"), setElementHidden += "<br /><br />"), ma.coveredGableExtensionS && (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden += "<strong>" + ce.S.short + " (" + (ma.width - ma.coveredGableExtensionSCutL - ma.coveredGableExtensionSCutR) + " isSceneLoaded " + ma.coveredGableExtensionSDepth + "):</strong> ") + " Cut topControls: " + ma.coveredGableExtensionsCutL + ",") + " Cut isRendererReady: " + ma.coveredGableExtensionSCutR + ",") + " Height: " + ma.coveredGableExtensionSHeight + ",") + " Pitch: " + ma.coveredGableExtensionSPitch + ":12,", ma.coveredGableExtensionSEnclosed && (setElementHidden += " Enclosed"), setElementHidden += "<br /><br />"), ma.coveredGableExtensionE && (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden += "<strong>" + ce.orthographicCamera.short + " (" + (ma.depth - ma.coveredGableExtensionECutL - ma.coveredGableExtensionECutR) + " isSceneLoaded " + ma.coveredGableExtensionEDepth + "):</strong> ") + " Cut topControls: " + ma.coveredGableExtensionECutL + ",") + " Cut isRendererReady: " + ma.coveredGableExtensionECutR + ",") + " Height: " + ma.coveredGableExtensionEHeight + ",") + " Pitch: " + ma.coveredGableExtensionEPitch + ":12,", ma.coveredGableExtensionEEnclosed && (setElementHidden += " Enclosed"), setElementHidden += "<br /><br />"), ma.coveredGableExtensionW && (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden = (setElementHidden += "<strong>" + ce.W.short + " (" + (ma.depth - ma.coveredGableExtensionWCutL - ma.coveredGableExtensionWCutR) + " isSceneLoaded " + ma.coveredGableExtensionWDepth + "):</strong> ") + " Cut topControls: " + ma.coveredGableExtensionWCutL + ",") + " Cut isRendererReady: " + ma.coveredGableExtensionWCutR + ",") + " Height: " + ma.coveredGableExtensionWHeight + ",") + " Pitch: " + ma.coveredGableExtensionWPitch + ":12,", ma.coveredGableExtensionWEnclosed && (setElementHidden += " Enclosed"), setElementHidden += "<br /><br />"), setElementHidden = "<div><h3>" + jt + "</h3>" + setElementHidden + "</div>"), "" !== setElementClass && (setElementClass = "<div><h3>Porches</h3>" + setElementClass + "</div>"), applyToControllers = (applyToControllers += setElementClass + setElementHidden) + "<div><h3>Windows &amp; Doors</h3>" + renderer + "</div>", scene && (applyToControllers += "<div><h3>Colors</h3><br />Roof Color: " + ma.roofColor + "<br />Wall Color: " + ma.wallColor + "<br />Trim Color: " + ma.trimColor + "<br /></div>"), $("#printTable").html(applyToControllers)
}

function Po() {
    var applyToControllers = {};
    return applyToControllers.params = ma, applyToControllers.porches = {}, applyToControllers.doorsWindows = {}, JSON.stringify(applyToControllers)
}

function Wo(applyToControllers, setElementId, setElementClass, setElementHidden) {
    if (applyToControllers = applyToControllers || !1, setElementId = setElementId || 1500, setElementClass = setElementClass || !1, setElementHidden = setElementHidden || !1, orbitControls.autoRotate = !1, qa(), currentCamera == orthographicCamera) {
        var i = (new THREE.Box3).setFromObject(tempLA),
            dimensionsArray = (i.min.isSceneLoaded = ma.buildingWithPorchesDimensions().eastEdge, i.min.y = 0, i.min.tempz = ma.buildingWithPorchesDimensions().southEdge, i.max.isSceneLoaded = ma.buildingWithPorchesDimensions().westEdge, i.max.y = ma.peakHeight(), i.max.tempz = ma.buildingWithPorchesDimensions().northEdge, new THREE.Vector3),
            r = new THREE.Vector3;
        i.getCenter(r), i.getSize(dimensionsArray);
        let applyToControllers, setElementId;
        switch (orthographicCamera.userData.view) {
            case "Front":
                applyToControllers = {
                    view: "Front",
                    dx: 0,
                    dy: 0,
                    dz: 1,
                    width: dimensionsArray.isSceneLoaded,
                    height: dimensionsArray.y
                }, setElementId = {
                    isSceneLoaded: THREE.Math.degToRad(90),
                    y: 0,
                    tempz: 0
                };
                break;
            case "Back":
                applyToControllers = {
                    view: "Back",
                    dx: 0,
                    dy: 0,
                    dz: -1,
                    width: dimensionsArray.isSceneLoaded,
                    height: dimensionsArray.y
                }, setElementId = {
                    isSceneLoaded: THREE.Math.degToRad(-90),
                    y: 0,
                    tempz: 0
                };
                break;
            case "Left":
                applyToControllers = {
                    view: "Left",
                    dx: -1,
                    dy: 0,
                    dz: 0,
                    width: dimensionsArray.tempz,
                    height: dimensionsArray.y
                }, setElementId = {
                    isSceneLoaded: 0,
                    y: 0,
                    tempz: THREE.Math.degToRad(90)
                };
                break;
            case "Right":
                applyToControllers = {
                    view: "Right",
                    dx: 1,
                    dy: 0,
                    dz: 0,
                    width: dimensionsArray.tempz,
                    height: dimensionsArray.y
                }, setElementId = {
                    isSceneLoaded: 0,
                    y: 0,
                    tempz: THREE.Math.degToRad(-90)
                };
                break;
            default:
                applyToControllers = {
                    view: "Top",
                    dx: 1e-5,
                    dy: 1,
                    dz: 0,
                    width: dimensionsArray.tempz,
                    height: dimensionsArray.isSceneLoaded
                }, setElementId = {
                    isSceneLoaded: 0,
                    y: 0,
                    tempz: 0
                }
        }
        orthographicCamera.position.set(r.isSceneLoaded + applyToControllers.dx * dimensionsArray.isSceneLoaded, r.y + applyToControllers.dy * dimensionsArray.y, r.tempz + applyToControllers.dz * dimensionsArray.tempz), topControls.target.set(r.isSceneLoaded, r.y, r.tempz), "Top" !== applyToControllers.view ? orthographicCamera.far = orthographicCamera.position.distanceTo(tempk.position) + .1 : orthographicCamera.far = 1e3, tempz.rotation.set(setElementId.isSceneLoaded, setElementId.y, setElementId.tempz), tempk.rotation.set(setElementId.isSceneLoaded, setElementId.y, setElementId.tempz);
        orthographicCamera.zoom = Math.min(viewportElement.clientHeight / (applyToControllers.height + 100),  viewportElement.clientWidth / (applyToControllers.width + 100)), orthographicCamera.updateProjectionMatrix()
    } else {
        var i = new THREE.Vector3(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth),
            r = new THREE.Vector3(0, ma.height / 2, 0),
            ColorOption = new THREE.Vector3(mainScene.getObjectByName("foundation").position.isSceneLoaded, 50, mainScene.getObjectByName("foundation").position.tempz),
            renderer = new THREE.Vector3(mainScene.getObjectByName("foundation").position.isSceneLoaded, 0, mainScene.getObjectByName("foundation").position.tempz);
        !1 !== setElementClass && (currentCamera == perspectiveCamera ? i.set(setElementClass.isSceneLoaded, setElementClass.y, setElementClass.tempz) : currentCamera == orthographicCamera && (ColorOption.set(setElementClass.isSceneLoaded, setElementClass.y, setElementClass.tempz), renderer.set(setElementClass.isSceneLoaded, 0, setElementClass.tempz))), !1 !== setElementHidden && (currentCamera == perspectiveCamera ? r.set(setElementHidden.isSceneLoaded, setElementHidden.y, setElementHidden.tempz) : currentCamera == orthographicCamera && renderer.set(setElementHidden.isSceneLoaded, 0, setElementHidden.tempz)), !0 === applyToControllers ? (tempP = new TWEEN.Tween(perspectiveCamera.position).to(i, setElementId).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
            shouldAutoRotate = !0
        }).start(), tempP = new TWEEN.Tween(orbitControls.target).to(r, setElementId).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
            shouldAutoRotate = !0
        }).start(), tempP = new TWEEN.Tween(orthographicCamera.position).to(ColorOption, setElementId).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
            shouldAutoRotate = !0
        }).start(), tempP = new TWEEN.Tween(topControls.target).to(renderer, setElementId).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
            shouldAutoRotate = !0
        }).start(), tempP = new TWEEN.Tween(orthographicCamera).to({
            zoom: 1
        }, setElementId).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
            shouldAutoRotate = !0
        }).start()) : "instant" === applyToControllers && (perspectiveCamera.position.set(i.isSceneLoaded, i.y, i.tempz), orbitControls.target.set(r.isSceneLoaded, r.y, r.tempz), orthographicCamera.position.set(ColorOption.isSceneLoaded, ColorOption.y, ColorOption.tempz), topControls.target.set(renderer.isSceneLoaded, renderer.y, renderer.tempz), orthographicCamera.zoom = 1, Go(), orthographicCamera.updateProjectionMatrix(), rendererInstance.render(mainScene, currentCamera))
    }
    $("#guiInOut span.property-name").text("Look Inside")
}

function So() {
    "Look Inside" === $("#guiInOut span.property-name").text() ? (currentCamera == perspectiveCamera ? Wo(!0, 1e3, {
        isSceneLoaded: 0,
        y: 5,
        tempz: 5
    }, {
        isSceneLoaded: 0,
        y: ma.height / 2,
        tempz: 0
    }) : (Ro("3dView"), Wo("instant", 0, {
        isSceneLoaded: 0,
        y: 5,
        tempz: 5
    }, {
        isSceneLoaded: 0,
        y: ma.height / 2,
        tempz: 0
    })), $("#guiInOut span.property-name").text("Go Outside")) : (currentCamera == perspectiveCamera && Wo(!0, 1e3, {
        isSceneLoaded: 1.25 * ma.width,
        y: ma.height + 0,
        tempz: 1.25 * ma.depth
    }, {
        isSceneLoaded: 0,
        y: ma.height / 2,
        tempz: 0
    }), $("#guiInOut span.property-name").text("Look Inside"))
}

function Oo() {
    1 == confirm("Are you sure you want to erase your building and start over?") && (window.location = window.location.pathname)
}

function Bo(applyToControllers) {
    applyToControllers = applyToControllers || !1;
    var setElementId = $("#guiHideWalls span.property-name");
    3 == ma.hideWalls && !applyToControllers || "showWalls" === applyToControllers ? (mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && (setElementId.name.startsWith("roof") || "building" === setElementId.name || "leanTo1" === setElementId.name || "leanTo2" === setElementId.name || "leanTo3" === setElementId.name || "leanTo4" === setElementId.name) || setElementId.name.startsWith("perimeterWall") || setElementId.name.startsWith("ceiling"))
            if (setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++)(setElementId.material[applyToControllers].name.startsWith("BuildingCeiling") || setElementId.material[applyToControllers].name.startsWith("BuildingRoof") || "BuildingWalls" === setElementId.material[applyToControllers].name.substring(0, 13) || "BuildingWainscot" === setElementId.material[applyToControllers].name.substring(0, 16) || "LeantoWalls" === setElementId.material[applyToControllers].name.substring(0, 11) || "LeantoWainscot" === setElementId.material[applyToControllers].name.substring(0, 14) || setElementId.material[applyToControllers].name.startsWith("BuildingSoffit") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim") || setElementId.material[applyToControllers].name.startsWith("BuildingRidgeCap") || setElementId.material[applyToControllers].name.startsWith("interiorWall")) && (setElementId.material[applyToControllers].visible = !0);
            else setElementId.name.startsWith("ceiling") && (setElementId.material.visible = !0)
    }), ma.hideWalls = 0, setElementId.text("Hide Walls")) : (mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && ("building" === setElementId.name || "leanTo1" === setElementId.name || "leanTo2" === setElementId.name || "leanTo3" === setElementId.name || "leanTo4" === setElementId.name || "downspout-clone" === setElementId.name || setElementId.name.startsWith("perimeterWall")))
            if (setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++)(setElementId.material[applyToControllers].name.startsWith("BuildingWalls") || "BuildingWainscot" === setElementId.material[applyToControllers].name.substring(0, 16) || "LeantoWalls" === setElementId.material[applyToControllers].name.substring(0, 11) || "LeantoWainscot" === setElementId.material[applyToControllers].name.substring(0, 14) || setElementId.material[applyToControllers].name.startsWith("BuildingTrim") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim-Base") || setElementId.material[applyToControllers].name.startsWith("interiorWall")) && (setElementId.material[applyToControllers].visible = !1);
            else "Downspouts" === setElementId.material.name && (setElementId.material.visible = !1)
    }), 0 == ma.hideWalls || "hideWalls" == applyToControllers ? (ma.hideWalls = 1, setElementId.text("Hide Roof")) : 1 == ma.hideWalls || "hideRoof" == applyToControllers ? (ma.hideWalls = 2, setElementId.text("Hide Girts"), mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && (setElementId.name.startsWith("roof") || "building" === setElementId.name || "leanTo1" === setElementId.name || "leanTo2" === setElementId.name || "leanTo3" === setElementId.name || "leanTo4" === setElementId.name || setElementId.name.startsWith("ceiling")))
            if (setElementId.material.length)
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++)(setElementId.material[applyToControllers].name.startsWith("BuildingCeiling") || setElementId.material[applyToControllers].name.startsWith("BuildingRoof") || setElementId.material[applyToControllers].name.startsWith("BuildingSoffit") || setElementId.material[applyToControllers].name.startsWith("BuildingTrim") || setElementId.material[applyToControllers].name.startsWith("BuildingRidgeCap") || setElementId.material[applyToControllers].name.startsWith("LeantoCeiling") || setElementId.material[applyToControllers].name.startsWith("Gutters")) && (setElementId.material[applyToControllers].visible = !1);
            else setElementId.name.startsWith("ceiling") && (setElementId.material.visible = !1)
    })) : (ma.hideWalls = 3, setElementId.text("Show Walls"), ua.getObjectByName("GirtParent").visible = !1, ua.getObjectByName("PurlinParentR").visible = !1, ua.getObjectByName("PurlinParentL").visible = !1)), S()
}

function xo() {
    mainScene.traverse(function(setElementId) {
        if (setElementId instanceof THREE.Mesh && ("ceiling" === setElementId.name || "postLogo" === setElementId.name || setElementId.name.startsWith("Truss") || setElementId.name.startsWith("Webbing") || "roofL" === setElementId.name || "roofR" === setElementId.name || "leanTo1Roof" === setElementId.name || "leanTo2Roof" === setElementId.name || "leanTo3Roof" === setElementId.name || "leanTo4Roof" === setElementId.name || "TrussMasterL" === setElementId.name || "TrussMasterR" === setElementId.name || "Framing" === setElementId.name) && (setElementId.visible = !1), setElementId instanceof THREE.Mesh && ("building" === setElementId.name || "leanTo1" === setElementId.name || "leanTo2" === setElementId.name || "leanTo3" === setElementId.name || "leanTo4" === setElementId.name))
            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "LeantoCeiling" !== setElementId.material[applyToControllers].name && "BuildingCeiling" !== setElementId.material[applyToControllers].name && "BuildingCeilingRight-Interior" !== setElementId.material[applyToControllers].name && "BuildingCeilingLeft-Interior" !== setElementId.material[applyToControllers].name || (setElementId.material[applyToControllers].visible = !1)
    }), ua.getObjectByName("GirtParent").visible = !1, ua.getObjectByName("PurlinParentR").visible = !1, ua.getObjectByName("PurlinParentL").visible = !1, ua.visible = !1, ma.hideWalls = 3
}

function Ro(applyToControllers, setElementId) {
    applyToControllers = applyToControllers || !1, setElementId = setElementId || !0, "UserCamera" === currentCamera.name && !1 === applyToControllers || "Top" == applyToControllers || "Front" == applyToControllers || "Back" == applyToControllers || "Left" == applyToControllers || "Right" == applyToControllers ? (currentCamera = orthographicCamera, $("#guiTopView span.property-name").text("3D View"), orthographicCamera.userData.view = applyToControllers, ma.hideWalls = 1, Bo(), S(), rendererInstance.shadowMap.enabled = !1, $("#guiHideWalls").addClass("disabled")) : (currentCamera = perspectiveCamera, $("#guiTopView span.property-name").text("Top View"), setElementId && (orbitControls.target.set(0, ma.height / 2, 0), currentCamera.position.set(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth)), $("#guiInOut span.property-name").text("Look Inside"), $("#guiHideWalls").removeClass("disabled"), tempz.rotation.set(0, 0, 0), tempk.rotation.set(0, 0, 0), rendererInstance.shadowMap.enabled = !0, (applyToControllers = document.getElementById("cameraSelector")) && (applyToControllers.querySelector("option[value=Perspective]").selected = "selected"), Bo("showWalls"), S()), $("#guiInOut span.property-name").text("Look Inside"), setElementId && Wo("instant"), Ko(!0)
}

function Ho() {
    var applyToControllers, setElementId, setElementClass, setElementHidden, i, dimensionsArray, r, ColorOption;
    null != y && $("#popup").is(":visible") && (ColorOption = zo(), setElementId = (applyToControllers = document.getElementById("line")).getContext("2d"), r = ColorOption.isSceneLoaded, ColorOption = ColorOption.y, setElementClass = applyToControllers.offsetWidth, setElementHidden = applyToControllers.offsetHeight, (i = (i = new THREE.Vector3).setFromMatrixPosition(y.matrixWorld)).y < .5 && (i.y = 3), "Driveway" === y.name && (i.y = 0), i.project(currentCamera), r = r / 2, ColorOption = ColorOption / 2, dimensionsArray = viewportElement.getBoundingClientRect(), i.isSceneLoaded = i.isSceneLoaded * r + r + dimensionsArray.left, i.y = -i.y * ColorOption + ColorOption + dimensionsArray.top, i.tempz = 0, r = $("#popup").offset().left + $("#popup").outerWidth() / 2, ColorOption = $("#popup").offset().top + $("#popup").outerHeight(), applyToControllers.width = setElementClass, applyToControllers.height = setElementHidden, setElementId.clearRect(0, 0, setElementClass, setElementHidden), setElementId.lineWidth = 2, setElementId.strokeStyle = "#4AFF64", setElementId.beginPath(), setElementId.moveTo(i.isSceneLoaded, i.y), setElementId.lineTo(r, ColorOption), setElementId.stroke())
}

function Co(applyToControllers, setElementId) {
    setElementId = setElementId || 1;
    var setElementClass = Math.floor(Math.abs(applyToControllers)),
        setElementHidden = 12 * (Math.abs(applyToControllers) - setElementClass);
    12 <= (setElementHidden = 0 !== setElementId ? Math.round(setElementHidden * setElementId) / setElementId : setElementHidden) && (setElementHidden -= 12, setElementClass += 1), applyToControllers < 0 && (setElementClass = -setElementClass, setElementHidden = -setElementHidden);
    let i = "";
    return 0 !== setElementClass && (i += setElementClass + "'"), 0 !== setElementHidden && (i += " " + setElementHidden + '"'), {
        feet: setElementClass,
        inches: setElementHidden,
        friendly: i
    }
}

function Lo() {
    if (y) {
        let applyToControllers = y.position.isSceneLoaded;
        var setElementId, setElementClass, setElementHidden, i, dimensionsArray;
        if (y.rotation.y, y.rotation.y.toFixed(2) != Math.PI.toFixed(2) && "porchS-clone" != y.name || (applyToControllers = -applyToControllers), y.rotation.y.toFixed(2) != (Math.PI / 2).toFixed(2) && "porchW-clone" != y.name || (applyToControllers = -y.position.z), y.rotation.y.toFixed(2) != (Math.PI / -2).toFixed(2) && "porchE-clone" != y.name || (applyToControllers = y.position.tempz), y.name.startsWith("interior") ? (applyToControllers = y.position.isSceneLoaded, renderer = Co(y.userData.toNorthWall(), 1), $("#popup #zPosFt").val(renderer.feet), $("#popup #zPosIn").val(renderer.inches), $("#zpos").is(":hidden") && $("#zpos").show()) : $("#zpos").is(":visible") && $("#zpos").hide(), y.name.startsWith("interiorWall") ? ($("#popup #wallMaterial option[value='" + y.userData.material + "']").prop("selected", !0), $("#wallMaterialRow").is(":hidden") && $("#wallMaterialRow").show()) : $("#wallMaterialRow").is(":visible") && $("#wallMaterialRow").hide(), "scal" !== y.name.substring(0, 4) && "porchWrap" !== y.name.substring(0, 9) ? (controls = Co(applyToControllers, 1), $("#popup #xPosFt").val(controls.feet), $("#popup #xPosIn").val(controls.inches), $("#xpos").is(":hidden") && $("#xpos").show()) : $("#xpos").is(":visible") && $("#xpos").hide(), y.name.startsWith("walk") || y.name.startsWith("window") || y.name.startsWith("garage") && ma.settings.hasOwnProperty("variableLargeDoorSizes") && !ma.settings.variableLargeDoorSizes) {
            r = y.morphTargetInfluences[y.morphTargetDictionary.width], ColorOption = y.morphTargetInfluences[y.morphTargetDictionary.height];
            let applyToControllers, setElementClass = [];
            y.name.startsWith("walk") ? (r = y.name.endsWith("Double-clone") ? parseFloat(r) + 6 : y.name.startsWith("walkDoorEquine") ? parseFloat(r) + 4 : parseFloat(r) + 3, ColorOption = parseFloat(ColorOption) + 7, applyToControllers = Math.round(12 * r) + "isSceneLoaded" + Math.round(12 * ColorOption), setElementClass = ["36x80"], y.name.startsWith("walkDoorAllGlass") && (setElementClass = ["36x84", "48x84"]), y.name.startsWith("walkDoorFramedOpening") && (setElementClass = ["36x72", "36x84", "48x72", "48x84", "48x96"]), y.name.endsWith("Double-clone") && (setElementClass = ["72x84"]), y.name.startsWith("walkDoorEquine") && (applyToControllers = "48x84", setElementClass = ["48x84"]), $("#popup #size").empty(), setElementClass.forEach(function(applyToControllers) {
                $("#popup #size").append('<option value="' + applyToControllers + '">' + applyToControllers + "</option>")
            }), $("#popup #size option[value='" + applyToControllers + "']").prop("selected", !0)) : y.name.startsWith("window") ? (r = Math.round(100 * parseFloat(r)) / 100 + 1, ColorOption = Math.round(100 * parseFloat(ColorOption)) / 100 + 1, applyToControllers = r + "isSceneLoaded" + ColorOption, currentValueStringConvertedToInches = Math.round(12 * r) + "isSceneLoaded" + Math.round(12 * ColorOption), (currentValueStringConvertedToFeetAndInches = bi(r, !0).replace(" ", "")).endsWith("'") && (currentValueStringConvertedToFeetAndInches += "0"), (currentValueStringConvertedToFeetAndInches += " isSceneLoaded " + bi(ColorOption, !0).replace(" ", "")).endsWith("'") && (currentValueStringConvertedToFeetAndInches += "0"), y.name.startsWith("windowPicture") && (setElementClass = ["5'0\" isSceneLoaded 4'0\""]), y.name.startsWith("windowSlider") && (setElementClass = ["3x4", "4x3"], isGeometryActive) && (setElementClass = ["3'4\" isSceneLoaded 2'0\"", "3'4\" isSceneLoaded 3'0\"", "4'4\" isSceneLoaded 2'0\"", "4'4\" isSceneLoaded 2'9\"", "4'4\" isSceneLoaded 3'0\"", "4'4\" isSceneLoaded 4'0\"", "5'4\" isSceneLoaded 2'0\"", "5'4\" isSceneLoaded 3'0\"", "5'4\" isSceneLoaded 4'0\"", "5'4\" isSceneLoaded 5'0\"", "6'4\" isSceneLoaded 2'0\"", "6'4\" isSceneLoaded 3'0\"", "6'4\" isSceneLoaded 4'0\"", "6'4\" isSceneLoaded 5'0\""]), y.name.startsWith("windowHopper") && (setElementClass = ["2x6", "3x4"]), y.name.startsWith("windowDoubleHung") && (setElementClass = ["3x4", "4x3"]), y.name.startsWith("windowSingleHung") && (setElementClass = ["3x3", "3x4", "3x5"]), y.name.startsWith("windowSlope") && (setElementClass = ["3x3", "3x4", "4x3", "4x4", "5x3", "5x4", "6x3", "6x4", "8x3", "8x4", "10x3", "10x4"]), y.name.startsWith("windowLouver") && (setElementClass = ["2x2", "4x2"]), y.name.startsWith("windowFramedOpening") && (setElementClass = ["2x3", "2x4", "2x5", "3x3", "3x4", "3x5", "3x6", "4x3", "4x4", "4x5", "4x6", "5x3", "5x4", "5x5", "5x6", "5x7"]), $("#popup #size").empty(), setElementClass.forEach(function(applyToControllers, setElementId) {
                $("#popup #size").append('<option value="' + applyToControllers.replace(/"/g, "") + '">' + applyToControllers + "</option>"), setElementClass[setElementId] = applyToControllers.replaceAll('"', "")
            }), setElementClass.includes(applyToControllers) ? $('#popup #size option[value="' + applyToControllers + '"]').prop("selected", !0) : setElementClass.includes(currentValueStringConvertedToInches) ? $('#popup #size option[value="' + currentValueStringConvertedToInches + '"]').prop("selected", !0) : setElementClass.includes(currentValueStringConvertedToFeetAndInches.replace(/"/g, "")) ? $('#popup #size option[value="' + currentValueStringConvertedToFeetAndInches.replace(/"/g, "") + '"]').prop("selected", !0) : console.log("Window size not valid")) : y.name.startsWith("garage") && (r = Math.round(10 * parseFloat(r)) / 10 + 1, ColorOption = Math.round(10 * parseFloat(ColorOption)) / 10 + 1, applyToControllers = r + "isSceneLoaded" + ColorOption, y.name.startsWith("garage") && (setElementClass = ["8x8", "9x8", "10x8", "16x7", "16x8", "10x10", "10x12", "12x12", "12x14", "14x12", "14x14"]), y.name.startsWith("garageOverhead") && (setElementClass = ["8x8", "9x8", "10x8", "16x7", "16x8", "10x10", "10x12", "12x12", "12x14", "14x12", "14x14"]), y.name.startsWith("garageRollUp") && (setElementClass = ["8x8", "9x7", "9x8", "16x8", "10x10", "10x12", "12x12", "12x14", "14x12", "14x14"]), y.name.startsWith("garageFramedOpen") && (setElementClass = ["8x8", "9x8", "10x8", "16x7", "16x8", "10x10", "10x12", "12x12", "12x14", "14x12", "14x14", "16x16", "18x16"]), $("#popup #size").empty(), setElementClass.forEach(function(applyToControllers) {
                $("#popup #size").append('<option value="' + applyToControllers + '">' + applyToControllers + "</option>")
            }), $("#popup #size option[value='" + applyToControllers + "']").prop("selected", !0)), $("#sizeRow").is(":hidden") && $("#sizeRow").show()
        } else $("#sizeRow").is(":visible") && $("#sizeRow").hide();
        if (isGeometryActive && !y.name.startsWith("mansard") ? (y.name.startsWith("interior") || "porc" === y.name.substring(0, 4) || "walk" === y.name.substring(0, 4) || "gara" === y.name.substring(0, 4) || "scal" === y.name.substring(0, 4) ? $("#yposTop").is(":visible") && $("#yposTop").hide() : (controls = Co(y.position.y + ColorOption / 2, 1), $("#popup #yPosTopFt").val(controls.feet), $("#popup #yPosTopIn").val(controls.inches), $("#yposTop").is(":hidden") && $("#yposTop").show()), $("#ypos").is(":visible") && $("#ypos").hide()) : (y.name.startsWith("interior") || "porc" === y.name.substring(0, 4) || "walk" === y.name.substring(0, 4) || "gara" === y.name.substring(0, 4) || "scal" === y.name.substring(0, 4) ? $("#ypos").is(":visible") && $("#ypos").hide() : (controls = Co(y.position.y, 1), $("#popup #yPosFt").val(controls.feet), $("#popup #yPosIn").val(controls.inches), $("#ypos").is(":hidden") && $("#ypos").show()), $("#yposTop").is(":visible") && $("#yposTop").hide()), "walk" !== y.name.substring(0, 4) && !y.name.startsWith("interiorDoor") || y.name.startsWith("walkDoorFramedOpening") ? $("#doorSwingButton").is(":visible") && $("#doorSwingButton").hide() : $("#doorSwingButton").is(":hidden") && $("#doorSwingButton").show(), y.name.startsWith("porch") ? $("#copyButton").is(":visible") && $("#copyButton").hide() : $("#copyButton").is(":hidden") && $("#copyButton").show(), y.name.startsWith("interior") || y.name.startsWith("scale") && !y.name.startsWith("scale-driveway") ? $("#rotateRow").is(":hidden") && $("#rotateRow").show() : $("#rotateRow").is(":visible") && $("#rotateRow").hide(), "porchWrap" === y.name.substring(0, 9) ? $("#zsca").is(":hidden") && $("#zsca").show() : $("#zsca").is(":visible") && $("#zsca").hide(), "porc" === y.name.substring(0, 4)) {
            var r = y.morphTargetInfluences[y.morphTargetDictionary.width],
                ColorOption = y.morphTargetInfluences[y.morphTargetDictionary.height],
                renderer = y.morphTargetInfluences[y.morphTargetDictionary.slope],
                controls = y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] + 10,
                c = y.morphTargetInfluences[y.morphTargetDictionary.porchDepth] + 10,
                d = 12 * renderer / c + 3.5,
                tempP = 12 * y.morphTargetInfluences[y.morphTargetDictionary.Overhang],
                camera = y.morphTargetInfluences[y.morphTargetDictionary.miters],
                tempG2 = !1,
                tempU2 = !1,
                tempT = !1;
            y.name.startsWith("porchWrapHip") ? (r = Math.round(100 * parseFloat(r)) / 100 + c) < c && (r = c, y.morphTargetInfluences[y.morphTargetDictionary.width] = r - c) : r = Math.round(100 * parseFloat(r)) / 100 + 10, ColorOption = Math.round(100 * parseFloat(ColorOption)) / 100 + 13.5 + renderer, camera = .5 < camera;
            for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "PorchPosts" === y.material[applyToControllers].name && (tempG2 = y.material[applyToControllers].color.getHex() != Kt.getHex() && y.material[applyToControllers].color.getHex() != Jt.getHex()), "PorchPostsMetal" === y.material[applyToControllers].name && (tempU2 = y.material[applyToControllers].visible);
            var renderer = y.getObjectByName("concrete");
            renderer && renderer.visible && (tempT = !0), r < -.2 && (r = -.2), ColorOption < -.4 && (ColorOption = -.4), i = Math.floor(r), dimensionsArray = Math.round(12 * (r - i)), $("#popup #xScaFt").val(i), $("#popup #xScaIn").val(dimensionsArray), setElementClass = Math.floor(ColorOption), renderer = Math.round(12 * (ColorOption - setElementClass)), $("#popup #yScaFt").val(setElementClass), $("#popup #yScaIn").val(renderer), $("#xsca").is(":hidden") && $("#xsca").show(), $("#ysca").is(":hidden") && $("#ysca").show(), $("#xsca .inches").is(":hidden") && $("#xsca .inches").show(), $("#ysca .inches").is(":hidden") && $("#ysca .inches").show(), $("#popup #ceilingHeight option[value='" + controls + "']").prop("selected", !0), $("#popup #porchDepth option[value='" + c + "']").prop("selected", !0), $("#popup #porchPitch option[value='" + d + "']").prop("selected", !0), $("#popup #porchOverhang option[value='" + tempP + "']").prop("selected", !0), $("#popup #miter").prop("checked", camera), $("#popup #wrap").prop("checked", tempG2), $("#popup #posts").prop("checked", tempU2), $("#popup #concrete").prop("checked", tempT), ma.allowLeanToCeilingHeight ? $("#ceilingHeightRow").show() : $("#ceilingHeightRow").hide(), $("#porchPitchRow").is(":hidden") && $("#porchPitchRow").show(), $("#porchDepthRow").is(":hidden") && $("#porchDepthRow").show(), $("#porchOverhangRow").is(":hidden") && $("#porchOverhangRow").show(), $("#popup #miterRow").is(":hidden") && $("#popup #miterRow").show(), $("#popup #wrapRow").is(":hidden") && $("#popup #wrapRow").show(), $("#popup #postsRow").is(":hidden") && $("#popup #postsRow").show(), $("#popup #concreteRow").is(":hidden") && $("#popup #concreteRow").show(), $("#popup #postsRow").is(":visible") && $("#popup #postsRow").hide(), $("#popup #concreteRow").is(":visible") && $("#popup #concreteRow").hide(), "porchWrap" === y.name.substring(0, 9) ? (setElementId = y.morphTargetInfluences[y.morphTargetDictionary.depth], y.name.startsWith("porchWrapHip") ? (setElementId = Math.round(100 * parseFloat(setElementId)) / 100 + c) < c && (setElementId = c, y.morphTargetInfluences[y.morphTargetDictionary.depth] = setElementId - c) : setElementId = Math.round(100 * parseFloat(setElementId)) / 100 + 10, (setElementId = setElementId < -.2 ? -.2 : setElementId) < -.2 && (setElementId = -.2), setElementHidden = Math.floor(setElementId), renderer = Math.round(12 * (setElementId - setElementHidden)), $("#popup #zScaFt").val(setElementHidden), $("#popup #zScaIn").val(renderer), $("#zsca").is(":hidden") && $("#zsca").show(), $("#zsca .inches").is(":hidden") && $("#zsca .inches").show()) : $("#zsca").is(":visible") && $("#zsca").hide()
        } else "gara" === y.name.substring(0, 4) ? (r = y.morphTargetInfluences[y.morphTargetDictionary.width], ColorOption = y.morphTargetInfluences[y.morphTargetDictionary.height], (r = Math.round(2e3 * parseFloat(r)) / 100 + 10) < -.2 && (r = -.2), (ColorOption = Math.round(1e3 * parseFloat(ColorOption)) / 100 + 10) < -.4 && (ColorOption = -.4), ma.settings.hasOwnProperty("variableLargeDoorSizes") && !ma.settings.variableLargeDoorSizes || (i = Math.floor(r), $("#popup #xScaFt").val(i), setElementClass = Math.floor(ColorOption), $("#popup #yScaFt").val(setElementClass), $("#xsca").is(":hidden") && $("#xsca").show(), $("#ysca").is(":hidden") && $("#ysca").show()), $("#xsca .inches").is(":visible") && $("#xsca .inches").hide(), $("#ysca .inches").is(":visible") && $("#ysca .inches").hide()) : y.name.startsWith("mansard") ? (r = y.morphTargetInfluences[y.morphTargetDictionary.width], ColorOption = y.morphTargetInfluences[y.morphTargetDictionary.height], setElementId = y.morphTargetInfluences[y.morphTargetDictionary.depth], (r = y.name.startsWith("mansardHip") ? Math.round(100 * parseFloat(r)) / 100 + 5 : Math.round(100 * parseFloat(r)) / 100 + 1) < 0 && (r = 0), (ColorOption = Math.round(100 * parseFloat(ColorOption)) / 100 + 2) < 0 && (ColorOption = 0), (setElementId = Math.round(100 * parseFloat(setElementId)) / 100 + 2) < 0 && (setElementId = 0), i = Math.floor(r), setElementClass = Math.floor(ColorOption), setElementHidden = Math.floor(setElementId), $("#popup #xScaFt").val(i), $("#popup #yScaFt").val(setElementClass), $("#popup #zScaFt").val(setElementHidden), $("#xsca").is(":hidden") && $("#xsca").show(), $("#zsca").is(":hidden") && $("#zsca").show(), $("#ysca").is(":hidden") && $("#ysca").show(), $("#xsca .inches").is(":visible") && $("#xsca .inches").hide(), $("#ysca .inches").is(":visible") && $("#ysca .inches").hide(), $("#zsca .inches").is(":visible") && $("#zsca .inches").hide()) : ("interiorWall-clone" === y.name ? (controls = y.scale.isSceneLoaded, i = Math.floor(controls), dimensionsArray = Math.round(12 * (controls - i)), $("#popup #xScaFt").val(i), $("#popup #xScaIn").val(dimensionsArray), $("#xsca").is(":hidden") && $("#xsca").show(), $("#xsca .inches").is(":hidden") && $("#xsca .inches").show()) : $("#xsca").is(":visible") && $("#xsca").hide(), $("#ysca").is(":visible") && $("#ysca").hide(), $("#zsca").is(":visible") && $("#zsca").hide()), $("#ceilingHeightRow").is(":visible") && $("#ceilingHeightRow").hide(), $("#porchPitchRow").is(":visible") && $("#porchPitchRow").hide(), $("#porchDepthRow").is(":visible") && $("#porchDepthRow").hide(), $("#porchOverhangRow").is(":visible") && $("#porchOverhangRow").hide(), $("#popup #miterRow").is(":visible") && $("#popup #miterRow").hide(), $("#popup #wrapRow").is(":visible") && $("#popup #wrapRow").hide(), $("#popup #postsRow").is(":visible") && $("#popup #postsRow").hide(), $("#popup #concreteRow").is(":visible") && $("#popup #concreteRow").hide();
        if ("scal" == y.name.substring(0, 4) ? $("#updateItemButton").is(":visible") && $("#updateItemButton").hide() : $("#updateItemButton").is(":hidden") && $("#updateItemButton").show(), "lean" == y.name.substring(0, 4) ? $("#popup #enclosedRow").is(":hidden") && $("#popup #enclosedRow").show() : $("#popup #enclosedRow").is(":visible") && $("#popup #enclosedRow").hide(), !y.name.startsWith("window") || y.name.startsWith("windowFramedOpening") || y.name.startsWith("windowLouver") || y.name.startsWith("windowSlope")) $("#popup #gridRow").is(":visible") && $("#popup #gridRow").hide(), $("#popup #shuttersRow").is(":visible") && $("#popup #shuttersRow").hide();
        else {
            $("#popup #gridRow").is(":visible") && $("#popup #gridRow").hide(), $("#popup #shuttersRow").is(":visible") && $("#popup #shuttersRow").hide();
            let setElementId, setElementClass;
            for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "WindowGrid" === y.material[applyToControllers].name && (setElementId = y.material[applyToControllers].visible), "Shutters" === y.material[applyToControllers].name && (setElementClass = y.material[applyToControllers].visible);
            $("#popup #grid").prop("checked", setElementId), $("#popup #shutters").prop("checked", setElementClass)
        }
    }
}

function No(applyToControllers) {
    applyToControllers = applyToControllers || !1;
    var setElementId, setElementClass, setElementHidden, i, dimensionsArray, r, ColorOption, renderer, controls = 0,
        c = 0,
        d = 0,
        tempP = 0,
        camera = 0,
        tempG2 = 0;
    if ($("#popup #porchDepthRow").is(":visible") && (i = parseFloat($("#popup #porchDepth option:selected").val()), y.userData.porchDepth = i, "porch" === y.name.substring(0, 5)) && (y.morphTargetInfluences[y.morphTargetDictionary.porchDepth] = i - 10), $("#popup #porchPitchRow").is(":visible") && (dimensionsArray = parseFloat($("#popup #porchPitch option:selected").val()), y.name.startsWith("porch")) && (tempG2 = (dimensionsArray - 3.5) / 12 * i, y.userData.porchPitch = n, y.morphTargetInfluences[y.morphTargetDictionary.slope] = g), $("#popup #xpos").is(":visible") && (n = parseFloat($("#popup #xPosFt").val()) + parseFloat($("#popup #xPosIn").val() / 12), y.name.startsWith("interior") ? (y.userData.toBuildingCenter = dimensionsArray, y.position.isSceneLoaded = dimensionsArray, y.userData.position.isSceneLoaded = dimensionsArray) : (0 == y.rotation.y && "porchS-clone" !== y.name && "porchE-clone" !== y.name && "porchW-clone" !== y.name && (y.position.isSceneLoaded = dimensionsArray, y.userData.position.isSceneLoaded = dimensionsArray), y.rotation.y.toFixed(2) != Math.PI.toFixed(2) && "porchS-clone" != y.name || (y.position.isSceneLoaded = -dimensionsArray, y.userData.position.isSceneLoaded = -dimensionsArray), y.rotation.y.toFixed(2) != (Math.PI / 2).toFixed(2) && "porchW-clone" != y.name || (y.position.z = -n, y.userData.position.z = -n), y.rotation.y.toFixed(2) != (Math.PI / -2).toFixed(2) && "porchE-clone" != y.name || (y.position.tempz = dimensionsArray, y.userData.position.tempz = dimensionsArray))), $("#popup #zpos").is(":visible") && (dimensionsArray = parseFloat($("#popup #zPosFt").val()) + parseFloat($("#popup #zPosIn").val() / 12), y.name.startsWith("interior")) && y.userData.toNorthWall(n), $("#popup #ypos").is(":visible") && (controls = parseFloat($("#popup #yPosFt").val()) + parseFloat($("#popup #yPosIn").val() / 12), y.position.y = controls, y.userData.position.y = controls), $("#popup #yposTop").is(":visible") && (controls = parseFloat($("#popup #yPosTopFt").val()) + parseFloat($("#popup #yPosTopIn").val() / 12) - (y.morphTargetInfluences[y.morphTargetDictionary.height] + 1) / 2, y.position.y = controls, y.userData.position.y = controls), $("#popup #sizeRow").is(":visible") && (dimensionsArray = $("#popup #size").val().split("isSceneLoaded"), c = parseFloat(dimensionsArray[0]), y.name.startsWith("window") ? (dimensionsArray[0].includes("'") ? (controls = dimensionsArray[0].split("'"), c = parseInt(controls[0]), /\d/.test(controls[1]) && (controls[1].includes("/") ? (renderer = controls[1].split("-"), r = parseInt(renderer[0].replace(/\D/g, "")), renderer = renderer[1].split("/"), ColorOption = parseInt(renderer[0].replace(/\D/g, "")), renderer = parseInt(renderer[1].replace(/\D/g, "")), c += (r + ColorOption / renderer) / 12) : c += parseInt(controls[1].replace(/\D/g, "")) / 12)) : 20 < c && (c /= 12), y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1, y.userData.scale.isSceneLoaded = c, y.name.startsWith("windowSlope") && (y.morphTargetInfluences[y.morphTargetDictionary.slope] = ma.roofPitch / 12 * c)) : y.name.startsWith("walk") && (c = parseFloat((c / 12).toFixed(2)), y.morphTargetInfluences[y.morphTargetDictionary.width] = 4 < c ? c - 6 : c - 3, y.userData.scale.isSceneLoaded = c), 1 < dimensionsArray.length) && (d = parseFloat(dimensionsArray[1]), y.name.startsWith("window") ? (dimensionsArray[1].includes("'") && (r = dimensionsArray[1].split("'"), d = parseInt(r[0]), /\d/.test(r[1])) && (r[1].includes("/") ? (ColorOption = r[1].split("-"), renderer = parseInt(ColorOption[0].replace(/\D/g, "")), controls = ColorOption[1].split("/"), d += (renderer + parseInt(controls[0].replace(/\D/g, "")) / parseInt(controls[1].replace(/\D/g, ""))) / 12) : d += parseInt(r[1].replace(/\D/g, "")) / 12), 20 < d && (d /= 12), y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 1) : y.name.startsWith("walk") && (d = parseFloat((d / 12).toFixed(2)), y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 7), y.userData.scale.y = d), $("#popup #xsca").is(":visible") && (c = parseFloat($("#popup #xScaFt").val()), $("#popup #xScaIn").is(":visible") && (c += parseFloat($("#popup #xScaIn").val() / 12)), y.name.startsWith("window") && (4 < (c = c < 3 ? 3 : c) && (c = 4), y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1), "gara" === y.name.substring(0, 4) && (c = Math.round(c), y.name.startsWith("garageSlideMortonThreeStackCrossbuck") && (y.name.endsWith("Right-clone") || y.name.endsWith("Left-clone")) ? 6 < (c = c < 6 ? 6 : c) && (c = 6) : y.name.startsWith("garageSlideMortonThreeStackCrossbuck") ? 12 < (c = c < 12 ? 12 : c) && (c = 12) : y.name.startsWith("garageSlideMorton") && (y.name.endsWith("Right-clone") || y.name.endsWith("Left-clone")) ? 7 < (c = c < 5 ? 5 : c) && (c = 7) : y.name.startsWith("garageSlideMorton") ? 14 < (c = c < 10 ? 10 : c) && (c = 14) : y.name.startsWith("garageSlide") ? (c = c < 8 ? 8 : c) > Math.min(ma.width / 2, 24) && (c = Math.min(ma.width / 2, 24)) : y.name.startsWith("garageBiFold") || y.name.startsWith("garageHydraulic") ? (c = c < 8 ? 8 : c) > ma.width - 4 && (c = ma.width - 4) : 16 < (c = c < 6 ? 6 : c) && (c = 16), (y.name.startsWith("garageBiFold") || y.name.startsWith("garageHydraulic")) && y.material.forEach(function(applyToControllers) {
            null !== applyToControllers.normalMap && applyToControllers.normalMap.hasOwnProperty("image") && applyToControllers.normalMap.image.src.endsWith(tempQ) && "BuildingWalls" == applyToControllers.name && applyToControllers.normalMap.repeat.set(c * tempJ, 1)
        }), y.name.startsWith("garageSlide") && y.material.forEach(function(applyToControllers) {
            null !== applyToControllers.normalMap && applyToControllers.normalMap.hasOwnProperty("image") && applyToControllers.normalMap.image.src.endsWith(tempQ) && "BuildingWalls" == applyToControllers.name && applyToControllers.normalMap.repeat.set(c / 2 * tempJ, 1)
        }), y.morphTargetInfluences[y.morphTargetDictionary.width] = (c - 10) / 20), "porc" === y.name.substring(0, 4) && (y.name.startsWith("porchWrapHip") ? y.morphTargetInfluences[y.morphTargetDictionary.width] = c - i : y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 10), y.name.startsWith("mansard") ? y.name.startsWith("mansardHip") ? (c < 5 && (c = 5), y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 5) : (c < 3 && (c = 3), y.morphTargetInfluences[y.morphTargetDictionary.width] = c - 1) : y.name.startsWith("interiorWall") && (y.scale.x = c), y.userData.width = c, y.userData.scale.x = c), $("#popup #ysca").is(":visible") && (d = parseFloat($("#popup #yScaFt").val()) + parseFloat($("#popup #yScaIn").val() / 12), y.name.startsWith("window") && (4 < (d = d < 3 ? 3 : d) && (d = 4), y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 1), "gara" === y.name.substring(0, 4) && (d = Math.round(d), y.name.startsWith("garageSlideMortonThreeStackCrossbuck") ? 14 < (d = d < 14 ? 14 : d) && (d = 14) : y.name.startsWith("garageSlideMortonThreeStack") ? 12 < (d = d < 11 ? 11 : d) && (d = 12) : y.name.startsWith("garageSlideMorton") ? 10 < (d = d < 8 ? 8 : d) && (d = 10) : y.name.startsWith("garageSlide") || y.name.startsWith("garageBiFold") || y.name.startsWith("garageHydraulic") ? (28 < (d = d < 7 ? 7 : d) && (d = 28), isGeometryActive ? (y.name.startsWith("garageSlide") && d > ma.height && (d = ma.height), (y.name.startsWith("garageBiFold") || y.name.startsWith("garageHydraulic")) && d > ma.height - .666 && (d = ma.height - .666)) : Math.abs(y.rotation.y) < .1 || 3 < Math.abs(y.rotation.y) ? d > ma.height && (d = ma.height) : d > ma.roofHeightAtX(y.position.isSceneLoaded) - 1 && (d = ma.roofHeightAtX(y.position.isSceneLoaded) - 1)) : (14 < (d = d < 6 ? 6 : d) && (d = 14), isGeometryActive ? d > ma.height - 2 && (d = ma.height - 2) : d > ma.height - 1 && (d = ma.height - 1)), y.morphTargetInfluences[y.morphTargetDictionary.height] = (d - 10) / 10), "porc" === y.name.substring(0, 4) && (d > ma.height && (d = ma.height), y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 13.5 - g), y.name.startsWith("mansard") && (3 < (d = d < 2 ? 2 : d) && (d = 3), y.morphTargetInfluences[y.morphTargetDictionary.height] = d - 2), y.userData.height = d, y.userData.scale.y = d), $("#popup #zsca").is(":visible") && (p = parseFloat($("#popup #zScaFt").val()) + parseFloat($("#popup #zScaIn").val() / 12), "porchWrap" === y.name.substring(0, 9) && (y.name.startsWith("porchWrapHip") ? y.morphTargetInfluences[y.morphTargetDictionary.depth] = tempP - i : y.morphTargetInfluences[y.morphTargetDictionary.depth] = tempP - 10), y.name.startsWith("mansard") && (3 < (tempP = tempP < 2 ? 2 : tempP) && (tempP = 3), y.morphTargetInfluences[y.morphTargetDictionary.depth] = tempP - 2), y.userData.depth = tempP, y.userData.scale.tempz = tempP), y.name.startsWith("mansard") && xi(y), $("#popup #wallMaterialRow").is(":visible") && (y.userData.material = $("#popup #wallMaterial option:selected").val(), go()), $("#popup #gridRow").is(":visible")) {
        setElementId = $("#popup #grid").is(":checked");
        for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "WindowGrid" === y.material[applyToControllers].name && (y.material[applyToControllers].visible = setElementId)
    }
    if ($("#popup #shuttersRow").is(":visible")) {
        setElementClass = $("#popup #shutters").is(":checked");
        for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "Shutters" === y.material[applyToControllers].name && (y.material[applyToControllers].visible = setElementClass, y.morphTargetInfluences[y.morphTargetDictionary.hideShutters] = 0 == setElementClass ? 1 : 0)
    }
    if ($("#popup #miterRow").is(":visible") && (dimensionsArray = $("#popup #miter").is(":checked"), y.userData.postMiter = dimensionsArray, y.morphTargetInfluences[y.morphTargetDictionary.miters] = !0 === dimensionsArray ? 1 : 0), $("#popup #wrapRow").is(":visible"))
        if (ColorOption = $("#popup #wrap").is(":checked"), !0 === (y.userData.postWrap = ColorOption))
            for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "PorchPosts" === y.material[applyToControllers].name && (y.material[applyToControllers].color.setStyle(colorOptions.filter(applyToControllers => applyToControllers.name === ma.trimColor).map(applyToControllers => applyToControllers.hex)), y.material[applyToControllers].specular.setHex(3947580), y.material[applyToControllers].shininess.value = 40);
        else
            for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "PorchPosts" === y.material[applyToControllers].name && (y.material[applyToControllers].color.copy(Kt), y.material[applyToControllers].specular.setHex(5394505), y.material[applyToControllers].shininess.value = 15);
    if ($("#popup #postsRow").is(":visible")) {
        setElementHidden = $("#popup #posts").is(":checked"), y.userData.posts = setElementHidden;
        for (let applyToControllers = 0; applyToControllers < y.material.length; applyToControllers++) "PorchPosts" !== y.material[applyToControllers].name && "PorchPostsMetal" !== y.material[applyToControllers].name || !ma.settings.woodenPorchPosts && "PorchPostsMetal" !== y.material[applyToControllers].name || (y.material[applyToControllers].visible = setElementHidden)
    }
    $("#popup #concreteRow").is(":visible") && (renderer = $("#popup #concrete").is(":checked"), y.userData.concrete = renderer, (controls = y.getObjectByName("concrete")).visible = renderer, controls.scale.isSceneLoaded = c, y.name.startsWith("porchWrap") ? (controls.scale.isSceneLoaded = c + i, controls.scale.tempz = tempP + i, controls.position.isSceneLoaded = (c + i) / 2 - c, controls.position.z = (p + i) / 2 - tempP) : controls.scale.tempz = i), $("#popup #porchOverhangRow").is(":visible") && (r = parseFloat($("#popup #porchOverhang option:selected").val()) / 12, y.userData.porchOverhang = parseFloat($("#popup #porchOverhang option:selected").val()) / 12, "porch" === y.name.substring(0, 5)) && (y.morphTargetInfluences[y.morphTargetDictionary.Overhang] = r), ma.allowLeanToCeilingHeight && $("#popup #ceilingHeightRow").is(":visible") ? (camera = parseFloat($("#popup #ceilingHeight option:selected").val()) - 10, y.userData.ceilingHeight = parseFloat($("#popup #ceilingHeight option:selected").val()), "porch" === y.name.substring(0, 5) && (y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] = camera)) : !ma.allowLeanToCeilingHeight && y.name.startsWith("porch") && (camera = d - y.userData.porchDepth * y.userData.porchPitch / 12 - .25, y.userData.ceilingHeight = camera, y.morphTargetInfluences[y.morphTargetDictionary.ceilingHeight] = camera - 10 - 4 / 12), "porch" === y.name.substring(0, 5) && (Ja(y.name), Ka(y)), Yo(y), applyToControllers && jo(), shouldAutoRotate = !0
}

function jo() {
    Be = y, y = null, $("#popup").hide(), $("#line").hide()
}

function zo() {
    let applyToControllers = 1,
        setElementId = 1;
    return void 0 !== viewportElement && (applyToControllers = viewportElement.clientWidth, setElementId = viewportElement.clientHeight), {
        isSceneLoaded: applyToControllers,
        y: setElementId,
        aspectRatio: applyToControllers / setElementId
    }
}

function ko() {
    var applyToControllers = document.getElementById("help"),
        setElementId = document.getElementById("overlay");
    0 < applyToControllers.style.opacity ? (setElementId.style.pointerEvents = "none", applyToControllers.style.pointerEvents = "none", setElementId.style.opacity = 0, applyToControllers.style.opacity = 0, setElementId.style.display = "none", applyToControllers.style.display = "none") : (setElementId.style.display = "block", applyToControllers.style.display = "block", setElementId.style.pointerEvents = "auto", applyToControllers.style.pointerEvents = "auto", setElementId.style.opacity = .8, applyToControllers.style.opacity = 1)
}

function Io() {
    var applyToControllers = document.getElementById("help"),
        setElementId = document.getElementById("overlay");
    setElementId.style.pointerEvents = "none", applyToControllers.style.pointerEvents = "none", setElementId.style.opacity = 0, applyToControllers.style.opacity = 0, setElementId.style.display = "none", applyToControllers.style.display = "none"
}

function Fo() {
    var setElementId = "",
        setElementClass = "ACDEFHJKLMNPQRTUVWXYabcdefghijkmnpqrstuvwxy3479_-",
        setElementHidden = 12 + Math.floor(4 * Math.random());
    for (let applyToControllers = 0; applyToControllers < setElementHidden; applyToControllers++) setElementId += setElementClass.charAt(Math.floor(Math.random() * setElementClass.length));
    return setElementId
}

function Go() {
    var applyToControllers, setElementId, setElementClass;
    orthographicCamera.hasOwnProperty("left") && currentCamera == orthographicCamera && (applyToControllers = rendererInstance.getSize(new THREE.Vector2), setElementId = viewportElement.clientWidth, setElementClass = viewportElement.clientHeight, applyToControllers.isSceneLoaded !== setElementId || applyToControllers.y !== setElementClass) && 1 <= setElementId && 1 <= setElementClass && (rendererInstance.setSize(setElementId, setElementClass, !1), orthographicCamera.left = -setElementId / 2, E.right = setElementId / 2, orthographicCamera.top = setElementClass / 2, E.bottom = -setElementClass / 2, orthographicCamera.updateProjectionMatrix())
}

function _o() {
    for (; tempYE.children.length;) tempYE.remove(tempYE.children[0]);
    qt = !1, shouldAutoRotate = !0
}

function $setElementHidden(setElementId) {
    if (setElementId = setElementId || !1, 2 !== qt) {
        var setElementClass = mainScene.getObjectByName("measureMarker").clone(),
            setElementHidden = Vo(12);
        if (setElementClass.visible = !0, setElementClass.name = "measurementStart-" + setElementHidden, setElementClass.userData.id = setElementHidden, setElementClass.userData.point = "start", setElementClass.userData.distance = 0, setElementClass.userData.otherEndPoint = null, setElementClass.userData.line = null, setElementClass.userData.text = null, Xo(setElementClass), setElementClass.position.set(0, -2, 0), !(qt = !0) !== setElementId) {
            qt = 2, setElementHidden = setElementId.userData.id, setElementClass.name = "measurementEnd-" + setElementHidden, setElementClass.userData.point = "end", setElementClass.userData.otherEndPoint = setElementId, Ia = !0, setElementId.userData.otherEndPoint = setElementClass;
            var i = new THREE.LineBasicMaterial({
                    color: 16776960,
                    linewidth: 2
                }),
                dimensionsArray = new THREE.Geometry,
                r = (dimensionsArray.vertices.push(new THREE.Vector3(setElementId.position.isSceneLoaded, setElementId.position.y, setElementId.position.tempz)), dimensionsArray.vertices.push(new THREE.Vector3(setElementId.position.isSceneLoaded, setElementId.position.y, setElementId.position.tempz)), new THREE.Line(dimensionsArray, i));
            r.frustumCulled = !1, setElementClass.userData.line = r, setElementId.userData.line = r, tempYE.add(r), dimensionsArray = new THREE.PlaneGeometry(1, 1, 1), i = new THREE.MeshBasicMaterial({
                color: "#FFFFFF",
                name: "text"
            });
            let applyToControllers = new THREE.Mesh(dimensionsArray, i);
            applyToControllers.name = "measurementText-" + setElementHidden, applyToControllers.userData.startingPoint = setElementId, applyToControllers.userData.endingPoint = setElementClass, applyToControllers.userData.line = r, applyToControllers.position.set(0, 1.1, 0), applyToControllers.onBeforeRender = function() {
                applyToControllers.quaternion.copy(currentCamera.quaternion)
            }, tempYE.add(applyToControllers), qo(0, applyToControllers), setElementClass.userData.text = applyToControllers, setElementId.userData.text = applyToControllers
        }
        tempYE.add(setElementClass), Be = y, y = setElementClass
    } else qt = !1;
    shouldAutoRotate = !0
}

function Ao(applyToControllers) {
    var setElementId, setElementClass;
    null !== applyToControllers.userData.otherEndPoint && (setElementClass = applyToControllers.userData.line, setElementId = applyToControllers.userData.otherEndPoint, setElementClass.geometry.vertices[0].set(applyToControllers.position.isSceneLoaded, applyToControllers.position.y, applyToControllers.position.tempz), setElementClass.geometry.vertices[1].set(setElementId.position.isSceneLoaded, setElementId.position.y, setElementId.position.tempz), setElementClass.geometry.verticesNeedUpdate = !0, setElementClass.geometry.lineDistancesNeedUpdate = !0, setElementClass = Math.round(100 * setElementId.position.distanceTo(applyToControllers.position)) / 100, applyToControllers.userData.distance = setElementClass, qo(setElementId.userData.distance = setElementClass, applyToControllers.userData.text))
}

function qo(setElementId, setElementClass) {
    "number" == typeof setElementId ? setElementId = bi(setElementId) : "boolean" == typeof setElementId && (setElementId = setElementId ? "true" : "false"), (new THREE.FontLoader).load(A + "fonts/helvetiker_regular.typeface.json", function(applyToControllers) {
        applyToControllers = new THREE.TextGeometry(setElementId + "'", {
            font: applyToControllers,
            size: 1,
            height: 0,
            curveSegments: 2,
            bevelEnabled: !1
        });
        applyToControllers.center(), setElementClass.hasOwnProperty("parent") && setElementClass.parent === tempYE && (setElementClass.geometry.dispose(), setElementClass.geometry = applyToControllers)
    }), setElementClass.position.set((setElementClass.userData.startingPoint.position.isSceneLoaded + setElementClass.userData.endingPoint.position.isSceneLoaded) / 2, 1.1, (setElementClass.userData.startingPoint.position.z + setElementClass.userData.endingPoint.position.z) / 2)
}

function Vo(applyToControllers, setElementId) {
    (!applyToControllers || applyToControllers < 12) && (applyToControllers = 12), setElementId = setElementId || 4, applyToControllers += Math.floor(Math.random() * setElementId);
    setElementId = Date.now().toString().replace(/.(.)?/g, "$1").split("").join("");
    let setElementClass = Math.floor(1e3 + 9e3 * Math.random()).toString().substring(0, 4) + setElementId.substr(setElementId.length - 4);
    for (var setElementHidden = "ACDEFHJKLMNPQRTUVWXYabcdefghijkmnpqrstuvwxy3479", i = setElementHidden.length, dimensionsArray = 8; dimensionsArray <= applyToControllers; dimensionsArray++) setElementClass += setElementHidden.charAt(Math.floor(Math.random() * i));
    return setElementClass = setElementClass.split("").sort(function() {
        return .5 - Math.random()
    }).join("")
}

function Qo() {
    mainScene.traverse(function(applyToControllers) {
        applyToControllers instanceof THREE.BoxHelper && (applyToControllers.name.startsWith("itemBoundingBox") && applyToControllers.parent !== y && 0 !== applyToControllers.material.opacity ? (applyToControllers.material.color.set(13421772), applyToControllers.material.opacity = 0, shouldAutoRotate = !0) : applyToControllers.name.startsWith("itemBoundingBox") && applyToControllers.parent === y && (applyToControllers.material.color.set(65280), applyToControllers.material.opacity = 1, Fa) && (shouldAutoRotate = !0))
    })
}

function Xo(applyToControllers) {
    var setElementId = new THREE.Vector3,
        setElementClass = (setElementId.copy(applyToControllers.scale), applyToControllers.scale.set(1, 1, 1), new THREE.BoxHelper(applyToControllers)),
        setElementHidden = (setElementClass.material.depthTest = !1, setElementClass.renderOrder = 1, setElementClass.material.color.set(13421772), setElementClass.material.transparent = !0, setElementClass.material.opacity = 1, setElementClass.material.linewidth = 3, setElementClass.name = "itemBoundingBox", applyToControllers.add(setElementClass), (new THREE.Box3).setFromObject(applyToControllers)),
        i = setElementHidden.max.isSceneLoaded - setElementHidden.min.isSceneLoaded,
        dimensionsArray = setElementHidden.max.y - setElementHidden.min.y,
        r = setElementHidden.max.tempz - setElementHidden.min.tempz,
        ColorOption = (setElementHidden.max.isSceneLoaded + setElementHidden.min.isSceneLoaded) / 2,
        renderer = (setElementHidden.max.y + setElementHidden.min.y) / 2,
        setElementHidden = (setElementHidden.max.tempz + setElementHidden.min.tempz) / 2,
        i = new THREE.BoxGeometry(i, dimensionsArray, r),
        dimensionsArray = new THREE.MeshBasicMaterial({
            color: 16711680
        }),
        r = new THREE.Mesh(i, dimensionsArray);
    r.position.set(ColorOption, renderer, setElementHidden), r.name = "itemSelectionBox", r.material.transparent = !0, r.material.opacity = 0, (r.userData.object = applyToControllers).add(r), _a.push(r), applyToControllers.userData.hasBoundingBox = !0, applyToControllers.userData.boundingBox = setElementClass, applyToControllers.userData.selectionBox = r, Be = y, (y = applyToControllers).scale.copy(setElementId), Qo()
}

function Uo(applyToControllers) {
    applyToControllers.userData.hasBoundingBox && (applyToControllers.userData.boundingBox.material.opacity = 1, applyToControllers === y ? applyToControllers.userData.boundingBox.material.color.set(65280) : applyToControllers.userData.boundingBox.material.color.set(65535)), shouldAutoRotate = !0
}

function Yo(setElementHidden) {
    if (setElementHidden && setElementHidden.userData.hasBoundingBox && !setElementHidden.name.startsWith("measure") && !setElementHidden.name.startsWith("interiorWall-clone") && !setElementHidden.name.startsWith("interiorDoor-clone")) {
        var i, dimensionsArray = setElementHidden.userData.boundingBox,
            ColorOption = setElementHidden.userData.selectionBox;
        let applyToControllers = ColorOption.position.isSceneLoaded,
            setElementId = ColorOption.position.y,
            setElementClass = ColorOption.position.tempz;
        if (dimensionsArray.parent = tempLA, ColorOption.parent = tempLA, setElementHidden.hasOwnProperty("morphTargetInfluences") && 0 < setElementHidden.morphTargetInfluences.length && !setElementHidden.name.startsWith("porch")) {
            var renderer = setElementHidden.morphTargetInfluences,
                controls = [],
                c = new THREE.Vector3;
            let r = new THREE.Vector3;
            if ("BufferGeometry" === setElementHidden.geometry.type) {
                var d = setElementHidden.geometry.morphAttributes.position,
                    tempP = setElementHidden.geometry.attributes.position.array,
                    camera = tempP.length / 3;
                for (let dimensionsArray = 0; dimensionsArray < camera; dimensionsArray++) {
                    var tempG2 = new THREE.Vector3;
                    r.set(tempP[3 * dimensionsArray], tempP[3 * dimensionsArray + 1], tempP[3 * dimensionsArray + 2]);
                    let setElementClass = 0,
                        setElementHidden = 0,
                        i = 0;
                    for (let applyToControllers = 0, setElementId = d.length; applyToControllers < setElementId; applyToControllers++) {
                        var tempU2 = renderer[applyToControllers];
                        0 !== tempU2 && (setElementClass += tempU2 * (d[applyToControllers].array[3 * dimensionsArray] - r.isSceneLoaded), setElementHidden += tempU2 * (d[applyToControllers].array[3 * dimensionsArray + 1] - r.y), i += tempU2 * (d[applyToControllers].array[3 * dimensionsArray + 2] - r.tempz))
                    }
                    tempG2.set(tempP[3 * dimensionsArray] + setElementClass, tempP[3 * dimensionsArray + 1] + setElementHidden, tempP[3 * dimensionsArray + 2] + i), controls.push(tempG2)
                }
            } else {
                var tempT = setElementHidden.geometry.morphTargets;
                for (let setElementClass = 0; setElementClass < setElementHidden.geometry.vertices.length; setElementClass++) {
                    var y = new THREE.Vector3;
                    r = setElementHidden.geometry.vertices[setElementClass], y = setElementHidden.geometry.vertices[setElementClass];
                    for (let applyToControllers = 0, setElementId = tempT.length; applyToControllers < setElementId; applyToControllers++) {
                        var tempB, tempF2 = renderer[applyToControllers];
                        0 !== tempF2 && (tempB = tempT[applyToControllers].vertices, y.addScaledVector(c.subVectors(tempB[setElementClass], r), tempF2))
                    }
                    controls.push(y)
                }
            }
            var tempW = (new THREE.Box3).setFromPoints(controls),
                tempV2 = tempW.max.isSceneLoaded - tempW.min.isSceneLoaded,
                orthographicCamera = tempW.max.y - tempW.min.y,
                orbitControls = tempW.max.tempz - tempW.min.tempz,
                tempW = (applyToControllers = (tempW.max.isSceneLoaded + tempW.min.isSceneLoaded) / 2, setElementId = (w.max.y + w.min.y) / 2, setElementClass = (tempW.max.tempz + tempW.min.tempz) / 2, new THREE.BoxGeometry(tempV2, orthographicCamera, orbitControls));
            ColorOption.geometry = tempW, dimensionsArray.setFromObject(setElementHidden.userData.selectionBox), ColorOption.parent = setElementHidden, dimensionsArray.parent = setElementHidden, ColorOption.position.set(applyToControllers, setElementId, setElementClass)
        } else setElementHidden.name.startsWith("porchWrap") ? (tempV2 = new THREE.Vector3(0, 0, 0), orthographicCamera = setElementHidden.userData.width + setElementHidden.userData.porchOverhang + setElementHidden.userData.porchDepth, orbitControls = setElementHidden.userData.height - setElementHidden.userData.ceilingHeight, tempW = setElementHidden.userData.depth + setElementHidden.userData.porchOverhang + setElementHidden.userData.porchDepth, i = new THREE.Vector3(orthographicCamera, orbitControls, tempW), (new THREE.Box3).setFromCenterAndSize(tempV2, i), applyToControllers = i.isSceneLoaded / -2 + setElementHidden.userData.porchDepth + setElementHidden.userData.porchOverhang / 2, setElementId = (setElementHidden.userData.height - setElementHidden.userData.ceilingHeight) / 2 + setElementHidden.userData.ceilingHeight, setElementClass = i.tempz / -2 + setElementHidden.userData.porchDepth + setElementHidden.userData.porchOverhang / 2, tempV2 = new THREE.BoxGeometry(orthographicCamera, orbitControls, tempW), ColorOption.geometry = tempV2, ColorOption.position.set(applyToControllers, setElementId, setElementClass), dimensionsArray.setFromObject(setElementHidden.userData.selectionBox), ColorOption.parent = setElementHidden, dimensionsArray.parent = setElementHidden, ColorOption.position.set(applyToControllers, setElementId, setElementClass)) : setElementHidden.name.startsWith("porch") && (i = new THREE.Vector3(0, 0, 0), orthographicCamera = new THREE.Vector3(setElementHidden.userData.width + setElementHidden.userData.porchOverhang, setElementHidden.userData.height - setElementHidden.userData.ceilingHeight, setElementHidden.userData.porchDepth + setElementHidden.userData.porchOverhang), tempW = (orbitControls = (new THREE.Box3).setFromCenterAndSize(i, orthographicCamera)).max.isSceneLoaded - orbitControls.min.isSceneLoaded, tempV2 = orbitControls.max.y - orbitControls.min.y, i = orbitControls.max.tempz - orbitControls.min.tempz, applyToControllers = 0, setElementId = (setElementHidden.userData.height - setElementHidden.userData.ceilingHeight) / 2 + setElementHidden.userData.ceilingHeight, setElementClass = (setElementHidden.userData.porchDepth + setElementHidden.userData.porchOverhang) / 2, orthographicCamera = new THREE.BoxGeometry(tempW, tempV2, i), ColorOption.geometry = orthographicCamera, ColorOption.position.set(applyToControllers, setElementId, setElementClass), dimensionsArray.setFromObject(setElementHidden.userData.selectionBox), ColorOption.parent = setElementHidden, dimensionsArray.parent = setElementHidden, ColorOption.position.set(applyToControllers, setElementId, setElementClass))
    }
}

function Zo(applyToControllers) {
    Yo(applyToControllers), applyToControllers && applyToControllers.userData.hasBoundingBox && (Qo(), applyToControllers.userData.boundingBox.material.opacity = 1, applyToControllers === y ? applyToControllers.userData.boundingBox.material.color.set(65280) : applyToControllers.userData.boundingBox.material.color.set(65535)), shouldAutoRotate = !0
}

function Ko(applyToControllers = !1) {
    var setElementId = viewportElement.clientWidth,
        setElementClass = viewportElement.clientHeight;
    viewportElement.width === setElementId && viewportElement.height === setElementClass && !applyToControllers || (rendererInstance.setSize(setElementId, setElementClass, !1), currentCamera.aspect = setElementId / setElementClass, currentCamera.updateProjectionMatrix(), Go(), orthographicCamera.updateProjectionMatrix(), shouldAutoRotate = !0)
}

function Jo() {
    ma.maxTrussSpacing;
    var tempF, tempG, rendererInstance, $, i, dimensionsArray, A = ma.height,
        tempQ = 0;
    ma.height;
    let r, tempV, tempQ2, applyToControllers, tempX, tempU, ColorOption;
    if ("Single Slope" === ma.roofType ? (ma.height, A += ma.width * Math.abs(ma.roofPitch) / 12, q = ma.width * Math.abs(ma.roofPitch) / 12, dimensionsArray = -(i = tempF = Math.atan(ma.width / q)), ma.roofPitch < 0 && (i = -F, n = F), applyToControllers = Math.sqrt(Math.pow(q, 2) + Math.pow(ma.width, 2)), X = applyToControllers / 2, tempU = applyToControllers / 2) : "Asymmetrical" === ma.roofType ? (ma.asymmetrical, ma.settings.roundAllButMinimumRoofPitch && ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), ma.settings.roundAllButMinimumRoofPitch && (ma.roofPitch > ma.settings.roofPitchMin || ma.roofPitch < -ma.settings.roofPitchMin) && (ma.roofPitch = Math.round(ma.roofPitch)), _ = ma.width / 2 + ma.asymmetrical, $ = ma.width / 2 - ma.asymmetrical, q = Math.max(_, $) * ma.roofPitch / 12, i = Math.atan(rendererInstance / q), n = Math.atan($ / tempQ), tempX = Math.sqrt(Math.pow(tempQ, 2) + Math.pow(rendererInstance, 2)), tempU = Math.sqrt(Math.pow(tempQ, 2) + Math.pow($, 2))) : (ma.settings.roundAllButMinimumRoofPitch && ma.roofPitch < ma.settings.roofPitchMin && (ma.roofPitch = ma.settings.roofPitchMin), ma.settings.roundAllButMinimumRoofPitch && (ma.roofPitch > ma.settings.roofPitchMin || ma.roofPitch < -ma.settings.roofPitchMin) && (ma.roofPitch = Math.round(ma.roofPitch)), tempQ = ma.width / 2 * ma.roofPitch / 12, dimensionsArray = i = tempF = Math.atan(ma.width / 2 / tempQ), Math.atan(ma.eavePitchL / 12), Math.atan(ma.eavePitchR / 12), applyToControllers = Math.sqrt(Math.pow(tempQ, 2) + Math.pow(ma.width / 2, 2)), X = applyToControllers, U = applyToControllers, ma.leanTo2 && (ma.leanTo2Depth, Math.tan(Math.atan(ma.leanTo2Pitch / 12))), ma.leanTo4 && (ma.leanTo4Depth, Math.tan(Math.atan(ma.leanTo4Pitch / 12)))), void 0 !== Ta.getObjectByName("RigidFramingClones") && oi(Ta.getObjectByName("RigidFramingClones")), void 0 !== mainScene.getObjectByName("SteelTrussFramingClones") && oi(ba.getObjectByName("SteelTrussFramingClones")), void 0 !== mainScene.getObjectByName("PostFrameClones") && oi(wa.getObjectByName("PostFrameClones")), void 0 !== mainScene.getObjectByName("HybridFrameClones") && oi(Ea.getObjectByName("HybridFrameClones")), void 0 !== mainScene.getObjectByName("OpenWebFrameClones") && oi(Da.getObjectByName("OpenWebFrameClones")), void 0 !== mainScene.getObjectByName("RigidFramingParent") && (mainScene.getObjectByName("RigidFramingParent").visible = !1), void 0 !== mainScene.getObjectByName("SteelTrussFramingParent") && (mainScene.getObjectByName("SteelTrussFramingParent").visible = !1), void 0 !== mainScene.getObjectByName("PostFrameParent") && (mainScene.getObjectByName("PostFrameParent").visible = !1), "Rigid" == ma.frameType) {
        (ua = Ta).visible = !0;
        var controls = ya,
            colorOptions = 0,
            renderer = ("Asymmetrical" === ma.roofType && (colorOptions = ma.asymmetrical), .175),
            gui = .66,
            shouldAutoRotate = ma.width / -2 + renderer - colorOptions,
            tempJ = ma.width / -2 + renderer + colorOptions,
            tempEE = ma.wallHeightL() - .5,
            tempTE2 = ma.wallHeightR() - .5,
            c = 2,
            tempAE = (c = ma.width < 25 ? 1.23 : c, (Math.PI - i) / 2),
            tempOE = (Math.PI - dimensionsArray) / 2,
            tempIE = c / Math.sin(tempAE),
            tempNE = c / Math.sin(tempOE),
            tempRE = Math.sqrt(Math.pow(tempIE, 2) - Math.pow(c, 2)),
            se = Math.sqrt(Math.pow(tempNE, 2) - Math.pow(c, 2)),
            le = Math.sqrt(Math.pow(tempEE - tempRE, 2) + Math.pow(c - gui, 2)),
            he = Math.sqrt(Math.pow(tempTE2 - se, 2) + Math.pow(c - gui, 2)),
            ce = (Math.acos((tempEE - tempRE) / le), Math.acos((te - se) / he), Math.abs(shouldAutoRotate) / Math.sin(i)),
            currentColorHex = Math.abs(tempJ) / Math.sin(dimensionsArray),
            tempPE = (Math.abs(shouldAutoRotate), Math.sin(i), Math.abs(tempJ), Math.sin(dimensionsArray), Math.abs(c) / Math.sin(i)),
            tempME = Math.abs(c) / Math.sin(dimensionsArray),
            d = controls.getObjectByName("columnSideL"),
            tempP = 1.5,
            camera = (ma.settings.ridgidFrameStraightColumns && (tempP = .6), d.position.isSceneLoaded = ma.width / -2 + renderer, p / Math.tan(i)),
            tempG2 = tempP / Math.tan(dimensionsArray),
            tempU2 = (ma.settings.ridgidFrameStraightColumns ? d.morphTargetInfluences[d.morphTargetDictionary.height] = tempEE - 1 : d.morphTargetInfluences[d.morphTargetDictionary.height] = tempEE - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = camera, (d = controls.getObjectByName("columnSideR")).position.isSceneLoaded = ma.width / 2 - renderer, ma.settings.ridgidFrameStraightColumns ? d.morphTargetInfluences[d.morphTargetDictionary.height] = te - 1 : d.morphTargetInfluences[d.morphTargetDictionary.height] = te - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = g, d.material.color.copy(Wa), void 0 !== sa.getObjectByName("downspout") && void 0 !== controls.getObjectByName("columnSideL") && void 0 !== controls.getObjectByName("columnSideR") && void 0 === controls.getObjectByName("columnSideL").getObjectByName("downspout-clone") && void 0 === controls.getObjectByName("columnSideR").getObjectByName("downspout-clone") && (u = sa.getObjectByName("downspout"), (ColorOption = u.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(180), ColorOption.position.x = -renderer, controls.getObjectByName("columnSideL").add(ColorOption), controls.getObjectByName("columnSideR").add(ColorOption.clone())), ma.gutters && (u = controls.getObjectByName("columnSideL").getObjectByName("downspout-clone"), T = controls.getObjectByName("columnSideR").getObjectByName("downspout-clone"), u.morphTargetInfluences[u.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveL / Math.hypot(12, ma.roofPitch) * ma.roofPitch, tempT.morphTargetInfluences[tempT.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveR / Math.hypot(12, ma.roofPitch) * ma.roofPitch, u.morphTargetInfluences[u.morphTargetDictionary.downspoutOverhang] = ma.eaveL / Math.hypot(12, ma.roofPitch) * 12, tempT.morphTargetInfluences[tempT.morphTargetDictionary.downspoutOverhang] = ma.eaveR / Math.hypot(12, ma.roofPitch) * 12, 0 < ma.hideWalls ? (tempU2.visible = !1, tempT.visible = !1) : ("Single Slope" != ma.roofType || "Single Slope" == ma.roofType && 0 < ma.roofPitch ? tempU2.visible = !0 : tempU2.visible = !1, "Single Slope" != ma.roofType || "Single Slope" == ma.roofType && ma.roofPitch < 0 ? tempT.visible = !0 : tempT.visible = !1)), controls.getObjectByName("beamRoofL")),
            tempT = Math.abs(shouldAutoRotate) - tempP,
            y = ma.width / -2 + renderer + tempP,
            camera = tempEE + camera,
            tempGE = tempT / Math.tan(i);
        tempU2.position.isSceneLoaded = y, tempU2.position.y = camera, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.slantTop] = tempGE, "Single Slope" != ma.roofType ? (tempU2 = controls.getObjectByName("beamRoofR"), tempT = Math.abs(tempJ) - tempP, y = ma.width / 2 - renderer - p, camera = te + g, ge = T / Math.tan(dimensionsArray), tempU2.visible = !0, tempU2.position.isSceneLoaded = y, tempU2.position.y = camera, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.slantTop] = tempGE) : (tempGE = (tempT *= 2) / Math.tan(i), tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.slantTop] = tempGE, (tempU2 = ua.getObjectByName("beamRoofR")).visible = !1), (isRendererReady = new THREE.Group).name = "RigidFramingClones", ua.add(isRendererReady), pa = ti(ma.maxTrussSpacing, renderer, controls, isRendererReady), void 0 !== mainScene.getObjectByName("LeanTo1PostClones") && mainScene.getObjectByName("leanTo1").remove(mainScene.getObjectByName("LeanTo1PostClones")), void 0 !== mainScene.getObjectByName("LeanTo2PostClones") && mainScene.getObjectByName("leanTo2").remove(mainScene.getObjectByName("LeanTo2PostClones")), void 0 !== mainScene.getObjectByName("LeanTo3PostClones") && mainScene.getObjectByName("leanTo3").remove(mainScene.getObjectByName("LeanTo3PostClones")), void 0 !== mainScene.getObjectByName("LeanTo4PostClones") && mainScene.getObjectByName("leanTo4").remove(mainScene.getObjectByName("LeanTo4PostClones"));
        let applyToControllers, setElementId;
        if (void 0 !== controls.getObjectByName("columnSide") && (applyToControllers = controls.getObjectByName("columnSide")), void 0 !== controls.getObjectByName("beamRoof") && (setElementId = controls.getObjectByName("beamRoof")), void 0 !== mainScene.getObjectByName("downspout") && void 0 === applyToControllers.getObjectByName("downspout-clone") && (tempG2 = mainScene.getObjectByName("downspout"), (ColorOption = tempG2.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, applyToControllers.add(ColorOption)), 0 < ma.settings.postsOnGableRoofOverhangsOver) {
            if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = controls.clone()).name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / 2 + ma.gableFront - renderer - .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureFront") ? (y = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = y.deepClone()).name = "overhangEnclosureFront", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureFront"), applyToControllers.position.tempz = ma.depth / 2, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableFront - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureFront") && (tempLA.getObjectByName("overhangEnclosureFront").visible = !1);
            if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = controls.clone()).name = "OverhangBackFrame", clonedFrame.position.tempz = ma.depth / -2 - ma.gableBack + renderer + .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureBack") ? (camera = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = camera.deepClone()).name = "overhangEnclosureBack", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureBack"), applyToControllers.position.tempz = ma.depth / -2, applyToControllers.rotation.y = Math.PI, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableBack - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureBack") && (tempLA.getObjectByName("overhangEnclosureBack").visible = !1)
        }
        var tempUE = mainScene.getObjectByName("masterSecondaryFramingPiece");
        if (tempUE.material.color.copy(Wa), ma.leanTo1) {
            void 0 === mainScene.getObjectByName("LeanTo1PostClones") && ((viewportElement = new THREE.Group).name = "LeanTo1PostClones", viewportElement.rotation.y = 0, mainScene.getObjectByName("leanTo1").add(viewportElement), (perspectiveCamera = new THREE.Group).name = "LeanTo1PostMaster", viewportElement.add(perspectiveCamera)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, perspectiveCamera.add(ColorOption);
            var tempG2 = ColorOption.getObjectByName("downspout-clone"),
                tempB = (tempG2 && (tempG2.position.isSceneLoaded = -renderer - .08, tempG2.rotation.y = Math.PI, tempG2.morphTargetInfluences[tempG2.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - renderer, ma.leanTo1Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo1Pitch / 12), perspectiveCamera.add(ColorOption), ma.leanTo1Length / 2 - renderer - .08),
                tempF2 = ma.leanTo1Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            perspectiveCamera.position.isSceneLoaded = tempB;
            for (var tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo1PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), viewportElement.add(r);
            if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
                for (var tempV2 = 0, tempTE = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12; v < ma.leanTo1Height / ma.girtSpacing;) tempV2 < tempTE / ma.girtSpacing ? ((ColorOption = ue.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo1Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo1Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1,  viewportElement.add(ColorOption), (ColorOption = ue.clone()).position.set(ma.leanTo1Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo1Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo1Length / -2 + renderer / 2, v * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo1Depth) : (tempk = (tempV2 * ma.girtSpacing - ma.leanTo1Height) / (ma.leanTo1Pitch / 12) + 1, (ColorOption = ue.clone()).position.set(ma.leanTo1Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo1Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), tempV2++
        }
        if (ma.leanTo3) {
            void 0 === mainScene.getObjectByName("LeanTo3PostClones") && ((topControls = new THREE.Group).name = "LeanTo3PostClones", topControls.rotation.y = Math.PI, mainScene.getObjectByName("leanTo3").add(topControls), (tempN = new THREE.Group).name = "LeanTo3PostMaster", topControls.add(tempN)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, tempN.add(ColorOption);
            var y = ColorOption.getObjectByName("downspout-clone"),
                tempB = (y && (y.position.isSceneLoaded = -renderer - .08, y.rotation.y = Math.PI, y.morphTargetInfluences[y.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - renderer, ma.leanTo3Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo3Pitch / 12), tempN.add(ColorOption), ma.leanTo3Length / 2 - renderer - .08),
                tempF2 = ma.leanTo3Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            tempN.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo3PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), topControls.add(r);
            if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
                for (var tempV2 = 0, tempYE = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12; v < ma.leanTo3Height / ma.girtSpacing;) tempV2 < tempYE / ma.girtSpacing ? ((ColorOption = ue.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo3Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo3Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, L.add(ColorOption), (ColorOption = ue.clone()).position.set(ma.leanTo3Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo3Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo3Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo3Depth) : (k = (v * ma.girtSpacing - ma.leanTo3Height) / (ma.leanTo3Pitch / 12) + 1, (ColorOption = ue.clone()).position.set(ma.leanTo3Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo3Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), tempV2++
        }
        if (ma.leanTo2) {
            void 0 === mainScene.getObjectByName("LeanTo2PostClones") && ((tempj = new THREE.Group).name = "LeanTo2PostClones", tempj.rotation.y = Math.PI / -2, mainScene.getObjectByName("leanTo2").add(tempj), (_t = new THREE.Group).name = "LeanTo2PostMaster", tempj.add(_t)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, _t.add(ColorOption);
            var controls = ColorOption.getObjectByName("downspout-clone"),
                tempB = (controls && (controls.position.isSceneLoaded = -renderer - .08, controls.rotation.y = Math.PI, controls.morphTargetInfluences[controls.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - renderer, ma.leanTo2Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo2Pitch / 12), _t.add(ColorOption), ma.leanTo2Length / 2 - renderer - .08),
                tempF2 = ma.leanTo2Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            _t.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo2PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempj.add(r);
            if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
                for (var tempV2 = 0, tempBE = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12; v < ma.leanTo2Height / ma.girtSpacing;) tempV2 < tempBE / ma.girtSpacing ? ((ColorOption = ue.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo2Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo2Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, j.add(ColorOption), (ColorOption = ue.clone()).position.set(ma.leanTo2Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo2Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo2Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo2Depth) : (k = (v * ma.girtSpacing - ma.leanTo2Height) / (ma.leanTo2Pitch / 12) + 1, (ColorOption = ue.clone()).position.set(ma.leanTo2Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo2Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), tempV2++
        }
        if (ma.leanTo4) {
            void 0 === mainScene.getObjectByName("LeanTo4PostClones") && ((tempz = new THREE.Group).name = "LeanTo4PostClones", tempz.rotation.y = Math.PI / 2, mainScene.getObjectByName("leanTo4").add(tempz), (Ut = new THREE.Group).name = "LeanTo4PostMaster", tempz.add(Ut)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, Ut.add(ColorOption);
            var camera = ColorOption.getObjectByName("downspout-clone"),
                tempB = (camera && (camera.position.isSceneLoaded = -renderer - .08, camera.rotation.y = Math.PI, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - renderer, ma.leanTo4Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo4Pitch / 12), Ut.add(ColorOption), ma.leanTo4Length / 2 - renderer - .08),
                tempF2 = ma.leanTo4Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            Ut.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo4PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempz.add(r);
            if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
                for (var tempV2 = 0, tempFE = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12; v < ma.leanTo4Height / ma.girtSpacing;) tempV2 < tempFE / ma.girtSpacing ? ((ColorOption = ue.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo4Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo4Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, z.add(ColorOption), (ColorOption = ue.clone()).position.set(ma.leanTo4Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo4Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo4Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo4Depth) : (k = (v * ma.girtSpacing - ma.leanTo4Height) / (ma.leanTo4Pitch / 12) + 1, (ColorOption = ue.clone()).position.set(ma.leanTo4Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = tempUE.clone()).position.set(ma.leanTo4Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), tempV2++
        }
        var tempWE = ma.girtSpacing,
            tempVE = ma.purlinSpacing;
        (tempI = new THREE.Group).name = "GirtParent", isRendererReady.add(tempI), 2 < ma.hideWalls ? tempI.visible = !1 : tempI.visible = !0, (aa = new THREE.Group).name = "PurlinParentL", aa.position.set(ma.width / -2 + renderer + .1, ee, 0), aa.rotation.z = Math.PI / 2 - i, ma.roofPitch < 0 && (aa.rotation.tempz = Math.PI / -2 - i), tempI.add(aa);
        (na = new THREE.Group).name = "PurlinParentR", na.position.set(ma.width / 2 - renderer - .1, te, 0), na.rotation.z = n - Math.PI / -2, ma.roofPitch < 0 && (na.rotation.tempz = dimensionsArray - Math.PI / 2), tempI.add(na);
        var tempEE2 = ma.depth - renderer;
        let setElementClass = tempEE2,
            setElementHidden = 0;
        0 < ma.settings.postsOnGableRoofOverhangsOver && (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver && (setElementClass += ma.gableFront - .5, setElementHidden += ma.gableFront / 2), ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) && (setElementClass += ma.gableBack - .5, setElementHidden -= ma.gableBack / 2);
        for (var orthographicCamera = mainScene.getObjectByName("masterSecondaryFramingPiece").clone(), tempV2 = 0; tempV2 < tempX / tempVE;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 + .1 : ma.purlinThickness / 2 + .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? .1 : .2)), ColorOption.position.set(tempV2 * tempVE, renderer / 2 - applyToControllers, setElementHidden), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = setElementClass, ColorOption.rotation.y = 0, ColorOption.visible = !0, aa.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < tempU / tempVE;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 - .05 : ma.purlinThickness / 2 - .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? -.15 : -.25)), "Single Slope" === ma.roofType ? ColorOption.position.set(tempV2 * -tempVE, -renderer / 2 - applyToControllers, setElementHidden) : ColorOption.position.set(v * ve, -renderer / 2 + applyToControllers, setElementHidden), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = setElementClass, ColorOption.rotation.y = 0, ColorOption.visible = !0, na.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < A / tempWE;) {
            if (tempV2 < ma.wallHeightL() / tempWE && ma.enclosedE) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 + renderer / 1.9 + applyToControllers, tempV2 * tempWE + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempEE2, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.wallHeightR() / tempWE && ma.enclosedW) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / 2 - renderer / 1.9 - applyToControllers, tempV2 * tempWE + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempEE2, ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.height / tempWE) {
                if (ma.enclosedS) {
                    ColorOption = orthographicCamera.clone();
                    let applyToControllers = 0;
                    ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(0, tempV2 * tempWE + .05, ma.depth / -2 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)
                }
                if (ma.enclosedN) {
                    ColorOption = orthographicCamera.clone();
                    let applyToControllers = 0;
                    ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(0, tempV2 * tempWE + .05, ma.depth / 2 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)
                }
            }
            tempV2++
        }
        if (!ma.flushGirts)
            for (; tempV2 < (tempQ + ma.height - .1 - 1) / tempWE;) {
                var tempME2 = tempV2 * tempWE - ma.height,
                    tempDE = ("Single Slope" !== ma.roofType && (tempV = "Asymmetrical" === ma.roofType ? tempME2 / q * ma.asymmetrical : (_ = ma.width / 2, $ = ma.width / 2, n = i = F, 0)), _ - (Me + .5) / Math.tan(Math.PI / 2 - i)),
                    tempPE2 = $ - (tempME2 + .5) / Math.tan(Math.PI / 2 - dimensionsArray);
                ma.enclosedS && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * tempWE + .05, ma.depth / -2 + renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * tempWE + .05, ma.depth / 2 - renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
            }
        ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
        for (var We = Math.ceil(ma.width / ma.maxPostSpacing) - 1, Se = ma.depth / 2 - (renderer + .125), Oe = ma.width / ((We = We < 0 ? 0 : We) + 1), orbitControls = 0, Be = 0, tempV2 = 1; tempV2 <= We; tempV2++)
            if (orbitControls = ma.width / -2 + Oe * v, Be = "Single Slope" === ma.roofType ? ma.roofPitch < 0 ? ma.height + (M - ma.width / 2) * ma.roofPitch / 12 - 1 : ma.height + (M - -ma.width / 2) * ma.roofPitch / 12 - 1 : "Asymmetrical" === ma.roofType ? (Ce = 12 / Math.tan(i), Le = 12 / Math.tan(n), M < ma.asymmetrical ? ma.height + (ma.width / 2 - -orbitControls) * Ce / 12 - 1 - 2.4 - .085 * Ce : ma.height + (ma.width / 2 - orbitControls) * Le / 12 - 1 - 2.4 - .085 * Le) : ma.height + (ma.width / 2 - Math.abs(orbitControls)) * ma.roofPitch / 12 - 1 - p, (ColorOption = sa.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedN ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(M, 0, Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be / 100, isRendererReady.add(ColorOption), (ColorOption = mainScene.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedS ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, -Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be / 100, isRendererReady.add(ColorOption), 0 < ma.mezzanineBays) {
                var xe = pa;
                xe.sort(function(applyToControllers, setElementId) {
                    return applyToControllers - setElementId
                });
                for (var Re = 1; Re <= ma.mezzanineBays; Re++)(ColorOption = mainScene.getObjectByName("columnEnd").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, 0, xe[Re]), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = (ma.mezzanineHeight - 1) / 100, isRendererReady.add(ColorOption)
            }
    }
    if ("Steel Truss" == ma.frameType) {
        (ua = ba).visible = !0;
        var tempG2 = fa,
            colorOptions = 0,
            renderer = ("Asymmetrical" === ma.roofType && (colorOptions = ma.asymmetrical), .3),
            gui = .66,
            shouldAutoRotate = ma.width / -2 + renderer - colorOptions,
            tempJ = ma.width / -2 + renderer + colorOptions,
            tempEE = ma.wallHeightL() - .5,
            tempTE2 = ma.wallHeightR() - .5,
            c = 2,
            tempAE = (c = ma.width < 25 ? 1.23 : c, (Math.PI - i) / 2),
            tempOE = (Math.PI - dimensionsArray) / 2,
            tempIE = c / Math.sin(tempAE),
            tempNE = c / Math.sin(tempOE),
            tempRE = Math.sqrt(Math.pow(tempIE, 2) - Math.pow(c, 2)),
            se = Math.sqrt(Math.pow(tempNE, 2) - Math.pow(c, 2)),
            le = Math.sqrt(Math.pow(tempEE - tempRE, 2) + Math.pow(c - gui, 2)),
            he = Math.sqrt(Math.pow(tempTE2 - se, 2) + Math.pow(c - gui, 2)),
            ce = (Math.atan(tempRE / ie), Math.atan(se / tempNE), Math.acos((tempEE - tempRE) / le), Math.acos((te - se) / he), Math.abs(shouldAutoRotate) / Math.sin(i)),
            currentColorHex = Math.abs(tempJ) / Math.sin(dimensionsArray),
            tempPE = (Math.abs(shouldAutoRotate), Math.sin(i), Math.abs(tempJ), Math.sin(dimensionsArray), Math.abs(c) / Math.sin(i)),
            tempME = Math.abs(c) / Math.sin(dimensionsArray),
            He = ma.width / 2 * ma.roofPitch / 12;
        (d = tempG2.getObjectByName("columnSideL")).position.isSceneLoaded = ma.width / -2 + renderer, d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(i - Math.PI / 2), (d = tempG2.getObjectByName("columnSideR")).position.isSceneLoaded = ma.width / 2 - renderer, d.morphTargetInfluences[d.morphTargetDictionary.height] = te - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(n - Math.PI / 2);
        (currentCamera = tempG2.getObjectByName("truss")).position.y = ma.height - .5, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.width] = ma.width - 1 - 2 * renderer, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.height] = He - 1, currentCamera.material.color.copy(Wa);
        tempG2.getObjectByName("webbingVertR1").visible = !1, tempG2.getObjectByName("webbingVertR2").visible = !1, tempG2.getObjectByName("webbingVertL1").visible = !1, tempG2.getObjectByName("webbingVertL2").visible = !1;
        (W = tempG2.getObjectByName("webbingDiagR1")).position.y = ma.height - .5, W.position.isSceneLoaded = ma.width / 2 / 3, W.rotation.tempz = Math.PI / 2 - Math.atan((He - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(He - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1, W.position.isSceneLoaded = 0, W.rotation.tempz = Math.atan((He / 4 * 3 - .25) / (ma.width / 2 / 4)) - Math.PI / 2, W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.hypot(He / 4 * 3 - .25, ma.width / 2 / 4) - 1, (W = tempG2.getObjectByName("webbingDiagL1")).position.y = ma.height - .5, W.position.isSceneLoaded = ma.width / 2 / -3, W.rotation.tempz = Math.PI / -2 + Math.atan((He - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(He - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1, W.position.isSceneLoaded = 0, W.rotation.tempz = -Math.atan((He / 4 * 3 - .25) / (ma.width / 2 / 4)) + Math.PI / 2, W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.hypot(He / 4 * 3 - .25, ma.width / 2 / 4) - 1, tempG2.getObjectByName("webbingDiagR2").visible = !1, tempG2.getObjectByName("webbingDiagL2").visible = !1, void 0 !== mainScene.getObjectByName("downspout") && void 0 !== tempG2.getObjectByName("columnSideL") && void 0 !== tempG2.getObjectByName("columnSideR") && void 0 === tempG2.getObjectByName("columnSideL").getObjectByName("downspout-clone") && void 0 === tempG2.getObjectByName("columnSideR").getObjectByName("downspout-clone") && (y = mainScene.getObjectByName("downspout"), (ColorOption = y.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(180), ColorOption.position.isSceneLoaded = -renderer, tempG2.getObjectByName("columnSideL").add(ColorOption), tempG2.getObjectByName("columnSideR").add(ColorOption.clone())), ma.gutters && (controls = tempG2.getObjectByName("columnSideL").getObjectByName("downspout-clone"), camera = tempG2.getObjectByName("columnSideR").getObjectByName("downspout-clone"), controls.morphTargetInfluences[controls.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveL / Math.hypot(12, ma.roofPitch) * ma.roofPitch, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveR / Math.hypot(12, ma.roofPitch) * ma.roofPitch, controls.morphTargetInfluences[controls.morphTargetDictionary.downspoutOverhang] = ma.eaveL / Math.hypot(12, ma.roofPitch) * 12, camera.morphTargetInfluences[camera.morphTargetDictionary.downspoutOverhang] = ma.eaveR / Math.hypot(12, ma.roofPitch) * 12, 0 < ma.hideWalls ? (controls.visible = !1, camera.visible = !1) : ("Single Slope" != ma.roofType || "Single Slope" == ma.roofType && 0 < ma.roofPitch ? controls.visible = !0 : controls.visible = !1, "Single Slope" != ma.roofType || "Single Slope" == ma.roofType && ma.roofPitch < 0 ? camera.visible = !0 : camera.visible = !1));
        var tempU2 = tempG2.getObjectByName("beamRoofL"),
            tempP = 0,
            tempGE = (tempT = Math.abs(shouldAutoRotate) - tempP) * ma.roofPitch / 12;
        tempU2.position.isSceneLoaded = ma.width / -2 + renderer + p, u.position.y = ma.height - .4, u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1, u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge, "Single Slope" != ma.roofType ? (u = g.getObjectByName("beamRoofR"), T = Math.abs(J) - p, u.visible = !0, u.position.x = ma.width / 2 - renderer - tempP, tempU2.position.y = ma.height - .4, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.slantTop] = tempGE) : (tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = 2 * tempT - 1, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.slantTop] = 2 * tempGE, (tempU2 = ua.getObjectByName("beamRoofR")).visible = !1), (isRendererReady = new THREE.Group).name = "SteelTrussFramingClones", ua.add(isRendererReady), pa = ti(ma.maxTrussSpacing, renderer, tempG2, isRendererReady), void 0 !== mainScene.getObjectByName("LeanTo1PostClones") && mainScene.getObjectByName("leanTo1").remove(mainScene.getObjectByName("LeanTo1PostClones")), void 0 !== mainScene.getObjectByName("LeanTo2PostClones") && mainScene.getObjectByName("leanTo2").remove(mainScene.getObjectByName("LeanTo2PostClones")), void 0 !== mainScene.getObjectByName("LeanTo3PostClones") && mainScene.getObjectByName("leanTo3").remove(mainScene.getObjectByName("LeanTo3PostClones")), void 0 !== mainScene.getObjectByName("LeanTo4PostClones") && mainScene.getObjectByName("leanTo4").remove(mainScene.getObjectByName("LeanTo4PostClones"));
        let applyToControllers, setElementId;
        if (void 0 !== tempG2.getObjectByName("columnSide") && (applyToControllers = tempG2.getObjectByName("columnSide")), void 0 !== tempG2.getObjectByName("beamRoof") && (setElementId = tempG2.getObjectByName("beamRoof")), void 0 !== mainScene.getObjectByName("downspout") && void 0 === applyToControllers.getObjectByName("downspout-clone") && (y = mainScene.getObjectByName("downspout"), (ColorOption = y.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, applyToControllers.add(ColorOption)), 0 < ma.settings.postsOnGableRoofOverhangsOver) {
            if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = tempG2.clone()).name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / 2 + ma.gableFront - renderer - .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureFront") ? (controls = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = controls.deepClone()).name = "overhangEnclosureFront", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureFront"), applyToControllers.position.tempz = ma.depth / 2, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableFront - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureFront") && (tempLA.getObjectByName("overhangEnclosureFront").visible = !1);
            if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = tempG2.clone()).name = "OverhangBackFrame", clonedFrame.position.tempz = ma.depth / -2 - ma.gableBack + renderer + .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureBack") ? (camera = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = camera.deepClone()).name = "overhangEnclosureBack", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureBack"), applyToControllers.position.tempz = ma.depth / -2, applyToControllers.rotation.y = Math.PI, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableBack - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureBack") && (tempLA.getObjectByName("overhangEnclosureBack").visible = !1)
        }
        if (mainScene.getObjectByName("masterSecondaryFramingPiece").material.color.copy(Wa), ma.leanTo1) {
            void 0 === mainScene.getObjectByName("LeanTo1PostClones") && ((viewportElement = new THREE.Group).name = "LeanTo1PostClones", viewportElement.rotation.y = 0, mainScene.getObjectByName("leanTo1").add(viewportElement), (perspectiveCamera = new THREE.Group).name = "LeanTo1PostMaster", viewportElement.add(perspectiveCamera)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, perspectiveCamera.add(ColorOption);
            var y = ColorOption.getObjectByName("downspout-clone"),
                tempB = (y && (y.position.isSceneLoaded = -renderer - .08, y.rotation.y = Math.PI, y.morphTargetInfluences[y.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - renderer, ma.leanTo1Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo1Pitch / 12), perspectiveCamera.add(ColorOption), ma.leanTo1Length / 2 - renderer - .08),
                tempF2 = ma.leanTo1Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            perspectiveCamera.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo1PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), viewportElement.add(r);
            if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
                for (tempV2 = 0, tempTE = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12; v < ma.leanTo1Height / ma.girtSpacing;) tempV2 < tempTE / ma.girtSpacing ? ((ColorOption = sa.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(0, v * ma.girtSpacing, ma.leanTo1Depth - renderer / 4), ColorOption.rotation.set(0, Math.PI / 2, 0), ColorOption.scale.tempz = ma.leanTo1Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo1Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = ma.leanTo1Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo1Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.z = ma.leanTo1Depth) : (k = (v * ma.girtSpacing - ma.leanTo1Height) / (ma.leanTo1Pitch / 12), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo1Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo1Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), tempV2++
        }
        if (ma.leanTo3) {
            void 0 === mainScene.getObjectByName("LeanTo3PostClones") && ((topControls = new THREE.Group).name = "LeanTo3PostClones", topControls.rotation.y = Math.PI, mainScene.getObjectByName("leanTo3").add(topControls), (tempN = new THREE.Group).name = "LeanTo3PostMaster", topControls.add(tempN)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, tempN.add(ColorOption);
            controls = ColorOption.getObjectByName("downspout-clone"), tempB = (controls && (controls.position.isSceneLoaded = -renderer - .08, controls.rotation.y = Math.PI, controls.morphTargetInfluences[controls.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - renderer, ma.leanTo3Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo3Pitch / 12), tempN.add(ColorOption), ma.leanTo3Length / 2 - renderer - .08), f = ma.leanTo3Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            tempN.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo3PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), topControls.add(r);
            if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
                for (tempV2 = 0, tempYE = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12; v < ma.leanTo3Height / ma.girtSpacing;) tempV2 < tempYE / ma.girtSpacing ? ((ColorOption = sa.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(0, v * ma.girtSpacing, ma.leanTo3Depth - renderer / 4), ColorOption.rotation.set(0, Math.PI / 2, 0), ColorOption.scale.tempz = ma.leanTo3Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo3Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = ma.leanTo3Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo3Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.z = ma.leanTo3Depth) : (k = (v * ma.girtSpacing - ma.leanTo3Height) / (ma.leanTo3Pitch / 12), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo3Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo3Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), tempV2++
        }
        if (ma.leanTo2) {
            void 0 === mainScene.getObjectByName("LeanTo2PostClones") && ((tempj = new THREE.Group).name = "LeanTo2PostClones", tempj.rotation.y = Math.PI / -2, mainScene.getObjectByName("leanTo2").add(tempj), (_t = new THREE.Group).name = "LeanTo2PostMaster", tempj.add(_t)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, _t.add(ColorOption);
            tempG2 = ColorOption.getObjectByName("downspout-clone"), tempB = (tempG2 && (tempG2.position.isSceneLoaded = -renderer - .08, tempG2.rotation.y = Math.PI, tempG2.morphTargetInfluences[tempG2.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - renderer, ma.leanTo2Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo2Pitch / 12), _t.add(ColorOption), ma.leanTo2Length / 2 - renderer - .08), f = ma.leanTo2Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            _t.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo2PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempj.add(r);
            if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
                for (tempV2 = 0, tempBE = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12; v < ma.leanTo2Height / ma.girtSpacing;) tempV2 < tempBE / ma.girtSpacing ? ((ColorOption = sa.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(0, v * ma.girtSpacing, ma.leanTo2Depth - renderer / 4), ColorOption.rotation.set(0, Math.PI / 2, 0), ColorOption.scale.tempz = ma.leanTo2Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo2Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = ma.leanTo2Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo2Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.z = ma.leanTo2Depth) : (k = (v * ma.girtSpacing - ma.leanTo2Height) / (ma.leanTo2Pitch / 12), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo2Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo2Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), tempV2++
        }
        if (ma.leanTo4) {
            void 0 === mainScene.getObjectByName("LeanTo4PostClones") && ((tempz = new THREE.Group).name = "LeanTo4PostClones", tempz.rotation.y = Math.PI / 2, mainScene.getObjectByName("leanTo4").add(tempz), (Ut = new THREE.Group).name = "LeanTo4PostMaster", tempz.add(Ut)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - .5 - 1, ColorOption.rotation.y = Math.PI / 2, Ut.add(ColorOption);
            camera = ColorOption.getObjectByName("downspout-clone"), tempB = (camera && (camera.position.isSceneLoaded = -renderer - .08, camera.rotation.y = Math.PI, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - renderer, ma.leanTo4Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo4Pitch / 12), Ut.add(ColorOption), ma.leanTo4Length / 2 - renderer - .08), f = ma.leanTo4Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            Ut.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo4PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempz.add(r);
            if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
                for (tempV2 = 0, tempFE = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12; v < ma.leanTo4Height / ma.girtSpacing;) tempV2 < tempFE / ma.girtSpacing ? ((ColorOption = sa.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(0, v * ma.girtSpacing, ma.leanTo4Depth - renderer / 4), ColorOption.rotation.set(0, Math.PI / 2, 0), ColorOption.scale.tempz = ma.leanTo4Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo4Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = ma.leanTo4Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo4Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.z = ma.leanTo4Depth) : (k = (v * ma.girtSpacing - ma.leanTo4Height) / (ma.leanTo4Pitch / 12), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo4Length / 2 - renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).position.set(ma.leanTo4Length / -2 + renderer / 4, tempV2 * ma.girtSpacing, tempk / -2 - .2), ColorOption.rotation.set(0, 0, 0), ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), tempV2++
        }
        var setElementClass = ma.girtSpacing,
            setElementHidden = ma.purlinSpacing;
        (tempI = new THREE.Group).name = "GirtParent", isRendererReady.add(tempI), 2 < ma.hideWalls ? tempI.visible = !1 : tempI.visible = !0, (aa = new THREE.Group).name = "PurlinParentL", aa.position.set(ma.width / -2 + renderer + .1, ee, 0), aa.rotation.z = Math.PI / 2 - i, ma.roofPitch < 0 && (aa.rotation.tempz = Math.PI / -2 - i), tempI.add(aa);
        (na = new THREE.Group).name = "PurlinParentR", na.position.set(ma.width / 2 - renderer - .1, te, 0), na.rotation.z = n - Math.PI / -2, ma.roofPitch < 0 && (na.rotation.tempz = dimensionsArray - Math.PI / 2), tempI.add(na), ma.depth;
        for (orthographicCamera = mainScene.getObjectByName("masterSecondaryFramingPiece").clone(), tempV2 = 0; tempV2 < tempX / setElementHidden;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 + .1 : ma.purlinThickness / 2 + .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? .1 : .2)), ColorOption.position.set(tempV2 * setElementHidden, renderer / 2 - applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, aa.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < tempU / setElementHidden;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 - .05 : ma.purlinThickness / 2 - .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? -.15 : -.25)), "Single Slope" === ma.roofType ? ColorOption.position.set(tempV2 * -setElementHidden, -renderer / 2 - applyToControllers, 0) : ColorOption.position.set(v * setElementHidden, -renderer / 2 + applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, na.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < A / setElementClass;) {
            if (tempV2 < ma.wallHeightL() / setElementClass && ma.enclosedE) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 + renderer / 1.9 + applyToControllers, tempV2 * setElementClass + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.wallHeightR() / setElementClass && ma.enclosedW) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / 2 - renderer / 1.9 - applyToControllers, tempV2 * setElementClass + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.height / setElementClass) {
                if (ma.enclosedS) {
                    ColorOption = orthographicCamera.clone();
                    let applyToControllers = 0;
                    ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(0, tempV2 * setElementClass + .05, ma.depth / -2 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)
                }
                if (ma.enclosedN) {
                    ColorOption = orthographicCamera.clone();
                    let applyToControllers = 0;
                    ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(0, tempV2 * setElementClass + .05, ma.depth / 2 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)
                }
            }
            tempV2++
        }
        if (!ma.flushGirts)
            for (; tempV2 < (tempQ + ma.height - .1 - 1) / setElementClass;) {
                tempME2 = tempV2 * setElementClass - ma.height, tempDE = ("Single Slope" !== ma.roofType && (tempV = "Asymmetrical" === ma.roofType ? tempME2 / q * ma.asymmetrical : (_ = ma.width / 2, $ = ma.width / 2, n = i = F, 0)), _ - (Me + .5) / Math.tan(Math.PI / 2 - i)), tempPE2 = $ - (tempME2 + .5) / Math.tan(Math.PI / 2 - dimensionsArray);
                ma.enclosedS && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * setElementClass + .05, ma.depth / -2 + renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * setElementClass + .05, ma.depth / 2 - renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
            }
        ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
        for (var Ce, Le, We = Math.ceil(ma.width / ma.maxPostSpacing) - 1, Se = ma.depth / 2 - (renderer + .125), Oe = ma.width / ((We = We < 0 ? 0 : We) + 1), orbitControls = 0, Be = 0, tempV2 = 1; tempV2 <= We; tempV2++)
            if (orbitControls = ma.width / -2 + Oe * v, Be = "Single Slope" === ma.roofType ? ma.roofPitch < 0 ? ma.height + (M - ma.width / 2) * ma.roofPitch / 12 - 1 : ma.height + (M - -ma.width / 2) * ma.roofPitch / 12 - 1 : "Asymmetrical" === ma.roofType ? (Ce = 12 / Math.tan(i), Le = 12 / Math.tan(n), M < ma.asymmetrical ? ma.height + (ma.width / 2 - -orbitControls) * Ce / 12 - 1 - 2.4 - .085 * Ce : ma.height + (ma.width / 2 - orbitControls) * Le / 12 - 1 - 2.4 - .085 * Le) : ma.height + (ma.width / 2 - Math.abs(orbitControls)) * ma.roofPitch / 12 - 1 - p, (ColorOption = sa.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedN ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(M, 0, Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be / 100, isRendererReady.add(ColorOption), (ColorOption = mainScene.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedS ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, -Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be / 100, isRendererReady.add(ColorOption), 0 < ma.mezzanineBays) {
                var Ne = pa;
                Ne.sort(function(applyToControllers, setElementId) {
                    return applyToControllers - setElementId
                });
                for (Re = 1; Re <= ma.mezzanineBays; Re++)(ColorOption = mainScene.getObjectByName("columnEnd").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, 0, Ne[Re]), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = (ma.mezzanineHeight - 1) / 100, isRendererReady.add(ColorOption)
            }
    }
    if ("Post Frame" == ma.frameType) {
        (ua = wa).visible = !0;
        var tempD = va,
            colorOptions = 0,
            renderer = ("Asymmetrical" === ma.roofType && (colorOptions = ma.asymmetrical), .3),
            gui = .66,
            shouldAutoRotate = ma.width / -2 + renderer - colorOptions,
            tempJ = ma.width / -2 + renderer + colorOptions,
            tempEE = ma.wallHeightL() - .5,
            tempTE2 = ma.wallHeightR() - .5,
            c = 2,
            tempAE = (c = ma.width < 25 ? 1.23 : c, (Math.PI - i) / 2),
            tempOE = (Math.PI - dimensionsArray) / 2,
            tempIE = c / Math.sin(tempAE),
            tempNE = c / Math.sin(tempOE),
            tempRE = Math.sqrt(Math.pow(tempIE, 2) - Math.pow(c, 2)),
            se = Math.sqrt(Math.pow(tempNE, 2) - Math.pow(c, 2)),
            le = Math.sqrt(Math.pow(tempEE - tempRE, 2) + Math.pow(c - gui, 2)),
            he = Math.sqrt(Math.pow(tempTE2 - se, 2) + Math.pow(c - gui, 2)),
            ce = (Math.atan(tempRE / ie), Math.atan(se / tempNE), Math.acos((tempEE - tempRE) / le), Math.acos((te - se) / he), Math.abs(shouldAutoRotate) / Math.sin(i)),
            currentColorHex = Math.abs(tempJ) / Math.sin(dimensionsArray),
            tempPE = (Math.abs(shouldAutoRotate), Math.sin(i), Math.abs(tempJ), Math.sin(dimensionsArray), Math.abs(c) / Math.sin(i)),
            tempME = Math.abs(c) / Math.sin(dimensionsArray),
            He = ma.roofHeightAtX(0) - ma.height;
        Math.max(tempPE, tempME);
        if ((d = tempD.getObjectByName("columnSideL")).position.isSceneLoaded = ma.width / -2 + renderer + 2 / 12 / 2, d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(i - Math.PI / 2), (d = tempD.getObjectByName("columnSideR")).position.isSceneLoaded = ma.width / 2 - renderer - 2 / 12 / 2, d.morphTargetInfluences[d.morphTargetDictionary.height] = te - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(n - Math.PI / 2), void 0 !== tempD.getObjectByName("footingL") && (S = tempD.getObjectByName("footingL")).userData.type !== ma.postFooting && (S.parent.remove(S), S.geometry.dispose(), S = void 0), void 0 !== mainScene.getObjectByName("downspout") && void 0 !== tempD.getObjectByName("columnSideL") && void 0 !== tempD.getObjectByName("columnSideR") && void 0 === tempD.getObjectByName("columnSideL").getObjectByName("downspout-clone") && void 0 === tempD.getObjectByName("columnSideR").getObjectByName("downspout-clone") && (y = mainScene.getObjectByName("downspout"), (ColorOption = y.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(180), ColorOption.position.isSceneLoaded = -renderer, tempD.getObjectByName("columnSideL").add(ColorOption), tempD.getObjectByName("columnSideR").add(ColorOption.clone())), ma.gutters && (controls = tempD.getObjectByName("columnSideL").getObjectByName("downspout-clone"), tempG2 = tempD.getObjectByName("columnSideR").getObjectByName("downspout-clone"), controls.morphTargetInfluences[controls.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveL / Math.hypot(12, ma.roofPitch) * ma.roofPitch, g.morphTargetInfluences[g.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveR / Math.hypot(12, ma.roofPitch) * ma.roofPitch, controls.morphTargetInfluences[controls.morphTargetDictionary.downspoutOverhang] = ma.eaveL / Math.hypot(12, ma.roofPitch) * 12, g.morphTargetInfluences[g.morphTargetDictionary.downspoutOverhang] = ma.eaveR / Math.hypot(12, ma.roofPitch) * 12, 0 < ma.hideWalls ? (controls.visible = !1, tempG2.visible = !1) : ("Single Slope" != ma.roofType || "Single Slope" == ma.roofType && 0 < ma.roofPitch ? controls.visible = !0 : controls.visible = !1, "Single Slope" != ma.roofType || "Single Slope" == ma.roofType && ma.roofPitch < 0 ? tempG2.visible = !0 : tempG2.visible = !1)), void 0 === tempD.getObjectByName("footingL")) {
            switch (ma.postFooting) {
                case "Post in Ground":
                    S = tempD.getObjectByName("footing-Burried").clone();
                    break;
                case "Bracket on Concrete":
                case "Bracket":
                    S = tempD.getObjectByName("footing").clone();
                    break;
                case "Perma-Column":
                    S = tempD.getObjectByName("footing-PermaColumnConcretePost").clone();
                    break;
                case "Morton Foundation System":
                    S = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                    break;
                default:
                    S = !1
            }
            S && (S.rotation.y = THREE.Math.degToRad(90), S.visible = !0, S.name = "footingL", S.userData.type = ma.postFooting, tempD.add(S))
        } else S = tempD.getObjectByName("footingL");
        S && (S.position.isSceneLoaded = ma.width / -2 + renderer + 2 / 12 / 2, void 0 !== tempD.getObjectByName("footingR") && (mt = tempD.getObjectByName("footingR")).userData.type !== ma.postFooting && (mt.parent.remove(mt), mt.geometry.dispose(), mt = void 0), void 0 === tempD.getObjectByName("footingR") ? ((mt = S.clone()).rotation.y = THREE.Math.degToRad(90), mt.name = "footingR", mt.userData.type = ma.postFooting, tempD.add(mt)) : mt = tempD.getObjectByName("footingR"), mt.position.isSceneLoaded = ma.width / 2 - renderer - 2 / 12 / 2);
        var currentCamera = tempD.getObjectByName("truss");
        if (ma.hasOwnProperty("trussThickness") && (currentCamera.scale.tempz = ma.trussThickness), currentCamera.position.y = ma.height - .5, isGeometryActive && (currentCamera.position.y = ma.height - 1), currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.width] = ma.width - 1 - 1, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.height] = Math.abs(He) - 1, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.asymmetrical] = 0, "Asymmetrical" === ma.roofType && (currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.asymmetrical] = ma.asymmetrical, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.height] = ma.roofHeightAtX(ma.asymmetrical) - ma.height - .5 - 1), isGeometryActive && ma.width < 81 && (!ma.hasOwnProperty("trussStyle") || "Scissor" !== ma.trussStyle && "Raised Lower Chord" !== ma.trussStyle) && (currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.height] = -1), !ma.hasOwnProperty("trussStyle") || "Scissor" != ma.trussStyle && "Raised Lower Chord" != ma.trussStyle ? currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.scissorHeight] = 0 : (camera = Math.abs(shouldAutoRotate) * ma.lowerChordScissorPitch / 12, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.scissorHeight] = camera), isGeometryActive) {
            tempD.getObjectByName("webbingVertR1").visible = !1, tempD.getObjectByName("webbingVertR2").visible = !1, tempD.getObjectByName("webbingVertL1").visible = !1, tempD.getObjectByName("webbingVertL2").visible = !1, tempD.getObjectByName("webbingDiagR1").visible = !1, tempD.getObjectByName("webbingDiagR2").visible = !1, tempD.getObjectByName("webbingDiagL1").visible = !1, tempD.getObjectByName("webbingDiagL2").visible = !1;
            var je = tempD.getObjectByName("webbingDiagR1");
            ma.hasOwnProperty("trussThickness") && (je.scale.tempz = ma.trussThickness);
            let applyToControllers = 0;
            y = Math.abs(shouldAutoRotate), controls = Math.abs(tempJ);
            applyToControllers = ma.width < 30 ? 2 : ma.width < 48 ? 4 : ma.width < 66 ? 6 : 10;
            let setElementId;
            void 0 === tempD.getObjectByName("webbingGroup") ? ((setElementId = new THREE.Group).name = "webbingGroup", tempD.add(setElementId)) : setElementId = tempD.getObjectByName("webbingGroup"), setElementId.position.y = ma.height - .5, vo(setElementId);
            let setElementClass, setElementHidden, i, dimensionsArray, r, ColorOption, renderer;
            setElementClass = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0, setElementHidden = setElementClass, r = y / (applyToControllers + 1) * 2, ColorOption = y / (applyToControllers / 2 + 1);
            for (tempV2 = 0; tempV2 < applyToControllers; tempV2++) i = tempV2 % 2 == 0 ? 0 == tempV2 ? (setElementClass -= r / 2, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass) - .35 + .6, n = Math.hypot(r / 2, renderer), THREE.Math.degToRad(-90) - Math.atan(renderer / (-r / 2))) : (setElementClass -= r, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass), dimensionsArray = Math.hypot(setElementHidden - setElementClass, renderer), THREE.Math.degToRad(-90) - Math.atan(renderer / -(setElementHidden - setElementClass))) : (setElementHidden -= ColorOption, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass) - .35 + .6, n = Math.hypot(setElementHidden - setElementClass, renderer), THREE.Math.degToRad(90) + Math.atan(renderer / (setElementHidden - setElementClass))), (WebbingClone = je.clone()).name = "WebbingClone", WebbingClone.visible = !0, WebbingClone.scale.set(.6, dimensionsArray, ma.trussThickness), WebbingClone.rotation.tempz = i, WebbingClone.position.isSceneLoaded = setElementClass, WebbingClone.position.y = ma.lowerChordHeightAtX(setElementClass) - ma.height - .6, setElementId.add(WebbingClone);
            setElementClass = "Asymmetrical" === ma.roofType ? ma.asymmetrical : 0, setElementHidden = setElementClass, r = controls / (applyToControllers + 1) * 2, ColorOption = controls / (applyToControllers / 2 + 1);
            for (tempV2 = 0; tempV2 < applyToControllers; tempV2++) i = tempV2 % 2 == 0 ? 0 == tempV2 ? (setElementClass += r / 2, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass) - .35 + .6, n = Math.hypot(r / 2, renderer), THREE.Math.degToRad(90) - Math.atan(renderer / (r / 2))) : (setElementClass += r, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass), dimensionsArray = Math.hypot(setElementHidden - setElementClass, renderer), THREE.Math.degToRad(90) + Math.atan(renderer / (setElementHidden - setElementClass))) : (setElementHidden += ColorOption, renderer = ma.roofHeightAtX(setElementHidden) - ma.lowerChordHeightAtX(setElementClass) - .35 + .6, n = Math.hypot(setElementHidden - setElementClass, renderer), THREE.Math.degToRad(-90) + Math.atan(renderer / (setElementHidden - setElementClass))), (WebbingClone = je.clone()).name = "WebbingClone", WebbingClone.visible = !0, WebbingClone.scale.set(.6, dimensionsArray, ma.trussThickness), WebbingClone.rotation.tempz = i, WebbingClone.position.isSceneLoaded = setElementClass, WebbingClone.position.y = ma.lowerChordHeightAtX(setElementClass) - ma.height - .6, setElementId.add(WebbingClone)
        } else {
            var W = tempD.getObjectByName("webbingVertR1"),
                W = (ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? W.position.isSceneLoaded = (ma.width / 2 - ma.asymmetrical) / 3 + ma.asymmetrical : W.position.isSceneLoaded = ma.width / 2 / 3, W.morphTargetInfluences[W.morphTargetDictionary.height] = ma.roofHeightAtX(W.position.isSceneLoaded) - ma.height - 1.25, W = tempD.getObjectByName("webbingVertR2"), ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? W.position.isSceneLoaded = (ma.width / 2 - ma.asymmetrical) / 3 * 2 + ma.asymmetrical : W.position.isSceneLoaded = ma.width / 3, W.morphTargetInfluences[W.morphTargetDictionary.height] = ma.roofHeightAtX(W.position.x) - ma.height - 1.25, W = D.getObjectByName("webbingVertL1"), ma.hasOwnProperty("trussThickness") && (W.scale.z = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? W.position.x = (ma.width / -2 - ma.asymmetrical) / 3 + ma.asymmetrical : W.position.isSceneLoaded = ma.width / 2 / -3, W.morphTargetInfluences[W.morphTargetDictionary.height] = ma.roofHeightAtX(W.position.isSceneLoaded) - ma.height - 1.25, W = tempD.getObjectByName("webbingVertL2"), ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? W.position.isSceneLoaded = (ma.width / -2 - ma.asymmetrical) / 3 * 2 + ma.asymmetrical : W.position.x = ma.width / -3, W.morphTargetInfluences[W.morphTargetDictionary.height] = ma.roofHeightAtX(W.position.isSceneLoaded) - ma.height - 1.25, tempD.getObjectByName("webbingDiagR1"));
            ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? (W.position.isSceneLoaded = (ma.width / 2 - ma.asymmetrical) / 3 + ma.asymmetrical, W.rotation.tempz = Math.PI / 2 - Math.atan((ma.roofHeightAtX(ma.asymmetrical) - ma.height - .3) / (W.position.isSceneLoaded - ma.asymmetrical)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(ma.roofHeightAtX(ma.asymmetrical) - ma.height - .3, 2) + Math.pow(W.position.isSceneLoaded - ma.asymmetrical, 2)) - 1) : (W.position.isSceneLoaded = ma.width / 2 / 3, W.rotation.tempz = Math.PI / 2 - Math.atan((He - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(He - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1), W = tempD.getObjectByName("webbingDiagR2"), ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? (W.position.isSceneLoaded = (ma.width / 2 - ma.asymmetrical) / 3 * 2 + ma.asymmetrical, tempG2 = ma.asymmetrical + (ma.width - (ma.width / 2 + ma.asymmetrical)) / 3, currentCamera = W.position.isSceneLoaded - tempG2, camera = ma.roofHeightAtX(tempG2) - ma.height - .3, W.rotation.tempz = Math.PI / 2 - Math.atan(camera / currentCamera), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(camera, 2) + Math.pow(currentCamera, 2)) - 1) : (W.position.isSceneLoaded = ma.width / 3, W.rotation.z = Math.PI / 2 - Math.atan((ma.roofHeightAtX(ma.width / 2 / 3) - ma.height - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(ma.roofHeightAtX(ma.width / 2 / 3) - ma.height - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1), W = tempD.getObjectByName("webbingDiagL1"), ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? (W.position.isSceneLoaded = (ma.width / -2 - ma.asymmetrical) / 3 + ma.asymmetrical, W.rotation.z = Math.PI / -2 + Math.atan((ma.roofHeightAtX(ma.asymmetrical) - ma.height - .3) / Math.abs(W.position.isSceneLoaded - ma.asymmetrical)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(ma.roofHeightAtX(ma.asymmetrical) - ma.height - .3, 2) + Math.pow(W.position.isSceneLoaded - ma.asymmetrical, 2)) - 1) : (W.position.isSceneLoaded = ma.width / 2 / -3, W.rotation.tempz = Math.PI / -2 + Math.atan((He - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(He - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1), W = tempD.getObjectByName("webbingDiagL2"), ma.hasOwnProperty("trussThickness") && (W.scale.tempz = ma.trussThickness), W.position.y = ma.height - .5, "Asymmetrical" === ma.roofType ? (W.position.isSceneLoaded = (ma.width / -2 - ma.asymmetrical) / 3 * 2 + ma.asymmetrical, y = ma.asymmetrical - (ma.width - (ma.width / 2 - ma.asymmetrical)) / 3, controls = W.position.x - y, g = ma.roofHeightAtX(y) - ma.height - .3, W.rotation.z = Math.PI / -2 - Math.atan(tempG2 / controls), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(tempG2, 2) + Math.pow(controls, 2)) - 1) : (W.position.isSceneLoaded = ma.width / -3, W.rotation.z = Math.PI / -2 + Math.atan((ma.roofHeightAtX(ma.width / 2 / -3) - ma.height - .3) / (ma.width / 2 / 3)), W.morphTargetInfluences[W.morphTargetDictionary.height] = Math.sqrt(Math.pow(ma.roofHeightAtX(ma.width / 2 / -3) - ma.height - .3, 2) + Math.pow(ma.width / 2 / 3, 2)) - 1)
        }
        tempU2 = tempD.getObjectByName("beamRoofL"), tempP = (ma.hasOwnProperty("trussThickness") && (tempU2.scale.tempz = ma.trussThickness), 0), tempGE = (tempT = Math.abs(shouldAutoRotate) - tempP) * ma.roofPitch / 12;
        tempU2.position.isSceneLoaded = ma.width / -2 + renderer + p, u.position.y = ma.height - .4, u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1, u.morphTargetInfluences[u.morphTargetDictionary.slantTop] = ge, "Single Slope" !== ma.roofType ? (u = D.getObjectByName("beamRoofR"), ma.hasOwnProperty("trussThickness") && (u.scale.z = ma.trussThickness), T = currentColorHex - p, u.visible = !0, u.position.x = ma.width / 2 - renderer - tempP, tempU2.position.y = ma.height - .4, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.rotation.tempz = -tempCA.rotation.tempz, tempU2 = tempD.getObjectByName("beamRoofL"), ma.hasOwnProperty("trussThickness") && (tempU2.scale.tempz = ma.trussThickness), tempT = ce - tempP, tempU2.visible = !0, tempU2.position.isSceneLoaded = ma.width / -2 + renderer + p, u.position.y = ma.height - .4, u.morphTargetInfluences[u.morphTargetDictionary.length] = T - 1, u.rotation.z = -da.rotation.z) : 0 <= ma.roofPitch ? (u = D.getObjectByName("beamRoofL"), ma.hasOwnProperty("trussThickness") && (u.scale.z = ma.trussThickness), T = Math.abs(currentColorHex) + Math.abs(ce) - 2 * p, u.visible = !0, u.position.x = ma.width / -2 + renderer + tempP, tempU2.position.y = ma.height - .4, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.rotation.tempz = -tempDA.rotation.tempz, (tempU2 = ua.getObjectByName("beamRoofR")).visible = !1) : (tempU2 = tempD.getObjectByName("beamRoofR"), ma.hasOwnProperty("trussThickness") && (tempU2.scale.tempz = ma.trussThickness), tempT = Math.abs(currentColorHex) + Math.abs(ce) - 2 * tempP, tempU2.visible = !0, tempU2.position.isSceneLoaded = ma.width / 2 - renderer - tempP, tempU2.position.y = ma.height - .4, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.length] = tempT - 1, tempU2.rotation.tempz = -tempCA.rotation.tempz, (tempU2 = ua.getObjectByName("beamRoofL")).visible = !1), (isRendererReady = new THREE.Group).name = "PostFrameClones", ua.add(isRendererReady), pa = ti(ma.maxTrussSpacing, renderer, tempD, isRendererReady), void 0 !== mainScene.getObjectByName("LeanTo1PostClones") && mainScene.getObjectByName("leanTo1").remove(mainScene.getObjectByName("LeanTo1PostClones")), void 0 !== mainScene.getObjectByName("LeanTo2PostClones") && mainScene.getObjectByName("leanTo2").remove(mainScene.getObjectByName("LeanTo2PostClones")), void 0 !== mainScene.getObjectByName("LeanTo3PostClones") && mainScene.getObjectByName("leanTo3").remove(mainScene.getObjectByName("LeanTo3PostClones")), void 0 !== mainScene.getObjectByName("LeanTo4PostClones") && mainScene.getObjectByName("leanTo4").remove(mainScene.getObjectByName("LeanTo4PostClones"));
        let applyToControllers, setElementId, setElementClass;
        switch (void 0 !== tempD.getObjectByName("columnSide") && (applyToControllers = tempD.getObjectByName("columnSide")), void 0 !== tempD.getObjectByName("beamRoof") && (setElementId = tempD.getObjectByName("beamRoof")), ma.postFooting) {
            case "Post in Ground":
                setElementClass = tempD.getObjectByName("footing-Burried").clone();
                break;
            case "Bracket on Concrete":
            case "Bracket":
                setElementClass = tempD.getObjectByName("footing").clone();
                break;
            case "Perma-Column":
                setElementClass = tempD.getObjectByName("footing-PermaColumnConcretePost").clone();
                break;
            case "Morton Foundation System":
                setElementClass = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                break;
            default:
                setElementClass = !1
        }
        var ze = tempHA.getObjectByName("masterSecondaryFramingPiece");
        if (ma.leanTo1) {
            void 0 === tempLA.getObjectByName("LeanTo1PostClones") && ((viewportElement = new THREE.Group).name = "LeanTo1PostClones", viewportElement.rotation.y = 0, tempLA.getObjectByName("leanTo1").add(viewportElement), (perspectiveCamera = new THREE.Group).name = "LeanTo1PostMaster", viewportElement.add(perspectiveCamera)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), perspectiveCamera.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - .5 - 1, perspectiveCamera.add(ColorOption);
            camera = ColorOption.getObjectByName("downspout-clone"), tempB = (camera && (camera.position.isSceneLoaded = -renderer - .08, camera.rotation.y = Math.PI, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - renderer, ma.leanTo1Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo1Pitch / 12), perspectiveCamera.add(ColorOption), void 0 !== tempLA.getObjectByName("downspout") && void 0 !== perspectiveCamera.getObjectByName("LeanToPost") && void 0 === perspectiveCamera.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (currentCamera = tempLA.getObjectByName("downspout"), (ColorOption = currentCamera.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, perspectiveCamera.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((y = perspectiveCamera.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / y.parent.scale.y, y.morphTargetInfluences[y.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1), ma.leanTo1Length / 2 - renderer - .08), f = ma.leanTo1Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            perspectiveCamera.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = tempLA.getObjectByName("LeanTo1PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), viewportElement.add(r);
            if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
                for (tempV2 = 0, tempTE = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12; v < ma.leanTo1Height / ma.girtSpacing;) tempV2 < tempTE / ma.girtSpacing ? ((ColorOption = ze.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo1Depth - renderer / 4), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = ma.leanTo1Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo1Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo1Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo1Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo1Depth) : (k = (v * ma.girtSpacing - ma.leanTo1Height) / (ma.leanTo1Pitch / 12) + 1, (ColorOption = ze.clone()).position.set(ma.leanTo1Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo1Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), tempV2++
        }
        if (ma.leanTo3) {
            void 0 === tempLA.getObjectByName("LeanTo3PostClones") && ((topControls = new THREE.Group).name = "LeanTo3PostClones", topControls.rotation.y = Math.PI, tempLA.getObjectByName("leanTo3").add(topControls), (tempN = new THREE.Group).name = "LeanTo3PostMaster", topControls.add(tempN)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.set(0, 0, 0), ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), tempN.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - .5 - 1, tempN.add(ColorOption);
            tempG2 = ColorOption.getObjectByName("downspout-clone"), tempB = (tempG2 && (tempG2.position.isSceneLoaded = -renderer - .08, tempG2.rotation.y = Math.PI, tempG2.morphTargetInfluences[tempG2.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - renderer, ma.leanTo3Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo3Pitch / 12), tempN.add(ColorOption), void 0 !== mainScene.getObjectByName("downspout") && void 0 !== tempN.getObjectByName("LeanToPost") && void 0 === tempN.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (controls = mainScene.getObjectByName("downspout"), (ColorOption = controls.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, tempN.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((tempGE = tempN.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / ge.parent.scale.y, ge.morphTargetInfluences[ge.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1), ma.leanTo3Length / 2 - renderer - .08), f = ma.leanTo3Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            tempN.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo3PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), topControls.add(r);
            if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
                for (tempV2 = 0, tempYE = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12; v < ma.leanTo3Height / ma.girtSpacing;) tempV2 < tempYE / ma.girtSpacing ? ((ColorOption = ze.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo3Depth - renderer / 4), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = ma.leanTo3Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo3Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo3Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo3Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo3Depth) : (k = (v * ma.girtSpacing - ma.leanTo3Height) / (ma.leanTo3Pitch / 12) + 1, (ColorOption = ze.clone()).position.set(ma.leanTo3Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo3Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), tempV2++
        }
        if (ma.leanTo2) {
            void 0 === mainScene.getObjectByName("LeanTo2PostClones") && ((tempj = new THREE.Group).name = "LeanTo2PostClones", tempj.rotation.y = Math.PI / -2, sa.getObjectByName("leanTo2").add(j), (_t = new THREE.Group).name = "LeanTo2PostMaster", j.add(_t)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), _t.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - .5 - 1, _t.add(ColorOption);
            tempT = ColorOption.getObjectByName("downspout-clone"), tempB = (tempT && (tempT.position.isSceneLoaded = -renderer - .08, tempT.rotation.y = Math.PI, tempT.morphTargetInfluences[tempT.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - renderer, ma.leanTo2Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo2Pitch / 12), _t.add(ColorOption), void 0 !== mainScene.getObjectByName("downspout") && void 0 !== _t.getObjectByName("LeanToPost") && void 0 === _t.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (tempU2 = mainScene.getObjectByName("downspout"), (ColorOption = tempU2.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, _t.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((camera = _t.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / camera.parent.scale.y, camera.morphTargetInfluences[camera.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1), ma.leanTo2Length / 2 - renderer - .08), f = ma.leanTo2Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            _t.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo2PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempj.add(r);
            if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
                for (tempV2 = 0, tempBE = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12; v < ma.leanTo2Height / ma.girtSpacing;) tempV2 < tempBE / ma.girtSpacing ? ((ColorOption = ze.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo2Depth - renderer / 4), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = ma.leanTo2Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo2Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo2Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo2Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo2Depth) : (k = (v * ma.girtSpacing - ma.leanTo2Height) / (ma.leanTo2Pitch / 12) + 1, (ColorOption = ze.clone()).position.set(ma.leanTo2Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo2Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), tempV2++
        }
        if (ma.leanTo4) {
            void 0 === mainScene.getObjectByName("LeanTo4PostClones") && ((tempz = new THREE.Group).name = "LeanTo4PostClones", tempz.rotation.y = Math.PI / 2, sa.getObjectByName("leanTo4").add(z), (Ut = new THREE.Group).name = "LeanTo4PostMaster", z.add(Ut)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), Ut.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - .5 - 1, Ut.add(ColorOption);
            currentCamera = ColorOption.getObjectByName("downspout-clone"), tempB = (currentCamera && (currentCamera.position.isSceneLoaded = -renderer - .08, currentCamera.rotation.y = Math.PI, currentCamera.morphTargetInfluences[currentCamera.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1), (ColorOption = setElementId.clone()).name = "LeanToRoofBeam", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - renderer, ma.leanTo4Depth - renderer - .08), ColorOption.scale.isSceneLoaded = ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - .5) / 12) - .5, ColorOption.rotation.y = Math.PI / 2, ColorOption.rotation.z = Math.atan(ma.leanTo4Pitch / 12), Ut.add(ColorOption), void 0 !== mainScene.getObjectByName("downspout") && void 0 !== Ut.getObjectByName("LeanToPost") && void 0 === Ut.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (y = mainScene.getObjectByName("downspout"), (ColorOption = y.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, Ut.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((tempG2 = Ut.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / g.parent.scale.y, g.morphTargetInfluences[g.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1), ma.leanTo4Length / 2 - renderer - .08), f = ma.leanTo4Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            Ut.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo4PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempz.add(r);
            if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
                for (tempV2 = 0, tempFE = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12; v < ma.leanTo4Height / ma.girtSpacing;) tempV2 < tempFE / ma.girtSpacing ? ((ColorOption = ze.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo4Depth - renderer / 4), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = ma.leanTo4Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo4Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo4Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo4Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo4Depth) : (k = (v * ma.girtSpacing - ma.leanTo4Height) / (ma.leanTo4Pitch / 12) + 1, (ColorOption = ze.clone()).position.set(ma.leanTo4Length / 2 - renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = ze.clone()).position.set(ma.leanTo4Length / -2 + renderer / 4, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), tempV2++
        }
        var ke = ma.girtSpacing,
            Ie = ma.purlinSpacing;
        (tempI = new THREE.Group).name = "GirtParent", isRendererReady.add(tempI), 2 < ma.hideWalls ? tempI.visible = !1 : tempI.visible = !0, (aa = new THREE.Group).name = "PurlinParentL", aa.position.set(ma.width / -2 + renderer + .1, ee, 0), aa.rotation.z = Math.PI / 2 - i, ma.roofPitch < 0 && (aa.rotation.tempz = Math.PI / -2 - i), tempI.add(aa);
        (na = new THREE.Group).name = "PurlinParentR", na.position.set(ma.width / 2 - renderer - .1, te, 0), na.rotation.z = n - Math.PI / -2, ma.roofPitch < 0 && (na.rotation.tempz = dimensionsArray - Math.PI / 2), tempI.add(na), ma.depth;
        for (orthographicCamera = mainScene.getObjectByName("masterSecondaryFramingPiece").clone(), tempV2 = 0; tempV2 < tempX / Ie;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 + .1 : ma.purlinThickness / 2 + .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? .1 : .2)), ColorOption.position.set(tempV2 * Ie, renderer / 2 - applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, aa.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < tempU / Ie;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 - .05 : ma.purlinThickness / 2 - .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? -.15 : -.25)), "Single Slope" === ma.roofType ? ColorOption.position.set(tempV2 * -Ie, -renderer / 2 - applyToControllers, 0) : ColorOption.position.set(v * Ie, -renderer / 2 + applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, na.add(ColorOption), tempV2++
        }
        if (isGeometryActive) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + applyToControllers, ma.wallHeightL() - 1, 0), ColorOption.scale.y = .5, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption), ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - applyToControllers, ma.wallHeightR() - 1, 0), ColorOption.scale.y = .5, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
        } else(ColorOption = setElementId.clone()).position.set(ma.width / 2 - renderer - 2 / 12 / 2, ma.wallHeightR() - .5, (ma.depth - renderer) / 2), ColorOption.scale.isSceneLoaded = ma.depth - renderer, ColorOption.rotation.y = THREE.Math.degToRad(90), ColorOption.visible = !0, tempI.add(ColorOption), (ColorOption = setElementId.clone()).position.set(ma.width / -2 + renderer + 2 / 12 / 2, ma.wallHeightL() - .5, (ma.depth - renderer) / 2), ColorOption.scale.isSceneLoaded = ma.depth - renderer, ColorOption.rotation.y = THREE.Math.degToRad(90), ColorOption.visible = !0, tempI.add(ColorOption), "Single Slope" === ma.roofType && (0 <= ma.roofPitch ? (ColorOption = setElementId.clone()).position.set(ma.width / 2 - renderer - 2 / 12 / 2, ma.wallHeightL() - .5, (ma.depth - renderer) / 2) : (ColorOption = setElementId.clone()).position.set(ma.width / -2 + renderer + 2 / 12 / 2, ma.wallHeightR() - .5, (ma.depth - renderer) / 2), ColorOption.scale.isSceneLoaded = ma.depth - renderer, ColorOption.rotation.y = THREE.Math.degToRad(90), ColorOption.visible = !0, tempI.add(ColorOption));
        ma.settings.showPostFrameBottomPlate && ((ColorOption = orthographicCamera.clone()).rotation.tempz = Math.PI / 2, bottomPlateFlushOffset = ma.girtThickness / 2, ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + bottomPlateFlushOffset + 1 / 12, .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.z = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, I.add(ColorOption), (ColorOption = E.clone()).rotation.z = Math.PI / 2, ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - bottomPlateFlushOffset - 1 / 12, .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption));
        for (tempV2 = 0; tempV2 < A / ke;) {
            if (tempV2 < ma.wallHeightL() / ke && ma.enclosedE) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ke + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.wallHeightR() / ke && ma.enclosedW) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ke + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            let applyToControllers = 0;
            ma.flushGirts && (applyToControllers = ma.girtThickness / 2), v < ma.height / ke && (ma.enclosedS && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.position.set(0, tempV2 * ke + .05, ma.depth / -2 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN) && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.position.set(0, tempV2 * ke + .05, ma.depth / 2 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
        }
        if (!ma.flushGirts)
            for (; tempV2 < (tempQ + ma.height - .1) / ke;) {
                tempME2 = tempV2 * ke - ma.height, tempDE = ("Single Slope" !== ma.roofType && (tempV = "Asymmetrical" === ma.roofType ? tempME2 / q * ma.asymmetrical : (_ = ma.width / 2, $ = ma.width / 2, n = i = F, 0)), _ - (Me + .5) / Math.tan(Math.PI / 2 - i)), tempPE2 = $ - (tempME2 + .5) / Math.tan(Math.PI / 2 - dimensionsArray);
                ma.enclosedS && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * ke + .05, ma.depth / -2 + renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * ke + .05, ma.depth / 2 - renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
            }
        ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
        for (We = Math.ceil(ma.width / ma.maxPostSpacing) - 1, Se = ma.depth / 2 - (renderer + .125), Oe = ma.width / ((We = We < 0 ? 0 : We) + 1), orbitControls = 0, Be = 0, tempV2 = 1; tempV2 <= We; tempV2++) {
            switch (orbitControls = ma.width / -2 + Oe * tempV2, Be = ma.height - 1 - 1, (ColorOption = tempD.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedN ? (ColorOption.visible = !0, ma.settings.showPostFrameBottomPlate && ((bottomPlateClonedObject = orthographicCamera.clone()).rotation.tempz = Math.PI / 2, bottomPlateFlushOffset = ma.girtThickness / 2, bottomPlateClonedObject.position.set(0, .05, ma.depth / 2 + .04 - renderer / 1.9 - bottomPlateFlushOffset - .125), bottomPlateClonedObject.scale.y = ma.girtThickness, bottomPlateClonedObject.scale.tempz = ma.width - renderer, bottomPlateClonedObject.rotation.y = THREE.Math.degToRad(90), bottomPlateClonedObject.visible = !0, tempI.add(bottomPlateClonedObject), (bottomPlateClonedObject = orthographicCamera.clone()).rotation.tempz = Math.PI / 2, bottomPlateClonedObject.position.set(0, .05, ma.depth / -2 - .04 + renderer / 1.9 + bottomPlateFlushOffset + .125), bottomPlateClonedObject.scale.y = ma.girtThickness, bottomPlateClonedObject.scale.tempz = ma.width - renderer, bottomPlateClonedObject.rotation.y = THREE.Math.degToRad(90), bottomPlateClonedObject.visible = !0, tempI.add(bottomPlateClonedObject))) : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), ma.postFooting) {
                case "Post in Ground":
                    var Fe = tempD.getObjectByName("footing-Burried").clone();
                    break;
                case "Bracket on Concrete":
                case "Bracket":
                    Fe = tempD.getObjectByName("footing").clone();
                    break;
                case "Perma-Column":
                    Fe = tempD.getObjectByName("footing-PermaColumnConcretePost").clone();
                    break;
                case "Morton Foundation System":
                    Fe = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                    break;
                default:
                    Fe = !1
            }
            if (Fe && (Fe.visible = !0, Fe.position.set(0, 0, 0), ColorOption.add(Fe)), (ColorOption = tempD.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedS ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, -Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), Fe && ((tempQ2 = Fe.clone()).visible = !0, tempQ2.position.set(0, 0, 0), ColorOption.add(tempQ2)), 0 < ma.mezzanineBays) {
                var Ge = pa;
                Ge.sort(function(applyToControllers, setElementId) {
                    return applyToControllers - setElementId
                });
                for (Re = 1; Re <= ma.mezzanineBays; Re++)(ColorOption = tempD.getObjectByName("columnEnd").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, 0, Ge[Re]), ColorOption.scale.y = ma.mezzanineHeight - .5, isRendererReady.add(ColorOption)
            }
        }
    }
    if ("Hybrid" == ma.frameType) {
        (ua = Ea).visible = !0;
        var S, O = Ma,
            colorOptions = 0,
            renderer = ("Asymmetrical" === ma.roofType && (colorOptions = ma.asymmetrical), .3),
            gui = .66,
            shouldAutoRotate = ma.width / -2 + renderer - colorOptions,
            tempJ = ma.width / -2 + renderer + colorOptions,
            tempEE = ma.wallHeightL() - .5,
            tempTE2 = ma.wallHeightR() - .5,
            tempAE = (c = 2, (Math.PI - i) / 2),
            tempOE = (Math.PI - dimensionsArray) / 2,
            tempIE = c / Math.sin(tempAE),
            tempNE = c / Math.sin(tempOE),
            tempRE = Math.sqrt(Math.pow(tempIE, 2) - Math.pow(c, 2)),
            se = Math.sqrt(Math.pow(tempNE, 2) - Math.pow(c, 2)),
            le = Math.sqrt(Math.pow(tempEE - tempRE, 2) + Math.pow(c - gui, 2)),
            he = Math.sqrt(Math.pow(tempTE2 - se, 2) + Math.pow(c - gui, 2)),
            ce = (Math.atan(tempRE / ie), Math.atan(se / tempNE), Math.acos((tempEE - tempRE) / le), Math.acos((te - se) / he), Math.abs(shouldAutoRotate) / Math.sin(i)),
            currentColorHex = Math.abs(tempJ) / Math.sin(dimensionsArray),
            tempPE = (Math.abs(shouldAutoRotate), Math.sin(i), Math.abs(tempJ), Math.sin(dimensionsArray), Math.abs(c) / Math.sin(i)),
            tempME = Math.abs(c) / Math.sin(dimensionsArray),
            He = ma.roofHeightAtX(0) - ma.height;
        Math.max(tempPE, tempME);
        if ((d = O.getObjectByName("columnSideL")).position.isSceneLoaded = ma.width / -2 + renderer + 2 / 12 / 2, d.morphTargetInfluences[d.morphTargetDictionary.height] = ee - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(i - Math.PI / 2), (d = O.getObjectByName("columnSideR")).position.isSceneLoaded = ma.width / 2 - renderer - 2 / 12 / 2, d.morphTargetInfluences[d.morphTargetDictionary.height] = te - 1.1, d.morphTargetInfluences[d.morphTargetDictionary.slantTop] = -2 * Math.tan(n - Math.PI / 2), void 0 !== O.getObjectByName("footingL") && (S = O.getObjectByName("footingL")).userData.type !== ma.postFooting && (S.parent.remove(S), S.geometry.dispose(), S = void 0), void 0 !== mainScene.getObjectByName("downspout") && void 0 !== O.getObjectByName("columnSideL") && void 0 !== O.getObjectByName("columnSideR") && void 0 === O.getObjectByName("columnSideL").getObjectByName("downspout-clone") && void 0 === O.getObjectByName("columnSideR").getObjectByName("downspout-clone") && (controls = mainScene.getObjectByName("downspout"), (ColorOption = controls.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(180), ColorOption.position.isSceneLoaded = -renderer, O.getObjectByName("columnSideL").add(ColorOption), O.getObjectByName("columnSideR").add(ColorOption.clone())), ma.gutters && (tempGE = O.getObjectByName("columnSideL").getObjectByName("downspout-clone"), tempT = O.getObjectByName("columnSideR").getObjectByName("downspout-clone"), tempGE.morphTargetInfluences[tempGE.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveL / Math.hypot(12, ma.roofPitch) * ma.roofPitch, T.morphTargetInfluences[T.morphTargetDictionary.height] = ma.height - 1.2 - ma.eaveR / Math.hypot(12, ma.roofPitch) * ma.roofPitch, tempGE.morphTargetInfluences[tempGE.morphTargetDictionary.downspoutOverhang] = ma.eaveL / Math.hypot(12, ma.roofPitch) * 12, T.morphTargetInfluences[T.morphTargetDictionary.downspoutOverhang] = ma.eaveR / Math.hypot(12, ma.roofPitch) * 12, 0 < ma.hideWalls ? (tempGE.visible = !1, tempT.visible = !1) : ("Single Slope" != ma.roofType || "Single Slope" == ma.roofType && 0 < ma.roofPitch ? tempGE.visible = !0 : tempGE.visible = !1, "Single Slope" != ma.roofType || "Single Slope" == ma.roofType && ma.roofPitch < 0 ? tempT.visible = !0 : tempT.visible = !1)), void 0 === O.getObjectByName("footingL")) {
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
                    S = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                    break;
                default:
                    S = !1
            }
            S && (S.rotation.y = THREE.Math.degToRad(90), S.visible = !0, S.name = "footingL", S.userData.type = ma.postFooting, O.add(S))
        } else S = O.getObjectByName("footingL");
        S && (S.position.isSceneLoaded = ma.width / -2 + renderer + 2 / 12 / 2, void 0 !== O.getObjectByName("footingR") && (mt = O.getObjectByName("footingR")).userData.type !== ma.postFooting && (mt.parent.remove(mt), mt.geometry.dispose(), mt = void 0), void 0 === O.getObjectByName("footingR") ? ((mt = S.clone()).rotation.y = THREE.Math.degToRad(90), mt.name = "footingR", mt.userData.type = ma.postFooting, O.add(mt)) : mt = O.getObjectByName("footingR"), mt.position.isSceneLoaded = ma.width / 2 - renderer - 2 / 12 / 2);
        var _e = O.getObjectByName("beamRoofL"),
            $applyToControllers = 1.5,
            tempP = .375,
            Ae = Math.abs(shouldAutoRotate) - tempP,
            qe = Math.abs(tempJ) - tempP,
            Ve = "Single Slope" === ma.roofType ? (tempG = 12 / ((ma.width - renderer - renderer) / tempQ), 12 / (-(ma.width - renderer - renderer) / tempQ)) : "Asymmetrical" === ma.roofType ? (tempG = 12 / (_ / tempQ), 12 / ($ / tempQ)) : (tempG = 12 / ((ma.width / 2 - renderer + colorOptions) / tempQ), 12 / ((ma.width / 2 - renderer - colorOptions) / tempQ)),
            Qe = $applyToControllers * tempG / 12,
            Xe = $applyToControllers * Ve / 12;
        if (_e.position.isSceneLoaded = ma.width / -2 + renderer + tempP, _e.position.y = ma.height - .4, _e.morphTargetInfluences[_e.morphTargetDictionary.length] = Ae - 1, _e.morphTargetInfluences[_e.morphTargetDictionary.shear] = Qe, "Single Slope" !== ma.roofType) {
            qe = currentColorHex - tempP, (beamR = O.getObjectByName("beamRoofR")).visible = !0, beamR.position.isSceneLoaded = ma.width / 2 - renderer - p, beamR.position.y = ma.height - .4, beamR.morphTargetInfluences[beamR.morphTargetDictionary.length] = qe - 1, beamR.morphTargetInfluences[beamR.morphTargetDictionary.shear] = Xe, beamR.rotation.z = ca.rotation.z, beamR.rotation.y = THREE.Math.degToRad(0), Ae = ce - p, (_e = O.getObjectByName("beamRoofL")).visible = !0, _e.position.x = ma.width / -2 + renderer + tempP, _e.position.y = ma.height - .4, _e.morphTargetInfluences[_e.morphTargetDictionary.length] = Ae - 1, _e.morphTargetInfluences[_e.morphTargetDictionary.shear] = Qe, _e.rotation.tempz = -tempDA.rotation.tempz, crossMemberL = O.getObjectByName("crossMemberL"), crossMemberR = O.getObjectByName("crossMemberR");
            let applyToControllers = (ma.peakHeight() - Math.max(tempPE, tempME) + ma.height) / 2;
            applyToControllers > ma.peakHeight() - Math.max(tempPE, tempME) - 1.5 && (applyToControllers = (2 * (ma.peakHeight() - Math.max(tempPE, tempME)) + ma.height - Math.max(tempPE, tempME)) / 3), crossMemberL.position.y = applyToControllers, crossMemberR.position.y = applyToControllers, crossMemberL.rotation.tempz = THREE.Math.degToRad(-90), crossMemberR.rotation.tempz = THREE.Math.degToRad(90);
            tempU2 = 12 * (ma.peakHeight() - Math.max(tempPE, tempME) - applyToControllers) / ma.roofPitch, camera = 12 * (ma.peakHeight() - Math.max(pe, me) - applyToControllers) / ma.roofPitch;
            crossMemberL.morphTargetInfluences[crossMemberL.morphTargetDictionary.length] = tempU2 - 1 - ma.roofPitch / 20, crossMemberR.morphTargetInfluences[crossMemberR.morphTargetDictionary.length] = camera - 1 - ma.roofPitch / 20
        } else 0 <= ma.roofPitch ? (_e = O.getObjectByName("beamRoofL"), Ae = Math.abs(currentColorHex) + Math.abs(ce) - 2 * tempP, _e.visible = !0, _e.position.isSceneLoaded = ma.width / -2 + renderer + p, _e.position.y = ma.height - .4, _e.morphTargetInfluences[_e.morphTargetDictionary.length] = Ae - 1, _e.morphTargetInfluences[_e.morphTargetDictionary.shear] = Qe, _e.rotation.z = -da.rotation.z, (beamR = O.getObjectByName("beamRoofR")).visible = !1) : (beamR = O.getObjectByName("beamRoofR"), qe = Math.abs(currentColorHex) + Math.abs(ce) - 2 * p, beamR.visible = !0, beamR.position.x = ma.width / 2 - renderer - tempP, beamR.position.y = ma.height - .4, beamR.morphTargetInfluences[beamR.morphTargetDictionary.length] = qe - 1, beamR.morphTargetInfluences[beamR.morphTargetDictionary.shear] = -Xe, beamR.rotation.tempz = tempCA.rotation.tempz, beamR.rotation.y = THREE.Math.degToRad(0), (_e = O.getObjectByName("beamRoofL")).visible = !1), crossMemberL = O.getObjectByName("crossMemberL"), crossMemberR = O.getObjectByName("crossMemberR"), crossMemberL.visible = !1, crossMemberR.visible = !1;
        var Ue = O.getObjectByName("webbing"),
            scene = 2 * $applyToControllers / Math.sqrt(3);
        vo(_e), vo(beamR);
        for (tempV2 = 0; tempV2 < Ae / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < Ae - Qe && (W.visible = !0), _e.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, _e.add(W));
        for (var tempV2 = 0; tempV2 < qe / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < qe - Xe && (W.visible = !0), beamR.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, beamR.add(W));
        (isRendererReady = new THREE.Group).name = "HybridFrameClones", ua.add(isRendererReady), pa = ti(ma.maxTrussSpacing, renderer, O, isRendererReady), void 0 !== mainScene.getObjectByName("LeanTo1PostClones") && mainScene.getObjectByName("leanTo1").remove(mainScene.getObjectByName("LeanTo1PostClones")), void 0 !== mainScene.getObjectByName("LeanTo2PostClones") && mainScene.getObjectByName("leanTo2").remove(mainScene.getObjectByName("LeanTo2PostClones")), void 0 !== mainScene.getObjectByName("LeanTo3PostClones") && mainScene.getObjectByName("leanTo3").remove(mainScene.getObjectByName("LeanTo3PostClones")), void 0 !== mainScene.getObjectByName("LeanTo4PostClones") && mainScene.getObjectByName("leanTo4").remove(mainScene.getObjectByName("LeanTo4PostClones"));
        let applyToControllers, setElementId, setElementClass;
        if (void 0 !== O.getObjectByName("columnSide") && (applyToControllers = O.getObjectByName("columnSide")), void 0 !== O.getObjectByName("beamRoof") && (setElementId = O.getObjectByName("beamRoof")), setElementClass = !1, ma.hasOwnProperty("postFooting")) switch (ma.postFooting) {
            case "Post in Ground":
                setElementClass = O.getObjectByName("footing-Burried").clone();
                break;
            case "Bracket on Concrete":
            case "Bracket":
                setElementClass = O.getObjectByName("footing").clone();
                break;
            case "Perma-Column":
                setElementClass = O.getObjectByName("footing-PermaColumnConcretePost").clone();
                break;
            case "Morton Foundation System":
                setElementClass = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                break;
            default:
                setElementClass = !1
        }
        if (0 < ma.settings.postsOnGableRoofOverhangsOver) {
            if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = O.clone()).name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / 2 + ma.gableFront - renderer - .5, isRendererReady.add(clonedFrame), ma.gableFront > ma.maxPostSpacing)
                    for (var Ye = Math.ceil(ma.gableFront / ma.maxPostSpacing), Ze = ma.gableFront / Ye, tempV2 = 1; tempV2 < Ye; tempV2++)(clonedFrame = O.clone()).name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / 2 + Ze * tempV2, isRendererReady.add(clonedFrame);
                if (ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureFront") ? (currentCamera = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = currentCamera.deepClone()).name = "overhangEnclosureFront", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureFront"), applyToControllers.position.tempz = ma.depth / 2, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableFront - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureFront") && (tempLA.getObjectByName("overhangEnclosureFront").visible = !1);
            if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
                if ((clonedFrame = O.clone()).name = "OverhangBackFrame", clonedFrame.position.tempz = ma.depth / -2 - ma.gableBack + renderer + .5, isRendererReady.add(clonedFrame), ma.gableBack > ma.maxPostSpacing)
                    for (var Ke = Math.ceil(ma.gableBack / ma.maxPostSpacing), Je = ma.gableBack / Ke, tempV2 = 1; tempV2 < Ke; tempV2++)(clonedFrame = O.clone()).name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / -2 - Je * tempV2, isRendererReady.add(clonedFrame);
                if (ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureBack") ? (y = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = y.deepClone()).name = "overhangEnclosureBack", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureBack"), applyToControllers.position.tempz = ma.depth / -2, applyToControllers.rotation.y = Math.PI, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableBack - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureBack") && (tempLA.getObjectByName("overhangEnclosureBack").visible = !1)
        }
        var et = mainScene.getObjectByName("masterSecondaryFramingPiece");
        if (ma.leanTo1) {
            void 0 === mainScene.getObjectByName("LeanTo1PostClones") && ((viewportElement = new THREE.Group).name = "LeanTo1PostClones", viewportElement.rotation.y = 0, mainScene.getObjectByName("leanTo1").add(viewportElement), (perspectiveCamera = new THREE.Group).name = "LeanTo1PostMaster", viewportElement.add(perspectiveCamera)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), perspectiveCamera.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo1Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - .5 - 1, perspectiveCamera.add(ColorOption);
            tempG2 = ColorOption.getObjectByName("downspout-clone");
            tempG2 && (tempG2.position.isSceneLoaded = -renderer - .08, tempG2.rotation.y = Math.PI, tempG2.morphTargetInfluences[tempG2.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1);
            (isSceneLoaded = setElementId.clone()).name = "LeanToRoofBeam", isSceneLoaded.visible = !0, isSceneLoaded.castShadow = !0, isSceneLoaded.receiveShadow = !0, isSceneLoaded.position.set(0, ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - renderer, ma.leanTo1Depth - renderer - .36), x.morphTargetInfluences[x.morphTargetDictionary.length] = ma.leanTo1Depth / Math.cos((ma.leanTo1Pitch - .1) / 12) - .6 - 1, x.morphTargetInfluences[x.morphTargetDictionary.shear] = $applyToControllers * ma.leanTo1Pitch / 12, isSceneLoaded.rotation.y = Math.PI / 2, x.rotation.z = Math.atan(ma.leanTo1Pitch / 12), perspectiveCamera.add(isSceneLoaded);
            for (var tt = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.length] + 1, at = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.shear], tempV2 = 0; tempV2 < tt / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < tt - at && (W.visible = !0), isSceneLoaded.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, isSceneLoaded.add(W));
            void 0 !== mainScene.getObjectByName("downspout") && void 0 !== perspectiveCamera.getObjectByName("LeanToPost") && void 0 === perspectiveCamera.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (d = mainScene.getObjectByName("downspout"), (ColorOption = d.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, perspectiveCamera.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((controls = perspectiveCamera.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / controls.parent.scale.y, controls.morphTargetInfluences[controls.morphTargetDictionary.height] = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12 - 1);
            tempB = ma.leanTo1Length / 2 - renderer - .08, f = ma.leanTo1Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            perspectiveCamera.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo1PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), viewportElement.add(r);
            if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo1Walls)
                for (tempV2 = 0, tempTE = ma.leanTo1Height - ma.leanTo1Depth * ma.leanTo1Pitch / 12; v < ma.leanTo1Height / ma.girtSpacing;) tempV2 < tempTE / ma.girtSpacing ? ((ColorOption = et.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo1Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo1Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1,  viewportElement.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo1Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo1Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo1Length / -2 + renderer / 2, v * ma.girtSpacing + .05, ma.leanTo1Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo1Depth) : (tempk = (tempV2 * ma.girtSpacing - ma.leanTo1Height) / (ma.leanTo1Pitch / 12) + 1, (ColorOption = et.clone()).position.set(ma.leanTo1Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo1Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, viewportElement.add(ColorOption), tempV2++
        }
        if (ma.leanTo3) {
            void 0 === mainScene.getObjectByName("LeanTo3PostClones") && ((topControls = new THREE.Group).name = "LeanTo3PostClones", topControls.rotation.y = Math.PI, mainScene.getObjectByName("leanTo3").add(topControls), (tempN = new THREE.Group).name = "LeanTo3PostMaster", topControls.add(tempN)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.set(0, 0, 0), ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), tempN.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo3Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - .5 - 1, tempN.add(ColorOption);
            tempGE = ColorOption.getObjectByName("downspout-clone");
            tempGE && (tempGE.position.isSceneLoaded = -renderer - .08, tempGE.rotation.y = Math.PI, tempGE.morphTargetInfluences[tempGE.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1);
            (isSceneLoaded = setElementId.clone()).name = "LeanToRoofBeam", isSceneLoaded.visible = !0, isSceneLoaded.castShadow = !0, isSceneLoaded.receiveShadow = !0, isSceneLoaded.position.set(0, ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - renderer, ma.leanTo3Depth - renderer - .36), x.morphTargetInfluences[x.morphTargetDictionary.length] = ma.leanTo3Depth / Math.cos((ma.leanTo3Pitch - .1) / 12) - .6 - 1, x.morphTargetInfluences[x.morphTargetDictionary.shear] = $applyToControllers * ma.leanTo3Pitch / 12, isSceneLoaded.rotation.y = Math.PI / 2, x.rotation.z = Math.atan(ma.leanTo3Pitch / 12), tempN.add(isSceneLoaded);
            for (var ot = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.length] + 1, it = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.shear], tempV2 = 0; tempV2 < ot / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < ot - it && (W.visible = !0), isSceneLoaded.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, isSceneLoaded.add(W));
            void 0 !== mainScene.getObjectByName("downspout") && void 0 !== tempN.getObjectByName("LeanToPost") && void 0 === tempN.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (tempT = mainScene.getObjectByName("downspout"), (ColorOption = tempT.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, tempN.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((mt = tempN.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / mt.parent.scale.y, mt.morphTargetInfluences[mt.morphTargetDictionary.height] = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12 - 1);
            tempB = ma.leanTo3Length / 2 - renderer - .08, f = ma.leanTo3Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            tempN.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo3PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), topControls.add(r);
            if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls)
                for (tempV2 = 0, tempYE = ma.leanTo3Height - ma.leanTo3Depth * ma.leanTo3Pitch / 12; v < ma.leanTo3Height / ma.girtSpacing;) tempV2 < tempYE / ma.girtSpacing ? ((ColorOption = et.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo3Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo3Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, L.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo3Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo3Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo3Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo3Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo3Depth) : (k = (v * ma.girtSpacing - ma.leanTo3Height) / (ma.leanTo3Pitch / 12) + 1, (ColorOption = et.clone()).position.set(ma.leanTo3Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo3Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, topControls.add(ColorOption), tempV2++
        }
        if (ma.leanTo2) {
            void 0 === mainScene.getObjectByName("LeanTo2PostClones") && ((tempj = new THREE.Group).name = "LeanTo2PostClones", tempj.rotation.y = Math.PI / -2, sa.getObjectByName("leanTo2").add(j), (_t = new THREE.Group).name = "LeanTo2PostMaster", j.add(_t)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), _t.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo2Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - .5 - 1, _t.add(ColorOption);
            tempU2 = ColorOption.getObjectByName("downspout-clone");
            tempU2 && (tempU2.position.isSceneLoaded = -renderer - .08, tempU2.rotation.y = Math.PI, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1);
            (isSceneLoaded = setElementId.clone()).name = "LeanToRoofBeam", isSceneLoaded.visible = !0, isSceneLoaded.castShadow = !0, isSceneLoaded.receiveShadow = !0, isSceneLoaded.position.set(0, ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - renderer, ma.leanTo2Depth - renderer - .36), x.morphTargetInfluences[x.morphTargetDictionary.length] = ma.leanTo2Depth / Math.cos((ma.leanTo2Pitch - .1) / 12) - .6 - 1, x.morphTargetInfluences[x.morphTargetDictionary.shear] = $applyToControllers * ma.leanTo2Pitch / 12, isSceneLoaded.rotation.y = Math.PI / 2, x.rotation.z = Math.atan(ma.leanTo2Pitch / 12), _t.add(isSceneLoaded);
            for (var nt = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.length] + 1, rt = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.shear], tempV2 = 0; tempV2 < nt / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < nt - rt && (W.visible = !0), isSceneLoaded.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, isSceneLoaded.add(W));
            void 0 !== mainScene.getObjectByName("downspout") && void 0 !== _t.getObjectByName("LeanToPost") && void 0 === _t.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (camera = mainScene.getObjectByName("downspout"), (ColorOption = camera.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, _t.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((currentCamera = _t.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / P.parent.scale.y, P.morphTargetInfluences[P.morphTargetDictionary.height] = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12 - 1);
            tempB = ma.leanTo2Length / 2 - renderer - .08, f = ma.leanTo2Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            _t.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo2PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempj.add(r);
            if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls)
                for (tempV2 = 0, tempBE = ma.leanTo2Height - ma.leanTo2Depth * ma.leanTo2Pitch / 12; v < ma.leanTo2Height / ma.girtSpacing;) tempV2 < tempBE / ma.girtSpacing ? ((ColorOption = et.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo2Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo2Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, j.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo2Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo2Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo2Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo2Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo2Depth) : (k = (v * ma.girtSpacing - ma.leanTo2Height) / (ma.leanTo2Pitch / 12) + 1, (ColorOption = et.clone()).position.set(ma.leanTo2Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo2Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempj.add(ColorOption), tempV2++
        }
        if (ma.leanTo4) {
            void 0 === mainScene.getObjectByName("LeanTo4PostClones") && ((tempz = new THREE.Group).name = "LeanTo4PostClones", tempz.rotation.y = Math.PI / 2, sa.getObjectByName("leanTo4").add(z), (Ut = new THREE.Group).name = "LeanTo4PostMaster", z.add(Ut)), setElementClass && ((ColorOption = setElementClass.clone()).name = "LeanToPostFooting", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), Ut.add(ColorOption)), (ColorOption = applyToControllers.clone()).name = "LeanToPost", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.position.set(0, 0, ma.leanTo4Depth - renderer - .08), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - .5 - 1, Ut.add(ColorOption);
            y = ColorOption.getObjectByName("downspout-clone");
            y && (y.position.isSceneLoaded = -renderer - .08, y.rotation.y = Math.PI, y.morphTargetInfluences[y.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1);
            (isSceneLoaded = setElementId.clone()).name = "LeanToRoofBeam", isSceneLoaded.visible = !0, isSceneLoaded.castShadow = !0, isSceneLoaded.receiveShadow = !0, isSceneLoaded.position.set(0, ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - renderer, ma.leanTo4Depth - renderer - .36), x.morphTargetInfluences[x.morphTargetDictionary.length] = ma.leanTo4Depth / Math.cos((ma.leanTo4Pitch - .1) / 12) - .6 - 1, x.morphTargetInfluences[x.morphTargetDictionary.shear] = $applyToControllers * ma.leanTo4Pitch / 12, isSceneLoaded.rotation.y = Math.PI / 2, x.rotation.z = Math.atan(ma.leanTo4Pitch / 12), Ut.add(isSceneLoaded);
            for (var isSceneLoaded, st = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.length] + 1, lt = isSceneLoaded.morphTargetInfluences[isSceneLoaded.morphTargetDictionary.shear], tempV2 = 0; tempV2 < st / scene; v++)(W = Ue.clone()).position.x = v * scene, W.rotation.z = THREE.Math.degToRad(30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, v * scene + scene / 2 < st - lt && (W.visible = !0), isSceneLoaded.add(W), 0 < tempV2 && ((W = Ue.clone()).position.isSceneLoaded = tempV2 * scene, W.rotation.tempz = THREE.Math.degToRad(-30), W.morphTargetInfluences[W.morphTargetDictionary.length] = scene - 1, W.visible = !0, isSceneLoaded.add(W));
            void 0 !== mainScene.getObjectByName("downspout") && void 0 !== Ut.getObjectByName("LeanToPost") && void 0 === Ut.getObjectByName("LeanToPost").getObjectByName("downspout-clone") && (tempG2 = mainScene.getObjectByName("downspout"), (ColorOption = tempG2.clone()).name = "downspout-clone", ColorOption.visible = !0, ColorOption.castShadow = !0, ColorOption.receiveShadow = !0, ColorOption.rotation.y = THREE.Math.degToRad(-90), ColorOption.position.tempz = renderer, Ut.getObjectByName("LeanToPost").add(ColorOption)), ma.gutters && 0 == ma.hideWalls && ((d = Ut.getObjectByName("LeanToPost").getObjectByName("downspout-clone")).scale.y = 1 / d.parent.scale.y, d.morphTargetInfluences[d.morphTargetDictionary.height] = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12 - 1);
            tempB = ma.leanTo4Length / 2 - renderer - .08, f = ma.leanTo4Length / -2 + renderer + .08, tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            Ut.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo4PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("LeanToPost").getObjectByName("downspout-clone").visible = !1), tempz.add(r);
            if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls)
                for (tempV2 = 0, tempFE = ma.leanTo4Height - ma.leanTo4Depth * ma.leanTo4Pitch / 12; v < ma.leanTo4Height / ma.girtSpacing;) tempV2 < tempFE / ma.girtSpacing ? ((ColorOption = et.clone()).position.set(0, v * ma.girtSpacing + .05, ma.leanTo4Depth - renderer / 2), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.z = ma.leanTo4Length, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, z.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo4Length / 2 - renderer / 2, v * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = ma.leanTo4Depth, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo4Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, ma.leanTo4Depth / 2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.z = ma.leanTo4Depth) : (k = (v * ma.girtSpacing - ma.leanTo4Height) / (ma.leanTo4Pitch / 12) + 1, (ColorOption = et.clone()).position.set(ma.leanTo4Length / 2 - renderer / 2, v * ma.girtSpacing + .05, k / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), (ColorOption = et.clone()).position.set(ma.leanTo4Length / -2 + renderer / 2, tempV2 * ma.girtSpacing + .05, tempk / -2 - .2), ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, tempz.add(ColorOption), tempV2++
        }
        var ht = ma.girtSpacing,
            ct = ma.purlinSpacing;
        (tempI = new THREE.Group).name = "GirtParent", isRendererReady.add(tempI), 2 < ma.hideWalls ? tempI.visible = !1 : tempI.visible = !0, (aa = new THREE.Group).name = "PurlinParentL", aa.position.set(ma.width / -2, ma.wallHeightL(), 0), aa.rotation.z = Math.PI / 2 - i, ma.roofPitch < 0 && (aa.rotation.tempz = Math.PI / -2 - i), tempI.add(aa);
        (na = new THREE.Group).name = "PurlinParentR", na.position.set(ma.width / 2, ma.wallHeightR(), 0), na.rotation.z = n - Math.PI / -2, ma.roofPitch < 0 && (na.rotation.tempz = dimensionsArray - Math.PI / 2), tempI.add(na), ma.depth;
        for (orthographicCamera = mainScene.getObjectByName("masterSecondaryFramingPiece").clone(), tempV2 = 0; tempV2 < (tempX - renderer) / ct;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = (ma.roofPitch, ma.purlinThickness / 2 + .1))) : (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? .1 : .2)), "Single Slope" === ma.roofType ? ColorOption.position.set(v * ct, -renderer / 2 - applyToControllers, 0) : ColorOption.position.set(tempV2 * ct, -renderer / 2 - .25 - applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, aa.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < (tempU - renderer) / ct;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? ma.purlinThickness / 2 - .05 : ma.purlinThickness / 2 - .2)) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? -.15 : -.25)), "Single Slope" === ma.roofType ? ColorOption.position.set(tempV2 * -ct, renderer / 2 - .45 - applyToControllers, 0) : ColorOption.position.set(v * ct, renderer / 2 + .25 + applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, na.add(ColorOption), tempV2++
        }
        ColorOption = orthographicCamera.clone();
        let setElementHidden = 0;
        ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, setElementHidden = ma.girtThickness / 2), ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - setElementHidden, ma.wallHeightR() - .65, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption), ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, setElementHidden = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + setElementHidden, ma.wallHeightL() - .65, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption), ma.settings.showPostFrameBottomPlate && ((ColorOption = orthographicCamera.clone()).rotation.tempz = Math.PI / 2, bottomPlateFlushOffset = ma.girtThickness / 2, ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + bottomPlateFlushOffset + 1 / 12, .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.z = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, I.add(ColorOption), (ColorOption = E.clone()).rotation.z = Math.PI / 2, ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - bottomPlateFlushOffset - 1 / 12, .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption));
        for (tempV2 = 0; tempV2 < A / ht;) {
            if (tempV2 < ma.wallHeightL() / ht && ma.enclosedE) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ht + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.wallHeightR() / ht && ma.enclosedW) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2), ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ht + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - renderer, ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.rotation.y = 0, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            let applyToControllers = 0;
            ma.flushGirts && (applyToControllers = ma.girtThickness / 2), v < ma.height / ht && (ma.enclosedS && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.position.set(0, tempV2 * ht + .05, ma.depth / -2 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN) && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2), ColorOption.position.set(0, tempV2 * ht + .05, ma.depth / 2 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
        }
        if (!ma.flushGirts)
            for (; tempV2 < (tempQ + ma.height - .1) / ht;) {
                tempME2 = tempV2 * ht - ma.height, tempDE = ("Single Slope" !== ma.roofType && (tempV = "Asymmetrical" === ma.roofType ? tempME2 / q * ma.asymmetrical : (_ = ma.width / 2, $ = ma.width / 2, n = i = F, 0)), _ - (Me + .5) / Math.tan(Math.PI / 2 - i)), tempPE2 = $ - (tempME2 + .5) / Math.tan(Math.PI / 2 - dimensionsArray);
                ma.enclosedS && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * ht + .05, ma.depth / -2 + renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * ht + .05, ma.depth / 2 - renderer / 1.9), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
            }
        ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
        for (We = Math.ceil(ma.width / ma.maxPostSpacing) - 1, Se = ma.depth / 2 - (renderer + .125), Oe = ma.width / ((We = We < 0 ? 0 : We) + 1), orbitControls = 0, Be = 0, tempV2 = 1; tempV2 <= We; tempV2++) {
            switch (orbitControls = ma.width / -2 + Oe * tempV2, Be = ma.height - 1 - 1, Be = orbitControls >= ma.asymmetrical ? ma.roofHeightAtX(orbitControls) - 1 - Xe - $applyToControllers - .25 : ma.roofHeightAtX(orbitControls) - 1 - Qe - $applyToControllers - .25, (ColorOption = O.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedN ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), ma.postFooting) {
                case "Post in Ground":
                    Fe = O.getObjectByName("footing-Burried").clone();
                    break;
                case "Bracket on Concrete":
                case "Bracket":
                    Fe = O.getObjectByName("footing").clone();
                    break;
                case "Perma-Column":
                    Fe = O.getObjectByName("footing-PermaColumnConcretePost").clone();
                    break;
                case "Morton Foundation System":
                    Fe = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                    break;
                default:
                    Fe = !1
            }
            if (Fe && (Fe.visible = ma.enclosedN, Fe.position.set(0, 0, 0), ColorOption.add(Fe)), (ColorOption = O.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedS ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, -Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), Fe && ((tempQ2 = Fe.clone()).visible = ma.enclosedS, tempQ2.position.set(0, 0, 0), ColorOption.add(tempQ2)), 0 < ma.mezzanineBays) {
                var dt = pa;
                dt.sort(function(applyToControllers, setElementId) {
                    return applyToControllers - setElementId
                });
                for (Re = 1; Re <= ma.mezzanineBays; Re++)(ColorOption = O.getObjectByName("columnEnd").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, 0, dt[Re]), ColorOption.scale.y = ma.mezzanineHeight - .5, isRendererReady.add(ColorOption)
            }
        }
    }
    if ("Open Web Truss" == ma.frameType) {
        (ua = Da).visible = !0;
        var pt = Pa;
        pt.visible = !1;
        (isRendererReady = new THREE.Group).name = "OpenWebFrameClones", ua.add(isRendererReady);
        var isRendererReady, controls = new THREE.Group,
            colorOptions = (controls.name = "primaryFrame", isRendererReady.add(controls), void 0 === pt.getObjectByName("WebbingMasterL") && ((WebbingMasterL = new THREE.Group).name = "WebbingMasterL", WebbingMasterL.position.isSceneLoaded = gt, pt.add(WebbingMasterL)), 0),
            tempGE = ma.roofPitch,
            tempT = ma.roofPitch,
            shouldAutoRotate = ("Asymmetrical" === ma.roofType && (colorOptions = ma.asymmetrical, 0 < ma.asymmetrical ? tempT = yi(ma.roofPitch, ma.width, colorOptions) : tempGE = yi(ma.roofPitch, ma.width, colorOptions)), "Single Slope" == ma.roofType && (tempT = (0 <= ma.roofPitch || (tempGE = ma.roofPitch), -ma.roofPitch)), ma.width / 2 + colorOptions),
            tempJ = ma.width / 2 - colorOptions;
        let applyToControllers = !0;
        "Single Slope" == ma.roofType && (applyToControllers = !1);
        var mt = gi(shouldAutoRotate, ma.wallHeightL(), tempGE, ma.eaveL, applyToControllers),
            tempU2 = (mt.name = "primaryFrameL", mt.rotation.y = THREE.Math.degToRad(0), mt.position.isSceneLoaded = colorOptions, controls.add(mt), gi(tempJ, ma.wallHeightR(), tempT, ma.eaveR, applyToControllers));
        tempU2.name = "primaryFrameR", tempU2.rotation.y = THREE.Math.degToRad(180), tempU2.position.isSceneLoaded = colorOptions, controls.add(tempU2);
        let setElementId = (renderer = .2) + .15;
        var gui = .66,
            gt = ma.width / -2 + renderer + 2 / 12 / 2,
            ut = ma.width / 2 - renderer - 2 / 12 / 2,
            shouldAutoRotate = (ma.hasOwnProperty("frameConstruction") && "Residential Flush" == ma.frameConstruction && (setElementId = .175, gt = ma.width / -2 + .01, ut = ma.width / 2 - .01), -gt + colorOptions),
            tempJ = ut - colorOptions,
            tempEE = ma.wallHeightL() - .5,
            tempTE2 = ma.wallHeightR() - .5,
            c = 2,
            tempAE = (c = ma.width < 25 ? 1.23 : c, (Math.PI - i) / 2),
            tempOE = (Math.PI - dimensionsArray) / 2,
            tempIE = ("Single Slope" == ma.roofType && (0 <= ma.roofPitch ? tempOE += THREE.Math.degToRad(90) : tempAE += THREE.Math.degToRad(90)), c / Math.sin(tempAE)),
            tempNE = c / Math.sin(tempOE),
            tempRE = Math.sqrt(Math.pow(tempIE, 2) - Math.pow(c, 2)),
            se = Math.sqrt(Math.pow(tempNE, 2) - Math.pow(c, 2)),
            le = Math.sqrt(Math.pow(tempEE - tempRE, 2) + Math.pow(c - gui, 2)),
            he = Math.sqrt(Math.pow(tempTE2 - se, 2) + Math.pow(c - gui, 2)),
            ce = (Math.acos((tempEE - tempRE) / le), Math.acos((te - se) / he), shouldAutoRotate / Math.sin(i)),
            currentColorHex = tempJ / Math.sin(dimensionsArray),
            tempPE = (Math.sin(i), Math.sin(dimensionsArray), Math.abs(c) / Math.sin(i)),
            tempME = Math.abs(c) / Math.sin(dimensionsArray),
            He = Math.min(tempEE + Math.sqrt(Math.pow(ce, 2) - Math.pow(Math.abs(gt - colorOptions), 2)), tempTE2 + Math.sqrt(Math.pow(currentColorHex, 2) - Math.pow(Math.abs(ut - colorOptions), 2)));
        Math.max(tempPE, tempME);

        function Tt(applyToControllers, setElementId, setElementClass, setElementHidden) {
            return result = setElementId, result += applyToControllers / setElementHidden * (setElementClass - setElementId)
        }
        _e = pt.getObjectByName("beamRoofL"), $applyToControllers = 1.5, tempP = .375, Ae = shouldAutoRotate, qe = tempJ, Qe = (Ve = "Single Slope" === ma.roofType ? (tempG = 12 / ((ma.width - renderer - renderer) / tempQ), 12 / (-(ma.width - renderer - renderer) / tempQ)) : "Asymmetrical" === ma.roofType ? (tempG = 12 / (_ / tempQ), 12 / ($ / tempQ)) : (tempG = 12 / ((ma.width / 2 - renderer + colorOptions) / tempQ), 12 / ((ma.width / 2 - renderer - colorOptions) / tempQ)), $applyToControllers * tempG / 12), Xe = $applyToControllers * Ve / 12;
        if (pa = ti(ma.maxTrussSpacing, setElementId, controls, isRendererReady), !ma.hasOwnProperty("frameConstruction") || "Open Web Tapered" == ma.frameConstruction) {
            let applyToControllers = 2;
            for (var yt = applyToControllers = pa.length < 3 ? 1 : applyToControllers; yt < pa.length; yt += 4) {
                let applyToControllers = pt.getObjectByName("webbing").clone();
                var bt = tempEE - .5,
                    ft = Math.abs(pa[yt] - pa[yt - 1]);
                applyToControllers.name = "WindRodClone", applyToControllers.visible = !0, applyToControllers.position.isSceneLoaded = gt + .06, applyToControllers.position.y = .5, applyToControllers.position.tempz = pa[yt], applyToControllers.rotation.isSceneLoaded = THREE.Math.degToRad(180) + Math.atan(ft / bt), applyToControllers.scale.set(2, Math.hypot(bt, ft), 2), R.add(applyToControllers), (applyToControllers = applyToControllers.clone()).position.z = pa[yt - 1], applyToControllers.rotation.x = THREE.Math.degToRad(180) + -Math.atan(ft / bt), isRendererReady.add(applyToControllers), bt = tempTE2 - .5, (applyToControllers = applyToControllers.clone()).position.isSceneLoaded = ut - .06, applyToControllers.position.tempz = pa[yt], applyToControllers.rotation.isSceneLoaded = THREE.Math.degToRad(180) + Math.atan(ft / bt), applyToControllers.scale.set(2, Math.hypot(bt, ft), 2), R.add(applyToControllers), (applyToControllers = applyToControllers.clone()).position.z = pa[yt - 1], applyToControllers.rotation.x = THREE.Math.degToRad(180) + -Math.atan(ft / bt), isRendererReady.add(applyToControllers)
            }
        }
        if (!ma.hasOwnProperty("frameConstruction") || "Open Web Tapered" == ma.frameConstruction)
            for (tempV2 = 0; tempV2 < pa.length; tempV2++) {
                if (tempV2 + 1 < pa.length) {
                    for (var wt = 6; wt < ma.wallHeightL(); wt += 6) {
                        var vt = pt.getObjectByName("webbing").clone(),
                            Et = Tt(wt, gui, c, tempEE);
                        vt.name = "ChordBracingClone", vt.visible = !0, vt.position.isSceneLoaded = gt + Et, vt.position.y = wt, vt.position.tempz = pa[tempV2], vt.rotation.y = THREE.Math.degToRad(90) + Math.asin(Et / 3), vt.rotation.tempz = THREE.Math.degToRad(90), vt.scale.set(1.5, 3, 1.5), isRendererReady.add(vt)
                    }
                    for (wt = 6; wt < ma.wallHeightR(); wt += 6) {
                        var Mt = pt.getObjectByName("webbing").clone(),
                            Dt = Tt(wt, gui, c, tempTE2);
                        Mt.name = "ChordBracingClone", Mt.visible = !0, Mt.position.isSceneLoaded = ut - Dt, Mt.position.y = wt, Mt.position.tempz = pa[tempV2], Mt.rotation.y = THREE.Math.degToRad(90) - Math.asin(Dt / 3), Mt.rotation.tempz = THREE.Math.degToRad(90), Mt.scale.set(1.5, 3, 1.5), isRendererReady.add(Mt)
                    }
                }
                if (0 < tempV2) {
                    for (wt = 6; wt < ma.wallHeightL(); wt += 6) {
                        var Pt = pt.getObjectByName("webbing").clone(),
                            Wt = Tt(wt, gui, c, tempEE);
                        Pt.name = "ChordBracingClone", Pt.visible = !0, Pt.position.isSceneLoaded = gt + Wt, Pt.position.y = wt, Pt.position.tempz = pa[tempV2], Pt.rotation.y = THREE.Math.degToRad(-90) - Math.asin(Wt / 3), Pt.rotation.tempz = THREE.Math.degToRad(90), Pt.scale.set(1.5, 3, 1.5), isRendererReady.add(Pt)
                    }
                    for (wt = 6; wt < ma.wallHeightR(); wt += 6) {
                        var St = pt.getObjectByName("webbing").clone(),
                            Ot = Tt(wt, gui, c, tempTE2);
                        St.name = "ChordBracingClone", St.visible = !0, St.position.isSceneLoaded = ut - Ot, St.position.y = wt, St.position.tempz = pa[tempV2], St.rotation.y = THREE.Math.degToRad(-90) + Math.asin(Ot / 3), St.rotation.tempz = THREE.Math.degToRad(90), St.scale.set(1.5, 3, 1.5), isRendererReady.add(St)
                    }
                }
            }
        if (0 < ma.settings.postsOnGableRoofOverhangsOver) {
            if (ma.gableFront > ma.settings.postsOnGableRoofOverhangsOver) {
                if (clonedFrame = new THREE.Group, (ColorOption = pt.getObjectByName("columnTubeSideL").clone()).visible = !0, ColorOption.scale.y = ma.roofHeightAtX(ma.width / -2), ColorOption.position.x = ma.width / -2, clonedFrame.add(ColorOption), (ColorOption = pt.getObjectByName("columnTubeSideR").clone()).visible = !0, ColorOption.scale.y = ma.roofHeightAtX(ma.width / 2), ColorOption.position.x = ma.width / 2, clonedFrame.add(ColorOption), clonedFrame.name = "OverhangFrontFrame", clonedFrame.position.tempz = ma.depth / 2 + ma.gableFront - renderer - .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureFront") ? (camera = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = camera.deepClone()).name = "overhangEnclosureFront", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureFront"), applyToControllers.position.tempz = ma.depth / 2, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableFront - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureFront") && (tempLA.getObjectByName("overhangEnclosureFront").visible = !1);
            if (ma.gableBack > ma.settings.postsOnGableRoofOverhangsOver) {
                if (clonedFrame = new THREE.Group, (ColorOption = pt.getObjectByName("columnTubeSideL").clone()).visible = !0, ColorOption.scale.y = ma.roofHeightAtX(ma.width / -2), ColorOption.position.x = ma.width / -2, clonedFrame.add(ColorOption), (ColorOption = pt.getObjectByName("columnTubeSideR").clone()).visible = !0, ColorOption.scale.y = ma.roofHeightAtX(ma.width / 2), ColorOption.position.x = ma.width / 2, clonedFrame.add(ColorOption), clonedFrame.name = "OverhangFrontFrame", clonedFrame.name = "OverhangBackFrame", clonedFrame.position.tempz = ma.depth / -2 - ma.gableBack + renderer + .5, isRendererReady.add(clonedFrame), ma.settings.enclosedGableRoofOverhangTriangles) {
                    let applyToControllers;
                    void 0 === tempLA.getObjectByName("overhangEnclosureBack") ? (currentCamera = tempLA.getObjectByName("coveredGableExtension"), (applyToControllers = currentCamera.deepClone()).name = "overhangEnclosureBack", applyToControllers.frustumCulled = !1, tempLA.add(applyToControllers)) : applyToControllers = tempLA.getObjectByName("overhangEnclosureBack"), applyToControllers.position.tempz = ma.depth / -2, applyToControllers.rotation.y = Math.PI, applyToControllers.visible = !0, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.width] = ma.width - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.depth] = ma.gableBack - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.height] = ma.height - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.unEnclosedHeight] = ma.height - .85, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.roofPeak] = ma.width / 2 * ma.roofPitch / 12, applyToControllers.material.forEach(function(applyToControllers) {
                        applyToControllers.name.startsWith("BuildingWainscot") && (applyToControllers.visible = !1), applyToControllers.name.startsWith("BuildingTrim-Base") && (applyToControllers.visible = !1)
                    })
                }
            } else void 0 !== tempLA.getObjectByName("overhangEnclosureBack") && (tempLA.getObjectByName("overhangEnclosureBack").visible = !1)
        }
        void 0 !== mainScene.getObjectByName("LeanTo1PostClones") && mainScene.getObjectByName("leanTo1").remove(mainScene.getObjectByName("LeanTo1PostClones")), void 0 !== mainScene.getObjectByName("LeanTo2PostClones") && mainScene.getObjectByName("leanTo2").remove(mainScene.getObjectByName("LeanTo2PostClones")), void 0 !== mainScene.getObjectByName("LeanTo3PostClones") && mainScene.getObjectByName("leanTo3").remove(mainScene.getObjectByName("LeanTo3PostClones")), void 0 !== mainScene.getObjectByName("LeanTo4PostClones") && mainScene.getObjectByName("leanTo4").remove(mainScene.getObjectByName("LeanTo4PostClones"));
        let setElementClass;
        if (void 0 !== pt.getObjectByName("columnSide") && pt.getObjectByName("columnSide"), void 0 !== pt.getObjectByName("beamRoof") && pt.getObjectByName("beamRoof"), setElementClass = !1, ma.hasOwnProperty("postFooting")) switch (ma.postFooting) {
            case "Post in Ground":
                setElementClass = pt.getObjectByName("footing-Burried").clone();
                break;
            case "Bracket on Concrete":
            case "Bracket":
                setElementClass = pt.getObjectByName("footing").clone();
                break;
            case "Perma-Column":
                setElementClass = pt.getObjectByName("footing-PermaColumnConcretePost").clone();
                break;
            case "Morton Foundation System":
                setElementClass = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                break;
            default:
                setElementClass = !1
        }
        var Bt = mainScene.getObjectByName("masterSecondaryFramingPiece");
        if (ma.leanTo1) {
            void 0 === mainScene.getObjectByName("LeanTo1PostClones") && ((viewportElement = new THREE.Group).name = "LeanTo1PostClones", viewportElement.rotation.y = 0, mainScene.getObjectByName("leanTo1").add(viewportElement), (perspectiveCamera = new THREE.Group).name = "LeanTo1PostMaster", viewportElement.add(perspectiveCamera));
            var viewportElement, perspectiveCamera, y = gi(ma.leanTo1Depth, ma.leanTo1Height - Ti(ma.leanTo1Depth, ma.leanTo1Pitch), ma.leanTo1Pitch, ma.gableFront),
                tempB = (y.rotation.y = THREE.Math.degToRad(90), perspectiveCamera.add(y), ma.leanTo1Length / 2 - renderer - .08),
                tempF2 = ma.leanTo1Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            perspectiveCamera.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo1PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("downspout-clone").visible = !1), viewportElement.add(r);
            if (ma.leanTo1Enclosed && "Fully Enclosed" == ma.leanTo4Walls) {
                var xt = ma.leanTo1Depth,
                    Rt = ma.leanTo1Length,
                    Ht = ma.leanTo1Height,
                    Ct = ma.leanTo1Pitch,
                    Lt = Ht - xt * Ct / 12,
                    Nt = viewportElement;
                let applyToControllers = 0,
                    setElementId = 0;
                ma.flushGirts && (setElementId = Math.PI / 2), ma.standingGirts && (setElementId = Math.PI / 2);
                for (tempV2 = 0; tempV2 < Ht / ma.girtSpacing;) v < Lt / ma.girtSpacing ? (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 - .1), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(0, tempV2 * ma.girtSpacing + .05, xt + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.z = setElementId, ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = Rt - .1, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Nt.add(ColorOption), ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(Rt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, xt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = xt, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Nt.add(ColorOption), (ColorOption = Bt.clone()).position.set(Rt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, xt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = xt) : (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), tempk = (tempV2 * ma.girtSpacing - Ht) / (Ct / 12) + 1, (ColorOption = Bt.clone()).position.set(Rt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Nt.add(ColorOption), (ColorOption = Bt.clone()).position.set(Rt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Nt.add(ColorOption), tempV2++
            }
        }
        if (ma.leanTo3) {
            void 0 === mainScene.getObjectByName("LeanTo3PostClones") && ((topControls = new THREE.Group).name = "LeanTo3PostClones", topControls.rotation.y = Math.PI, mainScene.getObjectByName("leanTo3").add(topControls), (tempN = new THREE.Group).name = "LeanTo3PostMaster", topControls.add(tempN));
            var topControls, tempN, tempG2 = gi(ma.leanTo3Depth, ma.leanTo3Height - Ti(ma.leanTo3Depth, ma.leanTo3Pitch), ma.leanTo3Pitch, ma.gableBack),
                tempB = (tempG2.rotation.y = THREE.Math.degToRad(90), tempN.add(tempG2), ma.leanTo3Length / 2 - renderer - .08),
                tempF2 = ma.leanTo3Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            tempN.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo3PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("downspout-clone").visible = !1), topControls.add(r);
            if (ma.leanTo3Enclosed && "Fully Enclosed" == ma.leanTo3Walls) {
                var jt = ma.leanTo3Depth,
                    zt = ma.leanTo3Length,
                    kt = ma.leanTo3Height,
                    It = ma.leanTo3Pitch,
                    Ft = kt - jt * It / 12,
                    Gt = topControls;
                let applyToControllers = 0,
                    setElementId = 0;
                ma.flushGirts && (setElementId = Math.PI / 2), ma.standingGirts && (setElementId = Math.PI / 2);
                for (tempV2 = 0; tempV2 < kt / ma.girtSpacing;) v < Ft / ma.girtSpacing ? (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 - .1), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(0, tempV2 * ma.girtSpacing + .05, jt + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.z = setElementId, ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = zt - .1, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Gt.add(ColorOption), ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(zt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, jt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = jt, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Gt.add(ColorOption), (ColorOption = Bt.clone()).position.set(zt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, jt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = jt) : (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), tempk = (tempV2 * ma.girtSpacing - kt) / (It / 12) + 1, (ColorOption = Bt.clone()).position.set(zt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Gt.add(ColorOption), (ColorOption = Bt.clone()).position.set(zt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Gt.add(ColorOption), tempV2++
            }
        }
        if (ma.leanTo2) {
            void 0 === mainScene.getObjectByName("LeanTo2PostClones") && ((tempj = new THREE.Group).name = "LeanTo2PostClones", tempj.rotation.y = Math.PI / -2, mainScene.getObjectByName("leanTo2").add(tempj), (_t = new THREE.Group).name = "LeanTo2PostMaster", tempj.add(_t));
            var tempj, _t, d = gi(ma.leanTo2Depth, ma.leanTo2Height - Ti(ma.leanTo2Depth, ma.leanTo2Pitch), ma.leanTo2Pitch, ma.eaveL),
                tempB = (d.rotation.y = THREE.Math.degToRad(90), _t.add(d), ma.leanTo2Length / 2 - renderer - .08),
                tempF2 = ma.leanTo2Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            _t.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo2PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("downspout-clone").visible = !1), tempj.add(r);
            if (ma.leanTo2Enclosed && "Fully Enclosed" == ma.leanTo2Walls) {
                var $setElementId = ma.leanTo2Depth,
                    At = ma.leanTo2Length,
                    qt = ma.leanTo2Height,
                    Vt = ma.leanTo2Pitch,
                    Qt = qt - $setElementId * Vt / 12,
                    Xt = tempj;
                let applyToControllers = 0,
                    setElementId = 0;
                ma.flushGirts && (setElementId = Math.PI / 2), ma.standingGirts && (setElementId = Math.PI / 2);
                for (tempV2 = 0; tempV2 < qt / ma.girtSpacing;) v < Qt / ma.girtSpacing ? (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 - .1), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(0, tempV2 * ma.girtSpacing + .05, $setElementId + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.z = setElementId, ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = At - .1, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Xt.add(ColorOption), ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(At / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, $setElementId / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = $setElementId, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Xt.add(ColorOption), (ColorOption = Bt.clone()).position.set(At / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, $setElementId / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = $setElementId) : (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), tempk = (tempV2 * ma.girtSpacing - qt) / (Vt / 12) + 1, (ColorOption = Bt.clone()).position.set(At / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Xt.add(ColorOption), (ColorOption = Bt.clone()).position.set(At / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, Xt.add(ColorOption), tempV2++
            }
        }
        if (ma.leanTo4) {
            void 0 === mainScene.getObjectByName("LeanTo4PostClones") && ((tempz = new THREE.Group).name = "LeanTo4PostClones", tempz.rotation.y = Math.PI / 2, mainScene.getObjectByName("leanTo4").add(tempz), (Ut = new THREE.Group).name = "LeanTo4PostMaster", tempz.add(Ut));
            var tempz, Ut, tempGE = gi(ma.leanTo4Depth, ma.leanTo4Height - Ti(ma.leanTo4Depth, ma.leanTo4Pitch), ma.leanTo4Pitch, ma.eaveR),
                tempB = (tempGE.rotation.y = THREE.Math.degToRad(90), Ut.add(tempGE), ma.leanTo4Length / 2 - renderer - .08),
                tempF2 = ma.leanTo4Length / -2 + renderer + .08,
                tempW = Math.ceil((tempB - tempF2) / ma.maxLeantoPostSpacing);
            Ut.position.isSceneLoaded = tempB;
            for (tempV2 = 1; tempV2 <= tempW; tempV2++)(r = mainScene.getObjectByName("LeanTo4PostMaster").clone()).name = "LeanToTrussClone", r.position.isSceneLoaded = tempB - tempV2 * (tempB - tempF2) / tempW, ma.gutters && ma.settings.downspountsOnEndsOnly && tempV2 < tempW && (r.getObjectByName("downspout-clone").visible = !1), tempz.add(r);
            if (ma.leanTo4Enclosed && "Fully Enclosed" == ma.leanTo4Walls) {
                var Yt = ma.leanTo4Depth,
                    Zt = ma.leanTo4Length,
                    Kt = ma.leanTo4Height,
                    Jt = ma.leanTo4Pitch,
                    ea = Kt - Yt * Jt / 12,
                    ta = tempz;
                let applyToControllers = 0,
                    setElementId = 0;
                ma.flushGirts && (setElementId = Math.PI / 2), ma.standingGirts && (setElementId = Math.PI / 2);
                for (var tempk, tempV2 = 0; tempV2 < Kt / ma.girtSpacing;) v < ea / ma.girtSpacing ? (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 - .1), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(0, tempV2 * ma.girtSpacing + .05, Yt + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.z = setElementId, ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.tempz = Zt - .1, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, ta.add(ColorOption), ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), (ColorOption = Bt.clone()).position.set(Zt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, Yt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = Yt, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, ta.add(ColorOption), (ColorOption = Bt.clone()).position.set(Zt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, Yt / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = Yt) : (ma.flushGirts && (applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers = ma.girtThickness / 2 - .05), tempk = (tempV2 * ma.girtSpacing - Kt) / (Jt / 12) + 1, (ColorOption = Bt.clone()).position.set(Zt / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk, ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, ta.add(ColorOption), (ColorOption = Bt.clone()).position.set(Zt / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * ma.girtSpacing + .05, tempk / -2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.tempz = setElementId, ColorOption.rotation.y = 0, ColorOption.scale.tempz = tempk), ColorOption.scale.y = ma.girtThickness, ma.hideWalls < 3 ? ColorOption.visible = !0 : ColorOption.visible = !1, ta.add(ColorOption), tempV2++
            }
        }
        var tempI, aa, oa = ma.girtSpacing,
            ia = ma.purlinSpacing;
        (tempI = new THREE.Group).name = "GirtParent", isRendererReady.add(tempI), 2 < ma.hideWalls ? tempI.visible = !1 : tempI.visible = !0, (aa = new THREE.Group).name = "PurlinParentL", aa.position.set(ma.width / -2, ma.wallHeightL(), 0), aa.rotation.z = Math.PI / 2 - i, ma.roofPitch < 0 && (aa.rotation.tempz = Math.PI / -2 - i), tempI.add(aa);
        (na = new THREE.Group).name = "PurlinParentR", na.position.set(ma.width / 2, ma.wallHeightR(), 0), na.rotation.z = n - Math.PI / -2, ma.roofPitch < 0 && (na.rotation.tempz = dimensionsArray - Math.PI / 2), tempI.add(na), ma.depth;
        (orthographicCamera = mainScene.getObjectByName("masterSecondaryFramingPiece").clone()).rotation.set(0, 0, 0);
        for (var na, tempV2 = 0; tempV2 < (tempX - renderer) / ia;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers = 0;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = (ma.roofPitch, 0))) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? .1 : .2)), ColorOption.position.set(tempV2 * ia + renderer, -ma.purlinThickness - applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - setElementId - renderer, ColorOption.visible = !0, aa.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < (tempU - renderer) / ia;) {
            ColorOption = orthographicCamera.clone();
            let applyToControllers;
            ma.flushPurlins || ma.standingPurlins ? (ma.flushPurlins && (applyToControllers = ma.purlinThickness / 2 + .0625), ma.standingPurlins && (applyToControllers = 0), "Single Slope" === ma.roofType && (applyToControllers = (ma.roofPitch, 0))) : (ColorOption.rotation.z = Math.PI / 2, applyToControllers = 0, "Single Slope" === ma.roofType && (applyToControllers = 0 <= ma.roofPitch ? -.15 : -.25)), "Single Slope" === ma.roofType ? ColorOption.position.set(tempV2 * -ia - renderer, -ma.purlinThickness - applyToControllers, 0) : ColorOption.position.set(tempV2 * ia + renderer, ma.purlinThickness + applyToControllers, 0), ColorOption.scale.y = ma.purlinThickness, ColorOption.scale.tempz = ma.depth - renderer, ColorOption.visible = !0, na.add(ColorOption), tempV2++
        }
        for (tempV2 = 0; tempV2 < A / oa;) {
            if (tempV2 < ma.wallHeightL() / oa && ma.enclosedE) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers += ma.girtThickness / 2 - .1), ma.standingGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers += ma.girtThickness / 2 - .05), ColorOption.position.set(ma.width / -2 - .04 + renderer / 1.9 + applyToControllers, tempV2 * oa + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - setElementId, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            if (tempV2 < ma.wallHeightR() / oa && ma.enclosedW) {
                ColorOption = orthographicCamera.clone();
                let applyToControllers = 0;
                ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers += ma.girtThickness / 2 - .1), ma.standingGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers += ma.girtThickness / 2 - .05), ColorOption.position.set(ma.width / 2 + .04 - renderer / 1.9 - applyToControllers, tempV2 * oa + .05, 0), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.depth - setElementId, ColorOption.visible = !0, tempI.add(ColorOption)
            }
            let applyToControllers = 0;
            tempV2 < ma.height / oa && (ma.enclosedS && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2 - .05), ColorOption.position.set(0, tempV2 * oa + .05, ma.depth / -2 - .04 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN) && (ColorOption = orthographicCamera.clone(), ma.flushGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2 + .03), ma.standingGirts && (ColorOption.rotation.tempz = Math.PI / 2, applyToControllers = ma.girtThickness / 2 - .05), ColorOption.position.set(0, tempV2 * oa + .05, ma.depth / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = ma.width - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
        }
        if (!ma.flushGirts) {
            let applyToControllers = 0;
            for (ma.flushGirts && (applyToControllers += ma.girtThickness / 2 + .03), ma.standingGirts && (applyToControllers += ma.girtThickness / 2 - .05); tempV2 < (tempQ + ma.height - .1) / oa;) {
                tempME2 = tempV2 * oa - ma.height, tempDE = ("Single Slope" !== ma.roofType && (tempV = "Asymmetrical" === ma.roofType ? tempME2 / q * ma.asymmetrical : (_ = ma.width / 2, $ = ma.width / 2, n = i = F, 0)), _ - (Me + .5) / Math.tan(Math.PI / 2 - i)), tempPE2 = $ - (tempME2 + .5) / Math.tan(Math.PI / 2 - dimensionsArray);
                ma.enclosedS && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * oa + .05, ma.depth / -2 - .04 + renderer / 1.9 + applyToControllers), ColorOption.rotation.y = Math.PI / 2, ma.standingGirts && (ColorOption.rotation.z = Math.PI / 2), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), ma.enclosedN && ((ColorOption = orthographicCamera.clone()).position.set(tempV, tempV2 * oa + .05, ma.depth / 2 + .04 - renderer / 1.9 - applyToControllers), ColorOption.rotation.y = Math.PI / 2, ma.standingGirts && (ColorOption.rotation.z = Math.PI / 2), ColorOption.scale.y = ma.girtThickness, ColorOption.scale.tempz = tempDE + tempPE2 - .25, ColorOption.visible = !0, tempI.add(ColorOption)), tempV2++
            }
        }
        ma.settings.hasOwnProperty("alternatePostSpacingOver40FT") && (40 < ma.width ? ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.over : ma.maxPostSpacing = ma.settings.alternatePostSpacingOver40FT.under);
        for (Se = ((We = Math.ceil(ma.width / ma.maxPostSpacing) - 1) < 0 && (We = 0), ma.depth / 2 - (setElementId + .04)), Oe = ma.width / (We + 1), orbitControls = 0, Be = 0, tempV2 = 1; tempV2 <= We; tempV2++) {
            switch (orbitControls = ma.width / -2 + Oe * tempV2, Be = ma.height - 1 - 1, Be = orbitControls >= ma.asymmetrical ? ma.roofHeightAtX(orbitControls) - 1 - Xe - $applyToControllers - .25 : ma.roofHeightAtX(orbitControls) - 1 - Qe - $applyToControllers - .25, (ColorOption = pt.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedN ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), ma.postFooting) {
                case "Post in Ground":
                    Fe = pt.getObjectByName("footing-Burried").clone();
                    break;
                case "Bracket on Concrete":
                case "Bracket":
                    Fe = pt.getObjectByName("footing").clone();
                    break;
                case "Perma-Column":
                    Fe = pt.getObjectByName("footing-PermaColumnConcretePost").clone();
                    break;
                case "Morton Foundation System":
                    Fe = tempHA.getObjectByName("footing-MortonFoundationSystem").clone();
                    break;
                default:
                    Fe = !1
            }
            if (Fe && (Fe.visible = ma.enclosedN, Fe.position.set(0, 0, 0), ColorOption.add(Fe)), (ColorOption = pt.getObjectByName("columnEnd").clone()).name += "-clone", !ma.settings.hasOwnProperty("showPostsWithOpenGableWall") || ma.settings.showPostsWithOpenGableWall || ma.enclosedS ? ColorOption.visible = !0 : ColorOption.visible = !1, ColorOption.position.set(orbitControls, 0, -Se), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = Be, isRendererReady.add(ColorOption), Fe && ((tempQ2 = Fe.clone()).visible = ma.enclosedS, tempQ2.position.set(0, 0, 0), ColorOption.add(tempQ2)), 0 < ma.mezzanineBays) {
                var ra = pa;
                ra.sort(function(applyToControllers, setElementId) {
                    return applyToControllers - setElementId
                });
                for (Re = ma.mezzanineStartingBay - 1; Re <= ma.mezzanineBays + ma.mezzanineStartingBay - 1; Re++)(Re == ma.mezzanineStartingBay - 1 && 1 < ma.mezzanineStartingBay || Re > ma.mezzanineStartingBay - 1) && (ma.hasOwnProperty("mezzanineSupport") && "Floor Support" != ma.mezzanineSupport ? ((ColorOption = pt.getObjectByName("mezzanineHanger").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, ma.mezzanineHeight, ra[Re]), ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.roofHeightAtX(orbitControls) - ma.mezzanineHeight - 2.3 / Math.cos(ui(ma.roofPitch)) - 1) : ((ColorOption = pt.getObjectByName("columnEnd").clone()).name += "-clone", ColorOption.visible = !0, ColorOption.position.set(orbitControls, 0, ra[Re]), ColorOption.morphTargetDictionary.hasOwnProperty("height") ? ColorOption.morphTargetInfluences[ColorOption.morphTargetDictionary.height] = ma.mezzanineHeight - 1 - .5 : ColorOption.scale.y = ma.mezzanineHeight - .5), isRendererReady.add(ColorOption))
            }
        }
    }
}

function ei(applyToControllers, setElementId) {
    var setElementClass = new THREE.Group,
        setElementHidden = (setElementClass.name = "TrussClones", tempLA.add(setElementClass), []);
    let i, dimensionsArray;
    for (var r = 1; r < ma.depth / 2 / applyToControllers; r++) setElementHidden.push(r * applyToControllers), setElementHidden.push(r * -applyToControllers), (i = mainScene.getObjectByName("RidgidPostMasterL").clone()).name = "TrussClone", i.position.tempz = r * applyToControllers, setElementClass.add(i), (dimensionsArray = mainScene.getObjectByName("RidgidPostMasterL").clone()).name = "TrussClone", dimensionsArray.position.tempz = r * -applyToControllers, setElementClass.add(dimensionsArray), (i = mainScene.getObjectByName("RidgidPostMasterR").clone()).name = "TrussClone", i.position.tempz = r * applyToControllers, setElementClass.add(i), (dimensionsArray = mainScene.getObjectByName("RidgidPostMasterR").clone()).name = "TrussClone", dimensionsArray.position.tempz = r * -applyToControllers, setElementClass.add(dimensionsArray);
    return setElementHidden.push(ma.depth / 2 - setElementId - .25), setElementHidden.push(ma.depth / -2 + setElementId + .25), (i = mainScene.getObjectByName("RidgidPostMasterL").clone()).name = "TrussClone", i.position.tempz = ma.depth / 2 - setElementId - .25, setElementClass.add(i), (n = sa.getObjectByName("RidgidPostMasterL").clone()).name = "TrussClone", n.position.z = ma.depth / -2 + setElementId + .25, setElementClass.add(dimensionsArray), (i = mainScene.getObjectByName("RidgidPostMasterR").clone()).name = "TrussClone", i.position.tempz = ma.depth / 2 - setElementId - .25, setElementClass.add(i), (n = sa.getObjectByName("RidgidPostMasterR").clone()).name = "TrussClone", n.position.z = ma.depth / -2 + setElementId + .25, setElementClass.add(dimensionsArray), setElementHidden
}

function ti(applyToControllers, setElementId, setElementClass, setElementHidden) {
    var i, dimensionsArray, r = [],
        ColorOption = ma.depth / 2 - setElementId - .08,
        renderer = ma.depth / -2 + setElementId + .08,
        controls = Math.ceil((ColorOption - renderer) / applyToControllers);
    setElementClass.position.tempz = ColorOption, r.push(ColorOption);
    for (var c = 1; c <= controls; c++) {
        if (r.push(i = ColorOption - c * (ColorOption - renderer) / controls), (dimensionsArray = setElementClass.clone()).name = "TrussClone", dimensionsArray.position.tempz = i, ma.gutters) {
            let applyToControllers, setElementId;
            setElementId = "Open Web Truss" == ma.frameType ? (applyToControllers = dimensionsArray.getObjectByName("primaryFrameL"), dimensionsArray.getObjectByName("primaryFrameR")) : (applyToControllers = dimensionsArray.getObjectByName("columnSideL"), dimensionsArray.getObjectByName("columnSideR")), ma.settings.downspountsOnEndsOnly && c < controls && (applyToControllers.getObjectByName("downspout-clone").visible = !1, setElementId.getObjectByName("downspout-clone").visible = !1), ma.leanTo2 && ma.depth / 2 - ma.leanTo2CutR > i && ma.depth / -2 + ma.leanTo2CutL < i && (applyToControllers.getObjectByName("downspout-clone").visible = !1), ma.leanTo4 && ma.depth / 2 - ma.leanTo4CutL > i && ma.depth / -2 + ma.leanTo4CutR < i && (setElementId.getObjectByName("downspout-clone").visible = !1)
        }
        if (1 < Math.round(ma.maxPostSpacing / ma.maxTrussSpacing)) c % Math.round(ma.maxPostSpacing / ma.maxTrussSpacing) != 0 && c < controls && dimensionsArray.traverse(function(applyToControllers) {
            applyToControllers instanceof THREE.Mesh && (applyToControllers.name.startsWith("footing") || applyToControllers.name.startsWith("columnSide")) && (applyToControllers.visible = !1)
        });
        else if (1 < Math.round(ma.maxTrussSpacing / ma.maxPostSpacing)) {
            let setElementHidden = Math.round(ma.maxTrussSpacing / ma.maxPostSpacing) - 1,
                i = (ColorOption - r[1]) / (1 + setElementHidden);
            dimensionsArray.traverse(function(applyToControllers) {
                if (applyToControllers instanceof THREE.Mesh && (applyToControllers.name.startsWith("footing") || applyToControllers.name.startsWith("columnSide")))
                    for (var setElementId = 1; setElementId <= setElementHidden; setElementId++) {
                        var setElementClass = applyToControllers.clone();
                        setElementClass.position.tempz += i * setElementId, setElementClass.name = "extra-" + setElementClass.name, dimensionsArray.add(setElementClass)
                    }
            })
        }
        setElementHidden.add(dimensionsArray)
    }
    return Object.defineProperty(r, "spacingBetweenTrusses", {
        enumerable: !1,
        get: function() {
            return (ColorOption - renderer) / controls
        }
    }), r
}

function ai(applyToControllers, setElementId) {
    let setElementClass = new THREE.Group,
        setElementHidden = (setElementClass.name = "TrussClones", tempLA.add(setElementClass), []),
        i;
    var dimensionsArray = 0,
        r = (ma.depth % 25 == 0 ? applyToControllers = 25 : ma.depth % 20 == 0 ? applyToControllers = 20 : (ma.depth - 25) % 20 == 0 ? (applyToControllers = 20, dimensionsArray = 1) : (ma.depth - 20) % 25 == 0 && (applyToControllers = 25), ma.depth / 2 - setElementId - .25),
        ColorOption = ma.depth / -2 + setElementId + .25,
        renderer = Math.ceil((r - ColorOption) / applyToControllers) - dimensionsArray;
    mainScene.getObjectByName("RidgidPostMasterR").position.tempz = r, mainScene.getObjectByName("RidgidPostMasterL").position.tempz = r;
    for (var controls = 1; controls <= renderer; controls++) setElementHidden.push(r - controls * (applyToControllers = controls == renderer ? (r - ColorOption) / renderer : applyToControllers)), (i = mainScene.getObjectByName("RidgidPostMasterR").clone()).name = "TrussClone", i.position.tempz = r - controls * applyToControllers, setElementClass.add(i), (i = mainScene.getObjectByName("RidgidPostMasterL").clone()).name = "TrussClone", i.position.tempz = r - controls * applyToControllers, setElementClass.add(i);
    return setElementHidden
}

function oi(applyToControllers) {
    var setElementId = applyToControllers.parent;
    0 < applyToControllers.children.length && applyToControllers.children.forEach(function(applyToControllers) {
        oi(applyToControllers)
    }), applyToControllers instanceof THREE.Mesh && (applyToControllers.geometry.dispose(), 1 < applyToControllers.material.length ? applyToControllers.material.forEach(function(applyToControllers) {
        applyToControllers.dispose()
    }) : (applyToControllers.material.dispose(), applyToControllers.material = void 0)), setElementId.remove(applyToControllers)
}

function ii(applyToControllers, setElementId) {
    void 0 === setElementId && (setElementId = "warning"), document.querySelector("#alert_top span.content").innerHTML = applyToControllers, document.querySelector("#alert_top").className = "alert alert-" + setElementId, $("#alert_top").slideDown("slow")
}

function ni() {
    setTimeout(function() {
        "dev" == renderer ? ii("<strong>NOTICE:</strong> You are currently using the development version of the " + Oa + " " + Ba + ". Saving, sharing, and requesting setElementClass quote are for testing purposes only.  Submitting setElementClass building for setElementClass quote will not result in setElementClass quote being generated for your building.", "danger") : "demo" == renderer ? ii("<strong>DEMO MODE:</strong> Saving, sharing, and requesting setElementClass quote are for demo purposes only.  Submitting setElementClass building for setElementClass quote will not result in setElementClass quote being generated for your building.", "danger") : "live" !== renderer && ii("<strong>NOTICE:</strong> This application is currently disabled. Please contact support to resolve the issue.  Submitting setElementClass building for setElementClass quote will not result in setElementClass quote being generated for your building.", "danger")
    }, 1500)
}

function ri(applyToControllers, setElementId, setElementClass, setElementHidden, i) {
    return (applyToControllers - setElementId) / (setElementClass - setElementId) * (i - setElementHidden) + setElementHidden
}

function si() {
    var setElementId, setElementClass, setElementHidden, i, dimensionsArray;
    for (let applyToControllers = 1; applyToControllers <= 4; applyToControllers++) {
        setElementClass = "leanTo" + applyToControllers, (setElementHidden = (setElementId = mainScene.getObjectByName(setElementClass)).deepClone()).name = setElementClass;
        for (let applyToControllers = 0; applyToControllers < setElementHidden.material.length; applyToControllers++) setElementHidden.material[applyToControllers].normalMap && void 0 !== setElementHidden.material[applyToControllers].normalMap.image && (i = setElementHidden.material[applyToControllers].clone(), (dimensionsArray = tempPE.clone()).needsUpdate = !0, i.normalMap = dimensionsArray, setElementHidden.material[applyToControllers] = i, tempLA.add(setElementHidden), tempLA.remove(setElementId))
    }
}

function li() {
    ma.hasOwnProperty("boardAndBattenWoodenBarnSiding") && ma.boardAndBattenWoodenBarnSiding && mainScene.traverse(function(applyToControllers) {
        applyToControllers instanceof THREE.Mesh && Array.isArray(applyToControllers.material) && applyToControllers.material.forEach(function(applyToControllers) {
            (applyToControllers.name.startsWith("BuildingWalls") || applyToControllers.name.startsWith("BuildingWainscot") || applyToControllers.name.startsWith("LeantoWalls") || applyToControllers.name.startsWith("LeantoWainscot") || applyToControllers.name.startsWith("interiorWall") || applyToControllers.name.startsWith("BuildingTrim") && !applyToControllers.name.endsWith("RoofEdge") && !applyToControllers.name.endsWith("RoofPivot") && !applyToControllers.name.endsWith("Gable")) && (applyToControllers.shininess = 5, applyToControllers.map = woodGrainTexture.clone(), applyToControllers.normalMap = woodGrainNormal.clone(), applyToControllers.map.needsUpdate = !0, applyToControllers.normalMap.needsUpdate = !0, applyToControllers.needsUpdate = !0)
        })
    })
}

function hi(tempU2, tempT, setElementId, setElementClass, setElementHidden, y, tempB, tempF2, tempW, tempV2, orthographicCamera, orbitControls) {
    var i = tempT.settings.restrictPeakOfCoverdGablesToEaveHeight,
        dimensionsArray = tempT.settings.restrictEaveOfCoverdGablesToEaveHeight,
        tempD = 2 / 12;
    if (setElementId.__folders.hasOwnProperty(jt)) {
        if (setElementId.__folders[jt].__folders.hasOwnProperty(setElementHidden.tempN.name + " " + zt))
            for (var r = 0; r < setElementId.__folders[jt].__folders[setElementHidden.tempN.name + " " + zt].__controllers.length; r++) {
                var ColorOption = setElementId.__folders[jt].__folders[setElementHidden.tempN.name + " " + zt].__controllers[r],
                    applyToControllers = tempT.coveredGableExtensionNHeight + (tempT.width - tempT.coveredGableExtensionNCutR - tempT.coveredGableExtensionNCutL) / 2 * T.coveredGableExtensionNPitch / 12,
                    renderer = tempT.roofHeightAtX((tempT.coveredGableExtensionNCutR - tempT.coveredGableExtensionNCutL) / 2);
                "coveredGableExtensionNHeight" === ColorOption.property && (ColorOption.max(Math.floor(tempT.coveredGableExtensionNHeight + renderer - applyToControllers)), !setElementClass && tempT.coveredGableExtensionNHeight > ColorOption.__max && (tempT.coveredGableExtensionNHeight = ColorOption.__max), tempT.coveredGableExtensionNHeight < 6 && (tempT.coveredGableExtensionNHeight = 6), ColorOption.updateDisplay()), "coveredGableExtensionNCutL" === ColorOption.property && (ColorOption.max(tempT.width - tempT.coveredGableExtensionNCutR - 6), !setElementClass && tempT.coveredGableExtensionNCutL > ColorOption.__max && (tempT.coveredGableExtensionNCutL = ColorOption.__max), tempT.coveredGableExtensionNCutL < 0 && (tempT.coveredGableExtensionNCutL = 0), ColorOption.updateDisplay()), "coveredGableExtensionNCutR" === ColorOption.property && (ColorOption.max(tempT.width - tempT.coveredGableExtensionNCutL - 6), !setElementClass && tempT.coveredGableExtensionNCutR > ColorOption.__max && (tempT.coveredGableExtensionNCutR = ColorOption.__max), tempT.coveredGableExtensionNCutR < 0 && (tempT.coveredGableExtensionNCutR = 0), ColorOption.updateDisplay())
            }
        if (setElementId.__folders[jt].__folders.hasOwnProperty(setElementHidden.S.name + " " + zt))
            for (r = 0; r < setElementId.__folders[jt].__folders[setElementHidden.S.name + " " + zt].__controllers.length; r++) {
                var ColorOption = setElementId.__folders[jt].__folders[setElementHidden.S.name + " " + zt].__controllers[r],
                    controls = tempT.coveredGableExtensionSHeight + (tempT.width - tempT.coveredGableExtensionSCutR - tempT.coveredGableExtensionSCutL) / 2 * T.coveredGableExtensionSPitch / 12,
                    c = tempT.roofHeightAtX((tempT.coveredGableExtensionSCutL - tempT.coveredGableExtensionSCutR) / 2);
                "coveredGableExtensionSHeight" === ColorOption.property && (ColorOption.max(Math.floor(tempT.coveredGableExtensionSHeight + c - controls)), !setElementClass && tempT.coveredGableExtensionSHeight > ColorOption.__max && (tempT.coveredGableExtensionSHeight = ColorOption.__max), tempT.coveredGableExtensionSHeight < 6 && (tempT.coveredGableExtensionSHeight = 6), ColorOption.updateDisplay()), "coveredGableExtensionSCutL" === ColorOption.property && (ColorOption.max(tempT.width - tempT.coveredGableExtensionSCutR - 6), !setElementClass && tempT.coveredGableExtensionSCutL > ColorOption.__max && (tempT.coveredGableExtensionSCutL = ColorOption.__max), tempT.coveredGableExtensionSCutL < 0 && (tempT.coveredGableExtensionSCutL = 0), ColorOption.updateDisplay()), "coveredGableExtensionSCutR" === ColorOption.property && (ColorOption.max(tempT.width - tempT.coveredGableExtensionSCutL - 6), !setElementClass && tempT.coveredGableExtensionSCutR > ColorOption.__max && (tempT.coveredGableExtensionSCutR = ColorOption.__max), tempT.coveredGableExtensionSCutR < 0 && (tempT.coveredGableExtensionSCutR = 0), ColorOption.updateDisplay())
            }
        if (setElementId.__folders[jt].__folders.hasOwnProperty(setElementHidden.orthographicCamera.name + " " + zt))
            for (r = 0; r < setElementId.__folders[jt].__folders[setElementHidden.orthographicCamera.name + " " + zt].__controllers.length; r++) {
                var ColorOption = setElementId.__folders[jt].__folders[setElementHidden.orthographicCamera.name + " " + zt].__controllers[r],
                    d = tempT.coveredGableExtensionEHeight + (tempT.depth - tempT.coveredGableExtensionECutR - tempT.coveredGableExtensionECutL) / 2 * T.coveredGableExtensionEPitch / 12;
                let applyToControllers = tempT.peakHeight();
                i && (applyToControllers = tempT.height), "coveredGableExtensionEHeight" === ColorOption.property && (ColorOption.max(Math.floor(tempT.coveredGableExtensionEHeight + applyToControllers - d)), dimensionsArray && ColorOption.max(tempT.height), !setElementClass && tempT.coveredGableExtensionEHeight > ColorOption.__max && (tempT.coveredGableExtensionEHeight = ColorOption.__max), tempT.coveredGableExtensionEHeight < 0 && (tempT.coveredGableExtensionEHeight = 0), ColorOption.updateDisplay()), "coveredGableExtensionECutL" === ColorOption.property && (ColorOption.max(tempT.depth - tempT.coveredGableExtensionECutR - 6), !setElementClass && tempT.coveredGableExtensionECutL > ColorOption.__max && (tempT.coveredGableExtensionECutL = ColorOption.__max), tempT.coveredGableExtensionECutL < 0 && (tempT.coveredGableExtensionECutL = 0), ColorOption.updateDisplay()), "coveredGableExtensionECutR" === ColorOption.property && (ColorOption.max(tempT.depth - tempT.coveredGableExtensionECutL - 6), !setElementClass && tempT.coveredGableExtensionECutR > ColorOption.__max && (tempT.coveredGableExtensionECutR = ColorOption.__max), tempT.coveredGableExtensionECutR < 0 && (tempT.coveredGableExtensionECutR = 0), ColorOption.updateDisplay())
            }
        if (setElementId.__folders[jt].__folders.hasOwnProperty(setElementHidden.W.name + " " + zt))
            for (r = 0; r < setElementId.__folders[jt].__folders[setElementHidden.W.name + " " + zt].__controllers.length; r++) {
                var ColorOption = setElementId.__folders[jt].__folders[setElementHidden.W.name + " " + zt].__controllers[r],
                    tempP = tempT.coveredGableExtensionWHeight + (tempT.depth - tempT.coveredGableExtensionWCutR - tempT.coveredGableExtensionWCutL) / 2 * T.coveredGableExtensionWPitch / 12;
                let applyToControllers = tempT.peakHeight();
                i && (applyToControllers = tempT.height), "coveredGableExtensionWHeight" === ColorOption.property && (ColorOption.max(Math.floor(tempT.coveredGableExtensionWHeight + applyToControllers - tempP)), dimensionsArray && ColorOption.max(tempT.height), !setElementClass && tempT.coveredGableExtensionWHeight > ColorOption.__max && (tempT.coveredGableExtensionWHeight = ColorOption.__max), tempT.coveredGableExtensionWHeight < 0 && (tempT.coveredGableExtensionWHeight = 0), ColorOption.updateDisplay()), "coveredGableExtensionWCutL" === ColorOption.property && (ColorOption.max(tempT.depth - tempT.coveredGableExtensionWCutR - 6), !setElementClass && tempT.coveredGableExtensionWCutL > ColorOption.__max && (tempT.coveredGableExtensionWCutL = ColorOption.__max), tempT.coveredGableExtensionWCutL < 0 && (tempT.coveredGableExtensionWCutL = 0), ColorOption.updateDisplay()), "coveredGableExtensionWCutR" === ColorOption.property && (ColorOption.max(tempT.depth - tempT.coveredGableExtensionWCutL - 6), !setElementClass && tempT.coveredGableExtensionWCutR > ColorOption.__max && (tempT.coveredGableExtensionWCutR = ColorOption.__max), tempT.coveredGableExtensionWCutR < 0 && (tempT.coveredGableExtensionWCutR = 0), ColorOption.updateDisplay())
            }
    }
    if (tempT.hasOwnProperty("coveredGableExtensionN") && tempT.coveredGableExtensionN || tempT.hasOwnProperty("coveredGableExtensionS") && tempT.coveredGableExtensionS || tempT.hasOwnProperty("coveredGableExtensionE") && tempT.coveredGableExtensionE || tempT.hasOwnProperty("coveredGableExtensionW") && tempT.coveredGableExtensionW) {
        let c = "coveredGableExtension";
        if (void 0 === tempLA.getObjectByName(c)) return;
        var tempG = tempLA.getObjectByName(c);
        let d, tempP, camera, tempG2;
        for (let controls = 0; controls < 4; controls++) {
            c = "coveredGableExtension";
            let applyToControllers = "",
                setElementId = "";
            switch (controls) {
                case 0:
                    c += "tempN", applyToControllers = "tempN", setElementId = 1;
                    break;
                case 1:
                    c += "S", applyToControllers = "S", setElementId = 3;
                    break;
                case 2:
                    c += "orthographicCamera", applyToControllers = "orthographicCamera", setElementId = 2;
                    break;
                case 3:
                    c += "W", applyToControllers = "W", setElementId = 4;
                    break;
                default:
                    c += "tempN", applyToControllers = "tempN", setElementId = 1
            }
            let setElementClass;
            if (void 0 === tempLA.getObjectByName(c)) {
                (d = new THREE.Group).name = c + "Null", tempLA.add(d), (tempP = tempG.deepClone()).name = c, tempP.frustumCulled = !1, d.add(tempP), camera = tempLA.getObjectByName("roofL").deepClone(), tempG2 = tempLA.getObjectByName("roofR").deepClone(), camera.name = c + "RoofL", tempG2.name = c + "RoofR", d.add(camera), d.add(tempG2);
                for (let applyToControllers = 0; applyToControllers < tempP.material.length; applyToControllers++) tempP.material[applyToControllers].name.startsWith("BuildingWainscotTrim") ? tempP.material[applyToControllers].name = "BuildingWainscotTrim" + setElementId : tempP.material[applyToControllers].name.startsWith("BuildingWainscot1") ? tempP.material[applyToControllers].name = "BuildingWainscot" + setElementId + "-front" : (tempP.material[applyToControllers].name.startsWith("BuildingWainscot2") || tempP.material[applyToControllers].name.startsWith("BuildingWainscot4")) && (tempP.material[applyToControllers].name = "BuildingWainscot" + setElementId + "-sides");
                if ("orthographicCamera" == applyToControllers || "W" == applyToControllers) {
                    for (let applyToControllers = 0; applyToControllers < tempP.material.length; applyToControllers++) tempP.material[applyToControllers].clippingPlanes = tempV2, tempP.material[applyToControllers].clipIntersection = !0, tempP.material[applyToControllers].clipShadows = !0;
                    for (let applyToControllers = 0; applyToControllers < camera.material.length; applyToControllers++) camera.material[applyToControllers].clippingPlanes = tempV2, camera.material[applyToControllers].clipIntersection = !0, camera.material[applyToControllers].clipShadows = !0;
                    for (let applyToControllers = 0; applyToControllers < tempG2.material.length; applyToControllers++) tempG2.material[applyToControllers].clippingPlanes = tempV2, tempG2.material[applyToControllers].clipIntersection = !0, tempG2.material[applyToControllers].clipShadows = !0
                } else {
                    for (let applyToControllers = 0; applyToControllers < tempG2.material.length; applyToControllers++) camera.material[applyToControllers].clippingPlanes = orthographicCamera, camera.material[applyToControllers].clipIntersection = !0, camera.material[applyToControllers].clipShadows = !0;
                    for (let applyToControllers = 0; applyToControllers < tempG2.material.length; applyToControllers++) tempG2.material[applyToControllers].clippingPlanes = orthographicCamera, tempG2.material[applyToControllers].clipIntersection = !0, tempG2.material[applyToControllers].clipShadows = !0
                }
                var currentCamera = new THREE.BoxGeometry(1, .04, 1),
                    W = (currentCamera.applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, .5)), A + "images/building/concrete.jpg"),
                    W = (loader = new THREE.TextureLoader).load(W),
                    W = (W.anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), W.wrapS = THREE.RepeatWrapping, W.wrapT = THREE.RepeatWrapping, new THREE.MeshPhongMaterial({
                        color: "white",
                        name: "foundation-Material",
                        map: W,
                        bumpMap: W,
                        bumpScale: .04,
                        specularMap: W
                    }));
                (setElementClass = new THREE.Mesh(currentCamera, W)).name = "concrete", setElementClass.receiveShadow = !0, d.add(setElementClass)
            } else d = tempLA.getObjectByName(c + "Null"), tempP = d.getObjectByName(c), camera = d.getObjectByName(c + "RoofL"), tempG2 = d.getObjectByName(c + "RoofR"), setElementClass = d.getObjectByName("concrete");
            tempT.hideWalls < 2 ? (camera.visible = !0, tempG2.visible = !0) : (camera.visible = !1, tempG2.visible = !1);
            let setElementHidden;
            switch (c) {
                case "coveredGableExtensionN":
                    setElementHidden = tempT.width - tempT[c + "CutR"] - tempT[c + "CutL"], tempP.morphTargetInfluences[tempP.morphTargetDictionary.width] = setElementHidden - 1, d.position.isSceneLoaded = tempT[c + "CutL"] / 2 - T[c + "CutR"] / 2, d.position.tempz = tempT.depth / 2;
                    break;
                case "coveredGableExtensionS":
                    d.rotation.y = THREE.Math.degToRad(180), setElementHidden = tempT.width - tempT[c + "CutR"] - tempT[c + "CutL"], tempP.morphTargetInfluences[tempP.morphTargetDictionary.width] = setElementHidden - 1, d.position.isSceneLoaded = tempT[c + "CutR"] / 2 - T[c + "CutL"] / 2, d.position.tempz = tempT.depth / -2;
                    break;
                case "coveredGableExtensionE":
                    d.rotation.y = THREE.Math.degToRad(-90), setElementHidden = tempT.depth - tempT[c + "CutR"] - tempT[c + "CutL"], tempP.morphTargetInfluences[tempP.morphTargetDictionary.width] = setElementHidden - 1, d.position.tempz = tempT[c + "CutL"] / 2 - T[c + "CutR"] / 2, tempP.position.tempz = tempT.width / 2;
                    break;
                case "coveredGableExtensionW":
                    d.rotation.y = THREE.Math.degToRad(90), setElementHidden = tempT.depth - tempT[c + "CutR"] - tempT[c + "CutL"], tempP.morphTargetInfluences[tempP.morphTargetDictionary.width] = setElementHidden - 1, d.position.tempz = tempT[c + "CutR"] / 2 - T[c + "CutL"] / 2, tempP.position.tempz = tempT.width / 2
            }
            currentCamera = tempT[c + "Height"], W = currentCamera + setElementHidden / 2 * T[c + "Pitch"] / 12;
            let i = tempT[c + "Depth"],
                dimensionsArray = 0;
            "orthographicCamera" != applyToControllers && "W" != applyToControllers || (i += tempT.width / 2, n = T.width / 2), tempP.morphTargetInfluences[tempP.morphTargetDictionary.height] = currentCamera - 1, camera.position.y = W + .1, tempG2.position.y = W + .1, tempP.morphTargetInfluences[tempP.morphTargetDictionary.depth] = i - 1, "orthographicCamera" != applyToControllers && "W" != applyToControllers || (tempP.morphTargetInfluences[tempP.morphTargetDictionary.depth] = i - tempT.width / 2 - 1), camera.morphTargetInfluences[camera.morphTargetDictionary.depth] = (i - 1) / 1e3, tempG2.morphTargetInfluences[tempG2.morphTargetDictionary.depth] = (i - 1) / 1e3, camera.position.z = i / 2, tempG2.position.tempz = i / 2, tempP.morphTargetInfluences[tempP.morphTargetDictionary.roofPeak] = setElementHidden / 2 * T[c + "Pitch"] / 12, camera.rotation.tempz = Math.atan(12 / tempT[c + "Pitch"]) - THREE.Math.degToRad(-90), tempG2.rotation.tempz = THREE.Math.degToRad(-90) + Math.atan(12 / T[c + "Pitch"]), camera.morphTargetInfluences[camera.morphTargetDictionary.width] = (Math.hypot(setElementHidden / 2, setElementHidden / 2 * T[c + "Pitch"] / 12) - .5) / 50, g.morphTargetInfluences[g.morphTargetDictionary.width] = (Math.hypot(setElementHidden / 2, setElementHidden / 2 * T[c + "Pitch"] / 12) - .5) / 50, setElementClass.visible = T[c + "Concrete"], setElementClass.scale.x = setElementHidden, setElementClass.scale.z = T[c + "Depth"], "E" != applyToControllers && "W" != applyToControllers || (setElementClass.position.z = T.width / 2), camera.material.forEach(function(applyToControllers) {
                null !== applyToControllers.normalMap && applyToControllers.normalMap.hasOwnProperty("image") && applyToControllers.normalMap.image.src.endsWith(tempQ) && applyToControllers.normalMap.repeat.set(i * tempJ, 1)
            }), tempG2.material.forEach(function(applyToControllers) {
                null !== applyToControllers.normalMap && applyToControllers.normalMap.hasOwnProperty("image") && applyToControllers.normalMap.image.src.endsWith(tempQ) && applyToControllers.normalMap.repeat.set(i * tempJ, 1)
            }), tempP.material.forEach(function(applyToControllers) {
                null !== applyToControllers.normalMap && applyToControllers.normalMap.hasOwnProperty("image") && applyToControllers.normalMap.image.src.endsWith(tempQ) && ((applyToControllers.name.startsWith("BuildingWallsDepth") || applyToControllers.name.startsWith("BuildingWainscot") && applyToControllers.name.endsWith("-sides")) && applyToControllers.normalMap.repeat.set(2 * tempT[c + "Depth"] * tempJ, 1), applyToControllers.name.startsWith("BuildingWallsWidth") || applyToControllers.name.startsWith("BuildingWainscot") && applyToControllers.name.endsWith("-front")) && applyToControllers.normalMap.repeat.set(setElementHidden * tempJ, 1)
            });
            let r, ColorOption = .7;
            void 0 === d.getObjectByName(c + "Framing") ? ((r = new THREE.Group).name = c + "Framing", d.add(r)) : r = d.getObjectByName(c + "Framing"), orbitControls(r);
            var S, O = new THREE.Group;
            if (O.name = c + "framingPrimary", r.add(O), O.position.tempz = i - ColorOption, tempT.hasOwnProperty(c + "Structure") && "Wood" != tempT[c + "Structure"]) {
                if ("Open Web Truss" == tempT.frameType) {
                    ColorOption = .15;
                    var scene = tempU2.getObjectByName("masterSecondaryFramingPiece").clone(),
                        isSceneLoaded = (scene.rotation.set(0, 0, 0), scene.clone()),
                        scene = scene.clone(),
                        isSceneLoaded = (isSceneLoaded.position.y = currentCamera - 2 * ColorOption, scene.position.y = currentCamera - 2 * ColorOption, isSceneLoaded.position.isSceneLoaded = setElementHidden / -2 + ColorOption, scene.position.x = setElementHidden / 2 - ColorOption, isSceneLoaded.position.tempz = (i + dimensionsArray) / 2 - 2 * ColorOption, scene.position.z = (i + n) / 2 - 2 * ColorOption, scene.rotation.tempz = THREE.Math.degToRad(90), isSceneLoaded.rotation.tempz = 0, isSceneLoaded.scale.tempz = tempT[c + "Depth"] - 4 * ColorOption, scene.scale.tempz = tempT[c + "Depth"] - 4 * ColorOption, r.add(isSceneLoaded), r.add(scene), gi(setElementHidden / 2, currentCamera + .25, tempT[c + "Pitch"], 0)),
                        scene = (isSceneLoaded.rotation.y = THREE.Math.degToRad(0), O.add(isSceneLoaded), gi(setElementHidden / 2, currentCamera + .25, tempT[c + "Pitch"], 0));
                    scene.rotation.y = THREE.Math.degToRad(180), O.add(scene)
                } else if ("Rigid" == tempT.frameType) {
                    isSceneLoaded = tempU2.getObjectByName("masterSecondaryFramingPiece").clone(), scene = tempU2.getObjectByName("masterSecondaryFramingPiece").clone();
                    isSceneLoaded.position.y = currentCamera, scene.position.y = currentCamera, isSceneLoaded.position.isSceneLoaded = setElementHidden / -2 + ColorOption, scene.position.x = setElementHidden / 2 - ColorOption, isSceneLoaded.position.tempz = (tempT[c + "Depth"] - ColorOption) / 2, scene.position.z = (T[c + "Depth"] - ColorOption) / 2, isSceneLoaded.scale.tempz = tempT[c + "Depth"] - ColorOption, scene.scale.tempz = tempT[c + "Depth"] - ColorOption, r.add(isSceneLoaded), r.add(scene);
                    let applyToControllers = 1.5;
                    tempT.settings.ridgidFrameStraightColumns && (applyToControllers = .6);
                    var isRendererReady = ya.getObjectByName("columnSideL").clone(),
                        viewportElement = ya.getObjectByName("columnSideR").clone(),
                        perspectiveCamera = (isRendererReady.visible = !0, viewportElement.visible = !0, isRendererReady.position.isSceneLoaded = -setElementHidden / 2 + ColorOption,  viewportElement.position.x = setElementHidden / 2 - ColorOption, applyToControllers / 12 * tempT[c + "Pitch"]),
                        topControls = applyToControllers / 12 * tempT[c + "Pitch"],
                        isRendererReady = (tempT.settings.ridgidFrameStraightColumns ? (isRendererReady.morphTargetInfluences[isRendererReady.morphTargetDictionary.height] = currentCamera - 1, viewportElement.morphTargetInfluences[viewportElement.morphTargetDictionary.height] = currentCamera - 1) : (isRendererReady.morphTargetInfluences[isRendererReady.morphTargetDictionary.height] = currentCamera - 1.1, viewportElement.morphTargetInfluences[viewportElement.morphTargetDictionary.height] = currentCamera - 1.1), isRendererReady.morphTargetInfluences[isRendererReady.morphTargetDictionary.slantTop] = perspectiveCamera, viewportElement.morphTargetInfluences[viewportElement.morphTargetDictionary.slantTop] = topControls, O.add(isRendererReady), O.add(viewportElement), ya.getObjectByName("beamRoofL").clone()),
                        viewportElement = ya.getObjectByName("beamRoofR").clone(),
                        tempN = setElementHidden / 2 - applyToControllers - ColorOption,
                        tempj = setElementHidden / -2 + ColorOption + applyToControllers,
                        tempz = setElementHidden / 2 - ColorOption - applyToControllers,
                        perspectiveCamera = currentCamera + perspectiveCamera - .1,
                        topControls = currentCamera + topControls - .1,
                        tempk = tempN / 12 * tempT[c + "Pitch"];
                    isRendererReady.position.isSceneLoaded = tempj, isRendererReady.position.y = perspectiveCamera, isRendererReady.morphTargetInfluences[isRendererReady.morphTargetDictionary.length] = tempN - 1, isRendererReady.morphTargetInfluences[isRendererReady.morphTargetDictionary.slantTop] = tempk, viewportElement.position.isSceneLoaded = tempz, viewportElement.position.y = topControls, viewportElement.morphTargetInfluences[viewportElement.morphTargetDictionary.length] = tempN - 1, viewportElement.morphTargetInfluences[viewportElement.morphTargetDictionary.slantTop] = tempk, O.add(isRendererReady), O.add(viewportElement)
                }
            } else {
                tempj = y.getObjectByName("beamRoofL").clone(), perspectiveCamera = y.getObjectByName("beamRoofR").clone(), tempz = (tempj.position.y = currentCamera, perspectiveCamera.position.y = currentCamera, tempj.position.isSceneLoaded = setElementHidden / -2 + ColorOption, C.position.x = setElementHidden / 2 - ColorOption, tempj.position.tempz = i - ColorOption, perspectiveCamera.position.tempz = i - ColorOption, perspectiveCamera.rotation.tempz = THREE.Math.degToRad(180), tempj.rotation.tempz = 0, tempj.rotation.y = THREE.Math.degToRad(90), perspectiveCamera.rotation.y = THREE.Math.degToRad(90), tempj.scale.tempz = tempD, perspectiveCamera.scale.tempz = tempD, tempj.morphTargetInfluences[tempj.morphTargetDictionary.length] = tempT[c + "Depth"] - ColorOption - 1, perspectiveCamera.morphTargetInfluences[perspectiveCamera.morphTargetDictionary.length] = tempT[c + "Depth"] - ColorOption - 1, r.add(tempj), r.add(perspectiveCamera), tempB.getObjectByName("columnSide").clone()), topControls = tempB.getObjectByName("columnSide").clone(), tempN = (tempz.visible = !0, topControls.visible = !0, tempz.position.isSceneLoaded = -setElementHidden / 2 + ColorOption, L.position.x = setElementHidden / 2 - ColorOption, tempz.morphTargetInfluences[tempz.morphTargetDictionary.height] = currentCamera - 1, topControls.morphTargetInfluences[topControls.morphTargetDictionary.height] = currentCamera - 1, O.add(tempz), O.add(topControls), y.getObjectByName("truss").clone()), tempk = W - currentCamera;
                tempN.position.y = currentCamera, tempN.morphTargetInfluences[tempN.morphTargetDictionary.width] = setElementHidden - 2 * ColorOption - 1, tempN.morphTargetInfluences[tempN.morphTargetDictionary.height] = tempk - 1.25, tempN.morphTargetInfluences[tempN.morphTargetDictionary.asymmetrical] = 0, tempN.scale.tempz = tempD, O.add(tempN);
                let applyToControllers = y.getObjectByName("beamRoofL").clone();
                applyToControllers = y.getObjectByName("beamRoofL").clone(), isRendererReady = Math.hypot(tempk, setElementHidden / 2) - 1, applyToControllers.visible = !0, applyToControllers.position.x = setElementHidden / -2 + ColorOption + 0, applyToControllers.position.y = currentCamera + ColorOption * tempT[c + "Pitch"] / 12, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.length] = isRendererReady - 1, applyToControllers.rotation.tempz = THREE.Math.degToRad(180) - camera.rotation.tempz, tempN.scale.tempz = tempD, O.add(applyToControllers), applyToControllers = y.getObjectByName("beamRoofR").clone(), isRendererReady = Math.hypot(tempk, setElementHidden / 2) - 1, applyToControllers.visible = !0, applyToControllers.position.x = setElementHidden / 2 - ColorOption, applyToControllers.position.y = currentCamera + ColorOption * tempT[c + "Pitch"] / 12, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.length] = isRendererReady - 1, applyToControllers.rotation.tempz = THREE.Math.degToRad(180) - tempG2.rotation.tempz, applyToControllers.scale.tempz = tempD, O.add(applyToControllers);
                {
                    let applyToControllers = 2;
                    30 < setElementHidden && (applyToControllers = 3);
                    let setElementId = y.getObjectByName("webbingVertR1").clone();
                    setElementId.position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / 2 / applyToControllers, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = tempk - tempT[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers - 1, O.add(setElementId), (setElementId = y.getObjectByName("webbingVertL1").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / 2 / -applyToControllers, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = tempk - tempT[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers - 1, O.add(setElementId), 30 < setElementHidden && ((setElementId = y.getObjectByName("webbingVertR2").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / applyToControllers, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = tempk - tempT[c + "Pitch"] / 12 * setElementHidden / applyToControllers - 1, O.add(setElementId), (setElementId = y.getObjectByName("webbingVertL2").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / -applyToControllers, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = tempk - tempT[c + "Pitch"] / 12 * setElementHidden / applyToControllers - 1, O.add(setElementId)), (setElementId = y.getObjectByName("webbingDiagR1").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / 2 / applyToControllers, setElementId.rotation.tempz = Math.PI / 2 - Math.atan((k - .3) / (setElementHidden / 2 / applyToControllers)), setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = Math.sqrt(Math.pow(tempk - .3, 2) + Math.pow(setElementHidden / 2 / applyToControllers, 2)) - 1, O.add(setElementId), (setElementId = y.getObjectByName("webbingDiagL1").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / 2 / -applyToControllers, setElementId.rotation.tempz = Math.PI / -2 + Math.atan((k - .3) / (setElementHidden / 2 / applyToControllers)), setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = Math.sqrt(Math.pow(tempk - .3, 2) + Math.pow(setElementHidden / 2 / applyToControllers, 2)) - 1, O.add(setElementId), 30 < setElementHidden && ((setElementId = y.getObjectByName("webbingDiagR2").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / applyToControllers, setElementId.rotation.z = THREE.Math.degToRad(90) - Math.atan((k - T[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers) / (setElementHidden / 2 / applyToControllers)), setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = Math.hypot(tempk - tempT[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers, setElementHidden / 2 / applyToControllers) - 1, O.add(setElementId), (setElementId = y.getObjectByName("webbingDiagL2").clone()).position.y = currentCamera - .3, setElementId.position.isSceneLoaded = setElementHidden / -applyToControllers, setElementId.rotation.z = Math.PI / -2 + Math.atan((tempT.roofHeightAtX(setElementHidden / 2 / -applyToControllers) - currentCamera - .3) / (setElementHidden / 2 / applyToControllers)), setElementId.rotation.tempz = Math.atan((tempk - tempT[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers) / (setElementHidden / 2 / applyToControllers)) - THREE.Math.degToRad(90), setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height] = Math.hypot(tempk - tempT[c + "Pitch"] / 12 * setElementHidden / 2 / applyToControllers, setElementHidden / 2 / applyToControllers) - 1, O.add(setElementId))
                }
            }
            if (tempT[c + "Depth"] > tempT.maxTrussSpacing) {
                var tempI, tempF = Math.ceil(tempT[c + "Depth"] / tempT.maxTrussSpacing);
                for (let applyToControllers = 1; applyToControllers < tempF; applyToControllers++)(tempI = O.clone()).position.tempz = i - ColorOption - tempT[c + "Depth"] / tempF * applyToControllers, r.add(tempI)
            }
            let renderer;
            if (void 0 !== tempF2.getObjectByName(c + "BoundingBox") ? renderer = tempF2.getObjectByName(c + "BoundingBox") : ((viewportElement = new THREE.BoxGeometry(1, 1, 1)).applyMatrix((new THREE.Matrix4).makeTranslation(0, .5, .5)), S = new THREE.MeshPhongMaterial({
                    color: 16770491,
                    wireframe: !0,
                    side: THREE.DoubleSide,
                    visible: !1
                }), (renderer = new THREE.Mesh(viewportElement, S)).name = c + "BoundingBox", renderer.rotation.y = 0, tempW.push(renderer), tempF2.add(renderer)), renderer.position.copy(d.position), renderer.rotation.copy(d.rotation), "W" == applyToControllers ? renderer.position.isSceneLoaded = tempT.width / 2 : "E" == applyToControllers && (renderer.position.x = T.width / -2), renderer.scale.set(setElementHidden, currentCamera + 10, tempT[c + "Depth"]), 0 != tempT[c] && tempT[c + "Enclosed"] || (renderer.position.set(0, 0, 0), renderer.scale.set(.1, .1, .1)), 0 < tempT.hideWalls) tempP.visible = !1;
            else if (tempT[c + "Enclosed"]) {
                tempP.visible = !0;
                for (let applyToControllers = tempP.morphTargetInfluences[tempP.morphTargetDictionary.unEnclosedHeight] = 0; applyToControllers < tempP.material.length; applyToControllers++) tempP.material[applyToControllers].name.startsWith("BuildingWainscot") && (tempT["wainscot" + setElementId] && (tempP.material[applyToControllers].name.startsWith("BuildingWainscot" + setElementId) || tempP.material[applyToControllers].name.startsWith("BuildingWainscotTrim" + setElementId)) ? tempP.material[applyToControllers].visible = !0 : tempT["wainscot" + setElementId] || !tempP.material[applyToControllers].name.startsWith("BuildingWainscot" + setElementId) && !tempP.material[applyToControllers].name.startsWith("BuildingWainscotTrim" + setElementId) || (tempP.material[applyToControllers].visible = !1))
            } else if (tempT.settings.showExtensionTriangleWhenOpen) {
                tempP.visible = !0, tempP.morphTargetInfluences[tempP.morphTargetDictionary.unEnclosedHeight] = currentCamera - .3;
                for (let applyToControllers = 0; applyToControllers < tempP.material.length; applyToControllers++)(tempP.material[applyToControllers].name.startsWith("BuildingWainscot" + setElementId) || tempP.material[applyToControllers].name.startsWith("BuildingWainscotTrim" + setElementId)) && (tempP.material[applyToControllers].visible = !1)
            } else tempP.visible = !1
        }
    }
    if (tempLA.getObjectByName("coveredGableExtension"))
        for (let setElementId = 0; setElementId < 4; setElementId++) {
            let applyToControllers = "coveredGableExtension";
            switch (setElementId) {
                case 0:
                    applyToControllers += "tempN";
                    break;
                case 1:
                    applyToControllers += "S";
                    break;
                case 2:
                    applyToControllers += "orthographicCamera";
                    break;
                case 3:
                    applyToControllers += "W";
                    break;
                default:
                    applyToControllers += "tempN"
            }
            void 0 !== tempLA.getObjectByName(applyToControllers + "Null") && (tempLA.getObjectByName(applyToControllers + "Null").visible = tempT[applyToControllers])
        }
}

function ci() {
    try {
        googleMaps(mainScene, ma, tempF)
    } catch (applyToControllers) {
        import("./modules/google-maps.php?tempV2=" + ia).then(({
            googleMaps: applyToControllers
        }) => {
            applyToControllers(mainScene, ma, tempF, rendererInstance)
        }).catch(applyToControllers => {
            console.log("module loading ERROR: " + applyToControllers)
        })
    }
}

function di() {
    var applyToControllers, setElementId = enabledEnvironments.find(applyToControllers => applyToControllers.friendlyName === ma.environment);
    let setElementClass = !1,
        setElementHidden = !1;
    setElementClass = !!setElementId.groundImage && A + setElementId.groundImage, setElementHidden = !!setElementId.skyImage && A + setElementId.skyImage, tempD.visible = !0, tempj.visible = !0, tempk.visible = setElementId.gridVisible, tempz.visible = setElementId.gridVisible, mainScene.fog.color.setHex(setElementId.fogColor), setElementClass ? ((applyToControllers = (loader = new THREE.TextureLoader).load(setElementClass)).wrapS = THREE.RepeatWrapping, applyToControllers.wrapT = THREE.RepeatWrapping, applyToControllers.repeat.isSceneLoaded = setElementId.repeatGroundX, applyToControllers.repeat.y = setElementId.repeatGroundY, applyToControllers.anisotropy = rendererInstance.capabilities.getMaxAnisotropy(), applyToControllers.anisotropy = 5, tempD.material.color.setHex(15921906), tempD.material.emissive.setHex(0), tempD.material.map = applyToControllers, tempD.material.bumpMap = applyToControllers, tempD.material.needsUpdate = !0, tempD.morphTargetInfluences[tempD.morphTargetDictionary.Hills] = 1.25, tempD.position.y = 0, tempD.receiveShadow = !0, tempD.visible = !0) : (tempD.material.color.setHex(16777215), tempD.material.emissive.setHex(16777215), tempD.material.map = null, tempD.material.bumpMap = null, tempD.material.needsUpdate = !0, tempD.visible = !0, tempD.morphTargetInfluences[tempD.morphTargetDictionary.Hills] = 0, tempD.position.y = -.03, tempD.receiveShadow = !1), setElementHidden ? (loader = new THREE.TextureLoader, texture = loader.load(setElementHidden), tempj.material.map = texture, tempj.material.needsUpdate = !0, tempj.visible = !0) : tempj.visible = !1, shouldAutoRotate = !0
}

function pi(applyToControllers, setElementId, setElementClass) {
    setElementId = setElementId.clone().sub(applyToControllers).normalize().multiplyScalar(setElementClass);
    return applyToControllers.clone().add(setElementId)
}

function mi(applyToControllers, setElementId, setElementClass) {
    var setElementHidden = (setElementId = setElementId.clone().sub(applyToControllers)).length(),
        setElementId = setElementId.normalize().multiplyScalar(setElementHidden * setElementClass);
    return applyToControllers.clone().add(setElementId)
}

function gi(applyToControllers, setElementId, setElementClass, setElementHidden, i = !0) {
    var dimensionsArray = new THREE.Group,
        r = (dimensionsArray.name = "halfTrussMaster", vo(dimensionsArray), Pa),
        ColorOption = (totalRoofRise = applyToControllers * setElementClass / 12, ui(setElementClass) + THREE.Math.degToRad(90));
    let renderer = .2 - applyToControllers + 2 / 12 / 2;
    var controls = -(renderer = ma.hasOwnProperty("frameConstruction") && "Residential Flush" == ma.frameConstruction ? .01 - applyToControllers : renderer),
        c = setElementId - .5 + Ti(applyToControllers + renderer, setElementClass);
    let d = 2;
    var tempP = d = applyToControllers < 12.5 && "Residential Flush" !== ma.frameConstruction ? 1.23 : d,
        applyToControllers = ColorOption / 2,
        camera = d / Math.sin(applyToControllers);
    let tempG2 = Math.sqrt(Math.pow(camera, 2) - Math.pow(d, 2));
    var tempU2 = Math.sqrt(Math.pow(c - tempG2, 2) + Math.pow(d - .66, 2)),
        tempT = Math.acos((c - tempG2) / tempU2),
        y = controls / Math.sin(ColorOption);
    let tempB = (controls - d) / Math.sin(ColorOption);
    var tempF2 = Math.abs(d) / Math.sin(ColorOption),
        tempW = c + Math.sqrt(Math.pow(y, 2) - Math.pow(Math.abs(renderer), 2));
    ma.hasOwnProperty("frameConstruction") && "Residential Flush" == ma.frameConstruction ? (ma.flushGirts = !0, ma.standingGirts = !0, d = .5, tempG2 = 2 / Math.cos(Math.PI / 2 - ColorOption) + Math.tan(Math.PI / 2 - ColorOption) * d, b = (controls - d) / Math.sin(ColorOption), (tempV2 = r.getObjectByName("columnTubeSideL").clone()).name = "columnSide", tempV2.position.isSceneLoaded = renderer, tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.height] = c - 1.1, tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.slantTop] = -2 * Math.tan(ColorOption - Math.PI / 2)) : (ma.flushGirts = !1, (v = r.getObjectByName("columnSideL").clone()).name = "columnSide", v.position.x = renderer, v.morphTargetInfluences[v.morphTargetDictionary.height] = c - 1.1, v.morphTargetInfluences[v.morphTargetDictionary.slantTop] = -2 * Math.tan(ColorOption - Math.PI / 2), tempV2.visible = !0, dimensionsArray.add(tempV2), (tempV2 = r.getObjectByName("columnSideInnerL").clone()).name = "columnSideInner", tempV2.position.isSceneLoaded = renderer + .66, tempV2.rotation.tempz = -tempT, tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.height] = tempU2 - 1.1, tempV2.morphTargetInfluences[tempV2.morphTargetDictionary.slantTop] = -2 * Math.tan(ColorOption - Math.PI / 2), v.visible = !0, n.add(v), (v = r.getObjectByName("columnSideTangentL").clone()).name = "columnSideTangent", v.position.x = renderer, v.position.y = c, v.rotation.z = applyToControllers, v.morphTargetInfluences[v.morphTargetDictionary.length] = camera - 1), v.visible = !0, n.add(v), void 0 !== sa.getObjectByName("downspout") && void 0 !== n.getObjectByName("columnSide") && void 0 === n.getObjectByName("columnSide").getObjectByName("downspout-clone") && ((controls = sa.getObjectByName("downspout").clone()).name = "downspout-clone", controls.visible = !0, controls.castShadow = !0, controls.receiveShadow = !0, controls.rotation.y = THREE.Math.degToRad(180), controls.position.x = -.2, n.getObjectByName("columnSide").add(controls)), ma.gutters && ((u = n.getObjectByName("columnSide").getObjectByName("downspout-clone")).morphTargetInfluences[u.morphTargetDictionary.height] = setElementId - 1.2 - setElementHidden / Math.hypot(12, setElementClass) * setElementClass, tempU2.morphTargetInfluences[tempU2.morphTargetDictionary.downspoutOverhang] = setElementHidden / Math.hypot(12, setElementClass) * 12, 0 < ma.hideWalls ? tempU2.visible = !1 : tempU2.visible = 0 < setElementClass);
    var applyToControllers = r.getObjectByName("beamRoofL").clone(),
        tempV2 = 1.5 * setElementClass / 12,
        controls = y,
        setElementId = (applyToControllers.visible = !0, applyToControllers.position.isSceneLoaded = renderer, applyToControllers.position.y = c, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.length] = controls - 1, applyToControllers.morphTargetInfluences[applyToControllers.morphTargetDictionary.shear] = tempV2, applyToControllers.rotation.tempz = THREE.Math.degToRad(-90) + ColorOption, dimensionsArray.add(applyToControllers), r.getObjectByName("beamRoofInnerL").clone()),
        setElementHidden = (setElementId.visible = !0, setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.length] = tempB - 1, setElementId.position.isSceneLoaded = renderer + d, setElementId.position.y = c - tempG2, setElementId.rotation.tempz = THREE.Math.degToRad(90) + ColorOption, dimensionsArray.add(setElementId), r.getObjectByName("trussVert").clone()),
        orthographicCamera = (setElementHidden.position.isSceneLoaded = 0, setElementHidden.position.y = tempW, setElementHidden.morphTargetInfluences[setElementHidden.morphTargetDictionary.length] = Math.abs(tempF2) - 1, setElementHidden.visible = i, dimensionsArray.add(setElementHidden), new THREE.Group),
        orbitControls = (orthographicCamera.name = "WebbingMaster", orthographicCamera.position.isSceneLoaded = renderer, dimensionsArray.add(orthographicCamera), new THREE.Group);
    if (orbitControls.name = "WebbingRoofMaster", orbitControls.position.set(renderer + d, c - tempG2, 0), orbitControls.rotation.tempz = THREE.Math.degToRad(180) + ColorOption, dimensionsArray.add(orbitControls), !ma.hasOwnProperty("frameConstruction") || "Open Web Tapered" == ma.frameConstruction)
        for (var tempD = 0, currentCamera = .66, W = Math.abs(tempT) + Math.PI / 2, S = Math.PI / 180 * 33.3, O = Math.PI - S, scene = currentCamera / Math.sin(Math.PI - S - W) * Math.sin(W); D < c - g;)(WebbingClone = r.getObjectByName("webbing").clone()).name = "WebbingClone", WebbingClone.position.y = D, WebbingClone.scale.y = scene, c - g < D + Math.sqrt(Math.pow(scene, 2) - Math.pow(d, 2)) ? (WebbingClone.rotation.z = Math.atan((c - g - D) / d) + Math.PI / 2, WebbingClone.scale.y = Math.sqrt(Math.pow(d, 2) + Math.pow(c - g - D, 2))) : WebbingClone.rotation.z = S + Math.PI / 2, WebbingClone.visible = !0, orthographicCamera.add(WebbingClone), (tempD += scene / Math.sin(Math.PI / 2) * Math.sin(S) * 2) < c && ((WebbingClone = r.getObjectByName("webbing").clone()).name = "WebbingClone", WebbingClone.position.y = tempD, WebbingClone.scale.y = scene, WebbingClone.rotation.tempz = O - Math.PI / 2, WebbingClone.visible = !0, E.add(WebbingClone)), scene = (P = scene / Math.sin(Math.PI - W) * Math.sin(W - S)) / Math.sin(Math.PI - S - W) * Math.sin(W);
    var isSceneLoaded, tempD = 0,
        currentCamera = .66,
        W = Math.abs(tempT) + Math.PI / 2,
        S = Math.PI / 2 + Math.PI / 180 * 33.3,
        scene = tempP / Math.sin(S),
        isRendererReady = y,
        viewportElement = tempB,
        perspectiveCamera = Math.sqrt(Math.pow(camera, 2) - Math.pow(tempP, 2));
    for (tempB; tempD < viewportElement;)(WebbingClone = r.getObjectByName("webbing").clone()).name = "WebbingClone", WebbingClone.position.y = tempD, WebbingClone.scale.y = scene, tempD + perspectiveCamera + Math.sqrt(Math.pow(scene, 2) - Math.pow(tempP, 2)) < isRendererReady ? WebbingClone.rotation.tempz = -S : (isSceneLoaded = isRendererReady - perspectiveCamera - tempD, WebbingClone.rotation.tempz = THREE.Math.degToRad(-90) - Math.atan(isSceneLoaded / p), WebbingClone.scale.y = Math.sqrt(Math.pow(p, 2) + Math.pow(x, 2)), D += 100), WebbingClone.visible = !0, M.add(WebbingClone), D += 2 * Math.sqrt(Math.pow(scene, 2) - Math.pow(p, 2)), (WebbingClone = r.getObjectByName("webbing").clone()).name = "WebbingClone", (WebbingClone.position.y = D) < H ? (WebbingClone.scale.y = scene, WebbingClone.rotation.z = THREE.Math.degToRad(180) + S) : D < H + 5 && (x = (WebbingClone.position.y = H) - D + Math.sqrt(Math.pow(scene, 2) - Math.pow(p, 2)), WebbingClone.rotation.z = 0 < x ? -Math.atan(p / isSceneLoaded) : -THREE.Math.degToRad(180) - Math.atan(tempP / isSceneLoaded), WebbingClone.scale.y = Math.sqrt(Math.pow(tempP, 2) + Math.pow(isSceneLoaded, 2))), WebbingClone.visible = !0, orbitControls.add(WebbingClone);
    return dimensionsArray
}

function ui(applyToControllers) {
    return Math.atan(applyToControllers / 12)
}

function Ti(applyToControllers, setElementId) {
    return applyToControllers * setElementId / 12
}

function yi(applyToControllers, setElementId, setElementClass) {
    setElementClass = setElementId / 2 + Math.abs(setElementClass);
    return setElementClass * applyToControllers / 12 / (setElementId - setElementClass) * 12
}

function bi(applyToControllers, setElementId = 0) {
    var setElementClass = Math.floor(applyToControllers),
        applyToControllers = 12 * (Math.abs(applyToControllers) - Math.abs(setElementClass));
    let setElementHidden = Math.floor(applyToControllers);
    var i = applyToControllers - setElementHidden;
    let dimensionsArray;
    if (0 < i) switch (Math.round(4 * i)) {
        case 0:
            dimensionsArray = 0;
            break;
        case 1:
            dimensionsArray = "1/4";
            break;
        case 2:
            dimensionsArray = "1/2";
            break;
        case 3:
            dimensionsArray = "3/4";
            break;
        case 4:
            dimensionsArray = 1;
            break;
        default:
            console.error("error rounding to fraction: " + i)
    }
    1 == dimensionsArray && (setElementHidden += dimensionsArray, dimensionsArray = 0);
    let r = "";
    return setElementClass && (r += setElementClass.toString() + "' "), setElementHidden && (r += setElementHidden.toString()), dimensionsArray && (r += "-" + dimensionsArray), (setElementHidden || dimensionsArray) && (r += '"'), r = "" == r ? "0'" : r
}

function fi(applyToControllers, setElementId) {
    var setElementClass;
    return "boolean" == typeof(setElementId = void 0 === setElementId ? !0 : setElementId) && setElementId ? Math.round(.3048 * applyToControllers) : 0 < setElementId ? Math.round(.3048 * applyToControllers * 10 ** setElementId) / 10 ** setElementId : setElementId < 0 ? (decimalLocation = (setElementClass = .3048 * applyToControllers).toString().indexOf(".")) >= Math.abs(setElementId) - 1 ? Math.round(setElementClass) : parseFloat(setElementClass.toString().substring(0, Math.abs(setElementId))) : .3048 * applyToControllers
}

function wi(setElementId) {
    if (setElementId) {
        var setElementClass = ma.coreBuildingDimensions(),
            setElementHidden = (ma.buildingWithLeantoDimensions(), ma.buildingWithPorchesDimensions());
        setElementHidden.northEdge, setElementClass.northEdge, setElementClass.westEdge;
        let applyToControllers = setElementHidden.northEdge - setElementClass.northEdge;
        return vi({
            name: "widthMainBuilding",
            arrowType: "groundArrow",
            arrowLength: ma.width,
            stemLength: applyToControllers + 3,
            posZ: setElementHidden.northEdge + 3,
            autoOrient: !1
        }), applyToControllers = setElementHidden.northEdge - setElementClass.northEdge, setElementHidden.width > setElementClass.width ? vi({
            name: "widthOverallBuilding",
            arrowType: "groundArrow",
            arrowLength: setElementHidden.width,
            stemLength: applyToControllers + 6,
            posX: setElementHidden.center.isSceneLoaded,
            posZ: setElementHidden.northEdge + 6,
            ...ma.leanTo2 ? {
                extendLeft: ma.leanTo2CutR
            } : {},
            ...ma.leanTo4 ? {
                extendRight: ma.leanTo4CutL
            } : {},
            ...setElementHidden.width <= setElementClass.width ? {
                visible: !1
            } : {},
            autoOrient: !1
        }) : tempI.getObjectByName("widthOverallBuilding") && (tempI.getObjectByName("widthOverallBuilding").visible = !1), applyToControllers = setElementHidden.westEdge - setElementClass.westEdge, vi({
            name: "depthMainBuilding",
            arrowType: "groundArrow",
            arrowLength: ma.depth,
            stemLength: applyToControllers + 3,
            posX: setElementHidden.westEdge + 3,
            rotY: 90,
            autoOrient: !1
        }), applyToControllers = setElementHidden.westEdge - setElementClass.westEdge, setElementHidden.depth > setElementClass.depth ? vi({
            name: "depthOverallBuilding",
            arrowType: "groundArrow",
            arrowLength: setElementHidden.depth,
            stemLength: applyToControllers + 6,
            posX: setElementHidden.westEdge + 6,
            posZ: setElementHidden.center.tempz,
            rotY: 90,
            autoOrient: !1
        }) : tempI.getObjectByName("depthOverallBuilding") && (tempI.getObjectByName("depthOverallBuilding").visible = !1), "Single Slope" === ma.roofType ? (applyToControllers = setElementHidden.westEdge - setElementClass.westEdge, vi({
            name: "peakHeight",
            arrowType: "heightArrow",
            arrowLength: ma.peakHeight(),
            stemLength: applyToControllers + 3,
            ...0 <= ma.roofPitch ? {
                stemLength: applyToControllers + 3
            } : {
                stemLength: applyToControllers + ma.width + 3
            },
            posX: setElementHidden.westEdge + 3,
            posY: ma.peakHeight() / 2,
            posZ: setElementClass.northEdge
        })) : (applyToControllers = setElementHidden.westEdge - setElementClass.westEdge + ma.width / 2, "Asymmetrical" == ma.roofType && (applyToControllers -= ma.asymmetrical), vi({
            name: "peakHeight",
            arrowType: "heightArrow",
            arrowLength: ma.peakHeight(),
            stemLength: applyToControllers + 3,
            posX: setElementHidden.westEdge + 3,
            posY: ma.peakHeight() / 2,
            posZ: setElementClass.northEdge
        })), applyToControllers = Math.abs(setElementHidden.eastEdge) - Math.abs(setElementClass.eastEdge), vi({
            name: "wallHeight",
            arrowType: "heightArrow",
            arrowLength: ma.height,
            stemLength: applyToControllers + 3,
            posX: setElementHidden.eastEdge - 3,
            posY: ma.height / 2,
            posZ: setElementClass.northEdge,
            rotY: 180
        }), applyToControllers = 3, vi({
            name: "baySpacingDepth",
            arrowType: "groundArrow",
            arrowLength: ma.depth / (pa.length - 1),
            stemLength: applyToControllers + 3,
            posX: setElementClass.eastEdge + applyToControllers + .5 + 3,
            posY: .5,
            posZ: (pa[0] + pa[1]) / 2,
            rotY: 90,
            autoOrient: !1
        }), void(tempI.visible = setElementId)
    }
    tempI.visible = setElementId, shouldAutoRotate = !0
}

function vi(applyToControllers) {
    let setElementId, setElementClass = (void 0 === (setElementId = (applyToControllers.hasOwnProperty("parent") ? applyToControllers.parent : tempI).getObjectByName(applyToControllers.name)) && ((setElementId = tempHA.getObjectByName(applyToControllers.arrowType).clone()).name = applyToControllers.name, (applyToControllers.hasOwnProperty("parent") ? applyToControllers.parent : tempI).add(setElementId)), setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.length] = applyToControllers.arrowLength - 1, applyToControllers.hasOwnProperty("stemLength") && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.offset] = applyToControllers.stemLength - 1), applyToControllers.hasOwnProperty("extendLeft") && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.extendLeft] = applyToControllers.extendLeft), applyToControllers.hasOwnProperty("extendLeftUp") && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.extendLeftUp] = applyToControllers.extendLeftUp), applyToControllers.hasOwnProperty("extendRight") && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.extendRight] = applyToControllers.extendRight), applyToControllers.hasOwnProperty("posX") && (setElementId.position.isSceneLoaded = applyToControllers.posX), applyToControllers.hasOwnProperty("posY") && (setElementId.position.y = applyToControllers.posY), applyToControllers.hasOwnProperty("posZ") && (setElementId.position.tempz = applyToControllers.posZ), applyToControllers.hasOwnProperty("rotY") && (setElementId.rotation.y = THREE.Math.degToRad(applyToControllers.rotY)), 5),
        setElementHidden = (applyToControllers.hasOwnProperty("textSize") && (setElementClass = applyToControllers.textSize), applyToControllers.hasOwnProperty("textGap") && (setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.textGap] = textAreaWidth), !0),
        i = !1;
    (setElementHidden = applyToControllers.hasOwnProperty("autoOrient") ? applyToControllers.autoOrient : setElementHidden) || "groundArrow" != applyToControllers.arrowType || (i = !0), Ei(applyToControllers.arrowLength, setElementId, setElementHidden, i, setElementClass), applyToControllers.hasOwnProperty("visible") ? setElementId.visible = applyToControllers.visible : setElementId.visible = !0
}

function Ei(i, dimensionsArray, r, ColorOption, renderer) {
    "number" == typeof i ? i = bi(i) : "boolean" == typeof i && (i = i ? "true" : "false"), (new THREE.FontLoader).load(A + "fonts/helvetiker_regular.typeface.json", function(applyToControllers) {
        applyToControllers = new THREE.TextGeometry(i, {
            font: applyToControllers,
            size: .35 * renderer,
            height: 0,
            curveSegments: 2,
            bevelEnabled: !1
        });
        applyToControllers.center(), applyToControllers.applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, .05));
        let setElementId = dimensionsArray.getObjectByName("text");
        void 0 === setElementId ? ((setElementHidden = new THREE.MeshBasicMaterial({
            color: 10748284
        })).side = THREE.FrontSide, setElementHidden.polygonOffset = !0, setElementHidden.polygonOffsetFactor = -4, (setElementId = new THREE.Mesh(applyToControllers, setElementHidden)).name = "text", ColorOption && (setElementId.rotation.isSceneLoaded = THREE.Math.degToRad(-90)), dimensionsArray.add(setElementId), setElementHidden = new THREE.PlaneGeometry(1, 1), setElementClass = new THREE.MeshBasicMaterial({
            color: 15658734
        }), setElementHidden.applyMatrix((new THREE.Matrix4).makeTranslation(0, 0, .04)), setElementClass.side = THREE.FrontSide, setElementClass.polygonOffset = !0, setElementClass.polygonOffsetFactor = -2, (setElementHidden = new THREE.Mesh(setElementHidden, setElementClass)).name = "background", setElementId.add(setElementHidden), r && (setElementId.onBeforeRender = function() {
            setElementId.lookAt(new THREE.Vector3(currentCamera.position.isSceneLoaded, currentCamera.position.y, currentCamera.position.tempz))
        })) : (setElementId.geometry.dispose(), setElementId.geometry = applyToControllers);
        var setElementClass = setElementId.geometry.boundingBox.max.isSceneLoaded - applyToControllers.boundingBox.min.isSceneLoaded,
            setElementHidden = setElementId.geometry.boundingBox.max.y - applyToControllers.boundingBox.min.y;
        setElementId.getObjectByName("background").scale.set(setElementClass + .2 * renderer, setElementHidden + .2 * renderer, 1)
    })
}

function Mi() {
    let applyToControllers = document.getElementById("viewControls");
    if (applyToControllers || ((applyToControllers = document.createElement("div")).id = "viewControls", applyToControllers.style.cssText = "display: block; position: absolute; pointerEvents: auto; top: var(--bannerHeight); left: 0; box-sizing: border-box; width: 100%; tempz-index: 1; padding: 3px; text-align: left;", document.getElementById("info").appendChild(applyToControllers)), null == applyToControllers.querySelector("#cameraSelector"))
        for (var setElementId = document.createElement("select"), setElementClass = (setElementId.id = "cameraSelector", setElementId.style.cssText = "pointerEvents: auto; width: auto;", setElementId.onchange = function() {
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
                        Ro("3dView")
                }
            }, applyToControllers.appendChild(setElementId), ["Perspective", "Top", "Front", "Back", "Left", "Right"]), setElementHidden = 0; setElementHidden < setElementClass.length; setElementHidden++) {
            var i = document.createElement("option");
            i.value = setElementClass[setElementHidden], i.text = setElementClass[setElementHidden], setElementId.appendChild(i)
        }
    var dimensionsArray;
    null == applyToControllers.querySelector("#downloadBtn") && ((dimensionsArray = document.createElement("button")).type = "button", dimensionsArray.textContent = " Download ", dimensionsArray.id = "downloadBtn", dimensionsArray.style.cssText = "float: right;", dimensionsArray.onclick = function() {
        let setElementId = Eo({
            width: 5760,
            height: 3240,
            compression: .75
        });
        var applyToControllers = new Date;
        let setElementClass;
        setElementClass = applyToControllers.getFullYear() + "-", setElementClass = (setElementClass = (setElementClass = (setElementClass = (setElementClass += Di(applyToControllers.getMonth() + 1) + "-") + Di(applyToControllers.getDate()) + " ") + Di(applyToControllers.getHours()) + ".") + Di(applyToControllers.getMinutes()) + ".") + Di(applyToControllers.getSeconds()), setTimeout(function() {
            var applyToControllers = document.createElement("setElementClass");
            applyToControllers.setAttribute("href", setElementId), applyToControllers.setAttribute("download", "3D Building Rendering - " + setElementClass + ".jpg"), document.body.appendChild(applyToControllers), applyToControllers.click(), document.body.removeChild(applyToControllers)
        }, 50), event.stopPropagation()
    }, applyToControllers.appendChild(dimensionsArray))
}

function Di(applyToControllers) {
    return applyToControllers = applyToControllers < 10 ? "0" + applyToControllers : applyToControllers
}

function Pi(applyToControllers, setElementId) {
    bootbox.hideAll(), bootbox.alert({
        title: applyToControllers,
        message: setElementId,
        size: "medium",
        onEscape: !0,
        backdrop: !0,
        centerVertical: !0
    })
}

function Wi() {
    try {
        return window.self !== window.top
    } catch (applyToControllers) {
        return !0
    }
}

function Si() {
    if (tempN) {
        let setElementClass = 6250335,
            setElementHidden = 90;
        isGeometryActive && (setElementClass = 6250335, setElementHidden = 35), mainScene.traverse(function(setElementId) {
            if (setElementId instanceof THREE.Mesh && setElementId.material) {
                setElementId.material.hasOwnProperty("normalMap") && null !== setElementId.material.normalMap && setElementId.material.normalMap.hasOwnProperty("image") && void 0 !== setElementId.material.normalMap.image && setElementId.material.normalMap.image.src.endsWith("images/building/building-normal.jpg") && (setElementId.material.normalMap = tempPE.clone(), setElementId.material.normalMap.needsUpdate = !0, setElementId.material.specular.setHex(setElementClass), setElementId.material.shininess = setElementHidden);
                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers].hasOwnProperty("normalMap") && null !== setElementId.material[applyToControllers].normalMap && setElementId.material[applyToControllers].normalMap.hasOwnProperty("image") && void 0 !== setElementId.material[applyToControllers].normalMap.image && setElementId.material[applyToControllers].normalMap.image.src.endsWith("images/building/building-normal.jpg") && (setElementId.material[applyToControllers].normalMap = tempPE.clone(), setElementId.material[applyToControllers].normalMap.needsUpdate = !0, setElementId.material[applyToControllers].specular.setHex(setElementClass), setElementId.material[applyToControllers].shininess = setElementHidden)
            }
        })
    }
    tempN = !1
}

function Oi(i) {
    let dimensionsArray = i.name.replace("-clone", ""),
        r, ColorOption, renderer;
    if (dimensionsArray.startsWith("scale-")) dimensionsArray = dimensionsArray.replace("scale-", ""), ColorOption = 3, renderer = 2, r = {
        name: i.name,
        position: i.position.isSceneLoaded + ColorOption + "," + i.position.y + "," + (i.position.tempz + renderer),
        rotation: i.rotation.isSceneLoaded + "," + i.rotation.y + "," + i.rotation.tempz
    }, c(dimensionsArray, r);
    else {
        ColorOption = 3, renderer = 2;
        var controls = new THREE.Vector3;
        i.getWorldDirection(controls);
        let applyToControllers = "tempN";
        controls.isSceneLoaded < .1 && -.1 < controls.isSceneLoaded && controls.tempz < .9 && (applyToControllers = "S", ColorOption = -ColorOption, renderer = -renderer), controls.isSceneLoaded < .9 && controls.tempz < .1 && -.1 < controls.tempz && (applyToControllers = "orthographicCamera", ColorOption = -2, renderer = 3), .9 < controls.isSceneLoaded && controls.tempz < .1 && -.1 < controls.tempz && (applyToControllers = "W", ColorOption = 2, renderer = -3);
        let setElementId, setElementClass, setElementHidden;
        if (setElementHidden = i.name.startsWith("walk") || i.name.startsWith("interiorDoor") && -1 == i.scale.isSceneLoaded ? "-1" : 1, i.name.startsWith("window")) {
            i.morphTargetDictionary.hasOwnProperty("hideShutters") && (setElementClass = 1 != i.morphTargetInfluences[i.morphTargetDictionary.hideShutters]);
            for (let applyToControllers = 0; applyToControllers < i.material.length; applyToControllers++) "WindowGrid" === i.material[applyToControllers].name && (setElementId = !0 === i.material[applyToControllers].visible)
        }
        r = {
            name: i.name,
            position: i.position.isSceneLoaded + ColorOption + "," + i.position.y + "," + (i.position.tempz + renderer),
            rotation: i.rotation.isSceneLoaded + "," + i.rotation.y + "," + i.rotation.tempz,
            scale: i.userData.scale.isSceneLoaded + "," + i.userData.scale.y + "," + i.userData.scale.tempz,
            doorSwing: setElementHidden,
            grid: setElementId,
            shutters: setElementClass,
            select: !0
        }, d(dimensionsArray, r)
    }
}

function Bi() {
    6 == (Oe += 1) ? (Oe = 0, Mi()) : setTimeout(function() {
        0 < Oe && --Oe
    }, 2500)
}

function xi(setElementId) {
    var setElementClass = setElementId.userData.scale.isSceneLoaded;
    setElementId.userData.scale.y, setElementId.userData.scale.tempz;
    for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) setElementId.material[applyToControllers].normalMap && (setElementId.name.startsWith("mansardHip") ? ("BuildingRoof" == setElementId.material[applyToControllers].name && setElementId.material[applyToControllers].normalMap.repeat.set(2 * tempJ, 1), "BuildingRoofWidth" == setElementId.material[applyToControllers].name && setElementId.material[applyToControllers].normalMap.repeat.set((setElementClass - 4) * tempJ, 1)) : setElementId.material[applyToControllers].normalMap.repeat.set(setElementClass * tempJ, 1))
}
he || Va(), document.addEventListener("DOMContentLoaded", function() {
    let setElementId = document.createElement("style");
    document.body.appendChild(setElementId);
    let setElementClass;
    colorOptions.forEach(function(applyToControllers) {
        setElementClass = 360 < applyToControllers.r + applyToControllers.tempG2 + applyToControllers.tempB ? "black" : "white", setElementId.innerHTML += 'li.folder select option[value="' + applyToControllers.name + '"] { background-color: ' + applyToControllers.hex + "; background-image: url(" + A + "images/color.gif.php?c=" + applyToControllers.hex.substr(1) + "); color: " + setElementClass + "; }", setElementId.innerHTML += "li.folder select." + applyToControllers.id + " { background-color: " + applyToControllers.hex + "; background-image: url(" + A + "images/color.gif.php?c=" + applyToControllers.hex.substr(1) + "); color: " + setElementClass + "; }"
    })
}, !1), THREE.DefaultLoadingManager.onStart = function(applyToControllers, setElementId, setElementClass) {
    var setElementHidden = !1;
    (setElementHidden = "models/scale-" === applyToControllers.substring(0, 13) ? !0 : setElementHidden) && $("#modal-loading").modal("show")
}, THREE.DefaultLoadingManager.onLoad = function() {
    he && Xa(), $("#modal-loading").modal("hide"), kt || (kt = !0, si(), Si(), O(), io(), S(), ao(), oo(), to(), O(), ni()), shouldAutoRotate = !0
}, THREE.DefaultLoadingManager.onProgress = function(applyToControllers, setElementId, setElementClass) {}, THREE.DefaultLoadingManager.onError = function(applyToControllers) {
    console.log("There was an error loading " + applyToControllers)
}, $(document).ready(function() {
    window.addEventListener("beforeprint", function(applyToControllers) {
        Nt ? (Eo({
            width: 1920,
            height: 800,
            compression: .55
        }), $("#printImage").html('<img src="' + Lt + '" />')) : (null == document.getElementById("printImage").getElementsByTagName("img")[0] && (Eo({
            width: 1920,
            height: 800,
            compression: .55
        }), $("#printImage").html('<img src="' + Lt + '" />')), Nt = !0), Do()
    })
}), $(document).ready(function() {
    $(".modal").on("shown", function() {
        $(function() {
            $(this).find("form :input:visible:enabled:first").focus()
        })
    }), $("form").each(function() {
        $(this).validate()
    }), jQuery.validator.addMethod("multiemail", function(applyToControllers, setElementId) {
        if (this.optional(setElementId)) return !0;
        var setElementClass = applyToControllers.split(/[;,]+/);
        valid = !0;
        for (var setElementHidden = 0; setElementHidden < setElementClass.length; setElementHidden++) applyToControllers = setElementClass[setElementHidden], valid = valid && jQuery.validator.methods.email.call(this, $.trim(applyToControllers), setElementId);
        return valid
    }, jQuery.validator.messages.email)
}), $(document).ready(function() {
    $("form").submit(function(dimensionsArray) {
        if ($(this).valid()) {
            dimensionsArray.preventDefault();
            let setElementHidden = $(this).find("button.btn.btn-primary");
            isSceneLoaded || setElementHidden.prop("disabled", !0);
            var r = $(this).find("button.btn-primary i:first"),
                ColorOption = $(this).find("i.status-icon"),
                renderer = (ColorOption.attr("class", "status fas fa-cog fa-spin"), r.hide(), ColorOption.show(), {}),
                controls = {},
                y = {},
                tempB = {},
                tempF2 = {},
                tempW = {},
                tempV2 = 0,
                orthographicCamera = 0,
                orbitControls = 0,
                tempD = 0,
                c = (mainScene.traverse(function(setElementId) {
                    var applyToControllers, setElementClass, setElementHidden, i = !1,
                        dimensionsArray = !1,
                        r = !1,
                        ColorOption = !1,
                        renderer = !1,
                        controls = !1,
                        c = !1,
                        d = !1,
                        tempP = !1,
                        camera = {},
                        tempG2 = {},
                        tempU2 = {},
                        tempT = {};
                    if (setElementId instanceof THREE.Mesh || "Group" === setElementId.type) {
                        if ((setElementId.name.startsWith("mansard") || setElementId.name.startsWith("walk") || setElementId.name.startsWith("window") || setElementId.name.startsWith("garage")) && setElementId.name.endsWith("-clone")) {
                            if (i = parseFloat(setElementId.position.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.position.y.toFixed(2)) + "," + parseFloat(setElementId.position.tempz.toFixed(2)), dimensionsArray = parseFloat(setElementId.rotation.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.rotation.y.toFixed(2)) + "," + parseFloat(setElementId.rotation.tempz.toFixed(2)), applyToControllers = parseFloat(setElementId.userData.scale.isSceneLoaded), setElementClass = parseFloat(setElementId.userData.scale.y), setElementHidden = parseFloat(setElementId.userData.scale.tempz), r = parseFloat(applyToControllers.toFixed(2)) + "," + parseFloat(setElementClass.toFixed(2)) + "," + parseFloat(setElementHidden.toFixed(2)), setElementId.scale.isSceneLoaded < 0 && (c = -1), setElementId.name.startsWith("window"))
                                for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "WindowGrid" === setElementId.material[applyToControllers].name && (d = setElementId.material[applyToControllers].visible), "Shutters" === setElementId.material[applyToControllers].name && (tempP = setElementId.material[applyToControllers].visible);
                            camera.name = setElementId.name, camera.position = i, camera.rotation = dimensionsArray, camera.scale = r, camera.doorSwing = c, camera.grid = d, camera.shutters = tempP, tempB[orthographicCamera] = camera, orthographicCamera++, c = r = dimensionsArray = i = !1
                        }
                        if (setElementId.name.startsWith("scale") && setElementId.name.endsWith("-clone") && (i = parseFloat(setElementId.position.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.position.y.toFixed(2)) + "," + parseFloat(setElementId.position.tempz.toFixed(2)), dimensionsArray = parseFloat(setElementId.rotation.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.rotation.y.toFixed(2)) + "," + parseFloat(setElementId.rotation.tempz.toFixed(2)), tempU2.name = setElementId.name, tempU2.position = i, tempU2.rotation = dimensionsArray, tempF2[orbitControls] = tempU2, orbitControls++, dimensionsArray = i = !1), setElementId.name.startsWith("interior") && setElementId.name.endsWith("-clone") && (i = parseFloat(setElementId.position.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.position.y.toFixed(2)) + "," + parseFloat(setElementId.position.tempz.toFixed(2)), dimensionsArray = parseFloat(setElementId.rotation.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.rotation.y.toFixed(2)) + "," + parseFloat(setElementId.rotation.tempz.toFixed(2)), r = setElementId.userData.hasOwnProperty("width") && setElementId.userData.hasOwnProperty("height") ? parseFloat(setElementId.userData.width.toFixed(2)) + "," + parseFloat(setElementId.userData.height.toFixed(2)) + ",1" : setElementId.userData.hasOwnProperty("doorSwing") && -1 == setElementId.userData.doorSwing ? "-1,1,1" : "1,1,1", tempT.name = setElementId.name, tempT.position = i, tempT.rotation = dimensionsArray, tempT.scale = r, setElementId.userData.hasOwnProperty("doorSwing") && (tempT.doorSwing = c), setElementId.userData.hasOwnProperty("material") && (tempT.material = setElementId.userData.material), tempW[tempD] = tempT, tempD++, c = r = dimensionsArray = i = !1), setElementId.name.startsWith("porch") && setElementId.name.endsWith("-clone") && setElementId.visible) {
                            i = parseFloat(setElementId.position.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.position.y.toFixed(2)) + "," + parseFloat(setElementId.position.tempz.toFixed(2)), dimensionsArray = parseFloat(setElementId.rotation.isSceneLoaded.toFixed(2)) + "," + parseFloat(setElementId.rotation.y.toFixed(2)) + "," + parseFloat(setElementId.rotation.tempz.toFixed(2)), camera = setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.porchDepth] + 10, tempT = 12 * (tempU2 = setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.slope]) / camera + 3.5, c = setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.ceilingHeight] + 10 + 4 / 12, setElementHidden = setElementClass = applyToControllers = 0, setElementId.name.startsWith("porchWrap") ? (applyToControllers = Math.round(100 * parseFloat(setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.width])) / 100 + 10, setElementClass = Math.round(100 * parseFloat(setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height])) / 100 + 13.5 + tempU2, setElementHidden = Math.round(100 * parseFloat(setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.depth])) / 100 + 10) : setElementId.name.startsWith("porch") && (applyToControllers = Math.round(100 * parseFloat(setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.width])) / 100 + 10, setElementClass = Math.round(100 * parseFloat(setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.height])) / 100 + 13.5 + tempU2), r = parseFloat(applyToControllers.toFixed(2)) + "," + parseFloat(setElementClass.toFixed(2)) + "," + parseFloat(setElementHidden.toFixed(2)), tempU2 = 12 * setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.Overhang], ColorOption = .5 < setElementId.morphTargetInfluences[setElementId.morphTargetDictionary.miters];
                            for (let applyToControllers = 0; applyToControllers < setElementId.material.length; applyToControllers++) "PorchPosts" === setElementId.material[applyToControllers].name && (renderer = setElementId.material[applyToControllers].color.getHex() != Kt.getHex() && setElementId.material[applyToControllers].color.getHex != Jt.getHex()), "PorchPostsMetal" === setElementId.material[applyToControllers].name && (controls = setElementId.material[applyToControllers].visible);
                            tempG2.name = setElementId.name, tempG2.position = i, tempG2.rotation = dimensionsArray, tempG2.scale = r, tempG2.porchDepth = camera, tempG2.porchPitch = tempT, tempG2.ceilingHeight = c, tempG2.porchOverhang = tempU2, tempG2.postMiter = ColorOption, tempG2.postWrap = renderer, tempG2.posts = controls, tempG2.concrete = setElementId.userData.concrete, y[tempV2] = tempG2, tempV2++
                        }
                    }
                }), currentCamera.aspect),
                d = rendererInstance.getSize(new THREE.Vector2),
                tempP = (currentCamera.aspect = 800 / 450, _.setSize(800, 450, !1), P.updateProjectionMatrix(), _.render(sa, P, null, !1), Lt = _.domElement.toDataURL("image/jpeg", .4), currentCamera.aspect = c, rendererInstance.setSize(d, !1), currentCamera.updateProjectionMatrix(), rendererInstance.render(mainScene, currentCamera), ""),
                c = Fo();
            let setElementId, i;
            if ("form-quote" === $(this).attr("name")) {
                if (i = $("#request-quote input[name=action]").val(), setElementId = {
                        firstname: $("#request-quote input[name=firstname]").val(),
                        lastname: $("#request-quote input[name=lastname]").val(),
                        email: $("#request-quote input[name=email]").val(),
                        phone: $("#request-quote input[name=phone]").val(),
                        address: $("#request-quote input[name=address]").val(),
                        city: $("#request-quote input[name=city]").val(),
                        notes: $("#request-quote textarea[name=quoteNotes]").val(),
                        action: $("#request-quote input[name=action]").val()
                    }, $("#request-quote input[name=state]").length && (setElementId.state = $("#request-quote input[name=state]").val()), $("#request-quote select[name=state]").length && (setElementId.state = $("#request-quote select[name=state]").val()), $("#request-quote input[name=zip]").length && (setElementId.zip = $("#request-quote input[name=zip]").val()), $("#request-quote input[name=province]").length && (setElementId.province = $("#request-quote input[name=province]").val()), $("#request-quote input[name=postalCode]").length && (setElementId.postalCode = $("#request-quote input[name=postalCode]").val()), $("#request-quote input[name=buildAddress]").length && (setElementId.buildAddress = $("#request-quote input[name=buildAddress]").val()), $("#request-quote input[name=buildCity]").length && (setElementId.buildCity = $("#request-quote input[name=buildCity]").val()), $("#request-quote input[name=buildState]").length && (setElementId.buildState = $("#request-quote input[name=buildState]").val()), $("#request-quote input[name=buildZip]").length && (setElementId.buildZip = $("#request-quote input[name=buildZip]").val()), $("#request-quote input[name=buildProvince]").length && (setElementId.buildProvince = $("#request-quote input[name=buildProvince]").val()), $("#request-quote input[name=buildPostalCode]").length && (setElementId.buildPostalCode = $("#request-quote input[name=buildPostalCode]").val()), $("#request-quote input[name=builder]").length && (setElementId.builder = $("#request-quote input[name=builder]").val()), $("#request-quote input[name=use]").length && (setElementId.use = $("#request-quote input[name=use]").val()), $("#request-quote input[name=type]").length && (setElementId.type = $("#request-quote input[name=type]").val()), $("#request-quote input[name=county]").length && (setElementId.county = $("#request-quote input[name=county]").val()), $("#request-quote input[name=squarefootage]").length && (setElementId.squarefootage = $("#request-quote input[name=squarefootage]").val()), $("#request-quote input[name=schedule]").length && (setElementId.schedule = $("#request-quote input[name=schedule]").val()), $("#request-quote input[name=site]").length && (setElementId.site = $("#request-quote input[name=site]").val()), $("#request-quote input[name=market]").length && (setElementId.market = $("#request-quote input[name=market]").val()), $("#request-quote select[name=pastcustomer]").length && (setElementId.pastcustomer = $("#request-quote input[name=pastcustomer]").val()), $("#request-quote input[name=contact]").length) {
                    let applyToControllers = !1;
                    1 == $("#request-estimate input[name=contact]").prop("checked") && (applyToControllers = "true"), setElementId.contact = applyToControllers
                }
                $("#request-quote input[name=customFormField1]").length && (setElementId.customFormField1 = $("#request-quote input[name=customFormField1]").val()), $("#request-quote select[name=customFormField1]").length && (setElementId.customFormField1 = $("#request-quote select[name=customFormField1]").val()), $("#request-quote input[name=customFormField2]").length && (setElementId.customFormField2 = $("#request-quote input[name=customFormField2]").val()), $("#request-quote select[name=customFormField2]").length && (setElementId.customFormField2 = $("#request-quote select[name=customFormField2]").val()), $("#request-quote input[name=customFormField3]").length && (setElementId.customFormField3 = $("#request-quote input[name=customFormField3]").val()), $("#request-quote select[name=customFormField3]").length && (setElementId.customFormField3 = $("#request-quote select[name=customFormField3]").val()), $("#request-quote input[name=customFormField4]").length && (setElementId.customFormField4 = $("#request-quote input[name=customFormField4]").val()), $("#request-quote select[name=customFormField4]").length && (setElementId.customFormField4 = $("#request-quote select[name=customFormField4]").val()), $("#request-quote input[name=customFormField5]").length && (setElementId.customFormField5 = $("#request-quote input[name=customFormField5]").val()), $("#request-quote select[name=customFormField5]").length && (setElementId.customFormField5 = $("#request-quote select[name=customFormField5]").val()), $("#request-quote input[name=customFormField6]").length && (setElementId.customFormField6 = $("#request-quote input[name=customFormField6]").val()), $("#request-quote select[name=customFormField6]").length && (setElementId.customFormField6 = $("#request-quote select[name=customFormField6]").val()), $("#request-quote input[name=customFormField7]").length && (setElementId.customFormField7 = $("#request-quote input[name=customFormField7]").val()), $("#request-quote select[name=customFormField7]").length && (setElementId.customFormField7 = $("#request-quote select[name=customFormField7]").val()), $("#request-quote input[name=customFormField8]").length && (setElementId.customFormField8 = $("#request-quote input[name=customFormField8]").val()), $("#request-quote select[name=customFormField8]").length && (setElementId.customFormField8 = $("#request-quote select[name=customFormField8]").val()), $("#request-quote input[name=customFormField9]").length && (setElementId.customFormField9 = $("#request-quote input[name=customFormField9]").val()), $("#request-quote select[name=customFormField9]").length && (setElementId.customFormField9 = $("#request-quote select[name=customFormField9]").val()), $("#request-quote input[name=customFormField10]").length && (setElementId.customFormField10 = $("#request-quote input[name=customFormField10]").val()), $("#request-quote select[name=customFormField10]").length && (setElementId.customFormField10 = $("#request-quote select[name=customFormField10]").val()), tempP = "Nice looking building you have there!  We have received your request. One of our building representatives will tempBE in touch soon."
            } else "form-share" === $(this).attr("name") ? (i = $("#request-share input[name=action]").val(), setElementId = {
                shareEmail: $("#request-share input[name=shareEmail]").val(),
                firstname: $("#request-share input[name=firstname]").val(),
                lastname: $("#request-share input[name=lastname]").val(),
                email: $("#request-share input[name=email]").val(),
                notes: $("#request-share textarea[name=shareNotes]").val(),
                action: $("#request-share input[name=action]").val()
            }, tempP = "Check out that building!<br> A link to view your creation has been shared.") : "form-save" === $(this).attr("name") && (i = $("#request-save input[name=action]").val(), setElementId = {
                email: $("#request-save input[name=saveEmail]").val(),
                notes: $("#request-save textarea[name=saveNotes]").val(),
                action: $("#request-save input[name=action]").val()
            }, tempP = "Nice creation!<br> A link to this building design has been emailed to you.");
            renderer.params = ma, renderer.porches = y, renderer.doorsWindows = tempB, renderer.scaleItems = tempF2, renderer.interiorItems = tempW, controls.id = c, controls.userData = setElementId, controls.buildingData = renderer, controls.image = Lt;
            let applyToControllers = JSON.stringify(controls),
                setElementClass = camera ? "?ref=" + camera : "";
            $.ajax({
                type: "POST",
                url: "save.php" + setElementClass,
                data: applyToControllers,
                dataType: "json",
                encode: !0
            }).done(function(applyToControllers) {
                if (console.log(applyToControllers), !0 === applyToControllers.success) $(".modal").modal("hide"), applyToControllers.hasOwnProperty("redirectURL") ? window.location.href = applyToControllers.redirectURL : applyToControllers.hasOwnProperty("iframeURL") ? ($("#modal-success .modal-body").html("<iframe width='98%' height='300' src='" + applyToControllers.iframeURL + "' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write'></iframe>"), $("#modal-success").modal("show")) : ($("#modal-success .modal-body").html(tempP), $("#modal-success").modal("show"), setElementHidden.prop("disabled", !1), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                    event: i
                }), ColorOption.attr("class", "status-icon fas fa-check"), setTimeout(function() {
                    ColorOption.delay(5e3).hide(), r.delay(5e3).show()
                }, 5e3));
                else {
                    var setElementId, setElementClass = "";
                    for (setElementId of Object.keys(applyToControllers.errors)) setElementClass += applyToControllers.errors[setElementId];
                    $("tempP.fail").html(setElementClass), $("tempP.fail").slideDown(500), $("tempP.fail").delay(5e3).slideUp(1750), setElementHidden.prop("disabled", !1), ColorOption.attr("class", "status fas fa-exclamation"), ColorOption.attr("class", "status-icon fas fa-times"), setTimeout(function() {
                        ColorOption.delay(5e3).hide(), r.delay(5e3).show()
                    }, 5e3)
                }
            }).fail(function(applyToControllers, setElementId, setElementClass) {
                console.log(applyToControllers);
                applyToControllers = "There was setElementClass processing error, please try again. " + applyToControllers.status;
                $("tempP.fail").html(applyToControllers), $("tempP.fail").slideDown(500), $("tempP.fail").delay(5e3).slideUp(1750), setElementHidden.prop("disabled", !1), ColorOption.attr("class", "status fas fa-exclamation"), ColorOption.attr("class", "status-icon fas fa-times"), setTimeout(function() {
                    ColorOption.delay(5e3).hide(), r.delay(5e3).show()
                }, 5e3)
            }), dimensionsArray.preventDefault()
        }
    })
}), $("#popup #updateItemButton").click(function() {
    No(!0)
}), $("#popup #wrap").change(function() {
    No()
}), $("#popup input").change(function() {
    No(), Lo()
}), $("#popup select").change(function() {
    No(), Lo()
}), $("#doorSwingButton").click(function() {
    y.scale.isSceneLoaded = -y.scale.isSceneLoaded, 0 < y.scale.isSceneLoaded ? y.userData.doorSwing = 1 : y.userData.doorSwing = -1, shouldAutoRotate = !0
}), $("#copyButton").click(function() {
    Oi(y)
}), $("#rotateLeftButton").click(function() {
    y.userData.rotationMultiplyer += parseFloat(THREE.Math.degToRad(45).toFixed(3));
    var applyToControllers = parseFloat(y.userData.rotationMultiplyer);
    tempP = new TWEEN.Tween(y.rotation).to(new THREE.Vector3(0, applyToControllers, 0), 500).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
        shouldAutoRotate = !0
    }).start()
}), $("#rotateRightButton").click(function() {
    y.userData.rotationMultiplyer -= parseFloat(THREE.Math.degToRad(45).toFixed(3));
    var applyToControllers = parseFloat(y.userData.rotationMultiplyer);
    tempP = new TWEEN.Tween(y.rotation).to(new THREE.Vector3(0, applyToControllers, 0), 500).easing(TWEEN.Easing.Quartic.Out).onUpdate(applyToControllers => {
        shouldAutoRotate = !0
    }).start()
}), $("#deleteItemButton").click(function() {
    if ("porc" === y.name.substring(0, 4)) y.visible = !1, ma[y.name.replace("-clone", "")] = !1;
    else if ("scal" === y.name.substring(0, 4)) {
        if (y instanceof THREE.Group) {
            for (let applyToControllers = 0; applyToControllers < y.children.length; applyToControllers++) wo(y.children[applyToControllers]);
            y.parent.remove(y)
        } else wo(y);
        ma[y.name.replace("-clone", "")]--
    } else(y.name.startsWith("interior") ? (ma[y.name.replace("-clone", "") + "Qty"]--, bo(y), y.parent) : (ma[y.name.replace("-clone", "") + "Qty"]--, tempLA)).remove(y);
    Be = y, y = null, $("#popup").hide(), $("#line").hide(), shouldAutoRotate = !0
}), $("#closePopupWindowButton").click(function() {
    jo()
}), $("#helpButton").click(function() {
    ko()
}), $("#overlay, #help #closeButton").click(function() {
    Io()
}), THREE.Object3D.prototype.GdeepCloneMaterials = function() {
    for (var applyToControllers = this.clone(new THREE.Object3D, !1), setElementId = 0; setElementId < this.children.length; setElementId++) {
        var setElementClass = this.children[setElementId];
        setElementClass.GdeepCloneMaterials ? applyToControllers.add(setElementClass.GdeepCloneMaterials()) : applyToControllers.add(setElementClass.clone())
    }
    return applyToControllers
}, THREE.Mesh.prototype.GdeepCloneMaterials = function(applyToControllers, setElementId) {
    if (void 0 === applyToControllers) {
        var setElementClass;
        if (Array.isArray(this.material)) {
            var setElementHidden = [];
            for (let applyToControllers = 0; applyToControllers < this.material.length; applyToControllers++) setElementHidden.push(this.material[applyToControllers].clone());
            setElementClass = setElementHidden
        } else setElementClass = this.material.clone();
        applyToControllers = new THREE.Mesh(this.geometry, setElementClass)
    }
    return THREE.Object3D.prototype.GdeepCloneMaterials.call(this, applyToControllers, setElementId), applyToControllers
}, THREE.Object3D.prototype.deepClone = function(applyToControllers) {
    applyToControllers = this.clone(applyToControllers = void 0 === applyToControllers ? !0 : applyToControllers);
    return applyToControllers.traverse(function(setElementClass) {
        if (setElementClass.isMesh) {
            let setElementId;
            if (0 < setElementClass.material.length) {
                setElementId = [];
                for (let applyToControllers = 0; applyToControllers < setElementClass.material.length; applyToControllers++) setElementId[applyToControllers] = setElementClass.material[applyToControllers].clone(), setElementClass.material[applyToControllers].map && void 0 !== setElementClass.material[applyToControllers].map.image && (setElementId[applyToControllers].map = setElementClass.material[applyToControllers].map.clone(), setElementId[applyToControllers].map.needsUpdate = !0), setElementClass.material[applyToControllers].normalMap && void 0 !== setElementClass.material[applyToControllers].normalMap.image && (setElementId[applyToControllers].normalMap = setElementClass.material[applyToControllers].normalMap.clone(), setElementId[applyToControllers].normalMap.needsUpdate = !0)
            } else(setElementId = setElementClass.material.clone()).map && void 0 !== setElementClass.material.map.image && (setElementId.map = setElementClass.material.map.clone(), setElementId.map.needsUpdate = !0), setElementClass.material.normalMap && void 0 !== setElementClass.material.normalMap.image && (setElementId.normalMap = setElementClass.material.normalMap.clone(), setElementId.normalMap.needsUpdate = !0);
            for (var applyToControllers in setElementClass.material = setElementId, this.userData) this.userData.hasOwnProperty(applyToControllers) && (setElementClass.userData[applyToControllers] = this.userData[applyToControllers])
        }
    }), applyToControllers
}, $(document).ready(function() {
    $("#alert_top .close").click(function() {
        $("#alert_top").slideUp("slow")
    })
}), $(document).ready(function() {
    $("#resetButton").click(function() {
        bootbox.confirm({
            title: "Reset Building?",
            message: "Do you want to reset your building back to default settings? This cannot tempBE undone.",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Reset',
                    className: "btn-danger"
                }
            },
            callback: function(applyToControllers) {
                applyToControllers && location.reload()
            }
        })
    })
}), $(document).ready(function() {
    var applyToControllers;
    "" !== ma.settings.disclaimerButtonText && ((applyToControllers = document.createElement("div")).setAttribute("id", "disclaimer"), applyToControllers.textContent = ma.settings.disclaimerButtonText, "" !== ma.settings.disclaimerText && applyToControllers.setAttribute("class", "clickable"), document.body.appendChild(applyToControllers)), $("#disclaimer").click(function() {
        bootbox.alert({
            message: ma.settings.disclaimerText,
            centerVertical: !0,
            size: "small"
        })
    })
}), $("#request-quote input[name=contact]").click(function() {
    $("#ready-for-quote-questions").toggle($(this).prop("checked")), $("#modal-quote .modal-body").animate({
        scrollTop: $("#modal-quote .modal-body")[0].scrollHeight
    }, 1e3)
}), ma.hasOwnProperty("mapEnabled") && $("#mapButton").click(function() {
    ci()
}), $(document).ready(function() {
    $("#printButton").click(function() {
        Mo()
    }), $("#shareButton").click(function() {
        $("#modal-share").modal("show")
    }), $("#saveButton").click(function() {
        $("#modal-save").modal("show")
    }), $("#quoteButton").click(function() {
        $("#modal-quote").modal("show")
    }), $("#zoomIn").click(function() {
        var applyToControllers = orbitControls.minDistance,
            setElementId = orbitControls.target,
            setElementClass = mi(currentCamera.position, setElementId, .13);
        setElementId.distanceTo(setElementClass) > applyToControllers && currentCamera.position.set(setElementClass.isSceneLoaded, setElementClass.y, setElementClass.tempz), event.preventDefault(), shouldAutoRotate = !0
    }), $("#zoomOut").click(function() {
        var applyToControllers = orbitControls.maxDistance,
            setElementId = orbitControls.target,
            setElementClass = mi(currentCamera.position, setElementId, -.15);
        setElementId.distanceTo(setElementClass) < applyToControllers && currentCamera.position.set(setElementClass.isSceneLoaded, setElementClass.y, setElementClass.tempz), event.preventDefault(), shouldAutoRotate = !0
    }), $("#addPerson").click(function() {
        c("person"), event.preventDefault()
    }), $("#addTruck").click(function() {
        c("truck"), event.preventDefault()
    }), $("#addAirplane").click(function() {
        c("airplane"), event.preventDefault()
    }), $("#addDriveway").click(function() {
        c("driveway"), event.preventDefault()
    }), $("#navReset").click(function() {
        Wo(!0, 1e3, {
            isSceneLoaded: 1.25 * ma.width,
            y: ma.height + 0,
            tempz: 1.25 * ma.depth
        }, {
            isSceneLoaded: 0,
            y: ma.height / 2,
            tempz: 0
        }), $("#navInOut").text("Look Inside")
    }), $("#navInOut").click(function() {
        "Look Inside" === $("#navInOut").text() ? (orbitControls.target.set(0, ma.height / 2, 0), P.position.set(0, 5, 5), $("#navInOut").text("Go Outside")) : (M.target.set(0, ma.height / 2, 0), currentCamera.position.set(1.25 * ma.width, ma.height + 0, 1.25 * ma.depth), $("#navInOut").text("Look Inside"))
    }), $("#navStartOver").click(function() {
        1 == confirm("Are you sure you want to erase your building and start over?") && (window.location = window.location.pathname)
    }), $("#navHideWalls").click(function() {
        Bo()
    })
}), $(document).ready(function() {
    $("#toggleDimensions").click(function(applyToControllers) {
        applyToControllers.preventDefault(), wi(We = !We)
    })
}), $(document).ready(function() {
    var applyToControllers;
    Wi() && document.fullscreenEnabled && ((applyToControllers = document.createElement("i")).setAttribute("class", "iconButton fas fa-expand"), applyToControllers.setAttribute("id", "fullscreenButton"), document.querySelector("#info .iconButtons.right").appendChild(applyToControllers), applyToControllers.onclick = function() {
        document.fullscreenElement ? (document.exitFullscreen(), this.setAttribute("class", "iconButton fas fa-expand")) : document.body.requestFullscreen({
            navigationUI: "hide"
        }).then(() => {
            this.setAttribute("class", "iconButton fas fa-compress")
        }).catch(applyToControllers => {
            Pi("", "An error occurred while trying to switch into fullscreen mode: " + applyToControllers.message + " " + applyToControllers.name)
        })
    })
});