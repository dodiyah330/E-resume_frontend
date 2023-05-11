import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skl_lay_5 extends Component {

    render() {
        return (
            <>
                <div className="d-flex flex-row my-2 p-2">
                    <p className="fw-bold fs-5 col-4">SKILLS</p>
                    <div className="d-flex flex-row flex-wrap">
                        {this.props.skills.map((item) => [
                            <div className="d-flex col-5 m-1" key={item.id}>
                                <div className="fw-bold text-break"> {item.skills}:
                                    <span className="fw-normal text-break">{item.level}</span>
                                </div>
                            </div>
                        ])}
                    </div>
                </div>
            </>
        )
    }
}

