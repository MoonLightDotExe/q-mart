import React, { useState, useEffect } from 'react'

import data from '../../data/smallcard.json'

import './smallCard.css'





function smallCard() {


    const [images, setImages] = useState([]);
    const [texts, setTexts] = useState({});

    useEffect(() => {
        setImages(data.images);
    }, []);

    useEffect(() => {
        setTexts(data.texts);
    }, []);



    return (
        <>
            <div className="small-image">
                {images.map(image => (
                    <img key={image.id} src={image.place} alt="" />
                ))}
            </div>
            {texts.map(text => (
                <h1 className='small-text'>
                    {text.text}
                </h1>
            ))}
        </>
    )


}

export default smallCard
