import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button } from "react-bootstrap";

export default class SkillsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skill: [],
            skills: "",
            level: "",
            res: "",
            personal_id: localStorage.getItem("personal_id"),
            Skl_id: null,
            add: true,
            adddisable: false,
            edit: false,
            submitted: false
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/getskills/${this.state.personal_id}`)
            .then(response => {
                this.setState({
                    skill: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    update = (id) => {
        Axios.get(`http://localhost:3001/getskills/${this.state.personal_id}/${id}`).then((response) => {
            this.setState({
                skills: response.data[0].skills,
                level: response.data[0].level,
                Skl_id: response.data[0].id,
                edit: true
            })
        })
    }

    Delete = (id) => {
        const Skills = {
            skills: "Deleted",
            level: "Deleted",
            personal_id: 0
        };

        Axios.put(`http://localhost:3001/CreateResume/Experience/skills/${this.state.Skl_id}/${id}`, Skills)
            .then((response) => {
                this.setState({
                    skill: this.state.skill.filter((value) => {
                        return value.id !== id
                    })
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }


    addSub() {

        const Skills = {
            skills: this.state.skills,
            level: this.state.level,
            personal_id: this.state.personal_id
        };

        if (this.state.skills !== "" &&
            this.state.level !== ""
        ) {

            Axios.post(`http://localhost:3001/CreateResume/Experience/skills`, Skills)
                .then(response => {
                    if (response.data.message === "saved") {
                        this.setState({
                            Skl_id: response.data.result.insertId
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


        else if (this.state.skills === "" ||
            this.state.level === "") {
            if (this.state.skills === "" &&
                this.state.level === "") {
                this.setState({ res: "", submitted: true })
            }
            else {
                this.setState({ res: "please fill all fields", submitted: false })
            }
        }
        else if (this.state.skill.length < 0) {
            this.setState({ res: "please fill all fields", submitted: false })
        }
    }

    updateSub() {

        const Skills = {
            skills: this.state.skills,
            level: this.state.level,
            personal_id: this.state.personal_id
        };

        if (this.state.skills !== "" &&
            this.state.level !== ""
        ) {

            Axios.put(`http://localhost:3001/CreateResume/Experience/skills/${this.state.personal_id}/${this.state.Skl_id}`, Skills)

                .then(response => {
                    if (response.data.message === "Updated") {
                        this.setState({
                            res: "Updated", submitted: true
                        })
                    }
                })

                .catch(error => {
                    console.log(error);
                })
        }

        else if (this.state.skills === "" &&
            this.state.level === "") {
            this.setState({ res: "", submitted: true })
        }
        else if (this.state.skills === "" ||
            this.state.level === "") {
            this.setState({ res: "please fill all fields", submitted: false })
        }
        else if (this.state.skill.length < 0) {
            this.setState({ res: "please fill all fields", submitted: false })

        }

    }


    onSubmit() {

        this.state.Skl_id === null ? this.addSub() : this.updateSub()
        return this.state.res
    }


    addHandler = () => {
        this.onSubmit()
        if (this.state.res !== "please fill all fields") {
            this.setState({
                add: !this.state.add,
                adddisable: !this.state.adddisable,
                skills: "",
                level: "",
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
                skills: "",
                level: "",
                Qua_id: null
            })
        }
    }

    render() {
        return (
            <>

                <div>
                    {this.state.add &&
                        <div>
                            {
                                this.state.skill.map((item, index) => [
                                    <div key={index}>
                                        <div className="d-flex justify-content-center row p-2"  >
                                            <div className=' border border-dark rounded'>
                                                <button className="btn btn-outline-danger col-1 d-block float-end d-flex justify-content-center m-2"
                                                    onClick={() => { this.Delete(item.id) }}
                                                >                                                <i className=" p-1 fa fas fa-trash">  </i>
                                                </button>
                                                <button className="btn btn-outline-dark col-1 d-block float-end d-flex justify-content-center m-2"
                                                    onClick={() => { this.update(item.id) }}
                                                >
                                                    <i className=" p-1 fa fas fa-edit">  </i>
                                                </button>
                                                <div className="fw-bold d-flex flex-row text-center m-2">{item.skills} - <div>{item.level}</div> </div>
                                            </div>
                                        </div>
                                    </div>
                                ])
                            }
                        </div>
                    }

                    {this.state.add ?

                        <form className="d-flex justify-content-center row p-2" >
                            <div className="col-md-5 m-1">
                                <label htmlFor="inputskill" className="form-label">Skill</label>
                                <input type="text" className="form-control fw-bold" id="inputSkill"
                                    name="skills"
                                    value={this.state.skills}
                                    onChange={this.onChange} />
                            </div>

                            <div className="col-md-5 m-1">
                                <label className="htmlform-label mb-1" >Level</label>
                                <select className="form-select fw-bold" id="inputGroupSelect01"
                                    onChange={(e) => {
                                        this.setState({
                                            level: e.target.value,
                                        })
                                    }
                                    }>
                                    {this.state.Skl_id === null ?
                                        <option defaultValue="selected">Select Level</option>
                                        :
                                        <option defaultValue="selected">{this.state.level}</option>
                                    }
                                    <option value="Expert">Expert</option>
                                    <option value="Experienced">Experienced</option>
                                    <option value="Skillfull">Skillfull</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Beginner">Beginner</option>
                                </select>
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
                                        onClick={this.editHandler}>
                                        <i className=" p-1 fa fas fa-check">  </i>
                                        Update
                                    </Button>
                                }

                            </div>

                        </form>
                        :
                        false}

                    {!this.state.add &&
                        <div>
                            <SkillsForm />
                        </div>
                    }


                </div>

            </>
        );
    }
}
