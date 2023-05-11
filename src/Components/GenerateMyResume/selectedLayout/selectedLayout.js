import React from 'react';
import { Component } from "react";
import PDFGenerator from './PDF_generator'
import Menu from '../../HomeComponents/Navbar/Menu'
import Footer from '../../HomeComponents/Footer'

export default class selectedLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personal_id: this.props.match.params.id,
            Layoutselected: this.props.location.state.selectedLayout
        }
    }

    componentDidMount() {
        localStorage.setItem("personal_id", this.state.personal_id);
    }

    render() {
        return (
            <>
                <div>
                    <Menu />
                    <PDFGenerator selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.props.location.state.branch_resume} />
                    <Footer />
                </div>
            </>
        )
    }
}


