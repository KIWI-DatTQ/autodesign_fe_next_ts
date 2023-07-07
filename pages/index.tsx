import React, { useEffect } from "react";
import ButtonCustom from "@components/Button";

const Home = () => {
  const openApp = () => {
    try {
      const url = "keio-train-app://member_card";
      window.location.href = url;
    } catch (error) {
      window.location.href =
        "https://apps.apple.com/jp/app/%E4%BA%AC%E7%8E%8B%E3%82%A2%E3%83%97%E3%83%AA/id1078553611";
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
