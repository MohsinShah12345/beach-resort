import React from 'react'
import loadingGif from '../Images/loadingGif.gif'

export default function Loading(){
    return(
        <div className='loading'>
            <h3>Rooms Data Loading...</h3>
            <img src={loadingGif} alt="" />
        </div>
    )
}