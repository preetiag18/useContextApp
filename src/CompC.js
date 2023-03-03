import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { UserContext } from "./UserContext";

const CompC = (props) => {
  //   const { info } = props;
  const framework = useContext(GlobalContext);
  const user = useContext(UserContext);
  return (
    <>
      <div>CompC will be here</div>
      <div>{framework}</div>
      <div>UserInfo:{user.name} </div>
      <div>UserInfo:{user.job} </div>
    </>
  );
};

export { CompC };
