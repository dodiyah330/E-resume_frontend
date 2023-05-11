import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Button } from 'react-bootstrap';
import './Objective.css'


export default class Objective extends Component {

    state = {
        show: false,
        objective: "",
        res: "",
        Obj_id: null,
        personal_id: localStorage.getItem("personal_id"),
        submitted: false

    };


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {

        Axios.get(`http://localhost:3001/getObjective/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    objective: response.data.objective,
                    Obj_id: response.data.id
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onSubmit = () => {

        if (this.state.objective !== "") {
            this.state.Obj_id == null ?
                Axios.post(`http://localhost:3001/CreateResume/Experience/objective`, {
                    objective: this.state.objective,
                    personal_id: this.state.personal_id
                })
                    .then(response => {
                        if (response.data.message === "saved") {
                            this.setState({
                                Obj_id: response.data.result.insertId
                            })
                        }
                        if (this.state.res === "please fill all fields") {
                            this.setState({ res: "Done", submitted: true })
                        }

                    })
                    .catch(error => {
                        console.log(error);
                    })

                :

                Axios.put(`http://localhost:3001/CreateResume/Experience/objective/${this.state.Obj_id}`, {
                    objective: this.state.objective,
                    personal_id: this.state.personal_id,
                    id: this.props.Obj_id
                })
                    .then(response => {
                        if (response.data.message === "Updated") {
                            this.setState({
                                res: "Updated", submitted: true
                            })
                        }
                        if (this.state.res === "please fill all fields") {
                            this.setState({ res: "Done", submitted: true })
                        }

                    })
                    .catch(error => {
                        console.warn(error);
                    })
        }
        else {
            this.setState({ res: "please fill all fields", submitted: false })
        }
    }


    render() {

        return (
            <>
                <div className="container my-3" width="30rem">
                    <div className="shadow">
                        <div className=" d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Resume Objective</h3>
                            <Button varient="light" className="Obj_show col-1 p-1"
                                onClick={() =>
                                    this.setState({ show: !this.state.show })}>

                                <span className="button__text p-1  d-flex justify-content-center">
                                    {!this.state.show ?
                                        <i className="Obj_show_icon fa fa-2x fas fa-angle-double-up"></i>
                                        :
                                        <i className="Obj_show_icon fa fa-2x fas fa-angle-double-down"></i>
                                    }

                                </span>
                            </Button>
                        </div>

                        {!this.state.show &&
                            <div style={{ "padding": "15px" }}>
                                <form className="form-floating">
                                    <div className="form-group">
                                        <textarea className="form-control fw-bold " placeholder="Leave a objective here" id="floatingTextarea" style={{ "height": "100px", "overflowY": "scroll" }}
                                            name="objective"
                                            value={this.state.objective}
                                            onChange={this.onChange} >
                                        </textarea>
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