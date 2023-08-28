import { useEffect, useState } from "react";
const useFetch = (url) => {
  // USE STATE "npx json-server --watch data/db.json --port 8000 to initialize a database"
  //   const [blogs, setBlogs] = useState(null);
  const [data, setData] = useState(null);
  const [pendingMsg, setpendingMsg] = useState(true);
  const [error, setError] = useState(null);

  //USE EFFECT

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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
          if (error.name === "AbortError") {
            console.log("fetched aborted");
          } else {
            setpendingMsg(false);
            setError(error);
          }

          // setData(null);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, pendingMsg, error };
};

export default useFetch;
