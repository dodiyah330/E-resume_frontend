import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'


export default class WE_lay_4 extends Component {

    render() {
        return (
            <>
                <div className='p-1'>
                    <div className="fw-bold fs-5 text-uppercase">Workexperience</div>
                    {this.props.workexperience.map((item) => [
                        <ul className="g-3 row" style={{"paddingTop":"7px"}} key={item.id}>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">{item.jobTitle}</span>
                                <span className="fw-normal">{item.jobCity}</span>
                                <span className="fw-normal">{item.emspanloyer}</span>
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

