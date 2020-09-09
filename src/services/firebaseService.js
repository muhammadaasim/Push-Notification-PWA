import firebase from 'firebase'

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
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>", currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

            });
        }
    }
    )

}
