import YoutubePlayer from "youtube-player";

export class CollegeHeroBackgroundVideo {
  private element: HTMLElement;
  private media: HTMLElement;
  private player: any;
  private playButton: HTMLButtonElement;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.init();
      this.media = this.element.querySelector(".ecosystem-home-hero__media");
    }
  }

  private init() {
    this.createVideoPlayer();
    this.handlePlayerEvents();
    this.createPlayButton();
    this.handlePlayButtonClick();
  }

  private createVideoPlayer() {
    const playerRoot = this.element.querySelector(".ecosystem-home-hero__video") as HTMLElement;
    const youTubeVideoID = playerRoot.dataset.vid;
    this.player = new YoutubePlayer(playerRoot, {
      videoId: playerRoot.dataset.vid,
      playerVars: {
        autoplay: 1,
        autohide: 1,
        disablekb: 1,
        mute: 1,
        playsinline: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        rel: 0,
        playlist: youTubeVideoID,
        enablejsapi: 1,
      },
    });
  }

  private handlePlayerEvents() {
    this.player.on("ready", (event) => {
      this.media.classList.add("ecosystem-home-hero__media-playing");
    });
    this.player.on("stateChange", (event) => {
      if (!this.media.classList.contains("ecosystem-home-hero__media-playing")) {
        this.media.classList.add("ecosystem-home-hero__media-playing");
      }
      if (event.data == 2) {
        this.media.classList.remove("ecosystem-home-hero__media-playing");
      }
    });
  }

  private handlePlayButtonClick() {
    this.playButton.addEventListener("click", () => {
      if (this.media.classList.contains("ecosystem-home-hero__media-playing")) {
        this.player.pauseVideo();
        this.playButton.classList.add("ecosystem-home-hero__video-button-play");
      } else {
        this.player.playVideo();
        this.playButton.classList.remove("ecosystem-home-hero__video-button-play");
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

export default function collegeHeroBackgroundVideo() {
  const collegeHeroBackgroundVideo = document.querySelector(".ecosystem-home-hero--background-video") as HTMLElement;
  new CollegeHeroBackgroundVideo(collegeHeroBackgroundVideo);
}
