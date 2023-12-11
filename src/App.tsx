import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Onboarding from "./pages/Onboarding";
import AccountDetails from "./pages/AccountDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/:id" element={<AccountDetails />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
