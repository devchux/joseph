import { Page } from "../components/page.js";

export class About extends Page {
  constructor() {
    super({
      element: ".content",
      elements: {
        navLogoWrapper: ".logo-side",
        menuButton: ".menu-icon",
      },
    });
  }
}
