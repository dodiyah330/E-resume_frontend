import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import QualificationForm from './QualificationForm'
import { Button } from 'react-bootstrap';
import './Qualification.css'

export default class Qualification extends Component {

    QualificationForm = React.createRef();

    state = {
        show: false,
        add: true,
        more: false
    };


    canSub() {
        return this.QualificationForm.current.canSub();
    }

    onSubmit() {
        this.QualificationForm.current.onSubmit();
    }


    render() {
        return (
            <>
                <div className="container my-3" width="30rem" style={{ "padding": "15px" }}>
                    <div className="shadow">
                        <div className=" d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Education and Qualification</h3>

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
                                <QualificationForm ref={this.QualificationForm} />
                            </div>}
                    </div>
                </div>
            </>
        );
    }
}