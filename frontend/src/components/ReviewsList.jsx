import React, { useEffect, useState } from "react";
import Review from "./Review";
import { fetchData } from "../../api";

const ReviewsList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchData('/posts');
        setData(result);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  return (
    <section className="mt-20">
      {data.map((item) => (
        <Review data={item} />
      ))}
    </section>
  );
};

export default ReviewsList;
