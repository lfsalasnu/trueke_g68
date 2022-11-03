import React, { Component } from "react";
//import img1 from "./recursos/img1.png";
class Articulo extends Component {
    constructor(){
        super()
        this.state={
            btn1:<div>
                <a href="#" className="btn btn-primary me-3">Editar</a>
                    <a href="#" className="btn btn-danger">Eliminar</a>
            </div>,
            btn2:<a href="#" className="btn btn-success me-3">Intercambiar</a>

        }
    }

    botones(usuario){
        if (usuario=="Luis") {
            return this.state.btn1;
            
        } else {
            return this.state.btn2;
        }
    }
    
    editar(){
        alert('Editar')
    }
    eliminar(){
        alert('Eliminar')
    }
    
    render() {
          
        
          
        //console.log(datos);
          

      
      return (
          <div className="col-sm-4 mt-4 text-center">
              <div className="card bg-dark border-white text-white">
                  <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.imagen}/>
                      <div className="card-body">
                          <h5 className="card-title">{this.props.nombre}</h5>
                          <p className="card-text auto pe-2">{this.props.descripcion}</p>
                          <span className="bg bg-danger rounded-pill">Valor: {this.props.valor}</span>
                          <br/>
                          <span className="bg bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                          <br/>
                          <span className="bg bg-primary rounded-pill">Cantidad: {this.props.cantidad}</span>
                          <br/>
                          {this.botones(this.props.usuario)}
                      </div>
              </div>
          </div>
      );
  }
}

export default Articulo;