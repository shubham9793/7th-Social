import Footer from "./components/footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/postList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
