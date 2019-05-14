import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";

let config;

const prodConfig = {
  apiKey: "AIzaSyBn4HfA-BsvrEFeI1kEFjBH-Fcj_FqyKRg",
  authDomain: "seamless-connectivity.firebaseapp.com",
  databaseURL: "https://seamless-connectivity.firebaseio.com",
  projectId: "seamless-connectivity",
  storageBucket: "seamless-connectivity.appspot.com",
  messagingSenderId: "44643550829",
  confirmationEmailRedirect: "https://seamless-connectivity.firebaseapp.com"
};

const devConfig = {
  apiKey: "AIzaSyAwDJU1nVMUiHlN-C440JICE496t1Wbo_s",
  authDomain: "seamless-connectivity-dev.firebaseapp.com",
  databaseURL: "https://seamless-connectivity-dev.firebaseio.com",
  projectId: "seamless-connectivity-dev",
  storageBucket: "seamless-connectivity-dev.appspot.com",
  messagingSenderId: "609229546320",
  confirmationEmailRedirect: "https://seamless-connectivity-dev.firebaseapp.com"
};

class Firebase {
  constructor() {
    config = devConfig;
    app.initializeApp(config);

    //offline persistence
    app
      .firestore()
      .enablePersistence()
      .catch(function(err) {
        if (err.code === "failed-precondition") {
          console.log("network lost");
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
        } else if (err.code === "unimplemented") {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
        }
      });

    if (config === devConfig) {
      console.log("development mode..");
      window.alert("development mode..");
    } else console.log("production mode..");

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.firestore();
    this.funct = app.functions();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: config.confirmationEmailRedirect
    });

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      let mac_id;
      if (authUser) {
        this.db
          .collection("users")
          .where("user_id", "==", authUser.uid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              // console.log(doc.id);
              mac_id = doc.id;
              this.db
                .doc(`users/${mac_id}`)
                .get()
                .then(snapshot => {
                  const dbUser = snapshot.data();
                  dbUser.mac_id = mac_id;
                  // console.log(dbUser);
                  // default empty roles
                  if (!dbUser.roles) {
                    dbUser.roles = [];
                  }

                  // merge auth and db user
                  authUser = {
                    uid: authUser.uid,
                    email: authUser.email,
                    emailVerified: authUser.emailVerified,
                    providerData: authUser.providerData,
                    ...dbUser
                  };
                  //console.log(authUser);

                  next(authUser);
                })
                .catch(error => {
                  console.log(error);
                });
            });
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = mac_id => this.db.doc(`users/${mac_id}`);

  users = () => this.db.collection("users");
  // *** Message API ***

  message = uid => this.db.doc(`messages/${uid}`);

  messages = () => this.db.collection("messages");
}

export default Firebase;
