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
                        <video
                            id="demo-player"
                            controls
                            >
                        </video>
                    </div>
                );
            })}
        </section>
    )
}