import { loginEndpoint } from "../../spotify";
import * as S from "./styles";

export default function Login() {
  return (
    <div className="screen-container">
      <S.LoginContainer>
        <S.StyledLink href={loginEndpoint}>
          <S.LoginButton>LOG IN</S.LoginButton>
        </S.StyledLink>
      </S.LoginContainer>
    </div>
  );
}
