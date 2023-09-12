import React from 'react';
import { Cloudinary } from "cloudinary-core";
import { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import PhrasePlayer from '../VideoPlayer/PhrasePlayer';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
//   const cloudinaryRef = useRef();
//   const videoRef = useRef();
//   const processPhrase = useSelector(store => store.processPhrase)
//   console.log('process phrase in player:', processPhrase)

//   let cld = cloudinary.videoPlayer(videoRef.current, {
//     cloud_name: 'dkabdionr',
//     // transformation: [
//     //     {height: 200, width: 300, crop: "fill"},
//     //     {flags: "splice", overlay: "video:DEV/h1uxkmpqhu4st5u5a2oc"},
//     //     {height: 200, width: 300, crop: "fill"},
//     //     {flags: "layer_apply", start_offset: "0"}
//     // ]
//   })
// }, []);

// return (
//   // <>
//   //   <video
//   //     className="cld-video-player cld-video-player-skin-light"
//   //     ref={videoRef}
//   //     // controls='true'
//   //     data-cld-public-id={processPhrase[0].public_id}
//   //   >
//   //   </video>

//   //   <Video cloudName="demo" publicId="dog" controls="true" >
//   //     <Transformation width="0.4" angle="20" />
//   //     <Transformation overlay="cloudinary_icon_white" width="60" opacity="50" gravity="south_east" y="15" x="60" />
//   //   </Video>
//   // </>
// );
}
export default InfoPage;
