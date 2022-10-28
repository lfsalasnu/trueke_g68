import React,{Component} from "react";
//import Tarjetas from "./Tarjetas";

class Inicio_sesion extends Component{
    
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
                <h1 className="mx-auto text-primary">Inicio Sesión</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input onChange={this.cambio} type="email" name="correo" className="form-control" placeholder="Correo Electrónico" />
                    </div>
                    <div className="form-group mt-3">
                        <input onChange={this.cambio} type="password" name="clave" className="form-control" placeholder="Digite su clave" />
                    </div>
                    <div><button className="btn btn-primary mt-3 d-grid gap-2 col-4 mx-auto" type="button" onClick={this.guardar}>Iniciar Sesión</button></div>
                    <div className="text-dark fs-6 mx-auto mt-3 gap-2 col-6"> No tienes una cuenta?, crea una <a href="#">aquí</a> </div>
                </form>
            </div>
                {/* <div>{this.ntarj}</div> */}
            </div>
        );
    }
}

export default Inicio_sesion;