const AddListeners = (DOM, object, method) => {

  Object.entries(object).forEach(([key, value]) => {

    if (typeof value == "object")
      AddListeners(DOM, value, key)

    else if (key == "init")
      value();

    else if (key == "onLoad")
      window.onload = value()

    else if (key == "resize")
      window.addEventListener("resize", () => value())

    else if (method == "addClickOnEach")
      (DOM[key] ? DOM[key] : DOM[method][key])
      .forEach((e, i) =>
        e.addEventListener("click", evt =>
          value(evt, i)))

    else
      (DOM[key] ? DOM[key] : DOM[method][key])
      .addEventListener("click", () =>
        value())
  });
};

module.exports = AddListeners;
