import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Onboarding from "./pages/Onboarding";
import AccountDetails from "./pages/AccountDetails";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Matches from "./pages/Matches";
import Chat from "./pages/Chat";
import ChatDetails from "./pages/ChatDetails";
import Chats from "./pages/Chats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/chat/:id" element={<ChatDetails />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/:id" element={<AccountDetails />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
