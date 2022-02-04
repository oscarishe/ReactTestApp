import React from "react";
import './App.css';

import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/Profile/content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/dialogs";
import Header from "./components/Header/header";
import ContentContainer from "./components/Content/Profile/ContentContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>

                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/profile" element = {<ContentContainer store = {props.store}/>}/>
                        {/*<Route path="/dialogs/*" element= {<Dialogs dialogPage = {props.state.dialogPage}*/}
                        {/*                                            dispatch = {props.dispatch}/>} />*/}
                        <Route path="/dialogs/*" element= {<DialogsContainer store = {props.store}/>}/>
                        </Routes>
                </div>

            </div>

        </BrowserRouter>

    );

}

export default App;
