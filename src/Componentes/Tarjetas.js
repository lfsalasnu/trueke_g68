import React, { Component } from "react";
//import img1 from "./recursos/img1.png";
class Tarjetas extends Component {
    editar(){
        alert('Editar')
    }
    eliminar(){
        alert('Eliminar')
    }
    
    render() {
        //let ima=require("./recursos/img1.png");
        //this.props.imagen
        //let ima process.env.PUBLIC_URL
        return (
            <div className="col-sm-4 mt-4">
                <div className="card" key={this.props.i}>
                    <img src={process.env.PUBLIC_URL+this.props.imagen} height="300" width="auto" className="card-img-top" alt={this.props.i} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="bg bg-pill bg-danger rounded-pill ml-4">
                            Prioridad {this.props.prioridad}
                        </span>
                        <p>
                        Responsable {this.props.responsable}
                        </p>
                        
                        <button className="btn btn-primary me-2" onClick={this.editar}>Editar</button>
                        <button className="btn btn-danger" onClick={this.eliminar}>Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarjetas;