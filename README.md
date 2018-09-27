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

A white icon works well in front of dark background. Problems arise, however, when you scroll further down and a white background is used. An easy solution is changing the color of the depending on the window.scrollY position. I also use window.innerHeight because the only dark background I use (in the developer section) is in the landing page and I set its size to 100vh (100% of viewport height).

Result:

![portfolio black nav](https://user-images.githubusercontent.com/37781362/46114467-a105a100-c1a7-11e8-9ebc-8f71ee100d05.PNG)

Code:

![portfolio nav code](https://user-images.githubusercontent.com/37781362/46114588-26895100-c1a8-11e8-9e2a-634f7b1f2956.PNG)

This is one of the aspects I love about React. You can easily and dynamically change JSX/CSS (class) contents under certain circumstances using component state.

I'm also using a debounce function to create intervals (15ms in this case) as to not overload the client and improve performance.

### Slide-in navigation and animated icon

I wanted to implement a slide-in navigation and an animated icon here and they turned out pretty decent. I'm a fan of animation so I use a lot of CSS transitions.

![portfolio nav slide](https://user-images.githubusercontent.com/37781362/46115025-238f6000-c1aa-11e8-8835-ecfdb179b721.PNG)

This time, I use React state to implement the toggle functionality.

![portfolio nav toggle](https://user-images.githubusercontent.com/37781362/46115410-9d741900-c1ab-11e8-9192-3ab6e9eb9021.png)

As seen above, the toggle functions to change the toggle state from false to active (or vice-versa). This triggers the following CSS:

![portfolio toggle css](https://user-images.githubusercontent.com/37781362/46115570-7702ad80-c1ac-11e8-9365-57cd226b92a7.PNG)

For the slide-in: The important things to note are the transformations and the opacity changes when the class ".active-X" is applied. The navigation modal by default is translated 100% to the right, completely off the screen. When toggled however, it is translated to 0% (within view).

![portfolio nav icon transform](https://user-images.githubusercontent.com/37781362/46116743-6c4b1700-c1b2-11e8-9631-47f2c41345bf.PNG)

For the animated icon: Here, the important CSS is the rotation of the psuedoclasses for the ".hamburger" class. These two different rotations end up creating an "X" from the original hamburger icon.

### Project gallery with links to site and github.

![portfolio project gallery](https://user-images.githubusercontent.com/37781362/46116907-35c1cc00-c1b3-11e8-9da3-3bc98386ffbb.PNG)

Next is the project gallery. Each gallery item in the row below is clickable and the showcase above switches to the corresponding item.

Code:

![portfolio gallery select code](https://user-images.githubusercontent.com/37781362/46117045-e0d28580-c1b3-11e8-99ff-2e9e567445da.PNG)

I use React state again to make switches between the different gallery items. As of right now, each gallery item has its own unique function that serves to replace the currently rendered item with the newly clicked item. (I can't help but feel there is a more efficient way of doing this, but I'm still learning!)

## Parallax Effects

I'm a huge fan of the parallax effect. I use it a couple times on my artist page: the landing background, on my favorite Robert Frost quote, and on two skewed background heroes.

![xan quote](https://user-images.githubusercontent.com/37781362/46117653-48d69b00-c1b7-11e8-8cb7-469ad09e9d63.PNG)

Code:

![xan parallax code](https://user-images.githubusercontent.com/37781362/46117643-32304400-c1b7-11e8-9628-a8f001e14070.PNG)

Bug fix: I contain my parallax logic for each item within if statements. The reason for this is because I would encounter errors exclaiming that these parallax items "could not be found".

I deduce that the cause of this is because the parallax logic would run before React could properly render the parallax items - baffling the client into questioning, "Yo, you want me run this logic on something that doesn't exist?".

To work around the issue, I contain the logic within if statements. In essence, "If these objects exist, run this code". I feel there is a better method out there, but this works for me for now.

### Development Notes:

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects. Although I really miss the efficient import feature of SCSS (Vanilla CSS has an import feature but it is not as efficient since it makes several requests), CSS still offers the ability to assign variables so it's not too bad. That said, I plan on trying SCSS with React again in the future.
