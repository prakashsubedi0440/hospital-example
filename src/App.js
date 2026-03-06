import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Notice from './pages/Notice';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'notice', element: <Notice /> },
      { path: 'events', element: <Events /> },
      { path: 'gallery', element: <Gallery /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;