# Frontend Mentor - Blog preview card solution

This is a solution to
the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).
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
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your challenge is to build out [this blog preview ](design/active-states.jpg)card and get it looking as close to the
design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice,
feel free to give it a go.
Your users should be able to:

- See hover and focus states for all interactive elements on the page
  Download the starter code and go through the README.md file. This will provide further details about the project. The
  style-guide.md file is where you'll find colors, fonts, etc.

### Screenshot

![Screen Shot.png](Screen%20Shot.png)

### Links

- Solution URL: [click here to see the solution](https://www.frontendmentor.io/solutions/html-css-IFKqcIOTCf)
- Live Site
  URL: [click here to see the Live Site](https://ranitmanik.github.io/frontendmentor-challenges/FrontendMentor01%E2%80%94Blog-preview-card/index.html)
- codepen: [click here to see the codepen](https://codepen.io/RANIT-MANIK/pen/QWowgja)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

- The importance of **HTML5 semantic elements** and **ARIA landmarks** All content should be contained within
  landmarks. Every page minimally needs a `main` element.
- I shouldn't wrap everything in extra `div`s for no reason.
- using `heading` elements appropriately and only in the correct order is really important.
- using meaningful **`alt` attribute** is really important as it helps the user understand the importance of the image
  in
  case of failed to load.
- using **`time` element** is really helpful for screen readers to marking up dates, times, and durations
- Understand When to Use `Padding` vs. `Margin` in CSS
- font-size must **NEVER** be in pixels and understood the reason behind using `rem`.also you shouldn't use px for
  `font-size`, `line-height`, `letter-spacing`.

- Always use a modern css reset at the start of the styles.
  Do not throw loads of styles on a wildcard selector `(*)`.That is terrible for performance.Resetting margin and
  padding is fine if you want but don't use it for much.
- The body should never have it's height limited, just as no text containing elements should have their height limited.
  Instead of height `100vh` on the body, use min-height instead.
- Don't set width on components.
  Instead, use `max-width` and use rem not px so the `max width`
  stays proportional to the user's font size and gives a properly responsive result.

### Code Highlights

- Don't set width or height on components.

  **Wrong way ❌❌**

    ```css
    body {
      height: 100vh;
  
  }
    ```

  **Right way ✅✅**

    ```css
    body {
      min-height: 100vh;
  }
    ```
  **Wrong way ❌❌**

    ```css
      .card {
      width: 350px;
  }
  ```

  **Right way ✅✅**

    ```css
      .card {
      max-width: 22rem;
  
  }
  ```

### Useful resources

- [Why font-size must NEVER be in pixels](https://fedmentor.dev/posts/font-size-px/) - This article
  by [Grace Snow 🌈](https://twitter.com/gracesnow) helped me to understand why we
  really use rem instead of px for font properties.
- [Understanding When to Use Padding vs. Margin in CSS](https://fedmentor.dev/posts/padding-margin/) - This is an
  amazing article by [Grace Snow 🌈](https://twitter.com/gracesnow) which helped me finally
  understand When to Use Padding vs. Margin in CSS.
- [Document should have one main landmark](https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI) -
  This is an
  amazing article by [deque university](https://dequeuniversity.com/) made me understand the importance of HTML5
  semantic
  elements and ARIA landmarks.

## Author

- Website - [Ranit Manik](https://ranitmanik.github.io/Portfolio-1.0)
- Frontend Mentor - [@RanitManik](https://www.frontendmentor.io/profile/RanitManik)
- LinkedIn - [@ranit-manik](https://www.linkedin.com/in/ranit-manik/)

## Acknowledgments

I would like to express my gratitude to the creators of the Frontend Mentor platform for providing an engaging and
practical challenge in the form of the Blog Preview Card. The hands-on experience gained through tackling this project
has significantly contributed to my growth as a web developer.

I extend my thanks to [Grace Snow](https://twitter.com/gracesnow) for her insightful articles on fundamental concepts
such as font-size units and the
appropriate use of padding versus margin in CSS. These resources played a pivotal role in enhancing my understanding and
refining my coding practices.

I also appreciate the efforts of [deque university](https://dequeuniversity.com/) for their informative content on HTML5
semantic elements and ARIA
landmarks. This knowledge has deepened my awareness of the importance of creating accessible and well-structured web
content.

Lastly, I want to acknowledge the supportive community at Frontend Mentor. The platform's collaborative environment and
constructive feedback from peers have been invaluable in refining my skills and pushing me to strive for excellence.

This project has been a rewarding learning experience, and I look forward to applying these insights in future
endeavors. Thank you to everyone who has played a part in my journey of continuous improvement.

Best regards,<br>
Ranit Manik
