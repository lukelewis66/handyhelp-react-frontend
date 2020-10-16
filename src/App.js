import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientPage from './components/pages/ClientPage';
import ContractorPage from './components/pages/ContractorPage';
import HomePage from './components/pages/HomePage';
import SearchListingsPage from './components/pages/SearchListingsPage';
import SearchContractorsPage from './components/pages/SearchContractorsPage';
import "bootstrap/dist/css/bootstrap.min.css";

//https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space

function App() {
    return (
        <main>
            <div className="box">
                <div className="box-header">
                    <Navbar />
                </div>
                <div className="box-body">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/client" component={ClientPage} />
                        <Route path="/contractor" component={ContractorPage} />
                        <Route path="/searchlistings" component={SearchListingsPage} />
                        <Route path="/searchcontractors" component={SearchContractorsPage} />
                        <Route component={Error} />
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

























