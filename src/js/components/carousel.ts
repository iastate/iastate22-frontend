import Flickity from "flickity";
import "flickity-imagesloaded";

export class Carousel {
  private element: HTMLElement;
  private elementNavNext: HTMLElement;
  private elementNavPrevious: HTMLElement;
  private carousel: Flickity;

  constructor(element: HTMLElement) {
    if (!!element && !!element.querySelector(".carousel")) {
      this.element = element;
      this.elementNavNext = this.element.querySelector(".carousel__nav-next") as HTMLElement;
      this.elementNavPrevious = this.element.querySelector(".carousel__nav-previous") as HTMLElement;
      this.carousel = new Flickity(this.element.querySelector(".carousel"), {
        contain: true,
        imagesLoaded: true,
        wrapAround: true,
        lazyLoad: 2,
        prevNextButtons: false,
        adaptiveHeight: true,
      });
      this.addCarouselEventlisteners();
    }
  }

  private addCarouselEventlisteners() {
    // onClick
    this.elementNavNext.addEventListener("click", (event) => {
      this.carousel.next();
    });

    this.elementNavPrevious.addEventListener("click", (event) => {
      this.carousel.previous();
    });
  }
}

export default function carouselsInit() {
  const carousels = document.querySelectorAll(".carousel-holder") as NodeListOf<HTMLElement>;
  for (let i = 0; i < carousels.length; i++) {
    new Carousel(carousels[i]);
  }
}
