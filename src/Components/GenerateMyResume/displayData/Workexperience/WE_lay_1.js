import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'


export default class WE_lay_1 extends Component {
    render() {
        return (
            <>
                <div className="fs-5 pt-2 text-capitalize">Workexperience</div>
                <div>
                    {this.props.workexperience.map((item) => [
                        <ul className="g-3 mx-2 d-flex pt-1" key={item.id}>
                            <div className="d-flex flex-column">
                                <div div className="fw-bold text-info">{item.jobTitle}</div>
                                <span className="fw-bold">{item.jobCity}</span>
                                <span className="fw-normal">{item.employer}</span>
                                <span className="fw-normal ">{format(new Date(item.startDate), 'yyyy-MM-dd')} TO {format(new Date(item.endDate), 'yyyy-MM-dd')}</span>
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
