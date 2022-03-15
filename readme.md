## Stable Marketing Site Readme 

Move into project root directory and run command below to install dependencies:

    yarn

After the installation, you should have a folder named /node_modules in the project root directory..

### How To Run Development Server To start our development server run command below:

    yarn start 

Open your browser and visit  [http://localhost:8000](http://localhost:8000/). 

### CLI Commands 
Some useful commands to work with the project.

1.  `yarn start` to Start development server at  [http://localhost:8000](http://localhost:8000/)
    
2.  `yarn clean` for Cleaning / to clean .cache, public directory etc.
    
3.  `yarn build` for Generating production build
    
4.  `yarn serve` To serve build files at  [http://localhost:9000](http://localhost:9000/)

### Deployment 

Creating a pull request to the master branch automatically deploys a preview build on Netlify that can be used for testing. 

You can access our Netlify account here: https://app.netlify.com/teams/stableinsurance/overview. 

Merging pull request to main builds a new production version of the site. Additional documentation for Netlify's continues deployment configuarion can be found here: https://docs.netlify.com/configurebuilds/overview/
