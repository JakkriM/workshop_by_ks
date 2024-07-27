import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import exampleAPI from "../../services/exampleAPI";
import { IUserData } from "../../interfaces/user";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../../redux/features/Users/users.slice";
import { usersSelector } from "../../redux/features/Users/users.selector";

const UsersPage = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const userList = useSelector(usersSelector.userList);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            User list
            {userList.map((user, idx) => (
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
