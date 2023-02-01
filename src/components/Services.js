import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                  I have extensive experience building responsive and user-friendly 
                  web applications using technologies such as React, NextJs, VueJs, TailwindCSS, MaterialUI and more. 
                  I can help you develop web applications that meets your unique needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Mobile App Development</h5>
                <p>
                  I am proficient in developing high-quality mobile apps for both 
                  iOS and Android platforms using technologies like React Native, Ionic, and others. 
                  I can help you create a mobile app that delivers a seamless user experience 
                  and provides real value to your customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-documents" />
              <div className="feature-content media-body">
                <h5>Database Management</h5>
                <p>
                  I have the skills to design, implement, and manage databases using technologies 
                  like MySQL, MongoDB, and others. I can help you create a database that is efficient, 
                  secure, and scalable, ensuring that your data is always protected and accessible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-genius" />
              <div className="feature-content media-body">
                <h5>Custom Software Development</h5>
                <p>
                  I have experience creating custom software solutions for clients, based on their specific 
                  needs and requirements. Whether you need a custom CRM system, an e-commerce platform, 
                  or a custom application, I can help you bring your vision to life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-tools" />
              <div className="feature-content media-body">
                <h5>Maintenance and Support</h5>
                <p>
                  I understand that delivering a project is just the beginning. I am committed to providing 
                  ongoing maintenance and support for all of my clients{`'`} projects, ensuring that they 
                  continue to run efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Project Methodology</h5>
                <p>
                  I take a proactive approach to project management to ensure that each project is delivered on time, 
                  within budget, and to the highest quality standards. I ensure the successful delivery of each project.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="separated" />
        <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;
