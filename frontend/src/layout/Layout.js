import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Layout;