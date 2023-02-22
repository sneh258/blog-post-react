import "./posts.css";
import clap from "../assests/Icons/clapping.svg";
import heartBlack from "../assests/Icons/heart-black.svg";
import heartRed from "../assests/Icons/heart-red.svg";
import clapped from "../assests/Icons/clapped.svg";
import { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoints";
import { getFormattedDateFromUtcDate } from "./../../utils/common";

export default function Posts({ props }) {
  // const imgSrc = require(`../assests/Images/${props.image}`);
  const [like, setLike] = useState(props.liked);
  const [claps, setClaps] = useState(false);
  const [clapCount, setClapcount] = useState(props.claps);
  const [error, setError] = useState();

  const handleClapCount = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(props.id), {
        data: { claps: clapCount + 1 },
      });
      setClapcount(clapCount + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(props.id), {
        data: { liked: !like },
      });
      setLike(!like);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClap = () => {
    setClaps(!claps);
  };

  return (
    <div data-testid="postscards" className="cards">
      <div className="card">
        <div className="img">
          <img src={props.image} alt="inot downloaded" />
        </div>
        <div className="content">
          <div className="time_row">
            <p>{getFormattedDateFromUtcDate(props.date)}</p>
            <p>{props.reading_time}</p>
          </div>
          <div className="text">
            <p>{props.title}</p>
            <p>{props.description}</p>
            <br />
            <hr />
            <div className="likes">
              <div className="clap">
                <img
                  data-testid="claps"
                  src={claps ? clapped : clap}
                  alt="not downloaded"
                  onClick={() => {
                    handleClap();
                    handleClapCount();
                  }}
                />

                <p data-testid="numberOfClap">
                  {/* {claps ? props.claps + 1 : props.claps} */}
                  {clapCount}
                </p>
              </div>
              <div>
                <img
                  data-testid="heart"
                  className="reaction"
                  onClick={() => {
                    handleLike();
                  }}
                  src={like ? heartRed : heartBlack}
                  alt="like"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
