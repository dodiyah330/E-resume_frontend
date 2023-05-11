import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'

export default class Qua_lay_3 extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="fw-bold fs-5 text-primary my-2 p-2">Education & Qualification</div>
                    {this.props.qualification.map((item) => [
                        <ul className="d-flex g-3 m-2 p-1 mt-1" key={item.id}>
                            <p className="fw-normal col-4">{format(new Date(item.startDate), 'yyyy-MM-dd')} <br /> TO <br /> {format(new Date(item.endDate), 'yyyy-MM-dd')}</p>
                            <div className="d-flex flex-column">
                                <div className="fw-bold text-break">{item.degree}</div>
                                <span className="fw-normal text-break"> {item.degreeCity}</span>
                                <span className="fw-normal text-break"> {item.school}</span>
                                <span className="fw-normal text-break"> {item.discription}</span>
                            </div>
                        </ul>
                    ])
                    }
                </div>
            </>
        )
    }
}
