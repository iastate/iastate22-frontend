import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import * as _debounce from "lodash.debounce";
import AccessibilityUtilities from "../utilities/accessibility";

const mobileMQ = window.matchMedia("(max-width: 1200px)");

export class SiteHeader {
  private element: HTMLElement;
  private scroller: HTMLElement;
  private openButton: HTMLButtonElement;
  private focusableChildren: NodeListOf<HTMLElement>;
  private parentNavItems: NodeListOf<HTMLElement>;
  public visible: boolean = false;
  private selectedMainNavSectionIndex: number = null;
  private eventHandlers: any = {
    show: [],
    hide: [],
  };

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.scroller = this.element.querySelector(".site-header__mega-menu-scroller");
      this.openButton = AccessibilityUtilities.convertAnchorToButton(
        document.querySelector(`[aria-controls="${this.element.id}"]`)
      );
      this.focusableChildren = this.element.querySelectorAll("a, button, input");
      this.parentNavItems = this.element.querySelectorAll(".site-header__mega-menu-main-nav > ul > li");
      this.init();
    }
  }

  private init() {
    this.handleResize();
    this.initiallyHideDropdowns();
    this.handleEsc();
    this.handleTabbing();
    this.handleOpenButtonClick();
    this.handleOutsideClick();
    this.handleMobileBackButtonClicks();
    this.handleParentLinkClicks();
    this.initMobileNav();
    this.toggleVisibility();
  }

  private handleResize() {
    const resize = () => {
      if (!mobileMQ.matches && !this.visible && this.element.getAttribute("aria-hidden") === "true") {
        this.element.setAttribute("aria-hidden", "false");
      }
      if (mobileMQ.matches && !this.visible && this.element.getAttribute("aria-hidden") === "false") {
        this.element.setAttribute("aria-hidden", "true");
      }
    };
    window.addEventListener("resize", _debounce(resize, 100));
    resize();
  }

  private initiallyHideDropdowns() {
    for (let i = 0; i < this.parentNavItems.length; i++) {
      this.toggleNavSectionVisibility(i, false);
    }
  }

  private handleEsc() {
    window.addEventListener("keydown", (event) => {
      const key = event.key || event.keyCode;
      // Close the nav when the esc key is pressed while it's open
      if (key === "Escape" || key === "Esc" || key === 27) {
        if (this.visible) {
          this.visible = false;
          this.toggleVisibility();
          this.openButton.focus();
        }
      }
    });
  }

  protected handleTabbing() {
    window.addEventListener("keyup", (event) => {
      const key = event.key || event.keyCode;
      // Close the nav when tabbing outside of it while it's open
      if (key === "Tab" || key === 9) {
        if (this.visible && !this.element.contains(event.target as HTMLElement)) {
          this.visible = false;
          this.toggleVisibility();
        }
      }
    });
  }

  private handleOpenButtonClick() {
    let clickedViaKeyboard = false as boolean;
    // Set flag used in click handler to determine if click was handled via keyboard
    this.openButton.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
        clickedViaKeyboard = true;
      }
    });

    this.openButton.addEventListener("click", () => {
      // this.visible = true;
      // this.toggleVisibility();
      this.visible = !this.visible;
      this.toggleVisibility();
      if (clickedViaKeyboard && this.visible) {
        setTimeout(() => {
          this.focusableChildren[0]?.focus();
        }, 50);
      }
      // Reset state for subsequent click events
      clickedViaKeyboard = false;
    });
  }

  private handleOutsideClick() {
    document.body.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (
        !target.closest(".site-header") ||
        (target.classList.contains("site-header__mega-menu-scroller") && !mobileMQ.matches)
      ) {
        this.toggleNavSectionVisibility(this.selectedMainNavSectionIndex, false);
        this.selectedMainNavSectionIndex = null;
      }
    });
  }

  private handleMobileBackButtonClicks() {
    this.element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!!target.closest(".site-header__mega-menu-main-nav-dropdown-back")) {
        this.toggleNavSectionVisibility(this.selectedMainNavSectionIndex, false);
        this.selectedMainNavSectionIndex = null;
      }
    });
  }

  private handleParentLinkClicks() {
    this.element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const parentLink = target.closest(".site-header__mega-menu-main-nav-parent") as HTMLAnchorElement;
      if (!!parentLink) {
        event.preventDefault();
        const newIndex = parseInt(parentLink.dataset.index);
        const newLinkClicked = newIndex !== this.selectedMainNavSectionIndex;
        if (this.selectedMainNavSectionIndex !== null) {
          this.toggleNavSectionVisibility(this.selectedMainNavSectionIndex, false);
        }
        this.toggleNavSectionVisibility(newIndex, newLinkClicked);
        this.selectedMainNavSectionIndex = newLinkClicked ? newIndex : null;
      }
    });
  }

  private initMobileNav() {
    for (let i = 0; i < this.parentNavItems.length; i++) {
      const parentItem = this.parentNavItems[i];
      const childList = parentItem.querySelector("ul") as HTMLElement;
      if (!!childList) {
        const clonedParentLI = document.createElement("LI") as HTMLElement;
        const backButtonLI = document.createElement("LI") as HTMLElement;
        const parentLink = parentItem.querySelector("a") as HTMLAnchorElement;
        const parentLinkClone = document.createElement("A") as HTMLAnchorElement;
        const backButton = document.createElement("BUTTON") as HTMLButtonElement;
        parentLink.classList.add("site-header__mega-menu-main-nav-parent");
        parentLink.dataset.index = `${i}`;
        backButtonLI.classList.add("site-header__mega-menu-main-nav-dropdown-back-wrap");
        clonedParentLI.classList.add("site-header__mega-menu-main-nav-dropdown-parent-wrap");
        backButton.classList.add("site-header__mega-menu-main-nav-dropdown-back");
        backButton.innerHTML = `
          <span class="site-header__mega-menu-main-nav-dropdown-back-icon" aria-hidden="true">&lt;</span>
          <span class="site-header__mega-menu-main-nav-dropdown-back-label">Back</span>
          <span class="visible-for-screen-readers"> to top level of menu</span>
        `;
        parentLinkClone.classList.add("site-header__mega-menu-main-nav-dropdown-parent");
        parentLinkClone.textContent = Array.prototype.filter
          .call(parentLink.childNodes, (el) => el.nodeType === Node.TEXT_NODE)
          .map((el) => el.textContent)
          .join("");
        parentLinkClone.href = parentLink.href;
        backButtonLI.appendChild(backButton);
        clonedParentLI.appendChild(parentLinkClone);
        childList.insertBefore(clonedParentLI, childList.firstElementChild);
        childList.insertBefore(backButtonLI, clonedParentLI);
      }
    }
  }

  public toggleVisibility() {
    if (mobileMQ.matches) {
      this.openButton.setAttribute("aria-expanded", `${this.visible}`);
      this.element.setAttribute("aria-hidden", `${!this.visible}`);

      for (let i = 0; i < this.focusableChildren.length; i++) {
        this.focusableChildren[i].setAttribute("tabindex", this.visible ? "0" : "-1");
      }

      if (this.visible) {
        disableBodyScroll(this.scroller);
      } else {
        enableBodyScroll(this.scroller);
      }

      this.trigger(this.visible ? "show" : "hide");
    }
  }

  private toggleNavSectionVisibility(index: number, visible: boolean) {
    const parentItem = this.parentNavItems[index];
    const parentLink = parentItem.querySelector("a") as HTMLAnchorElement;
    const childList = parentItem.querySelector("ul") as HTMLElement;
    const focusableChildren = childList?.querySelectorAll("a, button") as NodeListOf<HTMLElement>;
    parentLink.setAttribute("aria-expanded", `${visible}`);
    childList.setAttribute("aria-hidden", `${!visible}`);
    for (let i = 0; i < focusableChildren.length; i++) {
      focusableChildren[i].setAttribute("tabindex", visible ? "0" : "-1");
    }
    if (visible && mobileMQ.matches) {
      disableBodyScroll(childList);
    } else {
      enableBodyScroll(childList);
    }
  }

  public on(eventType: string, handler: Function) {
    if (this.eventHandlers.hasOwnProperty(eventType)) {
      this.eventHandlers[eventType].push(handler);
    } else {
      throw new Error(`Event type "${eventType}" is not allowed for MegaMenu component.`);
    }
  }

  private trigger(eventType) {
    if (this.eventHandlers.hasOwnProperty(eventType)) {
      for (let i = 0; i < this.eventHandlers[eventType].length; i++) {
        this.eventHandlers[eventType][i]();
      }
    } else {
      throw new Error(`Event type "${eventType}" is not allowed for MegaMenu component.`);
    }
  }
}

export default function siteHeaderInit() {
  const header = document.querySelector(".site-header__mega-menu") as HTMLElement;
  new SiteHeader(header);
}
