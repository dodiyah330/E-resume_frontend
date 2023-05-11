import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skl_lay_1 extends Component {

    render() {
        return (
            <>
                <div className="fs-5 text-capitalize" style={{ "paddingTop": "7px" }} >Skills</div>
                <div style={{ "paddingTop": "8px" }}>
                    {
                        this.props.skills.map((item) => [
                            <div className="row" key={item.id}>
                                <span className="col-6 fw-normal"> {item.skills}:
                                    < span className="fw-normal">{item.level}</span>
                                </span>
                            </div>
                        ])} <hr />
                </div>

            </>
        )
    }
}

