import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Cards/Card1.css'

export default class CreateResume extends Component {
    render() {
        return (
            <>
                <div className="main text-center m-5">
                    <h6 className="heading">What do our users say about E-Resume?</h6>
                    <p className="text-info">They all found their dream job, thanks to E-Resume:</p>
                </div>
                <div className="container mt-4 d-flex justify-content-center">
                    <div className="row g-0">
                        <div className="col-md-4 border-right">
                            <div className="cards1">
                                <div className="first bg-white p-4 text-center">
                                    <img className='col-4' src="https://www.cvmaker.com/assets/images/reviews/user-1.jpg" alt='Dylan' />
                                    <h5 className='fw-bold m-1'>Dylan</h5>
                                    <p className="line1">Undoubtedly, E-Resume was a great success for me. Within 15 minutes, I had created my resume and sent it with the email program.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-right">
                            <div className="cards1">
                                <div className=" second bg-white p-4 text-center">
                                    <img className='col-4' src="https://www.cvmaker.com/assets/images/reviews/user-2.jpg" alt='Jay' />
                                    <h5 className='fw-bold m-1'>Jay</h5>
                                    <p className="line2">I received positive comments on my resume and found a great job very quickly. I certainly recommend E-Resume!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards1">
                                <div className=" third bg-white p-4 text-center">
                                    <img className='col-4' src="https://www.cvmaker.com/assets/images/reviews/user-3.jpg" alt='Kate' />
                                    <h5 className='fw-bold m-1'>Kate</h5>
                                    <p className="line3">I find it very handy that I can organise all of my resumes and applications in one place with E-Resume. It holds such beautiful resume templates!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
