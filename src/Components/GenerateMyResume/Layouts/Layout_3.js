import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IntrestDisplay from '../displayData/Intrest/Intrest_display'
import PersonaldetailsDisplay from '../displayData/Personaldetails/Personaldetails_display';
import QualificationDisplay from '../displayData/Qualification/Qualification_display';
import ReferanceDisplay from '../displayData/Referance/Referance_display';
import SkillsDisplay from '../displayData/Skills/Skills_display';
import WorkexperienceDisplay from '../displayData/Workexperience/Workexperience_display';

export default class Layout_3 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }

    render() {

        return (
            <div className="container col-12">
                <div className="d-flex flex-column shadow p-1">
                    <PersonaldetailsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Personaldetails } obj_branch_resume={ this.props.branch_resume } />
                    <WorkexperienceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Workexperience} />
                    <QualificationDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Education} />
                    <IntrestDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Intrest} />
                    <SkillsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Skills} />
                    <ReferanceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Referances} />
                </div>
            </div>
        );
    }
}