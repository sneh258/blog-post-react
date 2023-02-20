import "./posts.css";
import clap from "../assests/Icons/clapping.svg";
import heart from "../assests/Icons/heart-black.svg";
import likes from "../assests/Icons/heart-red.svg";
import clapped from "../assests/Icons/clapped.svg";
import { useState } from "react";

export default function Posts(props) {
  const imgSrc = require(`../assests/Images/${props.image}`);
  const [like, setLike] = useState(props.like);
  const [claps, setClaps] = useState(false);

  return (
    <div className="cards">
      <div className="card">
        <div className="img">
          <img src={imgSrc} alt="inot downloaded" />
        </div>
        <div className="content">
          <div className="time_row">
            <p>{props.date}</p>
            <p>{props.readingTime}</p>
          </div>
          <div className="text">
            <p>{props.title}</p>
            <p>{props.description}</p>
          </div>
          <hr />
          <div className="likes">
            <div className="clap">
              <img
                src={claps ? clapped : clap}
                alt="not downloaded"
                onClick={() => {
                 setClaps(!claps)
                }}
              />

              <p>{claps ? props.claps + 1 : props.claps}</p>
            </div>
            <div>
              <img
                className="reaction"
                onClick={() => {
                  setLike(!like);
                }}
                src={like ? likes : heart}
                alt="like"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
