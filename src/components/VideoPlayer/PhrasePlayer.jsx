import { useSelector } from "react-redux";
import { useEffect, useRef } from 'react';


export default function PhrasePlayer({ width, height, title }) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    const processPhrase = useSelector(store => store.processPhrase)
    console.log('process phrase in player:', processPhrase)

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dkabdionr',
            // transformation: [
            //     {height: 200, width: 300, crop: "fill"},
            //     {flags: "splice", overlay: "video:DEV/h1uxkmpqhu4st5u5a2oc"},
            //     {height: 200, width: 300, crop: "fill"},
            //     {flags: "layer_apply", start_offset: "0"}
            // ]
        })
    }, []);

    return (
        <video 
            className="cld-video-player cld-video-player-skin-light"
            ref={videoRef}
            // controls='true'
            data-cld-public-id={processPhrase[0].public_id}
            height={height}
            width={width}
            title={title}
            >
        </video>
    );
}