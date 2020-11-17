import React from "react";
import ContractorProfile from "../contractor/ContractorProfile";
import { getUserRole } from "../../firebase/accountFunctions";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

const ContractorPage = () => {
  return (
    <div>
      <ContractorProfile />
    </div>
  );
};

export default ContractorPage;
//if (user.role === "contractor" || user.role === " Admin")
// export default ContractorPage;
// const ContractorPage = () => {
//     var UID = localStorage.getItem("UID");
//     const [user, setUser] = useState({
//       role: "contractor",
//     });
//     const [itter, setItter] = useState(0);
//     useEffect(() => {
//       if (itter < 1) {
//         getUserRole(UID).then((data) => {
//           setUser(data);

//         });
//         setItter(1);
//       }

//     });
//     if (user.role === "contractor" || user.role === " Admin") {
//       return (
//         <div>
//           <ContractorProfile />
//         </div>
//       );
//     } else {
//       return <Redirect to="/" />;
//     }
//   };
