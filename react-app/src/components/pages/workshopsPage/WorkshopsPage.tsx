import React, {useEffect} from 'react'
import PageTemplate from '../../core/pageTemplate/PageTemplate'
import useNavigateToId from '../../../hooks/useNavigateToId/useNavigateToId';

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
      useNavigateToId();

  return <PageTemplate page="workshops">
         <div>
      <div className="container py-5">
        <div className="scroll" id="apply">
          <div className="row px-3 px-md-0">
            <h2 className="text-center mb-4">KTP's Unlock Your Tech Potential Winter 2025</h2>
            <p style={{ textAlign: 'center' }}>
              We are excited to announce our second annual Unlock Your Tech Potential Workshop Series. You can{' '}
              <a href="https://forms.gle/Qy3nddXrFThk4LvPA">
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
                reach out to our Co-Directors of Professional Development, Clarice (<a href="mailto:claricek@uchicago.edu">claricek@uchicago.edu</a>)
                and Arya (<a href="mailto:aryasap@uchicago.edu">aryasap@uchicago.edu</a>).
              </p>
              <div className="cd-timeline js-cd-timeline">
                <div className="container cd-timeline__container">
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/big_little.jpg" alt="Intro Into Tech Recruiting" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Networking + Intro to Tech Recruiting</h4>
                      <p>
                      Learn about the basics of tech recruiting and networking to increase your chances of landing your
                       dream job! We will cover the recruiting timeline for tech internships and provide opportunities
                       for resume/LinkedIn feedback.
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Monday, February 3rd | 6:00–7:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/ellens_fam.jpg" alt="Acing the Technical Interview" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Algos + DS</h4>
                      <p>
                      Dive into the fundamentals of algorithms and data structures and learn how to ace
                      the technical interview. Get the best practices of sharpening your technical skills
                      to help you land your dream job!
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Monday, February 10th | 6:00–7:00 PM | Stuart 105
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/medici_table.jpg" alt="Personal Website Design" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>PEAK6 Company Recruiting Event</h4>
                      <p>
                      Come to learn about careers and internship opportunities at a Chicago financial
                       technology company PEAK6! There will be time for a Q and A with the recruiter.
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Tuesday, February 18th | 5:00–6:00 PM | McCormick Lounge (1st floor Reynolds Club)
                      </p>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/workshops/sf.jpg" alt="Brother Panel: Explore Careers in Tech" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Kappa Theta Pi Brother Panel</h4>
                      <p>
                      Hear from brothers about their past internship experiences in various tech
                       roles such as Data Science, Software Engineering, Product Management and more!
                        We will have experiences ranging from Big Tech, Startups, and Finance.
                      </p>
                      <p style={{ fontStyle: 'italic' }}>
                        Monday, February 24th | 6:00–7:00 PM | Stuart 105
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