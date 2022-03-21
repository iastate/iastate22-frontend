# Video Embed

**This is a custom component (no class prefix in place as it does not conflict with bootstrap)**

- This is setup to take a youtube video id and use a custom wallpaper image. When the play button is clicked, the wallpaper image disappears and the video begins playing
- The custom styles are imported into the `index.scss` file as `@import "../components/video-embed/video-embed";`
- There is a paragraph-widget wrapper for use in page context `<div class="paragraph-widget paragraph-widget--video-embed">`.
- The `.ts` file for the javascript is imported into the `index.ts` file as `import videoEmbedInit from "./components/video-embed";` and called as `videoEmbedInit();`
