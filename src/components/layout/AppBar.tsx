import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { INavList } from "../../interfaces/navList";
import { DefinedRoutes } from "../../router/DefineRoutes";
import { NavDropdown } from "react-bootstrap";
import React from "react";

const AppBar = () => {
  const routes: INavList[] = DefinedRoutes.map((rt) => {
    if (rt.subRoute) {
      const subList = rt.subRoute.map((subRt) => ({
        title: subRt.name,
        path: rt.path + "/" + subRt.path,
      }));
      return { title: rt.name, path: rt.path, subList: [...subList] };
    } else {
      return { title: rt.name, path: rt.path };
    }
  });
  const navList: INavList[] = routes;

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {navList.map((eachNav, idx) => (
            <React.Fragment key={`nav-item-${idx}`}>
              {eachNav.subList ? (
                <NavDropdown
                  title={eachNav.title}
                  id={eachNav.title + "-Dropdown"}
                >
                  {eachNav.subList.map((sL, index) => (
                    <NavDropdown.Item
                      key={`${sL.title.toLowerCase()}-dropdown-item-${index}`}
                      href={sL.path}
                    >
                      {sL.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link href={eachNav.path}>{eachNav.title}</Nav.Link>
              )}
            </React.Fragment>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppBar;
