import React,{Component} from "react";
//import Tarjetas from "./Tarjetas";

class Nuevo_usuario extends Component{
    
    constructor(){
        super()
        this.state={
            titulo:'',
            descripcion:'',
            prioridad:'baja',
            numero:0,
            responsable:'',
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
                <h1 className="mx-auto text-primary">Nuevo Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input onChange={this.cambio} type="text" name="titulo" className="form-control" placeholder="Titulo tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <textarea onChange={this.cambio} type="text" name="descripcion" className="form-control" placeholder="Descripción tarjeta" rows={3}></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="text" name="responsable" className="form-control" placeholder="Responsable tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="number" name="numero" className="form-control" placeholder="numero tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="text" name="imagen" className="form-control" placeholder="Imagen tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <h5 className="text-white">Prioridad</h5>
                        <select onChange={this.cambio} name="prioridad" className="form-control">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div><button className="btn btn-primary mt-3" type="button" onClick={this.guardar}>Guardar</button></div>
                    
                </form>
            </div>
                {/* <div>{this.ntarj}</div> */}
            </div>
        );
    }
}

export default Nuevo_usuario;