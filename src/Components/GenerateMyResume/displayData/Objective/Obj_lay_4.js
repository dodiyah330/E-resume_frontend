import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Obj_lay_4 extends Component {
    render() {
        return (
            <>

                <div className="container m-2"> 
                    <h4 className="fw-bold fs-5 text-uppercase" >profile</h4>
                    <p > {this.props.objective}</p>
                </div>

            </>
        )
    }
}
