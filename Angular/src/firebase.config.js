
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDqUhubpAbfqOiLfSVRzNxHr9SFXmq8amI",
  authDomain: "auth-implement-a6db8.firebaseapp.com",
  projectId: "auth-implement-a6db8",
  storageBucket: "auth-implement-a6db8.appspot.com",
  messagingSenderId: "834679368818",
  appId: "1:834679368818:web:fee9a8542e75658f9126eb",
  measurementId: "G-8EX6D16GRP"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
