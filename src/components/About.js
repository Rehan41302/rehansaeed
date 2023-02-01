const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-view.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Full stack Developer with over 3 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Full stack Developer with in-depth knowledge of React, NextJs and NodeJs.
                  {`I'm`} an analytical and precise professional with over 3 years of hands-on experience taking charge of front 
                  and back-end web development. I code and create web
                  applications for amazing people around the world. I like to work with
                  new people. New people new Experiences.
                </p>
                {/* <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5k</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2018-2022</span>
                <h6>BS Software Engineering</h6>
                <p>Indus University</p>
              </li>
              <li>
                <span>2022-2022</span>
                <h6>Micro-services with NodeJs</h6>
                <p>LinkedIn Learning</p>
              </li>
              <li>
                <span>2017-2018</span>
                <h6>Web and Mobile Application Development</h6>
                <p>Usman Institute of Technology</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>ReactJs</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>NextJs</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>NodeJs</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "78%" }}>
                    <span data-toggle="tooltip" title="78%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Firebase</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "78%" }}>
                    <span data-toggle="tooltip" title="78%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>MongoDB</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "50%" }}>
                    <span data-toggle="tooltip" title="50%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Netlify</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "48%" }}>
                    <span data-toggle="tooltip" title="48%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/denovers-logo.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full stack Software Engineer</h6>
                  <label>Denovers | On-site | Jun 2020 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <div>
                    <ul>
                      <li>Developed a complete CRM for a housing remodeing firm that helps them to manage administrative as well as 
                        sales operations, built on NextJs and MySQL using Prisma</li>
                      <li>Worked on an in-house product from start to deployment using ReactJS and Firebase and implemented
                      all the designed requirements into the live product.</li>
                      <li>Converted a Pre-built React App into Next JS for SEO enhancement.</li>
                      <li>Revamped an administration panel with multi-user views for the educational 
                        institutes of US which has 200,000 users in it’s initial phase.</li>
                      <li>Worked on a distribution platform for content creators, Integrated Twitter and Youtube APIs using ReactJs, NodeJs, and Netlify functions.</li>
                      <li>Awarded as Mr. Perfectionist in 2021 and Employee of the year in 2022.</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/digitallyin-logo.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Web Application Developer</h6>
                  <label>DigitallyIn | On-site | Dec 2019 - Jun 2020</label>
                  <div className="rb-time">Full Time</div>
                  <div>
                    <ul>
                      <li>Completed full redesigns of existing websites to improve navigation and enhance visuals.</li>
                      <li>Used programming capabilities in ReactJs Node.Js, Express JS, and other libraries as needed.</li>
                      <li>Worked on a fully custom E-Commerce Site that includes all responsibilities as mentioned above</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
