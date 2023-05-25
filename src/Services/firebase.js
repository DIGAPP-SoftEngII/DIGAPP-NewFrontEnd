// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2jYtsBJBkCyb1mccEUEjg2_34hIbTM20",
  authDomain: "digapp-b8984.firebaseapp.com",
  projectId: "digapp-b8984",
  storageBucket: "digapp-b8984.appspot.com",
  messagingSenderId: "851392316889",
  appId: "1:851392316889:web:f76474cbecfa9c9079c5c8",
  measurementId: "G-TQQE4V3F7V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
  const storageref = ref(storage, v4());
  await uploadBytes(storageref, file);
  const url = await getDownloadURL(storageref);
  return url;
}
