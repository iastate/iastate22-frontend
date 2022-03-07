export interface CardOptions {
  clickable: boolean;
  titleClass?: string;
  ctaClass?: string;
}

const defaultOptions = {
  clickable: false,
  titleClass: "card__title",
  ctaClass: "card__cta",
} as CardOptions;

export class Card {
  protected element: HTMLElement;
  protected titleLink: HTMLAnchorElement;
  protected cta: HTMLAnchorElement;
  protected options: CardOptions;
  protected clickable: boolean = false;
  constructor(element: HTMLElement, options: CardOptions = defaultOptions) {
    if (element) {
      this.element = element;
      // Merge defaults with user-supplied options
      this.options = {
        ...defaultOptions,
        ...options,
      };
      this.titleLink = this.element.querySelector(`.${this.options.titleClass} a`);
      this.cta = this.element.querySelector(`.${this.options.ctaClass}`);
      this.clickable =
        this.options.clickable && this.element.dataset.clickable !== "false" && (!!this.cta || !!this.titleLink);
      this.init();
    }
  }
  get href(): string {
    if (!!this.titleLink) {
      return this.titleLink.href;
    } else if (!!this.cta) {
      return this.cta.href;
    }
    return "";
  }
  get target(): string {
    if (!!this.element.dataset.target) {
      return this.element.dataset.target;
    } else if (!!this.titleLink) {
      return this.titleLink.target;
    } else if (!!this.cta) {
      return this.cta.target;
    }
    return "";
  }
  init() {
    if (this.clickable) {
      this.makeEntireCardClickable();
    }
  }
  /**
   * Force the root card div to act like an anchor tag
   */
  makeEntireCardClickable() {
    this.element.classList.add("clickable");
    this.element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      // Prevent redirect from occuring if a child link was clicked
      if (target.tagName !== "A") {
        if (this.target === "_blank") {
          const newTab = window.open();
          newTab.location.href = this.href;
        } else {
          window.location.href = this.href;
        }
      }
    });
  }
}

export default function cardsInit() {
  const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
  for (let i = 0; i < cards.length; i++) {
    new Card(cards[i], {
      clickable: true,
    });
  }
}
