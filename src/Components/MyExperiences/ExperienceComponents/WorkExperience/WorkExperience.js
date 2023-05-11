import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkExperienceForm from './WorkExperienceForm'
import { Button } from 'react-bootstrap';
import './WorkExperience.css'

export default class WorkExperience extends Component {

    constructor(props) {
        super(props);
        this.WorkExperienceForm = React.createRef();

        this.state = {
            show: false,
            add: true,
            more: false
        };
    }

    canSub() {
        return this.WorkExperienceForm.current.canSub();
    }

    onSubmit() {
        this.WorkExperienceForm.current.onSubmit();

    }

    render() {
        return (
            <>
                <div className="container my-3" width="30rem">
                    <div className="shadow">
                        <div className=" d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Work Experience</h3>

                            <Button varient="light" className="Qua_show col-1 p-1"
                                onClick={() =>
                                    this.setState({ show: !this.state.show })}>

                                <span className="button__text p-1  d-flex justify-content-center">
                                    {!this.state.show ?
                                        <i className="Qua_show_icon fa fa-2x fas fa-angle-double-up"></i>
                                        :
                                        <i className="Qua_show_icon fa fa-2x fas fa-angle-double-down"></i>
                                    }

                                </span>
                            </Button>
                        </div>

                        {!this.state.show &&
                            <div style={{ "padding": "15px" }}>
                                <WorkExperienceForm ref={this.WorkExperienceForm} />
                            </div>}
                    </div>
                </div>
            </>
        );
    }
}