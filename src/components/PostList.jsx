import { useContext, useState } from "react";
import Post from "../components/Post";
import { PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitalPost } = useContext(PostListData);

  //direct show the post when open the website
  const [dataFetched, setdataFetched] = useState(false);
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
      });
  } else {
    setdataFetched(true);
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
};

export default PostList;
