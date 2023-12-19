import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getUserDataById } from "./users";

type AddMatch = {
  userId: string;
  userName: string | undefined;
  userImage: string | undefined;
  userBirth: string | undefined;
  followId: string | undefined;
  followName: string | undefined;
  followImage: string | undefined;
  followBirth: string | undefined;
};

export async function addMatchToDb(data: AddMatch) {
  console.log("add Match");
  try {
    const docRef = await addDoc(collection(db, "matches"), {
      userId: data.userId,
      userName: data.userName,
      userImage: data.userImage,
      userBirth: data.userBirth,
      followId: data.followId,
      followName: data.followName,
      followImage: data.followImage,
      followBirth: data.followBirth,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function isMatchExist(followId: string, userId: string) {
  let isExist = false;
  const matchRef = collection(db, "matches");
  const q = query(matchRef, where("followId", "==", followId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) isExist = true;
  });
  return isExist;
}

export async function getUserMatches(userId: string | undefined) {
  const userMatches: unknown[] = [];

  const matchRef = collection(db, "matches");
  const q = query(matchRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    userMatches.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return userMatches;
}

export async function getUserMatchesFollowers(userId: string | undefined) {
  const userMatches: unknown[] = [];

  const matchRef = collection(db, "matches");
  const q = query(matchRef, where("followId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userMatches.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return userMatches;
}

export async function getUserMatchesAndFindById(userId: string | undefined) {
  const userMatches: unknown[] = [];

  const matchRef = collection(db, "matches");
  const q = query(matchRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    const data = await getUserDataById(doc.data().followId);
    userMatches.push({
      id: doc.id,
      ...data,
    });
  });
  return userMatches;
}
