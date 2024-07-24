import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import exampleAPI from "../../services/exampleAPI";
import { IUserData } from "../../interfaces/user";

const UsersPage = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  const loadUsers = async () => {
    const result = await exampleAPI.getAllUsers();
    setUsers(result);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            User list
            {users.map((user, idx) => (
              <li key={idx}>
                <span>{user.email}</span> | <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersPage;
