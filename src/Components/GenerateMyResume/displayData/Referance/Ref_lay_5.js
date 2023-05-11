import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ref_lay_5 extends Component {

    render() {
        const { companyName, website, phoneNumber, emailAddress } = this.props.referance;
        return (
            <>
                <div className="d-flex flex-row my-2 p-2">
                    <div className="fw-bold d-flex justify-content-start fs-5 col-4">REFERANCE</div>
                    <p className="fw-normal d-flex justify-content-start col-3 text-break"> {companyName}</p>
                    <div className="d-flex justify-content-end flex-column">
                        <span className="fw-normal"> {website}</span>
                        <span className="fw-normal"> {phoneNumber}</span>
                        <span className="fw-normal"> {emailAddress}</span>
                    </div>
                    {/* <div>
                        <ul className="d-flex p-1">
                        </ul>
                    </div> */}
                </div>
            </>
        )
    }
}

