# Frontend Mentor - NFT preview card component solution

This is a solution to
the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Code Highlights](#code-highlights)
    - [Useful resources](#Useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [Add solution URL here](https://www.frontendmentor.io/solutions/nft-preview-card-component-using-html-css-Z0bX2RTQ2t)
- Live Site
  URL: [Add live site URL here](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor04%E2%80%94nft-preview-card-component/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/vYPNLWJ)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- I learned an alternative method to stack two elements without using the `position: absolute` property. By leveraging
  the power of `display: grid`, I was able to achieve this efficiently.
- I explored creating a transparent overlay on an image. This effect, triggered on hover, adds a subtle and visually
  appealing touch to the design.
- I implemented a smooth transition effect on an element when interacting with its parent element. This enhances the
  overall user experience.

## Code Highlights

- use grid to stack up two items
  ```css
  .card-img-container {
    place-items: center;
    transition: opacity 0.25s;
  }
  
  .card-img-container img {
    grid-column: 1/-1;
    grid-row: 1/-1;
  }
  ```

- transparent overlay on an image on hover
  ```css
  .card-img-container {
    border-radius: var(--border-radius-secondary);
    overflow: hidden;
    cursor: pointer;
    position: relative;
  }
  
  .card-img-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(178, 100%, 50%, 0.5);
    opacity: 0;
    transition: opacity 0.25s;
  }

  .card-img-container:hover::before {
      opacity: 1;
  }
  ```
- apply a transition effect to an element when interacting to its parent element
  ```css
  .icon-view-svg {
      opacity: 0;
  }
  
  .card-img-container:hover .icon-view-svg {
      opacity: 1;
  }
  ```

### Useful resources

- [CSS Grid trick that’s worth remembering](https://www.youtube.com/shorts/oy2iUDT0mf8)

## Author

- Website - [Ranit Manik](https://ranitmanik.github.io/Portfolio-1.0)
- Frontend Mentor - [@RanitManik](https://www.frontendmentor.io/profile/RanitManik)
- LinkedIn - [@ranit-manik](https://www.linkedin.com/in/ranit-manik/)

## Acknowledgments

I would like to express my gratitude to the creators of the Frontend Mentor platform for providing an engaging and
practical challenge in the form of the Blog Preview Card. The hands-on experience gained through tackling this project
has significantly contributed to my growth as a web developer.

I want to acknowledge the supportive community at Frontend Mentor. The platform's collaborative environment and
constructive feedback from peers have been invaluable in refining my skills and pushing me to strive for excellence.

This project has been a rewarding learning experience, and I look forward to applying these insights in future
endeavors. Thank you to everyone who has played a part in my journey of continuous improvement.

Best regards,<br>
Ranit Manik


