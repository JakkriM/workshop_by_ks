import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const DemoPage = () => {
  return (
    <Container>
      <div>DemoPage</div>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default DemoPage;
