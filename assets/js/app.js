import { About } from "./pages/about.js";
import { Home } from "./pages/home.js";
import { each } from "./utils/helpers.js";

class App {
  constructor() {
    this.createContent();
    this.createPages();

    this.addEventListeners();
  }

  createContent() {
    this.content = document.querySelector(".content");
    this.template = this.content.getAttribute("data-template");
  }

  createPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
    };

    this.page = this.pages[this.template];
    this.page.create();
  }

  async fetchPage(url) {
    const response = await fetch(url);

    if (response.status === 200) {
      const html = await response.text();
      const div = document.createElement("div");
      div.innerHTML = html;
      const content = div.querySelector(".content");
      this.content.innerHTML = content.innerHTML;
      this.content.setAttribute(
        "data-template",
        content.getAttribute("data-template")
      );
      this.page.create();
    }
  }

  addEventListeners() {
    const links = document.querySelectorAll("a");
    each(Array.from(links), (_, link) => {
      link.addEventListener("click", (event) => {
        const split = link.href.split("/");
        console.log(split[2]);
        if (
          !split[split.length - 1].startsWith("#") &&
          !["behance.net", "dribbble.com", "instagram.com"].split[2]
        ) {
          event.preventDefault();
          this.fetchPage(link.href);
        }
      });
    });
  }
}
new App();
