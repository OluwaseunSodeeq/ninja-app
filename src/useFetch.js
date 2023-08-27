import { useEffect, useState } from "react";
const useFetch = (url) => {
  // USE STATE "npx json-server --watch data/db.json --port 8000 to initialize a database"
  //   const [blogs, setBlogs] = useState(null);
  const [data, setData] = useState(null);
  const [pendingMsg, setpendingMsg] = useState(true);
  const [error, setError] = useState(null);

  //USE EFFECT

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok)
            throw Error("Could not fetch the data for that resource");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setpendingMsg(false);
          setError(null);
        })
        .catch((error) => {
          setError(error);
          setpendingMsg(false);
          setData(null);
        });
    }, 1000);
  }, [url]);
  return { data, pendingMsg, error };
};

export default useFetch;
