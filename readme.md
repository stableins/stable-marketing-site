# Stable Marketing Site  

The Stable marketing site is a static site built in GatsbyJS and deployed to Netlify.

### Getting Started
Move into project root directory and run the below command to install all required dependencies:

    yarn


### To start the development server run the below command:

    yarn start 

Open your browser and visit  [http://localhost:8000](http://localhost:8000/). 

### CLI Commands 
Some useful commands to work with the project.

1.  `yarn start` to start development server at  [http://localhost:8000](http://localhost:8000/)
    
2.  `yarn clean`  to wipe out the cache (`.cache` folder) and public directories
    
3.  `yarn build` for generating a production build
    
4.  `yarn serve` to serve build files at  [http://localhost:9000](http://localhost:9000/)

### Deployment 

Creating a pull request to the master branch automatically deploys a preview build on Netlify that can be used for testing. Merging pull requests to the master branch builds a new production version of the site. 

You can view builds on our Netlify account here: https://app.netlify.com/teams/stableinsurance/overview. 

Additional documentation for Netlify's continues deployment configuarion can be found here: https://docs.netlify.com/configurebuilds/overview/

### API Calls

The site uses serverless functions called [Netlify functions](https://docs.netlify.com/functions/overview/) to make front end api calls to in house and 3rd party APIs. API keys are stored as environment variables within the Netlify dashboard. Netlify functions added to the `/functions` folder in the project root directory are automatically integrated on deployment.  

Documention for Netlify functions can be found here: https://docs.netlify.com/functions/overview/

