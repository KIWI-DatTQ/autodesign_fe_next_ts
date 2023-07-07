import React, { useEffect } from "react";
import ImportComponent from "@pages/ImportComponent";
import ButtonCustom from "@components/Button";

const Home = () => {
  const openApp = () => {
    try {
      const url = "keio-train-app://member_card";
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    openApp();
  }, []);
  return (
    <>
      <ButtonCustom onClick={openApp}>Open Link</ButtonCustom>
    </>
  );
};
export default Home;
