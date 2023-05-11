import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import './Intrest.css'

export default class Intrest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            hobby: "",
            res: "",
            Int_id: null,
            personal_id: localStorage.getItem("personal_id"),
            submitted: false
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {

        Axios.get(`http://localhost:3001/getintrest/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    hobby: response.data.hobby,
                    Int_id: response.data.id
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onSubmit() {
        const intrest = {
            hobby: this.state.hobby,
            personal_id: this.state.personal_id
        };
        
        if (this.state.hobby !== "") {
            this.state.Int_id == null ?
                Axios.post(`http://localhost:3001/CreateResume/Experience/intrest`, intrest)
                    .then(response => {
                        if (response.data.message === "saved") {
                            this.setState({
                                Int_id: response.data.result.insertId
                            })
                        }
                        if (this.state.res === "please fill all fields") {
                            this.setState({ res: "Done" ,submitted: true})
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })

                :

                Axios.put(`http://localhost:3001/CreateResume/Experience/intrest/${this.state.Int_id}`, {
                    hobby: this.state.hobby,
                    personal_id: this.state.personal_id,

                })
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
            this.setState({ res: "please fill all fields",submitted: false })
        }
    }

    render() {
        return (
            <>
                <div className="container my-3" width="30rem">
                    <div className="shadow">
                        <div className=" d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Your Intrest</h3>
                            <Button varient="light" className="Int_show col-1 p-1"
                                onClick={() =>
                                    this.setState({ show: !this.state.show })}>

                                <span className="button__text p-1  d-flex justify-content-center">
                                    {this.state.show ?
                                        <i className="Int_show_icon fa fa-2x fas fa-angle-double-up"></i>
                                        :
                                        <i className="Int_show_icon fa fa-2x fas fa-angle-double-down"></i>
                                    }

                                </span>
                            </Button>
                        </div>
                        {this.state.show &&
                            <div style={{ "padding": "15px" }}>
                                <form className="form-floating p-2" style={{ "padding": "15px" }}>
                                    <div className="col-md-12">
                                        <label htmlFor="inputdiscription" className="form-label">Hobby</label>
                                        <textarea className="form-control fw-bold" placeholder="" id="floatingTextarea" style={{ "height": "100px" }}
                                            name="hobby"
                                            value={this.state.hobby}
                                            onChange={this.onChange}
                                        ></textarea>
                                        <label htmlFor="floatingTextarea"></label>
                                    </div>
                                    <p className="text-danger font-weight-bold">{this.state.res}</p>

                                </form>
                            </div>}
                    </div>
                </div>
            </>

        );
    }
}