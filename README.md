# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Age calculator app solution](#frontend-mentor---age-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./solution/screenshot.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/age-calculator-app-RmRVJURaNL)
- Live Site URL: [Github Pages](https://sophie-mc-dev.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow


### What I learned

```getDate()
The getMonth and getDay methods in JavaScript's Date object return zero-based values.

getMonth: Returns the zero-based month value, where January is represented by 0 and December by 11. So if you use new Date().getMonth(), it will return the current month minus one. To get the actual month, you need to add 1 to the result.

getDay: Returns the day of the week as a zero-based value, where Sunday is represented by 0 and Saturday by 6. It represents the day of the week, not the day of the month.

If you want to get the current month or day of the month, you should use the following methods:

new Date().getMonth() + 1: To get the current month (1-12).
new Date().getDate(): To get the current day of the month (1-31).
```

### Continued development

In future projects, I would like to continue focusing on the following areas related to JavaScript and DOM manipulation and event handling.

### Useful resources

- [Count Animation - Stackoverflow](https://stackoverflow.com/questions/16994662/count-animation-from-number-a-to-b) - This helped me for creating the scrambled animation for the age output numbers.

## Author

- LinkedIn - [Sofia Merino Costa](https://www.linkedin.com/in/sofia-m-costa/)
- Frontend Mentor - [@agirlhasnoname07](https://www.frontendmentor.io/profile/agirlhasnoname07)
