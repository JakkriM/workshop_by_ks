// import "./App.style.scss";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
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
