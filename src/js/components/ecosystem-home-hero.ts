import YoutubePlayer from "youtube-player";

export class EcosystemHeroBackgroundVideo {
  private element: HTMLElement;
  private media: HTMLElement;
  private player: any;
  private playButton: HTMLButtonElement;
  private isPlaying = false;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.init();
      this.media = this.element.querySelector(".ecosystem-home-hero__media");
    }
  }

  private init() {
    this.createVideoPlayer();
    this.createPlayButton();
    this.handlePlayerEvents();
    this.handlePlayButtonClick();
  }

  private createVideoPlayer() {
    const playerRoot = this.element.querySelector(".ecosystem-home-hero__video") as HTMLElement;
    const videoId = playerRoot.dataset.vid;
    this.player = YoutubePlayer(playerRoot, {
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        loop: 1,
        modestbranding: 1,
        rel: 0,
        playlist: videoId,
        playsinline: 1,
      },
    });

    // This is necessary for autoplay on mobile
    this.player.mute();
  }

  private handlePlayerEvents() {
    this.player.on("ready", () => {
      // This is necessary for autoplay on mobile
      this.playButton.click();
    });
    this.player.on("stateChange", (event) => {
      if (event.data === 1) {
        this.isPlaying = true;
        this.playButton.classList.remove("ecosystem-home-hero__video-button-play");
      }
      if (event.data === 2) {
        this.isPlaying = false;
        this.playButton.classList.add("ecosystem-home-hero__video-button-play");
      }
    });
  }

  private handlePlayButtonClick() {
    this.playButton.addEventListener("click", () => {
      if (this.isPlaying) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
    });
  }

  private createPlayButton() {
    const button = document.createElement("BUTTON") as HTMLButtonElement;
    button.className = "ecosystem-home-hero__video-button";
    const label = document.createElement("SPAN") as HTMLElement;
    label.className = "visible-for-screen-readers";
    label.textContent = "Play Video";
    button.appendChild(label);
    this.media = this.element.querySelector(".ecosystem-home-hero__media");
    this.media.appendChild(button);
    this.playButton = button;
  }
}

export default function ecosystemHeroBackgroundVideo() {
  const ecosystemHeroBackgroundVideo = document.querySelector(".ecosystem-home-hero--background-video") as HTMLElement;
  new EcosystemHeroBackgroundVideo(ecosystemHeroBackgroundVideo);
}
