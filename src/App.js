import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CredsForm from './components/SaveCreds';
import Navbar from './components/Navbar';
import ClientPage from './components/pages/ClientPage';
import ContractorPage from './components/pages/ContractorPage';
import HomePage from './components/pages/HomePage';
import SearchListingsPage from './components/pages/SearchListingsPage';
import SearchContractorsPage from './components/pages/SearchContractorsPage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <main>
            <div>
                <Navbar />
            </div>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/client" component={ClientPage} />
                <Route path="/contractor" component={ContractorPage} />
                <Route path="/searchlistings" component={SearchListingsPage} />
                <Route path="/searchcontractors" component={SearchContractorsPage} />
                <Route component={Error} />
            </Switch>
        </main>
    );
};
export default App;

























