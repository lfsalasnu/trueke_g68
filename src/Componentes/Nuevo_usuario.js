import React,{Component} from "react";
//import Tarjetas from "./Tarjetas";

class Nuevo_usuario extends Component{
    
    constructor(){
        super()
        this.state={
            nombre:'',
            apellido:'',
            ciudad:'',
            edad:0,
            correo:'',
            cont1:'',
            cont2:''
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
                        <input onChange={this.cambio} type="text" name="nombre" className="form-control" placeholder="Nombres" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="text" name="apellido" className="form-control" placeholder="Apellidos" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="number" name="edad" className="form-control" placeholder="Edad" />
                    </div>
                    <div className="form-group mt-3">
                        <h5 className="mx-auto text-dark">Ciudad</h5>
                        <select onChange={this.cambio} name="ciudad" className="form-control">
                            <option>Barranquilla</option>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Pereira</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="email" name="correo" className="form-control" placeholder="Correo" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="password" name="cont1" className="form-control" placeholder="Contraseña" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="password" name="cont2" className="form-control" placeholder="Repetir Contraseña" />
                    </div>
                    <div><button className="btn btn-primary mt-3" type="button" onClick={this.guardar}>Crear Usuario</button></div>
                    
                </form>
            </div>
                {/* <div>{this.ntarj}</div> */}
            </div>
        );
    }
}

export default Nuevo_usuario;