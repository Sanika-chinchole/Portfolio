import React from "react";

const Project = () => {
  return (
    <>
      <div>
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark" style={{
          width: '1920px',
          display: 'flex',
          justifyContentt: 'space-between'
        }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  id="article"
                  style={{
                    color: "white",
                    marginRight: 50,
                    paddingLeft: "670px",
                    fontSize: "30px",
                  }}
                >
                  PROJECTS
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <h2>1-<u>TextUtils:</u></h2>
        <h4>
          &nbsp;&nbsp;Textutils gives you a way to analyze your text quickly and
          efficiently, Be it word count, character count or time to read
          Textutils is a free character counter tool that provides instant
          character count & word count statics for a given text. Textutils
          reports the number of words and characters. Thus it is suitable for
          writing text with word/character limit. This word counter software
          work in any web Browser such as chrome, firefox, internet Explorer,
          safari,opera. it suits to count characters in facebook, blog, books,
          excel document, pdf document, essays etc.
        </h4>
        <h2><u><i>Link-</i></u>&nbsp;&nbsp;<a style={{ fontSize: '25px' }} href="https://sanika-chinchole.github.io/TextUtils/">TextUtils</a></h2>
      </div>

      <br /><br /><div>
        <h2>2-<u>NewsApp:</u></h2>
        <h4>
          News App built using React Js and NewsAPI.org.
        </h4>
        <h2><u><i>Link-</i></u>&nbsp;&nbsp;<a style={{ fontSize: '25px' }} href="/">NewsApp</a></h2>

        <br /><br /><div>
          <h2>3-<u>Unit Converter:</u></h2>
          <h4>
            A unit is a measurement of a quantity that is defined or adopted by tradition or law. Other quantities can be expressed as a multiple of the unit.The intent of this site is to provide a convenient means to convert between the various units of measurement within different systems, as well as to provide a basic understanding of the systems currently in use, and how they interact.
          </h4>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Project;
