export class Card {
    protected element: HTMLElement;
    protected titleLink: HTMLAnchorElement;
    protected cta: HTMLAnchorElement;
    protected clickable: boolean = false;

    constructor(element: HTMLElement, clickable: boolean = false) {
        if (element) {
            this.element = element;
            this.titleLink = this.element.querySelector(".card__title a");
            this.cta = this.element.querySelector(".card__cta");
            this.clickable =
                clickable &&
                this.element.dataset.clickable !== "false" &&
                (!!this.cta || !!this.titleLink);
            this.init();
        }
    }

    get href(): string {
        if (this.titleLink) {
            return this.titleLink.href;
        } else if (this.cta) {
            return this.cta.href;
        } else {
            return "";
        }
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
        this.element.classList.add("card--clickable");
        this.element.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            // Prevent redirect from occuring if a child link was clicked
            if (target.tagName !== "A") {
                if (this.element.dataset.target == "_blank") {
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
        new Card(cards[i]);
    }
}
