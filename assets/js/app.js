import { About } from "./pages/about.js";
import { Herconomy } from "./pages/herconomy.js";
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
      herconomy: new Herconomy(),
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

      this.addEventListeners();
    }
  }

  addEventListeners() {
    //handle page navigation
    const links = document.querySelectorAll("a");
    each(Array.from(links), (_, link) => {
      link.addEventListener("click", (event) => {
        const split = link.href.split("/");
        if (
          !split[split.length - 1].startsWith("#") &&
          !["behance.net", "dribbble.com", "instagram.com"].split[2]
        ) {
          event.preventDefault();
          this.fetchPage(link.href);
        }
      });
    });

    //handle top nav hamburger toggle
    let initNavState = false;
    const button = document.querySelector(".menu-icon");
    const navList = document.querySelector(".links-side > ul");

    button.addEventListener("click", function () {
      if (initNavState) {
        navList.style.visibility = "hidden";
        initNavState = false;
      } else {
        navList.style.visibility = "visible";
        initNavState = true;
      }
    });
  }
}
new App();
