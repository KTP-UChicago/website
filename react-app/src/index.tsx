import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  HashRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/pages/homePage/HomePage';
import RushPage from './components/pages/rushPage/RushPage';
import AboutPage from './components/pages/aboutPage/AboutPage';
import WorkshopsPage from './components/pages/workshopsPage/WorkshopsPage';
import MembersPage from './components/pages/membersPage/MembersPage';
import ContactPage from './components/pages/contactPage/ContactPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/rush",
    element: <RushPage/>
  },
  {
    path: "about",
    element: <AboutPage/>
  },
  {
    path: "workshops",
    element: <WorkshopsPage/>
  },
  {
    path: "members",
    element: <MembersPage/>
  },
  {
    path: "contact",
    element: <ContactPage/>
  }
]);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/members" element={<MembersPage/>} />
        <Route path="/rush" element={<RushPage/>} />
        <Route path="/workshops" element={<WorkshopsPage/>} />
        </Routes>
    </HashRouter>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
