
import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Objective from './Objective/Objective';
import Qualification from './Qualification/Qualification';
import WorkExperience from './WorkExperience/WorkExperience';
import Intrest from './Intrest/Intrest'
import Referance from './Referance/Referance'
import Skills from './Skills/Skills';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Experience.css'
import Menu from '../../HomeComponents/Navbar/Menu';
import Footer from '../../HomeComponents/Footer';

export default class Experience extends Component {

    constructor(props) {
        super(props);

        this.objective = React.createRef();
        this.Qualification = React.createRef();
        this.WorkExperience = React.createRef();
        this.Intrest = React.createRef();
        this.Referance = React.createRef();
        this.Skills = React.createRef();

        this.state = {
            submitted: false,
            click: false
        }
    }

    sunbmisionHandler = () => {
        this.objective.current.onSubmit()
        this.Qualification.current.onSubmit()
        this.WorkExperience.current.onSubmit()
        this.Intrest.current.onSubmit()
        this.Referance.current.onSubmit()
        this.Skills.current.onSubmit()

        if (this.objective.current.state.submitted && this.Qualification.current.QualificationForm.current.state.submitted && this.Referance.current.state.submitted && this.Skills.current.SkillsForm.current.state.submitted && this.WorkExperience.current.WorkExperienceForm.current.state.submitted && this.Intrest.current.state.submitted === true) {
            this._timer = setTimeout(() => this.setState({ submitted: true }), 1000)
        }
    }

    componentWillUnmount() {
        clearTimeout(this._timer)
        this.setState({ submitted: false })
    }

    render() {
        return (
            <>
                <Menu />
                <div className="m-5">
                    <Objective ref={this.objective} />
                    <Qualification ref={this.Qualification} />
                    <WorkExperience ref={this.WorkExperience} />
                    <Intrest ref={this.Intrest} />
                    <Referance ref={this.Referance} />
                    <Skills ref={this.Skills} />
                    <div>
                        <div className="d-flex justify-content-center m-5">
                            <Button varient="light" className="btn generate col-3 p-4"
                                onClick={this.sunbmisionHandler}>
                                {this.state.submitted &&
                                    <Redirect className="text-decoration-none" to={{
                                        pathname: `/layoutSelection`,
                                        state: {
                                            templet_view: (false),
                                            branch_resume: (null)
                                        }
                                    }}>
                                    </Redirect>
                                }
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

