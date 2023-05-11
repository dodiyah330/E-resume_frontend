
import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ref_lay_3 extends Component {

    render() {
        const { companyName, website, phoneNumber, emailAddress } = this.props.referance;
        return (
            <>
                <h4 className="fw-bold fs-5 text-primary my-2 p-2">Referance</h4>

                <ul className="d-flex p-1">
                    <p className="fw-normal d-flex justify-content-start col-4 "> {companyName}</p>
                    <div className="d-flex justify-content-end flex-column">
                        <span className="fw-normal"> {website}</span>
                        <span className="fw-normal"> {phoneNumber}</span>
                        <span className="fw-normal"> {emailAddress}</span>
                    </div>
                </ul>
            </>
        )
    }
}