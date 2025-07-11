/**
 * Updates normal map texture repeats based on object scale and type
 * Original: function updateNormalMapTextureRepeats(t) { var a = t.userData.scale.x; t.userData.scale.y, t.userData.scale.z; for (let e = 0; e < t.material.length; e++) t.material[e].normalMap && (t.name.startsWith("mansardHip") ? ("BuildingRoof" == t.material[e].name && t.material[e].normalMap.repeat.set(2 * J, 1), "BuildingRoofWidth" == t.material[e].name && t.material[e].normalMap.repeat.set((a - 4) * J, 1)) : t.material[e].normalMap.repeat.set(a * J, 1)); }
 * @param {THREE.Object3D} meshObject - The 3D object to update normal maps for (original param: t)
 */
export default function updateNormalMapTextureRepeats(meshObject) {
  // Original: var a = t.userData.scale.x
  const scaleX = meshObject.userData.scale.x;

  // Original: t.userData.scale.y, t.userData.scale.z (these were unused in original)
  // const scaleY = meshObject.userData.scale.y;
  // const scaleZ = meshObject.userData.scale.z;

  // Original: for (let e = 0; e < t.material.length; e++)
  for (
    let materialIndex = 0;
    materialIndex < meshObject.material.length;
    materialIndex++
  ) {
    const currentMaterial = meshObject.material[materialIndex];

    // Original: t.material[e].normalMap &&
    if (currentMaterial.normalMap) {
      // Original: t.name.startsWith("mansardHip")
      if (meshObject.name.startsWith("mansardHip")) {
        // Original: "BuildingRoof" == t.material[e].name && t.material[e].normalMap.repeat.set(2 * J, 1)
        if (currentMaterial.name === "BuildingRoof") {
          currentMaterial.normalMap.repeat.set(2 * J, 1); // Note: J is external variable
        }

        // Original: "BuildingRoofWidth" == t.material[e].name && t.material[e].normalMap.repeat.set((a - 4) * J, 1)
        if (currentMaterial.name === "BuildingRoofWidth") {
          currentMaterial.normalMap.repeat.set((scaleX - 4) * J, 1); // Note: J is external variable
        }
      } else {
        // Original: t.material[e].normalMap.repeat.set(a * J, 1)
        currentMaterial.normalMap.repeat.set(scaleX * J, 1); // Note: J is external variable
      }
    }
  }
}
