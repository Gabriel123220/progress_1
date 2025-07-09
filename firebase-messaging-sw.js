// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyASUp-4HKzufhx5bNLlDq9HR2-rgtBhem0",
  authDomain: "progress-team.firebaseapp.com",
  projectId: "progress-team",
  storageBucket: "progress-team.appspot.com",
  messagingSenderId: "258917029493",
  appId: "1:258917029493:web:75f944ec9bef6e0556ca3c",
  measurementId: "G-NQSMVD0LY5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192.png' // Ensure this path exists
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
