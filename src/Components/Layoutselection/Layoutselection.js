import React from 'react';
import { Component } from "react";
import { Button } from 'react-bootstrap';
import Menu from '../HomeComponents/Navbar/Menu'
import layout1 from './layout1.png'
import layout2 from './layout2.jpg'
import layout3 from './layout3.png'
import layout4 from './layout4.jpg'
// import layout5 from './layout5.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layoutselection.css'
import { Link } from 'react-router-dom'
import Footer from '../HomeComponents/Footer'

export default class Layoutselection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personal_id: localStorage.getItem("personal_id"),
            templet_view: false,
            layouts: [
                {
                    id: 0,
                    layout: layout1
                },
                {
                    id: 1,
                    layout: layout2
                },
                {
                    id: 2,
                    layout: layout3
                },
                {
                    id: 4,
                    layout: layout4
                },
                // {
                //     id: 3,
                //     layout: layout4
                // },

            ]
        }
    }   

    componentDidMount() {
        if (this.props.location.state.templet_view) {
            this.setState({ templet_view: this.props.location.state.templet_view })
        }

        else {
            this.setState({ templet_view: false })
        }

    }


    render() {

        return (
            <>
                <div>
                    <Menu />

                    <h1 className='layout_heading mt-4 col-12'>Layout Selection</h1>
                    <div className="container">
                        <div className=" d-flex justify-content-center flex-wrap">
                            {this.state.layouts.map((item, index) => [
                                <div key={index}>
                                    <Button variant="light" className="m-4 btn layout_btn">

                                        {!this.state.templet_view ?
                                            <Link to={{
                                                pathname: `/GenerateMyResume/${this.state.personal_id}`,
                                                state: {
                                                    selectedLayout: (item.id),
                                                    branch_resume: this.props.location.state.branch_resume
                                                }
                                            }}
                                            >
                                                <img className='layout' src={item.layout} alt='layout' />
                                            </Link>
                                            :
                                            <img className='layout' src={item.layout} alt='layout' />
                                        }
                                    </Button>
                                </div>
                            ])}
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}
