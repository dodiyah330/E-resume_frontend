import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Int_lay_2 extends Component {

    render() {
        return (
            <>
            <div className="m-2">
                <p className="fw-bold fs-5">INTREST</p> 
                <p > {this.props.intrest}</p>
            </div>
            </>
        )
    }
}