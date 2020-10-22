import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientPage from './components/pages/ClientPage';
import ContractorPage from './components/pages/ContractorPage';
import HomePage from './components/pages/HomePage';
import SearchListingsPage from './components/pages/SearchListingsPage';
import SearchContractorsPage from './components/pages/SearchContractorsPage';
import ErrorPage from './components/pages/ErrorPage';
import FirebasePlayground from './components/pages/FirebasePlayground';
import "bootstrap/dist/css/bootstrap.min.css";

//https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space

function App() {
    const pageOnLoad = window.location.pathname.toString();
    console.log("pageOnLoad: ", pageOnLoad);
    return (
        <main>
            <div className="box">
                <div className="box-header">
                    <Navbar activepage={pageOnLoad} />
                </div>
                {/* box-body div will stretch to fill out the screen until footer (if its smaller than the screen) */}
                <div className="box-body">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/client" component={ClientPage} />
                        <Route path="/contractor" component={ContractorPage} />
                        <Route path="/searchlistings" component={SearchListingsPage} />
                        <Route path="/searchcontractors" component={SearchContractorsPage} />
                        <Route path="/firebaseplayground" component={FirebasePlayground} />
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

























