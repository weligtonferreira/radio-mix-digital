import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/home-page';
import { ContactPage } from './pages/contact-page';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contato',
    element: <ContactPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
