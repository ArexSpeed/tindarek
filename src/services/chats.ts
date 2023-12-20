import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

type ChatUsers = {
  userId: string;
};

export async function createNewChatToDb(users: ChatUsers[]) {
  console.log("add Chat");
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      users,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

type Chats = {
  id: string;
  users: ChatUsers[];
};

export async function getUserChats(userId: string) {
  const chats: Chats[] = [];
  const chatRef = collection(db, "chats");
  console.log("getUserChats");
  //const q = query(userRef, where("nickname", "==", nickname));
  const q = query(
    chatRef,
    where("users", "array-contains", {
      userId: userId,
    })
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log("getChats", doc.data());
    chats.push({
      id: doc.id,
      users: doc.data().users,
    });
  });
  return chats;
}

export async function getChatById(chatId: string) {
  let chatData = {};
  const chatRef = doc(db, "chats", chatId);
  const querySnapshot = await getDoc(chatRef);

  chatData = { ...querySnapshot.data() };
  return chatData;
}
