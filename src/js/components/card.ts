export interface CardOptions {
  clickable: boolean;
  titleClass?: string;
  ctaClass?: string;
}

const defaultOptions = {
  clickable: false,
  titleClass: "iastate22-card__title",
  ctaClass: "iastate22-card__cta",
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
    this.createMutationObserver();
    this.makeEntireCardClickable();
  }

  createMutationObserver() {
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (let i = 0; i < mutations.length; i++) {
        const mutation = mutations[i] as MutationRecord;
        if (
          mutation.type === "attributes" &&
          mutation.attributeName !== null &&
          mutation.attributeName === "data-clickable" &&
          mutation.target.nodeType === Node.ELEMENT_NODE
        ) {
          this.clickable = JSON.parse(this.element.dataset.clickable);
          this.element.classList[this.clickable ? "add" : "remove"]("clickable");
        }
      }
    });

    observer.observe(this.element, {
      attributes: true,
    });
  }

  /**
   * Force the root card div to act like an anchor tag
   */
  makeEntireCardClickable() {
    this.element.addEventListener("click", (event) => {
      if (this.clickable) {
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
      }
    });
  }
}

export default function cardsInit() {
  const cards = document.querySelectorAll(".iastate22-card") as NodeListOf<HTMLElement>;
  for (let i = 0; i < cards.length; i++) {
    new Card(cards[i], {
      clickable: true,
    });
  }
}
