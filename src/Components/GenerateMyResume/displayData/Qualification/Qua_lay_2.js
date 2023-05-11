import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'

export default class Qua_lay_2 extends Component {
    render() {
        return (
            <>
                <div>
                    <h4 className="fw-bold fs-5 pt-1">EDUCATION & QUALIFICATION</h4>
                    {this.props.qualification.map((item) => [
                        <div className='pr-1' key={item.id}>
                            <div className='d-flex justify-content-end pt-1 p-1'>
                                {format(new Date(item.startDate), 'yyyy-MM-dd')} To {format(new Date(item.endDate), 'yyyy-MM-dd')}
                            </div>
                            <ul className="row m-2">
                                <div className="d-flex flex-column">
                                    <div className="fw-bold">{item.degree}</div>
                                    <span className="fw-normal"> {item.degreeCity}</span>
                                    <span className="fw-normal"> {item.school}</span>
                                    <span className="fw-normal"> {item.discription}</span>
                                </div>
                            </ul>
                        </div>
                    ])
                    }
                </div>
            </>
        )
    }
}
