import { Container, Row, Col, Button } from "react-bootstrap";
import "./errorPage.style.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 className="display-1">404</h1>
            <p className="lead">Page Not Found</p>
            <Button variant="primary" href="/">
              Go to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
