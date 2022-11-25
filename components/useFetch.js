import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  //loading time out
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    fetchPost();
  }, [url]);

  return { data, loading };
};

export default useFetch;
