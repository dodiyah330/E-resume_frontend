import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { format } from 'date-fns'

export default class QualificationForm extends Component {

    state = {
        show: false,
        degree: "",
        degreeCity: "",
        school: "",
        startDate: "",
        endDate: "",
        discription: "",
        res: "",
        personal_id: localStorage.getItem("personal_id"),
        Qua_id: null,
        add: true,
        adddisable: false,
        education: [],
        edit: false,
        submitted: false

    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/getqualification/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    education: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    update = (id) => {
        Axios.get(`http://localhost:3001/getqualification/${this.state.personal_id}/${id}`).then((response) => {
            const startDate = format(new Date(response.data[0].startDate), 'yyyy-MM-dd')
            const endDate = format(new Date(response.data[0].endDate), 'yyyy-MM-dd')
            this.setState({
                degree: response.data[0].degree,
                degreeCity: response.data[0].degreeCity,
                school: response.data[0].school,
                startDate: startDate,
                endDate: endDate,
                discription: response.data[0].discription,
                Qua_id: response.data[0].id,
                edit: true,
                show: !this.state.show
            })
        })
    }

    addSub() {
        const Qualification = {
            degree: this.state.degree,
            degreeCity: this.state.degreeCity,
            school: this.state.school,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            discription: this.state.discription,
            personal_id: this.state.personal_id
        };

        if (this.state.degree !== "" &&
            this.state.degreeCity !== "" &&
            this.state.school !== "" &&
            this.state.startDate !== "" &&
            this.state.endDate !== "" &&
            this.state.discription !== "") {

            Axios.post(`http://localhost:3001/CreateResume/Experience/qualification`, Qualification)
                .then(response => {
                    if (response.data.message === "saved") {
                        this.setState({
                            Qua_id: response.data.result.insertId
                        })
                    }

                    if (this.state.res === "please fill all fields") {
                        this.setState({
                            res: "Done", submitted: true
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

        else if (this.state.degree === "" &&
            this.state.degreeCity === "" &&
            this.state.school === "" &&
            this.state.startDate === "" &&
            this.state.endDate === "" &&
            this.state.discription === "") {
            this.setState({ res: "", submitted: true })
        }

        else if (this.state.degree === "" ||
            this.state.degreeCity === "" ||
            this.state.school === "" ||
            this.state.startDate === "" ||
            this.state.endDate === "" ||
            this.state.discription === "") {
            this.setState({ res: "please fill all fields", submitted: false })
        }
    }

    updateSub() {
        const Qualification = {
            degree: this.state.degree,
            degreeCity: this.state.degreeCity,
            school: this.state.school,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            discription: this.state.discription,
            personal_id: this.state.personal_id
        };


        if (this.state.degree !== "" &&
            this.state.degreeCity !== "" &&
            this.state.school !== "" &&
            this.state.startDate !== "" &&
            this.state.endDate !== "" &&
            this.state.discription !== "") {

            Axios.put(`http://localhost:3001/CreateResume/Experience/qualification/${this.state.personal_id}/${this.state.Qua_id}`, Qualification)
                .then(response => {
                    // console.log(response.data);
                    if (response.data.message === "Updated") {
                        this.setState({
                            res: "Updated", submitted: true
                        })
                    }
                    if (this.state.res === "please fill all fields") {
                        this.setState({ res: "Done" , submitted: true})
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

        else if (this.state.degree === "" &&
            this.state.degreeCity === "" &&
            this.state.school === "" &&
            this.state.startDate === "" &&
            this.state.endDate === "" &&
            this.state.discription === "") {
            this.setState({ res: "", submitted: true })
        }

        else if (this.state.degree === "" ||
            this.state.degreeCity === "" ||
            this.state.school === "" ||
            this.state.startDate === "" ||
            this.state.endDate === "" ||
            this.state.discription === "") {
            this.setState({ res: "please fill all fields", submitted: true })
        }

    }


    onSubmit() {
        this.state.Qua_id === null ? this.addSub() : this.updateSub()
    }


    addHandler = () => {
        this.onSubmit()
        if (this.state.res !== "please fill all fields") {
            this.setState({
                add: !this.state.add,
                adddisable: !this.state.adddisable,
                degree: "",
                degreeCity: "",
                school: "",
                startDate: "",
                endDate: "",
                discription: "",
                Qua_id: null
            })
        }
    }

    editHandler = () => {
        this.onSubmit()
        if (this.state.res !== "please fill all fields") {
            this.setState({
                add: !this.state.add,
                adddisable: !this.state.adddisable,
                degree: "",
                degreeCity: "",
                school: "",
                startDate: "",
                endDate: "",
                discription: "",
                Qua_id: null
            })
        }
    }

    Delete = (id) => {
        const Qualification = {
            degree: "Deleted",
            degreeCity: "Deleted",
            school: "Deleted",
            startDate: "Deleted",
            endDate: "Deleted",
            discription: "Deleted",
            personal_id: 0
        };

        Axios.put(`http://localhost:3001/CreateResume/Experience/qualification/${this.state.personal_id}/${id}`, Qualification)
            .then((response) => {
                this.setState({
                    education: this.state.education.filter((value) => {
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
                                this.state.education.map((item, index) => [
                                    <div className="d-flex justify-content-center row g-3 p-2" key={index}>
                                        <div className=' border border-dark rounded'>
                                            <button className="btn btn-outline-danger col-1 d-block float-end d-flex justify-content-center m-2"
                                                onClick={() => { this.Delete(item.id) }}
                                            ><i className=" p-1 fa fas fa-trash">  </i>
                                            </button>
                                            <button className="btn btn-outline-dark col-1 d-block float-end d-flex justify-content-center m-2"
                                                onClick={() => { this.update(item.id) }}
                                            >
                                                <i className=" p-1 fa fas fa-edit">  </i>
                                            </button>
                                            <h3>{item.degree}</h3>
                                            <div className="">
                                                <div className="fw-bold d-flex flex-row">{item.school} - <div>{item.degreeCity}</div> </div>
                                            </div>
                                        </div>
                                    </div>
                                ])
                            }
                        </div>
                        :
                        false}

                    {this.state.add ?
                        <div>
                            <div className="d-flex justify-content-center row p-2" >
                                <div className="col-md-5 m-1">
                                    <label htmlFor="e.g.b.sc." className="form-label">Degree</label>
                                    <input type="text" className="form-control fw-bold" id="inputdegree"
                                        name="degree"
                                        value={this.state.degree}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputcity" className="form-label">City/Town</label>
                                    <input type="text" className="form-control fw-bold" id="inputcity"
                                        name="degreeCity"
                                        value={this.state.degreeCity}
                                        onChange={this.onChange} />
                                </div>

                                <div className="col-md-11 m-1">
                                    <label htmlFor="inputschool" className="form-label">School/Collage</label>
                                    <input type="text" className="form-control fw-bold" id="inputschool"
                                        name="school"
                                        value={this.state.school}
                                        onChange={this.onChange} />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputdate" className="form-label">Start Date</label>
                                    <input type="date" className="form-control fw-bold" id="inputCity"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange} />
                                </div>

                                <div className="col-md-6 m-1">
                                    <label htmlFor="inputdate" className="form-label">End Date</label>
                                    <input type="date" className="form-control fw-bold" id="inputCity"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange} />
                                </div>

                                <div className="col-md-11 m-1">
                                    <label htmlFor="inputdiscription" className="form-label">Discription</label>
                                    <textarea className="form-control fw-bold" placeholder="" id="floatingTextarea" style={{ "height": "100px" }}
                                        name="discription"
                                        value={this.state.discription}
                                        onChange={this.onChange} ></textarea>
                                    <label htmlFor="floatingTextarea"></label>
                                </div>

                                <div className="text-danger font-weight-bold">{this.state.res}</div>

                                <div className="d-block float-start">
                                    <Button variant="light" className="btn btn-outline-dark fw-bold mx-3 col-3 d-block float-start"
                                        onClick={
                                            this.addHandler
                                        }
                                        disabled={this.state.adddisable}
                                    >
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
                        </div>
                        :
                        false}


                    {!this.state.add &&
                        <div>
                            <QualificationForm />
                        </div>}
                </div>
            </>
        );
    }
}

