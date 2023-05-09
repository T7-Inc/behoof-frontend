import React from 'react';
import {
    CheckEmailPage,
    HomePage,
    LoginPage,
    PasswordResetPage,
    SignupPage,
    SignupFormPage,
    ProductPage,
    SearchPage,
    FavoritesPage,
    TrackingPage,
} from '../pages';
import { Routes } from '../constans/Routes.enum';

interface IRoute {
    path: Routes;
    element: React.ReactElement;
}

export const publicRoutes: IRoute[] = [
    {
        path: Routes.HOME,
        element: <HomePage />,
    },
    {
        path: Routes.LOGIN,
        element: <LoginPage />,
    },
    {
        path: Routes.PASSWORD_RESET,
        element: <PasswordResetPage onSendResetEmail={() => {}} />,
    },
    {
        path: Routes.CHECK_EMAIL,
        element: <CheckEmailPage />,
    },
    {
        path: Routes.SIGNUP_METHOD,
        element: <SignupPage />,
    },
    {
        path: Routes.SIGNUP_FORM,
        element: <SignupFormPage />,
    },
];

export const privateRoutes: IRoute[] = [
    {
        path: Routes.HOME,
        element: <HomePage />,
    },
    {
        path: Routes.PRODUCT,
        element: <ProductPage />,
    },
    {
        path: Routes.SEARCH,
        element: <SearchPage />,
    },
    {
        path: Routes.FAVORITES,
        element: <FavoritesPage />,
    },
    { path: Routes.TRACKING, element: <TrackingPage /> },
];
