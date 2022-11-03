import React,{Component} from "react";
import Datos from './Datos.json';
import Articulo from "./Articulo";
class Cargar extends Component{
    constructor(){
        super();
        this.state={Datos};
        //console.log(this.state.datos);
    }
    render(){
        const datos= this.state.Datos.map((dato)=>{return(
        <Articulo nombre={dato.nombre} descripcion={dato.descripcion} imagen={dato.imagen} valor={dato.valor} cantidad={dato.cantidad} usuario={dato.usuario}/>
        );
    })
        //const datos= <Tarjeta titulo="prueba"/>
        return(
            <div className="row">
            {datos}
            </div>
            );
    }

}

export default Cargar;