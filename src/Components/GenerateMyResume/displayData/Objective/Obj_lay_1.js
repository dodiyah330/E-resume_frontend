import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Obj_lay_1 extends Component {
   
    render() {
        return (
            <>
                <div className="container p-1 pt-5 mb-2" style={{"background":"#ebf2fc"}}> 
                    <div> {this.props.objective}</div>
                </div>

            </>
        )
    }
}
