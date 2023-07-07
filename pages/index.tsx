import React, { useEffect } from "react";
import ButtonCustom from "@components/Button";

const Home = () => {
  const IOS_URL =
    "https://apps.apple.com/jp/app/%E4%BA%AC%E7%8E%8B%E3%82%A2%E3%83%97%E3%83%AA/id1078553611";
  const openApp = () => {
    try {
      const pageLink = window.location.href;
      const query = new URLSearchParams(window.location.search);
      const isOpened = query.get("opened");
      if (!isOpened) {
        const url = "keio-train-app://member_card";
        window.location.href = url;
        query.set("opened", "true");
        setTimeout(() => {
          window.location.href = IOS_URL;
          setTimeout(() => {
            window.location.search = query.toString();
          }, 250);
        }, 250);
        console.log(pageLink);
        console.log(query.get("opened"));
      }
    } catch (error) {}
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
