import React from 'react'
import PageTemplate from '../../core/pageTemplate/PageTemplate'

function ContactPage() {
  return <PageTemplate page="contact">
    <div className="container pt-5">
      <div className="row px-3 px-md-0">
        <img src="assets/img/contact/bigfam.jpg" className="img-fluid col-lg-6" alt="Big Family" />
        <div className="col-lg-6 pt-4 pt-lg-0">
          <h2 className="text-center mb-4">Students</h2>
          <p>
            If you would like more information or have questions about rush, please contact us at
            <a href="mailto:uchicagoktp@gmail.com" target="_blank" rel="noopener noreferrer">uchicagoktp@gmail.com</a>.
            Additionally, follow our
            <a href="https://www.facebook.com/uchicagoktp" target="_blank" rel="noopener noreferrer">Facebook</a>
            page to stay up-to-date on rush events! We typically rush during Fall and Spring
            quarters.
          </p>
        </div>
      </div>
      <div className="row mt-3 mt-lg-4 pt-lg-5 px-3 px-md-0">
        <img
          src="assets/img/contact/walk.jpg"
          className="img-fluid col-lg-6 order-1 order-lg-2"
          alt="Walk"
        />
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
          <h2 className="text-center mb-4">Companies</h2>
          <p>
            We are always looking to work with companies to put up recruitment events on campus such
            as tech talks, information sessions, and networking sessions. Recruitment events help
            create relationships between students and recruiters in a smaller, more relaxed setting.
            For companies interested in hosting an event with us or would like more information,
            please contact us at
            <a href="mailto:uchicagoktp@gmail.com" target="_blank" rel="noopener noreferrer">uchicagoktp@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
    </PageTemplate>
}

export default ContactPage