import React from 'react'



import './smallCard.css'

import Data from '../../data/smallcard.json'

const smallCard = () => {
    return (
        <div className='smallcard-container'>
            {Data.map(post => (
                <div key={post.id} className='smallcard'>
                    <img src={post.place} alt="" className='small-image' />

                    <h1 className='small-text'>
                        {post.text}
                    </h1>

                </div>

            ))
            }
        </div>
    )

}

export default smallCard
