# VeterInformant

VeterInformant is an application built to provide a means for veterans to view and search for relevant news articles that apply to them and those they care about from the Public News API.

This was a project that I took on as part of a 4 day binary challenge (two names drawn out of a hat, one was a demographic and the other was an api). I happened to be lucky enough to get veterans (I am one) and the news API. Immediately I knew I wanted to create an application that could show veterans the news as it applied to them. This is my first agile iteration on the project and cannot wait to polish this over time into something that could be of real value to the community one day!

### Demo

<a href="https://imgflip.com/gif/2ytq8g"><img src="https://i.imgflip.com/2ytq8g.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/2ytr2q"><img src="https://i.imgflip.com/2ytr2q.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/2ytrm1"><img src="https://i.imgflip.com/2ytrm1.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/2ytrug"><img src="https://i.imgflip.com/2ytrug.gif" title="made at imgflip.com"/></a>

### Prerequisites

This application asumes that you have the following installed on your machine:

- [node](https://www.npmjs.com/get-npm)
- [npm](https://www.npmjs.com/get-npm)

### Setup

1. Fork this repository by clicking on the "Fork" button on the top-right of this page.

2. Open your terminal and navigate to the working directory (for instructions on how to navigate through your terminal see [here](https://ccrma.stanford.edu/guides/planetccrma/terminal.html)) you want your new directory to be located, and enter the following command:
`git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/veterinformant`

3. Get into your new local copy of the VeterInformant directory:
`cd veterinformant`

4. And then add an `upstream` remote that points to the main repo:
`git remote add upstream https://github.com/Cody-Price/veterinformant`

5. Pull in the latest version of master from upstream (ie: the main repo):
`git pull upstream master`

7. Install dependencies:
`npm install`

### To run as Developer

1. Navigate into the VeterInformant directory and enter the following command:
`npm start`

This will open up your default browser and run the application on localhost:3000

### Testing

1. Enter the following command while within the VeterInformant directory:
`npm test`

### Deployment

This application is not yet in the deployment phase, however if you would like to contribute, please see the <a href="#contributing">Contributing</a> section.

### Built With

- [Create React App](https://github.com/facebook/create-react-app) - Common React Project Boilerplate
- [React](https://reactjs.org/) - Library/Framework
- [Redux](https://redux.js.org/) - State Container
- [Router](https://github.com/ReactTraining/react-router) - Declarative Routing
- [Redux-Thunk Middleware](https://github.com/reduxjs/redux-thunk) - Asynchronous Actions for Redux State Container
- [Jest](https://jestjs.io/) - Javascript testing framework that works in conjunction with React
- [Enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utility for React that makes it easier to test React Components' output

<p id="contributing"></p>

### Contributing

1. Comment on a given issue you would like to undertake.

2. Checkout a new branch on your local machine (based on `upstream/master`)

3. Utilize rebase work flow (for Rebase workflow questions please reference at: `https://git-scm.com/docs/git-rebase`)

4. Push up changes to your forked repo branch and make necessary PR into forked repo's master

5. Request the Pull Request to the original repo following the PR template

6. Include a brief commit message that details the changes you have made

### Authors

- [Cody Price](https://github.com/cody-price) - Logic & Design

### License

This project requires no license

### Acknowledgments

I would like to thank Christie Lynam for her excellent help with understanding state containers and asynchronous actions, as well as David Whitaker who helped me understand the finer points of working with *ahem* sub-par documentation. They are both fantastic teachers!
