import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function useNavigateToId() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);
}

export default useNavigateToId