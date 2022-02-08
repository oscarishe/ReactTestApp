import React from "react";
import './App.css';

import Sidebar from "./components/Sidebar/sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import ContentContainer from "./components/Content/Profile/ContentContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element = {<ContentContainer store = {props.store}/>}/>
                        <Route path="/users" element = {<UsersContainer store = {props.store} />} />
                        <Route path="/dialogs/*" element= {<DialogsContainer store = {props.store}/>}/>
                        </Routes>
                </div>

            </div>

        </BrowserRouter>

    );

}

export default App;
