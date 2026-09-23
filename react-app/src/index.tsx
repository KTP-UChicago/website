import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/homePage/HomePage';
import RushPage from './components/pages/rushPage/RushPage';
import AboutPage from './components/pages/aboutPage/AboutPage';
import EventsPage from './components/pages/eventsPage/EventsPage';
import MembersPage from './components/pages/membersPage/MembersPage';
import ContactPage from './components/pages/contactPage/ContactPage';
import RedirectToHash from './components/redirectToHash/RedirecToHash';
import { FirebaseProvider } from './contexts/FirebaseContext';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext';
import AlumniDatabasePage from './components/pages/alumniDatabasePage/AlumniDatabasePage';
import CourseReviewsPage from './components/pages/courseReviewsPage/CourseReviewsPage';
import MemberDirectory from './components/pages/memberDirectoryPage/MemberDirectory';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthenticationContextProvider>
        <HashRouter>
          <RedirectToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/people" element={<MembersPage />} />
            <Route path="/members" element={<Navigate to="/people" replace />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/workshops" element={<Navigate to="/events" replace />} />
            <Route path="/rush" element={<RushPage />} />
            <Route path="/alumni-database" element={<AlumniDatabasePage />} />
            <Route path="/member-directory" element={<MemberDirectory />} />
            <Route path="/course-reviews" element={<CourseReviewsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthenticationContextProvider>
    </FirebaseProvider>
  </React.StrictMode>
);

reportWebVitals();
