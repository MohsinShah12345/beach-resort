import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component{
    state={
        services:[
            {
              icon:<FaCocktail />,
              title: "Free cocktails",
              info:"Lorem ipsum dolor sit amet consector adipisicing elit. Magni, corporis!"
            },{
                icon:<FaHiking />,
                title: "Endless Hiking",
                info:"Lorem ipsum dolor sit amet consector adipisicing elit. Magni, corporis!"
            },{
                icon:<FaShuttleVan />,
                title: "Free shuttle",
                info:"Lorem ipsum dolor sit amet consector adipisicing elit. Magni, corporis!"
            },{
                icon:<FaBeer />,
                title: "Strongest Beer",
                info:"Lorem ipsum dolor sit amet consector adipisicing elit. Magni, corporis!"
            }
        ]
    }
    render(){
        return(
            <section className="services">
          <Title title="Services"></Title>
          <div className="services-center">
           {
               this.state.services.map((service,index)=>{
                  const {icon,title,info}=service;
                  return <article className='service' key={index}>
                      <span>{icon}</span>
                      <h6>{title}</h6>
                      <p>{info}</p>
                  </article>
               })
           }
          </div>
          </section>
        )
    }
}