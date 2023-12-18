import {
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export async function findUserExist(nickname: string | undefined) {
  let isUserExist = false;
  let userData = {};
  const userRef = collection(db, "users");
  const q = query(userRef, where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    isUserExist = true;
    userData = {
      id: doc.id,
      ...doc.data(),
    };
  });
  return { isUserExist, userData };
}

export async function getUserData(nickname: string | undefined) {
  let userData = {};
  const userRef = collection(db, "users");
  const q = query(userRef, where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userData = doc.data();
  });
  return userData;
}

export async function updateUserData(user: {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  birth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
}) {
  const userRef = doc(db, "users", user.id);

  await updateDoc(userRef, {
    birth: user.birth,
    description: user.description,
    firstName: user.firstName,
    imageSrc: user.imageSrc,
    lastName: user.lastName,
    location: user.location,
    profession: user.profession,
    sex: user.sex,
    shortDescription: user.shortDescription,
  });
}
