class DomSelector {
  constructor(config) {
    Object.entries(config).forEach(([method, elements]) => {
      loopThrough(elements, method, this)
    });
  }
}

const loopThrough = (obj, method, nameSpace) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value == "string") {
      nameSpace[key] = document[method](value);
    } else if (typeof value == "object") {
      nameSpace[key] = value;
      loopThrough(value, method, nameSpace[key]);
    }
  });
}

module.exports = DomSelector;
