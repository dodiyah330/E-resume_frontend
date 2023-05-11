import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import './Registration.css'
import Menu from '../HomeComponents/Navbar/Menu'
import Footer from '../HomeComponents/Footer'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            contact: "",
            registrated: false,
            res: "",
            reg_id: ""
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const Reg = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            contact: this.state.contact
        };
        if (this.state.name !== "" &&
            this.state.email !== "" &&
            this.state.password !== "" &&
            this.state.contact !== ""
        ) {

            Axios.post(`http://localhost:3001/Registration`, Reg)
                .then(response => {
                    if (response.data.message === "Registrated") {
                        this.setState({
                            registrated: true,
                            reg_id: response.data.result.insertId,
                            res: response.data.message
                        })
                    }
                    if (response.data.message !== "Registrated") {
                        this.setState({ res: response.data.message, registrated: false })

                    }
                    if (this.state.res === "please fill all fields") {
                        this.setState({ res: "Done" })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            this.setState({ res: "please fill all fields" })
        }
    }
    render() {
        return (
            <>
                <Menu />
                <div className="containers">
                    <div className="screens">
                        <div className="screen__contents">
                            <form className="login" onSubmit={this.onSubmit}>
                                <div className="login__field">
                                    <i className="login__icon fas fa fa-user"></i>
                                    <input type="text"
                                        className="login__input"
                                        placeholder="Your name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa fa-envelope"></i>
                                    <input type="email"
                                        className="login__input"
                                        placeholder="User name / Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fa fas fa-lock"></i>
                                    <input type="password"
                                        className="login__input"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fa fas fa-phone"></i>
                                    <input type="number"
                                        className="login__input"
                                        placeholder="Contact number"
                                        name="contact"
                                        value={this.state.contact}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <p className="text-danger fw-bold">{this.state.res}</p>

                                <button className="button login__submit"
                                    type="submit">
                                    {this.state.registrated && (
                                        <Redirect className="text-decoration-none text-black" to={`/Login`}>
                                        </Redirect>
                                    )}
                                    <span className="button__text">
                                        Register
                                    </span>
                                    <i className="button__icon fa fas fa-plus"></i>
                                </button>

                            </form>
                            {/* <div className="social-login">
                                <h3 className="pt-5">log in via</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-login__icon fa fab fa-instagram"></a>
                                    <a href="#" className="social-login__icon fa fab fa-facebook"></a>
                                    <a href="#" className="social-login__icon fa fab fa-twitter"></a>

                                </div>
                            </div> */}
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}


export default Registration