import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (
        <>
      <div>
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark" style={{ width:'1920px',
                    display: 'flex',
                    justifyContentt: 'space-between'}}>
         <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item" id="article" style={{color: 'white',marginRight: 50, paddingLeft: '670px', fontSize:'30px'}}>HOME</li>
       </ul>
         </div>
       </div>
        </nav>  
      </div>
      <br/><br/><div className="contain" >
         <ul style={{listStyleType: 'square'}}>
         <li><h3>I have a knowlegde of HTML, CSS JavaScript.</h3></li>
         <li><h3>Also I have knowlegde of C and C++ programming language.</h3></li>
         <li><h3> Participated in college programming competition (Web Designing).</h3></li>
         <li><h3>Attended training session from Infosys.</h3> </li>
         <li><h3>Attended training and industry program from Sandip University.</h3></li>
         <h1><u>Experiance:</u></h1>
         <li><h3>I have worked on React Js for 5 month as an intern. </h3></li>
         <li><h3>And I am doing internship in CodeCluse as a web developer.</h3> </li>  

         </ul>
      </div><br/><br/><br/><br/><br/>
      </>
    );
  };
  
  export default Home;
  