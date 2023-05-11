import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Per_det_lay_1 extends Component {

    render() {
        const { firstname, lastname, email, contact, city, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container">
                    <pre className="fw-bold fs-4 text-end text-black" style={{ "width": "375px", "position": "relative", "textTransform": "uppercase" }}> {firstname} {lastname} </pre>

                    <div className="d-flex justify-content-center position-relative">
                        <img src={this.props.img_url} width="130px" height="150px" alt="profile pic" />
                    </div>

                    <div className=''>
                        <div className="fw-bold p-1">Email :
                            <div className="fw-normal overflow-wrap text-wrap" style={{ "width": "100px" }}>{email}</div>
                        </div>
                        <div className="fw-bold p-1">Contact :
                            <div className="fw-normal" > {contact}</div>
                        </div>
                        <div className="fw-bold p-1">City :
                            <div className="fw-normal">{city}</div>
                        </div>
                        <div className="fw-bold p-1">LinkedIn :
                            <div className="fw-normal"> {linkedin}</div>
                        </div>
                    </div><hr />
                </div>
            </>
        );
    }
}