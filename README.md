# XAN Site github repository.

![xan site](https://user-images.githubusercontent.com/37781362/45939818-2ad82300-bf8a-11e8-99b0-497568251649.png)

Current Build: http://xanofficial.com/

## Build Tools

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap for bootstrap integration within React
- React-reveal for easy scroll animations
- React-Transition-Group for smooth page transitions.
- React-anchor-link-smooth-scroll for smooth navigation scrolls.

# Features

## Navigation

I opted for a simplistic design for my personal page, thus I decided to have a toggle-able hamburger icon as the entry to my navigation. The nav icon color corresponds to each page's theme.

![capture](https://user-images.githubusercontent.com/37781362/46927899-c0485f00-cfec-11e8-9484-47b7c9f82558.PNG)

## Slide-in navigation and animated icon

I wanted to implement a slide-in navigation and an animated icon here and they turned out pretty decent. I'm a fan of animation so I use a lot of CSS transitions.

![portfolio nav slide](https://user-images.githubusercontent.com/37781362/46115025-238f6000-c1aa-11e8-8835-ecfdb179b721.PNG)

I use React state to implement the toggle functionality.

![portfolio nav toggle](https://user-images.githubusercontent.com/37781362/46115410-9d741900-c1ab-11e8-9192-3ab6e9eb9021.png)

As seen above, the toggle functions to change the toggle state from false to active (or vice-versa). This triggers the following CSS:

![portfolio toggle css](https://user-images.githubusercontent.com/37781362/46115570-7702ad80-c1ac-11e8-9365-57cd226b92a7.PNG)

Slide-in: The important things to note are the transformations and the opacity changes when the class ".active-X" is applied. The navigation modal by default is translated 100% to the right, completely off the screen. When toggled however, it is translated to 0% (within view).

![portfolio nav icon transform](https://user-images.githubusercontent.com/37781362/46116743-6c4b1700-c1b2-11e8-9631-47f2c41345bf.PNG)

Animated icon: Here, the important CSS is the rotation of the psuedoclasses for the ".hamburger" class. These two different rotations end up creating an "X" from the original hamburger icon.

# Project gallery with links to site and github.

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

I contain my parallax logic for each item within if statements. The reason for this is because I would encounter errors exclaiming that these parallax items "could not be found".

I reason that the cause of this is because the parallax logic would run before React could properly render the parallax items - baffling the client into questioning, "You want me run this logic on something that doesn't exist?".

To work around the issue, I contain the logic within if statements. In essence, "If these objects exist, run this code". I feel there is a better method out there, but this works for me for now.

## Development Notes:

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects. Although I really miss the efficient import feature of SCSS (Vanilla CSS has an import feature but it is not as efficient since it makes several requests), CSS still offers the ability to assign variables so it's not too bad. That said, I plan on trying SCSS with React again in the future.

- With the new React App V2 release, I will now be using SASS on future projects! React specifies that SASS will now automatically be integrated with each new create-react-app build.
