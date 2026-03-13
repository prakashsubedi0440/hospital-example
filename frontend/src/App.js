import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Notice from './pages/Notice';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageNotices from './pages/admin/ManageNotices';
import UnderConstruction from './components/UnderConstruction';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  // Public routes
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'notice', element: <Notice /> },
      { path: 'events', element: <Events /> },
      { path: 'gallery', element: <Gallery /> },
    ],
  },
  // Admin login (no layout)
  { path: '/admin/login', element: <Login /> },
  // Protected admin routes
  {
    path: '/admin',
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'notices',   element: <ManageNotices /> },
      { path: 'gallery',   element: <UnderConstruction title="Gallery" /> },
      { path: 'doctors',   element: <UnderConstruction title="Doctors" /> },
      { path: 'events',    element: <UnderConstruction title="Events" /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
