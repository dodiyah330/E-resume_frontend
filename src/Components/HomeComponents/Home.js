import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Menu from './Navbar/Menu';
import ResumeSelection from './ResumeSelection/ResumeSelection';
import Footer from './Footer';
import Card1 from './Cards/Card1'
import Advantages from './Advantages/Advantages';
import './Home.css'
import Proffessions from './Proffessions/Proffessions';

export default class Home extends Component {

    onClick = () => {
        localStorage.removeItem("personal_id")
    }

    render() {
        return (
            <>

                <div className="home">
                    <div className="containerss screenn screen__contentt">
                        <div className="background">
                            <div className="screen__backgroundd ">
                                <span className="screen__background__shape screen__background__shape44"></span>
                                <span className="screen__background__shape screen__background__shape33"></span>
                                <span className="screen__background__shape screen__background__shape22"></span>
                                <span className="screen__background__shape screen__background__shape11"></span>

                                <div className='headingg'>
                                    <Menu />
                                    <div className="container col-6 d-inline-flex flex-column">
                                        <div className="Container d-flex justify-content-md-center mt-3 p-3 text-white">
                                            <h1>Create Your Online Resume with E-Resume Maker</h1>
                                        </div>

                                        <p className="d-flex justify-content-center text-white">Create your very own professional E-Resume and download it within 15 minutes</p>

                                        <p className="d-flex justify-content-center m-2 text-white">You'll be 65% more likely to get a job
                                        </p>

                                        <div className=" d-flex justify-content-center ">
                                            <div className="loginn">
                                                <button className="col-2 button login__submit "
                                                    type="submit" onClick={this.onClick}>
                                                    <i className="button__icon fa fas fa-plus"></i>
                                                    <span className="button__text">
                                                        <Link className="text-decoration-none" to="/CreateResume">
                                                            Create Your Resume
                                                        </Link>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ResumeSelection />
                <Proffessions />
                <Advantages />
                <Card1 />
                <Footer />
            </>
        );
    }
}