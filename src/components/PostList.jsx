import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitalPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
    };
  }, []);

  // useeffect is used for data fetching or event listeners
  // first argument is function/method
  //second [] - run initial render means no dependences
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
    </>
  );
};

export default PostList;
