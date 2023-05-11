import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IntrestDisplay from '../displayData/Intrest/Intrest_display'
import ObjectiveDisplay from '../displayData/Objective/Objective_display';
import PersonaldetailsDisplay from '../displayData/Personaldetails/Personaldetails_display';
import QualificationDisplay from '../displayData/Qualification/Qualification_display';
import ReferanceDisplay from '../displayData/Referance/Referance_display';
import SkillsDisplay from '../displayData/Skills/Skills_display';
import WorkexperienceDisplay from '../displayData/Workexperience/Workexperience_display';

export default class Layout_2 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id")
    }

    render() {

        return (
            <div className="container">
                <div className="d-flex flex-row shadow col-12">
                    <div className="container row col-6">
                        <div className="d-flex flex-column justify-content-start" style={{ "background": "#cce0d0" }}>
                            <PersonaldetailsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Personaldetails} />
                            <IntrestDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Intrest} />
                            <SkillsDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? [] : this.props.branch_resume.Skills} />

                        </div>
                    </div>

                    <div className="d-flex col-7 flex-column justify-content-lg-start bg-light px-3">
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

