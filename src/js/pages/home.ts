import Flickity from "flickity";
import "flickity-imagesloaded";
import debounce from "lodash.debounce";
import Masonry from "masonry-layout";

const mobileMQ = window.matchMedia("(max-width: 991px)");

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

export class NewsAndEvents {
  private element: HTMLElement;
  private eventsList: NodeListOf<HTMLElement>;
  private newsList: NodeListOf<HTMLElement>;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.eventsList = this.element.querySelectorAll(".home-events__event-list ul li");
      this.newsList = this.element.querySelectorAll(".home-events__news-list ul li");
      this.init();
    }
  }

  private init() {
    if (!!this.element) {
      this.combineLists();
      this.applyMasonry();
    }
  }

  private combineLists() {
    const gridWrap = document.createElement("DIV") as HTMLElement;
    const grid = document.createElement("UL") as HTMLElement;
    gridWrap.classList.add("home-news-events-grid-wrap");
    grid.classList.add("home-news-events-grid");
    gridWrap.appendChild(grid);
    this.element.appendChild(gridWrap);
    for (let i = 0; i < 3; i++) {
      const newsClone = this.newsList[i].cloneNode(true) as HTMLElement;
      const newsImageWrap = document.createElement("DIV") as HTMLElement;
      newsImageWrap.classList.add("home-news-events-grid__image");
      const newsImage = document.createElement("IMG") as HTMLImageElement;
      newsImageWrap.appendChild(newsImage);
      newsImage.src = newsClone.dataset.image;
      newsImage.alt = "";
      newsClone.appendChild(newsImageWrap);
      newsClone.insertBefore(newsImageWrap, newsClone.firstElementChild);
      grid.appendChild(this.eventsList[i].cloneNode(true));
      grid.appendChild(newsClone);
    }
  }

  private applyMasonry() {
    var grid = document.querySelector(".home-news-events-grid");
    var msnry = new Masonry(grid, {
      gutter: 20,
      horizontalOrder: true,
      percentPosition: true,
    });
  }
}

export default function homeInit() {
  const heroAnimationSection = document.querySelector(".home-hero") as HTMLElement;
  new PlayPauseAnimation(heroAnimationSection);

  const carousel = document.querySelector(".home-solutions__carousel-holder") as HTMLElement;
  new FeaturedStoryCarousel(carousel);

  const newsEvensSection = document.querySelector(".home-events") as HTMLElement;
  new NewsAndEvents(newsEvensSection);
}
