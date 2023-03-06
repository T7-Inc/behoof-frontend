import React from 'react';

import AppRoutes from './router/AppRoutes';

import styles from './styles/Null.module.scss';

function App() {
    return (
        <div className={styles.null}>
            <div>
                <AppRoutes/>
            </div>
        </div>
    );
}

export default App;
