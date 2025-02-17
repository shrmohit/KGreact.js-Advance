import { useContext, useEffect } from "react";
import Post from "../components/Post";
import { PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitalPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
      });
  }, []);

  // useeffect is used for data fetching or event listeners
  // first argument is function/method
  //second [] - run initial render means no dependences
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
