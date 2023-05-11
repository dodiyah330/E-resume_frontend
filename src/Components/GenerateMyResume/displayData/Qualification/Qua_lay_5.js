import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'

export default class Qua_lay_5 extends Component {
    render() {
        return (
            <>
                <div className="d-flex flex-row p-1">
                    <div className="d-flex justify-content-start fw-bold fs-5 col-4">EDUCATION & QUALIFICATION</div>
                    <div>
                        {this.props.qualification.map((item) => [
                            <ul className="d-flex p-1" key={item.id}>
                                <p className="d-flex justify-content-start fw-normal col-4">{format(new Date(item.startDate), 'yyyy-MM-dd')} - <br /> {format(new Date(item.endDate), 'yyyy-MM-dd')}</p>
                                <div className="d-flex justify-content-start flex-column">
                                    <div className="fw-bold  text-break">{item.degree}</div>
                                    <span className="fw-normal text-break"> {item.degreeCity}</span>
                                    <span className="fw-normal text-break"> {item.school}</span>
                                    <span className="fw-normal text-break"> {item.discription}</span>
                                </div>
                            </ul>
                        ])
                        }
                    </div>
                </div>
            </>
        )
    }
}


