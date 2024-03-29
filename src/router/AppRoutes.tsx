import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RootState } from '../store';
import { privateRoutes, publicRoutes } from './routes';

const AppRoutes: FC = () => {
    const [userResetPasswordEmail, setResetPasswordEmail] = useState<string>();
    const isAuth = useSelector((state: RootState) => state.auth.user) !== null;

    let routes;

    if (isAuth) {
        routes = privateRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
        ));
    } else {
        routes = publicRoutes.map((item) => {
            // assigning props to specific pages
            let element = item.element;
            if (item.path.includes('check-email')) {
                element = React.cloneElement(item.element, { resendEmail: userResetPasswordEmail });
            }
            if (item.path.includes('reset-password')) {
                element = React.cloneElement(item.element, {
                    onSendResetEmail: setResetPasswordEmail,
                });
            }
            return (
                <Route key={item.path} path={item.path} element={element} />
            );
        });
    }

    return <Routes>{routes}</Routes>;
};

export default AppRoutes;
