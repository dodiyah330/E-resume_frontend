import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ref_lay_1 extends Component {

    render() {
        const { companyName, website, phoneNumber, emailAddress } = this.props.referance;
        return (
            <>
                <div className="fs-5 text-capitalize pt-1">Referance</div>

                <ul className="d-flex flex-column">
                    <span className="fw-bold text-info"> {companyName}</span>
                    <span className="fw-bold"> {website}</span>
                    <span className="fw-normal"> {phoneNumber}</span>
                    <span className="fw-normal"> {emailAddress}</span>
                </ul>
            </>
        )
    }
}