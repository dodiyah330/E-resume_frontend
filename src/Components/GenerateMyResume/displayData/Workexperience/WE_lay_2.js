import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'


export default class WE_lay_2 extends Component {

    render() {
        return (
            <>
                <div>
                    <h4 className="fw-bold fs-5 text-uppercase">WORKEXPERIENCE</h4>
                    {this.props.workexperience.map((item) => [
                        <div className='pr-1' key={item.id}>
                            <div className='d-flex justify-content-end pt-1 p-1'>
                                {format(new Date(item.startDate), 'yyyy-MM-dd')} To {format(new Date(item.endDate), 'yyyy-MM-dd')}
                            </div>
                            <ul className="g-3 m-2 d-flex">
                                <div className="d-flex flex-column">
                                    <div div className="fw-bold text">{item.jobTitle}</div>
                                    <span className="fw-normal">{item.jobCity}</span>
                                    <span className="fw-normal">{item.emspanloyer}</span>
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
