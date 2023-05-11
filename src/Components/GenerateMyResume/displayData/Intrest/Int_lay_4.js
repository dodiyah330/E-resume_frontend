import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Int_lay_4 extends Component {


    render() {
        return (
            <>
                <div className="fw-bold fs-5 text-uppercase">intrest</div>
                <ul className="fw-bold">Hobby :
                    <span className="fw-normal"> {this.props.intrest}</span>
                </ul>
            </>
        )
    }
}

