import React, { useEffect } from 'react';
import NavBar from '../../navBar/NavBar';
import Footer from '../../footer/Footer';
import { PAGE_META, SITE } from '../../../content/siteConfig';

function PageTemplate({ page, children }: { page: string; children: React.ReactNode }) {
  const meta = PAGE_META[page] || PAGE_META.home;

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', meta.description);
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `${SITE.domain}/#/${page === 'home' ? '' : page}`, true);
  }, [page, meta.title, meta.description]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <NavBar page={page} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default PageTemplate;
