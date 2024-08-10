import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/containers';
import Inventory from './inventory/containers';
import MasterCategory from './master/category/containers';
import MasterUser from './master/user/containers';
import Report from './report/containers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, 
  },
  {
    path: "/inventory",
    element: <Inventory />, 
  },
  {
    path: "/master/category",
    element: <MasterCategory />, 
  },
  {
    path: "/master/user",
    element: <MasterUser />, 
  },
  {
    path: "/report",
    element: <Report />, 
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
