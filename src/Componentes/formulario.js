import React,{Component} from "react";
import Tarjetas from "./Articulo";

class Formulario extends Component{
    
    constructor(){
        super()
        this.state={
            nombre:'',
            descripcion:'',
            valor:'bajo',
            cantidad:0,
            usuario:'',
            imagen:''
        }
        this.ntarj=<h1>Hola</h1>;
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
        //console.log(this.state);
    }

    guardar(){
        this.ntarj=<h1>{this.state}</h1>;//<Tarjetas/>;
        this.render();
        alert("Guardar");
    }

    render(){
        return(
            <div>
            <div className="card w-50 m-auto bg-light mt-3">
                <h1 className="mx-auto text-primary">Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input onChange={this.cambio} type="text" name="nombre" className="form-control" placeholder="Nombre Articulo" />
                    </div>
                    <div className="form-group mt-3">
                        <textarea onChange={this.cambio} type="text" name="descripcion" className="form-control" placeholder="Descripción Articulo" rows={3}></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="text" name="usuario" className="form-control" placeholder="Usuario" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="number" name="cantidad" className="form-control" placeholder="Cantidad" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="text" name="imagen" className="form-control" placeholder="Imagen tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <h5 className="text-dark">Valor</h5>
                        <select onChange={this.cambio} name="valor" className="form-control">
                            <option>Bajo</option>
                            <option>Medio</option>
                            <option>Alto</option>
                        </select>
                    </div>
                    <div><button className="btn btn-primary mt-3" type="button" onClick={this.guardar}>Crear Articulo</button></div>
                    
                </form>
            </div>
                {/* <div>{this.ntarj}</div> */}
            </div>
        );
    }
}

export default Formulario;