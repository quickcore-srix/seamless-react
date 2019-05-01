###### SETTING UP DEVELOPMENT ENVIRONMENT

### If you don't already have a package.json file, create one via

`npm init`

###Install the firebase npm package and save it to your package.json file by running:
`npm install --save firebase`

###Install the firebase tools
`npm i -g firebase-tools`

### Next, install the firebase-admin npm package and save it to your package.json

`npm install firebase-admin --save`

To generate a private key file for your service account:

1.In the Firebase console, open Settings > Service Accounts.

2.Click Generate New Private Key, then confirm by clicking Generate Key.

3.Securely store the JSON file containing the key. add the path of the JSON File to initialize admin sdk

### authentication using admin-sdk

https://firebase.google.com/docs/auth/admin/

### change `config=devConfig` in src/Firebase/firebase.js file

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

      cli features : firestore,functions,hosting,storage
      language : javascript
      file functions/index.js already exists. Overwrite? (y/N) : N
       What do you want to use as your public directory? build
        Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
        File build/index.html already exists. Overwrite? (y/N) N

### `firebase deploy`

     deploying files to "seamless-connectivity-dev"

if development project works fine then go for production mode

##### DEPLOY TO PRODUCTION / REAL-TIME PROJECT

### change `config=prodConfig` in src/Firebase/firebase.js file

      this indicates the web app is in production mode
      therefore whatever you do while the webapp is in development mode
      the data is saved in firebase project  "seamless-connectivity"

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `firebase use --add default`

     choosing firebase production project "seamless-connectivity" for deploying

### `firebase init`

      cli features : firestore,functions,hosting,storage
      language : javascript
      file functions/index.js already exists. Overwrite? (y/N) : N
       What do you want to use as your public directory? build
        Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
        File build/index.html already exists. Overwrite? (y/N) N

### `firebase deploy`

     deploying files to "seamless-connectivity"
