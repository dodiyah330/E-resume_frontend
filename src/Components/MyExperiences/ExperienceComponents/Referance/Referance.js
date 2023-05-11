import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from "react-bootstrap";
import './Referance.css'

export default class Referance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            checkbox: false,
            companyName: "",
            website: "",
            phoneNumber: "",
            emailAddress: "",
            res: "",
            personal_id: localStorage.getItem("personal_id"),
            Ref_id: null,
            submitted: false

        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {

        Axios.get(`http://localhost:3001/getreferance/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    companyName: response.data.companyName,
                    website: response.data.website,
                    phoneNumber: response.data.phoneNumber,
                    emailAddress: response.data.emailAddress,
                    Ref_id: response.data.id

                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onSubmit() {
        const Referance = {
            companyName: this.state.companyName,
            website: this.state.website,
            phoneNumber: this.state.phoneNumber,
            emailAddress: this.state.emailAddress,
            personal_id: this.state.personal_id
        };
        if (this.state.companyName !== "" &&
            this.state.website !== "" &&
            this.state.phoneNumber !== "" &&
            this.state.emailAddress !== "") {
            this.state.Ref_id == null ?
                Axios.post(`http://localhost:3001/CreateResume/Experience/referance`, Referance)
                    .then(response => {
                        if (response.data.message === "saved") {
                            this.setState({
                                Ref_id: response.data.result.insertId
                            })
                        }
                        if (this.state.res === "please fill all fields") {
        this.setState({ res: "Done",submitted: true  })
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                :

                Axios.put(`http://localhost:3001/CreateResume/Experience/referance/${this.state.Ref_id}`, Referance)
                    .then(response => {
                        if (response.data.message === "Updated") {
                            this.setState({
                                res: "Updated",submitted: true 
                            })
                        }
                        if (this.state.res === "please fill all fields") {
                            this.setState({ res: "Done" ,submitted: true})
                        }

                    })
                    .catch(error => {
                        console.log(error);
                    })
        }
        else {
            this.setState({ res: "please fill all fields",submitted: false  })
        }

    }

    render() {
        return (
            <>
                <div className="container my-3 " width="30rem" >
                    <div className="shadow">
                        <div className="d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Referances</h3>
                            <Button varient="light" className="Ref_show col-1 p-1"
                                onClick={() =>
                                    this.setState({ show: !this.state.show })}>

                                <span className="button__text p-1 d-flex justify-content-center">
                                    {!this.state.show ?
                                        <i className="Ref_show_icon fa fa-2x fas fa-angle-double-up"></i>
                                        :
                                        <i className="Ref_show_icon fa fa-2x fas fa-angle-double-down"></i>
                                    }

                                </span>

                            </Button>
                        </div>

                        {!this.state.show &&
                            <div style={{ "padding": "15px" }}>

                                <form className="d-flex justify-content-center row p-2" >
                                    <div className="col-md-5 m-1">
                                        <label htmlFor="" className="form-label">Company Name</label>
                                        <input type="text" className="form-control fw-bold" id="inputcompanyName"
                                            name="companyName"
                                            value={this.state.companyName}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="col-md-6 m-1">
                                        <label htmlFor="inputwebsite" className="form-label ">Website</label>
                                        <input type="text" className="form-control fw-bold" id="website"
                                            name="website"
                                            value={this.state.website}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="col-md-5 m-1">
                                        <label className="form-label">Phone Number</label>
                                        <input type="number" className="form-control fw-bold" id="inputsnumber"
                                            name="phoneNumber"
                                            value={this.state.phoneNumber}
                                            onChange={this.onChange} />
                                    </div>

                                    <div className="col-md-6 m-1">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" className="form-control fw-bold" id="inputemail"
                                            name="emailAddress"
                                            value={this.state.emailAddress}
                                            onChange={this.onChange} />
                                    </div>
                                    <p className="text-danger font-weight-bold">{this.state.res}</p>
                                    {/* <Button variant="light" className="col-2 btn btn-outline-danger m-2" type="submit">
                                    {this.state.Ref_id  ?  "UPDATE" : "SAVE"}
                                </Button> */}
                                </form>
                            </div>}
                    </div>
                </div>
            </>
        );
    }
}
