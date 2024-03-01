# Frontend Mentor - Recipe page

This is a solution to
the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).
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

Your challenge is to build out this recipe page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [click here to see the solution](https://www.frontendmentor.io/solutions/-DCXg2IGc8F)
- Live Site
  URL: [click here to see the Live Site](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor16%E2%80%94recipe-page/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/jOROQZb)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Responsiveness
- CSS Lists
- CSS Tables

### What I learned

- how to change the color of a `hr` element and related properties
- i explored a lot of properties about css lists ,list markers especially
- i also learned a lot about css tables

### Code Highlights

- **Changing the Color of a `hr` Element**
  ```css
  hr {
      background-color: var(--color-light-grey);
      height: 1px;
      border: none;
      margin-top: 1.5rem;
  }
  ```

- **Styling List Items in CSS**
  ```css
  ul, ol {
    list-style-position: outside;
    margin-left: 1.5rem;
    line-height: 2rem;
  }
  
  ol li::marker, ul li::marker {
    color: var(--color-nutmeg);
  }
  
  ol > li::marker {
    font-weight: var(--font-weight-heading-bold);
  }
  ```
  
- **styling css even table data elements**
  ```css
    td:nth-child(even) {
    color: var(--color-nutmeg);
    font-weight: var(--font-weight-heading-bold);
    }
  ```

### Useful resources

- [CSS Lists](https://www.w3schools.com/css/css_list.asp)

- [Next-Level List Bullets With CSS `::marker`](https://youtu.be/uzYZUPoEli8?si=G5o-QVgBB9mUb5lB)

- [everything you need to know about the gap after the list marker](https://css-tricks.com/everything-you-need-to-know-about-the-gap-after-the-list-marker/#:~:text=The%20length%20of%20the%20gap,size%20than%20built%2Din%20markers.)

- [Changing the color of an `hr` element](https://stackoverflow.com/questions/6382023/changing-the-color-of-an-hr-element)

- [`text-indent` property in css](https://www.w3schools.com/cssref/pr_text_text-indent.php)

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
