# XAN Site github repository.

![xan site](https://user-images.githubusercontent.com/37781362/45939818-2ad82300-bf8a-11e8-99b0-497568251649.png)

Current Build: http://xanofficial.com/

## Build Tools:

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap (Library for bootstrap integration within React)

## Features:

### (Color) Responsive Navigation

I opted for a simplistic design for my personal page, thus I decided to have a toggle-able hamburger icon as the entry to my navigation.

![portfolio white nav](https://user-images.githubusercontent.com/37781362/46114148-3d2ea880-c1a6-11e8-9818-8c11d9985c5f.PNG)

Simple enough, a white icon works well in front of dark background. Problems arise, however, when you scroll further down and a white background is used. An easy solution is changing the color of the depending on the position of the window.scrollY position.

Result:

![portfolio black nav](https://user-images.githubusercontent.com/37781362/46114467-a105a100-c1a7-11e8-9ebc-8f71ee100d05.PNG)

Code:

![portfolio nav code](https://user-images.githubusercontent.com/37781362/46114588-26895100-c1a8-11e8-9e2a-634f7b1f2956.PNG)

This is one of the aspects I love about React. You can easily and dynamically change JSX/CSS (class) contents under certain circumstances using component state.

I'm also using a debounce function as to create intervals (15ms in this case) as to not overload the client and improve performance.

- Slide-in navigation
- Project gallery with links to site and github.
- Services pages outlining available offerings

### Development Notes:

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects.
