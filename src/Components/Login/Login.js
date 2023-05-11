import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './Login.css'
import Menu from '../HomeComponents/Navbar/Menu'
import Footer from '../HomeComponents/Footer'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            res: "",
            loggedin: false,
            reg_id: ""
        };
    }
    componentDidMount() {
        localStorage.removeItem("personal_id")

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const Login = {
            email: this.state.email,
            password: this.state.password,
        };
        if (
            this.state.email !== "" &&
            this.state.password !== ""
        ) {
            Axios.post(`http://localhost:3001/Login`, Login)
                .then(response => {
                    if (!response.data.auth) {

                        this.setState({
                            loggedin: false,
                            res: response.data.message
                        })
                    }
                    else {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("reg_id", response.data.result[0].reg_id);
                        this.setState({
                            loggedin: true,
                            res: "Done",
                            reg_id: response.data.result[0].reg_id
                        })

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

    userAuth = () => {
        Axios.get("http://localhost:3001/isAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <>
                <div className="login_bg">
                    <Menu />
                    <div className="containers">
                        <div className="screen">
                            <div className="screen__content">
                                <form className="login" onSubmit={this.onSubmit}>
                                    <div className="login__field">
                                        <i className="login__icon fas fa fa-user"></i>
                                        <input type="text"
                                            className="login__input"
                                            placeholder="User Name / Email"
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
                                    <p className="text-danger fw-bold">{this.state.res}</p>

                                    <button className="button login__submit"
                                        type="submit"
                                    >
                                        {this.state.loggedin && (
                                            <Redirect className="text-decoration-none text-light"
                                                to={{
                                                    pathname: `/`,
                                                    state: { reg_id: this.state.reg_id }
                                                }}>
                                                {this.userAuth()}
                                            </Redirect>
                                        )}
                                        <span className="button__text">Log In Now</span>
                                        <i className="button__icon fa fas fa-chevron-right"></i>
                                    </button>

                                    <button className="button login__submit"
                                        type="submit">

                                        <span className="button__text"><Link className="text-decoration-none" to={`/Registration`}>
                                            Create new Account
                                        </Link></span>
                                        <i className="button__icon fa fas fa-plus"></i>
                                    </button>

                                </form>
                                <div className="social-login">
                                    <h3 className="pt-5">log in via</h3>
                                    <div className="social-icons">
                                        <Link className="social-login__icon fa fab fa-instagram"></Link>
                                        <Link className="social-login__icon fa fab fa-facebook"></Link>
                                        <Link className="social-login__icon fa fab fa-twitter"></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="screen__background">
                                <span className="screen__background__shape screen__background__shape4"></span>
                                <span className="screen__background__shape screen__background__shape3"></span>
                                <span className="screen__background__shape screen__background__shape2"></span>
                                <span className="screen__background__shape screen__background__shape1"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}


export default Login;