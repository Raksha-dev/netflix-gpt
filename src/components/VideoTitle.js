import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold pb-4">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div className="flex mt-4">
        <button className="px-4 py-2 mr-2 bg-white text-black w-24 rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="px-4 py-2 bg-slate-500 rounded-md hover:bg-opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
