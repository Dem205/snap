# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./src/assets/Screenshot%202026-03-02%20at%2015.57.43.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
Rendering the contents of the carousel dynamically using arrays was pretty cool.


```jsx
{/* 2. The Animated Track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First Loop */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {items.map((item, index) => (
            <img src={`./src/assets/${item}.svg`} key={index} alt={item} />
          ))}
        </div>

        {/* Second Loop (Exact Duplicate) */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {items.map((item, index) => (
            <img src={`./src/assets/${item}.svg`} key={index} alt={item} />
          ))}
        </div>
```



### Continued development
Proficiency with state and other React Hooks.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**





## Author
- Frontend Mentor - [@Dem205](https://www.frontendmentor.io/profile/Dem205)
- Twitter - [@ademilade__](https://www.twitter.com/yourusername)

