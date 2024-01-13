# Frontend Mentor - Testimonials grid section solution

This is a solution to
the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).
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

Your challenge is to build out this card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [click here to see the solution](https://www.frontendmentor.io/solutions/testimonials-grid-section-using-scss-cdcEOqq_8W)
- Live Site
  URL: [click here to see the Live Site](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor08%E2%80%94testimonials-grid-section/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/NWJrQeg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- responsiveness

### What I learned

- **CSS Grid Areas:** Explored and implemented the use of CSS grid areas for creating responsive grid layouts.
-
- **Grid Template Areas:** Defined and adjusted grid template areas to organize and position elements within the grid
  structure.

- **Testimonial Styling:** Applied grid areas to testimonials using the `nth-child` selector for targeted styling.

- **Responsive Design:** Gained practical experience in adapting layouts to different screen sizes for a more
  user-friendly experience.

### Code Highlights

- using css grid-area for responsive grid-layout  


  ```css
  .testimonials:nth-child(1) { grid-area: one; }
  .testimonials:nth-child(2) { grid-area: two; }
  .testimonials:nth-child(3) { grid-area: three; }
  .testimonials:nth-child(4) { grid-area: four; }
  .testimonials:nth-child(5) { grid-area: five; }
  
  main {
    grid-template-areas:
    'one'
    'two'
    'three'
    'four'
    'five';
  }
  @media (min-width: 30rem) {
    main {
    grid-auto-columns: 1fr;
    grid-template-areas:
    'one one'
    'two five'
    'three five'
    'four four';
    }
  }
    
  @media (min-width: 50rem) {
    main {
    grid-template-areas:
    'one one two five'
    'three four four five';
    }
  }
  ```

### Useful resources

- [Learn CSS Grid the easy way](https://youtu.be/rg7Fvvl3taU?si=RRHtGe4lqElvSfi-)

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

