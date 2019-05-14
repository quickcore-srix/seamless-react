##### SETTING UP PROJECT AND REQUIRED ENVIRONMENT

### install Node.js

windows(x64) : `https://nodejs.org/dist/v12.1.0/node-v12.1.0-x64.msi`

additional information : `https://nodejs.org/en/`

during installation process check all the features given.

### After installation :

check node version in command prompt : `node -v`

check npm version in command prompt : `npm -v`

### install firebase for node.js

`npm install firebase`

### installing firebase tools

`npm i -g firebase-tools`

### cloning code

`C:\Users\(Your Name)> D:`

`D:\> git clone https://github.com/quickcore-srix/seamless-react.git`

`D:\> cd seamless-react`

### install all dependencies in package.json for this project

`npm i`

### If you don't already have a package.json file, create one via

`npm init`

### Install the firebase npm package and save it to your package.json file by running:

`npm install --save firebase`

### Install the firebase tools

`npm i -g firebase-tools`

<br/>

#### All SET !!!

you are good to go

`D:\seamless-react> npm start`

It redirects to browser with address `localhost:8080`

<br/>
<br/>
#### SETTING UP DEVELOPMENT ENVIRONMENT

### change `config=devConfig` in src/Firebase/firebase.js file

      this indicates the web app is in development mode
      therefore whatever you do while the webapp is in development mode
      the data is saved in firebase project  "seamless-connectivity-dev"

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080] to view it in the browser.

if webapp runs perfectly at local machine then,

##### DEPLOY TO DEVELOPMENT PROJECT

### `firebase use --add dev`

choosing firebase development project "seamless-connectivity-dev" for deploying

### `firebase init`

      cli features : ` firestore,functions,hosting,storage `
      language : `javascript`
      file functions/index.js already exists. Overwrite? (y/N) : `N`
      What do you want to use as your public directory? `dist`
      Configure as a single-page app (rewrite all urls to /index.html)? (y/N) : `y`
      File build/index.html already exists. Overwrite? (y/N) : `N`

### `firebase deploy`

     deploying files to "seamless-connectivity-dev"

if development project works fine then go for production mode

##### DEPLOY TO PRODUCTION / REAL-TIME PROJECT

### change `config=prodConfig` in src/Firebase/firebase.js file

      this indicates the web app is in production mode
      therefore whatever you do while the webapp is in development mode
      the data is saved in firebase project  "seamless-connectivity"

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `firebase use --add default`

     choosing firebase production project "seamless-connectivity" for deploying

### `firebase init`

      cli features : `firestore,functions,hosting,storage`
      language : `javascript`
      file functions/index.js already exists. Overwrite? (y/N) : `N`
       What do you want to use as your public directory? `dist`
        Configure as a single-page app (rewrite all urls to /index.html)? (y/N): `y`
        File build/index.html already exists. Overwrite? (y/N) : `N`

### `firebase deploy`

     deploying files to "seamless-connectivity"

### Link

development : https://seamless-connectivity-dev.firebaseapp.com/

production : https://seamless-connectivity.firebaseapp.com/

                                     Hope works well!!

### any issues ?

create an issue here : https://github.com/quickcore-srix/seamless-react/issues
we will come to you as soon as possible
