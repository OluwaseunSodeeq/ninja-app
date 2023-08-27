import BlogList from "./Components/BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //   const deleteHandler = (id) => {
  //     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(updatedBlogs);
  //   };

  const {
    data: blogs,
    pendingMsg,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {pendingMsg && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All blogs"}
          //   deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
};

export default Home;
