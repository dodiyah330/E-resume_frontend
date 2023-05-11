import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Per_det_lay_1 from './Per_det_lay_1';
import Per_det_lay_2 from './Per_det_lay_2';
import Per_det_lay_3 from './Per_det_lay_3';
import Per_det_lay_4 from './Per_det_lay_4';
import Per_det_lay_5 from './Per_det_lay_5';
import SelectedLayoutfilter from '../../../Filters/SelectedLayoutfilter';
import dummy_Img from './dummy_Img.png'

export default class Personaldetails_display extends Component {

    constructor(props) {
        super(props)

        this.state = {
            personal_id: localStorage.getItem("personal_id"),
            personal_details: [],
            img_url: null
        }
    }

    Per_det_layouts = [Per_det_lay_1, Per_det_lay_2, Per_det_lay_3, Per_det_lay_4, Per_det_lay_5]

    componentDidMount() {
        this.setState({
            personal_details: this.props.branch_resume(),
            img_url: dummy_Img
        })
    }

    componentDidUpdate() {

        if (this.state.personal_details.length === 0) {
            Axios.get(`http://localhost:3001/getPersonaldetails/${this.state.personal_id}`)
                .then(response => {
                    this.setState({
                        personal_details: response.data.result,
                        img_url: response.data.image_url
                    })
                })

                .catch(error => {
                    console.warn(error);
                })
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.Per_det_layouts.map((item, index) => [
                        <div key={index}>
                            <SelectedLayoutfilter component={item} id={this.Per_det_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} personal_details={this.state.personal_details} obj_branch_resume={this.props.obj_branch_resume} img_url={this.state.img_url} />
                        </div>
                    ])}
                </div>
            </>
        );
    }
}

