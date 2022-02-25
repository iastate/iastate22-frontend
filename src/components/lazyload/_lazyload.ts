import * as lazySizes from "lazysizes";

// Prevent lazysizes from automatically running so we can prefer native lazy loading
lazySizes.cfg.init = false;

export class LazyLoad {
    protected element: HTMLElement;

    constructor(element: HTMLElement) {
        if (element) {
            this.element = element;

            this.init();
        }
    }

    /**
     * Use native lazy loading if it's available,
     * otherwise fallback to library
     */
    protected init() {
        if ("loading" in HTMLImageElement.prototype) {
            this.element.setAttribute("loading", "lazy");
            this.element.setAttribute("src", this.element.dataset.src);
        } else {
            lazySizes.init();
        }
    }
}

export default function lazyLoadInit() {
    const elements = document.querySelectorAll(".lazyload") as NodeListOf<
        HTMLElement
    >;
    for (let i = 0; i < elements.length; i++) {
        new LazyLoad(elements[i]);
    }
}
