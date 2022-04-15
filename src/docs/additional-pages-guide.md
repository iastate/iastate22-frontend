---
title: Additional Pages Guide
---

**Table of Contents**

1. Admission & Aid
2. Majors, Minors and Certificates
3. College Template
4. A-Z Index
5. Search

<hr>
<br>

# Admission & Aid

## Hero Section

- This is a custom full-width hero section
- Uses breadcrumb variant `breadcrumb--top-level-pages`
- Contains a hero image (two versions required: one sized for mobile and another for tablet/desktop). Images within the `admission-aid-hero__media` element will be inline `img` elements and are sized using the css `object-fit` property (a polyfill is included for older browsers).
- The svg background is custom for this particular page, and is not intended to animate
- Contains an `h1` page title
- The sub-navigation (appears below the hero image) is an instance of the `subnav--horizontal` component

## Explore Section

- Contains an `h2` title and intro section (which is set to output raw HTML)
- Custom section for this page
- The video section is set to display a YouTube video, using an instance of the `video-embed` component (includes wallpaper image and caption)

## Why Iowa State University Section

- Custom section for this page
- Contains an `h2` title
- The callout sections below the title are custom to this page and contain an image, title and tertiary link (`.link-tertiary`)
- The inline `img` elements are sized using the css `object-fit` property (see the home hero section for more info if needed), there is room for three total images, two of which are hidden on mobile and become visible again on tablet sizes
- The statistic section with room for multiple statistics is custom to this page (the Kitchen Sink `statistic` component only contains room for one statistic)

## Afford Section

- Custom section for this page
- Contains an `h2` title and intro section (which is set to output raw HTML)
- The link below the title and intro is an instance of the `link-set` component, this is showing the "external link" icon since the page is pointing away from `https://www.iastate.edu/`
- The column section is using a variant of the `multi-column-content` component, called `multi-column-content--alternative`. This is a structured version of the component which includes output for the icon, title, copy and link, as well as including the dividing lines between the columns.

## Apply Section

- Modified version of the `callout-inset` component

## Links Section

- Custom section for this page
- Contains an `h2` subtitle and `h3` title
- Contains multiple links in columns, with each containing an icon and link text

## Connect Section

- Custom section for this page
- Contains an `h2` title
- Contains social media link section
- Contains a custom column section, each column containing `h3` titles, description copy (outputtin raw HTML), and an instance of the `link-set` component

<br>
<hr>
<br>

# Majors, Minors and Certificates

## Hero Section

- This is an instance of the `hero--top-level-lp` component
- Does not contain the horizonatl sub-navigation (optional within the `hero--top-level-lp` component)

## Text With Statistic Section

- The statistic section (with surrounding text) is an instance of the `statistic-with-text--right` component

## Explore Programs Section

- Custom section for this page
- Contains an `h2` title
- Contains link section, an instance of the `button-set` component

## Find An Undergraduate Program Section

- Custom section for this page
- The form elements have been mocked up for styling purposes, contains an `h2` title, label, input and submit button
- In the listings section, each listing contains a secondary link (`.iastate22-link-secondary`) with the linked program name, and a `p` which outputs the program type

## Call To Action Section

- This call to action section is an instance of the `call-to-action--small` component

<br>
<hr>
<br>

# College Template

## Hero Section

- This is a custom full-width hero section for the college pages
- Uses breadcrumb variant `breadcrumb--top-level-pages`
- Contains a hero image (two versions required: one sized for mobile and another for tablet/desktop). Images within the `college-hero__media` element will be inline `img` elements and are sized using the css `object-fit` property (a polyfill is included for older browsers).
- The svg background is custom for this particular page, and is not intended to animate
- Contains an `h1` page title
- The sub-navigation (appears below the hero image) is an instance of the `subnav--horizontal` component

## Overview Section

## In Page Nav

## Majors, Minors and Certificates (What Can I Study) Section

## Research Section

## Innovation and Entrepreneurship Section

## Opportunities Section

## Success Section

## Call To Action Section

## Keep Exploring Section

<br>
<hr>
<br>

# A-Z Index

<br>
<hr>
<br>

# Search
