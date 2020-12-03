import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientPage from './components/pages/ClientPage';
import ContractorPage from './components/pages/ContractorPage';
import HomePage from './components/pages/HomePage';
import SearchListingsPage from './components/pages/SearchListingsPage';
import SearchContractorsPage from './components/pages/SearchContractorsPage';
import SpinnerPage from './components/pages/SpinnerPage';
import ErrorPage from './components/pages/ErrorPage';
import AboutPage from './components/pages/AboutPage';
import AccountSetup from './components/account/AccountSetup';
import "bootstrap/dist/css/bootstrap.min.css";
import IndividualListing from './components/pages/IndividualListing';
import IndividualContractor from './components/pages/IndividualContractor.js';

import { checkUserExists, getUserRole } from "./firebase/accountFunctions";

//https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space

function App() {
    const [apiCalls, setApiCalls] = useState(0);
    const [isClient, setClient] = useState(3);
    const UID = localStorage.getItem("UID");
    const [userExists, setUserExists] = useState(true);
    const pageOnLoad = window.location.pathname.toString();
    console.log("pageOnLoad: ", pageOnLoad);

    useEffect(() => {
        console.log("in use effect with apicalls: ", apiCalls);
        console.log("UID: ", UID);
        if (UID) {
            checkUserExists(UID)
                .then(data => {
                    if (data.exists === false) {
                        setUserExists(false);
                    } else {
                        getUserRole(UID)
                            .then((response) => {
                                setApiCalls(apiCalls + 1);
                                if (response.role === "client") {
                                    console.log("Logging in as a client");
                                    setClient(1);
                                }
                                else if (response.role === "contractor") {
                                    console.log("Logging in as a contractor");
                                    setClient(0);
                                }
                                else if (response.role === "Admin") {
                                    setClient(2);
                                }
                                else {
                                    console.log("isClient = 3");
                                    setClient(3);
                                }
                            })
                    }
                })
                .catch(err => console.log(err));
        }
    }, []);

    

    return (
        <main>
            <div className="box">
                <div className="box-header">
                    <Navbar activepage={pageOnLoad} isClient={isClient} />
                </div>
                {/* box-body div will stretch to fill out the screen until footer (if its smaller than the screen) */}
                <div className="box-body">
                    <Switch>
                        <Route path="/" exact>
                            {userExists ? <HomePage /> : <Redirect to="/accountsetup" />}
                        </Route>
                        <Route path="/client" component={(isClient === 1 || isClient === 2) ? ClientPage : (isClient === 3 ? SpinnerPage : ErrorPage)} />
                        <Route path="/contractor" component={(isClient === 0 || isClient === 2) ? ContractorPage : (isClient === 3 ? SpinnerPage : ErrorPage)} />
                        <Route path="/searchlistings" component={(isClient === 0 || isClient === 2) ? SearchListingsPage : (isClient === 3 ? SpinnerPage : ErrorPage) } />
                        <Route path="/searchcontractors" component={(isClient === 1 || isClient === 2) ? SearchContractorsPage : (isClient === 3 ? SpinnerPage : ErrorPage)} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/listing/:LID" children={<IndividualListing />} />
                        <Route path="/contractors/:UID" children={<IndividualContractor />} />
                        <Route path="/accountsetup" children={<AccountSetup UID={UID} />} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
                <div className="box-footer">
                    <Footer />
                </div>
            </div>
        </main>
    );
};
export default App;