---
title: Homepage Guide
---

#Homepage Sections:

1. Hero
2. Announcement Alert
3. Community
4. Blockquote
5. Academics
6. Solutions
7. Location
8. Events & News
9. Social
10. Resources
11. Calls To Action
12. Campus Photo

# Hero

**Parent class**: `.home-hero`

- Contains room for a hero image (two versions required: one sized for mobile and another for tablet/desktop). Images within the `home-hero__media` element will be inline `img` elements and are sized using the css `ojbect-fit` property (a polyfill is included for older browsers).
- Within the headline `.home-hero__title`, the element is set to take raw html. In this example, the `<span>` elements are used to change the text color from white to gold to highlight certain parts of the text
- A background SVG animation behind the title is using a SMIL `<animate>` tag to morph the shapes between points. A play/pause button has been added to the bottom right to allow users to stop the animation (this is also for accesibility purposes). When a user has a system setting enabled on their machine to `prefer reduced motion` the animation will not play

# Announcement Alert

**Parent class**: `.home_announcement_alert`

# Community

**Parent class**: `.home-community`

# Blockquote

**Parent class**: `.home-iastate22-blockquote`

# Academics

**Parent class**: `.home-academics`

# Solutions

**Parent class**: `.home-solutions`

# Location

**Parent class**: `.home-location`

# Events & News

**Parent class**: `.home-events-news`

# Social

**Parent class**: `.home-social`

# Resources

**Parent class**: `.home-resources`

# Calls To Action

**Parent class**: `.home-ctas`

# Campus Photo

**Parent class**: `.home-full-width-campus-photo`
