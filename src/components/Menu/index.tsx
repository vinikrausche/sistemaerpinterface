import * as C from "./style";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <C.Nav>
      <C.Ul>
        <C.li>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to={"/dashboard"}
          >
            Home
          </Link>
        </C.li>
        <C.li>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to={"/empreendimentos"}
          >
            Empreendimentos
          </Link>
        </C.li>
        <C.li>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to={"/usuarios"}
          >
            Usuários
          </Link>
        </C.li>
        <C.li>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to={"/logout"}
          >
            Sair
          </Link>
        </C.li>
      </C.Ul>
    </C.Nav>
  );
};

export default Menu;
