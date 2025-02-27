This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of contents

- [Overview](#overview)
  - [Running the project](#running-the-project)
  - [The app](#the-app)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

## Running the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### The app

Users should be able to:

- See placeholders when the site loads
- View the site on different devices
- Use the search bar to enter a query and find a video
- Click a video from the list and load that video

### Screenshot

<img src="./public/react-tube desktop.jpeg" alt="Screenshot 1" height="400"/>
<img src="./public/react-tube mobile.jpeg" alt="Screenshot 2" height="400"/>
<img src="./public/react-tube tablet.jpeg" alt="Screenshot 2" height="400"/>

### Links

- Repository URL: [https://github.com/tomwinskell/react-tube](https://github.com/tomwinskell/react-tube)
- Live Site URL: [https://react-tube-ten.vercel.app/](https://react-tube-ten.vercel.app/)

## My process

### Key Features and Implementation Details

- Uses Axios to fetch Google YouTube API data
- Data stored using useState
- UI updates using React and useState
- useDebounce used to only fetch 1s after user finishes typing, to prevent multiple submissions to fetch
- Tailwind CSS used for responsive styling

### Built with

- Next.js
- React
- Axios
- useDebounce
- Tailwind CSS

## What I learned

### Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [use-debounce](https://github.com/niklasvh/use-debounce) - A simple React hook for debouncing values.
- [use-debounce Documentation](https://www.npmjs.com/package/use-debounce) - Official documentation for usage and examples.
- [Axios Documentation](https://axios-http.com/docs/intro) - Learn about Axios for making HTTP requests.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official React documentation for getting started and API reference.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Official documentation for Tailwind CSS.

## Author

- [LinkedIn](https://www.linkedin.com/in/tomwinskell) - Professional network and career connections.
- [Notion](https://tomwinskell.notion.site) - Personal workspace and knowledge management.
- [GitHub](https://github.com/tomwinskell) - Check out my projects and code repositories.
