import React from 'react';
import { HomePage } from '../pages';

export enum RouteName {
    HOME = '/home',
}

interface IRoute {
    path: RouteName,
    element: React.ReactNode
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.HOME,
        element: <HomePage/>,
    },
];

export const privateRoutes: IRoute[] = [
    {
        path: RouteName.HOME,
        element: <HomePage/>,
    },
];
