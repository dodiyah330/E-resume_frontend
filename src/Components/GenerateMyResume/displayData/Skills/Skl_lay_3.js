import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skl_lay_3 extends Component {

    render() {
        return (
            <>
                <div className="my-2 p-2">
                    <p className=" fw-bold fs-5 text-primary">Skills</p>
                    <div className="d-flex flex-wrap">
                        {this.props.skills.map((item) => [
                            <div className="d-flex col-5 m-1" key={item.id}>
                                <span className="fw-bold"> {item.skills}:
                                    < span className="fw-normal">{item.level}</span>
                                </span>
                            </div>
                        ])}
                    </div>
                </div> 
            </>
        )
    }
}

