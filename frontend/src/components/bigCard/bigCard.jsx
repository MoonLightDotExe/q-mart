import React from 'react'


// import Data from '../../data/bigcard.json'

import './bigCard.css'

const bigCard = () => {




    // https://i.pinimg.com/564x/6e/8f/92/6e8f9246d74276ce7d2efd419de60d74.jpg


    return (
        <>
            <div className='bigcard-container'>
                <div className="temp"></div>

                {/* <img src="" alt="" className="big-image" /> */}
                <div className="big-image"></div>
                <div className="bigcard-bottom">
                    <h1 className='big-text'>GUCCI SUMMER STORIES</h1>
                    <button className='bigcard-btn' activeClassName='active-b-btn'>I am Button</button>
                </div>

            </div >
            {/* <div className="big-image"></div> */}
        </>

    )
}

export default bigCard
