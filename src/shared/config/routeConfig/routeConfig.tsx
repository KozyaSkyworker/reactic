import { AboutPage } from 'pages/AboutPage';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  CONTACTS = 'contacts',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CONTACTS]: '/contacts',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />,
  },
};
