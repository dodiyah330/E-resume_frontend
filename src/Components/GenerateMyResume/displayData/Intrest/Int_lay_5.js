import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Int_lay_5 extends Component {


    render() {
        return (
            <>
                <div className="d-flex p-2">
                    <div className="fw-bold d-flex justify-content-start fs-5 col-4">INTREST</div>
                    <p className="fw-normal d-flex justify-content-start col-3 text-break">Hobby</p>
                    <div className="fw-normal text-break">{this.props.intrest}</div>
                    {/* <div>
                        <ul className="d-flex p-1">
                        </ul>
                    </div> */}
                </div>
            </>
        )
    }
}