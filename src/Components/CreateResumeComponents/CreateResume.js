import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Axios from "axios";
import { Button } from 'react-bootstrap';
import dummy from './dummy-profile.png'
import './CreateResume.css'
import Menu from '../HomeComponents/Navbar/Menu';
import Footer from '../HomeComponents/Footer';

export default class CreateResume extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    city: "",
    file: null,
    linkedin: "",
    reg_id: localStorage.getItem("reg_id"),
    personal_id: localStorage.getItem("personal_id"),
    res: "",
    saved: false,
    img_prv: dummy,
    updated: false
  }

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          file: e.target.files[0],
          img_prv: reader.result
        });
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentDidMount() {

    this.state.personal_id &&
      Axios.get(`http://localhost:3001/getPersonaldetails/${this.state.personal_id}`)
        .then(response => {
          this.setState({
            firstname: response.data.result.firstname,
            lastname: response.data.result.lastname,
            email: response.data.result.email,
            contact: response.data.result.contact,
            city: response.data.result.city,
            file: response.data.result.image,
            img_prv: response.data.image_url,
            linkedin: response.data.result.linkedin
          })
        })
        .catch(error => {
          console.log(error);
        })
  }

  newResumehandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("personal_id")
    window.location.reload();
  }

  onSubmit = (e) => {

    e.preventDefault();
    if (this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.email !== "" &&
      this.state.contact !== "" &&
      this.state.city !== "" &&
      this.state.linkedin !== "" &&
      this.state.file !== null &&
      this.state.reg_id !== "") {

      const formdata = new FormData()
      if (this.state.file.name) {
        formdata.append('file', this.state.file, this.state.file.name)
      } else {
        formdata.append('file', this.state.file)
      }
      formdata.append('firstname', this.state.firstname);
      formdata.append('lastname', this.state.lastname);
      formdata.append('email', this.state.email);
      formdata.append('contact', this.state.contact);
      formdata.append('city', this.state.city);
      formdata.append('linkedin', this.state.linkedin);
      formdata.append('reg_id', this.state.reg_id);

      !this.state.personal_id ?
        Axios.post(`http://localhost:3001/CreateResume`, formdata)
          .then(response => {
            if (response.data.message === "saved") {
              this.setState({
                saved: true,
                personal_id: response.data.result.insertId,
              })
              localStorage.setItem("personal_id", this.state.personal_id);

            }
            if (this.state.res === "please fill all fields") {
              this.setState({
                res: "Done",
                saved: true
              })
            }
          })
          .catch(error => {
            console.log(error);
          })

        :

        Axios.put(`http://localhost:3001/CreateResume/${this.state.personal_id}`, formdata)
          .then(response => {
            if (response.data.message === "updated") {
              this.setState({
                updated: true,
              })
            }
            if (this.state.res === "please fill all fields") {
              this.setState({
                res: "Done",
                updated: true
              })
            }
          })
          .catch(error => {
            console.log(error);
          })

    }

    else {
      this.setState({ res: "please fill all fields" })
    }
  }

  render() {
    const { firstname, lastname, email, contact, city, linkedin, img_prv } = this.state;

    return (
      <>
        <div className="" >
          <Menu />
        </div>
        <div className="d-flex justify-content-center  m-5" >
          <div className="container shadow d-flex justify-content-center " >
            <div className="w-75 p-5  ">

              {this.state.personal_id &&
                <div className="create">
                  <Button varient="light" className="create_button btn d-block float-end m-3"
                    onClick={this.newResumehandler}>
                    <i className="p-1 create_icon fa fas fa-plus"></i>
                    <span className="button__text">
                      <Link className="text-decoration-none" to={`/CreateResume`}>
                      </Link>
                    </span>
                    Create New Resume
                  </Button>
                </div>
              }

              <h2 className="m-3 fw-bold ">Personal Details</h2><hr />

              <form onSubmit={this.onSubmit}>
                <div className="col-md-3 col-lg-3 m-1" align="center">
                  <div className="col-sm-9">

                    <img className="img-circle img-responsive" width="130px" height="130px" alt="User Pic"
                      src={img_prv}
                    />

                    <input className="m-1" type="file" accept="image/*"
                      name="file"
                      onChange={this.onFileChange}
                    />

                    <label className="col control-label m-1">Profile Image</label>
                  </div>
                </div>

                <div className="form-group m-1">
                  <label className="form-label mt-3">Firstname </label>
                  <input
                    type="text"
                    className="form-control form-control-lg fw-bold fs-6  "
                    placeholder="Enter Your Firstname"
                    name="firstname"
                    value={firstname}
                    onChange={this.onChange} />
                </div>

                <div className="form-group m-1">
                  <label className="form-label mt-3">Lastname </label>
                  <input
                    type="text"
                    className="form-control form-control-lg fw-bold fs-6"
                    placeholder="Enter Your Lastname"
                    name="lastname"
                    value={lastname}
                    onChange={this.onChange} />
                </div>

                <div className="form-group  m-1">
                  <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg fw-bold fs-6"
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={email}
                    onChange={this.onChange} />
                </div>

                <div className="form-group m-1">
                  <label className="form-label mt-3">Contact </label>
                  <input
                    type="number"
                    className="form-control form-control-lg fw-bold fs-6"
                    placeholder="Enter Your Phone Number"
                    name="contact"
                    value={contact}
                    onChange={this.onChange} />
                </div>

                <div className="form-group m-1">
                  <label className="form-label mt-3">City </label>
                  <input
                    type="text"
                    className="form-control form-control-lg fw-bold fs-6"
                    placeholder="Enter Your City Name"
                    name="city"
                    value={city}
                    onChange={this.onChange} />
                </div>

                <div className="form-group m-1">
                  <label className="form-label mt-3">LinkedIn Id </label>
                  <input
                    type="text"
                    className="form-control form-control-lg fw-bold fs-6"
                    placeholder="Enter Your LinkedIn ID"
                    name="linkedin"
                    value={linkedin}
                    onChange={this.onChange} />
                </div>

                <p className="text-danger font-weight-bold m-1 fw-bold fs-6">{this.state.res}</p>

                <Button varient="light" className="update d-block float-start m-4" type="submit"
                  onClick={this.onSubmit}>
                  {this.state.updated && (
                    <div className="">
                      <i className="p-1 create_icon fa fas fa-plus"></i>
                      <span className="button__text">
                        <Link className="text-decoration-none"
                          to={`CreateResume/Experience/${this.state.reg_id}`}>
                        </Link>
                      </span>
                    </div>
                  )}
                  {this.state.personal_id ? "Update" : "Let's Build Resume"}
                </Button>

                {this.state.personal_id &&
                  <div className="">
                    <Link className="text-decoration-none d-block float-end btn-block m-4" to={`CreateResume/Experience/${this.state.reg_id}`}>
                      <Button className="next" >
                        <i className="p-1 create_icon fa fas fa-angle-right"></i>
                        Next
                      </Button>
                    </Link>
                  </div>
                }

              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

