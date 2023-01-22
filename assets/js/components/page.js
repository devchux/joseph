import { each } from "../utils/helpers.js";

export class Page {
  constructor({ element, elements }) {
    this.selector = element;
    this.selectorChildren = { ...elements };
  }

  create() {
    this.element = document.querySelector(this.selector);
    each(this.selectorChildren, function (key, value) {});
  }
}
