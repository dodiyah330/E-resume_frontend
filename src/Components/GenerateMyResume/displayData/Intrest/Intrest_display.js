import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Int_lay_1 from './Int_lay_1';
import Int_lay_2 from './Int_lay_2';
import Int_lay_3 from './Int_lay_3';
import Int_lay_4 from './Int_lay_4';
import Int_lay_5 from './Int_lay_5';
import SelectedLayoutfilter from '../../../Filters/SelectedLayoutfilter';

export default class Intrest_display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personal_id: localStorage.getItem("personal_id"),
            hobby: ''
        }
    }

    Int_lay = [Int_lay_1, Int_lay_2, Int_lay_3, Int_lay_4, Int_lay_5]

    componentDidMount() {
        this.setState({ hobby: this.props.branch_resume() })
    }

    componentDidUpdate() {
        if (this.state.hobby.length === 0) {
            Axios.get(`http://localhost:3001/getintrest/${this.state.personal_id}`)
                .then(response => {
                    this.setState({ hobby: response.data.hobby })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        return (
            <>
                {this.Int_lay.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Int_lay.indexOf(item)} selectedLayout={this.props.selectedLayout} intrest={this.state.hobby} />
                    </div>
                ])}
            </>
        )
    }
}



