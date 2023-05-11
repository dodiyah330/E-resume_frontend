import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsForm from './SkillsForm';
import { Button } from 'react-bootstrap';
import './Skills.css'

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.SkillsForm = React.createRef();

        this.state = {
            show: false,
            add: true

        };
    }

    canSub() {
        return this.SkillsForm.current.canSub()
    }


    onSubmit() {
        this.SkillsForm.current.onSubmit();

    }

    render() {
        return (
            <>
                <div className="container my-3" width="30rem">
                    <div className="shadow">
                        <div className="d-flex flex-row rounded" style={{ "padding": "20px" }}>
                            <h3 className="text col-11">Skills</h3>
                            <Button varient="light" className="Skl_show col-1 p-1"
                                onClick={() =>
                                    this.setState({ show: !this.state.show })}>

                                <span className="button__text p-1  d-flex justify-content-center">
                                    {!this.state.show ?
                                        <i className="Skl_show_icon fa fa-2x fas fa-angle-double-up"></i>
                                        :
                                        <i className="Skl_show_icon fa fa-2x fas fa-angle-double-down"></i>
                                    }

                                </span>
                            </Button>
                        </div>
                        {!this.state.show &&
                            <div style={{ "padding": "15px" }}>
                                <SkillsForm ref={this.SkillsForm} />
                            </div>}
                    </div>
                </div>
            </>
        );
    }
}