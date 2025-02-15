import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Delhi",
    body: "Hello everyone, I'm traveling to Delhi for work. Any recommendations?",
    reactions: 3,
    userId: "user-5",
    tags: ["travel", "Delhi", "work"],
  },
];

// Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer Function

const postListReducer = (currPostList, action ) => {
  return currPostList;
};

// Provider Component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    console.log("Deleting post with ID:", postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;
