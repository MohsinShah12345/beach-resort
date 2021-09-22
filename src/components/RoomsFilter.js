import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import Title from '../components/Title'

const getUnique = (items,value)=>{
         return [...new Set(items.map((item)=>item[value]))]
}
export default function RoomsFilter({rooms}){
    const context=useContext(RoomContext)
    //console.log(context)
    const {handleChange,type,capacity,
        price,minPrice,maxPrice,
        minSize,maxSize,breakfast,pets}=context;
        let types=getUnique(rooms,'type')
        types=['all',...types];
        types=types.map((item,index)=>{
            return <option vlaue={item} key={index}>{item}</option>
        })
        let people=getUnique(rooms,'capacity')
        people.sort(function(a,b){
            return a-b;
        });
        people=people.map((item,index)=>{
            return <option value={item} key={index} >{item}</option> 
        })
      //  console.log(types)
    return(
        <section className="filter-container">
            <Title title='search room'/>
            <form className='filter-form'>
             {/*select start*/}
             <div className='form-group'>
                  <label htmlFor='type' style={{marginRight:'10px',textTransform:"capitalize"}}>room type</label>
                  <select name='type' id='type'
                          value={type} className='form-control'
                          onChange={handleChange} >
                          {
                           types
                          }  
                          </select >
             </div>
             {/*select end*/}
             {/*Guest start*/}
             <div className='form-group'>
                  <label htmlFor='capacity'>Guest</label>
                  <select name='capacity' id='capacity'
                          value={capacity} className='form-control'
                          onChange={handleChange} >
                          {
                           people
                          }  
                          </select >
             </div>
             {/*Guest end*/}
             {/*Input Range Start*/}
             <div className='form-group'>
                <label htmlFor='price' style={{marginRight:'10px',width:'140px',fontSize:'1rem',display:'inline-block',textTransform:"capitalize"}}>room price ${price}</label>
                <input type="range" value={price} id='price' name='price' min={minPrice} max={maxPrice}  onChange={handleChange} className="form-control"/>
             </div>
             {/*Input Range End */}
             <div className='form-group'> 
                   <label htmlFor='size' style={{textTransform:"capitalize"}}>Room Size</label>
                   <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} 
                        onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize' id='size' value={maxSize} 
                        onChange={handleChange} className='size-input' />
                   </div>

             </div>
             {/*Input Size */}
             {/*extras */}
             <div className='form-group'>
                 <div className='single-extra'>
                     <input type='checkbox' name='breakfast' id='breakfast' 
                     checked={breakfast} onChange={handleChange} />
                     <label htmlFor='breakfast' style={{textTransform:"capitalize",marginRight:'10px'}}>breakfast</label>
                 </div>
                 <div className='single-extra'>
                     <input type='checkbox' name='pets' id='pets' 
                     checked={pets} onChange={handleChange} />
                     <label htmlFor='pets' style={{textTransform:"capitalize"}}>Pets</label>
                 </div>

             </div>
             {/*end of extras */}
            </form>
        </section>
    )
}