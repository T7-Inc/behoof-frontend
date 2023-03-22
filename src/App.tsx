import React from 'react';
import { Footer, Header } from './components';

import AppRoutes from './router/AppRoutes';

function App() {
    return (
        <div>
            <Header />
            <div>
                <AppRoutes />
            </div>
            <Footer />
        </div>
    );
}

export default App;
