import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { format } from 'date-fns';


export default class WorkExperienceForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobCity: "",
            employer: "",
            startDate: "",
            endDate: "",
            discription: "",
            res: "",
            add: true,
            adddisable: false,
            personal_id: localStorage.getItem("personal_id"),
            WE_id: null,
            workexperience: [],
            edit: false,
            submitted: false
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {

        Axios.get(`http://localhost:3001/getworkexperience/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    workexperience: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    update = (id) => {
        Axios.get(`http://localhost:3001/getWorkexperience/${this.state.personal_id}/${id}`).then((response) => {
            const startDate = format(new Date(response.data[0].startDate), 'yyyy-MM-dd')
            const endDate = format(new Date(response.data[0].endDate), 'yyyy-MM-dd')
            this.setState({
                jobTitle: response.data[0].jobTitle,
                jobCity: response.data[0].jobCity,
                employer: response.data[0].employer,
                startDate: startDate,
                endDate: endDate,
                discription: response.data[0].discription,
                WE_id: response.data[0].id,
                edit: true
            })
        })
    }

    addSub() {
        const WorkExperience = {

            jobTitle: this.state.jobTitle,
            jobCity: this.state.jobCity,
            employer: this.state.employer,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            discription: this.state.discription,
            personal_id: this.state.personal_id
        };

        if (this.state.jobTitle !== "" &&
            this.state.jobCity !== "" &&
            this.state.employer !== "" &&
            this.state.startDate !== "" &&
            this.state.endDate !== "" &&
            this.state.discription !== "") {

            Axios.post(`http://localhost:3001/CreateResume/Experience/workexperience`, WorkExperience)
                .then(response => {
                    if (response.data.message === "saved") {
                        this.setState({
                            WE_id: response.data.result.insertId
                        })
                    }
                    if (this.state.res === "please fill all fields") {
                        this.setState({ res: "Done", submitted: true })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

        else if (this.state.jobTitle === "" &&
            this.state.jobCity === "" &&
            this.state.employer === "" &&
            this.state.startDate === "" &&
            this.state.endDate === "" &&
            this.state.discription === "") {
            this.setState({ res: "" , submitted: true })
        }

        else if (this.state.jobTitle === "" ||
            this.state.jobCity === "" ||
            this.state.employer === "" ||
            this.state.startDate === "" ||
            this.state.endDate === "" ||
            this.state.discription === "") {
            this.setState({ res: "please fill all fields" , submitted: false })
        }
    }

    updateSub() {

        const WorkExperience = {
            jobTitle: this.state.jobTitle,
            jobCity: this.state.jobCity,
            employer: this.state.employer,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            discription: this.state.discription,
            personal_id: this.state.personal_id
        };

        if (this.state.jobTitle !== "" &&
            this.state.jobCity !== "" &&
            this.state.employer !== "" &&
            this.state.startDate !== "" &&
            this.state.endDate !== "" &&
            this.state.discription !== "") {

            Axios.put(`http://localhost:3001/CreateResume/Experience/workexperience/${this.state.personal_id}/${this.state.WE_id}`, WorkExperience
            )
                .then(response => {
                    if (response.data.message === "Updated") {
                        this.setState({
                            res: "Updated", submitted: true
                        })
                    }
                    if (this.state.res === "please fill all fields") {
                        this.setState({ res: "Done", submitted: true })
                    }

                })
                .catch(error => {
                    console.log(error);
                })
        }

        else if (this.state.jobTitle === "" &&
            this.state.jobCity === "" &&
            this.state.employer === "" &&
            this.state.startDate === "" &&
            this.state.endDate === "" &&
            this.state.discription === "") {
            this.setState({ res: "", submitted: true })
        }

        else if (this.state.jobTitle === "" ||
            this.state.jobCity === "" ||
            this.state.employer === "" ||
            this.state.startDate === "" ||
            this.state.endDate === "" ||
            this.state.discription === "") {
            this.setState({ res: "please fill all fields", submitted: false })
        }
    }

    onSubmit() {
        this.state.WE_id === null ? this.addSub() : this.updateSub()
    }


    addHandler = () => {
        this.onSubmit()
        if (this.state.res !== "please fill all fields") {
            this.setState({
                add: !this.state.add,
                adddisable: !this.state.adddisable,
                jobTitle: "",
                jobCity: "",
                employer: "",
                startDate: "",
                endDate: "",
                discription: "",
                WE_id: null
            })
        }
    }

    editHandler = () => {
        this.onSubmit()
        if (this.state.res !== "please fill all fields") {
            this.setState({
                add: !this.state.add,
                adddisable: !this.state.adddisable,
                jobTitle: "",
                jobCity: "",
                employer: "",
                startDate: "",
                endDate: "",
                discription: "",
                WE_id: null
            })
        }
    }

    Delete = (id) => {
        const WorkExperience = {
            jobTitle: "Deleted",
            jobCity: "Deleted",
            employer: "Deleted",
            startDate: "Deleted",
            endDate: "Deleted",
            discription: "Deleted",
            personal_id: 0
        };

        Axios.put(`http://localhost:3001/CreateResume/Experience/workexperience/${this.state.personal_id}/${id}`, WorkExperience)
            .then((response) => {
                this.setState({
                    workexperience: this.state.workexperience.filter((value) => {
                        return value.id !== id
                    })
                })
            })

            .catch(error => {
                console.warn(error);
            })
    }


    render() {

        return (
            <>
                <div>
                    {this.state.add ?
                        <div>
                            {
                                this.state.workexperience.map((item, index) => [
                                    <div key={index}>
                                        <div className="d-flex justify-content-center row g-3 p-2" >
                                            <div className=' border border-dark rounded'>
                                                <button className="btn btn-outline-danger col-1 d-block float-end d-flex justify-content-center m-2"
                                                    onClick={() => { this.Delete(item.id) }}
                                                >
                                                    <i className=" p-1 fa fas fa-trash">  </i>
                                                </button>
                                                <button className="btn btn-outline-dark col-1 d-block float-end d-flex justify-content-center m-2"
                                                    onClick={() => { this.update(item.id) }}
                                                >
                                                    <i className=" p-1 fa fas fa-edit">  </i>
                                                </button>
                                                <h3>{item.jobTitle}</h3>
                                                <div className="fw-bold d-flex flex-row">{item.employer} - <div>{item.jobCity}</div> </div>
                                            </div>
                                        </div>
                                    </div>
                                ])
                            }
                        </div>
                        :
                        false}

                    {this.state.add ?
                        <div className="d-flex justify-content-center row p-2" >
                            <div className="col-md-5 m-1">
                                <label htmlFor="e.g.b.sc." className="form-label">Job Title</label>
                                <input type="text" className="form-control fw-bold" id="inputjobtitle"
                                    name="jobTitle"
                                    value={this.state.jobTitle}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputcity" className="form-label">City/Town</label>

                                <input type="text" className="form-control fw-bold" id="inputjobcity"
                                    name="jobCity"
                                    value={this.state.jobCity}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="col-md-11 m-1">
                                <label htmlFor="inputemployer" className="form-label">Employer</label>

                                <input type="text" className="form-control fw-bold" id="inputemployer"
                                    name="employer"
                                    value={this.state.employer}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="col-md-5 m-1">
                                <label htmlFor="inputstartdate" className="form-label">Start Date</label>

                                <input type="date" className="form-control fw-bold" id="inputstartdate"
                                    name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="col-md-6 m-1">
                                <label htmlFor="inputenddate" className="form-label">End Date</label>

                                <input type="date" className="form-control fw-bold" id="inputenddate"
                                    name="endDate"
                                    value={this.state.endDate}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="col-md-11 m-1">
                                <label htmlFor="inputdiscription" className="form-label">Discription</label>

                                <textarea className="form-control fw-bold" placeholder="" id="floatingTextarea" style={{ "height": "100px" }}
                                    name="discription"
                                    value={this.state.discription}
                                    onChange={this.onChange}
                                ></textarea>
                                <label htmlFor="floatingTextarea"></label>
                            </div>

                            <p className="text-danger font-weight-bold">{this.state.res}</p>

                            <div className="d-block float-start">
                                <Button variant="light" className="btn btn-outline-dark fw-bold mx-3 col-3 d-block float-start"
                                    onClick={this.addHandler}
                                    disabled={this.state.adddisable}>
                                    {this.state.add ?
                                        <i className=" p-1 fa fas fa-plus"> Add </i>
                                        : false}
                                </Button>

                                {this.state.edit &&
                                    <Button variant="light" className="btn btn-outline-warning fw-bold mx-3 col-5 col-md-3 d-block float-end"
                                        onClick={
                                            this.editHandler
                                        }
                                    >
                                        <i className=" p-1 fa fas fa-check">  </i>
                                        Update
                                    </Button>
                                }
                            </div>
                        </div>
                        :
                        false}


                    {!this.state.add &&
                        <div>
                            <WorkExperienceForm />
                        </div>}

                </div>
            </>
        );
    }
}


