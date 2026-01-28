function deepClone(target,map= new Map()){
    if (typeof target !== "object" && target !== null) {
      return target;
    }

    if (map.has(target)) {
      return map.get(target);
    }

    const cloneTarget = Array.isArray(target) ? [] : {};

    map.set(target, cloneTarget);

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key], map);
      }
    }

    return cloneTarget;
}