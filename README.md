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

The previous implementation wasn't optimal for business escalation, as new service types appear, the getTotal function wouldn't support them. My diagram refactor can be found below.

![Class diagram](public/diagram.png?raw=true)

As you can see, the abstraction of the price per service in the MultimediaContent class will allow new service types to be supported easily. The MultimediaContent will now have a price and a type to have the flexibility for new service types to be added to the software.

The services and service types are requested by the user to the database and then used in the refactored getTotal function below.

```
getTotal = () => {
  const serviceTypes = ["DownloadService", "StreamingService", "VRService", ... ];
  return this.services.reduce((accumulator, currentValue) => {
    const multimediaContent = currentValue.getMultimediaContent();
    serviceTypes.forEach(serv => {
        if(multimediaContent.getType() == serv){
            accumulator += multimediaContent.getPrice();
            if(multimediaContent.isPremium()){
                accumulator+= multimediaContent.getAdditionalFee();
            }
        }
    });
    return accumulator;
  }, 0);
}
```

As a security improvement, I would suggest taking the account login information out of the RegisteredUser class and move it to a class that handles the login and logout processes separately.