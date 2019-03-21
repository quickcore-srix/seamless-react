###### SETTING UP DEVELOPMENT ENVIRONMENT

### change `NODE_ENV="development"` in .env file

      this indicates the web app is in development mode
      therefore whatever you do while the webapp is in development mode
      the data is saved in firebase project  "seamless-connectivity-dev"

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

if webapp runs perfectly at local machine then,

##### DEPLOY TO DEVELOPMENT PROJECT

### `firebase use --add dev`

     choosing firebase development project "seamless-connectivity-dev" for deploying

### `firebase init`

      source folder (build)

### `firebase deploy`

     deploying files to "seamless-connectivity-dev"

if development project works fine then go for production mode

##### DEPLOY TO PRODUCTION / REAL-TIME PROJECT

### change `NODE_ENV="production"` in .env file

      this indicates the web app is in production mode
      therefore whatever you do while the webapp is in development mode
      the data is saved in firebase project  "seamless-connectivity"

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `firebase use --add default`

     choosing firebase production project "seamless-connectivity" for deploying

### `firebase init`

      source folder (build)

### `firebase deploy`

     deploying files to "seamless-connectivity"
