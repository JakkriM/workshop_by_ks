import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import exampleAPI from "../../services/exampleAPI";

const HomePage = () => {
  const [users, setUsers] = useState<any>(null);

  const loadUsers = async () => {
    const result = await exampleAPI.getAllUsers();
    setUsers(result);
  };

  useEffect(() => {
    loadUsers();
    console.log("Current Users :", users);
  }, []);

  return (
    <Container>
      <h1>Home Page .</h1>
    </Container>
  );
};

export default HomePage;
