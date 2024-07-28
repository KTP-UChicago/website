import React, { useEffect } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

type PageMapping = {
    [key: string]: string;
}


function PageTemplate({ page, children }: { page: string, children: React.ReactNode }) {
    const PAGE_MAPPING: PageMapping = {
        "about": "About | KTP",
        "home": "KTP",
        "contact": "Contact Us | KTP",
        "members": "Members | KTP",
        "rush": "Rush | KTP",
        "workshops": "Workshops | KTP",
        "alumni-database" : "Alumni Database | KTP"
    };

    useEffect(() => {
        document.title = PAGE_MAPPING[page] || "KTP";
    }, []);

    return (
        <>
            <NavBar page={page} />
            {children}
            <Footer />
        </>
    );
}

export default PageTemplate