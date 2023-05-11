import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ObjectiveDisplay from '../Objective/Objective_display';

export default class Per_det_lay_4 extends Component {

    render() {
        const { firstname, lastname, email, contact, city, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap col-12" style={{ "background": `linear-gradient(175deg, #c8cecf 65%, #ffff 0%)` }}>

                        <div className="fs-3 fw-bold d-flex flex-column col-8 justify-content-center text-uppercase px-1">{firstname} {lastname}</div>

                        <img src={this.props.img_url} className="m-2 d-flex justify-content-end rounded-circle" width="120px" height="140px" alt="profile pic" />

                    </div>

                    <div className="d-flex">
                        <div className='col-5 d-flex flex-column' style={{ "borderRight": "2px solid black" }}>
                            <div className="fw-bold fs-5 col-4">CONTACT</div>
                            <div className="d-flex">
                                <i className="fa fa-lg fas fa-envelope text-break m-1"></i>
                                <span className="d-flex text-break">{email}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-lg fas fa-address-book text-break m-1"></i>
                                <span className="d-flex text-break">{contact}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-lg fas fa-map-marker text-break m-1"></i>
                                <span className="d-flex text-break">{city}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-lg fas fa-linkedin text-break m-1"></i>
                                <span className="d-flex text-break">{linkedin}</span>
                            </div>

                        </div>

                        <div>
                            <ObjectiveDisplay selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.obj_branch_resume === null ? [] : this.props.obj_branch_resume.objective} />
                        </div>
                    </div><hr />
                </div>
            </>
        );
    }
}