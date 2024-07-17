import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { INavList } from "../../interfaces/navList";

const AppBar = () => {
  const navList: INavList[] = [
    { path: "/", title: "Home" },
    { path: "/features", title: "Features" },
  ];

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {navList.map((eachNav, idx) => (
            <Nav.Link key={`nav-item-${idx}`} href={eachNav.path}>
              {eachNav.title}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppBar;
