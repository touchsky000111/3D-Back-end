/**
 * Duplicates a 3D object with proper positioning and configuration
 * @param {THREE.Object3D} sourceObject - The 3D object to duplicate
 */
export default function duplicateObject(sourceObject) {
  const cleanName = sourceObject.name.replace("-clone", "");
  let positionOffset = { x: 3, z: 2 };
  let objectConfig;

  if (cleanName.startsWith("scale-")) {
    objectConfig = createScaleObjectConfig(
      sourceObject,
      cleanName,
      positionOffset
    );
    createScaleObject(cleanName.replace("scale-", ""), objectConfig);
  } else {
    objectConfig = createStandardObjectConfig(
      sourceObject,
      cleanName,
      positionOffset
    );
    createStandardObject(cleanName, objectConfig);
  }
}

/**
 * Creates configuration for scale-type objects
 * @param {THREE.Object3D} sourceObject - Source object
 * @param {string} cleanName - Cleaned object name
 * @param {Object} offset - Position offset
 * @returns {Object} Object configuration
 */
function createScaleObjectConfig(sourceObject, cleanName, offset) {
  return {
    name: sourceObject.name,
    position: formatPosition(
      sourceObject.position.x + offset.x,
      sourceObject.position.y,
      sourceObject.position.z + offset.z
    ),
    rotation: formatRotation(sourceObject.rotation),
  };
}

/**
 * Creates configuration for standard objects with directional positioning
 * @param {THREE.Object3D} sourceObject - Source object
 * @param {string} cleanName - Cleaned object name
 * @param {Object} offset - Position offset
 * @returns {Object} Object configuration
 */
function createStandardObjectConfig(sourceObject, cleanName, offset) {
  const adjustedOffset = calculateDirectionalOffset(sourceObject, offset);
  const doorSwing = calculateDoorSwing(sourceObject);
  const windowConfig = extractWindowConfiguration(sourceObject);

  return {
    name: sourceObject.name,
    position: formatPosition(
      sourceObject.position.x + adjustedOffset.x,
      sourceObject.position.y,
      sourceObject.position.z + adjustedOffset.z
    ),
    rotation: formatRotation(sourceObject.rotation),
    scale: formatScale(sourceObject.userData.scale),
    doorSwing: doorSwing,
    grid: windowConfig.hasGrid,
    shutters: windowConfig.hasShutters,
    select: true,
  };
}

/**
 * Calculates directional offset based on object's world direction
 * @param {THREE.Object3D} object - The 3D object
 * @param {Object} baseOffset - Base offset values
 * @returns {Object} Adjusted offset
 */
function calculateDirectionalOffset(object, baseOffset) {
  const worldDirection = new THREE.Vector3();
  object.getWorldDirection(worldDirection);

  let adjustedOffset = { ...baseOffset };

  // Determine direction and adjust offset accordingly
  if (isDirectionSouth(worldDirection)) {
    adjustedOffset.x = -baseOffset.x;
    adjustedOffset.z = -baseOffset.z;
  } else if (isDirectionEast(worldDirection)) {
    adjustedOffset.x = -2;
    adjustedOffset.z = 3;
  } else if (isDirectionWest(worldDirection)) {
    adjustedOffset.x = 2;
    adjustedOffset.z = -3;
  }

  return adjustedOffset;
}

/**
 * Checks if direction vector points south
 * @param {THREE.Vector3} direction - World direction vector
 * @returns {boolean} True if pointing south
 */
function isDirectionSouth(direction) {
  return direction.x < 0.1 && direction.x > -0.1 && direction.z < 0.9;
}

/**
 * Checks if direction vector points east
 * @param {THREE.Vector3} direction - World direction vector
 * @returns {boolean} True if pointing east
 */
function isDirectionEast(direction) {
  return direction.x < 0.9 && direction.z < 0.1 && direction.z > -0.1;
}

/**
 * Checks if direction vector points west
 * @param {THREE.Vector3} direction - World direction vector
 * @returns {boolean} True if pointing west
 */
function isDirectionWest(direction) {
  return direction.x > 0.9 && direction.z < 0.1 && direction.z > -0.1;
}

/**
 * Calculates door swing direction
 * @param {THREE.Object3D} object - The 3D object
 * @returns {string|number} Door swing value
 */
function calculateDoorSwing(object) {
  const isWalkDoor = object.name.startsWith("walk");
  const isInteriorDoorReversed =
    object.name.startsWith("interiorDoor") && object.scale.x === -1;

  return isWalkDoor || isInteriorDoorReversed ? "-1" : 1;
}

/**
 * Extracts window-specific configuration
 * @param {THREE.Object3D} object - The 3D object
 * @returns {Object} Window configuration
 */
function extractWindowConfiguration(object) {
  let hasGrid = false;
  let hasShutters = false;

  if (object.name.startsWith("window")) {
    // Check for shutters
    if (object.morphTargetDictionary?.hasOwnProperty("hideShutters")) {
      const shutterIndex = object.morphTargetDictionary.hideShutters;
      hasShutters = object.morphTargetInfluences[shutterIndex] !== 1;
    }

    // Check for window grid
    if (Array.isArray(object.material)) {
      const gridMaterial = object.material.find(
        (material) => material.name === "WindowGrid"
      );
      hasGrid = gridMaterial?.visible === true;
    }
  }

  return { hasGrid, hasShutters };
}

/**
 * Formats position coordinates as string
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {number} z - Z coordinate
 * @returns {string} Formatted position string
 */
function formatPosition(x, y, z) {
  return `${x},${y},${z}`;
}

/**
 * Formats rotation as string
 * @param {THREE.Euler} rotation - Rotation object
 * @returns {string} Formatted rotation string
 */
function formatRotation(rotation) {
  return `${rotation.x},${rotation.y},${rotation.z}`;
}

/**
 * Formats scale as string
 * @param {THREE.Vector3} scale - Scale object
 * @returns {string} Formatted scale string
 */
function formatScale(scale) {
  return `${scale.x},${scale.y},${scale.z}`;
}

// Note: These functions need to be implemented based on your codebase
// function createScaleObject(name, config) { /* implementation */ }
// function createStandardObject(name, config) { /* implementation */ }
