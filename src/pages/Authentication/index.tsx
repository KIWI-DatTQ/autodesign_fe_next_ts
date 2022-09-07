import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Container from "@components/Container";
import { getToken } from "@utils/auth";

interface Props {
  children: JSX.Element;
}
const Authentication: React.FC<Props> = (props) => {
  const { children } = props;
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const router = useRouter();
  const token = getToken();
  useEffect(() => {
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token]);
  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [router, isAuth]);
  return <Container>{isAuth ? children : <></>}</Container>;
};

export default Authentication;
