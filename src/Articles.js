import React from "react";


const Articles = () => {

  return (
    <>
      <div>
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark" style={{
          width: '1920px',
          display: 'flex',
          justifyContentt: 'space-between'
        }}>
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item" id="article" style={{ color: 'white', marginRight: 50, paddingLeft: '670px', fontSize: '30px' }}>ARTICLES</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <h3><b>1. "Responsive Web Design: Creating Mobile-Friendly Websites"</b></h3>
        <h5>Introduction: In this article, I delve into the importance of responsive web design and its impact on user experience in today's mobile-centric world.</h5>

        <h4><u><i>Key Points:</i></u></h4>

        <h5><li>Understanding the concept of responsive web design and its benefits.</li>
        <li>Exploring the role of media queries in creating adaptive layouts.</li>
        <li>Implementing responsive design techniques using CSS frameworks like Bootstrap.</li>
        <li>Testing and optimizing websites for different screen sizes and devices.</li>
        <li>Discussing best practices for creating intuitive navigation and touch-friendly interfaces.</li></h5>

        <h3><b>2. "Introduction to JavaScript Frameworks: Exploring React.js"</b></h3>
        <h5>Introduction: In this article, I introduce readers to React.js, a popular JavaScript framework, and discuss its advantages in modern web development.</h5>

       <h4><u><i>Key Points:</i></u></h4>

        <h5><li>Understanding the fundamentals of React.js and its component-based architecture.</li>
            <li>Exploring the Virtual DOM and its role in improving performance.</li>
            <li>Building a simple React application from scratch, including JSX syntax and state management.</li>
            <li>Integrating React.js with other libraries and frameworks.</li>
            <li>Highlighting real-world examples of websites and applications built with React.js.</li></h5>

        <h3><b>3. "Introduction to Server-Side Programming: Exploring Node.js"</b></h3>
        <h5>Introduction: This article provides an overview of Node.js and its applications in server-side programming, emphasizing its lightweight and event-driven nature.</h5>

       <h4> <u><i>Key Points:</i></u></h4>

        <h5><li>Understanding the key features and benefits of Node.js.</li>
            <li>Setting up a basic Node.js server and handling HTTP requests.</li>
            <li>Exploring the Node Package Manager (npm) and utilizing existing packages.</li>
            <li>Integrating databases (such as MongoDB) with Node.js for data storage.</li>
            <li>Showcasing examples of Node.js applications, including real-time communication and APIs.</li></h5>

        <h3><b>4. "Securing Web Applications: Best Practices and Techniques"</b></h3>
       <h5> Introduction: In this article, I discuss essential security measures and practices to protect web applications from common vulnerabilities.</h5>

        <h4><u><i>Key Points:</i></u></h4>

        <h5><li>Understanding the top security risks in web development, such as cross-site scripting (XSS) and SQL injection.</li>
            <li>Implementing proper input validation and sanitization techniques.</li>
            <li>Utilizing secure authentication and authorization mechanisms.</li>
            <li>Applying encryption and hashing techniques to protect sensitive data.</li>
            <li>Highlighting security tools and frameworks to enhance web application security.</li></h5>

      </div><br /><br /><br /><br />
    </>
  );
};

export default Articles;
