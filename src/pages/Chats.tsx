import { Layout } from "../components/Layout";
import { TopBar } from "../components/TopBar";
import { useAppSelector } from "../context/store";
import { useNavigate } from "react-router-dom";
import { selectedMyUserData } from "../context/slices/userSlice";
import { useEffect } from "react";
import { ChatLists } from "../components/ChatLists";

const Chats = () => {
  const myUser = useAppSelector(selectedMyUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!myUser.user.id) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <TopBar title="Chats" />
      <ChatLists />
    </Layout>
  );
};

export default Chats;
