import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';




const Navbar=()=> {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
         <div className="container-fluid">
        
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item"> <Link  style={{color: 'white',marginRight: 50}} className="nav-link " aria-current="page" to="/">Home</Link> </li>
        <li className="nav-item"><Link style={{color: 'white',marginRight: 50}} className="nav-link" to="/articles"> Articles</Link></li>  
        <li className="nav-item"><Link style={{color: 'white',marginRight: 50}} className="nav-link" to="/project"> Project</Link></li> 
        <li className="nav-item"><Link style={{color: 'white',marginRight: 50}} className="nav-link" to="/contact"> Contact</Link></li> 
       </ul>  
         </div>
       </div>
        </nav>  
      </div>

       <div className="home1" id="home">
       <h1 style={{fontSize:'54px'}}>Hi, I'm Sanika Chinchole</h1>
       <h1 style={{fontSize:'36px'}}>a frontend developer</h1>
    </div>

    <div>
        <nav className="navbar fixed-bottom  navbar-expand-lg  navbar-dark bg-dark">
         <div className="container-fluid">
       
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" > 
          <li>ReactDOM.render(<SocialIcon  style={{height:'30px'}} url="https://www.linkedin.com/feed/" />, document.body)</li>; 
          <li >ReactDOM.render(<SocialIcon style={{backgroundColor: 'white', height:'30px'}} url="https://github.com/" />, document.body)</li>;  
          <li className="nav-item" id="article" style={{color: 'white',marginRight: 50, paddingLeft: '600px', fontSize:'20px'}}>Sanika Sanjay Chinchole</li>
          </ul>
         </div>
       </div>
        </nav> 
      </div>
    </>
    )
}

export default Navbar;
