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
