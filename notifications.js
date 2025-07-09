const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendPushNotification = functions.https.onCall(async (data, context) => {
  const { token, title, body } = data;

  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
    webpush: {
      fcmOptions: {
//        link: "https://your-app-link.com", // Optional
      },
    },
  };

  try {
    await admin.messaging().send(message);
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: error.message };
  }
});
