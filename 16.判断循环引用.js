const isCycie = (obj) => {
  let isDected = false;
  const stack = new Set();

  const dected = (obj) => {
    if (obj && typeof obj !== "object") {
      return;
    }
    if (stack.has(obj)) {
      return (isDected = true);
    }
    stack.add(obj);
    for (const item in obj) {
      if (obj.hasOwnProperty()) {
        dected(item);
      }
    }
  };

  dected(obj);
  return isDected;
};
