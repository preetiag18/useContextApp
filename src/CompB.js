import React from "react";
import { CompC } from "./CompC";
import { UserContextProvider } from "./UserContext";

const CompB = (props) => {
  const { info } = props;
  return (
    <>
      <div>CompB will be here</div>
      <UserContextProvider>
        <CompC info={info} />
      </UserContextProvider>
    </>
  );
};

export default CompB;
