import * as Flickity from "flickity";
import "flickity-imagesloaded";

class SilcCarousel {
    element: HTMLElement;
    elementNavNext: HTMLElement;
    elementNavPrevious: HTMLElement;
    carousel: Flickity;

    constructor(element) {
        this.element = element;
        if (this.element && this.element.querySelector(".carousel")) {
            this.elementNavNext = this.element.querySelector(
                ".carousel__nav-next"
            ) as HTMLElement;
            this.elementNavPrevious = this.element.querySelector(
                ".carousel__nav-previous"
            ) as HTMLElement;
            this.carousel = new Flickity(
                this.element.querySelector(".carousel"),
                {
                    contain: true,
                    imagesLoaded: true,
                    wrapAround: true,
                    lazyLoad: 2,
                    prevNextButtons: false,
                    adaptiveHeight: true,
                }
            );
            this.addCarouselEventlisteners();
        }
    }

    addCarouselEventlisteners() {
        // onClick
        this.elementNavNext.addEventListener("click", (event) => {
            this.carousel.next();
        });

        this.elementNavPrevious.addEventListener("click", (event) => {
            this.carousel.previous();
        });
    }
}

function SilcCarouselInit() {
    let carousels = document.querySelectorAll(".carousel-holder") as NodeList;

    if (carousels.length > 0) {
        for (let i = 0; i < carousels.length; i++) {
            new SilcCarousel(carousels[i]);
        }
    }
}

export { SilcCarousel, SilcCarouselInit };
