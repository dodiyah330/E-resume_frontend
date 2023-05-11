import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skl_lay_4 extends Component {

    render() {
        return (
            <>
                <div className="p-1 mt-1">
                    <div className=" fw-bold fs-5 text-uppercase" style={{"paddingTop":"7px"}}>Skills</div>
                    <div className="d-flex flex-wrap flex-column" style={{"paddingTop":"7px"}}>
                        {this.props.skills.map((item) => [
                            <div className="row g-3 " key={item.id}>
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

