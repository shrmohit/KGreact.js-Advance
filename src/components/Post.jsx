import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div
      className="card post-card"
      style={{ width: "25rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary card-tags"
          >
            {tag}
          </span>
        ))}
        <div
          className="alert alert-primary reaction"
          role="alert"
        >
          This post has been reacted by {post.reactions}
        </div>
      </div>
    </div>
  );
};

// // ✅ Add PropTypes for post validation
// Post.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     reactions: PropTypes.number.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

export default Post;
