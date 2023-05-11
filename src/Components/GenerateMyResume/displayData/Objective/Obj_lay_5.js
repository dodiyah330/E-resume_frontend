import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Obj_lay_5 extends Component {
    render() {
        return (
            <>
                <div className="container my-2 p-2">
                    <div className="d-flex flex-row mt-2 ">
                        <h4 className="fw-bold fs-5 col-4">OBJECTIVES</h4>
                        <div className=' text-break col-8'> {this.props.objective}</div>
                    </div>
                </div>

            </>
        )
    }
}
