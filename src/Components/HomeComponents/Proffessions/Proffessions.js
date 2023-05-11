import React, { Component } from 'react'
import './Proffessions.css'
import Proffessions_data from './Proffession_data/Proffessions_data'
import { Link } from "react-router-dom";


export default class Proffessions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prof_data: Proffessions_data,
        }
    }

    render() {
        return (
            <>
                <h3 className='text-capitalize m-3'>resume making for?</h3>
                <div className="d-flex flex-wrap">
                    {this.state.prof_data().map((item) => [
                        <section className="prof_wrapper" key={item.id}>
                            <div className="prof_grid_space">
                                <div className='d-flex flex-row justify-content-center'>

                                    <div className="prof " style={{ "--bg-img": `url(${item.img_url})` }}>

                                        <h3 className='text-uppercase'>{item.prof_name}</h3>

                                        <div className="dropdown">
                                            <button className="dropbtn">Branch</button>
                                            <div className="dropdown-content">

                                                <div className="content">
                                                    {this.state.prof_data()[item.id].sector_data.map((sub_item) => [
                                                        <Link className="text-start btn text-capitalize" key={sub_item.id} to={{
                                                            pathname: `/layoutSelection`,
                                                            state: {
                                                                templet_view: (false),
                                                                branch_resume: (sub_item.branch_resume)
                                                            }
                                                        }}>
                                                            {sub_item.branch_name}
                                                        </Link>
                                                    ])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ])}

                </div>
            </>
        )
    }
}
