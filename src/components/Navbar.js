import React,{Component} from 'react';
import beach_icon from './../Images/beach_icon.jpg';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'
export default class Navbar extends Component{
    state={
        isOpen:false
    }
    handletoggle=()=>{
       this.setState({
           isOpen:!this.state.isOpen
       })
    }
    render(){
      return(
          <nav className="navbar">
              <div className="nav-center">
                  <div className="nav-header">
                      <Link to="/" >
                           <img src={beach_icon} alt="Beach Resort"/>
                      </Link>
                      <button type="button" className="nav-btn" onClick={this.handletoggle}>
                         <FaAlignRight className="nav-icon" />
                      </button>
                  </div>
                  <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/rooms">Rooms</Link> </li>
                  </ul>
              </div>
          </nav>
    )
    }
}
