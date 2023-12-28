# Frontend Mentor - Results summary component solution

This is a solution to
the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).
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

Your challenge is to build out this results summary component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.

We provide the data for the results in a local `data.json` file. So you can use that to add the results and total score
dynamically if you choose.

Your users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution
  URL: [click here to see the solution](https://www.frontendmentor.io/solutions/responsive-summary-component-using-html-css-z3Of8x7IhU)
- Live Site
  URL: [click here to see the code](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor02%E2%80%94Results-summary-component/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/OJqPwaz)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flex

### What I learned

- **Attribute Selectors**: Explored the utility of attribute selectors in CSS.
- **Layout Planning**: Emphasized the importance of planning the layout before coding.
- **HSLA Function**: Discovered the convenience of setting variable values inside an `hsla()` function.
- **CSS Variables**: Utilized CSS variables for colors, font properties, and border-radius for improved accessibility
  and clarity.
- **Aspect Ratio Property**: Implemented the CSS `aspect-ratio` property for responsive design.
- **Media queries not in px**: Media queries must be defined in rem or em not px.
- **Restrict use of data attributes**: use `strong` in html instead of a data attribute to make text bold for emphasis
  it is recommended against so much reliance on data attributes as css selectors. It's higher specificity, very
  unusual/uncommon, so use wisely.
- **Button-type**: It is recommended to include a type attribute whenever you use a button element. (Not essential but
  can help avoid common bugs)

### Code Highlights

- attribute selector:

  ```html
  <h3 heading-type="accent-1">
    This is a accent-1 heading
  </h3>
  ```
  ```css
  [heading-type="accent-1"] {
    color: hsla(var(--Light-red), 0.8);
  }
  ```
- use of variables inside a `hsla` function
  ```css
  :root {
    --White: 0, 0%, 100%;
  }

  body {
    background-color: hsla(var(--White), 0.5);
  }
  ```

  ```css
  :root {
    --Light-slate-blue-background: hsl(252, 100%, 67%);
    --Light-royal-blu-background: hsl(241, 81%, 54%);
    --gradient-background: linear-gradient(to bottom,
    var(--Light-slate-blue-background), var(--Light-royal-blu-background));
  
  }
  
  .item {
    background: var(--gradient-background)
  }

   ```
- Button type:
  ```html
  <p>This is a <strong>bold</strong> text example.</p>
  
  ```

## Useful resources

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

I extend my gratitude to [Grace Snow](https://twitter.com/gracesnow) once again for reviewing my code and providing valuable suggestions for its enhancement.

This project has been a rewarding learning experience, and I look forward to applying these insights in future
endeavors. Thank you to everyone who has played a part in my journey of continuous improvement.

Best regards,<br>
Ranit Manik
