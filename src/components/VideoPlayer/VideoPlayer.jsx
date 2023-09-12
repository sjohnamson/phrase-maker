
import { useEffect, useRef } from 'react';

export default function VideoPlayer({ width, height, public_id, title }) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dkabdionr',
        })
    }, []);

    return (
        <video 
            className="cld-video-player cld-video-player-skin-light"
            ref={videoRef}
            // controls='true'
            data-cld-public-id={public_id}
            height={height}
            width={width}
            title={title}
            >
        </video>
    );
}