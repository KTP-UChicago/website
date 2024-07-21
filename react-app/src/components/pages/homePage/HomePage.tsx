import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from '../../navBar/NavBar';
import Footer from '../../footer/Footer';
import PageTemplate from '../../core/pageTemplate/PageTemplate';

const HomePage = () => {
  return(
    <PageTemplate page="home">
      <div className="container-fluid hero">
      <div className="text-center text-lg-start pt-5 ps-lg-5">
        <h1 className="hero-title mb-4">Kappa Theta Pi</h1>
        <h3 className="mb-5 mb-lg-4 px-4 px-lg-0">
          Professional Technology Fraternity<br />at The University of Chicago
        </h3>
        <div className="mb-4">
          <a href="rush.html#apply" className="btn-rush">RUSH</a>
          <a href="https://forms.gle/5bAZQeWQq2mRRwfb6" className="btn-rush">APPLY</a>
          {/* <a href="workshop.html#rsvp" className="btn-rush">WORKSHOPS</a> */}
        </div>
      </div>
    </div>
    </PageTemplate>
  )
};

export default HomePage;
