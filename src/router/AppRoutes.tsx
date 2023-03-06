import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const AppRoutes: FC = () => {
    const isAuth = true;

    return (
        <Routes>
            {
                isAuth
                    ? privateRoutes.map((item) => <Route key={item.path}
                        path={item.path}
                        element={item.element}
                    />)
                    : publicRoutes.map((item) => <Route key={item.path}
                        path={item.path}
                        element={item.element}
                    />)
            }
        </Routes>
    );
};

export default AppRoutes;
