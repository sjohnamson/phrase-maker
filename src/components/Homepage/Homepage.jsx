import React from 'react';
import ClipCard from '../ClipCard/ClipCard';
import AddVideoForm from '../AddVideoForm/AddVideoForm';

export default function Homepage() {


    return (
        <section className="clips">
            <AddVideoForm />
            <ClipCard />
        </section>
    )
}