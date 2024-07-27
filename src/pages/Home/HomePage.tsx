import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { usersSelector } from "../../redux/features/Users/users.selector";

const HomePage = () => {
  const testA = "AA";
  const testB = "AA";

  const result = { testA, testB };
  const userList = useSelector(usersSelector.userList);

  useEffect(() => {
    console.log(result);
  }, []);

  useEffect(() => {
    console.log(userList);
  }, [userList]);
  return (
    <Container>
      <h1>Home Page .</h1>
    </Container>
  );
};

export default HomePage;
