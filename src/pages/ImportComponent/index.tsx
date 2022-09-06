import InputCustom from "@components/Input";
import CommonLayout from "@layouts/CommonLayout";
import React from "react";
const ImportComponent: React.FC<{}> = () => {
  return (
    <CommonLayout>
      <>
        <InputCustom type="file" />
      </>
    </CommonLayout>
  );
};
export default ImportComponent;
