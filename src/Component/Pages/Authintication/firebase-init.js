// Import the functions you need from the SREACT_APP_apiKeyDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig  = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDzbqk4Rz5upNVImP5anZgd4GOefRBAZFc",
//   authDomain: "techhouse-91edb.firebaseapp.com",
//   projectId: "techhouse-91edb",
//   storageBucket: "techhouse-91edb.appspot.com",
//   messagingSenderId: "997949686680",
//   appId: "1:997949686680:web:922445733cf9eebda521ed"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
