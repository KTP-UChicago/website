import React, {useEffect} from 'react'
import PageTemplate from '../../core/pageTemplate/PageTemplate'

function WorkshopsPage() {
    useEffect(() => {
        // Optionally, you can include JavaScript logic here if needed
        const script = document.createElement('script');
        script.src = "assets/js/timeline.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      
  return <PageTemplate page="workshops">
         <div>
      <div className="container py-5">
        <div className="scroll" id="apply">
          <div className="row px-3 px-md-0">
            <h2 className="text-center mb-4">KTP's Unlock Your Tech Potential Winter 2024</h2>
            <p style={{ textAlign: 'center' }}>
              We are excited to announce our first annual Unlock Your Tech Potential Workshop Series. You can{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf49ydpVSisujvNGplIfDc4TUpPQTkdlTvmlFQGjT8QBRYbNg/viewform?usp=sf_link">
                RSVP
              </a>{' '}
              here! Join us for an immersive 4-week technology workshop designed to elevate your skills and boost your career in the tech industry.
              Engage with industry professionals, receive personalized resume reviews, and explore the world of algorithms, data structures, and personal website design.
              Check out our Instagram (<a href="https://www.instagram.com/uchicagoktp/">@uchicagoktp</a>) to learn more
              about KTP.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container py-5">
          <div className="scroll" id="events">
            <div className="row px-3 px-md-0">
              <h2 className="text-center mb-4">Workshop Timeline</h2>
              <p style={{ textAlign: 'center' }}>
                We will be holding weekly workshops in Stuart 105 starting on 2/8 on Thursdays 7 - 8 PM. If you have any questions,
                reach out to our Director of Technology, Nicholas (<a href="mailto:nicholaslee@uchicago.edu">nicholaslee@uchicago.edu</a>).
              </p>
              <div className="cd-timeline js-cd-timeline">
                <div className="container cd-timeline__container">
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/big_little.jpg" alt="Intro Into Tech Recruiting" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Intro Into Tech Recruiting and Linkedin/Resume Review</h4>
                      <p>
                        Learn about the basics of recruiting and how to make your resume and LinkedIn stand out during the application process. Get one-on-one feedback
                        about your resume from our brothers and increase your chances of landing your dream job with personalized advice!
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Thursday, February 8th | 7:00–8:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/ellens_fam.jpg" alt="Acing the Technical Interview" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Crash Course on Acing the Technical Interview: Algorithms and Data Structures Overview</h4>
                      <p>
                        Dive into the fundamentals of algorithms and data structures and learn how to ace the technical interview.
                        Get the best practices of sharpening your technical skills to help you land your dream job!
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Thursday, February 15th | 7:00–8:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/medici_table.jpg" alt="Personal Website Design" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Personal Website Design and Portfolio Building</h4>
                      <p>
                        Craft your own standout personal website with guidance! Learn how to best showcase 
                        your skills and projects efficiently to impress recruiters and potential employers. 
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Thursday, February 22nd | 7:00–8:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/sf.jpg" alt="Brother Panel: Explore Careers in Tech" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Kappa Theta Pi Brother Panel: Explore Careers in Tech</h4>
                      <p>
                        Hear from brothers about their past internship experiences in various tech roles such as 
                        Data Science, Software Engineering, Product Management and more! We will have experiences 
                        ranging from Big Tech, Startups, and Finance.
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Thursday, February 29th | 7:00–8:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageTemplate>
}

export default WorkshopsPage