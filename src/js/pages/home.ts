import * as Flickity from "flickity";

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

export default function homeInit() {
  const heroAnimationSection = document.querySelector(".home-hero") as HTMLElement;
  new PlayPauseAnimation(heroAnimationSection);
}
