import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    /** Question: why do I need to set the onClick below to a function, rather than 
     * just calling the onVideoSelect function and passing in video (ie, same thing, but
     * without the ()=> at the beginning)?
    */
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
