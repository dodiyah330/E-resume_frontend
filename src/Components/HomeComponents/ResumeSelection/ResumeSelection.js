import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './ResumeSelection.css'

export default class ResumeSelection extends Component {

    state = {
        personal_id: null,
        reg_id: localStorage.getItem("reg_id"),
        resumes: [],
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/getResumes/${this.state.reg_id}`)
            .then(response => {
                this.setState({
                    resumes: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentWillUnmount() {
        window.location.reload();
    }

    Delete = (id) => {
        Axios.delete(`http://localhost:3001/Resumedelete/${id}`).then((response) => {
            this.setState({
                resumes: this.state.resumes.filter((value) => {
                    return value.id !== id
                })
            })
        })
    }

    View = (id) => {
        localStorage.setItem("personal_id", id);

    }

    render() {
        return (
            <>
                {this.state.resumes.length > 0 ?
                    <div className='m-5'>
                        <div className="container shadow p-3">
                            <h3 className="mx-3">Your Resumes</h3>
                            <div className="d-flex flex-row justify-content-start" style={{ "overflowX": "scroll" }}>

                                {this.state.resumes.reverse().map((item) => [
                                    <div className="m-5" key={item.id}>

                                        <div className="image-area">
                                            <div className="img-wrapper">
                                                <img src={`http://localhost:3001/getprofilepic/${item.image}`} alt="profilepic  " />
                                                <h2>{item.firstname} {item.lastname}</h2>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <Button variant="light" className="float-start col-2 view m-2"
                                                    onClick={() => { this.View(item.id) }}>
                                                    <Link className=' text-decoration-none' to={{
                                                        pathname: `/layoutSelection`,
                                                        state: {
                                                            templet_view: (false),
                                                            branch_resume: (null)
                                                        }
                                                    }}>
                                                        <i className=" btn button__icon fa fas fa-eye">
                                                        </i>
                                                    </Link>
                                                </Button>

                                                <Button variant="light" className="col-2 delete float-end m-2"
                                                    onClick={() => { this.Delete(item.id) }}>
                                                    <i className="button__delete fa fas fa-trash">
                                                    </i>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ])}
                            </div>
                        </div>
                    </div>
                    :
                    false
                }
            </>
        )
    }
}

