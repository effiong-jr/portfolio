import githubFinder from './projects/github-finder.PNG';
import watchStore from './projects/watchStore.PNG';
import todoApp from './projects/todoApp.PNG';
import hackernews from './projects/hackernews.PNG';
import pixelArtMaker from './projects/pixelArtMaker.PNG';
import javascriptDoc from './projects/technicalDoc.PNG';

export const projectData = [
    {
        id: 1,
        title: "Github Finder",
        desc: "A React.js app that consumes the Github API to search and display github users and their repositories.",
        image: githubFinder,
        demoLink: "https://githubfinder-by-effiong.netlify.com/",
        codeLink: "https://github.com/effiong-jr/Github-Finder",
    },
    {
        id: 2,
        title: "Watch Store",
        desc: "A React.js e-commerce app that demonstrates how to add items to cart and calculate the total price and quantity of all items in cart.",
        image: watchStore,
        demoLink: "https://effiong-watch-store.netlify.com/",
        codeLink: "https://github.com/effiong-jr/watch-store-app",
    },
    {
        id: 3,
        title: "Hacker News App",
        desc: "A React.js application that consumes the Hacker News API to search for and display topics entered in the search bar. ",
        image: hackernews,
        demoLink: "https://effiong-hackernews-app.netlify.com/",
        codeLink: "https://github.com/effiong-jr/hackernews_app",
    },
    {
        id: 4,
        title: "Todo App with React & Redux",
        desc: "A simple Todo app demonstrating CRUD functionalities using React.js and Redux for state management.",
        image: todoApp,
        demoLink: "https://effiong-todo-app-with-react-redux.netlify.com/",
        codeLink: "https://github.com/effiong-jr/Todo-App-with-React-and-Redux",
    },
    
    {
        id: 5,
        title: "Pixel Art Maker",
        desc: "An app that uses the jQuery library to draw rows and columns were a user can color individual cells to make art.",
        image: pixelArtMaker,
        demoLink: "https://effiong-jr.github.io/pixel_art_maker/",
        codeLink: "https://github.com/effiong-jr/pixel_art_maker",
    },
    {
        id: 6,
        title: "JavaScript Documentation Project",
        desc: "A clone of part of the JavaScript Documentation.",
        image: javascriptDoc,
        demoLink: "https://codepen.io/debull/full/pYQOYw",
        codeLink: "https://codepen.io/debull/pen/pYQOYw",
    },
    
]