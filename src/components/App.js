import React from "react";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import ManageCoursePage from "./ManageCoursePage";
import Header from "./common/Header";
import NotFoundPage from "./NotFoundPage";

import { Route, Switch, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return ( <
        div className = "container-fluid" >
        <
        ToastContainer autoClose = { 3000 }
        hideProgressBar / >
        <
        Header / >
        <
        div className = "container" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { HomePage }
        />{" "} <
        Route path = "/courses"
        component = { CoursesPage }
        />{" "} <
        Route path = "/about"
        component = { AboutPage }
        />{" "} <
        Route path = "/course/:slug"
        component = { ManageCoursePage }
        />{" "} <
        Route path = "/course"
        component = { ManageCoursePage }
        />{" "} <
        Redirect from = "/test"
        to = "/about" / >
        <
        Route path = '/not-found'
        component = { NotFoundPage }
        /> <
        Route component = { NotFoundPage }
        /> <
        /Switch>{" "} <
        /div>{" "} <
        /div>
    );
};

export default App;