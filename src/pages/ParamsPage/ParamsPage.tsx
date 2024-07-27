import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ParamsPage = () => {
  const { paramID } = useParams();
  return (
    <Container>
      <div>Params</div>
      {paramID && <p>Param ID is: {paramID}</p>}
    </Container>
  );
};

export default ParamsPage;
