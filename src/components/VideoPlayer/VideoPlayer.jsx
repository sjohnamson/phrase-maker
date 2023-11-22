
import { useRef } from 'react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';


export default function VideoPlayer({ width, height, public_id, title }) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    // useEffect(() => {
    //     if (cloudinaryRef.current) return;

    //     cloudinaryRef.current = window.cloudinary;
    //     cloudinaryRef.current.videoPlayer(videoRef.current, {
    //         cloud_name: 'dkabdionr',
    //     })
    // }, []);
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });

    const myVideo = cld.video(public_id);

    return (
        <AdvancedVideo
            className="cld-video-player cld-video-player-skin-light"
            ref={videoRef}
            controls
            cldVid={myVideo}
            height={height}
            width={width}
            title={title}
            >
        </AdvancedVideo>
    );
}