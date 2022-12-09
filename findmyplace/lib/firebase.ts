import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { PropertyData, userObj } from "../types/types";

const firebaseConfig = {
  apiKey: "AIzaSyCXv-fBTT_5mfRO9aziM7P-GU1x365PgZE",
  authDomain: "find-my-place-fdb17.firebaseapp.com",
  projectId: "find-my-place-fdb17",
  storageBucket: "find-my-place-fdb17.appspot.com",
  messagingSenderId: "661973508057",
  appId: "1:661973508057:web:d4360e2c646e8499af43c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();
const usersCollection = collection(db, "users");
const propertiesCollection = collection(db, "properties");
const storage = getStorage(app);

// Functions
export async function uploadImage(imageName: string, data: any) {
  const imageRef = ref(storage, `images/${imageName}`);

  const uploadResult = await uploadString(imageRef, data, "data_url");
  console.log(`=================================================`);
  console.log(uploadResult.ref.toString());
  console.log(`=================================================`);
  const fileUrl = await getDownloadURL(uploadResult.ref);
  return {
    filePath: fileUrl,
  };
}

// USER COLLECTION
export async function checkUserExistence(userEmail: string) {
  const q = query(usersCollection, where("email", "==", userEmail));
  const queryResult = await getDocs(q);
  if (queryResult.size > 0) {
    return true;
  } else {
    return false;
  }
}

export async function getUser(userEmail: string) {
  const q = query(usersCollection, where("email", "==", userEmail));
  const queryResult = await getDocs(q);

  const user: { id: string; data: DocumentData } = {
    id: "",
    data: {},
  };

  queryResult.forEach((doc) => {
    user.id = doc.id;
    user.data = doc.data();
  });
  return user;
}

export async function addUser(userObj: userObj) {
  const result = await addDoc(usersCollection, userObj);
}

export async function removeUser(userId: string) {
  const docRef = doc(db, "users", userId);
  const result = await deleteDoc(docRef);
}

// PROPERTY COLLECTION
export async function addProperty(data: PropertyData) {
  const result = await addDoc(propertiesCollection, data);
  console.log(result);
  return result;
}

export async function getListings() {
  const allListings = await getDocs(propertiesCollection);
  allListings.forEach((property) => {
    console.log(`Property: `, property.id, property.data());
  });
}

export async function getPropertyDetails(propertyId: string) {}
export async function deleteProperty(propertyId: string) {}
