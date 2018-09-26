# XAN Site github repository.

![xan site](https://user-images.githubusercontent.com/37781362/45939818-2ad82300-bf8a-11e8-99b0-497568251649.png)

Current Build: http://xanofficial.com/

## Build Tools

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap (Library for bootstrap integration within React)

## Features

### (Color) Responsive Navigation

I opted for a simplistic design for my personal page, thus I decided to have a toggle-able hamburger icon as the entry to my navigation.

![portfolio white nav](https://user-images.githubusercontent.com/37781362/46114148-3d2ea880-c1a6-11e8-9818-8c11d9985c5f.PNG)

Simple enough, a white icon works well in front of dark background. Problems arise, however, when you scroll further down and a white background is used. An easy solution is changing the color of the depending on the window.scrollY position.

Result:

![portfolio black nav](https://user-images.githubusercontent.com/37781362/46114467-a105a100-c1a7-11e8-9ebc-8f71ee100d05.PNG)

Code:

![portfolio nav code](https://user-images.githubusercontent.com/37781362/46114588-26895100-c1a8-11e8-9e2a-634f7b1f2956.PNG)

This is one of the aspects I love about React. You can easily and dynamically change JSX/CSS (class) contents under certain circumstances using component state.

I'm also using a debounce function to create intervals (15ms in this case) as to not overload the client and improve performance.

### Slide-in navigation

I wanted to try out a slide navigation and it turned out pretty decent. I'm a fan of animation so I used a lot of CSS transitions.

![portfolio nav slide](https://user-images.githubusercontent.com/37781362/46115025-238f6000-c1aa-11e8-8835-ecfdb179b721.PNG)

This time, I use React state to implement the toggle functionality.

![portfolio nav toggle](https://user-images.githubusercontent.com/37781362/46115410-9d741900-c1ab-11e8-9192-3ab6e9eb9021.png)

As seen above, the toggle functions to change the toggle state from false to active (or vice-versa). This triggers the following CSS:

![portfolio toggle css](https://user-images.githubusercontent.com/37781362/46115570-7702ad80-c1ac-11e8-9365-57cd226b92a7.PNG)

The important things to note are the transformations and the opacity changes when the class ".active-X" is applied. The navigation modal by default is translated 100% to the right, completely off the screen. When toggled however, it is translated to 0% (within view).

- Project gallery with links to site and github.
- Services pages outlining available offerings

### Development Notes:

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects.
