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
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      users,
    });
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
  const q = query(
    chatRef,
    where("users", "array-contains", {
      userId: userId,
    })
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
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
