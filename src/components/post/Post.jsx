import './post.css'
import Posts from '../posts/Posts'
import jsonData from './../assests/mockData/index.json'

export default function Post() {
  return (
    <div className="posts">
      {jsonData.map((post, index) => (
        <Posts
          id={index}
          date={post.date}
          readingTime={post.readingTime}
          title={post.title}
          description={post.description}
          claps={post.claps}
          claped={post.claped}
          liked={post.liked}
          image={post.image}
        />
      ))}
    </div>
  );
}
