import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Createe = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [pendingMsg, setpendingMsg] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setpendingMsg(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog Added");
      // history.go(1)
      history.push("/");
    });

    setAuthor("");
    setBody("");
    setTitle("");
  };
  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Oluwaseun">Oluwaseun</option>
        </select>
        {!pendingMsg && <button>Add Blog...</button>}
        {pendingMsg && <button disabled>Add Blog</button>}
      </form>
    </div>
  );
};

export default Createe;
