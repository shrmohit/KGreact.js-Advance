import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Slidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Slidebar>
        <div className="content">
          <Header></Header>
          {/* {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <Createpost></Createpost>
          )} */}
          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
