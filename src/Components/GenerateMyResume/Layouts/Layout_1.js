import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IntrestDisplay from '../displayData/Intrest/Intrest_display'
import ObjectiveDisplay from '../displayData/Objective/Objective_display';
import PersonaldetailsDisplay from '../displayData/Personaldetails/Personaldetails_display';
import QualificationDisplay from '../displayData/Qualification/Qualification_display';
import ReferanceDisplay from '../displayData/Referance/Referance_display';
import SkillsDisplay from '../displayData/Skills/Skills_display';
import WorkexperienceDisplay from '../displayData/Workexperience/Workexperience_display';

export default class Layout_1 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }

    render() {

        return (
            <div className="container ">
                <div className="d-flex flex-row shadow pb-5">
                    <div className="container row col-5">
                        <div className="text-white bg-info d-flex flex-column justify-content-start">
                            <PersonaldetailsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Personaldetails} />
                            <SkillsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Skills} />
                            <IntrestDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Intrest} />
                        </div>
                    </div>

                    <div className="d-flex flex-column justify-content-lg-start bg-light">
                        <ObjectiveDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.objective} />
                        <WorkexperienceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Workexperience} />
                        <QualificationDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Education} />
                        <ReferanceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Referances} />
                    </div>
                </div>
            </div>
        );
    }
}