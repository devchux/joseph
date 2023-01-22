import { Page } from "../components/page.js";

export class Home extends Page {
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
