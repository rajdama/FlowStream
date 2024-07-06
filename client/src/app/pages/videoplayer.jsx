"use client";
import React, { useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ s3Url, hlsUrl }) => {
  const videoRef = useRef(null);

  const video = videoRef.current;
  if (Hls.isSupported()) {
    console.log("HLS is supported");
    const hls = new Hls();
    hls.attachMedia(video);
    hls.loadSource(hlsUrl);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      console.log("playing video", hlsUrl);
      video.play();
    });
  } else {
    console.log("HLS Not supported");
    const hls = new Hls();
    hls.attachMedia(video);
    hls.loadSource(s3Url);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      console.log("playing video", s3Url);
      video.play();
    });
  }

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
