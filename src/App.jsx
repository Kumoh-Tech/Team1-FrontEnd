import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main_Page";
import Login from "./pages/Login/Login_Page";
import SignUp from "./pages/SignUp/SignUp_Page";
import Announcements from "./pages/Announcements/Announcements_Page";
import ResourceSharing from "./pages/ResourceSharing/ResourceSharing_Page";
import Activities from "./pages/Activities/Activities_Page";
import GeneralForum from "./pages/GeneralForum/GeneralForum_Page";
import WritePost from "./pages/WritePost/WritePost_Page";
import MyPage from "./pages/MyPage/MyPage";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/resourceshare" element={<ResourceSharing />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/generalforum" element={<GeneralForum />} />
      <Route path="/writepost" element={<WritePost />} />
      <Route path="/mypage" element={<MyPage />} />
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
