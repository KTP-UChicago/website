import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../oldStyles/timeline.css';
import '../../../oldStyles/style.css';
import NavBar from '../../navBar/NavBar';
import Footer from '../../footer/Footer';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import useNavigateToId from '../../../hooks/useNavigateToId/useNavigateToId';


interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
      question: "Who can rush KTP?",
      answer: "Anyone is allowed to rush KTP—we gladly accept (and encourage) rushees from all disciplines, years, and majors! Our only requirement is that you have at least 3 quarters remaining as a full time student in The College."
    },
    {
      question: "What is KTP looking for?",
      answer: "There’s no cookie cutter 'ideal' rushee—if there were, Kappa Theta Pi wouldn’t be the multi-talented, interdisciplinary organization that it is! In our experience, the qualities you’re looking for are often what we’d love to have in new members. In the end, we are an org united by our love for technology, and people who are truly passionate about tech are the ones who usually fit in the best."
    },
    {
      question: "What if I can't/didn't meet the rush requirements (one info session and one other event)?",
      answer: "We're more than happy to work with anybody who's interested in rushing. Please reach out to our Director of Membership, Kyle (kylew@uchicago.edu), to discuss how we can still make rushing possible for you."
    },
    {
      question: "How would I benefit from KTP?",
      answer: "KTP offers a supportive community of undergraduates who are all passionate about technology! Among other things, we offer mentoring in areas such as career advising, interview prep, resume development, and coursework. Additionally, we have current members and alumni working everywhere from the brightest startups to the tech giants of the corporate world. We believe that networking is far more than just professionalism—it's a process built on friendship, trust, and brotherhood."
    },
    {
      question: "Which majors are represented in KTP?",
      answer: "KTP is made up of a diverse group of people from majors all across campus. Generally, our members tend to be computer science majors, but we are proud to have actives with backgrounds in finance, consulting, medicine, and entrepreneurship! We love (and encourage) rushees from all disciplines."
    },
    {
      question: "How much of a time commitment is pledging?",
      answer: "As with all campus organizations, what you get out of the organization depends on what you put into it. We believe that our pledging process isn’t strenuous and could be accommodated by most schedules. Feel free to ask brothers at rush events about their pledging experiences, and we’d be happy to share more details and stories about our first quarters in KTP."
    },
    {
      question: "What if I’m part of or rushing another pre-professional fraternity?",
      answer: "We encourage you to join only one pre-professional fraternity to ensure manageable time commitments. However, we welcome everyone to rush regardless, and have several brothers that are part of multiple pre-professional fraternities. We provide an opportunity on our application to indicate that you’re rushing another pre-professional fraternity so that we can help you find the best fit."
    }
  ];

const RushPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "assets/js/timeline.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }, []);
      useNavigateToId();
  return (
    <PageTemplate page="rush">
      <div className="container py-5">
        <div className="scroll" id="apply">
          <div className="row px-3 px-md-0">
            <h2 className="text-center mb-4">Rush KTP Spring 2025</h2>
            <img className="img-fluid" src="assets/img/rush/banner.png" alt="Rush" />
            <p style={{ textAlign: 'center', paddingTop: 24 }}>
              We are excited to announce our Spring 2025 Rush Cycle. Our application is now live and due at 11:59 PM on Thursday, October 9th.
              Check out our Instagram (<a href="https://www.instagram.com/uchicagoktp/">@uchicagoktp</a>) to learn more
              about KTP.
              {/* If you are curious about our Fall 2025 cycle, please fill out our interest form. */}
            </p>
            <div style={{textAlign: 'center'}}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5utjuJxzl8LNVCYAx_0vM_9xtVo8ODWfY9McV9OyejxlRqg/viewform" className="btn-rush">APPLY</a>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container py-5">
          <div className="scroll" id="events">
            <div className="row px-3 px-md-0">
              <h2 className="text-center mb-4">Spring Events</h2>
              <p style={{ textAlign: 'center' }}>
                We require all rushees to attend at least one info session and one other rush event. If this isn't possible for you,
                reach out to one of our Substitute Co-Directors of Membership, Alissa Cheong (<a href="mailto:amkc@uchicago.edu">amkc@uchicago.edu</a>) or Adrian Dai (<a href="mailto:daia@uchicago.edu">daia@uchicago.edu</a>).
              </p>
              <div className="cd-timeline js-cd-timeline">
                <div className="container cd-timeline__container">
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/rush/guysattable.jpg" alt="" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Info Session 1</h4>
                      {/* <p>
                        <a href="https://www.facebook.com/events/2888397667981911/ ">Facebook Event Link (Please RSVP)</a>
                      </p> */}
                      <p>
                        <b>We require all rushees to attend one info session.</b>
                        They're a great opportunity for you to learn the basics about KTP, meet some
                        of our members, and decide if our community is one you’d like to become a part
                        of.
                      </p>
                      <a style={{ fontStyle: 'italic' }}>
                        Monday, October 6th | 8:00&#8211;9:00 PM | McCormick Lounge
                      </a>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/rush/BidNight.jpg" alt="" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Info Session 2</h4>
                      {/* <p>
                        <a href="https://www.facebook.com/events/1210823223571552/">Facebook Event Link (Please RSVP)</a>
                      </p> */}
                      <p>
                        <b>We require all rushees to attend one info session.</b>
                        They're a great opportunity for you to learn the basics about KTP, meet some
                        of our members, and decide if our community is one you’d like to become a part
                        of.
                      </p>
                      <a style={{ fontStyle: 'italic' }}>
                        Tuesday, October 7th | 8:00&#8211;9:00 PM | Cox Lounge (Stuart 020)
                      </a>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/rush/point.jpg" alt="Picture" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Charity Event for Color a Smile</h4>
                      {/* <p>
                        <a href="https://www.facebook.com/events/505328835683278/">Facebook Event Link (Please RSVP)</a>
                      </p> */}
                      <p>
                        <b>We require all rushees to attend one additional event.</b>
                        Contributing to the Color A Smile Charity with your fellow rushees. We will have drawings for you to color and
                        write messages on, to be distributed to senior citizens, troops serving
                        overseas, and many others.
                      </p>
                      <a style={{ fontStyle: 'italic' }}>
                        Wednesday, October 10th | 8:00&#8211;10:00 PM | Cox Lounge (Stuart 020)
                      </a>
                    </div>
                  </div>
                  <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/rush/pyramid.jpg" alt="" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Spotify Shuffle</h4>
                      {/* <p>
                        <a href="https://www.facebook.com/events/421346050587491/">Facebook Event Link (Please RSVP)</a>
                      </p> */}
                      {/* <p>
                        <b>We require all rushees to attend one additional event.</b>
                        Come join us for a casual session to speak with current brothers and learn more about our chapter!
                      </p> */}
                      <a style={{ fontStyle: 'italic' }}>
                        Thursday, October 9th | 8:00&#8211;10:00 PM | McCormick Lounge
                      </a>
                    </div>
                  </div>
                  {/* <div className="cd-timeline__block">
                    <div className="cd-timeline__img">
                      <img src="assets/img/rush/stickynotes.jpg" alt="" />
                    </div>
                    <div className="cd-timeline__content">
                      <h4>Invite-Only Interviews</h4>
                      <p>
                        <a href="https://www.facebook.com/events/1653438260163201">Facebook Event Link (Please RSVP)</a>
                      </p>
                      <p>
                        <b>We require all rushees to attend one interview session if invited.</b>
                        These are a great opportunity for you to learn the basics about KTP, meet some of our members, and
                        decide if our community is one you’d like to become a part of.
                      </p>
                      <a style={{ fontStyle: 'italic' }}>
                        Friday, March 22nd | 7:00&#8211;10:00 PM | Location TBA
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container py-5">
        <section className="scroll" id="faq">
          <div className="row px-3 px-md-0">
            <h2 className="text-center mb-4">Rush FAQ</h2>
            <div>
                {faqs.map((faq, index) => {
                    return (
                        <Accordion key={index}
                            sx={{ boxShadow: 'none', border: 'none' }}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            {faq.question}
                            </AccordionSummary>
                            <AccordionDetails>
                            {faq.answer}
                            </AccordionDetails>

                        </Accordion>
                    )
                    })
                }
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default RushPage;
