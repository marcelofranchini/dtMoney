import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  openNewModal: () => void;
}

export function Header({ openNewModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={openNewModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
