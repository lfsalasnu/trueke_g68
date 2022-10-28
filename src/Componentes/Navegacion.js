import React, { Component } from "react";
import App from "../App";
class Navegacion extends Component {
    render() {
        return (
            <div className="mx-auto navbar-brand">
                <ul className="nav nav-tabs bg-dark flex-grow-1" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab" data-bs-toggle="tab" data-bs-target="#enlace4-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                    </li>

                    <form className="d-flex right d-block" role="search">
                        <input className="form-control me-2 mb-1 ms-5" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-primary me-2 mb-1" type="submit">Buscar</button>
                    </form>
                    <ul>
                    <li className="nav-item" role="presentation">
                        <h6 className="ms-5 float-right text-primary">Usuario No identificado</h6>    
                    </li>
                    </ul>
                    
                </ul>
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <App />
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <h1 className="text-white">{this.props.formularioct}</h1>
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <h1 className="text-white">{this.props.inicio_sesion}</h1>
                    </div>
                    <div className="tab-pane fade" id="enlace4-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <h1 className="text-white">{this.props.nuevo_usuario}</h1>
                    </div>
                </div>



            </div>
        );
    }
}

export default Navegacion;