import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Obj_lay_2 extends Component {
    render() {
        return (
            <>
                <div className="container mt-5 p-1 mt-2"> 
                    <div className="fw-bold fs-5">RESUME OBJECTIVES</div>
                    <p > {this.props.objective}</p>
                </div>

            </>
        )
    }
}
