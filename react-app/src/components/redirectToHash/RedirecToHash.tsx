// RedirectToHash.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const validPaths = [
    '/about',
    '/rush',
    '/workshops',
    '/members',
    '/contact',
]
const RedirectToHash: React.FC = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const currentPath = window.location.pathname;
      if (validPaths.includes(currentPath) && currentPath[0] != "#") {
        window.history.replaceState(null, '', `/#${currentPath}`);
        navigate(currentPath);        
      }
    }, [navigate]);
  
    return null;
  };

export default RedirectToHash;
