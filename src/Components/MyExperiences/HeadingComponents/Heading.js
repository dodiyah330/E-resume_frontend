import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Heading.css'

class Heading extends Component {
    render() {
        return (
            <>
                <div style={{ "backgroundColor": "linear-gradient(90deg, #5D54A4, #7C78B8)", "height": "30vh", "borderRadius": "0% 0% 50% 50% / 0% 0% 46% 30% " }}>
                    <h1 className="container d-flex justify-content-center pt-5 text-white" >My Experiences</h1>
                </div>
                {/* <div className="progress">
                    <div className="progress-value"></div>
                </div> */}
            </>
        );
    }
}

export default Heading