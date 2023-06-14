import React from "react";


const Contact = () => {
   
    return (
        <>
      <div>
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark" style={{ width:'1920px',
                    display: 'flex',
                    justifyContentt: 'space-between'}}>
         <div className="container-fluid">
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" id="article" style={{color: 'white',marginRight: 50, paddingLeft: '670px', fontSize:'30px'}}>CONTACT</li>  
       </ul>
         </div>
       </div>
        </nav>  
      </div>

      <div>
        <h2><b>Contact:</b></h2>
        <h3>
        <ul>
            <li><b>Phone: </b>9503327637</li>
            <li><b>Email: </b>sanikachinchole0227@gmail.com</li>
            <li><b>Linkedin: </b><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></li>

        </ul>
        </h3>
      </div>
      </>
    );
  };
  
  export default Contact;
  