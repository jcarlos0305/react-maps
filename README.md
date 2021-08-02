# React maps

This project was created with [Create React App](https://github.com/facebook/create-react-app) and using [
Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview).

## Instalation
After cloning the repository we need to install all the dependencies.
### In the command line run `npm install` or `yarn`

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Theoretical test
<!-- ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/public/diagram.png?raw=true) -->
![Class diagram](public/diagram.png?raw=true)

The first improvement would be to add a boolean property to the service class to be able to tell if a service has been paid or not, this will prevent the getTotal function from charging every service that the user has requested every time that it is called.

Before adding this change to the getTotal function, due to JavaScript being a  `prototype-based language`, the `typeof currentValue` is going to be `object`, to achieve this comparison we need to use `currentValue instanceof` to apply the right price.

Then all that it's left to do is validate if the service has been paid, in case it hasn't we add it to the total.

```
getTotal = () => {
    return this.services.reduce((accumulator, currentValue) => {
      const multimediaContent = currentValue.getMultimediaContent();
      if(!currentValue.paid) {
        if(currentValue instanceof StreamingService) accumulator += multimediaContent.streamingPrice;
        if(currentValue instanceof DownloadService) accumulator += multimediaContent.downloadPrice;
        if(multimediaContent instanceof PremiumContent) accumulator += multimediaContent.additionalFee;
      }
      return accumulator;
    }, 0);
  }
  ```

  As a security improvement I would suggest to take the account login information of the user and move it to a class that handles the login, logout and registration processes.

  Also adding watchingProgress to the streaming service would allow the user to resume any stream where he left it. The deviceType in the downloadSerice would allow us to know which multimediaContent should be downloaded by the device of the user, to differentiate mobile from desktop.