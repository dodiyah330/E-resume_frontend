import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'

export default class Qua_lay_1 extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="fs-5 text-capitalize pt-1">Education & Qualification</div>
                    {this.props.qualification.map((item) => [
                        <ul className="row g-3 m-2 pt-1" key={item.id}>
                            <div className="d-flex flex-column">
                                <div className="fw-bold text-info">{item.degree}</div>
                                <span className="fw-bold"> {item.degreeCity}</span>
                                <span className="fw-normal"> {item.school}</span>
                                    <span className="fw-normal"> {format(new Date(item.startDate), 'yyyy-MM-dd')} TO  {format(new Date(item.endDate), 'yyyy-MM-dd')}</span>
                                <span className="fw-normal"> {item.discription}</span>
                            </div>
                        </ul>
                    ])
                    }
                </div>
            </>
        )
    }
}
