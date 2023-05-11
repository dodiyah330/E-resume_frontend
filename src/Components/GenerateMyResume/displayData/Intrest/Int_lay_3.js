import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Int_lay_3 extends Component {


    render() {
        return (
            <>
                <div className="p-2">
                    <p className="fw-bold fs-5 text-primary ">intrest</p>
                    <div className="fw-bold p-1 ">Hobby :<span className="fw-normal ">{this.props.intrest}</span></div>
                </div>
            </>
        )
    }
}