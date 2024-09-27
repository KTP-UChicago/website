import React from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import PageTemplate from '../../core/pageTemplate/PageTemplate'

function AboutPage() {
  return <PageTemplate page="about">
    <div className="container py-5">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-3 px-md-0">
            <h2 className="text-center mb-5">History</h2>
            <p>
              Kappa Theta Pi takes pride in being the first professional technology fraternity in the country. Our members learn a plethora of skills needed to stay knowledgeable about the tech industry, as well as a strong sense of professional development for future job positions.
            </p>
            <p>
              KTP was founded on January 10, 2012, with the mission to create a tech community that enthusiastic students could join. In making KTP, the founders set up a strong community that has only grown in the 8 years since its inception.
            </p>
            <p>
              Our members come from all around campus. We are designers, analysts, computer scientists, engineers, artists, entrepreneurs, economists, cognitive scientists, and more. What makes the KTP community strong is our shared passion for technology and our unique backgrounds meshing together as one.
            </p>
            <p>
              Our alumni are part of an extensive and tight-knit network that stretches across the country. They can be found from Seattle to New York, from Silicon Valley to Chicago, in both startup companies and larger businesses. Our alumni provide valuable insight for our members’ professional development.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 mt-3 mt-md-5">
            <div className="history-img">
              <img src="assets/img/about/film.jpg" alt="KTP History" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container pt-5">
          <div className="row">
            <h2 className="text-center mb-5">Pillars</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon" style={{ background: '#fceef3' }}>
                  <i className="fa-solid fa-chart-line" style={{ color: '#ff689b' }}></i>
                </div>
                <h4>Professional Development</h4>
                <p>
                  Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon" style={{ background: '#fff0da' }}>
                  <i className="fa-regular fa-handshake" style={{ color: '#e98e06' }}></i>
                </div>
                <h4>Alumni Mentorship</h4>
                <p>
                  Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies—from tech companies like Microsoft, Amazon, Meta, and Google, to startups, consulting firms, financial technology firms, and more!
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon" style={{ background: '#e6fdfc' }}>
                  <i className="fa-regular fa-user" style={{ color: '#3fcdc7' }}></i>
                </div>
                <h4>Social Growth</h4>
                <p>
                  The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the quarter through which our members can bond, some of which include dinners, bowling, and painting parties.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="box">
                <div className="icon" style={{ background: '#eafde7' }}>
                  <i className="fa-solid fa-laptop" style={{ color: '#41cf2e' }}></i>
                </div>
                <h4>Technical Advancement</h4>
                <p>
                  Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="box">
                <div className="icon" style={{ background: '#e1eeff' }}>
                  <i className="fa-regular fa-newspaper" style={{ color: '#2282ff' }}></i>
                </div>
                <h4>Academic Support</h4>
                <p>
                  Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  
}

export default AboutPage