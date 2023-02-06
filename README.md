# MMGY Global Project

A landing page built with React, Tailwind and Framer Motion that features sliding windows that reveal an illustrated beach with a button to view a video.

## GIF

![Gif](public/images/gif.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your computer.

### Installing

1.  Clone this repository to your local machine

```bash
git clone https://github.com/adamddurrant/beach-reveal

```

2.  Navigate to the project directory

```bash
cd beach-reveal
```

3.  Install the dependencies

```bash
npm install
```

4.  Start the development server

```bash
npm start
```

Your default browser should now automatically open and display the landing page.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework

## Reflection/Evaluation

- Despite my lack of animation knowledge, I enjoyed this challenge and was surprised with what I could achieve.
- The project took approximately 4-5 hours to complete.
- I chose to use react to build quickly and to avoid as much vanilla CSS animation as possible and instead to use an animation library (from memory, plain css animation can be time consuming).
- I did not have access to the adobe software required to open illustrator files so instead I used [photopea.com](https://www.photopea.com/) to open and view each layer of the design
- I exported each image layer that I needed either as PNG or, where possible, an SVG. In any case, each image was cropped and cut out using photopea.
- I spent a lot of time researching a method to animate the beach image to reveal in a curtain like way (from the center of the screen outwards). Eventually, I found CSS `clip-path`. I used this CSS property with a polygon shape and animated the `clip-path` to reveal the image behind the windows. I animated the beach reveal at the same speed as the windows opening.
- To avoid lifting up state by using [context](https://reactjs.org/docs/context.html) with a boolean state value to manage the reveal and play of the youtube video.
- I mostly took advantage of ternary expressions combined with [useState](https://reactjs.org/docs/hooks-reference.html#usestate) to manage interactions.
- I tripped over myself with `z-index` a few times as I misunderstood how `z-index` takes into account element `position` and DOM hierachy when two `z-index` values are the same - also Tailwind has set z-index values that are multiples of '10' up to 50.
- My approach was to make the interaction work and THEN follow up with a refactor to separate components and simplify code for better reading.
- I ran out of time trying to figure out how to change the doors from solid to opaque when opened - my thought process was to overlay a second set of opaque windows (exported from the design files) that animate identically to the solid windows. As the two sets of doors both animate, I could then transition the opacity of the solid doors out and the opacity of the opaque doors in.
