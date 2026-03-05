import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Services from './pages/Services';
import Notice from './pages/Notice';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

function App() {

  const Layout = ({ children }) => {
    return (
      <Container fluid>
         
          <Header />
        
        <div className="body">               
          <Outlet />
        </div>
      </Container>
    );
  }

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/notice',
          element: <Notice />
        },
        {
          path: '/events',
          element: <Events />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
         
        
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );

  
}

export default App;
