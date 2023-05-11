import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Per_det_lay_5 extends Component {

    render() {
        const { firstname, lastname, email, contact, city, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap flex-column col-12 my-2 p-1" style={{ "background": "#8bcef7" }}>
                        <div className="d-flex flex-column ">
                            <div className="fs-3 m-5 fw-bold d-flex justify-content-center" style={{ "textTransform": "uppercase" }}>{firstname} {lastname}</div>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap p-2' style={{ "background": "#c8cecf" }}>

                        <p className="fw-bold col-6">email :<span className="fw-normal p-3">{email}</span></p>

                        <p className="fw-bold col-6">contact :<span className="fw-normal" > {contact}</span>
                        </p>

                        <p className="fw-bold col-6">city :<span className="fw-normal">{city}</span>
                        </p>

                        <p className="fw-bold col-6">linkedIn :<span className="fw-normal"> {linkedin}</span>
                        </p>

                    </div>
                </div>
            </>
        );
    }
}