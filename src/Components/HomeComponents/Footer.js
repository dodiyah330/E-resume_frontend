import React from 'react';
import { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="" >
                    <footer className="container-fluid p-5" style={{
                        "background": `linear-gradient(180deg, #C7C5F4, #776BCC)`, "height": "50%"
                    }}>
                        <div className="d-flex flex-row justify-content-center flex-wrap">
                            <ul>
                                <p>E-Resume</p>
                                <p>Start building your resume today, <br /> land your dream job tomorrow</p>
                                <li><Link to="/CreateResume"> Create resume</Link></li>
                            </ul>
                            <ul className="footer-list">
                                <p >Services</p>
                                <li> <Link to="/CreateResume"> Create resume</Link></li>
                                <li>  <Link className="" to={{
                                    pathname: `/layoutSelection`,
                                    state: {
                                        templet_view: (true),
                                        branch_resume: ("null")
                                    }
                                }}>
                                    Templet
                                </Link></li>
                            </ul>
                            <ul className="footer-list">
                                <p> Contact Info </p>
                                <li> <a href="https://www.besticoder.com/"> www.besticoder.com</a></li>
                                <li> (+91)1234567890 </li>
                                <li><p>Opening hours 10:00 to 7:00 </p> </li>
                            </ul>


                        </div>
                        <div className="m-4">
                            <div className="d-flex justify-content-end">
                                <ul className="footer-list d-flex mx-1 px-2">
                                    <p className='m-1'> <Link to="/"> Home</Link></p>
                                    <p className='m-1'>  <Link className="" to={{
                                        pathname: `/layoutSelection`,
                                        state: {
                                            templet_view: (true),
                                            branch_resume: ("null")
                                        }
                                    }}>
                                        Templet
                                    </Link></p>
                                    <p className='m-1'><Link className='' to="/CreateResume"> Create resume</Link></p>
                                </ul>
                            </div>
                            <div className="m-1">&#169; 2021 All Rights Reserved. Design & Developed By Besticoder</div>
                        </div>
                    </footer>
                </div >
            </>
        );
    }
}

