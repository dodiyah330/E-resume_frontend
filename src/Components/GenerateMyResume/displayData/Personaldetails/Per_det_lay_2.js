import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Per_det_lay_2 extends Component {

    
    render() {
        const { firstname, lastname, email, contact, city, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container mt-1">
                    <div className="container">
                        <pre className="fw-bold fs-4 text-center bg-white" style={{ "width": "420px", "border": "2px solid black", "position": "relative", "textTransform": "uppercase" }}> {firstname} {lastname} </pre>
                    </div>
                    <div className="fw-bold fs-5 text-uppercase">PERSONAL DETAILs</div>

                    <div className='p-1'>
                        <div className="fw-bold p-1">Email :
                            <div className="fw-normal">{email}</div>
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
                    </div>
                </div>
            </>
        );
    }
}

