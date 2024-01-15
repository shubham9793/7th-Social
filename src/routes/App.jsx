import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
