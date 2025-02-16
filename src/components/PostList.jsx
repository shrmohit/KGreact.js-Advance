import { useContext } from "react";
import Post from "../components/Post";
import { PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
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
