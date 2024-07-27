import { useDispatch } from "react-redux";
import "./App.style.scss";
import MainLayout from "./components/layout/MainLayout";
import RouterElement from "./router/RouterElement";
import { useEffect } from "react";
import exampleAPI from "./services/exampleAPI";
import { usersAction } from "./redux/features/Users/users.slice";

const App = () => {
  const dispatch = useDispatch();

  const loadUsers = async () => {
    const result = await exampleAPI.getAllUsers();
    // dispatch({ type: "USERS_SET_USER_LIST", payload: result});
    dispatch(usersAction.setUserList(result));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <MainLayout>
      <RouterElement />
    </MainLayout>
  );
};

export default App;
