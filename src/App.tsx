import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from './components';

import AppRoutes from './router/AppRoutes';

function App() {
    const [isAuthPage, setIsAuthPage] = useState<boolean>(false);
    const page = useLocation();

    useEffect(() => {
        if (
            page.pathname.includes('login')
            || page.pathname.includes('signup')
        ) {
            setIsAuthPage(true);
        } else setIsAuthPage(false);
    }, [page.pathname]);

    return (
        <div>
            {/* If one of auth pages, don't display Header & Footer */}
            {!isAuthPage && <Header />}
            <div>
                <AppRoutes />
            </div>
            {!isAuthPage && <Footer />}
        </div>
    );
}

export default App;
