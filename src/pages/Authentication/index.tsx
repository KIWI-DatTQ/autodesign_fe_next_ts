import { useState } from "react";
import Container from "../HomePage/components/Container";
import Login from "../Login";

interface Props {
  children: JSX.Element;
}
const Authentication: React.FC<Props> = (props) => {
  const { children } = props;
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return <>{isAuth ? children : <Login />}</>;
};

export default Authentication;
