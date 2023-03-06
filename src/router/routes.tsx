import React from 'react';
import { HomePage } from '../pages';
import { Routes } from '../constans/Routes.enum';

interface IRoute {
    path: Routes,
    element: React.ReactNode
}

export const publicRoutes: IRoute[] = [
    {
        path: Routes.HOME,
        element: <HomePage/>,
    },
];

export const privateRoutes: IRoute[] = [
    {
        path: Routes.HOME,
        element: <HomePage/>,
    },
];
