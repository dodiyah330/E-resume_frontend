import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IntrestDisplay from '../displayData/Intrest/Intrest_display'
import PersonaldetailsDisplay from '../displayData/Personaldetails/Personaldetails_display';
import QualificationDisplay from '../displayData/Qualification/Qualification_display';
import ReferanceDisplay from '../displayData/Referance/Referance_display';
import SkillsDisplay from '../displayData/Skills/Skills_display';
import WorkexperienceDisplay from '../displayData/Workexperience/Workexperience_display';

export default class Layout_4 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }

    render() {

        return (
            <div className="container">
                <div className="d-flex flex-row flex-wrap shadow">
                    
                    <div className="" style={{"width":"100%"}}>
                        <PersonaldetailsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Personaldetails} obj_branch_resume={this.props.branch_resume} />
                    </div>

                    <div className="d-flex" >
                        <div style={{ "borderRight": "2px solid black","width":"40%" }}>
                            <QualificationDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Education} />
                            <SkillsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Skills} />
                        </div>

                        <div style={{ "width":"60%" }}>
                            <WorkexperienceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Workexperience} />
                            <IntrestDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Intrest} />
                            <ReferanceDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Referances} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

