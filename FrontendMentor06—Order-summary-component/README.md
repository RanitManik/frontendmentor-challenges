# Frontend Mentor - Order summary card solution

This is a solution to
the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).
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

Your challenge is to build out this order summary card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.

Your users should be able to:

- See hover states for interactive elements

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [Add solution URL here](https://www.frontendmentor.io/solutions/qr-code-component-using-html-css-svjAZqvJiC)
- Live Site
  URL: [Add live site URL here](https://github.com/RanitManik/frontendmentor-challenges/FrontendMentor06%E2%80%94Order%20summary%20component/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/ExMVXaL)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- CSS custom properties
- CSS Grid
- CSS Flex

### What I learned

- build this project using `SCSS` which i am still learning
- learned about `nesting`, `variables`, `mixins` and some basic stuff about `SCSS`
- discovered that `box-sizing` property can fix `padding` related `overflow` issues
- applied the concept of variable for `screen-size`, in `@media` queries, reducing redundancy and enhancing code readability.

### Code Highlights

- `box-sizing` fixed padding-overflow
  ```css
  div {
      box-sizing: border-box;
      width: 100%;
      border-radius: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
  }
  ```
- use variables for writing `screen-size` in @media-queries
  ```scss
  $screen-size: 30rem;
  
  @media (min-width: $screen-size) {
      > div {
        padding: 1.5rem;
      }
    }
    @media (max-width: $screen-size) {
      > div {
        padding: 1rem;
      }
    }
  ```

### Useful resources

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

