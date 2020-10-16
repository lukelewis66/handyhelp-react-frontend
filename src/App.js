import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CredsForm from './components/SaveCreds';
import Navbar from './components/Navbar';
import ClientPage from './components/pages/ClientPage';
import ContractorPage from './components/pages/ContractorPage';
import HomePage from './components/pages/HomePage';
import ListingsPage from './components/pages/ListingsPage';
import SearchContractorsPage from './components/pages/SearchContractorsPage';

function App() {
    return (
        <main>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/client" component={ClientPage} />
                <Route path="/contractor" component={ContractorPage} />
                <Route path="/listings" component={ListingsPage} />
                <Route path="/searchcontractors" component={SearchContractorsPage} />
                <Route component={Error} />
            </Switch>
        </main>
    );
};
export default App;

























