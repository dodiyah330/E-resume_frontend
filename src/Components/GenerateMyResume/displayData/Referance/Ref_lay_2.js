



import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ref_lay_2 extends Component {

    render() {
        const { companyName, website, phoneNumber, emailAddress } = this.props.referance;
        return (
            <>
                <h4 className="fw-bold fs-5 pt-1">REFERENCE</h4> <hr />

                <ul className="d-flex flex-column pr-1">
                    <span className="fw-bold"> {companyName}</span>
                    <span className="fw-normal"> {website}</span>
                    <span className="fw-normal"> {phoneNumber}</span>
                    <span className="fw-normal"> {emailAddress}</span>
                </ul>
            </>
        )
    }
}