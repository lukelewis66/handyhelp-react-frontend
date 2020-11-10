import React, { useEffect, useState } from "react";

import { checkUserActive } from "../../firebase/accountFunctions";

import AccountDeactivate from "../account/AccountDeactivate";

import AccountReactivate from "../account/AccountReactivate"

const ClientEditProfile = () => {
    const [active, setActive] = useState();
    useEffect(() => {
        checkUserActive(localStorage.getItem("UID"))
            .then((data) => {
                if(data.active) {
                    setActive(<AccountDeactivate />);
                }
                else {
                    setActive(<AccountReactivate />);
                }
            })
    }, [])
    
    return(
        <div>
            {active}
        </div>
    )   
}

export default ClientEditProfile;