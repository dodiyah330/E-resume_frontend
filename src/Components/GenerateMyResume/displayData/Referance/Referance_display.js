
import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Ref_lay_1 from './Ref_lay_1';
import Ref_lay_2 from './Ref_lay_2';
import Ref_lay_3 from './Ref_lay_3';
import Ref_lay_4 from './Ref_lay_4';
import Ref_lay_5 from './Ref_lay_5';
import SelectedLayoutfilter from '../../../Filters/SelectedLayoutfilter';

export default class Referance_display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal_id: localStorage.getItem("personal_id"),
            referance: []
        }
    }
    Ref_layouts = [Ref_lay_1, Ref_lay_2, Ref_lay_3, Ref_lay_4, Ref_lay_5]

    componentDidMount() {
        this.setState({ referance: this.props.branch_resume() })
    }

    componentDidUpdate() {

        if (this.state.referance.length === 0) {

            Axios.get(`http://localhost:3001/getreferance/${this.state.personal_id}`)
                .then(response => {
                    this.setState({ referance: response.data })
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    render() {
        return (
            <>
                {this.Ref_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Ref_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} referance={this.state.referance} />
                    </div>
                ])}
            </>
        )
    }

}

