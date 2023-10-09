import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getStorage}  from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHaMgqGLlb3f1PW4TintErhPPR8U_M-1c",
    authDomain: "idex-44b48.firebaseapp.com",
    databaseURL: "https://idex-44b48-default-rtdb.firebaseio.com",
    projectId: "idex-44b48",
    storageBucket: "idex-44b48.appspot.com",
    messagingSenderId: "746899244981",
    appId: "1:746899244981:web:b996c2933c673e30253bfc"
  };
  // Initialize Firebase

// export Firebase so it can be used elsewhere 
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const storage=getStorage(app)
export default app;