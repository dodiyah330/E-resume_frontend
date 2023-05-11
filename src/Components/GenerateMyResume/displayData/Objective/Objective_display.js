import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Obj_lay_1 from './Obj_lay_1';
import Obj_lay_2 from './Obj_lay_2';
import Obj_lay_3 from './Obj_lay_3';
import Obj_lay_4 from './Obj_lay_4';
import Obj_lay_5 from './Obj_lay_5';
import SelectedLayoutfilter from '../../../Filters/SelectedLayoutfilter';

export default class Objective_display extends Component {
    state = {
        personal_id: localStorage.getItem("personal_id"),
        objective: ''
    }
    Obj_layouts = [Obj_lay_1, Obj_lay_2, Obj_lay_3, Obj_lay_4, Obj_lay_5]

    componentDidMount() {
        this.setState({ objective: this.props.branch_resume() })
    }

    componentDidUpdate() {

        if (this.state.objective.length === 0) {
            Axios.get(`http://localhost:3001/getObjective/${this.state.personal_id}`)
                .then(response => {
                    this.setState({ objective: response.data.objective })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        return (
            <>
                {this.Obj_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Obj_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} objective={this.state.objective} />
                    </div>
                ])}
            </>
        )
    }
}

