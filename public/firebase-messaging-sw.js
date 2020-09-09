importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAoefGGJQ4_eQaw93Zdekt05KvcUWJnZ7Y",
    authDomain: "push-notification-pwa-9199b.firebaseapp.com",
    databaseURL: "https://push-notification-pwa-9199b.firebaseio.com",
    projectId: "push-notification-pwa-9199b",
    storageBucket: "push-notification-pwa-9199b.appspot.com",
    messagingSenderId: "332472894652",
    appId: "1:332472894652:web:549d6b95aa51d3b91dbcb9",
    measurementId: "G-X94J53XD75"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
