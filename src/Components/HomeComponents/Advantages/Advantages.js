import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Advantages/Advantages.css'

export default class Advantages extends Component {
    render() {
        return (
            <>
                <div className="flex-container m-5 p-5">
                    <div className="" >
                        
                        <div className="card cards card-1 m-3">
                            <h3>Quick and easy resume builder</h3>
                            <p>
                                With our online E-Resume maker, it is simple for anyone to quickly create a professional resume. Enter your personal details and begin filling out your resume content. Finally, choose one of our 36 available resume layouts, and download your resume.
                            </p>
                        </div>

                        <div className="card cards card-2 m-3">
                            <h3>More likely to land a job</h3>
                            <p>
                                With a representative and professional resume, you will stand out amongst all other applicants. You are probably more likely to be invited to an interview with an professional Resume.
                            </p>
                        </div>

                        <div className="card cards card-3 m-3">
                            <h3>Organize your applications</h3>
                            <p>
                                Often, it is important to be able to tailor your resume based on the job you wish to apply for. With E-Resume maker, you can create and manage several different resumes in an organised way through your own personal account hub.
                            </p>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}