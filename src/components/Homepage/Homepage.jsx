import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Homepage() {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)

    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    return (
        <section className="clips">
            {clips.map(clip => {
                return (
                    <div key={clip.id} >
                        <iframe id="clipIframe"
                        src={`https://player.cloudinary.com/embed/?cloud_name=dkabdionr&public_id=${clip.public_id}`}
                            title= {clip.title}
                            width="250"
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            frameBorder="0"
                        />

                    </div>
                );
            })}
        </section>
    )
}