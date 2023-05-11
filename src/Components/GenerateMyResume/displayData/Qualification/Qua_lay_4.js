import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'

export default class Qua_lay_4 extends Component {
    render() {
        return (
            <>
                <div className='p-1'>
                    <div className="fw-bold fs-5 text-uppercase">Education </div>
                    {this.props.qualification.map((item) => [
                        <ul className="row g-3" style={{"paddingTop":"7px"}} key={item.id}>
                            <div className="d-flex flex-column">
                                <span className="fw-bold text-break">{item.degree}</span>
                                <span className="fw-normal text-break"> {item.degreeCity}</span>
                                <span className="fw-normal text-break"> {item.school}</span>
                                <span className="fw-normal text-break"> {item.discription}</span>
                                <span className="fw-normal text-break"> {format(new Date(item.startDate), 'yyyy-MM-dd')} TO  {format(new Date(item.endDate), 'yyyy-MM-dd')}</span>
                            </div>
                        </ul>
                    ])
                    }
                </div>
            </>
        )
    }
}
