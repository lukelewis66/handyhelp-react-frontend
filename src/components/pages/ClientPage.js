import React from "react";
import { Redirect } from "react-router-dom";
import { getUserRole } from "../../firebase/accountFunctions";
import { useEffect, useState } from "react";

import ClientProfile from "../client/ClientProfile";

const ClientPage = () => {
  return (
    <div className = "screen">
      <ClientProfile />
    </div>
  );
};

export default ClientPage;
