import "./App.style.scss";
import MainLayout from "./components/layout/MainLayout";
import RouterElement from "./router/RouterElement";

const App = () => {
  return (
    <MainLayout>
      <RouterElement />
    </MainLayout>
  );
};

export default App;
