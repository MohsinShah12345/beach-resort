import React from 'react'
import Room from './Room'
export default function RoomsList({rooms}){
    //const {}=rooms;
    if(rooms.length===0){
        return(
           <div className="empty-search">
               <h3>unfortunately no rooms found related to your search</h3>
           </div>
        )
    }
    return(
        <section className='roomslist'>
            <div className='roomslist-center'>
            {rooms.map((item,index)=>{
                return (
                  <Room key={index} room={item} />
                )
            })}
            </div>
        </section>
    )
}