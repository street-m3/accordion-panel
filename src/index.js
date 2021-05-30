import "./styles.css";

class Accordion {
  constructor(container, tab) {
    this.accordionContainer = document.querySelector(`.${container}`);
    this.accordionTabs = document.querySelectorAll(`.${tab}`);
    this.accordionAddCls = "is-open-panel";
    this.touchEventListener = this.touchEventDetection();
    this.multiSelectDefault = true;
    this.init();
  }

  init() {
    if (this.accordionContainer == null) return;
    this.accordion_trigger();
  }

  accordion_trigger() {
    this.accordionTabs.forEach((item) => {
      item.addEventListener(this.touchEventListener, (e) => {
        e.preventDefault();
        this.multiSelectable(item);
        item.classList.toggle(this.accordionAddCls);
        const panelItembody = item.nextElementSibling;
        if (item.classList.contains(this.accordionAddCls)) {
          panelItembody.style.maxHeight = panelItembody.scrollHeight + "px";
        } else {
          panelItembody.style.maxHeight = 0;
        }
      });
    });
  }

  multiSelectable(itemElement) {
    if (this.multiSelectDefault === true) {
      const currentlyPanel = document.querySelector(
        ".js-accordion-header.is-open-panel"
      );
      if (currentlyPanel && currentlyPanel !== itemElement) {
        currentlyPanel.classList.remove(this.accordionAddCls);
        currentlyPanel.nextElementSibling.style.maxHeight = 0;
      }
    }
  }

  touchEventDetection() {
    return window.ontouchstart ? "touchstart" : "click";
  }
}

new Accordion("accordions-section", "js-accordion-header");
