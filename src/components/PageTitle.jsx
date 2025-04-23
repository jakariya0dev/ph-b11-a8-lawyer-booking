import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function PageTitle() {

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        
        if (path === '/') {
            document.title = 'Home Page';
        } else if (path.startsWith('/blogs')) {
            document.title = 'Blogs Page';
        } else if (path.startsWith('/booking')) {
            document.title = 'Booking Page';
        } else if (path.startsWith('/profile/')) {
            document.title = 'Profile Page'; // ✅ This handles /profile/:id
        } else {
            document.title = 'Page Not Found';
        }

    }, [location]);

    return null;
}
