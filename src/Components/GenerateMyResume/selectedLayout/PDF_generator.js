import React from 'react';
import { Component } from "react";
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Layout_1 from '../Layouts/Layout_1';
import Layout_2 from '../Layouts/Layout_2';
import Layout_3 from '../Layouts/Layout_3';
import Layout_4 from '../Layouts/Layout_4';
import Layout_5 from '../Layouts/Layout_5';
import SelectedLayoutfilter from '../../Filters/SelectedLayoutfilter';
import './PDF_generator.css'
// import { PDFExport } from "@progress/kendo-react-pdf";



export default class PDF_generator extends Component {

    constructor(props) {
        super(props)
        this.pdfExportComponent = React.createRef(null);

        this.generatePDF = this.generatePDF.bind(this)

        this.state = {
            layouts: [Layout_1, Layout_2, Layout_3, Layout_4, Layout_5],
            branch_resume: this.props.branch_resume
        }
    }

    componentDidMount() {
        if (this.props.branch_resume === null) {
            this.setState({ branch_resume: this.state.branch_resume })
        }
        else {
            this.setState({ branch_resume: this.state.branch_resume[0] })
        }
    }

    // PDF_gen = () => {
    //     if (this.pdfExportComponent.current) {
    //         this.pdfExportComponent.current.save();
    //     }
    // }

    generatePDF = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector('#eresume'), {
            margin: [10, 10, 10, 10],
            callback: function (pdf) {
                pdf.save("myresume.pdf");
            }
        });
    };

    render() {

        return (
            <>
                <div className='container d-flex justify-content-center flex-column'>
                    <div className="d-flex justify-content-center">

                        {/* {this.props.selectedLayout === 3 ? */}
                            {/* <div>
                                <PDFExport ref={this.pdfExportComponent} paperSize="A4" >

                                    {this.state.layouts.map((item, index) => [
                                        <div className='resume_wid' key={index}>
                                            <SelectedLayoutfilter component={item} id={this.state.layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} branch_resume={this.state.branch_resume} />
                                        </div>
                                    ])}

                                </PDFExport><br />
                            </div>

                            : */}

                            <div className="">
                                <div id={"eresume"} className="fluid-container" papersize="a4">
                                    {this.state.layouts.map((item, index) => [
                                        <div className='resume_wid' key={index}>
                                            <SelectedLayoutfilter component={item} id={this.state.layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} branch_resume={this.state.branch_resume} />
                                        </div>
                                    ])}
                                </div><br />
                            </div>
                        {/* } */}

                    </div>

                    {this.props.branch_resume === null ?
                        <div className="container d-flex flex-row justify-content-center m-2">
                            <Button className="update_resume col-4 btn btn-warning">
                                <Link className="text-black text-decoration-none" to="/CreateResume">Update</Link>
                            </Button>

                            <Button className="update_resume col-4 btn btn-success text-black"
                                onClick={this.props.selectedLayout === 3 ? this.PDF_gen : this.generatePDF}>Genarate PDF
                            </Button>

                            <Button className="update_resume col-4 btn btn-info">
                                <Link className="text-black text-decoration-none" to="/">Home</Link>
                            </Button>
                        </div>
                        :
                        false
                    }
                </div>
            </>
        )
    }
}


