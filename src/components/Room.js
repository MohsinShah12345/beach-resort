import React from 'react'
import defaultImg from '../Images/Room3.jpg'; 
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
export default function Room({room}){
   const {name,slug,images,price}=room;
    return (
        /*<article className="room">*/
            <div className='img-container' >
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className='price-top' style={{background:"black",color:"white",top:"0px",left:"0px"}} >
                    <h6>${price}</h6>
                    <p>Per Night</p>
                </div>
                <Link className='link' to={`/rooms/${slug}`}>
                Features
                </Link>
                <p className="room-info">{name}</p>
            </div>
            /*
    </article>*/
    )
}
Room.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}