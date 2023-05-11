import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'


export default class WE_lay_5 extends Component {

    render() {
        return (
            <>
                <div className="d-flex flex-row my-2 p-2">
                    <div className="fw-bold d-flex justify-content-start fs-5 col-4">WORK <br /> EXPERIENCE</div>
                    <div>
                        {this.props.workexperience.map((item) => [
                            <ul className="d-flex p-1" key={item.id}>
                                <p className="fw-normal d-flex justify-content-start col-4">{format(new Date(item.startDate), 'yyyy-MM-dd')} - <br /> {format(new Date(item.endDate), 'yyyy-MM-dd')}</p>
                                <div className="d-flex justify-content-end flex-column">
                                    <div className="fw-bold text-break">{item.jobTitle}</div>
                                    <span className="fw-normal text-break">{item.jobCity}</span>
                                    <span className="fw-normal text-break">{item.emloyer}</span>
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

