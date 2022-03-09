import * as YoutubePlayer from "youtube-player";

export class VideoEmbed {
  private element: HTMLElement;
  private media: HTMLElement;
  private player: any;
  private playPauseButton: HTMLButtonElement;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.init();
      this.media = this.element.querySelector(".video-embed__media-wrap");
    }
  }

  private init() {
    this.createVideoPlayer();
    this.createPlayPauseButton();
    this.handlePlayPauseButtonClick();
    this.handlePlayPauseButtonHover();
    this.handlePlayerEvents();
  }

  private createVideoPlayer() {
    const playerRoot = this.element.querySelector(".video-embed__video") as HTMLElement;
    this.player = new YoutubePlayer(playerRoot, {
      videoId: playerRoot.dataset.vid,
    });
  }

  private handlePlayPauseButtonClick() {
    this.playPauseButton.addEventListener("click", () => {
      this.player.playVideo();
    });
  }

  private handlePlayPauseButtonHover() {
    this.playPauseButton.addEventListener("mouseover", () => {
      this.media.classList.add("video-embed__video-hover");
    });
    this.playPauseButton.addEventListener("mouseout", () => {
      this.media.classList.remove("video-embed__video-hover");
    });
  }

  private handlePlayerEvents() {
    this.player.on("stateChange", (event) => {
      if (!this.media.classList.contains("video-playing")) {
        this.media.classList.add("video-playing");
      }
      if (event.data == 0) {
        this.media.classList.remove("video-playing");
      }
    });
  }

  private createPlayPauseButton() {
    const button = document.createElement("BUTTON") as HTMLButtonElement;
    button.className = "video-embed__button";
    const triangleDiv = document.createElement("DIV") as HTMLElement;
    triangleDiv.className = "video-embed__triangle";
    const label = document.createElement("SPAN") as HTMLElement;
    label.className = "visible-for-screen-readers";
    label.textContent = "Play Video";
    button.appendChild(triangleDiv);
    button.appendChild(label);
    this.media = this.element.querySelector(".video-embed__media-wrap");
    this.media.appendChild(button);
    this.playPauseButton = button;
  }
}

export default function videoEmbedInit() {
  const videoEmbed = document.querySelectorAll(".video-embed") as NodeListOf<HTMLElement>;
  for (let i = 0; i < videoEmbed.length; i++) {
    new VideoEmbed(videoEmbed[i]);
  }
}
