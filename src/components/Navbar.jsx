import React, { Component } from 'react'
import { MenuItems } from './MenuItems' 
import { Link } from 'react-router-dom'





export class Navbar extends Component {
    state = {clicked:false}
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <div>
        <nav className='navbarItems'>
            <h1 className="navBar-logo">AWTravles</h1>
            

            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={this.state.clicked ?"nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
