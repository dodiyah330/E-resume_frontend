import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Menu.css'
import Logo from '../../../logo.png'

export default class Menu extends Component {
    state = {
        templet_view: false
    }
    isAuthenticated = localStorage.getItem("token");

    logout = () => {
        localStorage.removeItem("personal_id")
        localStorage.removeItem("token")
        localStorage.removeItem("reg_id")
        window.location.reload()
    }

    render() {
        return (
            <>
                <div className="container-fluid" style={{ "background": `linear-gradient(90deg, #5D54A4, #7C78B8)` }}>
                    <nav className="col-12 d-flex justify-content-center p-2 navMenu">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="items">
                                <Link className="btn" to={`/`}>
                                    <img src={Logo} alt="logo" height={"60px"} width={"100px"} />
                                </Link>

                                <Link className="btn" to={`/`}>
                                    Home
                                </Link>

                                <Link className="btn" to={{
                                    pathname: `/layoutSelection`,
                                    state: {
                                        templet_view: (true),
                                        branch_resume:("null")
                                    }
                                }}>
                                    Templet
                                </Link>

                                <Link className="btn" to={`/CreateResume`}>
                                    Create
                                </Link>

                                <Link className="btn" to={`/Login`}
                                    onClick={() =>
                                        this.logout()
                                    }>
                                    {this.isAuthenticated ? "Logout" : "Login"}
                                </Link>

                                <div className="dot"></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}