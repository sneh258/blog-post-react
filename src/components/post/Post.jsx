import "./post.css";
import Posts from "../posts/Posts";
import { useState, useEffect } from "react";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
//mport blogData from './../../components/assests/mockData/index.json'

export default function Post() {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((respone) => setBlogData(respone))
      .catch((e) => {
        setError(e.message);
        // console.log(blogData);
      });
  }, []);

  if (error) {
    return (
      <div className="blogDataError">
        <p>{error}</p>
      </div>
    );
  }

  return blogData ? (
    <div data-testid="cards" className="posts">
      {blogData.map((post) => (
        <Posts key={post.id} props={post} />
      ))}
    </div>
  ) : (
    <div data-testid="loadingCard" className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );
}
