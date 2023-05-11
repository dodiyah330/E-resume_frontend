
import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ref_lay_4 extends Component {

    render() {
        const { companyName, website, phoneNumber, emailAddress } = this.props.referance;
        return (
            <>
                <div className="p-1">
                    <h4 className="fw-bold fs-5 text-uppercase">Referance</h4>
                    <ul className=" ">
                        < div className="fw-bold col-3"> {companyName}</div>
                        < div className="fw-normal"> {website}</div>
                        < div className="fw-normal"> {phoneNumber}</div>
                        < div className="fw-normal"> {emailAddress}</div>
                    </ul>
                </div>
            </>
        )
    }
}

