import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    pendingMsg,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const deleteHandler = (e) => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };
  return (
    <div className="blog-details">
      {pendingMsg && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={deleteHandler}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
