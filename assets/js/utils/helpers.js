export const each = (element, func) => {
    if (typeof element === "object") {
        Object.keys(element).forEach((key) => {
          func(key, element[key]);
        });
    }

    if (Array.isArray(element)) {
        element.forEach((value, index) => {
            func(index, value);
          });
    }
};
