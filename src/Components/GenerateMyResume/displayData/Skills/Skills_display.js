import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Skl_lay_1 from './Skl_lay_1';
import Skl_lay_2 from './Skl_lay_2';
import Skl_lay_3 from './Skl_lay_3';
import Skl_lay_4 from './Skl_lay_4';
import Skl_lay_5 from './Skl_lay_5';
import SelectedLayoutfilter from '../../../Filters/SelectedLayoutfilter';


export default class Skills_display extends Component {
    state = {
        personal_id: localStorage.getItem("personal_id"),
        skill: []
    }
    Skill_layouts = [Skl_lay_1, Skl_lay_2, Skl_lay_3, Skl_lay_4, Skl_lay_5]

    componentDidMount() {
        this.setState({ skill: this.props.branch_resume() })
    }

    componentDidUpdate() {
        if (this.state.skill.length === 0) {
            Axios.get(`http://localhost:3001/getskills/${this.state.personal_id}`)
                .then(response => {
                    this.setState({ skill: response.data })
                })

                .catch(error => {
                    console.warn(error);
                })
        }
    }

    render() {
        return (
            <>
                {this.Skill_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Skill_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} skills={this.state.skill} />
                    </div>
                ])}
            </>
        )
    }
}




