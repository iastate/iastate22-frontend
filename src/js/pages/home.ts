import Flickity from "flickity";
import "flickity-imagesloaded";
import debounce from "lodash.debounce";

const mobileMQ = window.matchMedia("(max-width: 992px)");

export class PlayPauseAnimation {
  private element: HTMLElement;
  private playPauseButton: HTMLButtonElement;
  private animationContainer: HTMLElement;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.playPauseButton = this.element.querySelector(".home-hero__animation-control");
      this.animationContainer = this.element.querySelector(".home-hero__animation");
      this.init();
    }
  }

  private init() {
    if (!!this.playPauseButton) {
      this.handleHover();
    }
  }

  private handleHover() {
    this.playPauseButton.addEventListener("click", () => {
      if (!this.animationContainer.classList.contains("paused")) {
        this.animationContainer.classList.add("paused");
        this.playPauseButton.classList.add("paused");
      } else {
        this.animationContainer.classList.remove("paused");
        this.playPauseButton.classList.remove("paused");
      }
    });
  }
}

export class FeaturedStoryCarousel {
  private element: HTMLElement;
  private elementNavDots: HTMLElement;
  private slides: NodeListOf<HTMLElement>;
  private carousel: Flickity;

  constructor(element) {
    this.element = element;
    if (this.element && this.element.querySelector(".home-solutions__carousel")) {
      this.slides = this.element.querySelectorAll(".home-solutions__carousel .iastate22-card");
      this.init();
    }
  }

  private init() {
    this.handleResize();
  }

  private handleResize() {
    const resize = () => {
      this.convertToCarouselOnMobile();
    };
    window.addEventListener("resize", debounce(resize, 100));
    resize();
  }

  private convertToCarouselOnMobile() {
    if (mobileMQ.matches && !this.carousel) {
      this.carousel = new Flickity(this.element.querySelector(".home-solutions__carousel"), {
        contain: true,
        imagesLoaded: true,
        lazyLoad: 2,
        wrapAround: false,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: false,
        cellAlign: "left",
      });
    }
    if (!mobileMQ.matches && !!this.carousel) {
      this.carousel.destroy();
      this.carousel = null;
    }
  }
}

export default function homeInit() {
  const heroAnimationSection = document.querySelector(".home-hero") as HTMLElement;
  new PlayPauseAnimation(heroAnimationSection);

  const carousel = document.querySelector(".home-solutions__carousel-holder") as HTMLElement;
  new FeaturedStoryCarousel(carousel);
}
