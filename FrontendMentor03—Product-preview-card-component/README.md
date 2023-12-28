# Frontend Mentor - Product preview card component solution

This is a solution to
the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
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

Your challenge is to build out this product preview card component and get it looking as close to the design as
possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in
the **#help** channel.

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [click here to see the solution](https://www.frontendmentor.io/solutions/product-preview-card-component-using-grid-6-ppfghQ4J)
- Live Site
  URL: [click here to see the code](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor03%E2%80%94Product-preview-card-component/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/full/vYPOJad)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flex

### What I learned

### What I Learned Today:

- **\<picture\> Tag:**
    - Discovered and utilized the \<picture\> tag in HTML, a powerful tool for responsive image handling.
    - Learned how to interchange image files based on specific screen sizes using the `srcset` attribute.

- **ARIA Attributes:**
    - Implemented ARIA attributes, such as `aria-label`, to enhance accessibility in web development.

- **Grid Layout:**
    - Utilized the CSS Grid layout extensively for a project.
    - Explored less common grid properties, including the use of `auto` to dynamically allocate space based on content.

### Code Highlights

- ARIA attributes

  ```html
      <p class="price" data-item-type="strong" aria-label="Price: $149.99">$149.99</p>
  
  ```

- Picture and source tag:
  ```html
  <picture>
            <source media="(max-width: 599px)" srcset="images/image-product-mobile.jpg">
            <source media="(min-width: 600px)" srcset="images/image-product-desktop.jpg">
            <img class="product-image" src="images/image-product-desktop.jpg" alt="Gabrielle Essence Eau De Parfum image">
        </picture>
  ```
- use of `auto` in grid:
  ```css
  .price-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
  }
  ```

## Useful resources

- [Display Different Images Based on Device Width with #Picture and #Source Tags](https://www.youtube.com/watch?v=nHB-3WJTfSg)
- [ARIA HTML Tutorial - What is ARIA & Why it's Important to Use!](https://youtu.be/0hqhAIjE_8I?si=oUBcb4CUsM8b2jf-)

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

