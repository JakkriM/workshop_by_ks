import { useEffect } from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  const testA = "AA";
  const testB = "AA";

  const result = { testA, testB };

  useEffect(() => {
    console.log(result);
  }, []);

  return (
    <Container>
      <h1>Home Page .</h1>
    </Container>
  );
};

export default HomePage;
