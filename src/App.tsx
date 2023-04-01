import React, { useEffect, useState } from 'react';
import { Footer, Header } from './components';

import AppRoutes from './router/AppRoutes';

function App() {
    const [isAuthPage, setIsAuthPage] = useState<boolean>(false);
    const page = window.location.pathname;

    useEffect(() => {
        if (page.includes('login') || page.includes('signup')) {
            setIsAuthPage(true);
        } else setIsAuthPage(false);
    }, [page]);

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
