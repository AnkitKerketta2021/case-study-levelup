import React, { useState } from 'react';
// import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

// import NavBar from './navbar/Nbarr';
// import Header from './navbar/Nbarr';
// import Appbar from './navbar/Appbar'
import SearchView from './searchView/SearchView'

import YourQuestion from './yourQuestion/YourQuestion'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import SuccessModal from './modal/SuccessModal';
// import Query from './components/Query';
// import WantToDelete from './components/wanttodelete/WantToDelete';
// import YourQuestion from './components/yourQuestion/YourQuestion';
import NavBar from './navbar/Nbarr'



function Query() {

    const [showModal, setshowModal] = useState(false);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    // const [wantToDeleteTheQuestion, setwantToDeleteTheQuestion] = useState(false);
    const showTheModal = () => {
        setshowModal(true);
    }

    const hideTheModal = () => {
        setshowModal(false);
    }


    return (
        <Router>
            <div>
                <SuccessModal showModal={showModal} hideTheModal={hideTheModal} />
                <NavBar />
                
                <Switch>
                    <Route exact path="/search">
                        <SearchView />
                    </Route>
                    <Route exact path="/">
                        <YourQuestion  
                        showTheModal={showTheModal}
                         />
                    </Route>
                    <Route>
                        <ErrorBoundary />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Query
