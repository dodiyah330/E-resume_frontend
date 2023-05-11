import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Obj_lay_3 extends Component {

    render() {
        return (
            <>
                <div className="container my-2 p-2"> 
                    <p > {this.props.objective}</p>
                </div>

            </>
        )
    }
}
