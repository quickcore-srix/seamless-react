const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();
var docRef = db.collection("users");

exports.addUser = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .createUser({
      email: data.email,
      emailVerified: data.emailVerified,
      phoneNumber: data.phoneNumber,
      password: data.password,
      displayName: data.displayName,
      photoURL: data.photoURL,
      disabled: data.disabled
    })
    .then(userRecord => {
      return admin
        .firestore()
        .collection("users")
        .doc(data.mac_id)
        .set({
          username: data.displayName,
          email: data.email,
          roles: data.roles,
          user_id: userRecord.uid,
          address: data.address
        })
        .then(writeResult => {
          return {
            message: `Successfully created new user:${userRecord.email} uid: ${
              userRecord.uid
            } and ${writeResult}`
          };
        })
        .catch(error => {
          console.log("Error writing user details to firestore:", error);
        });
    })
    .catch(error => {
      console.log("Error creating new user:", error);
    });
});

exports.addTag = functions.https.onCall((data, context) => {
  return admin
    .firestore()
    .collection("users")
    .doc(data.mac_id)
    .set({
      username: data.name,
      email: data.email,
      roles: data.roles,
      mac_id: data.mac_id,
      address: data.address,
      phone: data.phone
    })
    .then(writeResult => {
      return {
        message: `Successfully created new user:${data.email} uid: ${
          data.mac_id
        } and ${writeResult}`
      };
    })
    .catch(error => {
      console.log("Error creating new user:", error);
    });
});

exports.addNode = functions.https.onCall((data, context) => {
  return admin
    .firestore()
    .collection("nodes")
    .doc(data.mac_id)
    .set({
      name: data.name,
      mac_id: data.mac_id,
      address: data.address
    })
    .then(writeResult => {
      return {
        message: `Successfully created new node:${data.name} , mac_id : ${
          data.mac_id
        } , ${writeResult}`
      };
    })
    .catch(error => {
      console.log("Error writing user details to firestore:", error);
    });
});

exports.deleteUser = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(userRecord => {
      // See the UserRecord reference doc for the contents of userRecord.
      return admin
        .auth()
        .deleteUser(userRecord.uid)
        .then(result => {
          return (
            docRef.doc(data.mac_id).delete(),
            console.log(
              "Successfully deleted user ",
              result,
              " ",
              userRecord.uid,
              " mac_id : ",
              mac_id
            )
          );
        })
        .catch(error => {
          return console.log(
            "Error deleting user:",
            error,
            " ",
            userRecord.uid
          );
        });
    })
    .catch(error => {
      return console.log("Error fetching user data:", error);
    });
});

// Listens for new messages added to /:pushId and creates an
// uppercase version of the message to /messages/:pushId/uppercase
//let date = "";
//let time = "";
//let master_id = "";
//let slave_id = "";
exports.sendToFirebase = functions.database
  .ref("/{timestamp}")
  .onCreate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const timestamp1 = context.params.timestamp;
    const dateF = timestamp1.split("Z");
    const dateFormat = dateF[0].split("T");
    const date = dateFormat[0];
    const time = dateFormat[1];
    const master_id = snapshot.val().master_id;
    const slave_id = snapshot.val().slave_id;
    console.log(
      "master_id : ",
      master_id,
      "   slave_id :  ",
      slave_id,
      // "date : ",
      // date,
      //"time : ",
      //time
      "timestamp : ",
      timestamp1
    );
    // const uppercase = original.toUpperCase();
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.

    return db
      .collection("data")
      .doc(master_id)
      .collection(date)
      .doc(slave_id)
      .set({ time: time })
      .then(result => {
        return {
          message: `Successfully sent to firestore : ${result}`
        };
      })
      .catch(err => {
        return console.log(err, " master_id : ", master_id);
      });
    //return snapshot.ref.parent.child("uppercase").set(uppercase);
  });
