import TableCustom from "@components/Table";
import CommonLayout from "@layouts/CommonLayout";
import React from "react";
const DeviceTable: React.FC<{}> = () => {
  return (
    <CommonLayout>
      <>
        <TableCustom />
      </>
    </CommonLayout>
  );
};
export default DeviceTable;
