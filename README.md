# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content


### Links

- Solution URL: [[Add solution URL here](https://github.com/vanshdhir2026-ai/Result-Summary-Card)](https://your-solution-url.com)
- Live Site URL: [[Add live site URL here](https://vanshdhir2026-ai.github.io/Result-Summary-Card/)](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to manage flexbox and grid sizing constraints, recognizing that default properties can cause child elements to overflow and using min-width rules to allow internal content to contract smoothly. Finally, I reinforced global CSS hygiene, mastering the use of standard reset properties so box dimensions remain predictable and content scales seamlessly across any screen size.

### Continued development

In future projects, start by adopting a mobile-first design strategy where base layout rules, such as display: flex and centering properties on the main tag, live outside any media queries so your page stays aligned by default across all devices. Keep media queries strictly for adapting layout structures—like switching from a single column to a side-by-side grid—as the screen width grows.

When sizing containers, focus on fluid responsiveness by pairing width: 100% with a pixel-based max-width rather than percentage caps, which allows cards to expand cleanly on mobile screens while capping nicely on desktop viewports. To avoid unexpected layout breaks, consistently apply min-width: 0 to flex and grid children so internal text and icons shrink smoothly instead of overflowing past their containers. Finally, ensure global resets include alongside zeroed margins and paddings so inner padding never inadvertently expands your elements beyond their intended dimensions.

## Author

- Frontend Mentor - [@SakshiRoy]
- Linkdin - [@SakshiRoy]

