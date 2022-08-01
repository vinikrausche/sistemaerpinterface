import * as C from "./style";
import Header from "../Header/index";
import Sidebar from "../Sidebar";
import Dados from "../Dados/";
const Container = () => {
  return (
    <C.Main>
      <Header />
      <Dados />
    </C.Main>
  );
};

export default Container;
