importScripts(
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyBVMw9NS3R49xqnVLgmlAiSvTtYXFrHwB0",
    authDomain: "netmax-mesajlar.firebaseapp.com",
    databaseURL: "https://netmax-mesajlar-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netmax-mesajlar",
    storageBucket: "netmax-mesajlar.firebasestorage.app",
    messagingSenderId: "575038344835",
    appId: "1:575038344835:web:513417e69f4a291dc095b6"
});

const messaging =
    firebase.messaging();
