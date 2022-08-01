import * as C from "./style";

const Sidebar = () => {
  return (
    <C.SidebarNav>
      <C.UlList>
        <C.List>
          <C.Link href="#">Dashboard</C.Link>
        </C.List>
        <C.List>
          <C.Link href="#">Empreendimentos</C.Link>
        </C.List>
        <C.List>
          <C.Link href="#">Usuários</C.Link>
        </C.List>
        <C.List>
          <C.Link href="#">Sair</C.Link>
        </C.List>
      </C.UlList>
    </C.SidebarNav>
  );
};

export default Sidebar;
